# Steady

A personal PWA that helps Calum, a gay man in Brisbane, get comfortable being gay, being seen as gay and being spoken to as gay. Static files on GitHub Pages (https://turbulenceking5.github.io/steady/); no build step, no framework, no backend.

## Docs
Read the relevant file before changing that part of the project:
- [GUIDE.md](GUIDE.md): user guide.
- [context/architecture.md](context/architecture.md): file map, the `SteadyAPI` module contract, events, storage keys, service worker.
- [context/content.md](context/content.md): `content.js` schema (chats, story, practice), placeholders, cast, voice and tone.
- [CHANGELOG.md](CHANGELOG.md): add an entry for every user-visible change.

## Layout
- `index.html`: the app shell and core tabs (Today, Messages, Story, Practice), the conversation engine and Settings. Inline CSS and JS.
- `content.js`: all core text (affirmations, prompts, chats, story, practice).
- `wardrobe.js`: the Style tab (dress-up avatar, makeup, outfits, "wear it out" ladder, outfit reactions).
- `game.js`: XP, levels, daily quests, achievements, celebrations.
- `sw.js`: network-first service worker. Bump `CACHE_NAME` when cached files change, and keep `FILES` in sync with the files the page loads.

## Conventions
- Vanilla JS, no libraries, no external requests. Everything works offline once loaded.
- Storage only through `SteadyAPI.store` (keys get the `st_` prefix, which export, import and erase rely on). Wrap risky code in try/catch.
- Dates are Australia/Brisbane (UTC+10, no daylight saving). Daily picks use `SteadyAPI.day`.
- Modules only touch their own files and communicate through `SteadyAPI.on/emit`.
- Must work at 390px with no horizontal scroll, in light and dark mode, and respect `prefers-reduced-motion`.
- Test in headless Chromium (Playwright is pre-installed) before pushing: walk every conversation path and check for console errors.

## Content boundaries
- Affirming and warm. This app exists to make being gay feel normal and safe.
- No sexual or 18+ content, no fetish elements (including tickling), and no scenes where people mock or humiliate him for being gay or feminine. Hard reactions (e.g. Archie's angry branch, the Practice pushback scenarios) are allowed only when the focus is on him handling them, with a debrief.
- Style and makeup are framed as personal self-expression for a gay man, not feminisation or transformation.
- No family members (no Mum, Nan or parents) anywhere in the app.
- Rachel is Korean and writes natural second-language English. Never a caricature or comedic broken English.
- Support lines (QLife 1800 184 527, 3pm–midnight; Open Doors; Lifeline 13 11 14; 000) should be re-checked if edited.
