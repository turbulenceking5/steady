# Steady

A personal PWA that helps Calum, a gay man in Brisbane, get comfortable being gay, being seen as gay and being spoken to as gay. Static files on GitHub Pages (https://turbulenceking5.github.io/steady/); no build step, no framework, no backend.

## Docs
Read the relevant file before changing that part of the project:
- [GUIDE.md](GUIDE.md): user guide.
- [context/architecture.md](context/architecture.md): file map, helpers, storage keys, conversation engine, service worker.
- [context/content.md](context/content.md): `content.js` schema (routes, story), placeholders, cast, voice and tone.
- [context/dialogue.md](context/dialogue.md): how characters text. Realistic and blunt, not AI-sounding or always nice. Follow it for every conversation.
- [CHANGELOG.md](CHANGELOG.md): add an entry for every user-visible change.

## Layout
- `index.html`: the app shell, the Story (the whole app), the conversation engine and Settings. Inline CSS and JS.
- `content.js`: all the story text (routes and chapters).
- `sw.js`: network-first service worker. Bump `CACHE_NAME` when cached files change, and keep `FILES` in sync with the files the page loads.

## Conventions
- Vanilla JS, no libraries, no external requests. Everything works offline once loaded.
- Storage only through `store` in index.html (keys get the `st_` prefix, which export, import and erase rely on). Wrap risky code in try/catch.
- Dates are Australia/Brisbane (UTC+10, no daylight saving).
- Must work at 390px with no horizontal scroll, in light and dark mode, and respect `prefers-reduced-motion`.
- Test in headless Chromium (Playwright is pre-installed) before pushing: walk every conversation path and check for console errors.

## Content boundaries
- Affirming and warm. This app exists to make being gay feel normal and safe.
- Hard reactions (e.g. Archie's angry branch) are allowed only when the focus is on him handling them, with a debrief.
- Style and makeup are framed as personal self-expression for a gay man, not feminisation or transformation.
- No family members (no Mum, Nan or parents) anywhere in the app.
- Support lines (QLife 1800 184 527, 3pm–midnight; Open Doors; Lifeline 13 11 14; 000) should be re-checked if edited.
