# Steady

A small, private app for getting comfortable being gay: being seen as gay and being spoken to as gay, through a story.

**Story** goes from still being in the closet with Archie, through coming out, to six months with your boyfriend. Pick a girl to date: each one's story goes date by date until she works out you're gay and goes off with a straight guy. Finish a chapter and the next one opens straight away. Pick boy clothes on her first date and her story goes a different way. His name is set in Settings.

Your progress stays in your browser's localStorage on your device (keys start with `st_`). Nothing is sent anywhere. Settings has export, import and erase, plus Australian support lines. **Hide** covers the screen with a shopping list; double-tap it to come back.

## Running it
Static files, no build step. Open `index.html` directly, or serve the folder and install it to your home screen (it works offline once loaded).

## Editing content
All text lives in `content.js`: the story routes and chapters ([context/routes.md](context/routes.md) lists them in order). `{name}` and `{bf}` become the names set in Settings. In group chats a message can be `{ from, text }`.

Run `node test/validate-content.cjs` and `node test/play.cjs` before pushing ([context/testing.md](context/testing.md)).

See [GUIDE.md](GUIDE.md) for the user guide and [CLAUDE.md](CLAUDE.md) and [context/](context/) for how it's built.
