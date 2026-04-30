# Project Rules — Static Multilingual Website

## Stack

* HTML5 (semantic)
* CSS3 (single global stylesheet)
* Minimal vanilla JavaScript

No frameworks. No libraries. No build tools.

---

## Structure

/site
├── /assets/css/styles.css
├── /assets/images/
├── /it
│   ├── index.html
│   ├── azienda.html
│   ├── trading.html
│   ├── servizi.html
│   ├── contatti.html
├── /en
│   ├── index.html
│   ├── company.html
│   ├── trading.html
│   ├── services.html
│   ├── contact.html

---

## Language Rules

* Italian is primary
* English is secondary
* Pages are duplicated per language
* Slugs are native per language

Mapping:

* azienda ↔ company
* trading ↔ trading
* servizi ↔ services
* contatti ↔ contact

---

## Layout

All pages must share the same structure:

* header (logo left, nav right, language switch)
* main
* footer

Navigation:

* Home
* Azienda / Company
* Trading
* Servizi / Services
* Contatti / Contact

---

## Language Switching

* Implement in vanilla JavaScript
* Detect current language from URL (`/it/` or `/en/`)
* Use a central slug mapping object
* Redirect to equivalent page in other language

Do NOT hardcode per-page links.

---

## Styling

* Single CSS file
* Use flexbox
* Clean, minimal, professional
* No inline styles

---

## Code Quality

* Semantic HTML
* Consistent class naming
* No unnecessary complexity
* No dead code

---

## Principle

Prefer simple, predictable solutions over clever ones.

