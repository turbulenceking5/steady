# Content (`content.js`)

## Placeholders
`{name}`: his name (Settings, default "Calum"). `{bf}`: the boyfriend's name (Settings, default "Matt"). Always render text through `fill()`.

## Shape
```js
window.CONTENT = {
  affirmations: [string],          // daily: day % length
  prompts: [string],               // daily journal prompt: day % length
  chats: [Convo],                  // Messages; today's featured chat: (day * 3) % length
  story: [Chapter],                // Story, in order
  practice: [Scenario]             // Practice
}
Convo    = { id, contact, role, avatar, tier?, ...Node }   // tier 1-3 unlocks with game level (see below)
Chapter  = { id, title, contact?, part?, ...Node }   // contact defaults to {bf}; part starts a heading
Scenario = { id, title, who, tone, intro, ...Node }
Node     = { them: [Msg], replies?: [{ you, ...Node }], after?, debrief? }
Msg      = string | { from, text }                   // from = sender in group chats
```
- IDs must be unique and never change: progress is stored by id.
- Every reply is a fine reply. There's no wrong answer and no scoring.
- `after` is a narrator note shown when the conversation ends (a branch's own takes priority). `debrief` is a short "worth remembering" note.

## Voice tiers
Chats with `tier` only show once he reaches it: 0 Just out, 1 Finding your voice (game level 3+), 2 Out & proud (5+), 3 Full flamboyance (7+). At each tier his reply options get camper and the girls treat him more as their gay best friend. Tier 1 holds the crush confessions (Jemima, Nicole, Priya: "bullet dodged, you're better as my gay best friend"), which are affectionate teasing, never put-downs.

## Cast
Mostly women. Men appear only as dates, crushes or partners.
- **Friends:** Jess, Priya, Dani (gym), Chloe (flatmate), Sam (coworker, she).
- **Uni girls:** Nicole, Ailisha, Jemima.
- **Family:** Mum, Nan.
- **Exes:** Rachel (Korean; natural second-language English with a little Korean, warm, never a caricature) and Archie (his girlfriend in Story Part 1).
- **Men:** `{bf}` (the boyfriend, Story Part 2) and Alex (a dating-app match).

## Story
- **Part 1, "Before"** (c1–c4): in the closet with Archie, confiding in Nicole, the honest talk (kind and angry branches), a few weeks later.
- **Part 2, "{bf}"** (s1–s10): first message through to six months.

## Voice
Warm, casual, Australian, with Brisbane places (James St, the Valley, West End, South Bank, New Farm, Paddington). Short text-message lines. Use emoji sparingly. Use `{name}` naturally, especially from the girls. See CLAUDE.md for content boundaries.
