# Static Website Specification — Import/Export Company

## Overview

Build a **clean, minimal static website** for an import-export company.

The implementation must use:

* HTML5 (semantic)
* CSS3 (single global stylesheet)
* Minimal vanilla JavaScript (only where necessary)

No frameworks, no build tools, no unnecessary complexity.

---

## Core Principles

* Simplicity over cleverness
* Maintainability over abstraction
* Consistency across all pages
* No duplication beyond what is required for static multilingual support
* Clean, readable code (this is critical)

---

## Project Structure

```
/site
│
├── /assets
│   ├── /css
│   │     styles.css
│   └── /images
│
├── /it
│   ├── index.html
│   ├── azienda.html
│   ├── trading.html
│   ├── servizi.html
│   ├── contatti.html
│
├── /en
│   ├── index.html
│   ├── company.html
│   ├── trading.html
│   ├── services.html
│   ├── contact.html
│
```

---

## Language Strategy

* Italian is the primary language
* English is secondary
* Each language has its own folder (`/it`, `/en`)
* Pages are duplicated per language

### Slug Rules

Italian:

* index.html
* azienda.html
* trading.html
* servizi.html
* contatti.html

English:

* index.html
* company.html
* trading.html
* services.html
* contact.html

### Mapping (IMPORTANT)

| Italian  | English  |
| -------- | -------- |
| index    | index    |
| azienda  | company  |
| trading  | trading  |
| servizi  | services |
| contatti | contact  |

This mapping must be respected in navigation and language switching.

---

## Layout Requirements

### Header

* Full-width horizontal strip
* Logo aligned LEFT
* Navigation with language switch aligned RIGHT

Navigation items:

Italian:

* Home
* Azienda
* Trading
* Servizi
* Contatti

English:

* Home
* Company
* Trading
* Services
* Contact

Include a **language switch control** in the header.

---

## Language Switching (CRITICAL)

Implement a reusable JavaScript function that:

1. Detects current language from URL (`/it/` or `/en/`)
2. Maps current page slug to the equivalent slug in the other language
3. Redirects to the correct page

### Example Behavior

* `/it/azienda.html` → `/en/company.html`
* `/en/services.html` → `/it/servizi.html`

### Constraints

* DO NOT hardcode links per page
* DO use a central mapping object in JavaScript
* Must work across all pages automatically

---

## Page Requirements

Create the following pages in BOTH languages:

* Home (index)
* Company / Azienda
* Trading

Each page must:

* Use the same layout structure
* except the hero, which is half the screen height on the index page and 30% of screen height on all other pages
* Include:

  * header
  * main content
  * footer
* Use semantic HTML (`header`, `nav`, `main`, `section`, `footer`)

---

## Styling Requirements

* Single CSS file: `/assets/css/styles.css`
* No inline styles
* No CSS frameworks

### Design Direction

* Minimal
* Professional
* Business-oriented
* Clean spacing
* Clear typography hierarchy

### Layout Techniques

* Use Flexbox
* Keep consistent spacing (margin/padding system)
* Avoid unnecessary visual complexity

---

## JavaScript Rules

* Keep JavaScript minimal

* Only use JS for:

  * language switching

* No libraries

* No frameworks

---

## Code Quality

* Clear, readable HTML structure
* Consistent class naming (simple, not overengineered)
* Proper indentation
* No dead code
* No duplication beyond necessary multilingual pages

---

## Deliverables

Claude should generate:

1. Folder structure
2. At least:

   * one Italian page (complete)
   * one English page (complete)
3. Shared CSS file
4. JavaScript for language switching
5. Example navigation implementation
6. Explanation of how the language system works

---

## Design Tone

The company is:

* international
* logistics / trading focused
* reliability-oriented

The UI should feel:

* structured
* trustworthy
* calm and professional
* let's go with black, white and gold accent color scheme

---

## Anti-Goals (DO NOT DO)

* No frameworks (React, Vue, etc.)
* No CSS libraries (Bootstrap, Tailwind, etc.)
* No animations unless extremely subtle
* No overengineering
* No unnecessary JavaScript

---

## Final Note

Prefer boring, predictable, maintainable solutions over clever or complex ones.

This is a small business website — clarity and reliability are more important than technical sophistication.

