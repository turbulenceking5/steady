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
Node     = { them: [Msg], replies?: [{ you, ...Node }], after?, debrief?, gaydar?, spark? }
Msg      = string | { from, text } | { note }        // from = sender in group chats; note = narration (what she does), mainly for irl scenes
```
- IDs must be unique and never change: progress is stored by id.
- Every reply is a fine reply. There's no wrong answer and no scoring.
- `after` is a narrator note shown when the conversation ends (a branch's own takes priority). `debrief` is a short "worth remembering" note.
- `gaydar` (0–100) on a date chapter shows a "How gay {girl} thinks you are" bar when it ends. Set a base on the chapter and raise it on the branches where he says it (100 = he told her). The deepest branch that sets it wins. A second bar, "How into you {girl} is", shows `spark` (deepest branch wins) or, by default, 100 minus the gaydar: the more she suspects, the less she fancies him. `gaydarSays` is her teasing one-liner under the bars. `gaydarWho` names the girl when `contact` is a group chat (c6c: Tayla). Labels come from `gaydarLabel()` in index.html.

## Voice tiers
Chats with `tier` only show once he reaches it: 0 Just out, 1 Finding your voice (game level 3+), 2 Out & proud (5+), 3 Full flamboyance (7+). At each tier his reply options get camper and the girls treat him more as their gay best friend. Tier 1 holds the crush confessions (Jemima, Nicole, Priya, Ailisha): long, heartfelt chats about how they felt back then and how they see him now. Each girl has her own way of saying it's better this way, so don't repeat a stock phrase across them. It's affectionate teasing, never a put-down.

## Cast
Mostly women, and no family members. Men appear only as dates, crushes or partners.
- **Friends:** Jess, Priya, Dani (gym), Chloe (flatmate), Sam (coworker, she).
- **Uni girls:** Nicole, Ailisha, Jemima.
- **Dates in Part 1:** Hannah (Jess's friend), Mia (Sam's cousin), Ella (Hinge), Tayla and her friends Bec and Steph, Georgie (climbing gym), Lucy (seeing him for three weeks) and her friends Kayla and Ruby, Jade (Hinge) and her friend Mel, Olivia (Bumble), Bianca (met at a housewarming; friends Shay and Imogen), Zoe (girlfriend of six weeks; friends Brooke, Jayden, Tash) and Sophie (girlfriend of three months; friend Kirra). They work out he's gay, are put off by it, and gossip. Keep their texts plain and unpolished: lowercase, short, no therapy-speak.
- **Exes:** Rachel (Korean; natural second-language English with a little Korean, warm, never a caricature) and Archie (his girlfriend in Story Part 1).
- **Men:** `{bf}` (the boyfriend, Story Part 2) and Alex (a dating-app match; `alex-beach` is their beach date). The guys can be playful and affectionate, e.g. pulling his socks or sandals off to tickle his feet, kept light and non-sexual, and they always stop when he says stop.

## Story
Story is split into **routes** (`routes: [{ id, name, blurb, part, lock? }]`), and every chapter has a `route`. Chapters in a route open one after another as soon as the previous one is finished. Routes with `lock` (Jess, {bf}) open once any other route is finished.
- **Archie** (c1, c1b, c3, c4): three years together. She works out he's gay, leaves him for Josh from work (touch footy, polo shirts), then tries to set him up with Josh's mate Ryan. He never comes out to her.
- **Nicole** (c2, nicole-2, nicole-3): she never asks and he never tells her; she just starts treating him as one of the girls (girls' night, Sephora, rating her Hinge guys). `friend: true` hides the attraction bar.
- **The girls** (Hannah, Mia, Ella, Tayla, Georgie, Lucy, Jade, Olivia, Zoe, Sophie, Bianca): four chapters each (Bianca five; Hannah, Ella, Georgie and Lucy also have a barefoot chapter before the end). Date one is low-key; each date he's a bit gayer and more femme in how he dresses and how he talks; the third chapter is the big one (the older c5–c6m chapters); the last (`<name>-end`) is her with a straight guy who doesn't crossdress (Brodie the sparky, Lachlan the accountant, Connor the rugby player, Mitch, Ben, Hamish, Riley, James, Kyle, Nathan, Liam).
- **Trying to win her back:** every end chapter has a branch where he goes up to the new guy to say he wants her back. He comes across very meek and obviously gay (says sorry, talks in a small voice, holds his drink with both hands), the guy gives him butterflies (he loses his words, goes red, compliments his arms or his shirt), and the guy knows he's no threat and teases him for it: cocky, laughing, calling him "champ", "princess" or "sweetheart", offering him something pink with a little straw, announcing it to his mates. She says no but thinks he's adorable. In `mia-end` he turns up at her flat and she makes him take his shoes and socks off at the door (new floors), which shows his glittery lilac toes in front of Lachlan. Nobody is cruel to him.
- **Barefoot chapters** (`hannah-feet`, `ella-beach`, `georgie-feet`, `lucy-feet`, `tayla-feet`, `olivia-feet`, `zoe-feet`, `sophie-feet`, `bianca-feet`): in-person scenes where he has to take his shoes off (a shoes-off house, the beach, climbing shoes, a tatami room) and his painted toes are on show in front of a guy who wants her (Dylan, Hayden, Corey, Fraser). That guy is cocky and teasing, makes a show of not seeing him as competition, and gets closer to her through the chapter. These guys aren't the end-chapter boyfriends. In the newer five (Jordan at Steph's pool, Marcus on the boat, Tyler at Brooke's trivia night, Ethan at Kirra's game night, and Jake at Bianca's pedicure night, who Bianca is setting him up with) the guy grabs his ankle and tickles his feet in front of the girls, who laugh and film it. He stops the moment {name} says stop. `olivia-feet`, `zoe-feet` and `sophie-feet` come before the break-up chapter, so they sit lower on the gaydar. Avoid narrator punchlines ("the least threatening nod in history") and the "you meant to X, what came out was Y" pattern.
- **Tickling with a choice** (`archie-feet` with Josh at Archie's work pool party, `mia-feet` with Theo at Hayley's, `jade-feet` with Sean in Mel's hot tub): the guy grabs his foot and he picks whether to **resist** (keep a straight face) or **give in** to the giggles, then whether to hold it or crack (resist) or beg him to stop or let him keep going (give in). Each leaf sets `spark`: holding it in keeps her interested, giggling drops it, and letting him keep going drops it most (and nudges the gaydar up). The earlier tickle chapters (`tayla-feet`, `olivia-feet`, `zoe-feet`, `sophie-feet`) set `spark` on their branches the same way.
- **Drag endings** (`<route>-drag`, "Encore: Lola Lilac"): the last chapter of every girl's route, Archie's included. Months later she's in the crowd at a drag show (with her new boyfriend and her friends) and the queen is him, as Lola Lilac. It's mortifying for him when she recognises him, but the crowd, her boyfriend and the debrief are on his side; three replies each (freeze or blush, commit, or pull someone in). Bianca's is the exception: she's his drag mother in the front row.
- **Jess** (c7, locked): what everyone's been saying. Locked routes stay open once any of their chapters is read.
- **{bf}** (s1–s10, locked): first message through to six months.

## Voice tiers
Chats with `tier` only show once he reaches it: 0 Just out, 1 Finding your voice (game level 3+), 2 Out & proud (5+), 3 Full flamboyance (7+). At each tier his reply options get camper and the girls treat him more as their gay best friend. Tier 1 holds the crush confessions (Jemima, Nicole, Priya, Ailisha): long, heartfelt chats about how they felt back then and how they see him now. Each girl has her own way of saying it's better this way, so don't repeat a stock phrase across them. It's affectionate teasing, never a put-down.

## Cast
Mostly women, and no family members. Men appear only as dates, crushes or partners.
- **Friends:** Jess, Priya, Dani (gym), Chloe (flatmate), Sam (coworker, she).
- **Uni girls:** Nicole, Ailisha, Jemima.
- **Dates in Part 1:** Hannah (Jess's friend), Mia (Sam's cousin), Ella (Hinge), Tayla and her friends Bec and Steph, Georgie (climbing gym), Lucy (seeing him for three weeks) and her friends Kayla and Ruby, Jade (Hinge) and her friend Mel, Olivia (Bumble), Bianca (met at a housewarming; friends Shay and Imogen), Zoe (girlfriend of six weeks; friends Brooke, Jayden, Tash) and Sophie (girlfriend of three months; friend Kirra). They work out he's gay, are put off by it, and gossip. Keep their texts plain and unpolished: lowercase, short, no therapy-speak.
- **Exes:** Rachel (Korean; natural second-language English with a little Korean, warm, never a caricature) and Archie (his girlfriend in Story Part 1).
- **Men:** `{bf}` (the boyfriend, Story Part 2) and Alex (a dating-app match; `alex-beach` is their beach date). The guys can be playful and affectionate, e.g. pulling his socks or sandals off to tickle his feet, kept light and non-sexual, and they always stop when he says stop.

## Story
- **Part 1, "Before"** (c1, c1b, c2–c6, c6b–c6m, c7): in the closet with Archie, dinner where he wears makeup and Archie is uncomfortable, confiding in Nicole, the honest talk (kind and angry branches), a few weeks later, then dates with Hannah, Mia, Ella (c6b, in a dress), Tayla (c6c, a group chat where her friend asks in the wrong chat), Georgie (c6d) and Lucy (c6e: he looks gayer each date, her friends keep asking her if he's gay, then she asks him) Jade (c6f: a picnic in women's sandals and painted toes), and three in-person scenes: Olivia (c6g, first dinner date where she talks about his painted toes and tells him to date guys), Zoe (c6h, breaks up with him in the car after a barbecue) and Sophie (c6i, saw a video of him at the Wickham in a skirt and breaks up with him), and the Bianca arc (c6j–c6m: four dates where she keeps encouraging him to dress gayer, from tinted gloss to a lilac skirt, lashes and heels, and goes from fancying him to being his gay best friend who wants to set him up with Shay's cousin Jake), where he goes in makeup and feminine clothes and they clock he's gay and are not nice about it, then Jess tells him what they said. Chapters can have an `intro` (scene-setting note) and the dates use `after` for what the girl is thinking.
- **Part 2, "{bf}"** (s1–s10): first message through to six months (no family chapter), including s6b, wearing women's flip-flops and painted toes to the markets, and s7b, a lazy Sunday where he pulls your socks off and tickles your feet.

## Voice
Warm and casual. It's set in Brisbane (James St, the Valley, West End, South Bank, New Farm, Paddington), but people talk in plain, neutral English: no Aussie slang ("mate", "g'day", "arvo", "heaps", "reckon", "thongs", "footy", "snag", "sunnies"), and no local brands or footy teams. Guys say "man" or "buddy". The girls' chats can run long: several messages per turn, real paragraphs about how they feel. Other chats stay short. Use emoji sparingly. Use `{name}` naturally, especially from the girls. See [dialogue.md](dialogue.md) for how people text (realistic, not always nice) and CLAUDE.md for content boundaries.

## Outfit picks
A date chapter can have `outfits: [{ label, intro?, gaydar?, them?, at? }]` (usually toned down / the usual / further). The pick replaces the chapter `intro`, inserts `them` lines (her reaction) after her first line (or at index `at`), and adds `gaydar` (a delta) to the final value, capped at 99 unless a branch reached 100. Every option must keep whatever the dialogue mentions (e.g. Jade's heeled sandals), so options add or soften around it rather than removing it. `outfitPrompt` overrides "What are you wearing?".
