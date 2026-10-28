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
Node     = { them: [Msg], replies?: [{ you, ...Node }], after?, debrief?, gaydar? }
Msg      = string | { from, text } | { note }        // from = sender in group chats; note = narration (what she does), mainly for irl scenes
```
- IDs must be unique and never change: progress is stored by id.
- Every reply is a fine reply. There's no wrong answer and no scoring.
- `after` is a narrator note shown when the conversation ends (a branch's own takes priority). `debrief` is a short "worth remembering" note.
- `gaydar` (0–100) on a date chapter shows a "How gay {girl} thinks you are" bar when it ends. Set a base on the chapter and raise it on the branches where he says it (100 = he told her). The deepest branch that sets it wins. `gaydarWho` names the girl when `contact` is a group chat (c6c: Tayla). Labels come from `gaydarLabel()` in index.html.

## Voice tiers
Chats with `tier` only show once he reaches it: 0 Just out, 1 Finding your voice (game level 3+), 2 Out & proud (5+), 3 Full flamboyance (7+). At each tier his reply options get camper and the girls treat him more as their gay best friend. Tier 1 holds the crush confessions (Jemima, Nicole, Priya, Ailisha): long, heartfelt chats about how they felt back then and how they see him now. Each girl has her own way of saying it's better this way, so don't repeat a stock phrase across them. It's affectionate teasing, never a put-down.

## Cast
Mostly women, and no family members. Men appear only as dates, crushes or partners.
- **Friends:** Jess, Priya, Dani (gym), Chloe (flatmate), Sam (coworker, she).
- **Uni girls:** Nicole, Ailisha, Jemima.
- **Dates in Part 1:** Hannah (Jess's friend), Mia (Sam's cousin), Ella (Hinge), Tayla and her friends Bec and Steph, Georgie (climbing gym), Lucy (seeing him for three weeks) and her friends Kayla and Ruby, Jade (Hinge) and her friend Mel, Olivia (Bumble), Zoe (girlfriend of six weeks; friends Brooke, Jayden, Tash) and Sophie (girlfriend of three months; friend Kirra). They work out he's gay, are put off by it, and gossip. Keep their texts plain and unpolished: lowercase, short, no therapy-speak.
- **Exes:** Rachel (Korean; natural second-language English with a little Korean, warm, never a caricature) and Archie (his girlfriend in Story Part 1).
- **Men:** `{bf}` (the boyfriend, Story Part 2) and Alex (a dating-app match; `alex-beach` is their beach date). The guys can be playful and affectionate, e.g. pulling his socks or sandals off to tickle his feet, kept light and non-sexual, and they always stop when he says stop.

## Story
- **Part 1, "Before"** (c1, c1b, c2–c6, c6b–c6i, c7): in the closet with Archie, dinner where he wears makeup and Archie is uncomfortable, confiding in Nicole, the honest talk (kind and angry branches), a few weeks later, then dates with Hannah, Mia, Ella (c6b, in a dress), Tayla (c6c, a group chat where her friend asks in the wrong chat), Georgie (c6d) and Lucy (c6e: he looks gayer each date, her friends keep asking her if he's gay, then she asks him) Jade (c6f: a picnic in women's sandals and painted toes), and three in-person scenes: Olivia (c6g, first dinner date where she talks about his painted toes and tells him to date guys), Zoe (c6h, breaks up with him in the car after a barbecue) and Sophie (c6i, saw a video of him at the Wickham in a skirt and breaks up with him), where he goes in makeup and feminine clothes and they clock he's gay and are not nice about it, then Jess tells him what they said. Chapters can have an `intro` (scene-setting note) and the dates use `after` for what the girl is thinking.
- **Part 2, "{bf}"** (s1–s10): first message through to six months (no family chapter), including s6b, wearing women's flip-flops and painted toes to the markets, and s7b, a lazy Sunday where he pulls your socks off and tickles your feet.

## Voice
Warm, casual, Australian, with Brisbane places (James St, the Valley, West End, South Bank, New Farm, Paddington). The girls' chats can run long: several messages per turn, real paragraphs about how they feel. Other chats stay short. Use emoji sparingly. Use `{name}` naturally, especially from the girls. See [dialogue.md](dialogue.md) for how people text (realistic, not always nice) and CLAUDE.md for content boundaries.
