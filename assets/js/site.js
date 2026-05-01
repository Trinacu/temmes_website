(function () {
  // --- Theme ---
  var themeList = [
    { id: 'classic', label: 'Classic' },
    { id: 'ocean',   label: 'Ocean'   },
    { id: 'forest',  label: 'Forest'  },
    { id: 'slate',   label: 'Slate'   },
    { id: 'ivory',   label: 'Ivory'   },
    { id: 'steel',   label: 'Steel'   }
  ];

  var currentTheme = localStorage.getItem('temmes-theme') || 'classic';

  // Apply saved theme immediately to avoid flash
  if (currentTheme !== 'classic') {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  // --- Slug map ---
  var slugMap = [
    ['index',             'index'],
    ['azienda',           'company'],
    ['trading',           'trading'],
    ['trading-prodotti',  'trading-products'],
    ['trading-paesi',     'trading-countries'],
    ['servizi',           'services'],
    ['contatti',          'contact'],
    /* TEMPORARY — dev layout comparison; remove before launch */
    ['index2',            'index2'],
    ['index3',            'index3'],
    ['index4',            'index4'],
    ['index5',            'index5'],
    ['index6',            'index6']
  ];

  var nav = {
    it: [
      {
        slug: 'index',    label: 'Home',     href: '/it/index.html',
        children: [
          { slug: 'index2', label: 'Layout 2', href: '/it/index2.html' },
          { slug: 'index3', label: 'Layout 3', href: '/it/index3.html' },
          { slug: 'index4', label: 'Layout 4', href: '/it/index4.html' },
          { slug: 'index5', label: 'Layout 5', href: '/it/index5.html' },
          { slug: 'index6', label: 'Layout 6', href: '/it/index6.html' }
        ]
      },
      { slug: 'azienda',  label: 'Azienda',  href: '/it/azienda.html' },
      {
        slug: 'trading',  label: 'Trading',  href: '/it/trading.html',
        children: [
          { slug: 'trading-prodotti', label: 'Prodotti', href: '/it/trading-prodotti.html' },
          { slug: 'trading-paesi',    label: 'Paesi',    href: '/it/trading-paesi.html' }
        ]
      },
      { slug: 'servizi',  label: 'Servizi',  href: '/it/servizi.html' },
      { slug: 'contatti', label: 'Contatti', href: '/it/contatti.html' }
    ],
    en: [
      {
        slug: 'index',    label: 'Home',    href: '/en/index.html',
        children: [
          { slug: 'index2', label: 'Layout 2', href: '/en/index2.html' },
          { slug: 'index3', label: 'Layout 3', href: '/en/index3.html' },
          { slug: 'index4', label: 'Layout 4', href: '/en/index4.html' },
          { slug: 'index5', label: 'Layout 5', href: '/en/index5.html' },
          { slug: 'index6', label: 'Layout 6', href: '/en/index6.html' }
        ]
      },
      { slug: 'company',  label: 'Company', href: '/en/company.html' },
      {
        slug: 'trading',  label: 'Trading', href: '/en/trading.html',
        children: [
          { slug: 'trading-products',  label: 'Products',  href: '/en/trading-products.html' },
          { slug: 'trading-countries', label: 'Countries', href: '/en/trading-countries.html' }
        ]
      },
      { slug: 'services', label: 'Services', href: '/en/services.html' },
      { slug: 'contact',  label: 'Contact',  href: '/en/contact.html' }
    ]
  };

  function getLang() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    for (var i = 0; i < parts.length; i++) {
      if (parts[i] === 'en') return 'en';
      if (parts[i] === 'it') return 'it';
    }
    return 'it';
  }

  function getBase() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    for (var i = 0; i < parts.length; i++) {
      if (parts[i] === 'en' || parts[i] === 'it') {
        return i > 0 ? '/' + parts.slice(0, i).join('/') : '';
      }
    }
    return '';
  }

  function getSlug() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    return parts[parts.length - 1].replace('.html', '');
  }

  function renderHeader() {
    var lang = getLang();
    var slug = getSlug();
    var base = getBase();
    var items = nav[lang];
    var otherLang = lang === 'it' ? 'EN' : 'IT';
    var i, j, lis = '';

    for (i = 0; i < items.length; i++) {
      var item = items[i];
      var isChildActive = false;

      if (item.children) {
        for (j = 0; j < item.children.length; j++) {
          if (item.children[j].slug === slug) { isChildActive = true; break; }
        }
      }

      var isActive = item.slug === slug || isChildActive;
      var activeAttr = isActive ? ' class="active"' : '';
      var liClass = item.temp ? ' class="nav-temp"' : '';
      var li = '<li' + liClass + '><a href="' + base + item.href + '"' + activeAttr + '>' + item.label + '</a>';

      if (item.children && item.children.length) {
        li += '<ul class="nav-dropdown">';
        for (j = 0; j < item.children.length; j++) {
          var child = item.children[j];
          var childActive = child.slug === slug ? ' class="active"' : '';
          li += '<li><a href="' + base + child.href + '"' + childActive + '>' + child.label + '</a></li>';
        }
        li += '</ul>';
      }

      li += '</li>';
      lis += li;
    }

    var t, themeItems = '';
    for (t = 0; t < themeList.length; t++) {
      var th = themeList[t];
      var activeClass = th.id === currentTheme ? ' active-theme' : '';
      themeItems +=
        '<li class="' + activeClass + '" data-theme="' + th.id + '"' +
        ' onclick="setTheme(\'' + th.id + '\')">' +
        '<span class="theme-swatch theme-swatch--' + th.id + '"></span>' +
        th.label.toUpperCase() +
        '</li>';
    }

    var header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML =
      '<div class="header-inner">' +
        '<a href="' + base + '/' + lang + '/index.html">' +
          '<img src="' + base + '/assets/images/logo.png" alt="Temmes" class="logo">' +
        '</a>' +
        '<nav class="main-nav">' +
          '<ul>' + lis + '</ul>' +
          '<div class="theme-picker" id="theme-picker">' +
            '<button class="theme-btn" id="theme-btn" onclick="toggleThemePicker(event)">' +
              currentTheme.toUpperCase() +
            '</button>' +
            '<ul class="theme-dropdown">' + themeItems + '</ul>' +
          '</div>' +
          '<button class="lang-switch" onclick="switchLanguage()">' + otherLang + '</button>' +
        '</nav>' +
      '</div>';

    document.body.insertBefore(header, document.body.firstChild);
  }

  function toggleThemePicker(e) {
    e.stopPropagation();
    var picker = document.getElementById('theme-picker');
    picker.classList.toggle('open');
  }

  document.addEventListener('click', function (e) {
    var picker = document.getElementById('theme-picker');
    if (picker && !picker.contains(e.target)) {
      picker.classList.remove('open');
    }
  });

  function setTheme(id) {
    currentTheme = id;
    if (id === 'classic') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', id);
    }
    localStorage.setItem('temmes-theme', id);
    var items = document.querySelectorAll('.theme-dropdown li');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle('active-theme', items[i].getAttribute('data-theme') === id);
    }
    var btn = document.getElementById('theme-btn');
    if (btn) btn.textContent = id.toUpperCase();
    var picker = document.getElementById('theme-picker');
    if (picker) picker.classList.remove('open');
  }

  function switchLanguage() {
    var lang = getLang();
    var slug = getSlug();
    var base = getBase();
    var i, target;

    if (lang === 'it') {
      for (i = 0; i < slugMap.length; i++) {
        if (slugMap[i][0] === slug) { target = base + '/en/' + slugMap[i][1] + '.html'; break; }
      }
    } else {
      for (i = 0; i < slugMap.length; i++) {
        if (slugMap[i][1] === slug) { target = base + '/it/' + slugMap[i][0] + '.html'; break; }
      }
    }

    if (target) window.location.href = target;
  }

  renderHeader();
  window.switchLanguage = switchLanguage;
  window.toggleThemePicker = toggleThemePicker;
  window.setTheme = setTheme;
}());
