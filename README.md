# Steady

A small, private app for getting comfortable being gay: being seen as gay, being spoken to as gay, and practising saying it.

- **Today**: a daily reminder, a mood check-in, a journal prompt and a streak.
- **Messages**: everyday texts from mates, exes, the uni group chat, coworkers and dates who know you're gay and don't make a thing of it.
- **Story**: a storyline from still being in the closet with Archie, through coming out, to six months with your boyfriend. Finish a chapter and the next one opens straight away. His name is set in Settings.
- **Style**: dress up an avatar (clothes, shoes, accessories, makeup), see how the look reads, save looks and get reactions from friends, and tick off the "wear it out" ladder in real life.
- **Progress**: XP, levels, daily quests and badges. Tap the level chip in the header.
- **Practice**: rehearse coming out or mentioning a partner, from easy chats to awkward and difficult reactions, with a short note at the end of each one.

Everything you write stays in your browser's localStorage on your device (keys start with `st_`). Nothing is sent anywhere. Settings has export, import and erase, plus Australian support lines. **Hide** covers the screen with a shopping list; double-tap it to come back.

## Running it
Static files, no build step. Open `index.html` directly, or serve the folder and install it to your home screen (it works offline once loaded).

## Editing content
All text lives in `content.js`: affirmations, journal prompts, chats, story chapters and practice scenarios. `{name}` and `{bf}` become the names set in Settings. In group chats a message can be `{ from, text }`. The affirmation and prompt rotate daily (Brisbane time).

See [GUIDE.md](GUIDE.md) for the user guide and [CLAUDE.md](CLAUDE.md) and [context/](context/) for how it's built.
