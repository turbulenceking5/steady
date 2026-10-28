// All app content. {name} is replaced with the name set in Settings (or "Calum"),
// {bf} with the boyfriend's name from Settings (or "Matt").
// Conversation nodes: { them: [messages], replies: [{ you, ...node }], debrief }.
// A message is a string, { from, text } in group chats, or { note } for narration.
// Every reply is a fine reply - there is no wrong answer anywhere in here.

window.CONTENT = {
  // Story routes: pick who to date. Each girl's route takes it slowly and ends with her
  // leaving for a straight guy. Chapters in a route open one after another; `lock` routes
  // open once any other route is finished. A chapter's contact defaults to {bf}.
  routes: [
    {"id": "archie", "name": "Archie", "blurb": "Three years together. She works it out before you do.", "part": "Part 1: Before"},
    {"id": "nicole", "name": "Nicole", "blurb": "Your best friend. She knows. You haven't said a word.", "part": "Part 1: Before"},
    {"id": "hannah", "name": "Hannah", "blurb": "Jess's friend. Physio. No time for games.", "part": "Part 1: Before"},
    {"id": "mia", "name": "Mia", "blurb": "Sam's cousin. Shy. Says sorry a lot.", "part": "Part 1: Before"},
    {"id": "ella", "name": "Ella", "blurb": "Hinge. Primary teacher. A very sharp cat-eye.", "part": "Part 1: Before"},
    {"id": "tayla", "name": "Tayla", "blurb": "Netball. Loud. Her friend Steph has questions.", "part": "Part 1: Before"},
    {"id": "georgie", "name": "Georgie", "blurb": "Climbing gym. Hates games. Counts everything.", "part": "Part 1: Before"},
    {"id": "lucy", "name": "Lucy", "blurb": "Nurse. Her friends keep asking her about you.", "part": "Part 1: Before"},
    {"id": "jade", "name": "Jade", "blurb": "Hinge. Picnics. Notices feet.", "part": "Part 1: Before"},
    {"id": "olivia", "name": "Olivia", "blurb": "Bumble. Tells her sister everything.", "part": "Part 1: Before"},
    {"id": "zoe", "name": "Zoe", "blurb": "Trivia team. Her friend Brooke is a lot.", "part": "Part 1: Before"},
    {"id": "sophie", "name": "Sophie", "blurb": "Paralegal. Dry. Her friend Kirra films everything.", "part": "Part 1: Before"},
    {"id": "bianca", "name": "Bianca", "blurb": "Hypes you up. A bit gayer every date.", "part": "Part 1: Before"},
    {"id": "jess", "name": "Jess", "blurb": "What everyone's been saying about you.", "part": "Part 1: Before", "lock": true},
    {"id": "bf", "name": "{bf}", "blurb": "From the first message to six months.", "part": "Part 2: {bf}", "lock": true}
  ],

  story: [
    {
      id: "c1", route: "archie", gaydar: 10, gaydarSays: "He's just sensitive. Right? ...Right?", title: "Date night", contact: "Archie",
      intro: "You and Archie have been together three years. Her sister has started a Pinterest board for your wedding and keeps sending Archie links from it.",
      them: ["{name}, dinner at that Italian place on Friday? I booked us a table 🍝", "My sister keeps asking when we're getting engaged 😂", "she asked me at lunch today in front of everyone at the cafe. i nearly died"],
      replies: [
        { you: "Sounds good! Haha tell her to relax.",
          them: ["already did. she never listens 🙄", "shes also decided youre wearing the navy suit to hers so good luck", "love you x"],
          replies: [
            { you: "Love you too x",
              them: ["😘", "oh and wear something nice friday", "not the rugby polo pls"],
              replies: [
                { you: "I was thinking of trying something a bit different actually.", gaydar: 15, them: ["ooh different how", "like a nice shirt? you've still got that cream one with the tags on"] },
                { you: "The polo and I have been through a lot together.", them: ["{name} 😐", "it has a hole under the arm", "ive seen it. everyone's seen it"] }
              ] },
            { you: "Do we have to talk about weddings?",
              them: ["haha ok calm down its my sister's wedding", "...unless you're trying to tell me something lol", "you're not are you"],
              replies: [
                { you: "No, no. Just a long day.", them: ["ok", "you've had a lot of those lately", "anyway friday. i need wine x"] },
                { you: "Weddings just make me itchy. All those speeches.", them: ["you cried at the last one", "at the speech about the dog", "lol anyway friday x"] },
                { you: "I don't know.", gaydar: 20, them: ["you don't know what?", "{name}?", "ok youre being weird. we'll talk friday"] }
              ] }
          ] },
        { you: "Ha. Yeah. Friday's good.",
          them: ["you ok? you've been a bit off lately", "like quiet. idk", "anyway im here if somethings up x"],
          replies: [
            { you: "Just tired. Work stuff.",
              them: ["ok", "you keep saying that", "im not having a go. get some sleep xx"] },
            { you: "Can I ask you something weird?",
              them: ["yeah?", "if its about the wedding i promise im not expecting a ring lol"],
              replies: [
                { you: "Do you ever feel like you're playing a part?", gaydar: 20,
                  them: ["at work? all the time", "wait like with us?", "no. do you??"],
                  replies: [
                    { you: "Sometimes.", them: ["oh", "ok thats kind of a big thing to say over text {name}", "can we talk friday. properly", "love you"] },
                    { you: "No. Forget it. I'm being dramatic.", them: ["ok weirdo", "friday x"] }
                  ] },
                { you: "Never mind. It's nothing.", them: ["its never nothing with you", "but ok x"] }
              ] }
          ] },
        { you: "Can we go somewhere else this time?",
          them: ["why?? you love that place", "you said the tiramisu changed your life"],
          replies: [
            { you: "The waiter there keeps staring at me.", gaydar: 15, them: ["the tall one? lol hes probably just bored", "or he thinks youre cute 😂", "we're going. i already booked"] },
            { you: "Fine. But I'm getting my own tiramisu. I'm not sharing again.", them: ["you ate most of mine last time", "7pm. love you x"] }
          ] }
      ],
      after: "On Friday you open your wardrobe and look at the cream shirt with the tags still on. The lilac nail polish you bought \"for a friend\" is in the drawer under it.",
      debrief: "Feeling a bit distant from your own relationship is really common before people come out. It doesn't make you a bad boyfriend."
    },
    {
      id: "c1b", route: "archie", gaydar: 40, gaydarSays: "Since when does my boyfriend own lip gloss??", title: "The Italian place", contact: "Archie",
      intro: "Friday. You wore clear gloss, a bit of mascara, the cream silky shirt that's been in your wardrobe with the tags on, and your nails painted lilac. Archie looked at you for a second too long when you picked her up and didn't say anything all the way there.",
      outfits: [{"label": "A plain shirt, but clear gloss and lilac nails", "gaydar": -10, "intro": "Friday. You kept it simple: a plain white shirt and your good jeans. But you put on clear gloss and painted your nails lilac, and you didn't take either off. Archie noticed in the car. She didn't say anything all the way there."}, {"label": "The cream silky shirt, gloss, mascara and lilac nails"}, {"label": "Silky shirt, gloss, mascara, lilac nails and gold hoops", "gaydar": 5, "intro": "Friday. Clear gloss, a bit of mascara, the cream silky shirt that's had the tags on for months, lilac nails, and the little gold hoops you bought online and hid in your sock drawer. Archie looked at the hoops for a long time at the first red light. She didn't say anything all the way there.", "them": ["and EARRINGS??"]}],
      them: ["home", "what was that tonight", "the lip gloss {name}. and your nails"],
      replies: [
        { you: "What do you mean?",
          them: ["dont do that", "you know exactly what i mean", "you just turned up in it like it was normal", "the waiter kept looking at your hands and i wanted to die", "he asked if we were ready to order ladies. ladies {name}"],
          replies: [
            { you: "I just wanted to try it.",
              them: ["at dinner?? with me??", "my sister's friend was two tables over", "she's already messaged my sister asking if you're ok"],
              replies: [
                { you: "Why wouldn't I be okay?",
                  them: ["because guys dont just start wearing lip gloss out of nowhere", "is something going on. like actually. tell me"],
                  replies: [
                    { you: "Nothing's going on. I liked how it looked.", them: ["well i didnt", "i felt like an idiot sitting there", "dont do it again when we're out. please"] },
                    { you: "Maybe. I don't know yet.", gaydar: 60, them: ["what does that even mean", "no actually i cant do this tonight", "im going to bed"] }
                  ] },
                { you: "I'm sorry you were embarrassed.",
                  them: ["i was", "i told her you lost a bet", "thats what i had to say about my own boyfriend"],
                  replies: [
                    { you: "I didn't lose a bet.", them: ["i know you didnt", "i didnt know what else to say"] },
                    { you: "Okay.", them: ["ok?", "thats it?", "whatever. night"] }
                  ] }
              ] },
            { you: "Do you not like it?",
              them: ["no", "not really", "it just didnt look like you"],
              replies: [
                { you: "Maybe it is me.", gaydar: 60,
                  them: ["what does that mean", "{name} you're freaking me out"],
                  replies: [
                    { you: "Forget I said that.", them: ["you cant just say that and then go forget it", "fine. night"] },
                    { you: "I don't know yet. I'm trying to work it out.", gaydar: 65, them: ["work WHAT out", "we've been together three years", "im not doing this over text"] }
                  ] },
                { you: "That's fair.", them: ["im not trying to be mean", "i just want it to be normal again"],
                  replies: [{ you: "Okay.", them: ["night"] },
                    { you: "Your boyfriend wore a hole in that polo. He was boring.", them: ["ok well i liked boring", "you looked like you were off to a bachelorette", "night"] }] }
              ] }
          ] },
        { you: "Did you not like it?",
          them: ["honestly no", "it was really embarrassing", "and dont wear it saturday my friends will be there"],
          replies: [
            { you: "Yeah, okay.", them: ["thanks", "night"] },
            { you: "To be fair the gloss looked better on me than the polo ever did.", them: ["thats not the point", "it was so weird sitting there with my boyfriend more done up than me", "saturday. im serious"] },
            { you: "I'm going to wear what I want.",
              them: ["wow ok", "then dont be surprised when people say stuff", "and dont expect me to stick up for you"],
              replies: [
                { you: "I wasn't asking you to.", them: ["good", "night"] },
                { you: "Night, Archie.", them: ["night"] }
              ] }
          ] }
      ],
      after: "You take the gloss off with toilet paper in the bathroom. Your nails you leave. You look at them a lot over the weekend.",
      debrief: "You can like how something looks before you know why. Archie hating it doesn't make it wrong."
    },
{
      "id": "archie-feet",
      "route": "archie",
      "gaydar": 65,
      "spark": 40,
      "gaydarSays": "Josh from logistics grabbed my boyfriend's foot in front of my whole office. My BOSS was there.",
      "title": "Pool party",
      "contact": "Archie",
      "irl": true,
      "intro": "Archie's work summer party at her boss's house. Shoes off by the pool, the boss's rule. You took your sneakers off at the gate and remembered too late that your toes are still lilac from last weekend. Josh from logistics is here. Archie has mentioned him a lot lately.",
      "them": [
        {
          "note": "Archie looks at your feet on the pool tiles. She doesn't say anything. She takes your hand, then lets it go when her boss walks past."
        },
        {
          "note": "Josh comes over with two beers. Polo shirt, board shorts, big bare feet. He hands one to Archie and one to you."
        },
        "\"You're {name}, yeah?\" He looks down. \"Oh, nice colour, buddy. Arch, you didn't say he gets pedicures.\"",
        "He does them himself. He gets it all over my bath mat.",
        "\"Course he does,\" Josh says, to her.",
        {
          "note": "You sit on the edge of a sun lounger. Josh drops onto the end of it and grabs your foot before you can move it."
        },
        "\"Hold still, I want to see if it's a gel.\" His thumb goes right down the middle of your sole."
      ],
      "replies": [
        {
          "you": "(Bite the inside of your cheek. Do not laugh. Do not laugh.)",
          "them": [
            {
              "note": "You stare at the pool. Your face is doing something weird. Josh looks up at you and grins."
            },
            "\"Oh, he's fighting it. Arch, look, he's fighting it.\"",
            {
              "note": "He wiggles his fingers under your toes. Your whole leg shakes. Two of Archie's coworkers have stopped talking to watch."
            }
          ],
          "replies": [
            {
              "you": "(Hold it in. Pull your foot back calmly.) It's a gel. Can I have my foot back?",
              "spark": 42,
              "them": [
                "\"Ha. Yeah, alright,\" Josh says, and lets go. \"Tough guy.\"",
                {
                  "note": "Archie laughs, a bit relieved, and sits down next to you with her hand on your knee."
                },
                "Okay that was kind of impressive. I'd have screamed.",
                {
                  "note": "Josh goes to get another beer. Archie watches him go."
                }
              ],
              "after": "Archie, to her work friend Priyanka, in the bathroom: \"he didn't even flinch\" Priyanka: \"his toes were purple arch\" Archie: \"lilac\" Priyanka: \"you know what i mean\" Archie: \"...josh is funny though\""
            },
            {
              "you": "(Crack. A giggle comes out of your nose.)",
              "spark": 28,
              "them": [
                {
                  "note": "It comes out as a snort, then a high little giggle, then you can't stop. You're curled up on the lounger, laughing into your knees, while Josh keeps going."
                },
                "\"There it is!\" Josh says. \"Arch, he giggles. Your boyfriend giggles.\"",
                "\"Stop,\" you squeak. \"Stop, stop, okay!\"",
                {
                  "note": "He stops. Archie's laughing, shaking her head at Josh."
                },
                {
                  "note": "She gives your shoulder a quick squeeze and turns back to him."
                },
                {
                  "note": "Her boss says \"oh, to be young\" and walks off."
                }
              ],
              "after": "Archie, in the car: \"you giggled in front of my boss\" \"you GIGGLED, {name}\" Then she goes quiet and looks out the window the rest of the way home."
            }
          ]
        },
        {
          "you": "(Give in. You're already giggling.)",
          "them": [
            {
              "note": "You don't even try. The second his thumb moves you're giggling, high and helpless, grabbing the cushion, kicking your free foot."
            },
            "\"Oh my god,\" Josh says. \"That was barely anything!\"",
            {
              "note": "Everyone near the pool turns round. Archie's boss is holding a plate of prawns, staring."
            }
          ],
          "replies": [
            {
              "you": "(Giggling) Josh! Please! Please stop!",
              "spark": 22,
              "them": [
                {
                  "note": "He stops and lets go and holds his hands up."
                },
                "\"Begging already. Arch, he's begging.\"",
                {
                  "note": "You're red to your ears, hugging your knees, toes curled tight against the cushion. Archie laughs once and then sort of stops."
                },
                "Can you sit up properly. Everyone's looking.",
                {
                  "note": "She moves to the lounger next to Josh's."
                }
              ],
              "after": "Archie, texting Priyanka that night: \"he giggled like a little girl in front of my whole work\" \"josh made him beg\" \"idk why im so annoyed about it\""
            },
            {
              "you": "(Let him keep going. You can't stop laughing anyway.)",
              "spark": 12,
              "gaydar": 72,
              "them": [
                {
                  "note": "You don't pull away. You're flat on your back on the lounger, shrieking with laughter, tears in your eyes, toes wriggling in his hand. It goes on for ages."
                },
                "\"He's not even trying to get away,\" someone says.",
                "\"Arch,\" Josh says, still going, \"is he always this ticklish, or just for me?\"",
                {
                  "note": "You manage \"stop\" eventually. He stops right away. You lie there gasping, hair stuck to your forehead."
                },
                {
                  "note": "Archie isn't laughing. She's holding Josh's beer for him."
                }
              ],
              "after": "Archie, to Priyanka, the next morning: \"he just lay there and let josh tickle him. for like five minutes\" Priyanka: \"he looked like he was having the time of his life tbh\" Archie: \"yeah he did\" \"can we talk about something else\""
            }
          ]
        }
      ],
      "debrief": "Laughing when someone tickles you is a reflex. Whatever Archie felt watching was mostly about Josh."
    },
    {
      id: "c3", route: "archie", gaydar: 99, spark: 0, gaydarSays: "Left him for Josh. He asked where Josh got his jacket.", title: "The other guy", contact: "Archie", irl: true,
      intro: "Archie texted you this morning: \"can you come over tonight. we need to talk.\" Her place in Paddington. There's a men's denim jacket on the back of her kitchen chair. It isn't yours. She's put the kettle on twice without making anything.",
      them: [
        { note: "She sits on the far end of the couch with her knees pulled up and a cushion in her lap." },
        "Okay. I'm just going to say it or I'll chicken out and we'll end up watching MasterChef.",
        "I've met someone. Josh, from work. He's in logistics. He plays soccer with the guys on Wednesdays, he's kind of boring honestly. Nothing's happened. Well, we got coffee. A few times. But I want something to happen.",
        { note: "She looks at the jacket on the chair, then back at you." },
        "And I don't think you're going to be that upset. I don't think you've wanted me for a long time, {name}. I think you'd want someone like Josh too."
      ],
      replies: [
        { you: "What's that supposed to mean? I'm your boyfriend. Of course I want you.",
          them: [
            "You know what it means.",
            { note: "She doesn't look away. Her eyes are puffy." },
            "The gloss. The nails you never took off. You know my lipsticks better than I do. And the way you look at waiters, {name}. Come on.",
            "And Josh, at my work drinks. Before I even liked him. You asked him where he got his jacket and you went bright red.",
            "I think you're gay. I've thought it for months. I kept waiting for you to say something and you didn't, and I'm sort of over waiting."
          ],
          replies: [
            { you: "I'm not gay, Archie. I like makeup. That's not the same thing.",
              them: [
                "Okay.",
                "Then you're a straight guy who borrows my concealer and hasn't kissed me properly since Christmas. Fine.",
                "Either way I'm going. Josh actually wants me. That's sort of all it is."
              ],
              replies: [
                { you: "Archie, please. Listen to me. I'm not gay. I just need to try harder with us.",
                  them: [
                    { note: "She almost smiles." },
                    "You don't have to try harder. That's what I'm saying.",
                    "You can stop wiping the gloss off in the car before you pick me up. I know you do that."
                  ] },
                { you: "(Say nothing.)",
                  them: [
                    { note: "She waits a long time. The kettle clicks off again." },
                    "Yeah.",
                    "I hope you say it to someone one day. Doesn't have to be me."
                  ] }
              ] },
            { you: "Wait. You were watching me look at Josh?",
          them: [
            "I didn't have to watch. Priyanka saw it from the bar.",
            "He asked me about it after, in the car park. 'Is your boyfriend...' and he did this little hand thing. I said no.",
            "And then I went home and cried in the shower. So."
              ],
              replies: [
                { you: "Josh asked you if I was gay? In the car park? That's so embarrassing.",
                  them: ["That's the bit you're upset about?", { note: "She laughs, properly, for the first time tonight." }, "You're unbelievable."] },
                { you: "I'm sorry you had to lie for me. That's not fair on you.",
                  them: ["No, it wasn't.", "I kept thinking if nobody said it out loud it wouldn't be true."] }
              ] }
          ] },
        { you: "You're leaving me for a guy from work? A guy who plays pickup soccer?",
          them: [
            "Yes.",
            "He wears the same three polo shirts and he's never owned a moisturiser and I don't care. He actually looks at me.",
            { note: "She says it quietly." },
            "You've never looked at me like that. You look at my makeup bag like that, honestly.",
            "I was angry a few months ago. Now I'm just tired."
          ],
          replies: [
            { you: "I do want you. I've wanted you for three years. You're my best friend.",
              them: [
                "Exactly. I'm your best friend.",
                "You want me to do your eyebrows and tell you if your shirt's see-through. Which I love. But I want someone who wants to kiss me.",
                "When you kiss me it's like kissing Priyanka. It's nice. That's it, it's just nice."
              ] },
            { you: "Is he better than me? Just tell me what he's got that I don't.",
              them: [
                "He's not better. He's just into me.",
                "He asked what I was doing on the weekend and then he just turned up. He's never once asked what shade my nails are. I don't think he knows nail polish has names."
              ] }
          ] },
        { you: "(Start crying.)",
          them: [
            { note: "She drops the cushion and moves down the couch and puts her arm around you, the way she always has." },
            "I know. I'm sorry. I know.",
            "You were a good boyfriend. You remembered my sister's birthday every year. You were just... yeah.",
            "Someone has to say it, so. You're gay, {name}. It's okay."
          ],
          replies: [
            { you: "Don't say that. Please don't say that.",
              them: ["Okay. I won't say it again.", "I'm not taking it back though."] },
            { you: "(Keep crying into her shoulder.)",
              them: [
                { note: "She holds on until you stop. It takes a while." },
                "Josh is picking me up at seven. You can stay till then.",
                "Put MasterChef on. You can tell me which one you think is cute, I won't say anything."
              ] }
          ] },
        { you: "Please, Archie. Give me another chance. I'll stop with the makeup. I'll stop with all of it.",
          them: [
            "It's not the makeup. I don't care about the makeup.",
            "You could wear all of it and I'd do your lashes for you. You still wouldn't want me.",
            "And I'm not asking you to stop. I'd rather you were with some guy who likes you in it."
          ],
          replies: [
            { you: "I don't want to be with a man. I want to be with you.",
              them: [
                { note: "She looks at you until you look away." },
                "Okay.",
                "Josh is coming at seven."
              ] },
            { you: "Okay. Okay.", them: ["Okay.", { note: "She squeezes your hand. Then she picks up Josh's jacket and puts it on." }] }
          ] },
        { you: "His jacket's from H&M. Two seasons ago. I'm just saying.",
          them: [
            { note: "She stares at you. Then she covers her face with the cushion and laughs into it." },
            "Oh my god. {name}.",
            "That's literally what I'm talking about.",
            "He doesn't even know where it's from. He wouldn't care if I told him."
          ],
          replies: [
            { you: "What? It is. You can tell by the buttons.", them: ["Mm.", { note: "She takes the jacket off the chair and folds it over her arm, away from you." }, "Josh is picking me up at seven."] },
            { you: "(Go quiet.) Sorry. I don't know why I said that.", them: ["I do.", { note: "She bumps your knee with hers." }, "It's fine. Stay till seven if you want."] }
          ] },
        { you: "Fine. Go be with Josh. Go have a boring life with Mr Pickup Soccer.",
          them: [
            "I will.",
            "Leave your key on the bench.",
            "And your nail polish is still in my bathroom. Take it with you."
          ] }
      ],
      after: "Archie, to her sister, that night: \"did it. told him about josh\" \"how'd he take it\" \"idk. weird. he kept looking at josh's jacket on the chair\" \"his JACKET?\" \"dont\"",
      debrief: "She more or less said it for you, before you were ready. You still get to say it yourself, when you want to."
    },
    {
      id: "c4", route: "archie", gaydar: 99, spark: 0, gaydarSays: "Josh's friend Ryan does pilates. I'm just saying.", title: "Archie and Josh", contact: "Archie",
      intro: "Three weeks later. Archie's Instagram is mostly Josh now, nearly always in a polo shirt. Then she texts.",
      them: ["hey {name}", "just wanted to say im doing ok", "josh and i are good. like really good. he took me to the breakfast creek and ate this massive steak and fell asleep on the couch at 8:30 lol", "sorry if thats weird to hear", "are you ok? like actually"],
      replies: [
        { you: "I'm okay. Honestly. I'm really happy for you, Arch. He seems like a real guy's guy.",
          them: [
            "he is SO a guy's guy",
            "his shampoo is 2 in 1. thats the whole routine",
            "hes doing my bookshelf this weekend. remember ours lol. you cried and there were like six screws left over",
            "anyway thanks for saying that",
            "ok can i say one thing and then ill shut up",
            "josh has a friend ryan. hes gay. hes really nice",
            "he does reformer pilates and he has a dog called margot and like. very nice arms",
            "just saying"
          ],
          replies: [
            { you: "Archie. I'm not gay. Why does everyone keep saying that?",
              them: ["ok", "his numbers in my phone if you ever want it", "no pressure"] },
            { you: "Okay first of all I didn't cry about the bookshelf. I had something in my eye. For an hour.",
              them: ["you made me hug you in the hallway", "anyway. ryan. think about it"] },
            { you: "Why are you telling me about his arms? Why would I care about his arms?",
              them: ["no reason 😇", "lol", "forget i said anything"] },
            { you: "...How nice are the arms? Hypothetically.",
              them: ["very", "ok im saying nothing else", "josh just asked why im smiling at my phone"] }
          ] },
        { you: "Are you texting me from his place right now?",
          them: ["...maybe", "sorry. too soon?", "he says hi btw", "and he wants to know where you got your jacket from the work drinks"],
          replies: [
            { you: "Tell him it's from the women's section at Zara. Actually, don't tell him that.", them: ["lol im telling him", "he said fair enough", "hes watching the cricket"] },
            { you: "Too soon, Arch. I need a bit.", them: ["sorry youre right", "look after yourself ok"] }
          ] },
        { you: "I miss you. Not as a girlfriend. Just you. Is that weird?",
          them: [
            "not weird",
            "i miss you too",
            "can we just be friends eventually? like actual friends",
            "i want to hear about whoever you end up with. even if its a ryan lol"
          ],
          replies: [
            { you: "Yeah. Eventually. When it stings less.", them: ["ok 💛", "take your time", "ill be here watching josh fall asleep in front of the cricket"] },
            { you: "It's not going to be a Ryan.", them: ["ok", "ryan's still single btw"] }
          ] }
      ],
      after: "You still haven't said the word out loud to anyone.",
      debrief: "It's allowed to sting, seeing her this happy with Josh. You weren't the problem."
    },
    {
      id: "c2", route: "nicole", gaydar: 75, friend: true, gaydarSays: "He knew Jemima's lip liner by name. I'm not saying anything. I'm just saying.", title: "One of the girls", contact: "Nicole",
      intro: "Friday drinks at the Regatta with the uni girls. Archie couldn't come. You spent most of the night helping Ailisha pick a lipstick on her phone and told Jemima the bartender was \"objectively\" good-looking, then spent ten minutes explaining why that was a normal thing to say. Nicole kept smiling into her drink.",
      them: ["{name}!! tonight was so fun", "ok ive decided something and you're not allowed to argue", "you're coming to girls night from now on. thursdays", "not optional"],
      replies: [
        { you: "Girls' night? Nic, I'm a guy. I've got a girlfriend. I'm pretty sure that disqualifies me.",
          them: [
            "are you though",
            "i mean yes technically",
            "you knew what jemima's lip liner was called {name}. by name",
            "and you said the bartender had great forearms lol",
            "anyway ailisha already added you to the group chat. you're saved in her phone as '{name} 💅'"
          ],
          replies: [
            { you: "I'm literally dating Archie. Three years. We're basically engaged according to her sister.",
              them: ["mm", "how is archie", "do you guys still go on dates or is it mostly you doing her eyebrows in front of masterchef"],
              replies: [
                { you: "We go on dates! We went to the Italian place last week. It was very romantic and very straight.", them: ["very straight 😂", "was that the lip gloss night", "jemima told me. jemima tells me everything", "anyway thursday"] },
                { you: "...okay, it's mostly eyebrows. But I'm really good at eyebrows.", them: ["i KNOW you are. that's my whole point", "thursday. you're doing mine too"] }
              ] },
            { you: "The bartender DID have great forearms. That's just a fact. Anyone could see that.",
              them: ["SEE", "this is what im talking about", "i know a bar in the valley you'd love 👀"],
              replies: [
                { you: "What's that supposed to mean?", them: ["nothing 😇", "its mostly kylie but the drinks are good"] },
                { you: "...What bar? Just so I know. For the cocktails.", them: ["omg", "ill send you the address", "for the cocktails. sure"] }
              ] }
          ] },
        { you: "Ha. Sure. What do you even do at girls' night?",
          them: [
            "wine and face masks and the bachelorette mostly",
            "and talking about boys",
            "you'd be good at it you always have opinions about the guys on the bachelorette",
            "you said 'he's too pretty for this show' about like half of them"
          ],
          replies: [
            { you: "I don't have opinions about the guys. I was just commenting. Objectively.", them: ["objectively 😂", "ok", "thursday 7"] },
            { you: "Fine. But I'm Team Jordan and I'm not changing my mind.", them: ["TEAM JORDAN 😭", "ok you're definitely coming", "ailisha is going to fight you"] }
          ] },
        { you: "What do you mean, one of you? What's that supposed to mean, Nic?",
          them: [
            "you know what i mean",
            "relax im not asking you anything lol",
            "i just mean you're my favourite person to go shopping with",
            "like over the girls even"
          ],
          replies: [
            { you: "There's nothing to tell, Nic. Honestly. I just like shopping.", them: ["ok 💛", "anyway can you come to sephora saturday", "i need a blush and you're the only one who's honest with me"] },
            { you: "Thanks, Nic. I'd love to come.", them: ["yay", "also sephora saturday?", "bring your loyalty card i know you have one"] }
          ] },
        { you: "Fine. But I'm not sitting on the floor. I'm a guest.",
          them: [
            "you're not a guest you're furniture now",
            "jemima's boyfriend isn't even allowed to come lol",
            "you can have the corner of the couch",
            "bring face masks. not the cheap ones ailisha breaks out"
          ],
          replies: [
            { you: "Why isn't her boyfriend allowed? I'm a boyfriend. I'm Archie's boyfriend.", them: ["because he talks about crypto", "you talk about our hair", "its different"] },
            { you: "The corner of the couch. Okay. I accept.", them: ["omg you said that like you were accepting a rose", "thursday 7"] }
          ] }
      ],
      after: "You go on Thursday. You have opinions about every guy on The Bachelorette. Nicole keeps topping up your wine and doesn't say a thing about it.",
      debrief: "Some friends just make room for you without needing you to say anything. You can say it whenever you want, or not at all."
    },
    {
      id: "nicole-2", route: "nicole", gaydar: 90, friend: true, gaydarSays: "He swatched eleven lipsticks on his own wrist. ELEVEN.", title: "Sephora", contact: "Nicole", irl: true,
      outfits: [
        { label: "Jeans and a tee. It's just shopping.", gaydar: -5, intro: "Saturday. Sephora in the Queen St Mall. Jeans, a plain tee, nothing that says anything. Nicole is waiting at the entrance with two iced lattes." },
        { label: "Your cropped knit, a bit of tinted balm and your rings", intro: "Saturday. Sephora in the Queen St Mall. You wore your cream cropped knit, a bit of tinted lip balm and all your rings, because it's Sephora and you didn't want to look like you didn't belong. Nicole is waiting at the entrance with two iced lattes." },
        { label: "Cropped knit, lip tint, mascara and a little shoulder bag", gaydar: 5, intro: "Saturday. Sephora in the Queen St Mall. Cropped knit, berry lip tint, mascara, and the little black shoulder bag you bought online and have never taken out of the flat. Nicole is waiting at the entrance with two iced lattes. She sees the bag and nearly drops one.", them: ["And a BAG. Okay. We're doing this properly then."] }
      ],
      them: [
        "Oat latte, extra shot. Because you're a diva.",
        { note: "She hands it to you and links her arm through yours." },
        "Okay so I need a blush, and a lip for my cousin's wedding. And you're getting something for yourself and you're not allowed to say it's for Archie."
      ],
      replies: [
        { you: "I don't need anything. I'm just here for moral support. And the free samples.",
          them: [
            "You literally just walked past the blush and went straight to Rare Beauty.",
            { note: "You're already holding a liquid blush. You don't remember picking it up." },
            "Put it on your hand. Go on, I'm not judging."
          ],
          replies: [
            { you: "Okay, but this shade is actually so pretty. Look how it melts in. Nic, LOOK at it.",
              them: [
                "I'm looking! It's really nice on you.",
                "Okay, you're getting it. Don't do that face. Wear it Thursday, nobody's going to say anything except where's it from.",
                { note: "The sales girl comes over and asks if your girlfriend needs help. Nicole says, \"Oh, we're not together.\" The sales girl looks at your swatched wrist and says, \"Oh. Okay.\"" }
              ],
              replies: [
                { you: "Why did she say 'oh okay' like that? What did that mean?", them: ["Mean? Nothing. She was just being nice.", { note: "Nicole is biting her lip." }, "Anyway. Cousin's wedding. Come on."] },
                { you: "Fine. I'm getting it. But it's a secret. Archie can't know.", them: ["I won't tell Archie. I don't tell anyone anything, you know that.", { note: "She's already walking to the till." }] }
              ] },
            { you: "Nic, I'm a straight guy in Sephora. I'm literally only here for you.",
              them: [
                "Mm-hm.",
                "Then why have you swatched eleven lipsticks on your own wrist?",
                { note: "You look down. There are eleven stripes on your wrist." },
                "It's fine. Pick your favourite."
              ],
              replies: [
                { you: "The fourth one. Obviously. The mauve. It's giving soft but expensive.", them: ["'It's giving soft but expensive.'", "Did you hear that? Did you hear yourself?", "Mauve. I'm buying it for you, don't argue."] },
                { you: "None of them. I'm washing my wrist. This never happened.", them: ["Too late, I took a photo.", "Kidding. Kind of. Come on."] },
                { you: "Don't look at me like that. Your ex swatched once. You told me.", them: ["He swatched one foundation and said they all looked the same.", "You just told me one was a bit cool for your undertone.", "So."] }
              ] }
          ] },
        { you: "Okay, wait. The something for me. Can I get a lip oil? Just a clear one. Nothing crazy.",
          them: [
            "Yes. Yes.",
            "Clear's fine. Or the rosy one? Your lips are already pink, it'd just look like you but a bit more.",
            "And don't pretend you haven't looked. You went straight to the Dior stand when we walked in."
          ],
          replies: [
            { you: "Okay, fine, the rosy one. But if anyone asks, it's chapstick.", them: ["'It's chapstick.'", "Sure.", "Do you want to look at brow stuff while we're here? Your brows are better than mine and I hate it."] },
            { you: "The rosy one. And maybe a little liner. Just to see. Don't make it a thing.", them: [{ note: "She doesn't make it a thing." }, "Okay. I'll get a basket."] }
          ] },
        { you: "Nic. Why do you keep linking arms with me like I'm one of your girlfriends?",
          them: [
            "Because you're one of my girlfriends.",
            "Okay that came out wrong.",
            "Or not wrong. I don't know. Do you want me to stop?"
          ],
          replies: [
            { you: "No. I don't want you to stop. I kind of like it.", them: ["Good, I wasn't going to.", { note: "She squeezes your arm and steers you towards the blush." }] },
            { you: "It's fine. People might think we're together, that's all.", them: ["Nobody in here thinks we're together.", "The sales girl called you hun. She calls all the boyfriends sir, I've been listening."] },
            { you: "Okay but if you're linking arms, you're carrying the basket. I'm wearing rings.", them: ["Oh my god. Fine.", { note: "She takes the basket and keeps hold of your arm." }] }
          ] }
      ],
      after: "On the way out Nicole says, \"Same time next month?\" At home you put the little Sephora bag in your bedside drawer, under your socks.",
      debrief: "You're allowed to just enjoy a day like that, without explaining it to anyone."
    },
    {
      id: "nicole-3", route: "nicole", gaydar: 97, friend: true, gaydarSays: "He rated my Hinge guys out of ten and then said 'actually, I'd date him'. I didn't even flinch.", title: "Rate my Hinge", contact: "Nicole",
      intro: "A month of Thursdays later. Archie's with Josh now. Your blush lives in Nicole's bathroom. Tonight she's lying across your lap swiping on Hinge and you're giving every guy a score out of ten.",
      them: ["ok im texting you even though youre on my couch because jemima's here", "this one. aaron. 31. engineer. 6'2 and a dog", "thoughts"],
      replies: [
        { you: "Nine. Ten without the bucket hat. The jaw though. I'd go out with him honestly. Like if I were you. Obviously.",
          them: [
            "'like if i were you obviously' 😭",
            "{name}",
            "jemima just mouthed omg at me from the kitchen"
          ],
          replies: [
            { you: "As you, Nic! I meant if I were you! I'm with Archie. Was with Archie. I'm straight.",
              them: [
                "ok 💛",
                "you know im never going to ask you right",
                "you can drop the obviously with me though"
              ],
              replies: [
                { you: "I know. Thanks. Can we just keep swiping?", them: ["yes. next. tom, 28, physio", "your face just did something", "im saying nothing"] },
                { you: "I'm not doing a thing. Next guy. Quick, before I die.", them: ["next guy. ryan. pilates. dog called margot", "wait isn't that josh's friend", "{name} your face"] }
              ] },
            { you: "Okay, but have you seen his second photo? The one at the beach? Nic. NIC.",
              them: ["i have seen it", "screenshotting it for you", "youre welcome"] }
          ] },
        { you: "Three. Bucket hat, fish photo, and he says 'looking for my partner in crime'. Absolutely not, babe. Next.",
          them: ["'absolutely not babe' 😭", "you called me babe", "youve never called me babe", "telling the girls"],
          replies: [
            { you: "I didn't. Did I? It slipped out. It's from girls' night. You're all a bad influence.",
              them: ["we're a great influence", "ailisha is going to lose it"] },
            { you: "I'll call you babe if I want, babe. Next guy. Come on. I'm on a roll.",
              them: ["omg", "ok next. hes a vet. hes holding a puppy", "if you dont give him a ten im kicking you out"] }
          ] },
        { you: "Why do you always ask me about guys? You've got Jemima and Ailisha for this.",
          them: [
            "because youre better at it",
            "you noticed the wedding ring on that guy last week. in his third photo",
            "and idk. you look at guys the way i do",
            "thats all im saying"
          ],
          replies: [
            { you: "I don't look at guys like that. I just notice stuff. I'm a noticing person.", them: ["ok noticing person", "notice this one. owen. 29. electrician", "would you"] },
            { you: "(Say nothing. Look at Owen's photos for a really long time.)",
              them: [{ note: "She watches you go through all of Owen's photos twice. Then she takes her phone back and hugs you." }, "ok", "you dont have to say anything", "jemima's already got a list of guys for you btw. just so you know"] }
          ] }
      ],
      after: "Nicole never asks. Every few days she sends you a screenshot of some guy with no message. You haven't deleted any of them.",
      debrief: "Nicole isn't waiting on you to say anything. There's no deadline."
    },
    {
      id: "hannah-1", route: "hannah", gaydar: 20, gaydarSays: "Nice guy. Knew my earrings were from Claire's, which was weird, but nice.", title: "Coffee with Jess's friend", contact: "Hannah",
      outfits: [
        { label: "A polo and chinos. Normal guy.", gaydar: -10, intro: "Jess set you up with her friend Hannah: 31, physio, \"very no-nonsense, you'll love her\". Sunday coffee in Teneriffe. You wore a navy polo and chinos and felt like you were in a costume of a straight guy. She was early. She'd already ordered." },
        { label: "A button-up and a clear coat on your nails", intro: "Jess set you up with her friend Hannah: 31, physio, \"very no-nonsense, you'll love her\". Sunday coffee in Teneriffe. A white button-up, jeans, and a clear coat on your nails that nobody would notice unless they were looking. She was early. She'd already ordered." },
        { label: "A button-up, clear nails and a tiny bit of clear gloss", gaydar: 5, intro: "Jess set you up with her friend Hannah: 31, physio, \"very no-nonsense, you'll love her\". Sunday coffee in Teneriffe. A white button-up, a clear coat on your nails, and a little bit of clear gloss you put on in the car and nearly wiped off twice. She was early. She'd already ordered." }
      ],
      them: ["hey thanks for coffee", "that was nice actually. jess's last setup talked about crypto for an hour", "and you asked me questions which is rare lol"],
      replies: [
        { you: "Thanks for coming. I was pretty nervous, Jess talked you up a lot. Said you'd see straight through me.",
          them: [
            "lol she says that about everyone",
            "im just busy. i work saturdays too so i dont really do dates that go nowhere",
            "also random but how did you know my earrings were from claire's"
          ],
          replies: [
            { you: "My friend Nicole has the same ones. I just notice that stuff, I guess.",
              them: ["ha ok", "observant", "second date? friday? somewhere with actual food this time"],
              replies: [
                { you: "Friday sounds good. You pick, I'm easy.", them: ["good. theres an italian place in paddington", "dont be late. im always early and then i get cranky"] },
                { you: "Friday's great. Should I dress up?", them: ["just don't wear flip-flops and we're fine", "see you friday"] }
              ] },
            { you: "Honestly I was just looking at them the whole time because they were cute. Sorry. Is that weird?",
              them: ["lol no", "most guys arent looking at my ears", "friday?"],
              replies: [{ you: "Yes. Friday. Definitely.", them: ["good", "paddington. 7. i'll book"] }] }
          ] },
        { you: "It was nice! The coffee was great. Do you want to do it again?",
          them: ["yeah i would", "you're different to the guys i normally go out with. less... i dunno. less blokey? in a good way", "friday?"],
          replies: [
            { you: "Is less blokey a good thing?", them: ["for me yeah", "ive done enough guys who only talk about cricket", "friday. paddington. ill book"] },
            { you: "Less blokey. Wow. I'll go buy a big truck and a dog called Bear.", them: ["lol please don't", "the last guy had a dog called bear. it ate my sunglasses", "friday. paddington. i'll book"] },
            { you: "Friday's perfect. I'm looking forward to it.", them: ["me too", "night {name}"] }
          ] },
        { you: "Did you notice my nails? Sorry. I don't know why I'm asking that.",
          gaydar: 30,
          them: ["your nails?", "oh the clear stuff? yeah i noticed", "its fine lots of guys do that. my brother does it because he bites them", "do you bite them?"],
          replies: [
            { you: "Yeah. Totally. That's why. I bite them.", them: ["ha ok well it worked", "anyway. friday?"] },
            { you: "No, I just like how they look.", gaydar: 35, them: ["oh", "ok fair enough", "theyre nicer than mine tbh. i do mine in the car", "um. friday?"] }
          ] }
      ],
      after: "Hannah, to Jess: \"he's nice. really nice actually. asked me loads of questions.\" Jess: \"told you!!\" Hannah: \"he knew my earrings were from claire's though. is that a thing?\" Jess: \"...he's observant\""
    },
    {
      id: "hannah-2", route: "hannah", gaydar: 50, gaydarSays: "He asked the waitress about her skin routine. For eight minutes. I timed it.", title: "Second date", contact: "Hannah", irl: true,
      outfits: [
        { label: "A nice shirt, two rings and a sheer nude polish", gaydar: -5, intro: "Second date. A little Italian place in Paddington. You wore a nice black shirt, two of your rings and a sheer nude polish you hoped would pass for clear. Hannah is already at the table with a glass of red, and she's ordered garlic bread for both of you." },
        { label: "A nice shirt, your rings, and nude polish on your nails", intro: "Second date. A little Italian place in Paddington. A nice black shirt, all four of your rings, and a nude polish on your nails, which you told yourself was basically the same as clear. It isn't. Hannah is already at the table with a glass of red." },
        { label: "Shirt, rings, nude nails and a tinted lip balm", gaydar: 5, intro: "Second date. A little Italian place in Paddington. A nice black shirt, all your rings, nude polish, and a tinted lip balm that's basically a lip tint if you're honest. Hannah is already at the table with a glass of red. She looks at your mouth for a second too long when you sit down.", them: [{ note: "\"Is that... tinted?\" she says, and then, \"sorry, nothing\"." }] }
      ],
      them: [
        { note: "She stands up to kiss you on the cheek. She glances at your hands while she does it." },
        "Hi. You're on time. Good. I've ordered garlic bread, I hope that's okay, I'm starving, I've had back-to-back ACLs all day.",
        { note: "She sits down and looks at your hands again. Properly this time." },
        "Sorry, I have to ask or I'll think about it all night. Is that polish? Like actual polish?"
      ],
      replies: [
        { you: "Yeah, it's just a nude. I thought it looked clean. Is that okay? You can be honest.",
          them: [
            "It's... fine. It looks clean, you're right.",
            "I just haven't been out with a guy who wears polish before. My ex wouldn't wear sunscreen because he said it was 'for girls'. So this is a bit of a jump.",
            { note: "She takes a big sip of her wine." },
            "It's fine. Seriously. Tell me about your week."
          ],
          replies: [
            { you: "My week was good! I finally found a moisturiser that doesn't break me out. It's a Korean one with snail mucin. Sorry. Too much?",
              them: [
                "Snail mucin.",
                "No, I use that one. That's weird.",
                { note: "She laughs, a small one." },
                "Okay. Do you play any sport? Anything?"
              ],
              replies: [
                { you: "Not really. I do pilates sometimes. And I go to a dance class with my friend Dani. It's mostly Beyoncé.",
                  gaydar: 55,
                  them: ["Mostly Beyoncé.", "Okay. Cool. That's... cool.", { note: "She checks her phone. Just for a second." }, "Sorry. Work. Keep going."] },
                { you: "I played soccer in high school. I was terrible. I mostly hid on the wing and talked to the other team.",
                  them: ["Ha. That's cute.", "My brothers all played. Christmas is just them tackling each other in the backyard.", "You'd hate it."] }
              ] },
            { you: "My week was fine. Work stuff. Can we talk about you though? How were the ACLs?",
              them: ["Oh my god, thank you. Nobody ever asks about the ACLs.", "Okay so the first one was a netballer, and she'd done it at Nissan Arena, and the whole team came to the appointment...", { note: "She talks for ten minutes. She's funny. Twice you catch yourself looking at the waiter's forearms." }] }
          ] },
        { you: "It is. Are you going to assess it? Is this a consult now?",
          them: [
            "Ha. I do knees.",
            "Your hands are nicer than mine though, which is annoying.",
            { note: "She laughs, then stops a bit too quickly and picks up the menu." },
            "Garlic bread. Eat. I'm not watching you pick at it."
          ],
          replies: [
            { you: "You can say that to me any time. I'll take it.", them: ["I'm sure you will.", { note: "She says it into the menu." }, "So. Pasta. I'm getting the carbonara and I'm not sharing."] },
            { you: "Sorry. That was a bit much. I'm nervous.", them: ["You're fine. Order something."] }
          ] },
        { you: "It is polish. Do you hate it? I can take it off for next time.",
          them: [
            "No, don't take it off for me.",
            "I'm just trying to work out what it means. Is that bad? I'm 31, I don't have time to work stuff out on dates.",
            "Like what am I getting here."
          ],
          replies: [
            { you: "You're getting a guy who likes his nails done. That's it. Nothing to work out.",
              them: ["Okay.", "Okay, fair. Sorry. Garlic bread?", { note: "She pushes the plate towards you and doesn't look at your hands again all night." }] },
            { you: "I don't know what you mean. It's just polish.", them: ["Right. Yeah.", "Sorry, ignore me, I'm tired."] },
            { you: "You're getting a guy who'll never steal your hoodies. I'll steal your hand cream though.", them: ["Ha.", "My last boyfriend stole three hoodies and never gave one back.", { note: "She looks at your hands, then at hers, then puts hers in her lap." }] }
          ] },
        { you: "Oh my god, you noticed! It's this brand called Essie, it's called 'Ballet Slippers', it's literally the perfect nude. You'd love it.",
          gaydar: 60,
          them: [
            { note: "She looks at you. She looks at your nails. She looks at you again." },
            "I have that exact one. It's in my bathroom.",
            "Okay. Wow.",
            "Can you pass the garlic bread."
          ],
          replies: [
            { you: "What? Did I say something weird?", them: ["No. It's fine.", "I just thought tonight we'd talk about me a bit more than nail polish lol. Tell me about your work."] },
            { you: "Sorry, I get excited about this stuff. I'll stop. Tell me about your day.", them: ["It's okay. It's sort of cute.", "Not date cute. Just cute.", "Anyway. ACLs."] }
          ] }
      ],
      after: "Walking her to her car, she hugs you instead of kissing you. In the car she texts Jess: \"second date was nice. hes lovely\" \"he talked to the waitress about her skin for like 8 minutes\" \"he had nail polish on jess\" Jess: \"oh\" Hannah: \"yeah\""
    },
    {
      id: "c5", route: "hannah", gaydar: 85, gaydarSays: "Lip tint, mascara, and eyes on the bartender all night. Do the maths.", title: "The wine bar", contact: "Hannah",
      intro: "Third date. Drinks at a wine bar in New Farm. You wore a pink knit, a berry lip tint, mascara, your rings and fresh nail polish. She clocked it the second she sat down. The conversation was fine. Polite. She checked her phone a lot. You spent more time than you meant to talking to the bartender about his jacket. She left at 8:40 and said she had an early start.",
      outfits: [
        { label: "A plain tee and just a berry lip tint", gaydar: -10, intro: "Third date. Drinks at a wine bar in New Farm. You played it safe: a navy tee, jeans, and just a berry lip tint. It's barely anything. She clocked it the second she sat down anyway. The conversation was fine. Polite. She checked her phone a lot. You spent more time than you meant to talking to the bartender about his jacket. She left at 8:40 and said she had an early start." },
        { label: "Pink knit, lip tint, mascara, rings, fresh nails" },
        { label: "Pink knit, lip tint, mascara, rings, pearls and little heeled boots", gaydar: 5, intro: "Third date. Drinks at a wine bar in New Farm. A pink knit, a berry lip tint, mascara, your rings, fresh nail polish, a string of pearls and little heeled ankle boots that made you taller than her. She looked at the boots, then the pearls, then the lip tint, in that order. The conversation was fine. Polite. She checked her phone a lot. You spent more time than you meant to talking to the bartender about his jacket. She left at 8:40 and said she had an early start.", them: ["also the pearls were a lot ngl"] }
      ],
      them: ["hey", "im just going to say it because im 31 and i cant be bothered doing the polite version", "i dont think we should see each other again"],
      replies: [
        { you: "Oh. Okay. Can I ask why? I thought tonight was going okay. I mean, I know I was a bit chatty with the bartender, but he was really sweet.",
          them: [
            "he was really sweet",
            "lol ok",
            "you talked to him about his jacket for like 40 min {name}. you asked if it came in other colours",
            "and i paid $18 for parking and got dressed up and you had more on your face than me. again",
            "its more every time",
            "do whatever you want with it but im not dating a guy who looks at the bartender like that"
          ],
          replies: [
            { you: "Like what? I wasn't looking at him like anything. It was a really good jacket. It was Acne Studios, Hannah. You don't see that in New Farm.",
              them: ["oh my god", "youre doing it again", "ok im going. good luck"],
              after: "She leaves you on read. You look the jacket up at 11pm anyway. It's $1,400." },
            { you: "Okay. That's fair. I'm sorry, Han. I didn't mean to make you feel like that. You were really nice to me.",
              them: [
                "you were nice too. you are nice",
                "you just dont want to go out with me. i dont think you want to go out with any girl tbh",
                "sorry. thats just what it looked like"
              ],
              replies: [
                { you: "What's that supposed to mean? I'm not gay, if that's what you're saying.", them: ["i didnt say gay", "anyway take care {name}"] },
                { you: "Okay. Thanks for being honest.", them: ["np", "tell jess she owes me a wine"] }
              ] }
          ] },
        { you: "Is this about the makeup? Because I can tone it down. I just thought it looked cute tonight.",
          them: [
            "its not how it looks. it looked fine. better than mine tbh",
            "its that you've had more on every time and you've been less into me every time",
            "tonight felt like drinks with jess",
            "i dont want to be swapping lip tints with my boyfriend",
            "and ive done this before. not doing it again"
          ],
          replies: [
            { you: "Done what before? What are you talking about?",
              them: ["dated a guy who was working stuff out", "two years. hes with a guy called craig now", "i went to their engagement party. it was actually nice. anyway no"] },
            { you: "I'm not working anything out. I just like a lip tint. Lots of guys wear makeup now.",
              them: ["ok", "lots of guys dont look at the bartender like that", "night"] }
          ] },
        { you: "Wait, before you go. Was it the lip? Be honest. I knew it was too much tonight. I KNEW it.",
          gaydar: 90,
          them: [
            "...",
            "im breaking up with you and youre asking me for feedback on your lip",
            "it was fine. you looked cute",
            "you looked cuter than me tbh and i actually tried tonight"
          ],
          replies: [
            { you: "Okay but you'd tell me if the lip was too much, right? As a friend?", them: ["we're not friends {name}", "it wasnt too much. bye"] },
            { you: "Sorry. That came out wrong. I'm sorry it didn't work out, Han.", them: ["me too a bit", "bye {name}"] }
          ] },
        { you: "ok",
          them: [
            "ok",
            "fyi the bartender wrote his number on your receipt",
            "i saw it when you were in the bathroom. its under the candle"
          ],
          replies: [
            { you: "He did NOT. Wait. Did he?", gaydar: 92, them: ["night {name}"] },
            { you: "Why would I want the bartender's number?", them: ["i don't know {name}", "why did you ask what colours the jacket came in", "night"] }
          ] }
      ],
      after: "You read her last message a few times, then put the phone face down.",
      debrief: "She read you right and said so. That stings. It's still nothing to be ashamed of."
    },
    {
      id: "hannah-feet", route: "hannah", gaydar: 92, gaydarSays: "Dylan keeps saying your feet are nicer than mine. They are, which is so annoying.", title: "White carpet", contact: "Hannah", irl: true,
      intro: "Kate's housewarming in Paddington. Kate's Hannah's best friend from uni and she's got a brand new white carpet. There's a sign taped to the door: SHOES OFF. YES YOU. On Sunday Dani painted your toes a pale pink called Ballet Slippers, and you left it on because nobody was going to see.",
      them: [
        { note: "There's a pile of shoes in the hallway. Hannah kicks off her sneakers and waits for you." },
        "Come on. Kate will actually kill you.",
        { note: "You undo your laces as slowly as you can. Then your socks. Hannah looks down." },
        "Oh. Okay. They're pink.",
        { note: "A big guy in the hallway looks down too. Barefoot, beer in hand. He grins." },
        "\"Dylan. Kate's brother.\" He looks at your toes, then at Hannah. \"This is the date? Han. Come on.\"",
        "He's been asking me out since uni. Ignore him.",
        "\"Eleven times,\" Dylan says. \"Guess my odds just went up though.\""
      ],
      replies: [
        { you: "(Curl your toes into the carpet.) Thanks. It was a bet. I lost a bet.",
          them: [
            "\"Yeah? Who with?\" Dylan says.",
            { note: "You don't have an answer. Hannah looks at you." },
            "It wasn't a bet. Dani put it on her story. 'Pedi day with my bestie.'",
            "\"Pedi day. With his bestie,\" Dylan says, delighted. He puts a hand on Hannah's back and steers her towards the kitchen. \"Come get a drink, Han. Your bestie can come too.\""
          ],
          replies: [
            { you: "(Follow them to the kitchen.)",
              them: [
                { note: "Dylan opens Hannah's cider on the edge of the bench. Then he opens yours too and hands it to you. \"Didn't want you breaking a nail,\" he says." },
                { note: "Every time you move, your pink toes are right there on Kate's white tiles. Kate's housemate looks at them, then at Hannah." },
                "\"Han,\" the housemate says, very quietly. \"Is he...\"",
                "I don't know. I don't even know if I want to know.",
                "I sort of can't picture kissing him anymore.",
                { note: "Hannah's watching Dylan cut limes." }
              ] },
            { you: "(Stay in the hallway and look at your feet.)",
              them: [
                { note: "You stand on the cold floorboards by the shoe pile for a whole song. Through the doorway you can see Dylan making Hannah laugh. She's got her hand on his arm." },
                { note: "Kate walks past and says \"oh my god, cute toes\" without stopping." }
              ] }
          ] },
        { you: "It's Ballet Slippers. Essie. Dani did them.",
          gaydar: 96,
          them: [
            "\"Essie,\" Dylan says, to nobody, delighted. \"Han. He knows the brand.\"",
            "Kate, from the lounge: \"Wait, is that Ballet Slippers? Show me!\"",
            { note: "A minute later you're on the white couch with three of Kate's friends, comparing feet. Someone's got her foot on your knee. Out on the balcony Dylan's got Hannah laughing." },
            "Hannah, when she finally comes back in: \"You've been on that couch talking about feet for half an hour.\"",
            "\"Dylan seems nice,\" you say.",
            "\"Yeah,\" she says. \"He's alright.\""
          ] },
        { you: "(Stand up straight.) She's here with me, man.",
          them: [
            "\"Course she is, buddy.\" He looks down at your toes and back up and just smiles.",
            { note: "Hannah bites her lip." },
            "\"Love the confidence,\" Dylan says, and pats your cheek. \"Go grab a drink, man. Grown-ups are talking.\""
          ],
          replies: [
            { you: "(Go and grab a drink.)",
              them: [{ note: "When you get back Dylan's in your spot on the couch next to Hannah, with his big bare feet up on the coffee table. She hasn't moved over." }, "Sit on the floor, it's fine. Kate's friends are down there. You'll fit in."] },
            { you: "...Your feet are huge.",
              gaydar: 98,
              them: [
                "\"Size thirteen,\" Dylan says. \"Not a drop of polish on 'em.\"",
                "{name}. Why are you looking at his feet?",
                { note: "You go red. Dylan laughs, properly, and puts his arm round Hannah. She lets him." }
              ] }
          ] }
      ],
      after: "Hannah, to Kate, at 1am: \"did you see his toes\" Kate: \"everyone saw his toes lol. dylan hasnt shut up about them\" Hannah: \"what did he say\" Kate: \"'han's date has nicer feet than han'. then he asked if you're free friday\"",
      debrief: "Having your toes on show before you were ready is a lot. You still picked the colour."
    },
    {
      "id": "hannah-tickle",
      "route": "hannah",
      "gaydar": 94,
      "irl": true,
      "title": "Movie night",
      "contact": "Hannah",
      "gaydarSays": "Dylan had my date's foot in a headlock in front of Kate's whole lounge room. I'm still not over it.",
      "intro": "A week after the housewarming. Kate's having people over to watch a movie on the white carpet, and Hannah said come, so you came. SHOES OFF. YES YOU. is still on the door. Your toes are still Ballet Slippers pink. Dylan's on the couch. He's taken the whole middle of it.",
      "them": [
        {
          "note": "You leave your shoes in the pile. Hannah looks at your toes, then at you, then sighs through her nose and goes to get a drink."
        },
        "\"Pink's back,\" Dylan says from the couch. \"Han, he kept it. For a whole week.\"",
        "He can do what he wants with his feet, Dylan.",
        "\"I'm not stopping him. I'm a fan.\" He pats the couch next to him. \"Sit down, buddy. Best seat. Han, you're on the other side.\"",
        {
          "note": "There's nowhere else to sit. You sit on the end of the couch with your knees up. Hannah sits on Dylan's other side. Kate turns the lights off and the movie starts."
        },
        {
          "note": "Twenty minutes in, your feet are on the cushion between you and Dylan. You don't notice until his hand closes round your ankle."
        },
        "\"Han,\" he says, not quietly. \"Hey. Han. Bet you ten bucks he's ticklish.\"",
        "Dylan. We're watching a movie.",
        "\"Kate's seen it. Ten bucks.\"",
        {
          "note": "Kate pauses the movie. She doesn't even pretend she isn't going to watch. Dylan's thumb is resting on the arch of your foot."
        },
        "\"Ready, champ?\" he says, and starts."
      ],
      "replies": [
        {
          "you": "(Don't react. Look at the TV. Breathe through your nose.)",
          "them": [
            {
              "note": "You stare at the paused frame on the TV. A woman in a raincoat. You stare at the raincoat."
            },
            {
              "note": "Dylan runs his thumb slowly down your sole, heel to toes. Your foot jerks. You keep your face still."
            },
            "\"Ooh. He's tough. Han, he's being tough.\"",
            "Dylan, he obviously doesn't want you to.",
            "\"He hasn't said that.\" He looks at you. \"You said that, buddy?\"",
            {
              "note": "You can't open your mouth. If you open your mouth it's over. You shake your head a tiny bit and stare at the raincoat."
            },
            {
              "note": "He switches to his fingertips, right under your toes, fast and light. Kate makes a noise into her wine glass. The pink toes curl so hard they go white."
            }
          ],
          "replies": [
            {
              "you": "(Hold it. Hold it. Hold it.)",
              "them": [
                {
                  "note": "You hold it. Your jaw aches. Your eyes water. You don't make a sound."
                },
                {
                  "note": "Dylan keeps going for what feels like a full minute. Then he digs in under your toes one last time, and you still don't make a sound."
                },
                "\"Huh,\" Dylan says, and lets go. He sounds a bit disappointed. \"Okay. Respect.\"",
                "Pay up.",
                "\"We never shook on it.\"",
                "Pay. Up. Dylan."
              ],
              "replies": [
                {
                  "you": "(Calmly take your foot back and move closer to Hannah.) Can you press play, Kate?",
                  "outcome": "held",
                  "spark": 22,
                  "them": [
                    {
                      "note": "You get up, step over Dylan's legs, and sit down on Hannah's other side. She shifts over to make room. Her shoulder touches yours."
                    },
                    "Okay. That was actually impressive.",
                    "I'd have kicked him in the face.",
                    "\"She did once,\" Dylan says. \"At uni.\"",
                    {
                      "note": "Kate presses play. Twenty minutes later Hannah's leaning on you a bit. Dylan watches the movie with his arms folded, a bit quieter than before."
                    }
                  ],
                  "after": "Hannah, to Kate, in the kitchen after: \"he didn't even laugh\" Kate: \"dylan's so annoyed\" Hannah: \"good\" Kate: \"you sat with him the whole movie\" Hannah: \"yeah. i did.\""
                },
                {
                  "you": "(Wiggle your toes at him.) Want to try the other foot?",
                  "outcome": "held",
                  "spark": 16,
                  "them": [
                    "\"Oh, he's cocky now,\" Dylan says, and grabs the other foot before you've finished the sentence.",
                    {
                      "note": "This one's worse. He goes straight for the soft bit under your toes. A noise comes out of your nose. Just one. You turn it into a cough."
                    },
                    "\"That was a laugh.\"",
                    "That was a cough. Let go of him.",
                    {
                      "note": "He lets go. You win, sort of. But Hannah's laughing now, and she's laughing at something Dylan says under his breath, and she doesn't move over."
                    },
                    "\"Next time,\" Dylan says, and points at you. \"Next time, sweetheart.\""
                  ],
                  "after": "Hannah, to Kate: \"he basically won\" Kate: \"he coughed\" Hannah: \"it was a laugh. i know what his laugh sounds like\" Kate: \"dylan's asking if you want a lift home\" Hannah: \"...tell him maybe\""
                }
              ]
            },
            {
              "you": "(It's too much. A giggle breaks out.)",
              "them": [
                {
                  "note": "It starts as a squeak. Then it's a high, helpless giggle, and once it's out you can't put it back. You fold up on the couch, trying to pull your foot back, and Dylan holds the ankle without even trying."
                },
                "\"THERE it is!\" Dylan says. \"Han! Ten bucks!\"",
                "Oh my god.",
                {
                  "note": "Kate's filming. Of course Kate's filming. You can hear yourself on her phone, a squeaky little giggle that doesn't sound like you at all."
                },
                "\"Listen to him. He sounds like a cartoon mouse.\""
              ],
              "replies": [
                {
                  "you": "(Through the giggles) Okay! Okay, you got me! You win!",
                  "outcome": "cracked",
                  "spark": 10,
                  "them": [
                    {
                      "note": "He lets go straight away, holding both hands up like a footballer who didn't do it."
                    },
                    "\"I always win, buddy.\"",
                    {
                      "note": "You sit up. Your face is hot. Your hair's a mess. You try to laugh it off like it was nothing, and it comes out as one more little giggle, and Dylan points at you again."
                    },
                    "Here.",
                    {
                      "note": "Hannah gives Dylan a ten dollar note out of her phone case. He folds it in half very slowly, looking at her, and puts it in his shirt pocket."
                    },
                    "\"Gonna frame that,\" he says. \"Or buy you a drink with it. Friday?\"",
                    {
                      "note": "Hannah doesn't say no. She just tells Kate to press play."
                    }
                  ],
                  "after": "Kate, to Hannah, at midnight: \"[video]\" Hannah: \"delete that\" Kate: \"no\" Hannah: \"he sounds like a squeaky toy\" Kate: \"he does. dylan's played it four times\" Hannah: \"...send it to me\""
                },
                {
                  "you": "(Bright red, giggling) Stop! Dylan, stop!",
                  "outcome": "cracked",
                  "spark": 8,
                  "them": [
                    {
                      "note": "He stops the second you say it and lets go."
                    },
                    "\"Stopping. Stopped. Look, no hands.\"",
                    {
                      "note": "You pull both feet up under you and sit on them. Your whole face is burning. You can't look at anyone."
                    },
                    "Are you okay?",
                    {
                      "note": "She asks it like you're a kid who fell off a scooter. Then she turns round to Dylan and they both start laughing, quietly, into the same cushion."
                    },
                    "\"Sorry, buddy,\" he says. He doesn't sound sorry. \"Didn't know you'd go that high.\""
                  ],
                  "after": "Hannah, to Kate, at 1am: \"he went SO red\" Kate: \"you and dylan laughed into the same cushion for ten minutes\" Hannah: \"we did not\" Kate: \"i have it on video\" Hannah: \"why do you have everything on video\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're already giggling before he's started.)",
          "them": [
            {
              "note": "You don't stand a chance. His thumb barely moves and you're gone: high, squeaky giggles, grabbing a cushion, kicking your other foot against the arm of the couch."
            },
            "\"Oh no,\" Dylan says, delighted. \"Oh no, he's so ticklish. Han. HAN.\"",
            "I can see.",
            {
              "note": "He gets both hands on it. One holds the ankle. The other one runs up and down your sole, between your toes, under the arch. Every time you think you've got it under control, he finds a new spot."
            },
            "\"Pink toes AND ticklish. Han, where did you find this guy?\"",
            {
              "note": "Kate's laughing so hard she's lying on the carpet. Two of Kate's friends have come in from the kitchen to see what the noise is."
            }
          ],
          "replies": [
            {
              "you": "(Giggling) Dylan! Please! Please please stop!",
              "them": [
                {
                  "note": "He stops straight away and lets go of your foot. You collapse into the corner of the couch, panting, giggling at nothing."
                },
                "\"He said please,\" Dylan says. \"Three times. Han, he said please three times.\"",
                "I heard.",
                {
                  "note": "Then he puts his hand back on your ankle. He's not tickling, just holding it. He looks at you with his eyebrows up."
                },
                "\"One more go? Ten seconds. For the people in the kitchen.\""
              ],
              "replies": [
                {
                  "you": "(Pull your foot away.) No! No more. I'm done.",
                  "outcome": "begged",
                  "spark": 6,
                  "them": [
                    "\"Fair enough,\" Dylan says, and lets go. \"Sorry, sweetheart. Couldn't help it.\"",
                    {
                      "note": "You sit with your knees pulled up for the rest of the movie, feet tucked under a cushion where nobody can reach them."
                    },
                    {
                      "note": "Hannah sits on the other side of Dylan the whole time. At one point she leans over and says something in his ear, and he laughs, and they both look at your cushion."
                    },
                    "You're fine. It was funny.",
                    {
                      "note": "She says it without looking away from the TV. Her hand's on Dylan's side of the cushion."
                    }
                  ],
                  "after": "Hannah, to Kate: \"he begged. like actually begged\" Kate: \"he said please three times\" Hannah: \"in a little voice\" Kate: \"dylan asked for your number again\" Hannah: \"he has my number\" Kate: \"he said he wants to ask properly this time\" Hannah: \"...ok\""
                },
                {
                  "you": "(Giggling, red) ...Okay. Ten seconds.",
                  "outcome": "kept",
                  "spark": 3,
                  "gaydar": 96,
                  "them": [
                    {
                      "note": "The kitchen people cheer. Dylan counts down from ten out loud, slowly, while he does it. You're squealing from 'ten'."
                    },
                    {
                      "note": "At 'one' he keeps going for another five seconds. You're laughing too hard to say anything. Then he stops and lets go."
                    },
                    "\"Best ten seconds of my life,\" Dylan says.",
                    "Okay, I'm going to go and get a drink.",
                    {
                      "note": "Hannah gets up. Dylan says \"grab me one\" and she does. She hands it to him on her way back and sits down next to him, a bit closer than before."
                    },
                    {
                      "note": "You lie on the end of the couch with your feet in the air, still giggling. Nobody's watching the movie."
                    }
                  ],
                  "after": "Kate, in the group chat: \"[video] he asked for MORE\" Kate's friend: \"he asked for more??\" Kate: \"ten seconds. dylan did fifteen\" Hannah: \"can we stop talking about my date's feet\" Kate: \"is he your date\" Hannah: \"...\""
                }
              ]
            },
            {
              "you": "(Stop fighting it. Let him keep going.)",
              "them": [
                {
                  "note": "You stop pulling. You lie back across the end of the couch, laughing so hard you can barely breathe, toes wriggling in his hand."
                },
                "\"He's not even trying to get away,\" Kate's friend says.",
                "\"He loves it,\" Dylan says. \"Look at him. He loves it.\"",
                {
                  "note": "It goes on. And on. He does the arch, the heel, the gaps between your toes, then back to the arch. You've got tears running into your ears."
                },
                {
                  "note": "Hannah's stopped laughing. She's just watching, holding her drink with both hands."
                },
                "{name}. You can tell him to stop, you know."
              ],
              "replies": [
                {
                  "you": "(Gasping) S-stop. Stop. Okay. Stop.",
                  "outcome": "kept",
                  "spark": 2,
                  "gaydar": 97,
                  "them": [
                    {
                      "note": "He stops the moment you say it and lets go."
                    },
                    "\"Two minutes,\" Kate says, looking at her phone. \"That was two full minutes.\"",
                    {
                      "note": "You lie there with your hair stuck to your forehead and your pink toes still curling on their own. Dylan pats your ankle twice, like you're a dog who did a good trick."
                    },
                    "\"Good effort, champ.\"",
                    {
                      "note": "Then he turns to Hannah. \"Drink? Kitchen?\" And she says yes, and they go, and they're in the kitchen for the rest of the movie."
                    }
                  ],
                  "after": "Kate, to Hannah, at 2am: \"you were in the kitchen with dylan for an hour\" Hannah: \"we were talking\" Kate: \"about what\" Hannah: \"his feet thing. the tickling. he was laughing about it\" Kate: \"and\" Hannah: \"and then we weren't talking about that\""
                },
                {
                  "you": "(Can't say anything. Just keep laughing.)",
                  "outcome": "kept",
                  "spark": 0,
                  "gaydar": 98,
                  "them": [
                    {
                      "note": "You can't get a word out. You're laughing too hard. Dylan keeps going."
                    },
                    "Dylan. Enough.",
                    {
                      "note": "Hannah says it flat, and he stops straight away and lets go."
                    },
                    "\"He didn't say stop,\" Dylan says.",
                    "He couldn't say anything. Look at him.",
                    {
                      "note": "You're lying on Kate's white carpet now. You don't remember sliding off the couch. Kate's friend is filming from above."
                    },
                    {
                      "note": "Hannah looks down at you, then at Dylan, and goes to get her keys."
                    },
                    "I'm going to head off. Dylan, you're driving me? You've had one beer.",
                    "\"Yeah,\" Dylan says, already getting up. \"Yeah, I'm driving you.\""
                  ],
                  "after": "Hannah, to Kate, from Dylan's car: \"im not being mean\" \"i just watched a grown man giggle on your carpet for three minutes\" \"like i couldnt even fancy him a little bit\" Kate: \"and dylan\" Hannah: \"dylan's driving me home\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "Being ticklish is just how your body is. Hannah had mostly made up her mind before the movie started."
    },
    {
      id: "hannah-end", route: "hannah", gaydar: 99, spark: 0, gaydarSays: "Brodie owns four pairs of steel caps and zero lip products. I've never been happier.", title: "Hannah and Brodie", contact: "Hannah", irl: true,
      outfits: [
        { label: "Jeans, a nice top and just lip oil. Keep it low-key.", gaydar: -2, intro: "Six weeks later. Jess's birthday drinks at a pub in Newstead. You went low-key: jeans, a black top, lip oil. Then Hannah walks in. With a guy." },
        { label: "Your going-out look: a sheer top, lashes, gloss, a little bag", intro: "Six weeks later. Jess's birthday drinks at a pub in Newstead. You did your going-out look: a sheer black top, gold rings, lashes, gloss and the little shoulder bag. Then Hannah walks in. With a guy." },
        { label: "Full glam: a satin top, lashes, contour, heeled boots, pink nails", gaydar: 1, intro: "Six weeks later. Jess's birthday drinks at a pub in Newstead. Full glam. Satin top, lashes, a proper contour, heeled boots, pink nails, the works. Two of Jess's work friends have already asked where you got your boots. Then Hannah walks in. With a guy.", them: [{ note: "She sees your boots before she sees your face. She almost smiles." }] }
      ],
      them: [
        { note: "He's huge. Hi-vis still on under his flannel, a pint in each hand." },
        "Oh. Hi, {name}. Didn't know you'd be here. Well, I did. Jess said. This is Brodie.",
        { note: "Brodie puts down a pint and shakes your hand so hard your rings click together." },
        "\"Hey man. Brodie. Electrician. Han's told me a lot about you.\" He looks at your nails. \"Nice nails, man. My niece does hers like that.\"",
        "We've been seeing each other a few weeks. Jess said she told you.",
        {"if":"hannah-tickle=held","text":"\"Hang on,\" Brodie says. \"Are you the guy Dylan tried to tickle? He said you didn't even blink. He's still annoyed about it. Respect, man.\""},
        {"if":"hannah-tickle=cracked|begged|kept","text":"\"Hang on,\" Brodie says, and starts grinning. \"You're the ticklish guy. Dylan showed the whole pub the video. The squeaky one.\""},
        {"if":"hannah-tickle=cracked|begged|kept","note":"Hannah looks at the floor. Brodie looks at your shoes like he's wondering what's inside them."}
      ],
      replies: [
        { you: "Oh my god, hi Brodie! Love the hi-vis, very rugged. Han, he's gorgeous. I'm so happy for you, babe, honestly.",
          them: [
            { note: "Hannah stares at you for a second." },
            "Thanks. He is.",
            "Don't take this the wrong way but I'm glad we stopped at three dates.",
            "You're just not my type. I don't know what I was doing. Like. Brodie's my type.",
            "Anyway you look good.",
            { note: "Brodie has wandered off to watch the game on the TV above the bar." }
          ],
          replies: [
            { you: "I'm not... it's not like that, Han. I'm just more comfortable now. That's all.",
              them: ["Okay.", "Brodie's going to ask you about the rugby in a minute. Just say the refs were terrible, he'll be happy."] },
            { you: "Honestly? I do look happier. I feel happier. I just don't know what that means yet.",
              them: ["Mm.", "Okay.", { note: "She goes back to Brodie, who's yelling at a TV with the sound off." }] }
          ] },
        { you: "He's very... blokey. Like, very manly. Is that what you wanted? I didn't think you were into that.",
          them: [
            "Yeah. It's exactly what I wanted.",
            "No offence but after you I wanted someone who'd never ask where a jacket's from. He buys his clothes at the hardware store.",
            "And he looks at me when we're out. Like the whole time. It's nice.",
            "And I can wear heels with him."
          ],
          replies: [
            { you: "That's fair. I'm glad you found that. I really am.", them: ["Thanks.", "Honestly you'd be fun to go shopping with. That's about it though lol", "Go on, Jess is doing shots."] },
            { you: "Babe. He buys his clothes at THE HARDWARE STORE?", them: [{ note: "She laughs, a proper one." }, "He does. He's got like six of the same shirt.", "Go away {name}, Jess is doing shots."] }
          ] },
        { you: "(Go over to Brodie.) Um. Hi. Sorry. Can I borrow you for a sec? It's about Hannah.",
          them: [
            "\"Borrow me?\" Brodie says, loud enough for his friends at the bar to hear. He puts his pint down and leans right down to your height. \"Go on then, man.\"",
            { note: "He smells like body spray. You had a whole speech ready on the drive over. It's gone." },
            "\"Take your time. I've got all night.\""
          ],
          replies: [
            { you: "I think I want her back. Sorry. I know you're with her. I just wanted to say it to you first.",
              them: [
                "\"You want her back,\" Brodie says. He looks you up and down, slowly, from your rings to your shoes. Then he laughs. \"Yeah, okay.\"",
                "\"Han! Your ex wants to fight me for you!\"",
                { note: "His friends turn round. One of them raises his pint at you." },
                "\"I'm shaking, man. Look.\" He holds his hand out flat. It's dead still.",
                { note: "Hannah comes over and puts her hand on your shoulder." },
                "Brodie. Leave him alone.",
                "{name}. You said sorry like three times.",
                "No. Obviously no. But that was kind of cute.",
                { note: "She kisses you on the cheek and goes back to Brodie." }
              ] },
            { you: "...Never mind. Sorry. Your arms are really big. Sorry. Bye.",
              gaydar: 100,
              them: [
                "\"There it is,\" Brodie says, grinning, and flexes a bit. \"Han, I think your ex has got a crush on me.\"",
                { note: "You go red from your neck up. His friends are laughing. Hannah's got her hand over her mouth." },
                "Oh my god, {name}.",
                "You went over there to get me back.",
                "Don't even. Your whole face is pink."
              ] }
          ] },
        { you: "(Smile, say 'nice to meet you, Brodie', then go and hide in the bathroom with Jess.)",
          them: [
            { note: "In the bathroom Jess fixes your hair, which doesn't need fixing, and says nothing for a full minute." },
            "\"You okay?\" Jess says eventually.",
            { note: "Through the door you can hear Brodie telling someone about a switchboard." },
            "\"He's literally the straightest man I've ever seen,\" Jess says. \"She went from you to that. She's running the other way, babe.\""
          ],
          replies: [
            { you: "The other way from what, Jess?", them: ["\"From you,\" Jess says.", "\"Come on. Shots.\""] },
            { you: "I'm fine. I'm actually fine. Weirdly. He seems nice.", them: ["\"He is nice,\" Jess says. \"He told me about switchboards for ten minutes.\"", "\"Shots. Come on.\""] }
          ] }
      ],
      after: "Later, Hannah, to Jess, outside by the Ubers: \"he looked so good tonight. better than me again lol\" Jess: \"he did\" Hannah: \"i dont miss him. i thought i would\" \"i think hes going to meet some guy and be really happy\" Jess: \"yeah\" Hannah: \"brodie asked if he plays touch\"",
      debrief: "It's weird seeing her that happy with someone so different. It's not a ranking."
    },
    {
      id: "mia-1", route: "mia", gaydar: 15, gaydarSays: "Really nice. Smelled better than me?? Which is fine. Cute??", title: "Dumplings", contact: "Mia",
      outfits: [
        { label: "Jeans and a hoodie. Low effort.", gaydar: -10, intro: "Sam from work set you up with her cousin Mia. \"She's sweet, she's shy, don't be weird.\" First date: dumplings in Sunnybank. You wore jeans and a grey hoodie. Mia wore a yellow sundress and kept apologising for things that weren't her fault." },
        { label: "A linen shirt and your silver rings", intro: "Sam from work set you up with her cousin Mia. \"She's sweet, she's shy, don't be weird.\" First date: dumplings in Sunnybank. You wore a white linen shirt and your silver rings. Mia wore a yellow sundress and kept apologising for things that weren't her fault." },
        { label: "Linen shirt, rings, and a bit of tinted lip balm", gaydar: 5, intro: "Sam from work set you up with her cousin Mia. \"She's sweet, she's shy, don't be weird.\" First date: dumplings in Sunnybank. A white linen shirt, your rings, and a tinted lip balm you told yourself was just for the dry air. Mia wore a yellow sundress and kept apologising for things that weren't her fault." }
      ],
      them: ["hi!! sorry is this too soon", "i just wanted to say thanks for tonight i had a really nice time", "and sorry about the soy sauce", "and for talking about my cat the whole time lol. mochi. you probably remember"],
      replies: [
        { you: "Don't be sorry! I loved hearing about Mochi. And your dress was so pretty, that yellow is so you.",
          them: [
            "omg thank you",
            "nobodys ever said that",
            "my last boyfriend said i looked like a banana in it so",
            "anyway would you want to hang out again?? no pressure"
          ],
          replies: [
            { you: "Stop saying sorry! Yes, I'd love to. What about Eat Street next weekend?", them: ["yes!! i love eat street", "ok no more sorry", "saturday 😊"] },
            { you: "A banana? He needs his eyes checked. Yes, let's hang out again.", them: ["😭 thank you", "ok saturday? eat street? i'll try not to spill anything"] }
          ] },
        { you: "I had a really nice time too, Mia. You're easy to be around.",
          them: ["really?? i thought i was so awkward", "can i see you again?"],
          replies: [
            { you: "Yeah, of course. You pick where.", them: ["eat street? saturday? it's so loud there that i can't be awkward because you can't hear me lol"] },
            { you: "Only if Mochi comes.", them: ["😭😭 she would bite you", "but she might like you. she likes people who smell nice and you smelled really nice", "eat street saturday?"] }
          ] },
        { you: "Did the soy sauce get your dress? I know a trick for that. Dish soap and cold water. Sorry. Weird thing to know.",
          gaydar: 20,
          them: ["omg it did!! its on the hem", "wait cold? not hot?", "lol im getting stain tips from a boy", "can i see you again?"],
          replies: [
            { you: "Cold. Never hot, it sets it. And yes. Saturday?", them: ["ok cold. noted 😊", "eat street saturday?"] },
            { you: "Your last boyfriend sounds like a banana.", them: ["😭😭", "he kind of was", "eat street saturday?"] }
          ] },
        { you: "The dumplings were amazing. Did you see the guy making them in the window? His hands were so fast.",
          gaydar: 20,
          them: ["haha yes", "you were really into it lol i thought you were going to ask for his number", "kidding!! sorry", "can i see you again?"],
          replies: [
            { you: "Ha! No, just appreciating the craft. Yes, let's do it again.", them: ["😊 eat street? saturday?"] },
            { you: "I mean, if he'd given me his number I wouldn't have said no. For dumpling reasons.", gaydar: 25, them: ["lol", "for dumpling reasons", "ok um. eat street saturday?"] }
          ] }
      ],
      after: "Mia, to Sam: \"he's so nice!!\" Sam: \"told you\" Mia: \"he smelled really good. like better than me?\" Sam: \"...thats nice\""
    },
    {
      id: "mia-2", route: "mia", gaydar: 45, gaydarSays: "He stopped dead at an earring stall. Like properly stopped. Sorry. I don't know what that means.", title: "Eat Street", contact: "Mia", irl: true,
      outfits: [
        { label: "A tee and jeans, rings on", gaydar: -5, intro: "Second date. Eat Street Northshore on a Saturday night, fairy lights and too many people. You wore a plain tee, jeans and your rings. Mia's in a little denim skirt and keeps checking you can hear her over the music." },
        { label: "A cropped tee, rings and a clear lip gloss", intro: "Second date. Eat Street Northshore on a Saturday night, fairy lights and too many people. You wore a cropped white tee, your rings and a clear lip gloss. Mia noticed the crop top first. She said \"cute top\" in a small voice and then didn't look at your stomach again all night." },
        { label: "A cropped tee, gloss and your nails painted pale pink", gaydar: 5, intro: "Second date. Eat Street Northshore on a Saturday night, fairy lights and too many people. A cropped white tee, clear gloss and nails painted pale pink. Mia noticed the nails while you were paying for gyoza and went quiet for a whole stall.", them: [{ note: "She keeps glancing at your pink nails every time you point at something." }] }
      ],
      them: [
        "Okay, I've decided we're getting the mac and cheese spring rolls, and then churros, and then I'm going to be sick, probably. Sorry. That's a lot of food.",
        { note: "You walk past a little jewellery stall. You stop. You don't mean to." },
        "Oh, do you like those? The little gold ones? They're so pretty. Are they for... someone?"
      ],
      replies: [
        { you: "They're for me, actually. I've been wanting little hoops for ages. Do you think they'd suit me? Be honest.",
          them: [
            { note: "Mia blinks. Then she nods a lot, very fast." },
            "Oh! For you. Yes! Totally. They'd suit you. You've got the face for it. Like the jaw. Sorry, I'm being weird.",
            "My friend's boyfriend has an earring. One. In one ear. That's normal. Two is also normal. Sorry. I'm going to stop talking.",
            { note: "The stall lady holds a mirror up for you. You put them in. They look good. Mia says \"oh\" very quietly." }
          ],
          replies: [
            { you: "Oh my god, I love them. I'm getting them. Do you want a pair too? We can match!",
              gaydar: 55,
              them: [
                "Match?",
                "Um. Sure! Yeah. Cute.",
                { note: "She buys a pair and puts them in her bag, not her ears. She holds your hand for the rest of the night, but loosely." }
              ] },
            { you: "Actually, never mind. They're a bit much. Let's get the spring rolls.",
              them: ["No! They looked nice. You should get them if you want them.", "Sorry. I just mean, don't not get them because of me. I don't mind. I really don't.", { note: "She's already walking towards the spring rolls." }] }
          ] },
        { you: "Ha, no, I was just looking. Spring rolls! Lead the way.",
          them: [
            "Okay! This way. Hold my hand so we don't get separated, it's so busy.",
            { note: "She takes your hand. She looks down at your nails while she does it." },
            "Your hands are so soft. Do you use a hand cream? Sorry. Random question."
          ],
          replies: [
            { you: "L'Occitane. The shea one. It's honestly the best one, you have to try it. I'll lend you mine.", gaydar: 50, them: ["Oh. Okay. You... carry it with you?", "That's... yeah. Cool. Sorry. Spring rolls."] },
            { you: "Not really. Just lucky I guess.", them: ["Lucky. Okay. They're really soft.", "Sorry. I keep saying weird things. Spring rolls!"] },
            { you: "They're soft because I've never done a day of real work. Don't ask me to change a tyre.", them: ["Ha! No, that's okay.", "Hayley's flatmate Theo does everything at their place. He's got like, builder hands.", "Yours are nicer. Sorry. I don't know why I said that.", { note: "She keeps holding your hand. Her thumb goes over your nails, not your knuckles." }] }
          ] },
        { you: "They're for my friend Nicole. She'd love them. I've got really good taste in earrings, if I do say so myself.",
          them: ["You do! They're so pretty. She's lucky.", "Do you buy jewellery for your friends a lot?", { note: "She says it nicely." }],
          replies: [
            { you: "All the time. Me and Nicole go to Sephora every month. It's our thing.", gaydar: 50, them: ["Oh. That's... nice. That you have a thing.", "I don't really go to Sephora. It's a bit much for me. Sorry."] },
            { you: "Only for special people. Like you, maybe. If you're lucky.", them: [{ note: "She goes pink and laughs." }, "Oh! Stop. Okay. Spring rolls."] }
          ] }
      ],
      after: "Mia, to Sam, from the Uber home: \"had fun\" \"he REALLY liked the earrings at this one stall\" Sam: \"ok?\" Mia: \"idk\" \"his hands are softer than mine sam\" Sam: \"hes my coworker not my problem lol\""
    },
{
      "id": "mia-feet",
      "route": "mia",
      "gaydar": 65,
      "spark": 40,
      "gaydarSays": "Theo grabbed his foot in front of everyone and I didn't know where to look. Sorry.",
      "title": "Socks off",
      "contact": "Mia",
      "irl": true,
      "intro": "Mia's friend Hayley's birthday at her flat in West End. Socks off at the door, new floorboards. You've got clear polish on your toes and a pale pink on the big ones, because you were trying something. Hayley's flatmate Theo is here. Mia told you, very quietly, that he asked her out last year and she said maybe.",
      "them": [
        {
          "note": "You line your shoes up at the door with everyone else's. Mia looks at your big toes and says \"oh\" in her small voice. Then \"sorry. they're nice.\""
        },
        {
          "note": "Everyone sits on the floor round the coffee table for cards. Theo sits across from you, stretches his legs out, and finds your foot under the table with his hand."
        },
        "\"Who's got the pink toes?\" He holds your ankle up so everyone can see. \"Mia, is this yours?\"",
        "No. Sorry. That's... that's {name}.",
        "\"Oh, it's his.\" He grins and doesn't let go. \"Let's see how tough he is.\" He drags his nails down your sole."
      ],
      "replies": [
        {
          "you": "(Keep your face completely still. Look at your cards.)",
          "them": [
            {
              "note": "You stare very hard at a seven of hearts. Your foot twitches. Theo leans in and goes for the spot right under your toes."
            },
            "\"He's shaking,\" Hayley says. \"Look at his face.\"",
            {
              "note": "Mia's peeking at you over her cards, biting her lip."
            }
          ],
          "replies": [
            {
              "you": "(Hold it. Swallow it.) Your go, Theo.",
              "spark": 45,
              "them": [
                "\"Huh,\" Theo says, and lets go. \"Not ticklish. Boring.\"",
                {
                  "note": "Mia lets out a breath and shuffles a little closer to you. Her knee's touching yours."
                },
                "Sorry. I thought you were going to lose it.",
                "\"Nope,\" you say. Your foot's still tingling."
              ],
              "after": "Mia, to Sam, that night: \"theo tried to tickle him\" Sam: \"and?\" Mia: \"he didn't even laugh. he just said 'your go'\" Mia: \"sorry. that was kind of hot\""
            },
            {
              "you": "(You can't. You squeak.)",
              "spark": 30,
              "them": [
                {
                  "note": "A noise comes out of you like a kettle. Then the giggles. Cards go everywhere."
                },
                "\"There we go!\" Theo says, delighted, and keeps going. \"Mia, he squeaks!\"",
                "\"Stop! Stop, okay, okay!\"",
                {
                  "note": "He stops. You're on your back on the floorboards. Hayley's crying laughing. Mia's laughing too, with her hand over her mouth, and she's laughing at something Theo whispers to her."
                }
              ],
              "after": "Mia, to Sam: \"he made a noise like a kettle\" Sam: \"lol\" Mia: \"sorry i shouldn't laugh\" Mia: \"theo walked me to my car after\""
            }
          ]
        },
        {
          "you": "(Give up straight away. Giggle.)",
          "them": [
            {
              "note": "You don't stand a chance. You're giggling before he's even properly started, trying to wriggle away across the floorboards, and he just pulls you back by the ankle."
            },
            "\"Oh, he's SO ticklish,\" Hayley says.",
            {
              "note": "Theo grabs your other foot too. Now he's got both."
            }
          ],
          "replies": [
            {
              "you": "(Giggling) Mia! Help! Tell him to stop!",
              "spark": 20,
              "them": [
                "Um. Theo. Sorry. You should... stop?",
                "You sound like Mochi at the vet. Sorry.",
                {
                  "note": "Theo stops, because Mia asked. He winks at her. \"Anything for you.\""
                },
                {
                  "note": "You sit up, pink in the face, tucking both feet under you. Mia goes back to her cards. She doesn't sit closer to you this time."
                }
              ],
              "after": "Mia, to Sam: \"he yelled for me to save him\" Mia: \"from being tickled\" Mia: \"idk how i feel about it\""
            },
            {
              "you": "(Lie back and laugh. Let him.)",
              "spark": 10,
              "gaydar": 72,
              "them": [
                {
                  "note": "You just lie there on Hayley's floorboards and giggle and squeal while Theo tickles both your feet. Your toes curl and uncurl. Someone puts on music like it's a show."
                },
                "\"He's not even fighting,\" Hayley says.",
                {
                  "note": "You say \"okay stop\" at last, and he stops straight away. You lie there, out of breath, grinning at the ceiling."
                },
                {
                  "note": "When you sit up, Mia's moved. She's sitting next to Theo now, laughing at something on his phone."
                }
              ],
              "after": "Mia, to Sam: \"he just let theo do it. for ages. he was LOVING it\" Sam: \"ha\" Mia: \"idk. i kind of went and sat with theo after\""
            }
          ]
        }
      ],
      "debrief": "Being ticklish is just a body thing. Nobody there will remember it as much as you do."
    },
    {
      "id": "mia-barefoot",
      "route": "mia",
      "gaydar": 72,
      "spark": 34,
      "gaydarSays": "He was so worried about his toes all night. Everyone saw them anyway. Sorry.",
      "title": "No shoes home",
      "contact": "Mia",
      "irl": true,
      "intro": "Still Hayley's birthday. Around eleven it pours, and the shoe pile by the door was under the gutter. Your sneakers are full of water. Mia's are too, but she's got a spare pair of Hayley's flats. Nobody has a spare pair in your size. The plan is dumplings on Boundary Street, two blocks away, and everyone's going.",
      "them": [
        {
          "note": "Mia holds up one of your sneakers. Water runs out of it onto the mat."
        },
        "Oh no. Sorry. That's so bad.",
        "Do you want to just come barefoot? It's not far.",
        {
          "note": "Theo's already out the door in his own dry boots. \"Come on, pink toes,\" he calls back up the stairs."
        }
      ],
      "replies": [
        {
          "you": "It's fine. It's a footpath. People walk on footpaths.",
          "them": [
            {
              "note": "You walk the two blocks barefoot. The footpath's wet and cold and you walk on the sides of your feet, toes curled under, like that makes them less pink."
            },
            "Are you ok? You're walking funny.",
            "\"I'm walking normally.\"",
            {
              "note": "At the dumpling place you sit down and pull both feet up under you on the chair. Mia notices."
            },
            "You can put your feet down. Nobody's looking."
          ],
          "replies": [
            {
              "you": "(Keep them tucked under.) I'm comfy like this.",
              "spark": 36,
              "them": [
                {
                  "note": "You eat a whole plate of dumplings sitting on your feet. Your legs go numb. You don't move."
                },
                "You're very stubborn. Sorry. That's not bad.",
                {
                  "note": "She nudges the soy sauce towards you and her fingers touch yours for a second."
                }
              ],
              "after": "Mia, to Sam, the next day: \"he sat on his feet the whole time so no one would see his toes\" Sam: \"did it work\" Mia: \"no lol. he tried really hard though\""
            },
            {
              "you": "(Put them down. Go red.) They're so pink under these lights.",
              "spark": 24,
              "them": [
                {
                  "note": "You put your feet flat on the cold tiles. Under the fluorescent lights the pink on your big toes is very pink."
                },
                "They're nice though. Sorry. I keep saying that.",
                "\"Theo's going to bring it up forever.\"",
                {
                  "note": "Theo, from the next table, without looking up: \"Forever.\""
                }
              ],
              "after": "Mia, to Sam, the next day: \"he went so red about his toes. like the whole meal\" Sam: \"was it bad\" Mia: \"no. i just kept thinking theo wouldn't go red about anything\""
            }
          ]
        },
        {
          "you": "Can I borrow socks? Any socks. Anyone's socks.",
          "them": [
            "\"I've got socks,\" Theo says, coming back up the stairs. He holds up a pair. They're Hayley's. They've got little cats on them.",
            "Oh. They're cute. Sorry.",
            {
              "note": "You put on the cat socks. They come up to your ankles and they're far too small, and now you're walking to dumplings in tiny cat socks."
            }
          ],
          "replies": [
            {
              "you": "(Pretend this is a choice.) I actually like cats.",
              "spark": 30,
              "them": [
                "\"You look great,\" Theo says. \"Really committing.\"",
                {
                  "note": "Mia walks next to you the whole way. She keeps looking at your feet and then pressing her lips together."
                },
                "I'm not laughing. Sorry. I'm not.",
                "You look like you're going to a sleepover."
              ],
              "after": "Mia, to Sam: \"he walked to dumplings in hayley's cat socks\" Sam: \"stop\" Mia: \"they were so small on him. theo took a photo. i asked him to delete it\" Sam: \"did he\" Mia: \"no\""
            },
            {
              "you": "(Take them off again halfway.) These are worse. These are so much worse.",
              "spark": 26,
              "them": [
                {
                  "note": "Halfway down the block you stop, peel the cat socks off and stuff them in your pocket. Now you're barefoot and holding wet cat socks."
                },
                "\"Lasted a whole block,\" Theo says.",
                "It's ok. Sorry. You look fine. You look... yeah."
              ],
              "after": "Mia, to Sam: \"he gave up on the socks after one block\" Sam: \"so barefoot\" Mia: \"barefoot with pink toes at the dumpling place. theo walked me to my bus after.\""
            }
          ]
        },
        {
          "you": "I'll just go home. It's fine. You go.",
          "them": [
            "No, come. Please. Sorry. It's Hayley's birthday.",
            {
              "note": "Hayley yells from the kitchen: \"If you leave because of your feet I'll never forgive you.\""
            },
            {
              "note": "So you go. Barefoot. At the restaurant the waiter looks at your feet, then at you, then gives you the table by the window."
            }
          ],
          "replies": [
            {
              "you": "Of course it's the window table.",
              "spark": 32,
              "them": [
                "It's a good table though.",
                {
                  "note": "You sit with your feet hooked behind the chair legs, out of sight. Mia sits next to you instead of across from you, which means she can see them anyway."
                },
                "I'm not looking. Sorry."
              ],
              "after": "Mia, to Sam: \"he was so embarrassed about his feet but he still came\" Sam: \"aww\" Mia: \"yeah hes sweet. idk\""
            },
            {
              "you": "(Say nothing. Order very fast. Stare at the menu.)",
              "spark": 28,
              "them": [
                {
                  "note": "You order eight dumplings in about two seconds and stare at the menu until they come. Theo spends the whole meal telling the table about your toes."
                },
                "He's just joking. Sorry. He does that.",
                "\"He does,\" Theo says, and pours her tea."
              ],
              "after": "Mia, to Sam: \"theo told everyone about the pink toes\" Sam: \"was {name} ok\" Mia: \"he went quiet. theo poured my tea. i don't know why i noticed that\""
            }
          ]
        }
      ],
      "after": "You get home at one with wet sneakers in a plastic bag and black soles on both feet.",
      "debrief": "Your feet are just feet, even pink ones. The night kept going either way."
    },
    {
      id: "c6", route: "mia", gaydar: 85, gaydarSays: "He asked if my top was from Zara while I was putting. Sorry. I had to go home.", title: "Mini golf", contact: "Mia",
      intro: "Third date. Mini golf at South Bank. You went further this time: wide-leg trousers, a cropped cardigan, the gold hoops from Eat Street, a proper rosy lipstick. You felt good walking out the door. Mia said \"oh\" when she saw you, then \"hi\". She left after nine holes.",
      outfits: [
        { label: "Jeans, a cropped cardigan, the hoops, rosy lipstick", gaydar: -5, intro: "Third date. Mini golf at South Bank. Jeans and sneakers so it's \"normal\", but a cropped cardigan, the gold hoops from Eat Street and a proper rosy lipstick on top. Mia said \"oh\" when she saw you, then \"hi\". She left after nine holes." },
        { label: "Wide-leg trousers, cropped cardigan, gold hoops, rosy lipstick" },
        { label: "A pleated skirt, cropped cardigan, gold hoops, lipstick and a handbag", gaydar: 5, intro: "Third date. Mini golf at South Bank. You went all in: a short pleated skirt, a cropped cardigan, the gold hoops, a proper rosy lipstick and a little shoulder bag you kept putting down to putt. Mia said \"oh\" when she saw you, then \"hi\". She left after nine holes.", them: ["also ive never seen a guy bring a handbag to mini golf. sorry. its fine. its just new"] }
      ],
      them: ["hey", "sorry i left early. early start", "sorry"],
      replies: [
        { you: "Don't be sorry! I had so much fun. Even though I was robbed on hole six. That windmill was rigged, babe.",
          them: [
            "haha yeah",
            "ok can i be honest. im so bad at this. sam says i have to be more honest",
            "i thought the lipstick was a joke at first. like a dare. and then you just kept wearing it and you were so happy and you called the guy at the counter 'darling' and i didnt know where to look",
            "and you asked if my top was from zara. while i was putting. and it WAS from zara. and thats when i knew i had to go home lol"
          ],
          replies: [
            { you: "It wasn't a joke, Mia. I like wearing it. I thought you'd think it was cute. You said my earrings were cute.",
              them: [
                "i did. they are",
                "i just thought i was going out with like. a guy guy",
                "and every time i see you youre less of that and more like my friend hayley?",
                "sorry. thats mean. i dont mean it mean"
              ],
              replies: [
                { you: "I am a guy, Mia. I just like nice things. Guys can like nice things.", them: ["i know. sorry. you're right", "but i don't think i want to date a guy who likes nicer things than me", "sorry"] },
                { you: "So what, I'm Hayley now? That's what you're saying?", them: ["kind of yeah lol", "hayley doesnt even know about tops like you do", "but not to date. sorry", "you were my type at dumplings. you're just not now"] }
              ] },
            { you: "Oh my god, I KNEW it was Zara. The little puff sleeves gave it away. Sorry. That's not the point, is it.",
              gaydar: 90,
              them: ["no its not the point lol", "it was on sale though", "{name} i think we should just be friends", "i dont think you even want a girlfriend. sorry"] }
          ] },
        { you: "Was it the lipstick or that I beat you on the windmill?",
          them: [
            "you didn't beat me lol. you stopped to take a photo of the windmill",
            "it was the lipstick. sorry",
            "you looked really pretty. like actually pretty. i dont want my boyfriend to be pretty",
            "and you made that guy from the kids party get your ball out of the water"
          ],
          replies: [
            { you: "So you want someone who fetches balls. Noted.", them: ["sorry 😭", "that sounds so bad when you say it", "but yes. kind of"] },
            { you: "I didn't make him. He offered. He had very nice arms.", gaydar: 90, them: ["{name}", "that's what i mean", "sorry. night"] }
          ] },
        { you: "Did you actually have an early start? You can tell me if you didn't. I won't be upset.",
          them: [
            "no",
            "sorry",
            "i just wasnt expecting a guy to show up like that and i didnt know what to do and i panicked",
            "sam's going to kill me. she said not to be weird and i was weird"
          ],
          replies: [
            { you: "Like what? Like what, Mia? Say it.",
              them: [
                "you know what i mean",
                "the lipstick and the earrings and like. the way you walk now? you didnt walk like that at dumplings",
                "i just dont want to date a guy whos more done up than me. sorry"
              ],
              replies: [
                { you: "Okay. At least that's honest.", them: ["this took me 20 minutes to type", "sorry"] },
                { you: "You could've just said that at hole nine instead of running away.", them: ["in front of everyone? with the kids' birthday party there?", "no thanks. sorry"] }
              ] },
            { you: "That's okay. I get it. You don't have to feel bad.",
              them: ["ok", "pls dont tell sam i bailed. i'll tell her", "sorry. again"],
              replies: [
                { you: "I won't tell her. Promise.", them: ["thank you", "you're really nice"] },
                { you: "Sam's going to find out anyway, Mia. She finds out everything.", them: ["ugh. yeah", "she's going to say 'i told you not to be weird'"] }
              ] }
          ] }
      ],
      after: "Mia rings Sam on the drive home. \"Your coworker's gay.\" \"What? How do you know?\" \"Sam. He wore lipstick to mini golf.\" \"Ok...\" \"And he called the guy at the counter darling. Sorry. I'm not being mean.\" \"Maybe he just likes makeup?\" \"Then why's he going on dates with me?\" Sam doesn't really have an answer.",
      debrief: "You got dressed how you wanted and went. Mia not being into it is about what she wants."
    },
    {
      id: "mia-end", route: "mia", gaydar: 99, spark: 0, gaydarSays: "Lachlan asked if Zara is a tennis player. Sorry. I love him.", title: "Mia and Lachlan", contact: "Mia",
      intro: "Two months later. You're at Sam's for her birthday barbecue in a long linen shirt, lashes and the gold hoops. Mia's there. She's brought a guy: Lachlan, an accountant, in boat shoes and a quarter-zip, talking to Sam's husband about negative gearing. That night, Mia messages you.",
      them: [
        "hi {name}!! sorry its late",
        "it was really nice to see you today. you looked SO good. the hoops with the lashes",
        "sam's sister asked me if you were single and i didnt know what to say lol",
        "and sorry about mini golf. properly. i was so weird",
        "lachlan's really nice. i asked him if he knew what zara was and he said is that a tennis player 😭",
        "anyway sorry im rambling. hope you're good"
      ],
      replies: [
        { you: "Mia! You don't have to say sorry. Honestly, babe, mini golf was a lot. I was a LOT. I'm so happy for you. Lachlan seems sweet. A bit beige, but sweet.",
          them: [
            "a bit beige 😭",
            "he IS beige. hes got like six quarter-zips and theyre all navy",
            "after you i just wanted someone simple. he doesnt care where my top is from. its so relaxing",
            "and hes like. a cuddler? he falls asleep on me and i cant move all night. i love it",
            "sorry. you never really did that. its fine",
            "can i ask you something? you can say no"
          ],
          replies: [
            { you: "Ask me anything. I'm an open book. Mostly.",
              them: ["are you seeing anyone? like... anyone?", "sam said you've been going out in the valley with dani a lot", "sorry thats nosy"],
              replies: [
                { you: "Not really. Just having fun. Dancing. It's a straight-guy-having-fun thing, Mia.", them: ["ok 😊", "in lashes", "sorry!! im teasing"] },
                { you: "There's no one. And there's no one in the Valley either, before you ask. Sam's a gossip.", them: ["sam is SUCH a gossip", "ok well whoever it ends up being. i hope they like the hoops"] }
              ] },
            { you: "No. Not tonight. I've had two wines and Sam's husband tried to explain negative gearing to me.", them: ["lol fair", "lachlan explained it to me the whole drive home", "night 😊"] }
          ] },
        { you: "It's fine, Mia. Really. You were honest, eventually. I'm glad you found someone.",
          them: [
            "thanks. you were nice about it even when i wasnt",
            "ok one more thing then im going to bed",
            "i think youd be really happy with someone who loves all the hoops and lipstick stuff",
            "and i dont think thats a girl. sorry. i dont mean it badly"
          ],
          replies: [
            { you: "What's that supposed to mean? You think I should date guys?",
              them: ["i didnt say that!!", "ok i kind of said that", "sorry. going to bed. lachlans been asleep since 9:30"] },
            { you: "Maybe. I don't know. Goodnight, Mia. Say hi to Lachlan.", them: ["i will 😊", "he'll say 'who'", "night"] }
          ] },
        { you: "Can I come over? I need to say something and I can't do it over text.",
          them: ["wait now??", "um ok. lachlan's here though. is that ok", "unit 4. gate code is 1972. sorry the lift is really slow"],
          replies: [
            { you: "(Book an Uber before you can change your mind.)",
              them: [
                { note: "Twenty minutes later Mia opens the door in a big sweatshirt. Lachlan's in the hallway behind her in a navy quarter-zip, holding a cup of tea." },
                "hi!! come in. sorry, can you take your shoes off? we just got the floors done",
                "socks too sorry. they're so slippery. lachlan went over twice yesterday",
                { from: "Lachlan", text: "twice. right on my bum. hey man" },
                { note: "You'd forgotten. You painted your toes on Sunday, lilac with a bit of glitter. You peel your socks off and there they are, on her doormat, under the hallway light." },
                { note: "Lachlan looks down at them, then at you, and smiles." },
                { from: "Lachlan", text: "oh man. glitter" },
                "oh my god. {name}. your toes. they're so cute",
                "sorry. you came to say something. go"
              ],
              replies: [
                { you: "(Stand up as straight as you can, barefoot.) Mia, I made a mistake. I want another chance. I wanted to say it in front of Lachlan so it's fair.",
                  them: [
                    { from: "Lachlan", text: "ha. sure man. you two have a chat. i'll be in the lounge" },
                    { note: "He says it over his shoulder and wanders off down the hall, whistling." },
                    "{name} thats so sweet",
                    "but you said it so quietly lol. and youre holding your socks",
                    "i cant. sorry. i just dont think of you like that anymore. at all",
                    "like if you tried to kiss me i think id laugh. not in a mean way. sorry",
                    { note: "She gives your arm a little rub." }
                  ],
                  replies: [
                    { you: "(Look down at your toes.) Okay. That's okay. Sorry for coming over.",
                      them: ["no!! don't be sorry", { note: "She hugs you. From the lounge, without looking away from the game:" },
                        { from: "Lachlan", text: "want a coffee man? or a hot chocolate" }, "stay for a tea. he wants to ask you about a shirt for my cousin's wedding lol"] },
                    { you: "He's not even a little bit worried, is he?",
                      them: ["no lol", "sorry", "he said to me in the kitchen before 'mia hes got glitter on his toes i think im ok'", "and then he laughed for like a whole minute", "hes not wrong though"] }
                  ] },
                { you: "(Stand on one foot so they can't see the other one.)",
                  gaydar: 100,
                  them: [
                    { from: "Lachlan", text: "steady there, princess" },
                    { note: "He comes down the hall and holds your elbow while you wobble. His hand's warm. Whatever you were going to say is gone." },
                    { from: "Lachlan", text: "nice colour. mia's got that one. you two should share" },
                    { note: "\"Thanks,\" you say. It comes out tiny." },
                    "omg",
                    "{name} did you just go shy at lachlan",
                    "youre so pink",
                    "ok im putting the kettle on. youre staying"
                  ] }
              ] },
            { you: "Actually, never mind. It's late. Night, Mia.", them: ["are you sure?? ok", "night {name} 😊 text me tomorrow"] }
          ] },
        { you: "Did Sam's sister really ask if I was single? Which one? The one with the bob?",
          them: ["yes the one with the bob!!", "i said i didn't know", "then she said 'is he... you know' and did a little wrist thing and i said i DON'T KNOW sorry and walked away", "sorry. i shouldn't have told you that"],
          replies: [
            { you: "She did a WRIST thing? Mia. I'm not gay. Why does everyone keep doing wrist things at me?", them: ["i don't know!!", "sorry", "night {name}. you looked really pretty today. sorry. handsome. you know what i mean"] },
            { you: "The bob was very cute though. Tell her I said that.", them: ["lol ok", "shes going to be so confused", "night"] }
          ] }
      ],
      after: "Mia, to Lachlan, in bed: \"do you think {name} is gay?\" Lachlan, half asleep: \"who's {name}?\" Mia: \"the guy with the hoops at the barbecue\" Lachlan: \"oh. yeah, obviously.\" Then he's asleep.",
      debrief: "Mia wanted someone simple, and she picked him. That says more about her than about you."
    },
    {
      id: "ella-1", route: "ella", gaydar: 20, gaydarSays: "His Hinge pics are a polo at a wedding. In real life he knew what a 'cat eye' was. Hmm.", title: "Matched", contact: "Ella",
      outfits: [
        { label: "The polo from your Hinge photos", gaydar: -10, intro: "You matched with Ella on Hinge. Your profile is mostly photos of you in a polo shirt at a wedding, which Jess says is \"very marketable\". First date: drinks at a little bar in West End. You wore the polo. Ella's a primary school teacher with a cat-eye so sharp you couldn't stop looking at it." },
        { label: "A black tee and a bit of concealer", intro: "You matched with Ella on Hinge. Your profile is mostly photos of you in a polo shirt at a wedding. First date: drinks at a little bar in West End. You wore a fitted black tee and a bit of concealer you stole from Nicole. Ella's a primary school teacher with a cat-eye so sharp you couldn't stop looking at it." },
        { label: "A black tee, concealer and a clear brow gel", gaydar: 5, intro: "You matched with Ella on Hinge. Your profile is mostly photos of you in a polo shirt at a wedding. First date: drinks at a little bar in West End. A fitted black tee, a bit of concealer and clear brow gel, which made your brows look annoyingly good. Ella's a primary school teacher with a cat-eye so sharp you couldn't stop looking at it." }
      ],
      them: ["hey!! home safe", "tonight was really fun", "also how did you know what a cat eye was lol", "you just said it like it was nothing. none of the guys i go out with know that word"],
      replies: [
        { you: "My friend Nicole does hers every day. I've watched her do it a hundred times. Yours was perfect though, honestly. Like a ruler.",
          them: ["omg stop 😭", "it took me 4 goes tonight", "second date?"],
          replies: [
            { you: "Yes! What about GOMA next weekend? There's an exhibition I've been wanting to see.", them: ["omg yes", "sunday? 😊"] },
            { you: "Second date, yes. And you can show me how you did it. The eyeliner. For research.", gaydar: 25, them: ["haha for research", "ok deal", "GOMA? sunday?"] }
          ] },
        { you: "I don't know, I just noticed. You looked really good tonight.",
          them: ["😊 thank you", "you looked good too. different to your pics. better", "your pics are literally you in a polo at a wedding. i nearly didn't swipe", "second date?"],
          replies: [
            { you: "The polo pics were Jess's idea. She said they're 'marketable'.", them: ["lol jess was wrong", "you're way cuter in person. sunday? GOMA?"] },
            { you: "Second date. Definitely.", them: ["yay. sunday. GOMA. i'll meet you at the big red thing out the front"] }
          ] },
        { you: "Is that bad? I can pretend I don't know. What's eyeliner? Is it a type of pen?",
          them: ["lol no don't", "my last boyfriend called it 'the black stuff'. for two years", "it was nice to be noticed tbh", "second date? GOMA sunday?"],
          replies: [
            { you: "Sunday. I'll wear the polo so you recognise me.", them: ["please don't 😭", "big red thing out the front. 11?"] },
            { you: "Yes. And I'm going to notice everything. Brace yourself.", gaydar: 25, them: ["ok that's a bit scary lol", "sunday. 11. big red thing"] }
          ] }
      ],
      after: "Ella, to her sister: \"date was so good. he's funny. he complimented my eyeliner??\" Her sister: \"wait he knew what eyeliner was\" Ella: \"he knew what a CAT EYE was\" Her sister: \"interesting\""
    },
    {
      id: "ella-2", route: "ella", gaydar: 50, gaydarSays: "We went to GOMA and he spent the whole time looking at dresses. I don't know what I expected.", title: "GOMA", contact: "Ella", irl: true,
      outfits: [
        { label: "A nice shirt and a clear brow gel", gaydar: -5, intro: "Second date. Sunday at GOMA. You wore a nice cream shirt and the brow gel. Ella's in a slip skirt and a little cardigan and she's already waiting by the big red sculpture out the front." },
        { label: "A cream shirt, a bit of mascara and a light lip tint", intro: "Second date. Sunday at GOMA. A cream shirt, a coat of mascara and a light lip tint. You practised the mascara three times this morning. Ella's in a slip skirt and a little cardigan, waiting by the big red sculpture. She does a double take at your lashes." },
        { label: "A cream shirt, mascara, lip tint and your nails painted lilac", gaydar: 5, intro: "Second date. Sunday at GOMA. A cream shirt, mascara, lip tint and lilac nails. Ella's in a slip skirt and a little cardigan, waiting by the big red sculpture. She looks at your hands, then your face, then your hands again.", them: [{ note: "\"Are your nails... purple?\" she says. \"Lilac,\" you say. She says \"oh\" and then \"cute\" a second too late." }] }
      ],
      them: [
        "Hi! Okay, I've got the map. There's the Pacific art one and then there's this fashion one upstairs that's apparently amazing. Which first?",
        { note: "She's smiling. She keeps glancing at your face." }
      ],
      replies: [
        { you: "Oh my god, the fashion one. Obviously. Sorry. Is that okay? There's a gown up there with like ten thousand hand-sewn beads.",
          gaydar: 55,
          them: [
            "Ha. Sure. Fashion first.",
            { note: "Upstairs you stand in front of the beaded gown for eleven minutes explaining the beading and the neckline. Ella stands next to you and nods." },
            "You know a lot about dresses.",
            "Like more than me."
          ],
          replies: [
            { you: "I just think they're beautiful. Like, it's art. Wearable art. That's all.",
              them: ["Yeah. No, totally.", "My last boyfriend would've been in the cafe by now. So.", { note: "She doesn't hold your hand walking to the next room." }] },
            { you: "Ella. You'd look amazing in it. That green is completely your colour.",
              gaydar: 58,
              them: ["Oh! Thanks.", "That's literally what my friend Maddy says to me in change rooms.", { note: "On the stairs she walks a little ahead of you." }] },
            { you: "Sorry. I went on a bit. I always do when it comes to dresses. Nicole says I'm a menace.",
              them: ["No, it's fine! It's kind of cute.", "Do you... wear dresses? Sorry. That's a weird question. I don't know why I asked that.", { note: "You both stand there in front of the gown and don't say anything for a bit too long." }],
              replies: [
                { you: "Ha! No. God, no. Can you imagine?", gaydar: 55, them: ["Ha. Yeah. No.", { note: "You both laugh a bit too hard." }] },
                { you: "...Not yet.", gaydar: 65, them: [{ note: "She turns and looks at you properly for the first time all day." }, "Not yet?", "Okay. Okay. Cool. Let's... let's go see the Pacific stuff."],
after: "Ella, to her sister: \"i asked if he wears dresses. like as a joke\" \"he said NOT YET\" Sister: \"ELLA\"" }
              ] }
          ] },
        { you: "Whatever you want! I'm easy. You pick.",
          them: [
            "Okay, Pacific first, then fashion. I'm a teacher, I like a plan.",
            { note: "You walk around the Pacific gallery and she tells you about her Year 2s. She's funny. Then you get to the fashion room and you don't hear a word she says for ten minutes." },
            "{name}? Hello? You've been staring at that dress for ages."
          ],
          replies: [
            { you: "Sorry! It's just so pretty. Look at the colour. Imagine wearing that to brunch.",
              gaydar: 55,
              them: ["Imagine ME wearing it to brunch, you mean?", { note: "She says it like a joke." }] },
            { you: "Sorry. I zoned out. Tell me about your Year 2s again.", them: ["Ha, it's okay. Okay, so there's this kid called Oscar...", { note: "You listen. You still look back at the dress when she's not looking." }] }
          ] }
      ],
      after: "Ella, to her sister: \"second date at GOMA\" Sister: \"and??\" Ella: \"he spent the whole time looking at dresses\" Sister: \"looking at them or wanting to wear them\" Ella: \"idk??\""
    },
    {
      id: "c6b", route: "ella", gaydar: 90, gaydarSays: "His lashes were better than mine. At brunch. I can't.", title: "Brunch in the dress", contact: "Ella",
      intro: "Third date. Brunch in Paddington. You'd bought the dress the day after GOMA and never worn it out of the flat: pale blue, floral, little buttons down the front. Nails done, foundation, blush, lashes, a pink lip. You nearly changed three times. You didn't. When you walked up she looked at you, then at her phone, then back at you. \"Sorry. I thought I had the wrong guy.\"",
      outfits: [
        { label: "The dress, white sneakers and light makeup", gaydar: -5, intro: "Third date. Brunch in Paddington. The pale blue floral dress you bought the day after GOMA, but with white sneakers so it felt less scary, and light makeup: a bit of foundation, lashes, a pink lip. When you walked up she looked at you, then at her phone, then back at you. \"Sorry. I thought I had the wrong guy.\"" },
        { label: "The dress, nails, foundation, blush, lashes, a pink lip" },
        { label: "The dress, strappy heels, painted toes, full glam and a handbag", gaydar: 5, intro: "Third date. Brunch in Paddington. The pale blue floral dress, strappy heeled sandals, toes painted pink, full glam (foundation, contour, blush, lashes, a pink lip) and a little white handbag. You nearly changed three times. You didn't. When you walked up she looked at your heels, then at her phone, then back at you. \"Sorry. I thought I had the wrong guy.\"", them: ["and HEELS. you were taller than me. in heels. at brunch"] }
      ],
      them: ["hey", "ok i have to ask. i've been thinking about it all afternoon", "why did you wear a dress"],
      replies: [
        { you: "Because I wanted to. I bought it the day after GOMA and I felt really good in it, Ella. Did I not look good?",
          them: [
            "you looked GOOD. thats not the point",
            "you didnt say anything on here. not even like heads up im wearing a dress",
            "i turned up in jeans and a tee like an idiot and you had more makeup on than me",
            "your hinge is you in a polo shirt at a wedding {name}",
            "i felt really blindsided tbh"
          ],
          replies: [
            { you: "I didn't think I needed to warn you. It's just a dress. People wear dresses to brunch every day.",
              them: [
                "you didnt NEED to. it would've been nice",
                "people were staring the whole time. the lady with the pram actually stopped walking. the waiter called you 'love' and then went red",
                "and i was sitting there like is this a date?? or am i just having brunch with a friend"
              ],
              replies: [
                { you: "I noticed the staring. I was trying to ignore it. I thought if I just acted normal, it'd be normal.", them: ["well i couldnt ignore it", "it was really uncomfortable for me. i know thats not your fault exactly. but it was"] },
                { you: "Were they staring at me or at us, though?", them: ["at you", "and then at me like whats she doing with him"],
                  replies: [{ you: "Sorry, Ella. I didn't think about it like that.", them: ["its ok", "i just want to be the dressed up one on a date. thats all"] }] }
              ] },
            { you: "That's fair. Sorry. I should have said something first.",
              them: ["its fine", "i just dont think we want the same thing"],
              replies: [{ you: "What do you mean? Like, you're not into it? Or not into me?", them: ["as in i want a guy who's into me", "and i dont think you are. i think you were into the waiter. you gave him a 'thank you darling' and touched his arm"] }] }
          ] },
        { you: "Because it was 28 degrees and it's linen. I'm not going to brunch in jeans like a crazy person.",
          them: [
            "its not about the weather {name}",
            "i told meg and maddy i had a third date. i showed them your hinge. the POLO",
            "then i sent them a pic of us at brunch and you're in a floral dress with little buttons",
            "maddy replied 'which one is the date'",
            "i felt so stupid"
          ],
          replies: [
            { you: "Okay but which one did she think was the date?", them: ["you. obviously", "she said you looked like my bridesmaid", "night {name}"] },
            { you: "Sorry. That's really embarrassing for you.", them: ["it was", "i dont know. i just dont fancy you anymore {name}", "sorry. you asked"] }
          ] },
        { you: "Did you hate it? Be honest. You can say it. I'd rather know.",
          them: [
            "kind of yeah",
            "sorry",
            "like the dress was gorgeous. i would wear it. thats kind of the problem",
            "i spent the whole time trying to work out if you were into me or the waiter",
            "are you gay?"
          ],
          replies: [
            { you: "I don't know, Ella. I really don't. I just know I felt more like me today than I have in years.",
              gaydar: 95,
              them: ["ok", "thanks for being honest i guess", "but i dont want to be the girl you work it out on", "i have 24 seven year olds. i dont have the energy"] },
            { you: "No. I'm not. I just like the dress.",
              them: ["ok", "sure"],
              replies: [{ you: "I'm not, Ella. Seriously.", them: ["ok {name}"],
                after: "You look at \"No.\" on the screen for a long time. Then you hang the dress back up." }] },
            { you: "Does it matter? Can't I just be a guy who likes dresses?",
              them: ["yes?? it was a DATE", "be whatever you want. i just want a guy who wears jeans to brunch and looks at me"],
              replies: [{ you: "Fair. Yeah. That's fair.", them: ["right", "ok well good luck with it"] }] }
          ] }
      ],
      after: "Ella, to her sister: \"brunch guy turned up in a dress\" \"WHAT. like a costume?\" \"no like a nice one. and lashes\" \"is he gay\" \"obviously hes gay\" \"then why did he match with you\" \"thats what IM saying\"",
      debrief: "You wore the dress out. Whatever Ella thought, you didn't go home and change."
    },
    {
      id: "ella-beach", route: "ella", gaydar: 93, gaydarSays: "Coral gel toes on a beach full of lifesavers. Hayden hasn't stopped grinning.", title: "Kings Beach", contact: "Ella", irl: true,
      intro: "Ella's uni friends do a beach day at Kings Beach in Caloundra every summer. You wore boardies and a linen shirt, and you kept your sneakers on for the whole drive up, because last night you painted your toes coral and then panicked about it.",
      them: [
        { note: "On the sand everyone kicks their flip-flops off. You keep your sneakers on until Ella looks at them." },
        "It's the beach. Shoes off.",
        { note: "You take them off. Then your socks. Coral toes, in the sand, in front of nine people." },
        "Oh my god. When did you do that?",
        { note: "A tall guy in red and yellow boardies comes up from the water, shaking it out of his hair." },
        "\"Ha! Ells, who's your little friend?\" he says. \"I'm Hayden.\"",
        "Hayden's a lifesaver. He's been trying to take me out since second year.",
        "\"Still am,\" Hayden says, and grins at her. Then down at your feet. \"You coming in, man? Or are you worried about the polish?\""
      ],
      replies: [
        { you: "I'm fine in the water. I'm a strong swimmer.",
          them: [
            { note: "You go in. The first wave knocks you flat and you come up coughing with your shirt over your face." },
            "\"Gotcha,\" Hayden says, and pulls you up by one arm. He keeps hold of you until the next set's gone through, like you're a kid at swim lessons. \"Steady, little guy.\"",
            { note: "Back on the sand, Ella's taking photos. Of Hayden." },
            "Aww. Hayden saved you.",
            "\"I didn't need saving.\"",
            "\"Dude,\" Hayden says, grinning at Ella. \"You did a bit.\""
          ] },
        { you: "(Sit on the towel.) I'll mind the bags.",
          them: [
            "\"Good idea, man. Keep the polish dry,\" Hayden says. He holds his hand out to Ella. \"Come on, Ells. I'll take you out past the break.\"",
            { note: "She goes. You sit on her towel with her sunglasses on your head and your coral toes in the sand. Her friend Maddy sits down and puts her foot next to yours." },
            "\"Same colour as mine,\" Maddy says. \"Yours are neater.\"",
            { note: "Out past the break Hayden lifts Ella onto his shoulders. She screams and laughs and doesn't look back at the beach once." }
          ] },
        { you: "(Wiggle your toes.) The polish is fine, thanks. It's gel.",
          gaydar: 97,
          them: [
            "\"Gel,\" Hayden says. \"Course it is.\" He looks at Ella. Ella looks at the sand.",
            "I can't believe you know the difference.",
          "\"I thought gel was for hair,\" Hayden says, and Ella laughs.",
            { note: "Hayden picks up the softball bat. \"Beach softball, boys,\" he says to the other guys. Then, to you: \"You can keep score, man. Wouldn't want you breaking anything.\"" },
            { note: "You keep score on the back of Ella's sunscreen with her eyeliner. Hayden hits a home run into the water. Ella cheers." }
          ] }
      ],
      after: "Ella, to her sister, on the drive home: \"he took his shoes off and his toes were CORAL\" \"stop\" \"and hayden saw\" \"what did hayden say\" \"nothing. he just kept looking at me like. you sure about this one?\" \"are you\" \"no\"",
      debrief: "That was a lot of people looking at your feet. You still took your shoes off."
    },
    {
      "id": "ella-barefoot",
      "route": "ella",
      "gaydar": 94,
      "spark": 24,
      "gaydarSays": "His sneakers got washed out to sea so he went home barefoot in Hayden's car. He was SO weird about his toes.",
      "title": "The drive home",
      "contact": "Ella",
      "irl": true,
      "intro": "Later at Kings Beach. You left your sneakers and socks on the towel, and when the tide came in, so did the water. Your socks are gone. One sneaker's in the shallows; the other one's nowhere. Ella's car is full, so you're in the back seat of Hayden's, with Ella in the front. Fish and chips on the way home, then the drive back to Brisbane.",
      "them": [
        {
          "note": "Hayden holds up your one wet sneaker like a trophy."
        },
        "\"Found half of it, man.\"",
        "It's fine. Just come barefoot, it's a car.",
        {
          "note": "You get in the back. Your feet are sandy and your coral toes are very bright against his black floor mats."
        },
        "\"Don't get sand in my car,\" Hayden says, and then, looking in the mirror: \"Nice colour though.\""
      ],
      "replies": [
        {
          "you": "(Sit on your feet. All the way to Brisbane.)",
          "them": [
            {
              "note": "You fold your legs up under you on the back seat. Hayden watches in the mirror."
            },
            "\"You good back there? You look like you're meditating.\"",
            "He's hiding his toes, Hay. Leave him alone.",
            {
              "note": "She says it nicely. She's laughing."
            }
          ],
          "replies": [
            {
              "you": "I'm not hiding them. I'm comfortable.",
              "spark": 26,
              "them": [
                "\"Sure.\"",
                {
                  "note": "Twenty minutes later your legs have gone completely dead. You shift and both feet flop out onto the seat, toes up."
                },
                "\"There they are,\" Hayden says. Ella turns round to look and laughs into her hand."
              ],
              "after": "Ella, to her friend: \"he sat on his feet in hayden's car for half an hour so we wouldn't see his toes\" Friend: \"and then?\" Ella: \"his legs went to sleep and they flopped out. hayden lost it. i couldn't stop laughing either\""
            },
            {
              "you": "Yes. I'm hiding them. Is that ok with everyone?",
              "spark": 22,
              "them": [
                "\"Totally fine, little guy,\" Hayden says.",
                "It's ok. They're so cute though.",
                "You look like one of my Year 2s back there.",
                {
                  "note": "She turns back round to the front. She and Hayden talk about surf club stuff for the rest of the drive."
                }
              ],
              "after": "Ella, to her friend: \"he admitted he was hiding his toes lol\" Friend: \"aww\" Ella: \"yeah. hayden and i talked the whole way home. he's actually really easy to talk to\""
            }
          ]
        },
        {
          "you": "Can we stop somewhere? I'll buy flip-flops. Anything.",
          "them": [
            "\"Gas station's got flip-flops,\" Hayden says, and pulls in.",
            {
              "note": "You walk across the hot forecourt barefoot. Inside, the only flip-flops in your size are pink with daisies on them."
            },
            "Oh my god. Get them. You have to get them."
          ],
          "replies": [
            {
              "you": "(Buy the daisies.) Fine. Fine!",
              "spark": 22,
              "them": [
                {
                  "note": "You walk back out in pink daisy flip-flops with coral toes. Hayden's leaning on the car."
                },
                "\"Man. They're perfect.\"",
                {
                  "note": "Ella takes a photo of your feet for the group chat."
                }
              ],
              "after": "Ella, to her friend: \"he bought pink daisy flip flops at the gas station\" Friend: \"with the coral toes??\" Ella: \"with the coral toes. hayden bought me an ice cream while he was paying\""
            },
            {
              "you": "(Put them back.) No. Barefoot's better than daisies.",
              "spark": 26,
              "them": [
                {
                  "note": "You put them back and walk out barefoot, empty-handed. Hayden's eating a pie on the bonnet."
                },
                "\"Nothing in your size?\"",
                "There was. He chose barefoot.",
                "\"Respect,\" Hayden says, and doesn't sound like he means it."
              ],
              "after": "Ella, to her friend: \"he went into the gas station barefoot and came out still barefoot\" Friend: \"why\" Ella: \"the only ones were pink daisies. i would've bought them for him honestly\""
            }
          ]
        },
        {
          "you": "Ella, can I sit in the front? Please? Nobody looks at the front footwell.",
          "them": [
            "\"Ella's in the front,\" Hayden says. \"Ella's always in the front.\"",
            {
              "note": "Ella stays in the front. She puts her own feet up on the dash, bare, sandy, unpainted."
            },
            "See? Feet. Nobody cares."
          ],
          "replies": [
            {
              "you": "Yours aren't coral.",
              "spark": 24,
              "them": [
                "Mine aren't anything. Yours are nicer than mine.",
                "\"They are,\" Hayden says. \"He does a better job than you, Ells.\"",
                {
                  "note": "She hits his arm. He laughs. She leaves her hand there for a second."
                }
              ],
              "after": "Ella, to her friend: \"hayden said his toes were nicer than mine\" Friend: \"rude\" Ella: \"it was true though. i hit him. we were laughing the whole way home\""
            },
            {
              "you": "(Put your feet up too. Try to be normal about it.)",
              "spark": 28,
              "them": [
                {
                  "note": "You put your feet up on the back of the centre console, coral toes in full view. Your whole face is hot."
                },
                "Look at you!",
                "\"Ten out of ten for effort,\" Hayden says."
              ],
              "after": "Ella, to her friend: \"he put his feet up in hayden's car and went bright red the whole time\" Friend: \"did hayden say anything\" Ella: \"he gave him ten out of ten. i don't know. it was nice of him\""
            }
          ]
        }
      ],
      "after": "Hayden drops you home first. In the window, you watch him and Ella drive off together.",
      "debrief": "You can be shy about your toes and still get home fine."
    },
    {
      "id": "ella-tickle",
      "route": "ella",
      "gaydar": 95,
      "irl": true,
      "title": "The surf club",
      "contact": "Ella",
      "gaydarSays": "Hayden said he was just doing his sunscreen. Half the surf club came over to watch.",
      "intro": "Two weeks after Kings Beach. Hayden's surf club does a sausage sizzle after patrol, Ella's friends wanted to go, and Ella brought you. You wore boardies and a cropped linen shirt, and this time you took your sandals off on the sand without being asked. Your toes are coral again. You did them again on purpose.",
      "them": [
        {
          "note": "Hayden's at the barbecue in his red and yellow cap. When he sees your feet he puts the tongs down."
        },
        "\"Coral's back! Ells, he's committed.\"",
        "Hi Hayden.",
        "\"Hi Ella.\" He grins at her, then at you. \"You put sunscreen on those? Feet burn first, buddy. Lifesaver tip.\"",
        {
          "note": "You sit on a towel by the club fence with Ella and her friend Meg. Hayden finishes the sausages and comes over and sits on the sand right at your feet, uninvited, with a bottle of sunscreen."
        },
        "\"Seriously, give me your foot. Club policy. Nobody burns on my patch.\"",
        "Hayden. He's an adult.",
        "\"An adult with very pale soles.\" He's already got your heel in his hand. \"Hold still.\"",
        {
          "note": "He squirts sunscreen on your foot and rubs it in, slowly, all over the sole. Then the slow stops. His fingers go quick and light, right under the arch."
        },
        "\"Oh, hang on,\" he says. \"Hang on. Ells. Is your boyfriend ticklish?\"",
        "He's not my... we're seeing each other.",
        "\"Is he ticklish though.\""
      ],
      "replies": [
        {
          "you": "(Freeze. Stare at the ocean. Don't you dare laugh.)",
          "them": [
            {
              "note": "You stare at the waves. You count them. One, two. His fingers find the soft bit by your toes and your whole leg goes stiff."
            },
            "\"Ooh, the leg went,\" Hayden says. \"The leg's a giveaway.\"",
            "Leave him alone. Oh my god.",
            {
              "note": "Meg's sitting up now. Two of the patrol guys wander over from the barbecue with sausages in bread. One says \"what's happening\" and Hayden says \"science\"."
            },
            {
              "note": "The sunscreen makes it worse. Everything's slippery. His thumbs slide right up between your toes."
            }
          ],
          "replies": [
            {
              "you": "(Don't break. Don't break. Don't break.)",
              "them": [
                {
                  "note": "You don't break. You stare at the ocean. Your face goes red, but you don't make a sound."
                },
                {
                  "note": "Hayden goes for ages. Heel, arch, toes, the side of your foot. Nothing comes out of you."
                },
                "\"Okay. Okay, he's good,\" Hayden says, and lets go, wiping his hands on his boardies. \"He's actually good.\"",
                "Told you.",
                "\"You didn't tell me anything. You said 'leave him alone'.\""
              ],
              "replies": [
                {
                  "you": "(Take the sunscreen off him.) I'll do the other one myself. Thanks, Hayden.",
                  "outcome": "held",
                  "spark": 22,
                  "them": [
                    {
                      "note": "You take the bottle out of his hand and do your other foot yourself, properly, between the toes, like it's nothing."
                    },
                    "\"Fair,\" Hayden says. He looks a bit put out. He goes back to the barbecue.",
                    {
                      "note": "Ella watches him go. Then she watches you put the cap back on the sunscreen."
                    },
                    "Okay. That was kind of hot? The not reacting. I don't know. Don't let it go to your head.",
                    {
                      "note": "She leans back against you on the towel. Meg raises her eyebrows at her. Ella ignores her."
                    }
                  ],
                  "after": "Ella, to Meg, in the car: \"he didn't even laugh\" Meg: \"hayden was so annoyed\" Ella: \"right??\" Meg: \"you liked that\" Ella: \"shut up\""
                },
                {
                  "you": "(Smile at him.) That all you've got?",
                  "outcome": "held",
                  "spark": 15,
                  "them": [
                    "\"Oh, he wants round two,\" Hayden says, and grabs the other foot.",
                    {
                      "note": "He doesn't bother with sunscreen this time. He goes straight under the toes with both hands. A sound comes out of you. A small one. It's definitely a giggle."
                    },
                    "\"That was a giggle!\"",
                    "That was not... okay, that was a little bit of a giggle.",
                    {
                      "note": "He lets go, very pleased with himself. The patrol guys clap. Ella's laughing, and when Hayden says \"swim, Ells? Flags are up,\" she gets up and goes with him."
                    },
                    {
                      "note": "You sit on the towel and watch them in the water. Meg hands you a sausage."
                    }
                  ],
                  "after": "Ella, to Meg, later: \"he lasted SO long\" Meg: \"and then he giggled\" Ella: \"one giggle\" Meg: \"you went swimming with hayden for forty minutes\" Ella: \"it was hot. the water was nice\" Meg: \"sure\""
                }
              ]
            },
            {
              "you": "(You can't. A squeal comes out.)",
              "them": [
                {
                  "note": "It comes out as a squeal, high and loud, and every head on that bit of beach turns round. Then you're giggling and you can't stop. You try to pull your foot back. It's too slippery. He just holds on."
                },
                "\"THERE we go!\" Hayden says. \"Got one!\"",
                "oh no. oh no he squealed",
                {
                  "note": "Meg's got her phone out. The patrol guys are cheering like someone's been pulled out of a rip."
                },
                "\"Ells, did you hear that?\""
              ],
              "replies": [
                {
                  "you": "(Giggling) Okay! Okay, I'm ticklish! You win!",
                  "outcome": "cracked",
                  "spark": 10,
                  "them": [
                    {
                      "note": "He lets go and holds up both sunscreen hands."
                    },
                    "\"Knew it. Lifesaver's instinct.\"",
                    {
                      "note": "You sit up, red to your ears, still giggling a bit. You try to make a joke. It comes out as \"well, you've got very strong hands\", which makes the patrol guys howl."
                    },
                    "Okay, I'm going to get a drink. Hayden, do you want something?",
                    "\"I'll come,\" Hayden says, and goes with her. They don't come back for a while."
                  ],
                  "after": "Meg, to Ella: \"[video] the squeal\" Ella: \"DELETE IT\" Meg: \"hayden asked me to send it to him\" Ella: \"you didn't\" Meg: \"i already did sorry\""
                },
                {
                  "you": "(Red, giggling) Hayden! Stop!",
                  "outcome": "cracked",
                  "spark": 8,
                  "them": [
                    {
                      "note": "He stops as soon as you say it and lets go."
                    },
                    "\"Stopping. Sorry, buddy. Didn't know you'd go off like that.\"",
                    {
                      "note": "You pull your feet under you and brush the sand off them. You're so red you're probably sunburnt as well now."
                    },
                    "Are you okay? You went really high.",
                    {
                      "note": "She's trying not to laugh. She doesn't manage it. Hayden catches her eye and she laughs harder, and then they're both laughing, and you're sitting there on the towel."
                    },
                    "\"Sorry,\" Hayden says to her, grinning. \"I'll stop picking on him.\""
                  ],
                  "after": "Ella, to her sister: \"hayden tickled him and he squealed in front of the whole surf club\" Sister: \"STOP\" Ella: \"and i laughed. with hayden. i felt bad\" Sister: \"do you feel bad\" Ella: \"i don't know\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're laughing before he's even started.)",
          "them": [
            {
              "note": "You're gone the second he moves. High, helpless giggles. You fall back on the towel and kick sand everywhere with your free foot."
            },
            "\"Oh, he's SO ticklish!\" Hayden says. \"That was nothing! I barely touched him!\"",
            {
              "note": "He gets a proper grip on your ankle, rests your foot on his knee, and goes at it with both hands. The sunscreen makes every touch slide. You're shrieking."
            },
            "\"Coral toes and he's ticklish. Ells, you've found a real one.\"",
            "I didn't know he was ticklish, I swear.",
            {
              "note": "The patrol guys have come over. One of them says \"he's like my little sister\". Somebody's dog is barking at you."
            }
          ],
          "replies": [
            {
              "you": "(Giggling) Hayden! Please! Please stop!",
              "them": [
                {
                  "note": "He stops straight away and lets go. You curl up on the towel, panting, sand stuck to your face."
                },
                "\"He said please!\" Hayden says. \"Did everyone hear that? He said please.\"",
                "We heard. Everyone heard.",
                {
                  "note": "Hayden holds your foot up off the sand again, gently, not tickling. He looks at you with his eyebrows up."
                },
                "\"One more go? For the club? Ten seconds and I'll get you a free sausage.\""
              ],
              "replies": [
                {
                  "you": "(Yank your foot back.) No! No way. I'm keeping my feet.",
                  "outcome": "begged",
                  "spark": 6,
                  "them": [
                    "\"Fair enough,\" Hayden says. \"You keep them, princess.\"",
                    {
                      "note": "You bury both feet in the sand up to the ankles. You leave them there for the rest of the afternoon."
                    },
                    {
                      "note": "Ella goes for a swim. Hayden goes too. He says he's on patrol."
                    },
                    {
                      "note": "Meg sits with you on the towel. She keeps looking at your buried feet and laughing quietly."
                    }
                  ],
                  "after": "Ella, to Meg: \"he buried his feet\" Meg: \"he buried them for three hours\" Ella: \"hayden asked me to dinner\" Meg: \"WHAT\" Ella: \"in the water. while {name} was on the towel with his feet in the sand\" Meg: \"what did you say\" Ella: \"i said maybe\""
                },
                {
                  "you": "(Still giggling) ...Ten seconds. And I want the sausage.",
                  "outcome": "kept",
                  "spark": 3,
                  "gaydar": 97,
                  "them": [
                    {
                      "note": "The patrol guys cheer. Hayden counts down out loud from ten, slowly. You're squealing from 'ten'."
                    },
                    {
                      "note": "At 'one' he keeps going. You laugh so hard you roll off the towel into the sand. He stops when he decides he's done."
                    },
                    "\"Deal's a deal,\" Hayden says, and goes to get you a sausage.",
                    {
                      "note": "He brings back two. One for you, one for Ella. He sits down next to Ella to eat his, on the other side from you."
                    },
                    "You actually asked for more. You actually asked him.",
                    {
                      "note": "You eat your sausage with sand on your face. Ella doesn't wipe it off for you."
                    }
                  ],
                  "after": "Meg, to the group chat: \"[video] he did it for a SAUSAGE\" Ella: \"please\" Meg: \"hayden's added it to the club chat\" Ella: \"why is hayden in the group chat\" Meg: \"you added him\" Ella: \"...i did\""
                }
              ]
            },
            {
              "you": "(Stop fighting. Just lie there and laugh.)",
              "them": [
                {
                  "note": "You stop pulling away. You lie flat on the towel with your arms over your face, laughing so hard nothing else comes out."
                },
                "\"He's given up!\" one of the patrol guys says. \"He's just letting him!\"",
                "\"He loves it,\" Hayden says. \"Look at those toes go.\"",
                {
                  "note": "It goes on and on. He tickles the arch, then the heel, then in between each coral toe, one at a time, like he's counting them. You're crying from laughing. There's sand in your teeth."
                },
                {
                  "note": "Ella's stopped laughing. She's sitting with her knees up, watching."
                },
                "{name}? You're allowed to tell him to stop. You know that, right?"
              ],
              "replies": [
                {
                  "you": "(Gasping) Stop. Stop! Okay, stop!",
                  "outcome": "kept",
                  "spark": 2,
                  "gaydar": 97,
                  "them": [
                    {
                      "note": "He stops the moment you say it and lets go."
                    },
                    "\"Nearly three minutes,\" Meg says, looking at her phone. \"I timed it. Sorry.\"",
                    {
                      "note": "You lie there, wrecked, coral toes still curling on their own. Hayden slaps your shin. \"Not bad, little guy.\""
                    },
                    {
                      "note": "Then he stands up and holds his hand out to Ella. \"Swim?\""
                    },
                    {
                      "note": "She looks at you. She takes his hand. They swim out past the flags together and he holds her up in the waves."
                    }
                  ],
                  "after": "Ella, to her sister: \"i just watched hayden tickle my date for three minutes\" \"and he LOVED it\" Sister: \"who loved it\" Ella: \"both of them honestly\" \"then i went swimming with hayden\" Sister: \"and\" Ella: \"and he kissed me behind the flags\""
                },
                {
                  "you": "(Can't speak. Just keep laughing.)",
                  "outcome": "kept",
                  "spark": 0,
                  "gaydar": 98,
                  "them": [
                    {
                      "note": "You can't get a word out. You keep laughing. Hayden keeps going."
                    },
                    "Hayden. Okay. Enough.",
                    {
                      "note": "She says it sharp. He stops straight away and lets go."
                    },
                    "\"He didn't tap out,\" Hayden says.",
                    "He couldn't. He's crying. Look at him.",
                    {
                      "note": "You're lying half off the towel, covered in sand and sunscreen, still giggling at nothing. A kid with a bucket has stopped to watch you."
                    },
                    {
                      "note": "Ella stands up and brushes off her legs. \"I'm going to go in. Hayden, coming?\""
                    },
                    {
                      "note": "He's already up."
                    }
                  ],
                  "after": "Ella, to Meg, that night: \"i don't want to be mean\" \"i really like him\" \"but i just watched him giggle in the sand for four minutes with a kid watching\" \"and hayden was right there. in his little cap\" Meg: \"you kissed hayden didn't you\" Ella: \"in the water\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "It felt embarrassing at the time. It's still just being ticklish."
    },
    {
      id: "ella-end", route: "ella", gaydar: 99, spark: 0, gaydarSays: "I asked Connor about my cat eye and he asked what was wrong with my eye. I love him so much.", title: "Ella and Connor", contact: "Ella",
      intro: "A month later, Ella's Instagram story pops up: her and a guy in a rugby jersey at the stadium, his arm round her, both holding pies. His name's Connor. You reply to the story with a heart-eyes emoji before you can stop yourself. Ten minutes later she replies.",
      them: [
        "omg hi!!",
        "thats connor lol. he plays rugby. like on weekends not for real",
        "i asked him if he liked my cat eye and he said whats wrong with your eye 😭",
        "anyway how are you?? i felt kind of bad after brunch",
        {"if":"ella-tickle=held","text":"also hayden still brings up the surf club. how you didn't laugh. it bugs him so much lol"},
        {"if":"ella-tickle=cracked|begged|kept","text":"also sorry but connor has seen the surf club video. hayden put it in the club chat and connor's cousin is in the club. connor said 'the squealing guy?' i said yes. sorry"}
      ],
      replies: [
        { you: "Oh my god, he's SO rugby. Look at his neck. I'm so happy for you, Ella! And don't feel bad. Brunch was... a moment. I was having a moment.",
          them: [
            "you were DEFINITELY having a moment",
            "good for you. less for me lol. i was the girl in jeans next to the guy in the dress",
            "connor carried me up the stairs at the stadium last week cos my heels were killing me",
            "you would've wanted to try them on lol",
            "ok can i say something without it being weird"
          ],
          replies: [
            { you: "Say it. I can take it.",
              them: [
                "i think you'd love a connor",
                "not MY connor. but like. a big guy who's a bit dumb and really nice",
                "you looked at the waiter at brunch like that"
              ],
              replies: [
                { you: "Ella! I'm not... I don't... why is everyone saying this to me?", them: ["because its true lol", "anyway connor says hi. he wants to know if you want to play touch wednesday", "i said you'd turn up in a skort"] },
                { you: "...What's his number? Kidding. Kidding! Mostly.", them: ["LOL", "hes taken. his friend dev is single though", "just saying"] }
              ] },
            { you: "Actually no. Don't say it. I know what you're going to say.", them: ["ok 😊", "im still thinking it though"] }
          ] },
        { you: "I miss you. I want to try again. And I'm going to tell Connor that. To his face.",
          them: [
            "omg",
            "{name}",
            "ok i told him. he sent a voice note",
            "\"hey man ella says you want her back. ha. all good. come down to touch wednesday and try and take her off me. wear proper shoes yeah\"",
            "his friends are laughing in the background",
            "hes not worried lol. at all"
          ],
          replies: [
            { you: "Fine. I'll be there.",
              them: ["omg ok", "i'm coming. i'm bringing snacks"],
              after: "Wednesday. You wear a white skort and a visor. Before the game Connor jogs over, all sweaty, yells \"boys, he came! in a skort!\" and puts a hand on your shoulder, and you forget why you came. You get the ball once and pass it straight back to him. Afterwards he says \"so. still gonna take her off me, man?\" and you say \"no. um. good game. you're really fast\" and your voice goes up at the end. He says \"didn't think so\", ruffles your hair and goes to get Ella a pie. Later she sends you the video: \"youre so cute 😭\" \"still no tho\"" },
            { you: "Actually tell him never mind. I'd ruin my nails.",
              them: ["lol he said thought so", "and tell him to come anyway the boys want to meet him", "theyre going to adopt you as like a mascot"] }
          ] },
        { you: "I'm okay. Honestly. Still wearing the dress, if that's what you're asking. Wore it to the Valley last weekend with Dani.",
          them: [
            "STOP",
            "the blue one?? i need photos",
            "see this is what i mean. youre in the valley in a dress and im at the rugby watching connor eat two pies"
          ],
          replies: [
            { you: "Two pies is a lot, babe. Is he okay?", them: ["hes a prop thats his whole job", "ok have to go hes yelling at the ref. glad youre good x"] },
            { you: "I'm really glad for you, Ella.", them: ["thanks 😊", "ok connor's back with more pies. bye"] }
          ] }
      ],
      after: "Ella, to Connor at half time: \"remember the guy from hinge i told you about? brunch guy?\" Connor, mouth full of pie: \"the one in the dress?\" Ella: \"yeah he just replied to my story\" Connor: \"he gay?\" Ella: \"yeah\" Connor: \"good for him.\" Then he yells at the ref again.",
      debrief: "You two wanted different things. That's all it was."
    },
    {
      id: "tayla-1", route: "tayla", gaydar: 20, gaydarSays: "He knew every single word of Padam Padam. That's fine. Lots of guys like Kylie. I think?", title: "Felons", contact: "Tayla",
      outfits: [
        { label: "Jeans, a tee and a cap. Brewery guy.", gaydar: -10, intro: "Tayla plays wing defence on Sam's netball team. She asked you out at Sam's work drinks, loudly, in front of everyone. First date: Felons Brewery on a Friday. You wore jeans, a tee and a cap and tried to look like you knew what a hazy IPA was." },
        { label: "A short-sleeve shirt and your rings", intro: "Tayla plays wing defence on Sam's netball team. She asked you out at Sam's work drinks, loudly, in front of everyone. First date: Felons Brewery on a Friday. You wore a short-sleeve patterned shirt and your rings, and ordered a spritz before you remembered it was a brewery." },
        { label: "A patterned shirt, rings and a clear gloss", gaydar: 5, intro: "Tayla plays wing defence on Sam's netball team. She asked you out at Sam's work drinks. First date: Felons Brewery on a Friday. A patterned shirt, your rings and a clear gloss. You ordered a spritz and the bartender said \"good choice\" and winked." }
      ],
      them: [
        "omg that was so fun",
        "cant believe you knew all of padam padam",
        "you did the hand thing!!",
        "my ex thought kylie was a girl from his work. like an actual person he worked with"
      ],
      replies: [
        {
          you: "Who doesn't know Padam Padam? I was just being polite.",
          them: [
            "polite lol",
            "ok so bec's 30th is in a few weeks",
            "you should come. with me i mean. like as my date",
            "if you want. no pressure"
          ],
          replies: [
            {
              you: "Yes. Wait. Is your whole team going to be there?",
              them: [
                "yes and theyre feral",
                "steph will grill you. just go with it",
                "actually come to our game sunday first? so its not all of them at once"
              ]
            },
            {
              you: "As your date. Okay. Yeah, I'm in.",
              them: [
                "yay",
                "come watch us sunday too? 9am downey park",
                "its fine if you cant"
              ]
            }
          ]
        },
        {
          you: "Okay, I'm a Kylie fan. Is that a problem?",
          them: [
            "no?? why would that be a problem",
            "best first date ive had in ages tbh",
            "the girls want to meet you. i might have talked about you at training a bit"
          ],
          replies: [
            {
              you: "What did you say about me?",
              them: [
                "that youre cute and funny and you smell nice",
                "and steph goes nice like what. and i said like a candle",
                "and she did a face. idk why",
                "anyway sunday?"
              ]
            },
            {
              you: "I'll come and cheer. Loudly.",
              them: [
                "pls do",
                "bring snacks and they'll love you forever"
              ]
            }
          ]
        },
        {
          you: "There was no hand thing. That was a wrist moment. It's different.", gaydar: 25,
          them: [
            "a wrist moment 😭",
            "im telling the girls",
            "steph is going to have questions btw she always does",
            "netball sunday?"
          ],
          replies: [
            {
              you: "Steph can ask whatever she wants.",
              them: [
                "lol ok",
                "she will",
                "9am downey park"
              ]
            },
            {
              you: "Please don't tell them about the wrist thing.",
              them: [
                "already did sorry",
                "bec said iconic",
                "sunday 9"
              ]
            }
          ]
        }
      ],
      after: "Tayla, in the netball chat: \"date was SO fun. he knows every kylie song\" Steph: \"every one?\" Tayla: \"like all of them yeah\" Steph: \"hm\" Bec: \"steph dont\""
    },
    {
      id: "tayla-2", route: "tayla", gaydar: 55, gaydarSays: "He told Bec her ponytail was giving. Giving what, {name}.", title: "Courtside", contact: "Tayla", irl: true,
      outfits: [
        { label: "Shorts, a tee, sunglasses. Supportive boyfriend.", gaydar: -5, intro: "Sunday morning, Tayla's game at Downey Park. Shorts, a tee, sunglasses and a bag of Sour Patch Kids for the girls. You end up on the sideline next to Steph's boyfriend, who wants to talk about baseball." },
        { label: "Little shorts, a cropped tee, sunglasses and a bit of tint", intro: "Sunday morning, Tayla's game at Downey Park. Little pastel shorts, a cropped white tee, big sunglasses and some lip tint, and a bag of Sour Patch Kids. Steph's boyfriend looks at your shorts once and then stays on his phone for the whole game." },
        { label: "Little shorts, a cropped tee, sunglasses, tint and painted nails", gaydar: 5, intro: "Sunday morning, Tayla's game at Downey Park. Pastel shorts, a cropped tee, big sunglasses, lip tint, pink nails and a sign that says GO TAYLA 💅. Steph reads the sign, then looks at your nails, then at Bec.", them: [{ note: "Steph mouths something to Bec across the court. It looks a lot like \"the nails\"." }] }
      ],
      them: [
        { note: "Final whistle. Tayla runs over, sweaty, and hugs you. The girls are right behind her." },
        "You came! Okay. Girls, this is {name}. {name}, that's Bec, it's her 30th soon, and that's Steph. Don't listen to Steph.",
        { note: "Steph looks at you from your sunglasses down to your shoes." },
        "\"Hi,\" Steph says. \"Cute outfit. Very... netball-adjacent.\""
      ],
      replies: [
        {
          you: "Thanks! You were all amazing. Bec, how does your ponytail not move? It didn't move once. It was giving Ariana.", gaydar: 65,
          them: [
            "\"Giving Ariana,\" Steph says.",
            { note: "Bec actually tells you how she does it. Two hair ties and some trick with the second one. You ask a lot of questions. Tayla's next to you the whole time, and at some point she stops smiling." },
            "Okay! Coffee? Just us two?",
            { note: "She doesn't say much in the line at the coffee van. Then: \"You were really into Bec's hair.\"" }
          ],
          replies: [
            {
              you: "Sorry. I talk a lot when I'm nervous. Did I embarrass you?",
              them: [
                "No. No, they liked you.",
                "Steph's just like that. She thinks everyone's something.",
                "Come to Bec's thing. I want you there."
              ]
            },
            {
              you: "Is that bad? It was a really good ponytail.",
              them: [
                "It's not bad.",
                "It's just, Steph's boyfriend asked me if you were a friend from work. Like a work friend.",
                "And I said no, he's my date, and Steph laughed into her drink bottle. Everyone saw.",
                "Can you just be a bit less, I don't know. At the 30th. When Steph's there."
              ],
              replies: [
                {
                  you: "Less what?",
                  them: [
                    "You know what.",
                    "Sorry. Forget it.",
                    { note: "She pays for both coffees and passes yours over without looking at you." },
                    "Just come. I want them to like you."
                  ]
                },
                {
                  you: "Fine. I'll talk baseball with Steph's boyfriend all night.",
                  them: [
                    "You don't know anything about baseball.",
                    "You called it the stick one. He told Steph that, by the way.",
                    "Just come. Be normal. Maybe a bit quieter."
                  ]
                }
              ]
            },
            {
              you: "Yours was better though. You had a little flick at the end. Sporty but make it fashion.",
              them: [
                { note: "She laughs, then looks at you for a second longer than she needs to." },
                "Sporty but make it fashion. Okay.",
                "You're funny. You're coming to the 30th, I want them to see how funny you are. Not just...",
                "Yeah. Anyway."
              ]
            }
          ]
        },
        {
          you: "I'll take netball-adjacent. Steph, you were scary out there. I felt bad for the other team.",
          them: [
            "\"Thanks,\" Steph says. She looks at your outfit again. \"You're very supportive.\"",
            "He brought snacks! Who does that? I love him. Not love. It's been one date. Ignore me.",
            { note: "Bec laughs. Steph doesn't." }
          ],
          replies: [
            {
              you: "Is she always like this or is it me?",
              them: [
                "\"It's you,\" Steph says, and goes to get her drink bottle.",
                "She's like that with everyone. Mostly. You're still coming to Bec's 30th, yeah?"
              ]
            },
            {
              you: "(Hold the Sour Patch Kids out to Steph.)",
              them: [
                "\"...thanks,\" Steph says. She takes two.",
                { note: "She eats them slowly. She doesn't stop watching you." }
              ]
            }
          ]
        }
      ],
      after: "That night, in a chat you're not in. Steph: \"ok im just going to say it. tayla's guy is gay\" Bec: \"STEPH\" Steph: \"he said your ponytail was giving ariana\" Bec: \"it was tho\" Steph: \"bec thats not the point\""
    },
    {
      id: "c6c", route: "tayla", gaydar: 90, gaydarSays: "He did Bec's eyeliner in the bathroom at her own 30th and it was better than mine has ever looked", gaydarWho: "Tayla", title: "Wrong chat", contact: "Bec's 30th 🎂",
      intro: "Bec's 30th in the Valley, as Tayla's date. You wore a satin top, a skirt, eyeliner and a bit of glitter. When Bec's eyeliner smudged you fixed it for her in the bathroom. You danced to every Kylie song, mostly on your own. Bec added you to the group chat to sort out Ubers. The next morning:",
      outfits: [
        { label: "Satin top, jeans and a flick of eyeliner", gaydar: -5, intro: "Bec's 30th in the Valley, as Tayla's date. You wore a satin top with jeans and a little flick of eyeliner. When Bec's eyeliner smudged you fixed it for her in the bathroom. Bec added you to the group chat to sort out Ubers. The next morning:" },
        { label: "Satin top, a skirt, eyeliner and glitter" },
        { label: "A satin slip dress, heels, eyeliner and a lot of glitter", gaydar: 5, intro: "Bec's 30th in the Valley, as Tayla's date. You wore a satin slip dress, heels, sharp eyeliner and glitter on your cheekbones. When Bec's eyeliner smudged you fixed it for her in the bathroom. Bec added you to the group chat to sort out Ubers. The next morning:", them: [{ from: "Bec", text: "also {name} you walked in heels better than me. at my own birthday. rude" }] }
      ],
      them: [
        { from: "Bec", text: "thanks for coming everyone!! 🥳 im so hungover" },
        { from: "Bec", text: "also someone took my shoe home?? one shoe" },
        { from: "Steph", text: "ok be honest is tayla's guy gay or" },
        { from: "Steph", text: "WRONG CHAT" },
        { from: "Steph", text: "omg sorry {name} that was for bec" },
        { from: "Tayla", text: "steph 😐" }
      ],
      replies: [
        {
          you: "All good Steph lol. Bec, I think your shoe's in my bag. Don't ask.",
          them: [
            { from: "Steph", text: "im so sorry" },
            { from: "Bec", text: "omg thank u" },
            { from: "Bec", text: "and in steph's defence he did do my eyeliner in the bathroom" },
            { from: "Bec", text: "it was better than when i do it. like a lot better" },
            { from: "Tayla", text: "can everyone stop" }
          ],
          replies: [
            {
              you: "It did look good though, Bec.",
              them: [
                { from: "Bec", text: "it did" },
                { from: "Steph", text: "see this is what i mean" },
                { from: "Tayla", text: "oh my god" },
                { from: "Tayla", text: "muting this" }
              ]
            },
            {
              you: "(Say nothing else.)"
            }
          ],
          after: "An hour later Tayla messages you on her own: \"that was so embarrassing\" \"people kept asking me all night if you were gay and i didnt know what to say\" \"steph asked me like three times\" \"you did bec's makeup {name}. at her party\" \"i dont think this is going anywhere. sorry\""
        },
        {
          you: "To answer the question Steph, I don't know. I'm still working it out. The eyeliner was good though, right?", gaydar: 95,
          them: [
            { from: "Steph", text: "oh" },
            { from: "Bec", text: "😳" },
            { from: "Bec", text: "it was good" },
            { from: "Tayla", text: "are you serious" },
            { from: "Tayla", text: "you couldnt work that out before i brought you to bec's 30th?" }
          ],
          replies: [
            {
              you: "Sorry, Tay. I didn't think it would go like this.",
              them: [
                { from: "Tayla", text: "i looked like an idiot" },
                { from: "Tayla", text: "all night i was like hes not gay hes just fun. and steph kept doing the face" },
                { from: "Steph", text: "in my defence bec's cousin is gay and single so" },
                { from: "Tayla", text: "STEPH" },
                { from: "Tayla", text: "the bouncer asked if you were with the bachelorette party. and i laughed like it was funny" }
              ]
            },
            {
              you: "Tay, can we talk, just us?",
              them: [
                { from: "Tayla", text: "no" },
                { from: "Tayla", text: "not right now" },
                { from: "Bec", text: "maybe take it out of my birthday chat guys" }
              ],
              after: "Tayla doesn't answer your DM. Two days later Sam says netball was \"a bit awkward\" and changes the subject."
            }
          ]
        },
        {
          you: "Steph. I'm wearing your lip gloss in my profile pic. I borrowed it in the bathroom. Does that help?", gaydar: 95,
          them: [
            { from: "Steph", text: "LMAO" },
            { from: "Bec", text: "im crying" },
            { from: "Tayla", text: "its not funny" },
            { from: "Tayla", text: "ok its a bit funny" },
            { from: "Tayla", text: "can you call me" }
          ],
          after: "On the phone she isn't angry, she just sounds flat. \"I really liked you. You're so fun to take places.\" Then: \"But I spent the whole night watching you with my friends and you were way more into them than me. I want a guy who's into me. Like obviously.\" Her Uber turns up and she has to go."
        },
        {
          you: "Hi Steph. I'm in this chat btw.",
          them: [
            { from: "Steph", text: "i know" },
            { from: "Steph", text: "im dying" },
            { from: "Bec", text: "she's literally under her desk" },
            { from: "Tayla", text: "can we not do this in here" },
            { from: "Tayla", text: "{name} pls dont reply in here theres 11 people in this chat" }
          ],
          after: "An hour later Tayla, on her own: \"im not mad at you\" \"just embarrassed\" \"steph's been my best friend since year 7 and she asked if my boyfriend was gay in front of 11 people\" \"and i didnt even know the answer\" \"i think we should stop. sorry\" \"bec still wants you to do her makeup for her work thing btw\""
        },
        {
          you: "(Leave the group.)",
          after: "You leave the group. Your phone goes twice more with Tayla's name on it and you leave it face down until lunch."
        }
      ],
      debrief: "That's a rough way to find out people are talking about you. Joking about it, being honest, or just leaving were all fine."
    },
    {
      id: "tayla-feet", route: "tayla", gaydar: 93, gaydarSays: "Jordan worked out he's ticklish in about four seconds. Steph filmed it obviously", title: "Pool day", contact: "Tayla", irl: true,
      intro: "A week after Bec's 30th. Pool day at Steph's, everyone barefoot on the hot pavers. Your toes are still glittery pink from the party because the remover's at Dani's. Steph's cousin Jordan is here. He coaches Tayla's team on Thursdays and he's been asking her to dinner since preseason.",
      them: [
        { note: "Tayla's on the lounger next to yours. Bec and Steph are on the edge of the pool with their feet in." },
        "\"Tay, his toes are sparklier than the pool,\" Steph says.",
        { note: "Jordan comes out with a tray of drinks, no shirt on, and sits on the end of your lounger without asking." },
        "\"So this is him.\" He looks at your feet, then at Tayla. \"Really, Tay?\"",
        "Jordan. Be nice.",
        "\"I am nice.\" He grabs your ankle. \"Hang on, I want to see the glitter.\""
      ],
      replies: [
        {
          you: "(Pull your foot back.) Hey. No. Give it back.",
          them: [
            { note: "He doesn't. He runs one finger down the sole of your foot, slowly." },
            { note: "A noise comes out of you. It's high and it carries right across the pool." },
            "\"Oh, he's ticklish,\" Jordan says. \"Tay. Did you know?\"",
            { note: "Steph's already got her phone up." },
            { note: "He goes under your toes. You're laughing too hard to talk, slapping the lounger, trying to kick him and not kick him." }
          ],
          replies: [
            {
              you: "Stop! Stop. Jordan. STOP.", spark: 7,
              them: [
                { note: "He lets go straight away and puts his hands up." },
                "\"Stopped. Nice toes though, buddy.\"",
                { note: "You pull both feet up under you. Bec is crying into her towel." },
                "\"Did he squeal?\" Bec says. \"Tay, did you hear that?\"",
                "Yeah. He squealed.",
                { note: "She says it to Jordan. He moves down to the end of her lounger and she shifts her legs over so he fits." }
              ]
            },
            {
              you: "(Laughing) Okay okay okay, you win!", spark: 2, gaydar: 95,
              them: [
                "\"Didn't even try,\" Jordan says, and lets go.",
                "\"Do it again,\" Steph says. \"It wasn't recording properly.\"",
                "No, leave him, he's gone all red.",
                { note: "She's smiling at Jordan when she says it." },
                "\"He surrendered, Tay,\" Jordan says. \"Pretty sure that means you owe me dinner.\"",
                "That's not how it works.",
                { note: "She doesn't say no, though. He sits on the end of her lounger and stays there." }
              ]
            }
          ]
        },
        {
          you: "I'm not even ticklish. Go on.", spark: 5,
          them: [
            "\"Yeah?\" Jordan holds your ankle and wiggles his fingers just above your toes.",
            { note: "You start giggling before he's even touched you." },
            "\"Not ticklish,\" Bec says. \"Ok.\"",
            { note: "Then he gets the arch and you fold in half, grabbing at the towel, other leg kicking. Your sunglasses come off." },
            "\"Stop! Okay! I'm ticklish! I am!\"",
            { note: "He stops as soon as you say it." },
            "\"Thought so,\" he says. \"Tay, he lied to you.\"",
            "\"And the glitter,\" Steph says. She's still filming.",
            { note: "Jordan hands Tayla a drink and sits down on the pavers next to her lounger." }
          ]
        },
        {
          you: "(Tuck both feet under your towel.) They're not for touching.", spark: 12, gaydar: 92,
          them: [
            "\"Not for touching,\" Jordan says. \"Tay, his feet have rules.\"",
            { note: "He reaches under the towel anyway and squeezes your toes once. You squeak and kick the towel off. Steph gets it on her phone." },
            "Jordan.",
            "\"Sorry,\" he says. He isn't. He moves to the edge of the pool by Tayla's feet. \"They were just there.\"",
            { note: "He's in the water next to her for the rest of the afternoon. Your feet stay under the towel." }
          ]
        }
      ],
      after: "Steph, in a chat {name} isn't in this time: \"[video]\" \"ive watched this so many times\" Bec: \"the NOISE he made\" Bec: \"also has anyone noticed where tay's been sitting since\" Tayla: \"i can see this chat\" Tayla: \"jordan's my coach. we were talking about thursday\"",
      debrief: "Getting laughed at in front of people feels bad even when it's friendly. You said stop and he stopped, which is how it should go."
    },
    {
      id: "tayla-ambush", route: "tayla", gaydar: 95, irl: true, title: "After training", contact: "Tayla", gaydarSays: "My coach and my two best friends held my boyfriend down on the grass and did his feet. I didn't exactly stop them.",
      intro: "A week after the pool. You come to watch Tayla's Thursday training in Windsor in white sneakers and socks, on purpose. Training's done and everyone's lying on the grass. Jordan's on the bench with his whistle still round his neck.",
      them: [
        { note: "You sit on the grass next to Tayla with your knees up and your sneakers on. Steph looks at your shoes, then at Bec." },
        "\"Socks,\" Steph says. \"It's like thirty degrees.\"",
        "\"He's hiding them,\" Bec says.",
        "\"Is the glitter still on?\" Jordan gets up off the bench. \"Let's have a look.\"",
        "\"No,\" you say. \"It's off. I took it off. Leave my shoes alone.\"",
        "\"He's lying,\" Steph says.",
        { note: "Jordan drops onto the grass, grabs your ankle and pulls your foot into his lap. You kick. He's already got the laces undone." },
        "\"No! Jordan, I said no!\"",
        "\"Steph, grab the other one.\"",
        { note: "Steph sits on your other leg and Bec holds your shoulders down, laughing. You twist and kick and it doesn't help. Jordan throws the sneaker over his shoulder and peels the sock off from the heel." },
        { note: "The glitter's still on." },
        "\"LIAR,\" Steph yells. \"Tay, it's still on!\"",
        "Oh my god. You said you took it off.",
        { note: "Steph's got your other shoe and sock off too. Both feet are out on the grass, held down." },
        "\"Right,\" Jordan says. \"Penalty for lying to your coach.\"",
        "\"You're not my...\"",
        { note: "He starts, and Steph starts on the other foot." }
      ],
      replies: [
        {
          you: "(Lock up. Stare at the court lights. Don't make a sound.)",
          them: [
            { note: "Jordan goes slow up the arch. Steph goes fast under the toes. Your legs go stiff." },
            "\"He's fighting it,\" Bec says, above your head. \"Look at his face.\"",
            "\"Bec, get his ribs.\"",
            "\"No, feet only,\" Jordan says. \"Bec, swap in with Steph.\"",
            { note: "There's three of them now. Half the team has wandered over. Tayla's sitting cross-legged by your head with her chin in her hands." }
          ],
          replies: [
            {
              you: "(Hold it. Just keep holding it.)",
              them: [
                { note: "Somehow you do. Your eyes are watering, your jaw hurts and your toes keep curling, but nothing comes out." },
                "\"How,\" Steph says. \"I'd be dead.\"",
                "\"Tay, want a go?\" Jordan says. \"Bet you know a spot.\"",
                { note: "Tayla looks at your foot, then at you." }
              ],
              replies: [
                {
                  you: "(Look straight at her.) Don't, Tay.", outcome: "held", spark: 20,
                  them: [
                    { note: "She looks back at you for a second. Then she pushes Jordan's hands off." },
                    "Okay, enough. He wins. Give him his shoes.",
                    "\"He didn't win, he just didn't lose,\" Jordan says, but he lets go. They all do.",
                    { note: "Steph gets your sneaker off the court. Tayla brushes the grass off your feet before you put your socks on. She takes her time." },
                    "\"Whatever,\" Jordan says, and packs up the balls by himself."
                  ],
                  after: "Tayla, to the team chat: \"three of you and he didnt laugh once\" Steph: \"it wasnt normal\" Tayla: \"it was kind of hot actually\" Bec: \"TAY\" Jordan: \"rematch next week\" Tayla: \"no\""
                },
                {
                  you: "(Say nothing. Keep holding.)", outcome: "cracked", spark: 9,
                  them: [
                    { note: "Tayla shuffles down. She skips the sole and goes for the spot just under your ankle bone, the one she found on her couch." },
                    { note: "Half a second. Then you squeal so loud the team on the next court looks over, and all four of them are going at once." },
                    "\"TAY,\" Steph screams. \"You broke him!\"",
                    "I found that ages ago. On my couch.",
                    { note: "They stop when you finally get \"stop\" out. Tayla high-fives Jordan." }
                  ],
                  after: "Steph, to the team chat: \"[video] tay found it\" Bec: \"that noise omg\" Jordan: \"tay's a natural\" Steph: \"wait you knew about that spot??\" Tayla: \"he made me promise not to use it\" Steph: \"and??\" Tayla: \"and jordan asked\""
                }
              ]
            },
            {
              you: "(It's too much. You squeal.)",
              them: [
                { note: "It comes out as a squeal and then you're giggling and bucking on the grass, trying to get your feet back. Six hands. It's not happening." },
                "\"THERE he goes,\" Steph yells.",
                "\"Penalty accepted,\" Jordan says, and keeps going.",
                { note: "Bec's filming with one hand. Tayla's laughing so much she has to lie down." }
              ],
              replies: [
                {
                  you: "(Giggling) Okay! It's still on! I lied! I lied!", outcome: "cracked", spark: 9,
                  them: [
                    { note: "They all let go. Jordan holds his hands up like a ref." },
                    "\"Confession accepted.\"",
                    { note: "You curl up with your toes tucked under you, red to your hairline. Steph throws your sneaker at you." },
                    "You lied to my coach about nail polish. Who does that.",
                    { note: "She's still laughing. Jordan gives her a hand up off the grass and holds on a bit longer than he needs to." }
                  ],
                  after: "Bec, to the team chat: \"[video] 'I LIED I LIED'\" Steph: \"best training all season\" Jordan: \"he can come every thursday\" Tayla: \"you only coach thursdays\" Jordan: \"so every week then\""
                },
                {
                  you: "(Giggling, red) Stop! All of you, stop!", outcome: "cracked", spark: 7,
                  them: [
                    { note: "They let go as soon as you say it." },
                    "\"Hands off,\" Jordan says. \"Stopped.\"",
                    { note: "You sit up and pull your feet in. There's grass in your hair." },
                    "Are you okay? That was so high.",
                    { note: "Then Steph does the noise you made, and Tayla loses it and has to grab Jordan's arm to stay standing." }
                  ],
                  after: "Tayla, to Bec: \"i feel bad\" Bec: \"you laughed the most\" Tayla: \"i know thats why i feel bad\" Bec: \"you also held jordan's arm for like ten minutes\" Tayla: \"i was falling over\" Bec: \"for ten minutes\""
                }
              ]
            }
          ]
        },
        {
          you: "(Give in. You're giggling before they've even started.)",
          them: [
            { note: "You go the second they move. Squealing, twisting on the grass, toes going everywhere." },
            "\"Oh my god,\" Steph says. \"He's so bad.\"",
            "\"Bec, Tay, get in here,\" Jordan says. \"Everyone gets a foot.\"",
            { note: "Bec takes half a foot. Tayla crawls over laughing and takes the toes on the other one." },
            "Why are you SO ticklish. This is so bad. {name}.",
            { note: "Half the team's standing round you in a circle. Someone puts music on." }
          ],
          replies: [
            {
              you: "(Giggling) Please! Please stop!",
              them: [
                { note: "They stop and let go. You lie there panting with your arms over your face." },
                "\"He said please,\" Jordan says. \"Three times. Did everyone count?\"",
                "\"Three,\" a couple of the girls say.",
                { note: "Tayla picks your foot up again. She isn't tickling. She's just holding it and grinning at you." },
                "One more? Just me. Ten seconds."
              ],
              replies: [
                {
                  you: "(Pull it back.) No. Not even you.", outcome: "begged", spark: 5,
                  them: [
                    "Fine! Fine.",
                    { note: "She lets go. You keep your feet tucked under you. Jordan's sitting on your socks." },
                    "Jordan, give him his socks.",
                    "\"Come and get them, Tay.\"",
                    { note: "She goes to get them and it turns into her and Jordan wrestling on the grass. She's laughing the whole time. You sit there holding your sneakers." }
                  ],
                  after: "Steph, to the team chat: \"he begged. 3 pleases\" Bec: \"then tay and jordan wrestled for his socks for like five min\" Steph: \"who won\" Bec: \"not {name}\""
                },
                {
                  you: "(Still giggling) ...Okay. Ten seconds. Just you.", outcome: "kept", spark: 2, gaydar: 97,
                  them: [
                    { note: "The team counts down. Tayla goes straight for the spot under your ankle bone and you're screaming from ten." },
                    { note: "At one the others all pile back in. They stop when you finally squeak \"stop\"." },
                    "\"He asked for that,\" Jordan says. \"He literally asked.\"",
                    "He did ask.",
                    { note: "Jordan sits down on the grass next to her." },
                    "\"Team's going to the pub after,\" he says to her. \"You coming?\"",
                    "Yeah, okay.",
                    { note: "She doesn't look at you." }
                  ],
                  after: "Bec, to the team chat: \"[video] he asked for MORE\" Steph: \"jordan sat next to tay all night at the pub\" Bec: \"where was {name}\" Steph: \"fixing my eyeliner in the bathroom\" Bec: \"ok well thats fair\""
                }
              ]
            },
            {
              you: "(Stop fighting. Lie back on the grass and let them.)",
              them: [
                { note: "You stop struggling and lie flat with your arms out, laughing at the sky." },
                "\"He's given up,\" someone says. \"He's just lying there.\"",
                "\"Look at him,\" Jordan says. \"He loves this.\"",
                { note: "It goes on for ages. They swap round. Someone does your arch with the corner of a netball bib." },
                { note: "After a while Tayla stops and sits back and watches." },
                "{name}. You can tell them to stop, you know."
              ],
              replies: [
                {
                  you: "(Gasping) Stop. Okay. Stop.", outcome: "kept", spark: 2, gaydar: 97,
                  them: [
                    { note: "They stop and let go." },
                    "\"Three minutes,\" Bec says. \"I got the whole thing.\"",
                    { note: "Jordan pats your foot twice like he's subbing you off. \"Good effort, champ.\"" },
                    { note: "Then he stands up and holds his hand out to Tayla. \"Walk you to your car?\"" },
                    { note: "She takes it. Steph throws your sneakers over, one at a time." }
                  ],
                  after: "Tayla, to Bec, from Jordan's passenger seat: \"he just lay there and let everyone do it\" \"for like three minutes\" \"he was having the best time\" Bec: \"and?\" Tayla: \"idk. its fine. i just dont want that in a boyfriend\" Tayla: \"jordan's getting us food\""
                },
                {
                  you: "(Can't speak. Just keep laughing.)", outcome: "kept", spark: 0, gaydar: 98,
                  them: [
                    { note: "You can't get a word out. They keep going." },
                    "Okay. Everyone stop. He can't breathe.",
                    { note: "It's her on-court voice. Everyone lets go at once." },
                    "\"He didn't say stop,\" Jordan says.",
                    "He couldn't. Look at him.",
                    { note: "You're lying in a heap of socks and bibs, still giggling. Half the team's filming." },
                    { note: "Tayla picks up her bag." },
                    "Jordan, can you give me a lift?",
                    "\"Yeah. Course.\""
                  ],
                  after: "Steph, to the team chat: \"[video] all four minutes\" Tayla: \"stop sending it\" Steph: \"tay you left with jordan\" Tayla: \"he drove me home\" Bec: \"you live ten minutes away\" Bec: \"it took two hours\""
                }
              ]
            }
          ]
        }
      ],
      debrief: "Getting held down and losing it laughing doesn't say anything about you. It's just feet. What Tayla did after was her call."
    },
    {
      id: "tayla-end", route: "tayla", gaydar: 99, spark: 0, gaydarSays: "Mitch thought Padam Padam was from a car ad. Steph liked him straight away.", title: "Tayla and Mitch", contact: "Tayla", irl: true,
      outfits: [
        { label: "Jeans and a tee. Keep your head down.", gaydar: -2, intro: "Two months later Sam drags you to the netball grand final. Jeans, a tee, just lip oil. In the stands next to Tayla's drink bottle there's a tall sunburnt guy in a football jersey yelling \"GO TAY\" every time she touches the ball. That's Mitch." },
        { label: "Cute shorts, a cropped knit and lashes", intro: "Two months later Sam drags you to the netball grand final. Little shorts, a cropped knit, lashes and gloss. In the stands next to Tayla's drink bottle there's a tall sunburnt guy in a football jersey yelling \"GO TAY\" every time she touches the ball. That's Mitch." },
        { label: "A sundress, sandals, painted toes and big sunglasses", gaydar: 1, intro: "Two months later Sam drags you to the netball grand final. A yellow sundress, sandals, painted toes and big sunglasses. A woman in the row behind asks where the dress is from. In the stands next to Tayla's drink bottle there's a tall sunburnt guy in a football jersey yelling \"GO TAY\" every time she touches the ball. That's Mitch.", them: [{ note: "Steph spots the sundress from the court and gives you a slow thumbs up." }] }
      ],
      them: [
        { note: "After the game Tayla comes over, still sweaty, holding Mitch's hand." },
        "Oh! Hi! Sam said you might come. This is Mitch. Mitch, {name}. We went out. For a bit.",
        "\"Hey man,\" Mitch says. \"You did Bec's makeup that time, right? She still talks about it.\"",
        "He plays football. Every Saturday, it's his whole thing. I played him Padam Padam in the car and he goes, is this from an ad?",
        "He carried the whole cooler in from the car by himself. You made me hold your tote bag at Felons. Remember that?",
        { if: "tayla-ambush=held", text: "\"Wait, are you the guy from training?\" Mitch says. \"Jordan couldn't get a laugh out of you? He's still annoyed about that.\"" },
        { if: "tayla-ambush=cracked|begged|kept", text: "\"Oh, hang on,\" Mitch says, grinning. \"You're the guy from the training video. Tay's team sent it to everyone.\"" },
        { if: "tayla-ambush=cracked|begged|kept", note: "Tayla says \"Mitch\" and elbows him, but she's laughing." }
      ],
      replies: [
        {
          you: "Hi Mitch! Love the jersey. Very orange. Tay, he's gorgeous. I'm so happy for you.",
          them: [
            "Thanks. Yeah. He is.",
            { note: "She looks at you properly for the first time. Your outfit, your face." },
            "You look really happy. Way happier than at Felons. Are you seeing anyone?",
            "\"Tay,\" Mitch says. \"Nosy.\""
          ],
          replies: [
            {
              you: "No one. Just me and the girls. Dani's taking me dancing on Saturday.",
              them: [
                "In the Valley?",
                "\"Love the Valley,\" Mitch says. \"Went to a buck's there once and we ended up at a drag show. Great night.\"",
                "Mitch. That's... okay, never mind.",
                "Have fun Saturday."
              ]
            },
            {
              you: "Not yet. We'll see.",
              them: [
                "Steph made a list, by the way. Of guys. For you.",
                "After the 30th. I told her to throw it out and she didn't.",
                "There's a guy from her work on it. He's actually really nice."
              ]
            }
          ]
        },
        {
          you: "(Stand up a bit straighter.) Mitch? Can I talk to you for a sec? About Tay.",
          them: [
            "\"Yeah, course,\" Mitch says, and follows you over to the fence.",
            { note: "He's a head taller and sunburnt across the nose. He leans on the fence so he's down at your level. Your stomach flips." },
            "\"What's up, champ?\""
          ],
          replies: [
            {
              you: "I want her back. I think. I'm going to ask her. I just thought I should tell you first. Sorry.",
              them: [
                "\"You want her back?\" He grins like you've told him a good one. \"Go on then. Have a go. I'll wait here.\"",
                "\"Here.\" He holds out his Gatorade. \"You look like you need this more than me.\"",
                { note: "You have a sip. Your hand shakes when you give it back, and he sees." },
                { note: "Tayla's come over. She heard." },
                "Did you just ask Mitch if you could have me back?",
                "{name}. No. Oh my god.",
                "That's actually really cute though.",
                { note: "She fixes your sunglasses on top of your head for you, then goes back to Mitch." }
              ],
              after: "Steph, in the netball chat that night: \"update. {name} asked mitch for tay back\" \"mitch gave him a gatorade\" Bec: \"i love him\" Tayla: \"which one\" Bec: \"both??\""
            },
            {
              you: "...Nothing. Sorry. It's a really good orange, your jersey.", gaydar: 100,
              them: [
                "\"Ha. Thanks. I've got a spare in the car if you want it. Might be big on you.\"",
                { note: "You walk back to Tayla holding Mitch's spare jersey and his number, for if you ever want to come to a game. Your ears are bright red." },
                "You went over there to fight for me and you came back with his number.",
                "Steph filmed it. Sorry. I tried."
              ],
              after: "Steph, in the netball chat that night: \"[video] {name} went to fight mitch and came back with his jersey and his number\" Bec: \"is he going to wear it\" Steph: \"crop it probably\" Tayla: \"mitch wants to know if he's coming saturday\""
            }
          ]
        },
        {
          you: "Ha. Okay. Nice to meet you, Mitch. I'm going to go find Sam.",
          them: [
            "\"Yeah, you too, man!\"",
            { note: "Tayla catches your arm as you go." },
            "Hey. You look good.",
            "And Steph says told you so. Don't reply to her."
          ]
        }
      ],
      after: "Steph, in the netball chat that night: \"{name} came to the grand final\" Bec: \"he looked so good\" Steph: \"mitch liked him\" Tayla: \"mitch likes everyone\"",
      debrief: "It's weird seeing an ex happy with someone who's nothing like you. Being nice, having a go, or leaving early were all fine."
    },
    {
      id: "georgie-1", route: "georgie", gaydar: 20, gaydarSays: "Fell off a V1 twice. Did his own nails. Not sure what to do with that yet.", title: "Belay partner", contact: "Georgie",
      outfits: [
        { label: "Gym shorts and an old tee. You're here to climb.", gaydar: -10, intro: "Georgie climbs at your gym on Tuesdays and Thursdays. She doesn't do small talk. Tonight she asked you to belay her, and then, in the same flat voice, asked if you wanted a drink after. You were in gym shorts and an old tee with a hole in the armpit." },
        { label: "Fitted gym shorts and a nice tank", intro: "Georgie climbs at your gym on Tuesdays and Thursdays. She doesn't do small talk. Tonight she asked you to belay her, and then, in the same flat voice, asked if you wanted a drink after. You were in fitted gym shorts, a nice black tank and a clear coat on your nails, which you've started doing \"for grip\"." },
        { label: "Short shorts, a cropped tank, and nails with a French tip", gaydar: 5, intro: "Georgie climbs at your gym on Tuesdays and Thursdays. She doesn't do small talk. Tonight she asked you to belay her, then asked if you wanted a drink after. You were in short running shorts, a cropped tank and a French tip you did last night. The chalk wrecked it in ten minutes and you said \"no\" out loud. Georgie heard." }
      ],
      them: [
        "hey. good session",
        "youre a terrible climber btw",
        "good belayer though. and funny",
        "want to do it again? saturday. thai in west end"
      ],
      replies: [
        {
          you: "Terrible? Wow. Okay. Yes to Thai.",
          them: [
            "you are though",
            "id rather just say it",
            "saturday 7. the one on boundary st"
          ],
          replies: [
            {
              you: "Saturday. Wear something nice. I want to see you out of a harness.",
              them: [
                "lol ok",
                "you too. not the gym stuff"
              ]
            },
            {
              you: "Can I ask why you asked me? I fell off a V1. Twice.",
              them: [
                "you dont take yourself seriously",
                "every other guy there grunts. you sang abba on the wall",
                "anyway saturday"
              ]
            }
          ]
        },
        {
          you: "I'm not terrible! I'm graceful. It's different. Saturday works.",
          them: [
            "graceful lol",
            "you did a little scream every time you slipped",
            "but yes saturday"
          ],
          replies: [
            {
              you: "It was a manly scream.", gaydar: 25,
              them: [
                "it was not",
                "it was like a high C",
                "see you saturday"
              ]
            },
            {
              you: "See you Saturday. I'll try to scream less.",
              them: [
                "dont",
                "it was the best bit"
              ]
            }
          ]
        },
        {
          you: "Thai, yes. But my forearms are dead after tonight, so be gentle with me.",
          them: [
            "your forearms are tiny. let them be dead",
            "you can pick the restaurant though",
            "actually no i already picked it. boundary st, 7"
          ],
          replies: [
            {
              you: "They're not tiny. They're delicate.", gaydar: 25,
              them: [
                "thats worse",
                "saturday"
              ]
            },
            {
              you: "Rude. But fine. Saturday.",
              them: [
                "👍"
              ]
            }
          ]
        }
      ],
      after: "Georgie, to her housemate: \"asked out the guy from the gym\" Housemate: \"the one who sings?\" Georgie: \"yeah. he's funny. he does his own nails\" Housemate: \"oh?\" Georgie: \"for grip apparently\" Housemate: \"is that a thing\" Georgie: \"no\""
    },
    {
      id: "georgie-2", route: "georgie", gaydar: 55, gaydarSays: "Green nails to tacos. I didn't ask why at the time. I'm asking now.", title: "Tacos", contact: "Georgie", irl: true,
      outfits: [
        { label: "Jeans, a plain tee, sage nails", gaydar: -5, intro: "Second date. Tacos in Fortitude Valley. Jeans, a plain tee, and your nails painted a soft sage green, which felt like a lot when you left the house. Georgie's in a black tank and cargo pants with chalk still on her knuckles. She's already ordered for both of you." },
        { label: "A fitted shirt, gloss and painted nails", intro: "Second date. Tacos in Fortitude Valley. A fitted shirt, a clear gloss and your nails painted a soft sage green. Georgie's in a black tank and cargo pants with chalk on her knuckles. She's already ordered for both of you." },
        { label: "A sheer shirt, gloss, sage nails and a little eyeliner", gaydar: 5, intro: "Second date. Tacos in Fortitude Valley. A sheer black shirt, gloss, sage nails and a thin line of eyeliner. Georgie's in a black tank and cargo pants. She's already ordered for both of you, and she looks at your eyeliner for a while without blinking.", them: [{ note: "\"Eyeliner,\" she says. Not a question." }] }
      ],
      them: [
        "Hi. I ordered. Fish, pork belly, and the corn thing. You're having a marg. You look like a marg person.",
        { note: "She sits back and looks at you. She doesn't fill the silence. She never does." },
        "Your nails are green."
      ],
      replies: [
        {
          you: "Sage, actually. Everyone's doing it right now. Do you like it? I could do yours. You'd suit a deep red.", gaydar: 60,
          them: [
            "No. I'd chip it on the wall in five minutes.",
            "It's neat though. You're good at it.",
            { note: "The waiter comes over. His eyebrows are perfect. You stare at them. Georgie watches you stare." },
            "Are you going to say something or just look at him?"
          ],
          replies: [
            {
              you: "Sorry! Are your brows laminated? They look amazing. Who does them?", gaydar: 65,
              them: [
                "\"Oh my god, yes, thank you! There's a girl on James St,\" the waiter says.",
                { note: "You talk for four minutes. You get the girl's Instagram. He comes back with a free churro. Georgie eats her taco and says nothing until he's gone." },
                "You got a free churro.",
                "I've been coming here two years. I've never got a churro.",
                "He was more into you than he was into me. That doesn't usually happen on my dates."
              ],
              after: "Georgie, to her housemate: \"second date\" Housemate: \"and?\" Georgie: \"green nails. talked to the waiter about his eyebrows for four minutes. waiter gave him a churro\" Housemate: \"do you like him though\" Georgie: \"yeah. i dont know if he likes me. i dont know if he likes girls\""
            },
            {
              you: "I wasn't looking at him. I was reading the specials board.",
              them: [
                "The specials board is behind me.",
                "It's fine. Eat."
              ]
            }
          ]
        },
        {
          you: "Sage is basically a neutral now, Georgie.", gaydar: 60,
          them: [
            "Is it.",
            "My last boyfriend wore the same black hoodie for three years. I liked that. I never had to wonder about him.",
            "Eat your taco."
          ],
          replies: [
            {
              you: "So I'm the opposite of the hoodie guy.",
              them: [
                "You're the opposite of every guy I've been out with.",
                "Haven't decided if that's good. Eat."
              ]
            },
            {
              you: "(Eat the taco. Say nothing. Pinkie slightly up.)",
              them: [
                { note: "She watches your pinkie. Her lips move a bit, like she's counting something." }
              ]
            }
          ]
        },
        {
          you: "They're for grip. Climbing grip. It's a technique.",
          them: [
            "No it's not.",
            "I've climbed for eleven years. It's not a thing.",
            "You can just say you like it."
          ],
          replies: [
            {
              you: "...Fine. I like it. I did them last night watching Drag Race.", gaydar: 65,
              them: [
                "Drag Race.",
                "Okay.",
                { note: "She drinks her marg and doesn't bring it up again." }
              ]
            },
            {
              you: "It's a technique. Look it up.",
              them: [
                "I won't.",
                "Eat. They go soggy."
              ]
            }
          ]
        }
      ],
      after: "Georgie, to her housemate: \"second date\" Housemate: \"and?\" Georgie: \"green nails\" Housemate: \"do you like him though\" Georgie: \"yeah. i think. i dont know if he likes me\" Georgie: \"i dont know if he likes girls\""
    },
    {
      id: "c6d", route: "georgie", gaydar: 95, gaydarSays: "He looked at the waiter's arms eight times. I counted. I always count.", title: "Straight up", contact: "Georgie",
      outfits: [
        { label: "The slip dress with a cardigan buttoned right up", gaydar: -5, intro: "Third date. Thai in West End, the place on Boundary St. You wore the lilac slip dress with a big cardigan buttoned right up over it, and just gloss. She didn't mention it once all dinner. You talked to the waiter about his tattoos for a long time." },
        { label: "Lilac slip dress, a cardigan, nails, gloss and lashes" },
        { label: "Lilac slip dress, strappy sandals, painted toes, lashes, no cardigan", gaydar: 4, intro: "Third date. Thai in West End, the place on Boundary St. The lilac slip dress, no cardigan, strappy sandals, toes painted to match, gloss and lashes. She didn't mention it once all dinner. You talked to the waiter about his tattoos for a long time.", them: ["and dont think i didnt see the toes"] }
      ],
      intro: "Third date. Thai in West End, the place on Boundary St. A lilac slip dress with a cardigan over it, your nails done, gloss and lashes. She didn't mention it once all dinner. You talked to the waiter about his tattoos for a long time.",
      them: [
        "hey",
        "im just going to ask because i hate games and ive been thinking about it since the tacos",
        "are you gay"
      ],
      replies: [
        {
          you: "Why does everyone keep asking me that? I wore a dress, Georgie. Guys can wear dresses.",
          them: [
            "they can",
            "and it looked good. better than anything i own tbh",
            "but you barely looked at me tonight",
            "you asked the waiter about his tattoos for like ten minutes. you touched his arm when he showed you the one on his bicep",
            "you looked at his arms 8 times. i counted"
          ],
          replies: [
            {
              you: "I was looking at the tattoo! It was a swallow. Really traditional.",
              them: [
                "it was a swallow on a massive arm",
                "{name} im not mad. i just cant do the pretending thing",
                "im asking one more time and then i wont ask again. are you gay"
              ],
              replies: [
                {
                  you: "...I don't know. I really don't.",
                  them: [
                    "ok",
                    "thats the most honest thing youve said in three dates",
                    "i think we stop seeing each other",
                    "you can still belay me. youre good at it"
                  ]
                },
                {
                  you: "No.",
                  them: [
                    "ok",
                    "then youre a straight guy who wears slip dresses and stares at waiters. fine",
                    "im out either way. see you at the gym"
                  ]
                }
              ]
            },
            {
              you: "Fine. I can wear a dress and be straight.",
              them: [
                "sure",
                "are you?"
              ],
              replies: [
                {
                  you: "...Next question.",
                  them: [
                    "right",
                    "ok"
                  ]
                }
              ]
            }
          ]
        },
        {
          you: "Wow. Straight to it. Can I ask you something first? Did you hate the dress?",
          them: [
            "no",
            "it suited you way more than the gym stuff did",
            "i didnt say anything at dinner because i didnt know what to say. thats why im asking"
          ],
          replies: [
            {
              you: "I'm not gay. I just like pretty things. I always have.",
              them: [
                "ok",
                "i like pretty things too",
                "but i dont want to go out with a guy who looks prettier than me at dinner",
                "sorry. thats harsh",
                "youre not really my type anymore. you were on the wall that first night. not in the dress"
              ]
            },
            {
              you: "I don't know what I am. I know I felt really good in it.", gaydar: 97,
              them: [
                "ok",
                "fair",
                "id just rather not be the girl you work it out on",
                "i like you. not like that anymore though"
              ]
            }
          ]
        },
        {
          you: "Do you want the honest answer or the one where we get a fourth date?",
          them: [
            "honest",
            "obviously"
          ],
          replies: [
            {
              you: "...I think I might be.", gaydar: 98,
              them: [
                "ok",
                "thank you",
                "the last three dates felt like hanging out with my housemate tbh. i dont want to kiss my housemate",
                "still belay me tuesday?"
              ]
            },
            {
              you: "The honest answer is next question.",
              them: [
                "thats not an answer",
                "actually it is. ok",
                "were done. see you at the gym"
              ]
            }
          ]
        },
        {
          you: "No.",
          them: [
            "ok",
            "you looked at the waiters arms 8 times but ok"
          ],
          replies: [
            {
              you: "I didn't. You're imagining it.",
              them: [
                "im not",
                "whatever. not doing this. see you at the gym"
              ]
            },
            {
              you: "I'm not doing this over text, Georgie.",
              them: [
                "fine"
              ]
            }
          ]
        }
      ],
      after: "Georgie, to her housemate: \"he's gay\" \"the dress guy?\" \"the dress guy\" \"did he say\" \"not really. he looked at the waiter's arms eight times\" \"you counted\" \"yeah\"",
      debrief: "She asked you straight out. Answering, not answering, or getting annoyed were all fine."
    },
    {
      id: "georgie-feet", route: "georgie", gaydar: 96, gaydarSays: "His toes are lilac and he did them himself and the edges are cleaner than mine. Corey saw them first.", title: "Climbing shoes", contact: "Georgie", irl: true,
      intro: "Thursday at the gym. You and Georgie have been seeing each other three weeks. Corey's here tonight. He sets the routes, and every single week he asks Georgie to come climbing outside with him.",
      them: [
        { note: "After the session you sit on the bench and pull your climbing shoes off. Lilac toes. You forgot." },
        "Huh. Lilac.",
        { note: "Corey drops his chalk bag next to you. His feet are bare and huge and covered in chalk." },
        "\"No way,\" he says, loud enough for the whole bench. \"You get your toes done, man?\"",
        "He did them himself. Look at the edges.",
        "\"Course he did.\" Corey's grinning. He doesn't lower his voice when he turns to Georgie. \"Kangaroo Point Saturday? Proper rock. Just us. He'll survive a day without you.\""
      ],
      replies: [
        {
          you: "Can I come too?",
          them: [
            "\"Yeah, course, man,\" Corey says, way too easily. \"Wear flip-flops for the walk down. Don't want you chipping anything.\"",
            { note: "Georgie snorts. She doesn't say no to Saturday." },
            "Bring snacks. You can belay.",
            { note: "So you'll be at the bottom holding the rope. Corey will be up there next to her." }
          ]
        },
        {
          you: "(Shove your feet back into your socks.)",
          them: [
            { note: "One sock goes on inside out. Corey's still grinning." },
            "Why are you hiding them. They look good.",
            "That's kind of the problem.",
            "\"What problem?\" Corey says.",
            "Nothing. Saturday. Seven."
          ]
        },
        {
          you: "They won't chip, actually. That's a top coat.", gaydar: 98,
          them: [
            "\"Top coat,\" Corey says, nodding slowly. \"Georgie. Come on.\"",
            "Three weeks and I've never heard you say top coat.",
            "\"You never asked,\" you say. You nod at Corey. \"He did.\"",
            { note: "Corey laughs and ruffles your hair. Then he goes and helps Georgie coil her rope, standing very close to her." }
          ]
        }
      ],
      after: "Georgie, to her housemate: \"corey asked me out again\" \"and?\" \"said yes. for climbing\" \"what about {name}\" \"he's got lilac toes. did them himself. neater than mine\" \"so?\" \"so im going climbing with corey\"",
      debrief: "Getting caught out in front of the guy who wants her stings. You don't have to win anything against him."
    },
    {
      id: "georgie-tickle", route: "georgie", gaydar: 97, irl: true, title: "The crash mats", contact: "Georgie", gaydarSays: "I timed the whole thing. Obviously I timed it. I'm not saying what the number means.",
      intro: "A week after Corey asked Georgie to Kangaroo Point. Thursday night at the gym again. After the session everyone lies on the crash mats under the bouldering wall, barefoot, eating the lollies someone always brings. Your toes are still lilac. Corey's on the mat right next to Georgie.",
      them: [
        { note: "You lie down on Georgie's other side. Your feet end up near Corey's head, because that's how the mats work." },
        "\"Still lilac,\" Corey says, looking at them sideways. \"No chips. Respect.\"",
        "He does a top coat. Apparently.",
        "\"How was the rock on Saturday?\" you ask her.",
        "Good. Corey led a 22. I seconded it. Yeah. It was good.",
        { note: "That's all she says. Corey smiles at the ceiling." },
        { note: "Then he rolls onto his elbow and looks at your foot." },
        "\"Hey, Georgie. Climbers are meant to have tough feet. Calluses. Can't feel a thing. Bet his aren't.\"",
        "Corey.",
        "\"Just checking.\" His hand's already round your ankle, chalky. \"Hold still, buddy. This is for the gym record.\"",
        "There's no gym record for that.",
        "\"There is now. Georgie, time it.\"",
        { note: "Georgie gets her phone out, slowly, and opens the stopwatch." }
      ],
      replies: [
        {
          you: "(Go rigid. Stare at the holds on the ceiling. Not a sound.)",
          them: [
            { note: "You stare at a pink crimp on the ceiling. Corey's fingers start at your heel and walk up the sole, slow." },
            "Five seconds.",
            { note: "He gets to the arch. Your calf goes tight. He feels it and grins." },
            "\"Oh, he's fighting. Look at the calf.\"",
            "Ten.",
            { note: "A couple of the regulars sit up to watch. Someone says \"oh no, Corey's doing the thing\". So it's a thing he does." },
            "Fifteen.",
            { note: "The chalk makes it dry and scratchy. He goes right under your toes." }
          ],
          replies: [
            {
              you: "(Hold it. Hold it all the way.)",
              them: [
                { note: "You hold it through twenty, then thirty. Your eyes are watering. Nothing comes out." },
                "Forty. Forty-five.",
                { note: "At sixty Corey lets go and flops onto his back." },
                "\"Nothing,\" he says. \"Not a thing. He's a statue.\"",
                "One minute two. Not a sound.",
                { note: "She keeps looking at you after she's stopped the timer." }
              ],
              replies: [
                {
                  you: "(Sit up and dust the chalk off your foot.) My turn to time you, Corey.", outcome: "held", spark: 22,
                  them: [
                    { note: "Corey laughs and sits up and tucks his feet right under himself. \"No thanks.\"" },
                    "Oh, interesting. Corey. Give me your foot.",
                    "\"Absolutely not.\"",
                    { note: "Georgie lies back down, a bit closer to you this time, and leaves her hand on your arm." },
                    "I'm putting it in the gym chat. One minute two.",
                    { note: "Corey goes to put the lollies away. It takes him a long time." }
                  ],
                  after: "Georgie, to the gym chat: \"new record. 1:02. no reaction\" Corey: \"rigged\" Georgie: \"you wont do yours\" Corey: \"no comment\" Georgie, to her housemate: \"he beat corey at corey's own thing\" \"i liked that more than i thought i would\""
                },
                {
                  you: "(Wiggle your toes in his face.) Go on. Do the other one.", outcome: "held", spark: 15,
                  them: [
                    "\"Bad idea, buddy,\" Corey says, and grabs it.",
                    "Restarting.",
                    { note: "This time he doesn't mess around. Both thumbs, straight under the toes. You last eight seconds. Then a snort comes out, then a giggle, and you're kicking." },
                    "Eight. Okay. So the left one's the weak one.",
                    { note: "He lets go. The regulars cheer. Georgie's laughing properly, at Corey's face more than yours." },
                    "\"Kangaroo Point again Saturday?\" Corey says to her.",
                    "Yeah, okay."
                  ],
                  after: "Georgie, to her housemate: \"right foot 1:02. left foot 8 seconds\" \"so he is ticklish\" \"yeah\" \"corey's taking me back to kangaroo point. harder one this time\""
                }
              ]
            },
            {
              you: "(It breaks. You giggle.)",
              them: [
                { note: "At eighteen seconds it comes out: a giggle, then a squeak, and you're curled on your side trying to get your foot back. He's not letting go." },
                "Eighteen.",
                "\"Eighteen!\" Corey says. \"Georgie, eighteen seconds!\"",
                "I can see the timer, Corey.",
                { note: "A girl halfway up the bouldering wall has stopped to watch, hanging off one hand, laughing." }
              ],
              replies: [
                {
                  you: "(Giggling) Okay! Fine! I'm ticklish! Happy?", outcome: "cracked", spark: 10,
                  them: [
                    { note: "He lets go straight away." },
                    "\"Very.\" He lies back with his hands behind his head. \"Write it down, Georgie.\"",
                    "Writing it down.",
                    { note: "She actually does. In her phone, in a note called 'Corey's records'. There are other names in it. Yours goes at the bottom." },
                    { note: "You sit up and pick chalk out from between your toes. Georgie lies back down next to Corey and they look at something on her phone together." }
                  ],
                  after: "Georgie, to her housemate: \"18 seconds\" \"corey keeps a list. top guy did four minutes\" \"{name}'s at the bottom\" Housemate: \"is that bad\" Georgie: \"its just numbers\""
                },
                {
                  you: "(Bright red, giggling) Corey! Stop it!", outcome: "cracked", spark: 8,
                  them: [
                    { note: "He stops the second you say it and lets go." },
                    "\"Done, done. Sorry, buddy.\"",
                    { note: "You sit up and hug your knees, feet flat where he can't get at them. You're red down to your neck." },
                    "You okay? That was loud.",
                    { note: "She asks it like she'd ask if you'd hurt a finger. Then she turns to Corey. \"Do me.\"" },
                    "\"No way. You'll kick me.\"",
                    "I won't. I won't react.",
                    { note: "She doesn't. He tries for a full minute while she eats a lolly. Then they both look over at you." }
                  ],
                  after: "Georgie, to the gym chat: \"me 1:00 no reaction. {name} 18 seconds\" Corey: \"he went so red\" Georgie: \"yep\" Corey: \"kangaroo point saturday\" Georgie: \"yes\""
                }
              ]
            }
          ]
        },
        {
          you: "(Give in. You're giggling the second he touches you.)",
          them: [
            "One... oh. Okay. One second.",
            { note: "You're gone before she's finished saying it, giggling and squirming across the mat while he hangs on to your ankle." },
            "\"ONE SECOND,\" Corey says. \"Georgie! That's a record!\"",
            "It's the worst record.",
            { note: "He doesn't stop. He tucks your foot under his arm and goes at the sole. You're shrieking. The whole bouldering area has turned round." },
            "\"How do you even climb with feet like this?\""
          ],
          replies: [
            {
              you: "(Giggling) Please! Corey, please, stop!",
              them: [
                { note: "He stops right away and lets go. You lie there panting, chalk all down your shin." },
                "\"He said please,\" Corey says. \"Georgie, write that down.\"",
                "I'm not writing that down.",
                { note: "He picks your foot up again, not tickling, just holding it, and waves it at Georgie." },
                "\"One more round? He's the easiest one I've ever done.\""
              ],
              replies: [
                {
                  you: "(Pull it back.) No. I'm done. Done.", outcome: "begged", spark: 6,
                  them: [
                    "\"Fair enough, champ.\" He lets it go.",
                    { note: "You sit cross-legged with your feet under your knees for the rest of the night. Every time Corey moves you flinch. He notices and starts doing it on purpose." },
                    "Stop flinching. He's not going to.",
                    { note: "She lies back down on Corey's side of the mat. He's showing her a video of some route in Spain and her head's nearly on his shoulder." }
                  ],
                  after: "Georgie, to her housemate: \"he lasted one second\" \"one\" \"and then he begged\" Housemate: \"poor guy\" Georgie: \"yeah\" Georgie: \"also corey asked me to the blue mountains for a weekend\" Housemate: \"and\" Georgie: \"its a climbing trip\" Housemate: \"georgie\""
                },
                {
                  you: "(Still giggling) ...Fine. One more.", outcome: "kept", spark: 3, gaydar: 98,
                  them: [
                    "Starting the timer.",
                    { note: "He goes again. You don't last any time at all. Someone's filming from the top of the wall." },
                    "Thirty. Forty. Corey, he's not even trying to get away.",
                    "\"He likes it,\" Corey says, still going. \"Look at him.\"",
                    { note: "At a minute he lets go and holds his hand up for a high five. Georgie gives him one." },
                    "You asked for more. You actually asked.",
                    { note: "You lie on the mat giggling while the two of them pack up the lollies." }
                  ],
                  after: "Georgie, to the gym chat: \"he asked for a second round\" Corey: \"he loved it\" Gym regular: \"is this the lilac toes guy\" Georgie: \"yes\" Gym regular: \"he seems happy\" Georgie: \"yeah he does\""
                }
              ]
            },
            {
              you: "(Stop fighting. Lie back and let him.)",
              them: [
                { note: "You stop pulling and lie back with your arms out, laughing at the ceiling, toes wriggling in Corey's hand." },
                "\"He's given up,\" someone says. \"He's just lying there.\"",
                "Thirty seconds. Forty.",
                { note: "Corey takes his time. Heel, arch, between the toes. He hums. You're crying laughing." },
                "A minute. Corey, a minute.",
                { note: "Georgie's stopped laughing. She's watching your face, not the timer." },
                "{name}. You can say stop."
              ],
              replies: [
                {
                  you: "(Gasping) Stop! Stop. Okay. Stop.", outcome: "kept", spark: 2, gaydar: 98,
                  them: [
                    { note: "He stops as soon as you say it and lets go." },
                    "One forty-one.",
                    "\"Longest ever,\" Corey says. \"Most ticklish ever. Both.\"",
                    { note: "He gives your foot a little shake, like a handshake. Then he stands and puts a hand down for Georgie. \"One more problem before close?\"" },
                    { note: "She takes it. They do the purple one together. You lie on the mat with the lollies and watch." }
                  ],
                  after: "Georgie, to her housemate: \"1 minute 41\" \"he just let corey do it for 1 minute 41\" \"and the whole time i was like. this guy doesnt like girls\" Housemate: \"and corey\" Georgie: \"corey drove me home\""
                },
                {
                  you: "(Can't speak. Too busy laughing.)", outcome: "kept", spark: 0, gaydar: 99,
                  them: [
                    { note: "You can't get a word out. Corey keeps going." },
                    "Corey. Stop. Now.",
                    { note: "He stops straight away and lets go." },
                    "\"He didn't say stop.\"",
                    "He can't. He's purple. Two minutes ten.",
                    { note: "You're sprawled across two mats, chalk everywhere, still giggling. The girl from the wall has come down to look." },
                    { note: "Georgie puts her phone away. She looks at you for a while, then at Corey." },
                    "I'm heading off. You going my way?",
                    "\"Yeah. I'm going your way.\""
                  ],
                  after: "Georgie, to her housemate, from Corey's car: \"two minutes ten\" \"he didnt say stop once\" \"im not even mad\" \"im just over it\" Housemate: \"where are you\" Georgie: \"corey's car\""
                }
              ]
            }
          ]
        }
      ],
      debrief: "Some people are just ticklish. It doesn't mean anything about you. Georgie had made up her mind before the timer started."
    },
    {
      id: "georgie-end", route: "georgie", gaydar: 99, spark: 0, gaydarSays: "Ben abseils off skyscrapers for work. He's never worn a slip dress. I asked.", title: "Georgie and Ben", contact: "Georgie", irl: true,
      outfits: [
        { label: "Old gym gear. Pretend nothing happened.", gaydar: -2, intro: "Six weeks later, Tuesday night at the gym. Your oldest gym gear and no makeup, so nobody looks twice. Georgie's on the overhang wall. Belaying her is a guy you've never seen before: huge, bearded, a coil of rope over his shoulder. That's Ben." },
        { label: "Matching pastel gym set and lip oil", intro: "Six weeks later, Tuesday night at the gym. A matching lilac gym set, lip oil, hair clipped back. Georgie's on the overhang wall. Belaying her is a guy you've never seen before: huge, bearded, a coil of rope over his shoulder. That's Ben." },
        { label: "Matching gym set, a full face of 'no-makeup makeup' and a pink claw clip", gaydar: 1, intro: "Six weeks later, Tuesday night at the gym. A matching lilac gym set, no-makeup makeup that took forty minutes, and a pink claw clip. Georgie's on the overhang wall. Belaying her is a guy you've never seen before: huge, bearded, a coil of rope over his shoulder. That's Ben.", them: [{ note: "Ben looks at your claw clip and says \"nice clip\". He seems to mean it." }] }
      ],
      them: [
        { note: "Georgie lowers off and lands right next to you." },
        "Oh. Hi. This is Ben. Ben, {name}. We went out for a bit.",
        "\"Hey, man,\" Ben says. His voice is so low you feel it. \"Georgie says you're a good belayer.\"",
        "He does rope access. Abseils down buildings in the city. He's doing the Infinity tower on Monday.",
        "He carried both our packs up Mount Barney. You asked me to open your water bottle once. We were on a flat path.",
        { if: "georgie-tickle=held", text: "\"Corey told me about you,\" Ben says. \"The guy who beat his tickle thing. He still brings it up.\"" },
        { if: "georgie-tickle=cracked|begged|kept", text: "\"Oh, you're on Corey's list,\" Ben says. \"Bottom of it, right?\" He's being friendly about it." },
        { if: "georgie-tickle=cracked|begged|kept", note: "Georgie doesn't correct him. She says \"it's a dumb list\" and chalks up." }
      ],
      replies: [
        {
          you: "Hi Ben! Rope access, wow, brave. Georgie, he's lovely. I'm really happy for you.",
          them: [
            "Thanks.",
            "You look good. More relaxed. You never looked relaxed with me, even in the dress.",
            "Sorry. I'm just saying what I see."
          ],
          replies: [
            {
              you: "I am more relaxed. I'm working some stuff out. Slowly.",
              them: [
                "Good.",
                "Hurry up a bit though."
              ]
            },
            {
              you: "I'm the same as I was. Just more me.",
              them: [
                "Yeah.",
                "That's fine. It's just not for me."
              ]
            },
            {
              you: "Do you miss me? Even a bit?",
              them: [
                "No.",
                "I miss you belaying. That's not the same thing.",
                "Ben's taller than me. When he hugs me I can't see over his shoulder. I like that."
              ]
            }
          ]
        },
        {
          you: "(Go up to Ben.) Ben. Hi. Sorry. Can I talk to you? About Georgie.",
          them: [
            "\"Yeah, man,\" Ben says, and starts coiling his rope. He doesn't look up.",
            { note: "He's got chalk up to the elbows and a little scar through one eyebrow. You look at the scar for too long." },
            "\"Go on.\""
          ],
          replies: [
            {
              you: "I think I made a mistake with her. I want to try again. So. Um. I thought you should know.",
              them: [
                "\"Good luck with that,\" Ben says. Still coiling.",
                "\"Want me to spot you on the overhang after? Might help with the whole impressing her thing.\"",
                { note: "You say yes before you've thought about it. Ben smirks. Georgie heard all of it from the bench." },
                "{name}. You came over to get me back and now he's spotting you.",
                "No, by the way. Obviously no.",
                "Keep your hips in on the overhang. He'll tell you."
              ],
              after: "Georgie, to her housemate: \"{name} told ben he wants me back\" \"no\" \"yes. at the gym. then ben spotted him on the overhang\" \"NO\" \"is ben worried\" \"ben gave him tips\""
            },
            {
              you: "...Never mind. Your forearms are very... sorry. I'm going to go.", gaydar: 100,
              them: [
                { note: "Your face goes hot. You turn round too fast and kick the chalk bucket." },
                "\"Easy, tiger.\" Ben catches the bucket, then your elbow. He's laughing.",
                "You went over to fight him for me and you're bright red."
              ],
              after: "Georgie, to her housemate: \"{name} went over to say something to ben\" \"what\" \"no idea. he went red and kicked the chalk bucket\" \"NO\" \"ben thought it was cute\" \"is ben worried\" \"ben doesnt get worried\""
            }
          ]
        },
        {
          you: "(Wave, smile, and go to the other side of the gym for the rest of the night.)",
          them: [
            { note: "You climb on your own for an hour and fall off everything. At one point you look over and Ben's showing Georgie a heel hook and she's laughing, loud, with her head back." },
            { note: "On your way out she says \"see you Thursday\" like nothing's different. Ben says \"see you, man\" and holds out his fist. You bump it." }
          ]
        }
      ],
      after: "Georgie, to her housemate: \"{name} was at the gym. met ben\" \"and?\" \"he was nice about it. ben liked him\" \"is ben worried\" \"why would ben be worried\"",
      debrief: "Going over to win her back and going red at her new guy instead happens. It's fine to laugh about it later."
    },
    {
      id: "lucy-1", route: "lucy", gaydar: 15, gaydarSays: "Polo and chinos, totally normal. He did ask where my scrunchie was from. Maybe for a friend?", title: "Date one", contact: "Lucy",
      outfits: [
        { label: "The polo. Very normal.", gaydar: -5, intro: "Lucy's a nurse at the RBWH. You met at Kayla's housewarming and she wrote her number on a napkin. Date one: drinks at the Story Bridge Hotel. You wore a polo and chinos, the most normal outfit you own. She wore a black dress and a green velvet scrunchie." },
        { label: "The polo, but with your good cologne and a silver chain", intro: "Lucy's a nurse at the RBWH. You met at Kayla's housewarming and she wrote her number on a napkin. Date one: drinks at the Story Bridge Hotel. A polo, your good cologne and a thin silver chain you kept touching. She wore a black dress and a green velvet scrunchie." }
      ],
      them: [
        "hi! home safe 😊",
        "that was really nice. youre so easy to talk to",
        "most guys just talk about themselves for 2 hours",
        "also youre the first guy who has ever asked me where i got my scrunchie lol"
      ],
      replies: [
        {
          you: "It was a really good green! I had to know. Is that weird?",
          them: [
            "not weird!! cute",
            "its from a stall at the paddington markets. i'll take you",
            "date two? im on nights next week but the weekend after?"
          ],
          replies: [
            {
              you: "Yes. Weekend after. Markets.",
              them: [
                "deal 😊",
                "ok going to sleep, im on at 7. night!"
              ]
            },
            {
              you: "For sure. And I'm getting you another one. Burgundy. You'd suit burgundy.", gaydar: 20,
              them: [
                "burgundy 😭 ok",
                "paddington then. its a plan"
              ]
            }
          ]
        },
        {
          you: "Ha. I was nervous, so I just kept asking questions. But I had a really good time.",
          them: [
            "lol well it worked",
            "date two?",
            "my roster is chaos but i'll make it work"
          ],
          replies: [
            {
              you: "Make it work. I want to see you again.",
              them: [
                "😊 ok. weekend after next. i'll pick"
              ]
            },
            {
              you: "Yes. I'm free. I'm basically always free. That sounded sad, ignore that.",
              them: [
                "lol it did a bit",
                "its fine. last guy had a boat and never answered his phone",
                "ill send you my roster when it comes out"
              ]
            }
          ]
        },
        {
          you: "Most guys are boring. Low bar.",
          them: [
            "lol ok",
            "weekend after next? ill pick somewhere"
          ]
        }
      ],
      after: "Lucy, to Kayla: \"he's lovely. like really lovely\" Kayla: \"he looked very... polo\" Lucy: \"he asked where my scrunchie was from\" Kayla: \"lol why\" Lucy: \"idk he liked it\""
    },
    {
      id: "lucy-2", route: "lucy", gaydar: 40, gaydarSays: "Deep red nails at the markets. Better than mine. I held my hand next to his to check.", title: "Paddington markets", contact: "Lucy", irl: true,
      outfits: [
        { label: "A tee and jeans, nails painted a deep red", gaydar: -5, intro: "Date two. Paddington markets on a Saturday morning. A plain tee and jeans, but you painted your nails last night, a deep red. You meant to take it off this morning. You didn't. Lucy meets you at the gate with two coffees." },
        { label: "A linen shirt, deep red nails and a bit of tinted balm", intro: "Date two. Paddington markets on a Saturday morning. A cream linen shirt, a bit of tinted balm and your nails painted a deep red. Lucy meets you at the gate with two coffees." }
      ],
      them: [
        "Hi! I got you an oat flat white. I guessed. Is that okay?",
        { note: "She hands it over and looks at your fingers round the cup." },
        "Oh. Your nails are red. Were they red last time? I don't think they were. Or I wasn't paying attention?"
      ],
      replies: [
        {
          you: "They're new! The colour's called Bordeaux. I did them last night. Do you hate it?", gaydar: 45,
          them: [
            "Bordeaux.",
            "No! I don't hate it. It's nicer than mine, which is annoying.",
            { note: "She holds her hand up next to yours. Yours is neater. She laughs, a bit loud." },
            "Okay. Scrunchie stall? It's this way."
          ],
          replies: [
            {
              you: "Lead the way. I'm getting you the burgundy one. It'll match my nails.",
              them: [
                "Ha. Okay. Matching.",
                { note: "At the stall you pick the burgundy one for her and a black one for yourself. \"For the gym,\" you say. She says \"of course\" and pays for hers." }
              ],
              after: "Lucy, to Kayla: \"second date. red nails. he called the colour bordeaux\" Kayla: \"BORDEAUX??\" Lucy: \"and he bought himself a scrunchie. for the gym\" Kayla: \"lucy\" Lucy: \"i know\""
            },
            {
              you: "Sorry. I know it's a bit much. I'll take it off before next time.",
              them: [
                "No, don't. It's your nails. Do what you want.",
                "It just surprised me. Come on."
              ]
            }
          ]
        },
        {
          you: "They weren't red, you were paying attention. I just felt like it this week. Nobody's ever noticed my nails before.",
          them: [
            "I'm a nurse. I look at hands all day.",
            "They suit you. Kind of annoyingly.",
            { note: "She takes your hand to get through the crowd. Lets go. Takes it again." }
          ],
          replies: [
            {
              you: "Annoyingly? Why annoyingly?",
              them: [
                "Because mine are wrecked from hand sanitiser and you look like you just walked out of a salon.",
                "Anyway. Scrunchies."
              ]
            },
            {
              you: "(Squeeze her hand.)",
              them: [
                { note: "She squeezes back. She's looking down at your nails while she does it." }
              ]
            }
          ]
        },
        {
          you: "It's just nail polish. Loads of guys wear it now.",
          them: [
            "Do they? Name one.",
            { note: "You can't think of one who isn't in a band." },
            "Okay. It looks nice. I'm not saying it doesn't. The stall's this way."
          ]
        }
      ],
      after: "Lucy, to Kayla: \"second date. he had red nails\" Kayla: \"red??\" Lucy: \"like a deep red. they were really neat\" Kayla: \"lucy\" Lucy: \"i know\""
    },
    {
      id: "c6e", route: "lucy", gaydar: 90, gaydarSays: "He gets gayer every time I see him. I'm not being mean. Kayla agrees with me.", title: "Getting gayer", contact: "Lucy",
      outfits: [
        { label: "Cropped knit, a bit of mascara and blush", gaydar: -5, intro: "You've been seeing Lucy for three weeks. Date one you wore a polo. Date two your nails were done. Date three, little silver hoops and some gloss. Today, coffee in Teneriffe: a cropped knit, a bit of mascara and blush. Her friend Kayla happened to be at the next table. Lucy kept looking over at her." },
        { label: "Cropped knit, lashes and blush" },
        { label: "Cropped knit, lashes, blush, gloss and a mini skirt", gaydar: 5, intro: "You've been seeing Lucy for three weeks. Date one you wore a polo. Date two your nails were done. Date three, little silver hoops and some gloss. Today, coffee in Teneriffe: a cropped knit, lashes, blush, gloss and a mini skirt. Her friend Kayla happened to be at the next table and nearly dropped her latte. Lucy kept looking over at her.", them: ["also a SKIRT. to coffee. with me"] }
      ],
      intro: "You've been seeing Lucy for three weeks. Date one you wore a polo. Date two your nails were done. Date three, little silver hoops and some gloss. Today, coffee in Teneriffe: a cropped knit, lashes and blush. Her friend Kayla happened to be at the next table. Lucy kept looking over at her.",
      them: [
        "hey so",
        "dont take this the wrong way",
        "but you get gayer every single time i see you lol"
      ],
      replies: [
        {
          you: "Is that a bad thing?",
          them: [
            "idk",
            "its just a lot in three weeks",
            "first date you were like a normal guy. today your lashes were better than mine"
          ],
          replies: [
            {
              you: "I'm just wearing what I like now.",
              them: [
                "yeah i can see that",
                "kayla texted me under the table",
                "\"is he gay or just really into fashion\"",
                "and i didnt know what to say back"
              ],
              replies: [
                {
                  you: "What did you say?",
                  them: [
                    "i said i dont know",
                    "which is embarrassing when im the one going out with you",
                    "so. are you?"
                  ],
                  replies: [
                    {
                      you: "Yeah. I think I am.", gaydar: 100,
                      them: [
                        "ok",
                        "i kind of knew by the hoops tbh",
                        "after that it didnt really feel like dates. more like brunch with a girlfriend",
                        "the girls are going to be so annoying about this"
                      ]
                    },
                    {
                      you: "I don't know yet.",
                      them: [
                        "ok",
                        "can you work it out before date five",
                        "bc im not doing another coffee with kayla watching",
                        "and honestly even if youre straight. idk",
                        "i dont really want to kiss you anymore. sorry. thats awful"
                      ]
                    }
                  ]
                },
                {
                  you: "Kayla could've just asked me.",
                  them: [
                    "oh she wanted to. i wouldnt let her",
                    "she asked me three times in the car park"
                  ]
                }
              ]
            },
            {
              you: "Normal guy?",
              them: [
                "you know what i mean",
                "like straight looking",
                "ok that came out bad",
                "date one i was like ok he's a boy. today i was half waiting for you to ask if you could borrow my lip oil"
              ]
            }
          ]
        },
        {
          you: "Gayer every time? Babe. It's called a glow up.",
          them: [
            "see. babe",
            "you never said babe on date one",
            "kayla said youre the prettiest girl ive ever dated",
            "shes joking. mostly"
          ],
          replies: [
            {
              you: "Kayla's not wrong about the lashes.",
              them: [
                "lol",
                "ok can i just ask",
                "are you gay"
              ],
              replies: [
                {
                  you: "Yeah. I am.", gaydar: 100,
                  them: [
                    "ok",
                    "thanks for actually saying it",
                    "im not mad. its just not really what im after",
                    "kayla thinks youre hot btw. which is weird. anyway"
                  ]
                },
                {
                  you: "Not answering that before my second coffee.",
                  them: [
                    "its 2pm",
                    "ok whenever",
                    "but im not doing date five either way"
                  ]
                }
              ]
            },
            {
              you: "Kayla's a hater and her lashes are clusters.",
              them: [
                "LOL",
                "im screenshotting that for her",
                "ok thats the gayest thing youve ever said",
                "and you said my car was giving last week so"
              ]
            }
          ]
        },
        {
          you: "Gayer how?",
          them: [
            "um",
            "the nails. the earrings. the lip stuff",
            "today you asked the barista where she gets her eyeliner done",
            "and you were way more into her answer than anything i said"
          ],
          replies: [
            {
              you: "That's not fair.",
              them: [
                "isnt it",
                "i asked about your weekend and you said good",
                "you talked to her about eyeliner for five minutes"
              ]
            },
            {
              you: "Okay. That's fair.",
              them: [
                "yeah",
                "can i just ask you straight",
                "are you gay"
              ],
              replies: [
                {
                  you: "Yeah.", gaydar: 100,
                  them: [
                    "ok",
                    "at least you said it",
                    "kind of wish it wasnt three weeks in but ok"
                  ]
                },
                {
                  you: "Why does it matter?",
                  them: [
                    "because were dating??",
                    "or i thought we were"
                  ]
                }
              ]
            }
          ]
        },
        {
          you: "Your friends have been talking about me, haven't they.",
          them: [
            "...a bit",
            "ok a lot",
            "hang on"
          ],
          replies: [
            {
              you: "Show me.",
              them: [
                "ok dont be mad",
                "[screenshot] Kayla: ok i saw him. lucy hes gay",
                "[screenshot] Ruby: the earrings or the lashes",
                "[screenshot] Kayla: BOTH. and he complimented the barista's nails",
                "[screenshot] Ruby: just ask him",
                "[screenshot] Lucy: i cant just ASK him",
                "so. im asking"
              ],
              replies: [
                {
                  you: "Tell Ruby yes.", gaydar: 100,
                  them: [
                    "omg",
                    "ok",
                    "honestly kind of relieved. i thought i was doing something wrong",
                    "dont tell kayla i said that"
                  ]
                },
                {
                  you: "I'm not answering a group chat.",
                  them: [
                    "fair",
                    "im not asking for them though",
                    "im asking for me"
                  ],
                  replies: [
                    {
                      you: "Yeah. I am.", gaydar: 100,
                      them: [
                        "ok",
                        "thanks"
                      ]
                    },
                    {
                      you: "Can I tell you in person?",
                      them: [
                        "yeah ok",
                        "not with kayla there"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              you: "I don't want to know.",
              them: [
                "ok fair",
                "they just keep asking me if youre gay and i never know what to say"
              ]
            }
          ]
        }
      ],
      after: "Lucy's group chat that night. Kayla: \"so??\" Lucy: \"dont\" Ruby: \"thats a yes then\" Lucy: \"im not saying anything\" Kayla: \"thats DEFINITELY a yes\" Kayla: \"ask him what mascara he uses\"",
      debrief: "Changing how you look bit by bit is one way of coming out. People notice and they talk. You still get to say it when you're ready."
    },
    {
      id: "lucy-feet", route: "lucy", gaydar: 92, gaydarSays: "Red toes at the low table. Fraser drove me home after. Kayla says that's not nothing.", title: "Low tables", contact: "Lucy", irl: true,
      intro: "Kayla's birthday dinner at a Japanese place in Sunnybank. The private room has tatami mats, low tables and a sign at the step: please remove your shoes. You're in loafers with no socks, and you painted your toes red on Tuesday because Lucy said red would suit you. Fraser's here too. He's a paramedic on the same nights as Lucy, and in the car Kayla told you he's been in love with her for about a year.",
      them: [
        { note: "Everyone lines their shoes up at the step. You slip your loafers off. Red toes, bright light." },
        "Oh! You did them! They look so good.",
        { note: "Fraser sits down cross-legged right next to Lucy. Big guy, grey hoodie, thick work socks. He looks at your feet." },
        "\"Red,\" he says, and grins at Lucy. \"Bold, man.\"",
        { note: "There's nowhere to put your feet. Under the low table they end up next to his knee." },
        "Fraser's a paramedic. Don't let him tell you his worst callout. He'll do it while the gyoza's on the table.",
        "\"Wasn't going to,\" Fraser says, leaning back on his hands, closer to her. \"I was going to tell him about the nurse who gave me a Mars bar at 3am and saved my life.\" Lucy goes pink."
      ],
      replies: [
        {
          you: "(Kneel and tuck your feet under you.)",
          them: [
            { note: "You sit on your feet. Ten minutes in you can't feel them." },
            { note: "Fraser pours Lucy's sake, then everyone else's, then yours. He says \"say when\" and you say \"when\" and your voice goes up on it. \"Easy, lightweight,\" he says." },
            "Kayla, across the table: \"{name} sits like my ballet teacher.\"",
            "He does! Sorry. He does.",
            { note: "She's laughing. Then she turns back to Fraser for the Mars bar story." }
          ]
        },
        {
          you: "It's called Big Apple Red. Lucy picked it.", gaydar: 96,
          them: [
            "Kayla: \"LUCY picked it?\"",
            "I said red would suit him. And it does.",
            "\"Did you paint them for him?\" Fraser asks her.",
            "No! He does his own. He's better at it than me.",
            { note: "Fraser laughs, says \"course he is\" and takes a gyoza off her plate. She slaps his hand. Then she lets him have it." }
          ]
        },
        {
          you: "Bold's kind of my thing.",
          them: [
            "\"Yeah, I can see that,\" Fraser says, looking right at your toes, and laughs.",
            { note: "When the karaage comes he gives Lucy the biggest piece. Then he puts a little crumbly one on your plate, like you'd serve a kid." },
            "Ruby, quietly, next to you: \"You know he's been after her for a year, yeah?\"",
            "\"Kayla mentioned,\" you say."
          ]
        },
        {
          you: "(To Fraser) Thick work socks at a birthday dinner. Also bold.",
          them: [
            "\"Ha. Fair,\" Fraser says, and wiggles one sock at you. Lucy laughs harder at that than at anything you've said all night.",
            "Fraser, your feet have done a twelve-hour shift. His smell like hand cream.",
            { note: "She shifts her cushion a bit closer to the socks." },
            "\"Hand cream,\" Fraser says. \"Course they do.\""
          ]
        }
      ],
      after: "Kayla, in the group chat after: \"{name} sat through dinner with red toes and fraser did not stop grinning\" Ruby: \"fraser drove lucy home\" Kayla: \"FRASER DROVE LUCY HOME?\" Lucy: \"he lives near me. its nothing\" Ruby: \"its not nothing\"",
      debrief: "Being on show when you didn't plan it is hard, especially next to a guy that sure of himself. You stayed at the table."
    },
    {
      id: "lucy-tickle", route: "lucy", gaydar: 94, irl: true, title: "After night shift", contact: "Lucy", gaydarSays: "Fraser said he was checking his reflexes. I'm a nurse. That's not how you check reflexes. Everyone at the table knew that.",
      intro: "A week after Kayla's birthday. Lucy's off a run of nights, and her share house in Annerley does a big breakfast when someone finishes. Shoes off at the door because the floorboards are new. You came in sandals. Your toes are still Big Apple Red. Fraser's already here, because he finished the same shift. He's on the couch in his uniform pants and a hoodie, barefoot.",
      them: [
        { note: "Lucy hugs you at the door, still in scrubs, half asleep. She looks down at your toes." },
        "You kept the red!",
        "\"Big Apple Red,\" Fraser says from the couch. \"See, I remembered.\"",
        "Fraser, don't start. He's been up nineteen hours. He goes silly.",
        { note: "Breakfast is on the coffee table. The only spot left is the end of the couch next to Fraser. You sit there with your plate. Lucy sits on the floor between his feet and leans back against his legs. She looks like she's done it before." },
        { note: "You put your feet up on the ottoman. Fraser looks at them. Then he puts his coffee down." },
        "\"Hey, Luce. Want to see a reflex? Plantar reflex.\"",
        "I've seen a plantar reflex, Fraser. I'm a nurse.",
        "\"Not on him you haven't.\"",
        { note: "He's already got your foot. He holds it by the heel and runs one finger slowly up the outside of your sole, heel to toes, the way they do it at the hospital." },
        "\"Toes should curl down,\" he says. \"Normal response. Let's see.\"",
        { note: "Then the finger goes back down the middle, faster, and it's not the hospital way anymore." }
      ],
      replies: [
        {
          you: "(Keep your face still. You're a grown man eating eggs.)",
          them: [
            { note: "You hold your fork in the air and look at your eggs. Your toes curl so hard they go white." },
            "\"Toes curling. Normal response,\" Fraser says. \"Better check again.\"",
            "That's not a reflex anymore. That's just tickling.",
            "\"Noted.\"",
            { note: "Two of Lucy's housemates come out of the kitchen with toast. One of them says \"oh, is Fraser doing the feet thing?\"" },
            { note: "He gets the gap under your toes with his thumbnail. Your fork shakes. Some egg falls off it." }
          ],
          replies: [
            {
              you: "(Don't break. Eat your eggs.)",
              them: [
                { note: "You put the egg in your mouth and chew. He tries the arch, then the heel, then your little toe. You keep chewing." },
                { note: "After a long time he puts your foot down and picks up his coffee." },
                "\"Nothing. Abnormal response. Luce, he can't feel his feet.\"",
                "He can feel them fine. He's just better at hiding it than you.",
                { note: "She looks up at you from the floor, smiling." }
              ],
              replies: [
                {
                  you: "(Put your feet down on the floor next to Lucy.) Thanks for breakfast, Luce.", outcome: "held", spark: 24,
                  them: [
                    { note: "You put your feet on the floorboards right next to her. She leans off Fraser's legs and onto yours." },
                    "You're welcome. Sorry about him. He's not usually like this. No, he is.",
                    "\"I'm going to bed,\" Fraser says, a bit flat, and takes his coffee with him.",
                    { note: "Lucy stays leaning on your legs while the housemates clear up. She falls asleep there for twenty minutes. You don't move." }
                  ],
                  after: "Lucy, to Kayla: \"fraser tried to tickle him and he didnt even flinch\" Kayla: \"wow\" Lucy: \"he just ate his eggs\" Kayla: \"and you\" Lucy: \"fell asleep on him\" Kayla: \"LUCY\" Lucy: \"on his legs. it was nice\""
                },
                {
                  you: "(Smile.) You can try the other one if you want.", outcome: "held", spark: 16,
                  them: [
                    "\"Oh, brave,\" Fraser says, and grabs it.",
                    { note: "No reflex stuff this time. Both thumbs, straight under the toes. One small high giggle gets out. You put your hand over your mouth." },
                    "\"There it is. Normal response, finally.\"",
                    { note: "He lets go. The housemates clap. Lucy laughs up at Fraser and he messes her hair up, and she lets him." },
                    "Okay. Both of you. Eat.",
                    { note: "She stays leaning on Fraser's legs." }
                  ],
                  after: "Lucy, to Kayla: \"he lasted ages and then giggled once\" Kayla: \"cute\" Lucy: \"fraser messed my hair up\" Kayla: \"cute??\" Lucy: \"i dont know kayla im so tired\""
                }
              ]
            },
            {
              you: "(It's too much. You giggle.)",
              them: [
                { note: "You crack. Egg everywhere. A high giggle comes out, then another, and you're doubled over with your plate tipping." },
                "\"Abnormal response!\" Fraser says. \"Luce, look! Very abnormal!\"",
                { note: "Lucy grabs your plate before it goes. She's laughing so hard she's crying, the overtired kind." },
                "\"Someone film this, he sounds like a squeaky toy.\"",
                { note: "One of the housemates films it." }
              ],
              replies: [
                {
                  you: "(Giggling) Okay! Okay, I'm ticklish! You got me!", outcome: "cracked", spark: 10,
                  them: [
                    { note: "He lets go straight away and sits back with his coffee." },
                    "\"Fourteen years on the road. Nobody beats the plantar reflex.\"",
                    "That's not what it's for, Fraser.",
                    { note: "You sit up, red, picking egg off your shorts. You try to say something and it comes out as another giggle. Fraser points at you without looking." },
                    { note: "Lucy goes to make more coffee. Fraser goes to help. You can hear them laughing in the kitchen." }
                  ],
                  after: "Lucy's housemate, to the house chat: \"[video] the squeaky toy\" Lucy: \"please delete\" Housemate: \"fraser asked for it\" Lucy: \"why does fraser want it\" Housemate: \"to show the station\" Lucy: \"oh no\""
                },
                {
                  you: "(Red, giggling) Fraser! Stop! Stop it!", outcome: "cracked", spark: 8,
                  them: [
                    { note: "He stops the moment you say it and lets go." },
                    "\"Okay, okay. Sorry, man.\"",
                    { note: "You tuck your feet under you and sit on them. Your face is burning. There's egg on the couch." },
                    "Are you okay? You went really high.",
                    { note: "It's the voice she uses on patients. Then Fraser says \"he hit a note I didn't know men could hit\" and she snorts and can't stop, and ends up with her face in his knee." }
                  ],
                  after: "Lucy, to Kayla: \"fraser tickled him and he squealed\" Kayla: \"lol\" Lucy: \"and then i laughed into fraser's knee for like five minutes\" Kayla: \"lucy\" Lucy: \"i know\""
                }
              ]
            }
          ]
        },
        {
          you: "(Give in. You're giggling before the second stroke.)",
          them: [
            { note: "You're gone straight away, high squeaky giggles. You put your plate down before you drop it and hug a cushion." },
            "\"Oh, that's VERY abnormal,\" Fraser says. \"Luce, look at him.\"",
            "I'm looking.",
            { note: "He tucks your foot under his arm like he's holding a leg for a splint and goes at it with his whole hand. You're shrieking into the cushion." },
            "\"Red toes and the most ticklish feet in Brisbane. Luce, write him up.\"",
            { note: "The housemates have come out to watch. One's eating toast like it's TV." }
          ],
          replies: [
            {
              you: "(Giggling) Fraser! Please, please stop!",
              them: [
                { note: "He stops and lets go straight away. You fold over the cushion, panting." },
                "\"He said please,\" Fraser says. \"Very polite patient.\"",
                "He is very polite.",
                { note: "Fraser holds your foot up again, not tickling, just holding it, and looks at you over it." },
                "\"One more? Ten seconds. For research.\""
              ],
              replies: [
                {
                  you: "(Pull your foot back.) No! No more research.", outcome: "begged", spark: 6,
                  them: [
                    "\"Fair enough, sweetheart. Patient declines.\" He lets go.",
                    { note: "You eat the rest of breakfast with your feet pulled right up under you, as far from Fraser as the couch goes." },
                    { note: "Lucy stays on the floor against his legs. At some point he starts playing with her hair while he talks to her housemates, and she closes her eyes." },
                    "You're fine. You sounded exactly like my little sister when we were kids. Same scream.",
                    { note: "She says it with her eyes shut." }
                  ],
                  after: "Lucy, to Kayla: \"he begged fraser to stop\" Kayla: \"aw\" Lucy: \"in this tiny voice\" Lucy: \"fraser played with my hair for an hour after\" Kayla: \"and you let him\" Lucy: \"i was so tired\" Kayla: \"lucy\""
                },
                {
                  you: "(Still giggling) ...Okay. Ten seconds.", outcome: "kept", spark: 3, gaydar: 96,
                  them: [
                    { note: "The housemates cheer. Fraser counts down from ten like he's doing compressions. You're squealing from ten." },
                    { note: "At one he keeps going for another five. Then he lets go." },
                    "\"Results: extremely ticklish. Asked for more.\"",
                    "You asked for more. {name}. You actually asked.",
                    { note: "She gets up to take the plates. Fraser gets up to help. In the kitchen he says something and she laughs and bumps him with her hip." },
                    { note: "You lie on the couch, still giggling, toes in the air." }
                  ],
                  after: "Lucy's housemate, to the house chat: \"[video] he asked for more\" Lucy: \"im going to sleep for 14 hours\" Housemate: \"fraser's still here\" Lucy: \"he's doing the dishes\" Housemate: \"its been an hour\""
                }
              ]
            },
            {
              you: "(Stop fighting. Just laugh.)",
              them: [
                { note: "You stop pulling and lie back across the couch laughing at the ceiling, cushion on your chest, toes wriggling in Fraser's hand." },
                "\"He's not even trying to get away,\" a housemate says, mouth full of toast.",
                "\"He loves it,\" Fraser says. \"Look at him, Luce.\"",
                { note: "It goes on and on. Arch, heel, then each toe one at a time like he's checking circulation. You're crying laughing." },
                { note: "Lucy's stopped laughing. She's sitting up on the floor, watching you." },
                "{name}? You can say stop. You know that, right?"
              ],
              replies: [
                {
                  you: "(Gasping) Stop! Stop. Okay. Stop.", outcome: "kept", spark: 2, gaydar: 97,
                  them: [
                    { note: "He stops the moment you say it and lets go." },
                    "\"Two and a half minutes,\" Fraser says, checking his watch.",
                    { note: "He puts your foot back down on the ottoman, carefully, like he's returning it. \"Great patient.\"" },
                    { note: "You lie there, wrecked, while Fraser stands up and stretches. \"Luce, want a lift to Kayla's later?\"" },
                    "Yeah. Yeah, okay.",
                    { note: "She doesn't ask if you want to come." }
                  ],
                  after: "Lucy, to Kayla: \"fraser tickled him for two and a half minutes\" \"and he was loving it\" \"like i was watching and i was just like. yeah no\" Kayla: \"and fraser\" Lucy: \"fraser's driving me to yours\""
                },
                {
                  you: "(Can't speak. Too busy laughing.)", outcome: "kept", spark: 0, gaydar: 98,
                  them: [
                    { note: "You can't get a word out. Fraser keeps going." },
                    "Fraser. Stop. He can't breathe.",
                    { note: "It's her work voice. He stops straight away and lets go." },
                    "\"He didn't say stop.\"",
                    "He couldn't. Look at him.",
                    { note: "You've slid half off the couch onto the new floorboards, still giggling. A housemate is filming from the kitchen door." },
                    { note: "Lucy looks at you for a while. Then up at Fraser." },
                    "I'm going to bed. Fraser, can you see him out? Thanks for coming, {name}.",
                    { note: "Fraser walks you to the door. \"See you round, sweetheart,\" he says, and squeezes your shoulder. Then he goes back inside." }
                  ],
                  after: "Lucy, to Kayla, at 4pm when she wakes up: \"fraser's still here\" Kayla: \"WHAT\" Lucy: \"fell asleep on the couch\" Lucy: \"im not even upset about {name}. i watched him giggling on my floor and i was just done\" Kayla: \"and fraser\" Lucy: \"he made me toast\""
                }
              ]
            }
          ]
        }
      ],
      debrief: "Laughing that hard doesn't give anything away. It's just how your feet are. Lucy was going to work things out either way."
    },
    {
      id: "lucy-end", route: "lucy", gaydar: 99, spark: 0, gaydarSays: "Hamish fixed my car door with a coat hanger in the rain. I didn't even ask him to.", title: "Lucy and Hamish", contact: "Lucy", irl: true,
      outfits: [
        { label: "Jeans and a black tee", gaydar: -2, intro: "Two months later. Kayla's engagement drinks at Cloudland. Jeans and a black tee, and a plan to leave early. Then Lucy walks in with a guy in brown boots and a blue checked shirt tucked into his jeans. Ag consultant, from Toowoomba. Hamish." },
        { label: "Your going-out look: a mesh top, lashes and a little bag", intro: "Two months later. Kayla's engagement drinks at Cloudland. A black mesh top, lashes, gloss, your little shoulder bag. Then Lucy walks in with a guy in brown boots and a blue checked shirt tucked into his jeans. Ag consultant, from Toowoomba. Hamish." }
      ],
      them: [
        { note: "Lucy comes straight over and hugs you, quick, and kisses you on the cheek. It's how she says hi to Kayla." },
        "{name}! You look so good. Kayla said you might come. This is Hamish. Hamish, {name}. We went on a few dates. Before you.",
        "\"Hey,\" Hamish says, and shakes your hand hard. \"Lucy says you've got good taste. She said you'd tell me if my shirt's alright.\"",
        "He grew up on a cattle station. He's got three pairs of boots and they're all the same boot.",
        "My car door wouldn't shut on our second date and he fixed it with a coat hanger. In the rain. I didn't even ask.",
        { if: "lucy-tickle=held", text: "Fraser still talks about you, by the way. The one with no plantar reflex. He thinks it's a medical thing." },
        { if: "lucy-tickle=cracked|begged|kept", text: "\"Oh, hey,\" Hamish says. \"Fraser showed me a video of you. At breakfast. The feet one.\" He grins. \"You've got some laugh on you.\"" },
        { if: "lucy-tickle=cracked|begged|kept", note: "Lucy goes pink and says \"Hamish\" in her work voice. He keeps grinning." }
      ],
      replies: [
        {
          you: "Hamish. The shirt's fine. The tuck is very... rural. Lucy, he's adorable.",
          them: [
            "The tuck is very rural 😂 I'm saying that to him every day now.",
            "Thanks. I really am happy.",
            "You look so much more relaxed than at the Story Bridge. You were so stiff in that polo."
          ],
          replies: [
            {
              you: "I feel more like me. Mostly. Still working stuff out.",
              them: [
                "Kayla wants to set you up with her hairdresser, by the way.",
                "I said I'd ask. So I'm asking. He's really nice. He did her fringe."
              ]
            },
            {
              you: "That polo was a costume. Never again.",
              them: [
                "Promise me.",
                "Hamish, quietly, to Lucy: \"What's wrong with polos?\" She rubs his arm."
              ]
            }
          ]
        },
        {
          you: "(Go up to Hamish.) Hamish? Hi. Sorry. Can I say something? About Lucy?",
          them: [
            "\"Course, man,\" Hamish says, and puts a big hand on your shoulder to move you out of a waiter's way.",
            { note: "He leaves it there. You can feel how warm it is through your top. Your mind goes blank." },
            "\"What's up?\""
          ],
          replies: [
            {
              you: "I still like her. I want her back. I think. Sorry. You seem really nice.",
              them: [
                "\"You?\" Hamish laughs, a big loud one. \"Fighting me for her? Buddy. No.\"",
                "\"Tell you what. I'll get you a drink. Something pink, yeah?\"",
                { note: "He goes to the bar, still laughing." },
                { note: "Lucy's come over. She heard." },
                "Did you just tell Hamish you want me back?",
                "Oh my god. In that little voice.",
                "{name}. I kiss you on the cheek like I kiss Kayla. That's where we're at. It's not happening.",
                { note: "Hamish comes back with something pink with a little straw in it and gives you a thumbs up over her shoulder." }
              ],
              after: "Kayla, in the group chat: \"update {name} went up to hamish to win lucy back\" Ruby: \"NO\" Kayla: \"hamish bought him something pink\" Lucy: \"he was so sweet about it\" Kayla: \"lucy thats not the point\" Lucy: \"hamish says he's a good guy\""
            },
            {
              you: "...Never mind. Your shirt's really nice. Is that brushed cotton?", gaydar: 100,
              them: [
                "\"No idea,\" he says. \"Lucy bought it. You going to keep feeling it, or are we done?\"",
                { note: "You're still holding his sleeve. You let go and walk back to Kayla's table very fast, red to the ears." },
                { note: "Kayla gets her phone out without a word and shows you a photo of her hairdresser." }
              ],
              after: "Kayla, in the group chat: \"update {name} went up to hamish to win lucy back and ended up feeling his sleeve\" Ruby: \"NO\" Lucy: \"he was so red\" Kayla: \"im sending him my hairdresser's number\" Lucy: \"pls do\""
            }
          ]
        },
        {
          you: "He's very... tall. Isn't he.",
          them: [
            "Six four. I have to stand on the step to kiss him.",
            "I wore flats to the Story Bridge so I wouldn't be taller than you. Did you know that?",
            { note: "She laughs about it." },
            "\"What are we talking about?\" Hamish says.",
            "Nothing. {name}'s just saying you're tall."
          ]
        },
        {
          you: "Hi Hamish. Nice to meet you. Excuse me, I need to find Kayla.",
          them: [
            "\"Nice to meet you, man!\"",
            "Lucy, quietly, as you go: \"Hey. Thanks for being nice about this.\"",
            { note: "You find Kayla. She's already got her phone out." }
          ]
        }
      ],
      after: "Kayla, in the group chat: \"{name} came!!\" Ruby: \"and hamish?\" Kayla: \"hamish loved him\" Lucy: \"he said {name} was a good guy\"",
      debrief: "She's with someone completely different now. That's not about you. You were both after something else."
    },
    {
      id: "jade-1", route: "jade", gaydar: 15, gaydarSays: "He ordered a dirty martini and asked the bartender to make it pretty. Fun guy?", title: "Howard Smith Wharves", contact: "Jade",
      outfits: [
        { label: "Board shorts, a tee and flip-flops", gaydar: -5, intro: "Jade from Hinge, with a very funny bio. First date: drinks at Howard Smith Wharves on a Friday afternoon. You wore board shorts, a tee and your old flip-flops. She wore a white sundress, looked down at your feet once and said \"flip-flops to a date, very Queensland\"." },
        { label: "Linen shorts, a nice shirt and your good slides", intro: "Jade from Hinge, with a very funny bio. First date: drinks at Howard Smith Wharves on a Friday afternoon. Linen shorts, a nice short-sleeve shirt and your good slides. You had a pedicure on Tuesday, nothing on them, just buffed. Jade looked down at your feet once and didn't say anything." }
      ],
      them: [
        "hey!! that was so fun",
        "ok ive never seen a guy order a dirty martini extra dirty, three olives, and can you make it pretty",
        "the bartender LOVED you lol",
        "second date? somewhere outside, its too nice to be inside"
      ],
      replies: [
        {
          you: "Ha, I like a drink that looks good. Yes! What were you thinking?",
          them: [
            "picnic? new farm park? ill bring cheese and you bring drinks. make them pretty",
            "saturday afternoon?"
          ],
          replies: [
            {
              you: "Picnic! I'll bring my good blanket. It's got little lemons on it.", gaydar: 20,
              them: [
                "little lemons 😭",
                "ok perfect. saturday 3. its going to be hot so wear something cool"
              ]
            },
            {
              you: "Saturday works. Spritz okay?",
              them: [
                "spritz is perfect 😊"
              ]
            }
          ]
        },
        {
          you: "The bartender was cute. I mean nice. He was nice. Yes to a second date.", gaydar: 20,
          them: [
            "lol he was cute",
            "ok picnic. new farm park. saturday",
            "its going to be 33 so dress for it"
          ]
        },
        {
          you: "Your bio said must love a picnic. I read it.",
          them: [
            "you read the bio??",
            "nobody reads the bio",
            "ok picnic then. new farm park saturday. bring the pretty drinks"
          ]
        }
      ],
      after: "Jade, to her friend Mel: \"date was fun!! he got the bartender to make his martini pretty\" Mel: \"pretty??\" Jade: \"pretty\" Mel: \"ok\""
    },
    {
      id: "jade-2", route: "jade", gaydar: 45, gaydarSays: "Clear polish on his toes. For the health of the nail, apparently. Sure.", title: "Second picnic", contact: "Jade", irl: true,
      outfits: [
        { label: "Shorts, a tee and slides, just a clear coat on your toes", gaydar: -5, intro: "Second date. A smaller picnic, just the two of you, at Kangaroo Point cliffs. Shorts, a tee, slides, and a clear coat on your toenails that you told yourself nobody would notice. Jade brought a cheese board and a little speaker. She kicks her sandals off straight away. You keep yours on." },
        { label: "Shorts, a nice shirt and slides, toes with a clear gloss coat", intro: "Second date. A smaller picnic, just the two of you, at Kangaroo Point cliffs. Shorts, a nice shirt, slides, and a clear gloss coat on your toenails that you did last night, very carefully, with your tongue out. Jade brought a cheese board. She kicks her sandals off straight away." }
      ],
      them: [
        "Okay, I got brie, I got quince, I got the little crackers. Sit sit sit.",
        { note: "She glances down at your slides." },
        "Wait. Are your toenails shiny? Are they... are they painted?"
      ],
      replies: [
        {
          you: "It's just a clear coat! For the health of the nail. My nail lady says it strengthens them.",
          them: [
            "Your nail lady.",
            "You have a nail lady?",
            { note: "She looks at your toes, then at hers, chipped coral from two weeks ago, then back at yours." },
            "Okay. Mine look terrible next to yours. Don't look at them."
          ],
          replies: [
            {
              you: "Yours are cute! But you need a fresh coat. I'll book you in with my lady. She's in the Valley.", gaydar: 50,
              them: [
                "You're booking me a pedicure. On our second date.",
                "That's so nice? And so weird?",
                { note: "She laughs. Then she tucks her feet under her dress." }
              ],
              after: "Jade, to Mel: \"he has a nail lady\" Mel: \"what\" Jade: \"for his TOES. he tried to book me in\" Mel: \"jade\" Jade: \"dont\""
            },
            {
              you: "I won't look. Promise. Brie?",
              them: [
                "\"Brie,\" she says, and passes it over. \"You're a weird guy. I like it. I think.\""
              ]
            }
          ]
        },
        {
          you: "Yeah, they're painted. Clear. I like how it looks. I might do a colour next time. Maybe coral.", gaydar: 55,
          them: [
            "Coral. Like mine.",
            { note: "She wiggles her toes. Then stops." },
            "Yeah, you'd suit coral. You've got nice feet. That's a weird thing to say to a guy."
          ],
          replies: [
            {
              you: "Thanks! I moisturise them every night. Shea butter, then socks.", gaydar: 55,
              them: [
                "Socks? To bed?",
                "I don't do anything to mine. I just let them suffer.",
                { note: "She hands you a cracker. She's smiling, but she's quieter for the rest of the afternoon." }
              ],
              after: "Jade, to Mel: \"he puts shea butter on his feet and wears socks to bed\" Mel: \"what\" Jade: \"and he wants to do coral next\" Mel: \"like yours?\" Jade: \"like mine\""
            },
            {
              you: "Nobody's ever said that to me. I'll take it.",
              them: [
                "Take it.",
                "It's a weird compliment. But take it."
              ]
            }
          ]
        },
        {
          you: "They're not painted. That's just how my nails are.",
          them: [
            "{name}. They're shinier than my phone screen.",
            { note: "She taps one of your toes with a cracker." },
            "I don't care. I just want to know if I'm going out with a guy who has nicer feet than me.",
            { note: "She looks at her chipped coral, then at yours." },
            "I am, aren't I."
          ]
        }
      ],
      after: "Jade, to Mel: \"his toenails are painted\" Mel: \"what colour\" Jade: \"clear\" Mel: \"ok thats fine\" Jade: \"they were nicer than mine mel\""
    },
    {
      id: "jade-feet", route: "jade", gaydar: 70, spark: 35, gaydarSays: "Sean saw the coral and grabbed his foot in front of everyone. I'd have done the same tbh.", title: "Hot tub", contact: "Jade", irl: true,
      intro: "Mel's birthday. Mel has a hot tub, and that's the whole party. You came in slides with your toes painted a soft coral, your first real colour, and the slides came off at the deck. Mel's brother Sean is here. According to Mel, who tells everyone everything, he's been trying with Jade for years.",
      them: [
        { note: "You sit on the edge of the hot tub with your feet in the water. Jade looks at your toes under the water for a long time." },
        "coral. ok. thats new",
        { note: "Sean's sitting on the edge across from you. He pulls your foot out of the water and props it on his knee." },
        "\"Coral,\" he says. \"Jade, he's matching you.\"",
        "he is not matching me",
        "\"He kind of is.\" He runs one finger down the arch of your wet foot."
      ],
      replies: [
        {
          you: "(Tense up. Don't give him anything.)",
          them: [
            { note: "You grip the edge of the tub. Sean grins and goes under your toes, slowly." },
            "\"Ooh, he's trying so hard,\" Mel says.",
            { note: "Jade's watching your face." }
          ],
          replies: [
            {
              you: "(Hold it.) You done?", spark: 40,
              them: [
                "\"Huh,\" Sean says, and drops your foot back in the water. \"Thought you'd be a screamer.\"",
                { note: "Jade slides along the edge until her shoulder's against yours." },
                "how did you not laugh",
                "i would have died",
                "\"I nearly did,\" you say."
              ],
              after: "Jade, to Mel, after: \"he didnt even laugh\" Mel: \"sean's devastated\" Jade: \"good\" Jade: \"the coral though\" Mel: \"jade\" Jade: \"i know\""
            },
            {
              you: "(Lose it. Laugh so hard you slip into the water.)", spark: 22,
              them: [
                { note: "You burst out laughing, try to pull away and slide right off the edge into the tub. Sean's still got your ankle." },
                "\"Man overboard,\" Sean says, still going on your foot above the water.",
                "\"Okay! Stop! I give up!\"",
                { note: "He lets go. You come up spluttering, hair flat, still giggling. Mel's filming. Jade's laughing so hard she's hanging on to Sean's arm." }
              ],
              after: "Mel, to the group chat: \"[video] sean made jade's date laugh so hard he fell in the hot tub\" Jade: \"stop posting it\" Mel: \"you held sean's arm\" Jade: \"i was SLIPPING\""
            }
          ]
        },
        {
          you: "(Give in. You're laughing already.)",
          them: [
            { note: "You're giggling straight away, high and squeaky, kicking water everywhere. Sean holds on with both hands." },
            "\"Jade, he's so ticklish it's not even fair,\" Sean says.",
            { note: "Jade wipes water off her face. She's laughing. Then she mostly isn't." }
          ],
          replies: [
            {
              you: "(Giggling) Sean! Please! Pleeease stop!", spark: 18,
              them: [
                { note: "He stops and lets your foot slide back into the water." },
                "\"Pleeease,\" Sean says, in your voice. Mel snorts into her drink.",
                "that was a really long please",
                { note: "Jade moves round to Sean's side of the tub to get the drinks. She stays there." }
              ],
              after: "Jade, to Mel: \"pleeeeease\" Mel: \"i KNOW\" Jade: \"my date said pleeeease to your brother\" Mel: \"sean's so pleased with himself\""
            },
            {
              you: "(Lie back on the deck and let him keep going.)", spark: 8, gaydar: 78,
              them: [
                { note: "You lean all the way back on the warm deck and laugh. Sean goes under your toes and you squeal and wriggle and don't try to stop him." },
                "\"He's loving this,\" Mel says. \"Jade, your date is loving this.\"",
                { note: "You finally gasp \"stop\". He stops right away and lets your foot drop back in the water. \"Good sport.\"" },
                { note: "When you sit up, Jade's out of the tub in a towel, on her phone. \"cute,\" she says, without looking up." }
              ],
              after: "Jade, to Mel: \"he just LAY THERE\" Mel: \"he was having the best time of anyone\" Jade: \"yeah i saw\" Jade: \"sean's actually kind of funny\" Mel: \"oh my god\""
            }
          ]
        }
      ],
      debrief: "Being ticklish doesn't make you less worth fancying. Whatever Jade decided that night wasn't really about your feet."
    },
    {
      id: "jade-barefoot", route: "jade", gaydar: 74, spark: 30, gaydarSays: "Mel's dog ate his slide and he was so weird about his feet for the rest of the night. I notice feet. I noticed.", title: "One slide", contact: "Jade", irl: true,
      intro: "Mel's birthday is winding down. You get out of the hot tub and go to the deck for your slides. There's one slide. Mel's dog, Biscuit, is under the table with the other one, and it's not really a slide anymore. Jade said she'd drive you home, but she wants gelato first, and the gelato place is on James Street, on a Saturday night.",
      them: [
        { note: "Jade looks at the chewed slide. Then at your bare feet. Coral toes, still wrinkly from the water." },
        "ok so youre barefoot",
        "\"I could wear one slide.\"",
        "you could not wear one slide",
        { note: "Sean, drying off by the door: \"Give him one of yours, Jade. You're the same size.\"" }
      ],
      replies: [
        {
          you: "We are not the same size.",
          them: [
            "we kind of are",
            { note: "She holds her sandal up next to your foot. Same size." },
            "\"I'll just go barefoot,\" you say, fast.",
            { note: "On James Street you walk next to her with your toes curled up off the footpath. A girl at a table outside the gelato place looks at your feet and nudges her friend." }
          ],
          replies: [
            {
              you: "(Stand behind Jade so your feet are out of sight.)", spark: 30,
              them: [
                { note: "You stand right behind her in the queue, so her heels hide most of the coral." },
                "why are you standing so close",
                "\"No reason.\"",
                "is it the toes",
                "\"It's the toes.\""
              ],
              after: "Jade, to Mel: \"he hid behind me in the gelato line so nobody would see his feet\" Mel: \"cute or no\" Jade: \"cute i guess\" Jade: \"i was looking at his toes the whole time though so i cant really talk\""
            },
            {
              you: "(Say it out loud.) She's looking at my feet.", spark: 22,
              them: [
                "everyones looking at your feet",
                "theyre coral and its james st and you have no shoes on",
                { note: "You go red down to your neck. She buys you a cup of mango and doesn't say anything else." }
              ],
              after: "Jade, to Mel: \"he said out loud that people were looking at his feet\" Mel: \"were they\" Jade: \"yes lol. he went so red. i bought him gelato\" Jade: \"felt like buying a kid gelato\""
            }
          ]
        },
        {
          you: "Can we skip the gelato?",
          them: [
            "no",
            "ive been thinking about pistachio for two hours",
            { note: "So you sit in her car outside while she goes in, feet tucked up on the seat. Sean pulls up beside you on his way home, sees you, and winds his window down." },
            "\"You hiding, man?\""
          ],
          replies: [
            {
              you: "\"I'm waiting.\" (Pull your feet in further.)", spark: 32,
              them: [
                "\"With your feet on her seat. She'll love that.\"",
                { note: "Jade comes back with two cups and sees your feet on her seat." },
                "feet. off. my seat",
                { note: "You put them on the floor mat. She hands you your gelato without looking at you." }
              ],
              after: "Jade, to Mel: \"he waited in the car so nobody would see his feet. and put them on my seat\" Mel: \"no\" Jade: \"sean drove past and texted me your boyfriends hiding lol\""
            },
            {
              you: "(Wave. Say nothing. Die a bit.)", spark: 26,
              them: [
                "\"Classic,\" Sean says, laughing, and drives off.",
                { note: "When Jade gets back you tell her Sean saw you. She laughs, and checks her phone. He's already texted her." },
                "he says you looked very comfy"
              ],
              after: "Jade, to Mel: \"sean drove past and caught him hiding in my car with no shoes on\" Mel: \"omg\" Jade: \"he texted me straight away\" Jade: \"we ended up talking for like an hour\""
            }
          ]
        },
        {
          you: "Fine. One of your sandals. Just to the car.",
          them: [
            { note: "She hands you one sandal. Tan, with a little gold buckle. It fits perfectly." },
            "omg",
            "\"Don't.\"",
            "it looks better on you than me"
          ],
          replies: [
            {
              you: "(Hop to the car.) I'm giving it straight back.", spark: 28,
              them: [
                { note: "You go down Mel's driveway in one gold sandal and one bare foot. Everyone on the deck watches. Sean films." },
                "\"Cinderella,\" he calls.",
                "sean stop",
                "ok that was funny"
              ],
              after: "Jade, to Mel: \"the video of him hopping down your driveway in my sandal\" Mel: \"sean's sent it to everyone\" Jade: \"he looked so embarrassed\" Jade: \"i liked that he did it though\""
            },
            {
              you: "(Take it off again.) No. Barefoot is more dignified.", spark: 30,
              them: [
                "it is not",
                { note: "You hand it back and walk down the driveway on the sides of your feet, toes curled under." },
                "you look like youre walking on lego"
              ],
              after: "Jade, to Mel: \"he gave my sandal back and walked to the car like it was hot coals\" Mel: \"was it\" Jade: \"it was your driveway. at night\""
            }
          ]
        }
      ],
      after: "Biscuit has a new chew toy. You get home with filthy feet and gelato on your shirt.",
      debrief: "Being shy about your feet is fine. You still went out with her, feet and all."
    },
    {
      id: "c6f", route: "jade", gaydar: 92, gaydarSays: "He wore the same sandals as me and his toes were neater. I'm not doing that again.", title: "Painted toes", contact: "Jade",
      outfits: [
        { label: "Plain shorts and a tee, with the strappy sandals and coral toes", gaydar: -5, intro: "Third date with Jade. A picnic at New Farm Park on a 33-degree Saturday. Plain shorts and a tee, so the rest of you is normal. But you painted your toenails glossy coral the night before and wore the tan strappy sandals from the women's section at the department store, the ones with the little gold buckle and a bit of a heel. Jade looked at your feet before she looked at your face." },
        { label: "Linen shorts, the strappy women's sandals and coral toes" },
        { label: "A floral sundress, the strappy sandals, coral toes and a straw bag", gaydar: 4, intro: "Third date with Jade. A picnic at New Farm Park on a 33-degree Saturday. A floral sundress, a straw bag, toes painted glossy coral, and the tan strappy sandals from the women's section at the department store, the ones with the little gold buckle and a bit of a heel. You checked your feet the whole bus ride. Jade looked at the dress, then at your feet, then at your face.", them: ["and a sundress. to a picnic. with me"] }
      ],
      intro: "Third date with Jade. A picnic at New Farm Park on a 33-degree Saturday. Linen shorts. You painted your toenails glossy coral the night before and bought tan strappy sandals from the women's section at the department store, the ones with the little gold buckle and a bit of a heel. You checked your feet the whole bus ride. Jade looked at your feet before she looked at your face.",
      them: [
        "hey thanks for today",
        "random q",
        "were those womens sandals"
      ],
      replies: [
        {
          you: "Yeah. From the women's section.",
          them: [
            "lol ok",
            "i have the exact same ones",
            "like exact. same colour",
            "it was so weird looking down and seeing my feet on you"
          ],
          replies: [
            {
              you: "Great minds?",
              them: [
                "haha",
                "and the toes. did you do those yourself"
              ],
              replies: [
                {
                  you: "Yeah, last night.",
                  them: [
                    "they were neater than mine tbh",
                    "ngl i looked at your feet more than i looked at you today",
                    "and youre fun. but youre not really my type anymore",
                    "youre more like who id bring to get my nails done with"
                  ]
                },
                {
                  you: "A friend did them.",
                  them: [
                    "which friend",
                    "actually dont answer that",
                    "i just dont think this is a date thing for you"
                  ]
                }
              ]
            },
            {
              you: "Do you want me to not wear them?",
              them: [
                "no?? wear what you want",
                "just maybe not on dates with girls",
                "you know what i mean"
              ],
              replies: [
                {
                  you: "Not really.",
                  them: [
                    "ok well",
                    "i do"
                  ]
                },
                {
                  you: "Yeah. I do.",
                  them: [
                    "yeah"
                  ]
                }
              ]
            }
          ]
        },
        {
          you: "Is that a problem?",
          them: [
            "not a problem",
            "just surprising",
            "mel asked for a pic of you and i accidentally sent one of your feet",
            "she replied jade hes gay"
          ],
          replies: [
            {
              you: "Did you agree with her?",
              them: [
                "kind of",
                "the coral didnt help lol",
                "are you?"
              ],
              replies: [
                {
                  you: "Yeah.", gaydar: 100,
                  them: [
                    "ok",
                    "fair enough",
                    "your pedicure was better than most of my friends tbh",
                    "mel wants to know where you get them done"
                  ]
                },
                {
                  you: "I don't know.",
                  them: [
                    "ok",
                    "maybe work that out before the next picnic"
                  ]
                }
              ]
            },
            {
              you: "You sent her a photo of my feet??",
              them: [
                "it was an accident!!",
                "i was trying to get your face and you moved",
                "anyway she thinks youre gay"
              ],
              replies: [
                {
                  you: "She's probably right.", gaydar: 100,
                  them: [
                    "yeah",
                    "ok well. thanks for the picnic i guess"
                  ]
                },
                {
                  you: "Tell Mel to mind her business.",
                  them: [
                    "lol good luck",
                    "shes already told our whole group chat"
                  ]
                }
              ]
            }
          ]
        },
        {
          you: "No, they're men's.",
          them: [
            "they had a gold buckle",
            "and a heel",
            "come on {name}"
          ],
          replies: [
            {
              you: "Okay fine. They're women's.",
              them: [
                "lol yeah",
                "its fine. they looked good",
                "just not on a date. not for me"
              ]
            },
            {
              you: "(Leave it on read)",
              after: "You leave it on read. That night you take a photo of your feet in the sandals. They look great. You don't send it to anyone."
            }
          ]
        },
        {
          you: "They were on sale at the department store and I regret nothing.",
          them: [
            "lol",
            "i paid full price for mine so thats annoying",
            "ngl it was weird. it was like a picnic with my sister",
            "like i kept forgetting it was a date"
          ],
          replies: [
            {
              you: "Your sister sounds like she has great taste.",
              them: [
                "she does",
                "ok i dont think this is a dating thing anymore {name}",
                "you can still send me sandal links"
              ]
            },
            {
              you: "Oh. So that's a no on date four.",
              them: [
                "yeah",
                "sorry",
                "its not just the sandals. its everything"
              ]
            }
          ]
        }
      ],
      after: "Jade, to Mel: \"ok you were right\" Mel: \"the toes told me everything\" Jade: \"they were neater than mine\" Mel: \"jade\" Jade: \"I KNOW\"",
      debrief: "You wore painted toes and women's sandals on a date in broad daylight. People noticed and talked. You still wore them."
    },
    {
      id: "jade-end", route: "jade", gaydar: 99, spark: 0, gaydarSays: "Riley's a plumber and his feet are honestly wrecked. I've never been happier.", title: "Jade and Riley", contact: "Jade", irl: true,
      outfits: [
        { label: "Shorts, a tee and slides. Toes bare.", gaydar: -2, intro: "Two months later. You're at New Farm Park with Nicole on a hot Sunday, on your lemon picnic blanket. On the next blanket over is Jade, with a guy in gym shorts and a fishing shirt, barefoot. His feet are a lot. That's Riley. He's a plumber. He catches you looking." },
        { label: "A sundress, your strappy sandals and freshly painted pink toes", gaydar: 1, intro: "Two months later. You're at New Farm Park with Nicole on a hot Sunday, on your lemon picnic blanket, in a sundress, your strappy sandals and freshly painted pink toes. On the next blanket over is Jade, with a guy in gym shorts and a fishing shirt, barefoot. His feet are a lot. That's Riley. He's a plumber. He catches you looking." }
      ],
      them: [
        { note: "Jade sees you, waves, and comes over pulling Riley by the hand. She gives you a quick side hug and goes straight back to his hand." },
        "Oh my god, hi! {name}! Nicole! This is Riley. Riley, this is {name}, we went on a few dates. I told you, remember?",
        "\"The sandals guy!\" Riley says. \"Yeah, Jade told me. Good on you. I couldn't pull that off. Look at my feet.\"",
        "He fixed Mel's hot water on a Sunday in ten minutes and wouldn't even take a beer for it.",
        "He thinks moisturiser is for when you get sunburnt. I love him so much."
      ],
      replies: [
        {
          you: "Hi Riley! Lovely to meet you. Babe, your feet. We need to talk about your feet. Jade, he's great.",
          them: [
            "\"Ha! Yeah, they're cooked,\" Riley says. \"Jade wants me to go to your nail lady.\"",
            "I DO want him to go. He won't.",
            "\"Not a chance,\" Riley says. \"I'd scare her.\""
          ],
          replies: [
            {
              you: "She's seen worse. Probably. I'll text you her number, Jade.",
              them: [
                "Please. Riley, you're going.",
                "\"I'm not going,\" Riley says, grinning."
              ]
            },
            {
              you: "Honestly, Riley, I'll do them myself. Sit down. Nicole, pass me the kit.", gaydar: 100,
              them: [
                { note: "Nicole hands over your little pedicure kit from her bag without a word. She carries it now. Riley looks at Jade. Jade looks at you." },
                "Oh my god. Are you serious?",
                "\"Go on then,\" Riley says. He sits down on the lemon blanket and sticks his foot out.",
                { note: "You do a plumber's pedicure in New Farm Park. Jade films the whole thing." }
              ],
              after: "Jade, to Mel: \"ran into {name} at the park\" Mel: \"the toes guy?\" Jade: \"he gave riley a pedicure. on a picnic blanket\" Mel: \"WHAT\" Jade: \"riley loved it. he wants to go again\""
            }
          ]
        },
        {
          you: "(Stand up.) Riley. Can I have a quick word? Over there.",
          them: [
            "\"Yeah, no worries,\" Riley says, and follows you barefoot over to the big fig tree.",
            { note: "Up close he's got a sunburnt neck and very blue eyes. You had something ready on the walk over. It's gone." },
            "\"What's up, man?\""
          ],
          replies: [
            {
              you: "Um. I want Jade back. I'm going to ask her. I just wanted you to know. Sorry.",
              them: [
                "\"Ha! You?\" Riley looks down at your feet, then back up, grinning. \"Good luck, man. Seriously.\"",
                { note: "He walks back, sits down next to Jade and says something in her ear, and they both look over at you. Then he opens a bag of chips." },
                "Did you just tell Riley you're going to win me back?",
                "You said sorry to him. He said good luck to you.",
                "No. I'm not leaving him.",
                "And you're not really my type anymore. I like that he's a bit feral. You moisturise more than me."
              ],
              after: "Jade, to Mel: \"{name} told riley he wants me back\" Mel: \"WHAT\" Jade: \"riley wished him luck\" Mel: \"of course he did\""
            },
            {
              you: "...Never mind. Sorry. Do you moisturise? Your feet, I mean. Sorry.",
              them: [
                "\"Ha. Nah,\" Riley says. \"That's more your department, eh?\"",
                { note: "You tell him about urea cream for four minutes. He nods the whole time, smirking. You're bright red and you're not sure why." },
                { note: "Back on the blanket Nicole is crying laughing. Jade has her head on one side." },
                "You went over there to fight for me and you gave him a skincare routine.",
                "Riley's going to tell everyone at work about this."
              ],
              after: "Jade, to Mel: \"{name} went over to fight riley for me\" Mel: \"and?\" Jade: \"gave him a skincare routine\" Mel: \"riley doesnt have a skincare routine\" Jade: \"he bought the cream on the way home\""
            }
          ]
        },
        {
          you: "(To Nicole, not quietly enough) He's very... outdoorsy.",
          them: [
            { note: "Nicole snorts into her spritz." },
            "He is outdoorsy. He opened our wine with a lighter.",
            "It took you and me ten minutes and a video to open a jar of olives, remember?",
            "\"It was a really tight jar,\" you say.",
            "It was not a tight jar."
          ]
        },
        {
          you: "Hi. Nice to meet you. Enjoy your picnic.",
          them: [
            "\"You too, man! Love the blanket. Lemons!\"",
            "Jade, quietly: \"You look really good, you know.\"",
            "\"I know,\" you say. She laughs."
          ]
        }
      ],
      after: "Jade, to Mel: \"ran into {name} at the park\" Mel: \"the toes guy?\" Jade: \"he met riley\" Mel: \"and??\" Jade: \"riley thinks he's great\"",
      debrief: "She's happy with a guy whose feet are a disaster. You're allowed to find that funny."
    },
    {
      id: "olivia-1", route: "olivia", gaydar: 15, gaydarSays: "He's cute and his skin is better than mine. I need to know what he uses.", title: "Coffee in Bulimba", contact: "Olivia",
      outfits: [
        { label: "A plain tee and jeans", gaydar: -5, intro: "Olivia from Bumble. Works in marketing, and she's on the phone to her sister about four times a day. First date: coffee on Oxford St in Bulimba. You wore a plain white tee and jeans. She turned up in a green dress, said \"oh, you're cute\" out loud, and went red." },
        { label: "A white tee, a gold chain and a fresh face of skincare", intro: "Olivia from Bumble. Works in marketing, and she's on the phone to her sister about four times a day. First date: coffee on Oxford St in Bulimba. A white tee, a thin gold chain and an hour of skincare. She said \"oh, you're cute\" out loud, and went red." }
      ],
      them: [
        "hi!! ok that was the best first date ive had in like a year",
        "youre so easy to talk to",
        "also your skin?? what do you use. tell me everything",
        "and second date? drinks? ill pick somewhere"
      ],
      replies: [
        {
          you: "Ha, thanks! It's a whole routine. Cleanser, toner, serum, moisturiser, SPF. I'll send you a list. Yes to drinks!", gaydar: 20,
          them: [
            "a LIST 😭 yes please",
            "my ex washed his face with a bar of soap. the same one he used on his feet",
            "thursday? theres a cocktail bar on james st i love"
          ],
          replies: [
            {
              you: "Thursday. James St. I'll wear something nice.",
              them: [
                "yay 😊",
                "send the list!!"
              ]
            },
            {
              you: "The same bar? For his face AND his feet? Oh no. Run.", gaydar: 25,
              them: [
                "I DID 😂",
                "ok thursday. james st"
              ]
            }
          ]
        },
        {
          you: "Thank you! I had a really good time. Drinks sound great.",
          them: [
            "yay!! thursday?",
            "and im still getting your skincare out of you. ask my sister, i dont give up"
          ],
          replies: [
            {
              you: "Thursday. And fine, I'll tell you. But it's a secret.",
              them: [
                "i wont tell anyone",
                "except my sister"
              ]
            },
            {
              you: "No. I'm taking it to my grave.",
              them: [
                "rude",
                "thursday!!"
              ]
            }
          ]
        },
        {
          you: "It's genetics and drinking water. That's all I'm saying.",
          them: [
            "youre lying",
            "nobody's skin is just genetics",
            "drinks thursday. james st. youre telling me"
          ]
        }
      ],
      after: "Olivia, on the phone to her sister: \"first date was so good. he's funny. and his skin is amazing\" Sister: \"his skin?\" Olivia: \"like amazing\" Sister: \"...ok\" Olivia: \"dont do that\""
    },
    {
      id: "olivia-2", route: "olivia", gaydar: 45, gaydarSays: "He wore mascara on our second date and his lashes looked better than mine. I'm fine.", title: "Cocktails on James St", contact: "Olivia", irl: true,
      outfits: [
        { label: "A black shirt and just a bit of mascara", gaydar: -5, intro: "Second date. A cocktail bar on James St. A black shirt and just a bit of mascara, the kind you hoped nobody would notice. Olivia's in a red top and she's already ordered you something pink." },
        { label: "A black shirt, a bit of mascara, and a clear gloss", intro: "Second date. A cocktail bar on James St. A black shirt, a bit of mascara and a clear gloss. Olivia's in a red top and she's already ordered you something pink." }
      ],
      them: [
        "Okay, I got you a Pornstar Martini because you seem like a fun guy. Is that okay? Sorry, I panicked.",
        { note: "She looks at your face properly. Your lashes." },
        "Wait. Are you wearing mascara? Sorry. That's such a weird question."
      ],
      replies: [
        {
          you: "Just a bit! It's a tubing one, so it doesn't smudge. My lashes are really short. Is it obvious?", gaydar: 50,
          them: [
            "A tubing one.",
            "No, it's not obvious. I just know what tubing mascara is because I own one. I didn't know guys knew.",
            { note: "She sips her drink. She's still looking at your lashes." },
            "Okay. Tell me about your week. Not mascara. Kidding. Sort of."
          ],
          replies: [
            {
              you: "My week was a lot. Dani took me to a drag brunch on Sunday and I cried at the finale. Twice.", gaydar: 55,
              them: [
                "A drag brunch!",
                "Okay. Fun. Do you go to a lot of those?",
                { note: "You say \"a few\". It's been six this year." }
              ],
              after: "Olivia, to her sister: \"he wore mascara. tubing mascara. he knew it was tubing\" Sister: \"olivia\" Olivia: \"and he's been to like six drag brunches this year\" Sister: \"OLIVIA\" Olivia: \"hes lovely though. im doing a third date\""
            },
            {
              you: "Work, mostly. Boring. Tell me about yours.",
              them: [
                "Oh my god. Okay. My boss.",
                { note: "She's funny. You laugh at everything. You also watch the bartender's arms while he shakes a martini, and she sees you do it." }
              ]
            }
          ]
        },
        {
          you: "Not weird! Yeah, a little. I like how it looks. And this is perfect, by the way. Good guess.",
          them: [
            "It was a good guess, wasn't it.",
            "Is that something you do? Like normally? Makeup?",
            "Sorry. I'm not judging. I've just never been on a date with a guy who has better lashes than me."
          ],
          replies: [
            {
              you: "A bit. More lately. I don't really know why. I just like it.", gaydar: 55,
              them: [
                "No, that's fine.",
                "It's just new. For me. I'll get used to it."
              ]
            },
            {
              you: "Only for special occasions. Like dates with gorgeous women.",
              them: [
                "Oh, stop. Okay. That was smooth.",
                { note: "She smiles. When you look away she checks your lashes again." }
              ]
            }
          ]
        },
        {
          you: "No. That's just my lashes.",
          them: [
            "{name}. There's a bit on your eyelid.",
            { note: "She hands you a napkin and points to the spot on her own face." },
            "It's fine! It looks good. It looks better than mine, that's the bit I'm stuck on."
          ]
        }
      ],
      after: "Olivia, to her sister: \"he wore mascara\" Sister: \"olivia\" Olivia: \"it looked good though\" Sister: \"OLIVIA\" Olivia: \"hes lovely. im doing a third date. stop\""
    },
    {
      id: "olivia-feet", route: "olivia", gaydar: 70, gaydarSays: "Marcus had his foot for ages. My sister will not stop bringing it up.", title: "Boat day", contact: "Olivia", irl: true,
      intro: "Olivia's sister's birthday, on her friend Marcus's boat. Marcus has one rule: no shoes on board. Last night Olivia painted your toes a soft pink \"for the photos\" and you let her. Marcus went to school with Olivia. Her sister says he's been in love with her since year 10.",
      them: [
        { note: "Marcus is on the back step taking everyone's shoes as they come on. He holds his hand out for yours." },
        "\"Shoes, buddy. Rules.\"",
        { note: "You hand him your sneakers, then peel your socks off. He looks down." },
        "\"Oh, very nice,\" he says. \"Liv, did you do these?\"",
        "Maybe.",
        "\"They match your nails.\" He grins at her, not at you. \"You've got a type, Liv. And it's not me.\""
      ],
      replies: [
        {
          you: "(Go and lie on the front deck in the sun. Feet up.)",
          them: [
            { note: "You lie on your front on the warm deck with your feet in the air, crossed at the ankles. Olivia and her sister are on the cushions just behind you." },
            { note: "Marcus walks past on his way to the anchor and stops." },
            "\"Liv. Look. He's sunbathing his pedicure.\"",
            { note: "He crouches and drags one finger along both your soles at once." },
            { note: "You shriek and roll over so fast you nearly go off the side. He grabs your ankle so you don't. Then he doesn't let go, and goes under your toes instead." }
          ],
          replies: [
            {
              you: "Marcus! Marcus. Please. Stop!", spark: 26,
              them: [
                { note: "He stops and lets go of your ankle." },
                "\"Saved your life and you're yelling at me,\" he says.",
                { note: "Olivia's sister has her hand over her mouth. Olivia's laughing with her head back." },
                "You sounded like a seagull.",
                "\"He did,\" Marcus says, and sits down on the cushion next to her. \"Drink, Liv?\"",
                { note: "She says yes. She doesn't move over to make room for you." }
              ]
            },
            {
              you: "(Laughing too hard to talk, just kick.)", spark: 14, gaydar: 75,
              them: [
                { note: "You kick, but not hard, because you're laughing too much. Marcus holds on with one hand and keeps going with the other." },
                "\"Liv, is he kicking me or dancing?\"",
                "Let him go, he's going to wet himself!",
                { note: "He lets go. You lie on the deck trying to breathe. Her sister's filming. Olivia's leaning on Marcus to stay upright." },
                "\"Most ticklish guy I've ever met,\" Marcus says. \"And I've got three brothers.\""
              ]
            }
          ]
        },
        {
          you: "(Sit with Olivia and keep your feet flat on the deck.)", spark: 28,
          them: [
            { note: "You sit on the cushions with Olivia, pink toes tucked right in. Marcus drives. Every time you look up he's looking at Olivia in the mirror." },
            "Her sister, leaning over: \"So are you ticklish? Liv won't tell me.\"",
            "\"I'm not,\" you say.",
            "\"He's lying,\" Olivia says. \"He's so bad.\"",
            { note: "Marcus cuts the engine, walks straight back and sits down at your feet." },
            "\"Heard you're not ticklish.\" He picks up your foot. \"Let's see.\"",
            { note: "He barely touches you. You're laughing, then squealing, then begging. Her sister has her phone up. Olivia's got her face in her hands, laughing." },
            "\"Stop, stop, okay, I'm ticklish!\"",
            { note: "He stops. \"Thought so,\" he says, and goes back to the wheel. Olivia goes and sits up the front with him." }
          ]
        }
      ],
      after: "Olivia's sister, on the drive home: \"marcus had your boyfriend's foot for like five minutes\" Olivia: \"i know\" Sister: \"and you sat with marcus the whole way back\" Olivia: \"i know\" Sister: \"so which one are you dating\" Olivia: \"i dont know\"",
      debrief: "Marcus was teasing you to get closer to her. That's about him, not you. You still got a day on a boat."
    },
    {
      id: "olivia-barefoot", route: "olivia", gaydar: 76, spark: 28, gaydarSays: "His sneakers went in the river so he did dinner with bare pink toes. Marcus was very helpful. Hmm.", title: "Dinner after the boat", contact: "Olivia", irl: true,
      intro: "The boat's back at the jetty in Bulimba. You reach into the shoe bucket for your sneakers and they're not there. The bucket tipped coming in, and they're somewhere at the bottom of the river. Dinner is booked at the restaurant on the water, now, and Olivia's sister is already walking up the jetty.",
      them: [
        { note: "Olivia looks at your bare feet on the jetty boards. The pink she painted is still perfect." },
        "Okay. That's actually so funny.",
        "\"It's not funny.\"",
        "It's a bit funny. Come on, they won't care. It's by the water.",
        "\"They'll care,\" Marcus says, putting his own shoes on. \"There's a sign.\""
      ],
      replies: [
        {
          you: "There's a sign?",
          them: [
            { note: "There's a sign. NO BARE FEET. The manager looks at you, then at Marcus, who goes to the bar and comes back with a pair of white slides from lost property." },
            "\"Saved you again, buddy.\"",
            { note: "They're two sizes too big. They slap on the floor with every step, all the way to the table." }
          ],
          replies: [
            {
              you: "(Slap to the table with your head down.)", spark: 26,
              them: [
                { note: "You sit down, kick the slides off under the table and hide your feet behind the chair legs." },
                "You can't take them off. The sign.",
                "\"Nobody can see under the table.\"",
                "\"I can,\" Marcus says. He's next to you. \"Very pink down there.\""
              ],
              after: "Olivia, to her sister: \"he took the slides off under the table\" Sister: \"marcus saw\" Olivia: \"marcus sees everything apparently\" Olivia: \"he was really nice to me all night\""
            },
            {
              you: "Thanks, Marcus. Really. Thank you.", spark: 22,
              them: [
                "\"Anything for Liv's boyfriend.\" He says it like a joke and pulls her chair out for her.",
                { note: "Olivia sits. She looks up at him a second longer than she needs to." },
                "That was nice of him. That's such a boyfriend thing to do.",
                { note: "She picks up the menu." }
              ],
              after: "Olivia, to her sister: \"marcus got him slides from lost property\" Sister: \"he's so sweet\" Olivia: \"i know. its annoying\""
            }
          ]
        },
        {
          you: "I'll sit outside. On the deck. Where nobody looks at feet.",
          them: [
            { note: "The deck has no sign. It also has the whole restaurant looking out at it through the glass." },
            "You're literally in the window.",
            { note: "You sit with your feet up on the chair and your arms round your knees, like that hides ten pink toes." }
          ],
          replies: [
            {
              you: "Does anyone have socks? Anyone?", spark: 30,
              them: [
                "Who brings socks on a boat?",
                { note: "Her sister does. Bright yellow, with BIRTHDAY GIRL on the soles." },
                "Put them on. Put them on right now.",
                { note: "You put them on. Olivia takes about forty photos." }
              ],
              after: "Olivia, to her sister: \"he wore your birthday socks to dinner\" Sister: \"they suit him\" Olivia: \"they really do\" Olivia: \"i dont know how i feel about that\""
            },
            {
              you: "(Stay curled up. Order without looking at anyone.)", spark: 26,
              them: [
                { note: "You order the fish and stay folded up on the chair the whole meal." },
                "You look so uncomfortable.",
                "\"I'm fine.\"",
                { note: "Marcus comes out with a beer and stands between your table and the glass. \"Blocking the view for you, champ.\"" }
              ],
              after: "Olivia, to her sister: \"he sat curled up on his chair all dinner\" Sister: \"marcus stood there blocking the window like a bouncer lol\" Olivia: \"yeah. i saw\""
            }
          ]
        },
        {
          you: "I'll get an Uber home and meet you after.",
          them: [
            "No. It's my sister's birthday. You're coming.",
            "\"Barefoot.\"",
            "Barefoot. Your feet look nice, I made sure of that."
          ],
          replies: [
            {
              you: "(Go in. Walk fast. Look at nobody.)", spark: 30,
              them: [
                { note: "You walk through the restaurant fast, barefoot on the polished concrete. People look. Nobody stops you." },
                { note: "At the table you hide your feet under the tablecloth. Olivia slides one foot over and taps yours." },
                "See? Nobody cares."
              ],
              after: "Olivia, to her sister: \"he walked in barefoot and nobody said anything\" Sister: \"he looked like he was going to cry\" Olivia: \"he was fine. i tapped his foot under the table and he went bright red\""
            },
            {
              you: "My feet looking nice is not the point, Olivia.", spark: 24,
              them: [
                "What's the point then?",
                "\"The point is they're PINK.\"",
                "You let me paint them!",
                { note: "Marcus walks past. \"She's got you there, buddy.\"" }
              ],
              after: "Olivia, to her sister: \"he yelled the point is theyre pink on the jetty\" Sister: \"everyone heard\" Olivia: \"marcus heard. he laughed the whole way up\""
            }
          ]
        }
      ],
      after: "Marcus offers to dive for the sneakers next weekend. Olivia says that would be so sweet of him.",
      debrief: "Getting stuck barefoot with polish on in front of people is one bad night. You got through dinner."
    },
    {
      id: "c6g", route: "olivia", gaydar: 90, gaydarSays: "Red toes, gold sandals, and he sat up straighter every time the waiter came past.", title: "Across the table", contact: "Olivia", irl: true,
      outfits: [
        { label: "Linen shirt and chinos, gold sandals, red toes, a little makeup", gaydar: -5, intro: "Third date with Olivia. Dinner at a little Italian place on James St. A linen shirt and chinos, so half of it's normal. Then flat gold sandals from the women's section, toes painted cherry red, a little mascara and gloss. She's already at the table when you walk in." },
        { label: "Black wrap top, linen pants, gold sandals, red toes, makeup" },
        { label: "A black slip dress, gold heeled sandals, red toes, full makeup", gaydar: 5, intro: "Third date with Olivia. Dinner at a little Italian place on James St. A black slip dress, gold heeled sandals, toes painted cherry red, mascara, bronzer and a red lip. A couple of tables turn round when you walk in. She's already at the table.", them: [{ note: "She looks at your heels, then the dress, then the red lip, then back down at your feet." }] }
      ],
      intro: "Third date with Olivia. Dinner at a little Italian place on James St. A black wrap top, wide-leg linen pants and flat gold sandals from the women's section, toes painted cherry red. Mascara, a bit of bronzer, gloss. She's already at the table when you walk in.",
      them: [
        { note: "She stands up to hug you, then glances down. Then at your face. Then down again." },
        "Hi! Sorry. Hi. You look... wow. Okay. Sit.",
        "I'm just going to say it or I'll think about it all night. Your toes are painted. Red. Properly. Did you get them done somewhere?"
      ],
      replies: [
        {
          you: "Yeah, at the nail place on Brunswick St.",
          them: [
            "Next to the dumpling place? I go there!",
            "So we could've been sitting next to each other getting pedicures. That's so weird.",
            { note: "She laughs. Her eyes keep going under the table." },
            "Sorry. I'm being weird. I've just never been on a date with a guy whose feet look better than mine."
          ],
          replies: [
            {
              you: "Is that a problem?",
              them: [
                "No! No. I don't know.",
                "I just can't work you out.",
                "You walked in like you were meeting the girls for a wine. And I'm sitting here in the dress I bought for tonight going, is he even looking at me?"
              ],
              replies: [
                {
                  you: "I am looking at you.",
                  them: [
                    { note: "She tilts her head." },
                    "You're looking at me how my friends look at me when I've got a new top on. Like, oh cute dress.",
                    "That's nice. It's just not a date look.",
                    "And when the waiter came over you sat up. I saw."
                  ],
                  replies: [
                    {
                      you: "I didn't.",
                      them: [
                        "You did. It's fine, he's really good-looking. I sat up too.",
                        "I just don't want to pretend I didn't see it. I did that with my ex for two years."
                      ]
                    },
                    {
                      you: "...okay. I did.", gaydar: 95,
                      them: [
                        "Ha. Thank you.",
                        "Okay. I'm finishing my pasta because it's the best carbonara in Brisbane. And then I think that's it, yeah?",
                        "You're so fun. You're just not into me. I think we both know why."
                      ]
                    },
                    {
                      you: "Can we start again? Pretend I walked in normal?",
                      them: [
                        "This is normal for you though. You walk better in those sandals than I do in mine.",
                        "I don't want a pretend date. I'd rather just have dinner with you. As whatever this is."
                      ]
                    }
                  ]
                },
                {
                  you: "Honestly? I'm not sure if I am.",
                  them: [
                    "Okay. Wow. Okay.",
                    "Can I ask you something? You don't have to answer. Have you ever been on a date with a guy?"
                  ],
                  replies: [
                    {
                      you: "No.",
                      them: [
                        "Maybe you should. I'm serious. I'm not trying to get rid of you.",
                        "I just think he'd love the red toes. And I've spent the whole entree trying not to look at them."
                      ]
                    },
                    {
                      you: "Once. Sort of.", gaydar: 95,
                      them: [
                        "Sort of! Okay. And was it better than this?",
                        { note: "You don't say anything. She nods." },
                        "Yeah. Thought so."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              you: "I like having them done. It makes me feel good.",
              them: [
                "No, same. It's the best hour of my month.",
                "I just don't know any straight guys who do it. My sister's boyfriend wears socks to the beach.",
                "Are you straight? Sorry. That's so rude on a third date. Ignore me. Have some bread."
              ],
              replies: [
                {
                  you: "Yeah, I'm straight.",
                  them: [
                    { note: "She says \"okay\" the way people do when they don't believe you." },
                    "Okay. Sorry. That was rude.",
                    "But even if you are... I want someone who'd feel a bit weird walking into a nail place. Someone I can steal a hoodie off.",
                    "Your hoodies would fit me. Your sandals would fit me. Sorry. I'm not trying to be mean."
                  ],
                  replies: [
                    {
                      you: "So that's it? Because of my toes?",
                      them: [
                        "It's not the toes. The toes are cute.",
                        "You haven't asked me one thing about me tonight. You asked the waiter where his watch was from.",
                        "I'm not angry. I just don't want to sit here pretending."
                      ]
                    },
                    {
                      you: "Fair enough.",
                      them: [
                        "Yeah.",
                        "Split a tiramisu anyway? It's a waste otherwise."
                      ]
                    }
                  ]
                },
                {
                  you: "No. I'm not.", gaydar: 100,
                  them: [
                    "Oh. Okay.",
                    { note: "She breathes out and laughs a bit." },
                    "Thank god. Not thank god you're gay. Thank god I'm not going mad. I've been sitting here for twenty minutes going Olivia, stop it, you've got it wrong.",
                    "So why are you here? With me? I'm not being nasty. I want to know."
                  ],
                  replies: [
                    {
                      you: "I thought I should try.",
                      them: [
                        "Try being straight?",
                        "{name}. You wore red toes and gold sandals. I think you knew how tonight was going to go."
                      ]
                    },
                    {
                      you: "I'm scared to date guys.",
                      them: [
                        "Yeah. I'd be scared too.",
                        "But half this restaurant has looked at your feet tonight and you've been fine. You can do a coffee with a guy.",
                        "And if you need help picking what to wear, I'm free on weekends. Honestly I'd love that."
                      ]
                    }
                  ]
                },
                {
                  you: "I don't know yet.",
                  them: [
                    "Okay. Fair.",
                    "I just can't be the one you work it out on. My ex worked it out on me for two years. Not again.",
                    "So we just have dinner, yeah? And you text me when you know."
                  ]
                }
              ]
            }
          ]
        },
        {
          you: "Thanks. I wanted to look nice tonight.",
          them: [
            "You do look nice. That's sort of the problem.",
            "Your makeup's better than mine. Your toes are better than mine.",
            "If a girl walked in like this I'd be like, love her. But you're a guy and this is a date and I don't know what I'm meant to feel."
          ],
          replies: [
            {
              you: "What do you want to feel?",
              them: [
                "Like you're into me. Like you dressed up for me.",
                "And I don't think you did. You dressed up for you. Which is fine! But then it's not really a date with me, is it."
              ]
            },
            {
              you: "Should I have dressed differently?",
              them: [
                "No. God, no. Don't do that for anyone.",
                "If you'd come in a polo I'd have had a nice boring night and gone out with you three more times and found out anyway. This is quicker."
              ],
              replies: [
                {
                  you: "Found out what?",
                  them: [
                    "Come on, {name}.",
                    { note: "She reaches across and taps the table near your hand. She doesn't touch your hand." },
                    "That you're gay. You don't have to say it. I'm not going to make you."
                  ]
                },
                {
                  you: "Yeah. That's probably true.",
                  them: [
                    "It is. I've been out with a guy who was hiding it. I can't do that again."
                  ]
                }
              ]
            },
            {
              you: "(Your eyes go hot. You look at your plate.)",
              them: [
                { note: "She goes quiet." },
                "Oh no. Hey. I'm not trying to upset you.",
                "You look amazing. I'm not saying you look bad. I'm just saying this isn't a date. I think you'd rather it wasn't either.",
                "Do you want to get dessert and not talk about it?"
              ],
              replies: [
                {
                  you: "Yeah. Dessert.",
                  them: [
                    "Tiramisu. I'm paying. Don't argue."
                  ]
                },
                {
                  you: "Sorry. I'm fine.",
                  them: [
                    "You're not fine, you're crying into your carbonara.",
                    "It's okay. I won't tell anyone. Well. I'll tell my sister. She doesn't count."
                  ]
                }
              ]
            }
          ]
        },
        {
          you: "Brunswick St. And before you ask, yes, they're better than yours.",
          them: [
            "Wow.",
            { note: "She looks under the table at her own toes, then at yours." },
            "They are though. That's so annoying.",
            "Okay. I spent forty minutes on my hair and I don't think you've looked at it once. You looked at the waiter though.",
            "This isn't really a date, is it. It's like a girls' night I didn't plan."
          ],
          replies: [
            {
              you: "Is that so bad? Girls' night is fun.",
              them: [
                "Girls' night is the best.",
                "I just already have girls. I wanted a boyfriend.",
                "Split a tiramisu?"
              ]
            },
            {
              you: "I looked at your hair. It's very... up.",
              them: [
                "It's very up. Wow.",
                { note: "She laughs, properly, for the first time all night." },
                "Okay. You're gay. Say it or don't, I'm not going to make you. But you are."
              ]
            }
          ]
        },
        {
          you: "You noticed? I was worried you'd think it was weird.",
          them: [
            "I mean... a bit? I'm not going to lie.",
            "It's not weird. It's just a lot for a third date. I can't tell if you're trying to tell me something.",
            "Are you?"
          ],
          replies: [
            {
              you: "Maybe I am.",
              them: [
                "Okay. Go on.",
                "Take your time. The pasta's not going anywhere."
              ],
              replies: [
                {
                  you: "I think I like guys.", gaydar: 100,
                  them: [
                    { note: "She doesn't look surprised." },
                    "Yeah. I kind of knew at the sandals.",
                    "Okay. New plan. We eat, we split the bill, and you tell me about whoever you actually want to be sitting here with."
                  ]
                },
                {
                  you: "I don't know how to say it.",
                  them: [
                    "Then don't. I think I know.",
                    "It's fine. I'm not upset. I'm a bit sad about the dress. I'll wear it again."
                  ]
                }
              ]
            },
            {
              you: "No. I just like it.",
              them: [
                "Okay. Then I'll be honest too. It's not for me.",
                "I want a guy who'd be lost in a nail place. That's my thing, not yours. But I don't think we should do this again."
              ]
            }
          ]
        }
      ],
      after: "Olivia, on the phone to her sister on the drive home: \"No, he was lovely. He was so lovely. His toes were better than mine and he spent the whole night looking at the waiter.\" \"So he's gay.\" \"So he's gay.\" \"Did he say?\" \"Doesn't matter. He was gorgeous. It just wasn't for me.\"",
      debrief: "Hearing \"I think you'd be happier with guys\" can sting and be a relief at once. Both are fine."
    },
    {
      id: "olivia-end", route: "olivia", gaydar: 99, spark: 0, gaydarSays: "James does F45 at 5am. I said tubing mascara once and he asked if we were going to the river.", title: "Olivia and James", contact: "Olivia", irl: true,
      outfits: [
        { label: "A black tee and jeans", gaydar: -2, intro: "Two months later. Saturday night at the same cocktail bar on James St, out with Dani. You're in a black tee and jeans and just lip oil. Olivia walks in with a guy in a Lululemon quarter-zip and an Apple Watch, with the haircut every guy in finance has. James." },
        { label: "Your gold sandals, red toes, a slip dress and a red lip", gaydar: 1, intro: "Two months later. Saturday night at the same cocktail bar on James St, out with Dani, in a black slip dress, the gold sandals, red toes and a red lip. Olivia walks in with a guy in a Lululemon quarter-zip and an Apple Watch, with the haircut every guy in finance has. James." }
      ],
      them: [
        { note: "Olivia spots you, squeals and comes straight over. She hugs you, then holds you at arm's length and looks you up and down, like she's checking a friend's outfit." },
        "{name}! Oh my god. You look AMAZING.",
        "This is James. James, this is {name}. The one I told you about. Carbonara night.",
        "\"The carbonara guy!\" James says, and shakes your hand. \"Liv says you've got the best taste in Brisbane. What's wrong with this quarter-zip? She won't tell me.\"",
        "He's in finance. He does F45 at five in the morning.",
        "He put my bed frame together in twenty minutes without the instructions. You'd have asked if it came in white."
      ],
      replies: [
        {
          you: "Hi James! Okay, honestly? The quarter-zip's fine, it's the colour. Navy's washing you out, babe. Try sage. Liv, he's lovely. I'm so happy for you.",
          them: [
            "\"Sage,\" James says, nodding very seriously. \"Noted.\"",
            "Oh my god. You just styled my boyfriend in four seconds.",
            "Honestly I'm so glad we stopped. You'd have spent every date doing my outfits. James just looks at me. The whole time. It's actually a bit much. I love it."
          ],
          replies: [
            {
              you: "Stop. I'm so happy for you, Liv.",
              them: [
                "Thank you.",
                "Dani's waving at you. Go. You look way happier than at carbonara, by the way."
              ]
            },
            {
              you: "Do you ever think about what you said at carbonara? The guy thing?",
              them: [
                "\"All the time,\" she says. \"Have you?\"",
                { note: "You don't answer. She squeezes your arm and goes back to James." }
              ]
            }
          ]
        },
        {
          you: "(Step closer to James.) James. Can I say something? I don't really know how to say it.",
          them: [
            "\"Go for it, man,\" James says, and checks his watch.",
            { note: "He's very tall and very calm and he smells expensive. You look at his quarter-zip so you don't have to look at his face." },
            "\"You alright? You've gone a bit pink.\""
          ],
          replies: [
            {
              you: "I think I let Liv go too fast. I want to take her out again. I wanted to tell you. Man to man.",
              them: [
                "\"Man to man,\" James says, grinning, and squeezes your shoulder a bit too hard. \"Love that for you.\"",
                { note: "He turns round and calls out \"babe, your friend wants to take you out again\" to Olivia. He's laughing before he gets to the end of it." },
                "Oh my god. {name}. Did you just ask my boyfriend if you can date me?",
                "You said man to man in that voice. You're holding your drink with both hands.",
                "No. Oh my god. No.",
                { note: "She takes your drink off you and has a sip, the way she'd take one off Dani, and gives it back." },
                "Sorry. You're just not my type anymore. You'd come to brunch with me and my sister and have a better time than me."
              ],
              after: "Olivia, to her sister, from the Uber: \"saw carbonara guy\" Sister: \"and??\" Olivia: \"he asked james if he could take me out again. man to man\" Sister: \"what did james say\" Olivia: \"love that for you. then he laughed for a whole block\""
            },
            {
              you: "...Never mind. Your arms are very F45. Okay. Bye.", gaydar: 100,
              them: [
                "\"Thanks, man!\" James says, and flexes on purpose. \"Five am. You'd die.\"",
                { note: "You go back to Dani with your face burning. Dani hands you a drink without a word." },
                "Olivia, later, by the bathrooms: \"You went over there to get me back and came back blushing about his arms.\" \"I don't want to talk about it,\" you say."
              ]
            }
          ]
        },
        {
          you: "(To Olivia, quietly) Is he wearing an Apple Watch to a cocktail bar?",
          them: [
            "He wears it to bed. It does his sleep.",
            "You used to track your skincare. In an app. With photos.",
            "\"It's a good app,\" you say.",
            "I know. You showed me. Like three times."
          ]
        },
        {
          you: "Hi James. Lovely to meet you. Enjoy your night.",
          them: [
            "\"You too, man! Love the outfit.\"",
            "Olivia, quietly: \"He means that, by the way. He thinks everyone's great.\"",
            "\"That's nice,\" you say."
          ]
        }
      ],
      after: "Olivia, to her sister, from the Uber: \"saw carbonara guy\" Sister: \"and??\" Olivia: \"he looked so happy\" Sister: \"and james?\" Olivia: \"james thinks he's great. james thinks everyone's great\"",
      debrief: "Being the one who notices what everyone's wearing is fine. It just wasn't what Olivia wanted."
    },
    {
      id: "zoe-1", route: "zoe", gaydar: 20, gaydarSays: "He guessed my top was H&M first try. Brooke thinks that's a red flag.", title: "Trivia", contact: "Zoe",
      outfits: [
        { label: "A flannel and jeans", gaydar: -5, intro: "Zoe's a dental nurse and does a pub trivia night with her friends Brooke and Tash every Wednesday. Her team was one short and Brooke's work friend knew you, so here you are. You wore a flannel and jeans. You got most of the pop culture round and none of the sport." },
        { label: "A fitted shirt and a bit of brow gel", intro: "Zoe's a dental nurse and does a pub trivia night with her friends Brooke and Tash every Wednesday. Her team was one short and Brooke's work friend knew you, so here you are. A fitted shirt and a bit of brow gel. You got most of the pop culture round and none of the sport." }
      ],
      them: ["hey its zoe from trivia!! brooke gave me your number hope thats ok", "you basically won pop culture on your own lol. the meat dress question??", "also how did you know my top was h&m. like how"],
      replies: [
        { you: "Hi Zoe! Yeah of course it's ok. I don't know, I just recognised it. I'm in there way too much.",
          gaydar: 25,
          them: ["lol same", "ok random but do you want to get a drink sometime? just us not trivia", "brooke told me to ask. shes literally sitting next to me"],
          replies: [
            { you: "Yeah, I'd like that. Somewhere quiet?", them: ["yay ok. theres a wine bar in paddo i like", "friday?"] },
            { you: "Haha hi Brooke. Yes. Friday?", them: ["she says hi", "ok friday 😊"] }
          ] },
        { you: "Ha, lucky guess! You looked great in it though.",
          them: ["😊 thanks", "want to get a drink sometime? just us?"],
          replies: [
            { you: "I'd really like that.", them: ["friday? paddington?"] },
            { you: "Only if Brooke's not coming.", them: ["lol she would if i let her", "just us. theres a place in paddington, friday?"] }
          ] },
        { you: "It was Franc Fernandez, by the way. And yours is the linen one from the new range. Sorry, that's a weird thing to know.",
          gaydar: 25,
          them: ["lol thats so specific", "brooke wants to know if youre a stylist", "anyway do you want to get a drink? just us. friday maybe?"] }
      ],
      after: "Zoe, to Brooke: \"i asked him\" Brooke: \"AND\" Zoe: \"friday\" Brooke: \"told u\" Zoe: \"is it weird he knew my top was h&m\" Brooke: \"bit weird\" Brooke: \"wait which top\""
    },
    {
      id: "zoe-2", route: "zoe", gaydar: 55, gaydarSays: "He went through my whole wardrobe and I just let him. Brooke says that's not a normal fourth date.", title: "Her wardrobe", contact: "Zoe", irl: true,
      outfits: [
        { label: "Jeans, a tee and a little lip balm", gaydar: -5, intro: "A month in. Zoe's place in Toowong on a Sunday. Jeans, a tee, a bit of tinted balm. She's trying to decide what to wear to Brooke's barbecue next week and she's thrown half her wardrobe on the bed." },
        { label: "Shorts, a crop tee and your toenails painted lilac", gaydar: 5, intro: "A month in. Zoe's place in Toowong on a Sunday. Short shorts, a crop tee, and lilac toenails you painted last night \"just to see\". Zoe's trying to decide what to wear to Brooke's barbecue next week and she's thrown half her wardrobe on the bed. She sees your toes and stops.", them: [{ note: "\"Are your toes... lilac?\" she says. \"Since when?\" \"Since last night,\" you say. She says \"cute\" in a very small voice." }] }
      ],
      them: [
        "Okay, help. I have nothing to wear. Literally nothing. Brooke's barbecue is going to be all her uni friends and they're all so pretty.",
        { note: "Before she's finished the sentence you're off the chair and holding up a floral sundress." },
        "Oh. Okay. You're really into this."
      ],
      replies: [
        { you: "This one, with your white platforms and the little gold hoops. Trust me. It's giving effortless but you tried.",
          gaydar: 60,
          them: [
            "It's giving what?",
            { note: "She tries it on and turns side to side in the mirror for a long time." },
            "Okay yeah. That's actually really good. How do you even know that?",
            "Actually don't answer that. Um. Do you want to try something on? Like as a joke?"
          ],
          replies: [
            { you: "As a joke? Hand me the platforms. I want to see if I can walk in them.", gaydar: 70,
              them: [{ note: "You can walk in them. Pretty well, actually. Zoe watches you go to the door and back." }, "Okay, that's annoying. You're better in them than me.", "I don't know how I feel about that. Wear them to Brooke's. I'm kidding. I think."] },
            { you: "Ha, nah, I'm alright. You look really good though.", them: ["Thanks. You're so good at this. Brooke usually does this for me.", { note: "She kisses you on the cheek and goes to look for her hoops." }] }
          ] },
        { you: "Wait, where'd you get this skirt? I've been looking for this one for ages.",
          gaydar: 65,
          them: [
            "For who?",
            { note: "Neither of you says anything for a second." },
            "No, that's fine! That's fine. You can borrow it if you want? Is that weird. Sorry. I'll stop."
          ],
          replies: [
            { you: "For you. I meant for you. Like, I saw it and thought of you.", them: ["Right. For me.", "Okay.", { note: "She hangs it back up and doesn't look at you for a bit." }] },
            { you: "...Can I actually borrow it?", gaydar: 75, them: [{ note: "She hands it to you. She doesn't say anything. She just watches you hold it up against yourself in the mirror." }, "\"It suits you,\" she says eventually. \"Like, really suits you.\"", "\"Don't tell Brooke.\""] }
          ] },
        { you: "I'm just helping. You were going to wear the jumpsuit.",
          them: [
            "What's wrong with the jumpsuit?",
            { note: "You don't say anything." },
            "Okay. Brooke said it was bad too.",
            "You sound exactly like her right now. Like exactly. It's freaking me out a bit."
          ] }
      ],
      after: "Zoe, to Brooke: \"he went through my wardrobe today\" Brooke: \"cute??\" Zoe: \"he picked my whole outfit for saturday. its really good\" Brooke: \"so whats the problem\" Zoe: \"idk\" Zoe: \"nothing. its fine\""
    },
{
      "id": "zoe-feet",
      "route": "zoe",
      "gaydar": 75,
      "gaydarSays": "We came fourth. Brooke blames your feet. I sort of do too.",
      "title": "Trivia at Brooke's",
      "contact": "Zoe",
      "irl": true,
      "intro": "Five weeks in. Zoe's trivia team is practising at Brooke's place, because it's a shoes-off house and Brooke's very serious about trivia. You're still wearing the lilac from the weekend. Brooke's brother Tyler is here. He's been texting Zoe \"u up\" since before you were on the scene.",
      "them": [
        {
          "note": "You leave your sneakers by the door with everyone else's. Brooke looks at your toes and raises both eyebrows at Zoe."
        },
        "He did them himself. They're good, right?",
        {
          "note": "Tyler's on the floor with his back against the couch. You sit on the couch above him. Your feet end up right next to his shoulder."
        },
        "\"Zo,\" he says, without turning round. \"Your boyfriend's feet are in my ear.\"",
        "Then move, Tyler.",
        "\"Nah. I like it here.\" Brooke reads out the first music question. Tyler reaches up and gets hold of your foot."
      ],
      "replies": [
        {
          "you": "(Try to answer the question anyway.) It's... it's Dua... Lipa... HA. Stop it!", "spark": 20,
          "them": [
            {
              "note": "He's running his thumb up and down your sole. You can't get the name out. You're laughing and trying to pull your foot back and he just holds on."
            },
            "\"Dua what?\" Tyler says. \"Come on, buddy, we need the points.\"",
            "\"Time's up,\" Brooke says. \"Zero. Tyler, give him his foot back.\"",
            {
              "note": "He does it once more, right under your toes, and you squeal so loudly Brooke's dog leaves the room."
            },
            "\"STOP. Stop. Please.\"",
            {
              "note": "He stops and lets go. \"Only because you said please,\" he says."
            },
            {
              "note": "Tash is laughing so hard she's lying on the rug. Zoe's laughing too, but she's also looking at Tyler for a bit too long."
            }
          ]
        },
        {
          "you": "(Yank your foot back and sit on it.)", "spark": 26,
          "gaydar": 72,
          "them": [
            {
              "note": "You sit on both feet. Now you're cross-legged on Brooke's couch like a little kid."
            },
            "\"Aw,\" Tyler says. \"He's hiding them.\"",
            "\"Tyler, leave him alone,\" Tash says, grinning.",
            {
              "note": "He waits. Two questions later your leg's gone dead and you have to stretch it out. He grabs it before it even touches the floor."
            },
            "\"Gotcha.\"",
            {
              "note": "You're laughing and squirming and saying \"no no no\" all the way through the sport round. Zoe's trying to write answers down and keeps missing because she's laughing."
            },
            "\"Stop,\" you finally say, properly. He stops straight away.",
            "\"You're no fun,\" he says. Then to Zoe: \"Your boyfriend's no fun, Zo. I'm fun.\""
          ]
        },
        {
          "you": "Tyler. If you tickle me, I'll scream. I mean it.", "spark": 14,
          "gaydar": 78,
          "them": [
            "\"Deal,\" Tyler says.",
            {
              "note": "He tickles you. You scream, really high, and Brooke's neighbour bangs on the wall."
            },
            "\"Okay, he wasn't joking,\" Tyler says, and lets go, laughing. \"Brooke, your neighbour hates me.\"",
            "\"Everyone hates you,\" Brooke says. \"Next question.\"",
            {
              "note": "Zoe's squeezing your hand. When you look over, she's still smiling at Tyler."
            }
          ]
        }
      ],
      "after": "Tash, to Brooke, after: \"did u hear the noise he made\" Brooke: \"my neighbour heard it\" Tash: \"lmao\" Brooke: \"also tyler walked zoe to her car\" Brooke: \"took 20 min. she was parked out the front\"",
      "debrief": "You said stop and he stopped. The embarrassment goes quicker than it feels like it will."
    },
    {
      "id": "zoe-ambush",
      "route": "zoe",
      "gaydar": 78,
      "irl": true,
      "title": "Tash's picnic",
      "contact": "Zoe",
      "gaydarSays": "Tyler had your shoes off before I'd put my drink down. In New Farm Park, {name}.",
      "intro": "A week after trivia at Brooke's. Tash's birthday picnic in New Farm Park, on a big rug under the fig trees. You wore white sneakers and ankle socks and you're keeping them on. Tyler's here, lying on the rug in a singlet. He's been looking at your sneakers since you sat down.",
      "them": [
        {
          "note": "Zoe's next to you, leaning on your shoulder. Brooke's cutting the cake. Tash is opening presents."
        },
        "\"Zo,\" Tyler says. \"He's wearing shoes on the rug.\"",
        "It's a picnic rug, Tyler. You're allowed shoes on a picnic rug.",
        "\"Brooke's rug. Brooke's rules. Right, Brooke?\"",
        "\"Shoes off on my rug,\" Brooke says, not looking up from the cake. \"Always.\"",
        "\"I'm fine,\" you say. \"They're clean. I'm keeping them on.\"",
        "\"Is it still lilac under there?\"",
        "\"No.\"",
        "\"Liar.\"",
        {
          "note": "He rolls over and grabs your ankle. You try to tuck your foot under you. He's already got it in his lap and he's pulling the laces like he does this every day."
        },
        "\"Tyler! No! I said I'm keeping them on!\"",
        "\"Brooke, grab the other one.\"",
        {
          "note": "Brooke puts the cake knife down, sits on your other ankle and starts on the laces. You kick. Tash grabs your shoulders from behind and holds you back on the rug, laughing into your hair. Zoe's moved out of the way. She's watching with her hand over her mouth."
        },
        {
          "note": "Both sneakers come off. Then Tyler peels your sock off from the toe end, slowly. Lilac. Then the other one. Lilac."
        },
        "\"LIAR!\" Brooke says. \"Zo, he lied on my rug.\"",
        "\"Penalty,\" Tyler says. \"Brooke, you take that one.\"",
        {
          "note": "They both start at once."
        }
      ],
      "replies": [
        {
          "you": "(Lock up. Stare at the fig tree. Do not laugh in a public park.)",
          "them": [
            {
              "note": "You stare up into the fig tree. Tyler's thumbs go up the arch. Brooke goes straight under the toes, quick and light. Your legs go rigid."
            },
            "\"He's doing the face,\" Tash says above you. \"He's doing the trying face.\"",
            "\"Tash, get in on it,\" Tyler says.",
            {
              "note": "Tash lets go of your shoulders and takes half of Brooke's foot. A family on the next rug has stopped eating to watch."
            }
          ],
          "replies": [
            {
              "you": "(Hold it. Hold it. Hold it.)",
              "them": [
                {
                  "note": "You hold it. You don't know how. Your eyes water and the lilac toes curl so hard they cramp, but nothing comes out of your mouth."
                },
                "\"How is he not laughing,\" Brooke says. \"Tyler you're doing it wrong.\"",
                "\"Zo,\" Tyler says. \"Your turn. You know him best. Find a spot.\"",
                {
                  "note": "Zoe looks at your foot. She looks at you. She's biting her lip."
                }
              ],
              "replies": [
                {
                  "you": "(Look at her.) Zo. Don't. Please.",
                  "outcome": "held",
                  "spark": 30,
                  "them": [
                    {
                      "note": "She looks at you for a second. Then she reaches over and pushes Tyler's hands off."
                    },
                    "Okay, that's enough. He won. Give him his shoes.",
                    "\"He didn't win, Zo, he just...\"",
                    "Tyler. Shoes.",
                    {
                      "note": "He gives them back. Zoe brushes the grass off your feet and helps you put your socks on, one then the other. Brooke watches her do it with her eyebrows right up."
                    },
                    "\"Whatever,\" Tyler says, and goes to get a beer. He sits on the other side of the rug for the rest of the afternoon."
                  ],
                  "after": "Brooke, to Tash: \"zoe put his SOCKS on for him\" Tash: \"aww\" Brooke: \"and he didnt even laugh\" Brooke: \"tyler's been sulking at the esky for an hour\""
                },
                {
                  "you": "(Don't say anything. Keep holding.)",
                  "outcome": "cracked",
                  "spark": 18,
                  "them": [
                    {
                      "note": "Zoe crawls round and goes for the back of your heel, just above the ankle."
                    },
                    {
                      "note": "You last about a second. Then you shriek, loud enough that the family next to you look over, and you're giggling with all four of them going at once."
                    },
                    "\"ZO!\" Brooke screams. \"You killed him!\"",
                    "I found it in the car once. When he had his feet on the dash.",
                    {
                      "note": "They stop when you finally get \"stop\" out. Zoe high-fives Tyler."
                    }
                  ],
                  "after": "Tash, to the group chat: \"[video] zoe found his spot\" Brooke: \"the SHRIEK\" Tyler: \"zo knew the whole time\" Brooke: \"u high fived tyler\" Zoe: \"so?\""
                }
              ]
            },
            {
              "you": "(It's too much. You shriek.)",
              "them": [
                {
                  "note": "You break. A shriek, then giggles, and you're rolling round the rug trying to get your feet back and getting nowhere."
                },
                "\"There it is!\" Tyler says.",
                {
                  "note": "The family on the next rug is laughing now too. Their little girl is copying the noise you're making. Brooke's filming with one hand."
                },
                "Oh my god. Oh my god, {name}."
              ],
              "replies": [
                {
                  "you": "(Giggling) Okay! Okay, I lied! It's lilac! It's lilac!",
                  "outcome": "cracked",
                  "spark": 18,
                  "them": [
                    {
                      "note": "They stop and let go. Tyler holds his hands up."
                    },
                    "\"Thank you,\" Tyler says. \"Was that so hard?\"",
                    {
                      "note": "You curl up with your feet under Zoe's cardigan. You're red to your ears. The little girl on the next rug waves at you."
                    },
                    "You lied on Brooke's rug. She's never going to let that go.",
                    {
                      "note": "She's still giggling. Tyler passes her a beer without asking what she wants. It's the one she likes."
                    }
                  ],
                  "after": "Brooke, to Tash: \"IT'S LILAC IT'S LILAC\" Tash: \"that little girl did the noise for an hour\" Tash: \"did u see tyler got zoe the right beer\" Brooke: \"yep\""
                },
                {
                  "you": "(Red, giggling) Stop! Stop it! All of you!",
                  "outcome": "cracked",
                  "spark": 16,
                  "them": [
                    {
                      "note": "They stop as soon as you say it and let go."
                    },
                    "\"Okay! Hands off!\" Tyler says.",
                    {
                      "note": "You pull your feet under you and hug your knees. There's grass in your hair."
                    },
                    "Are you okay? You went really, really high.",
                    {
                      "note": "Then Brooke does the noise, and Zoe laughs so hard she puts her head on Tyler's shoulder for a second. She takes it off again quickly."
                    }
                  ],
                  "after": "Zoe, to Brooke, that night: \"i feel bad\" Brooke: \"you laughed into tyler\" Zoe: \"for ONE SECOND\" Brooke: \"for like five\" Zoe: \"ok whatever\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're giggling before they've even started.)",
          "them": [
            {
              "note": "You're gone straight away. You squeal, you kick, you giggle into Tash's knees while she holds your shoulders down."
            },
            "\"Oh, he's SO bad!\" Brooke says. \"I barely touched him!\"",
            "\"Everyone in,\" Tyler says. \"Tash. Zo. Come on.\"",
            {
              "note": "Tash takes a foot. Then Zoe, laughing, kneels down and takes the toes on the other one. Four of them. The family next door has given up on their lunch entirely."
            },
            "You're so ticklish! How did I not know you were this ticklish?"
          ],
          "replies": [
            {
              "you": "(Giggling) Please! Please stop! Please!",
              "them": [
                {
                  "note": "They stop and let go straight away. You lie on the rug panting, arms over your face."
                },
                "\"He said please,\" Tyler says. \"Three times. Brooke, did you get that?\"",
                "\"I got all three.\"",
                {
                  "note": "Then Zoe picks your foot up again, gently. Just holding it. Grinning at you over it."
                },
                "One more? Just me. Ten seconds."
              ],
              "replies": [
                {
                  "you": "(Pull it back.) No! Zo, no. I'm done.",
                  "outcome": "begged",
                  "spark": 12,
                  "them": [
                    "Okay! Okay. Fine.",
                    {
                      "note": "You sit cross-legged with both feet tucked under you for the rest of the picnic. Tyler's sitting on your socks."
                    },
                    "\"Want them back? Come and get them, princess.\"",
                    {
                      "note": "You don't go and get them. Zoe goes and gets them. It turns into a whole thing with Tyler, rolling on the rug. She's laughing the whole time. You hold your sneakers and wait."
                    }
                  ],
                  "after": "Tash, to Brooke: \"he begged three times\" Brooke: \"and then zoe wrestled tyler for the socks\" Tash: \"for ages\" Brooke: \"who won\" Tash: \"zoe was on top at the end\" Brooke: \"TASH\""
                },
                {
                  "you": "(Still giggling) ...Okay. Ten seconds. Just you.",
                  "outcome": "kept",
                  "spark": 6,
                  "gaydar": 82,
                  "them": [
                    {
                      "note": "The whole rug counts down from ten. Zoe goes for the back of your heel. You scream laughing from 'ten'."
                    },
                    {
                      "note": "At 'one' Tyler and Brooke and Tash all pile back in for a bonus round. You're laughing too hard to complain. They stop when you finally squeak \"stop\"."
                    },
                    "\"He asked for it!\" Tyler says. \"Literally asked!\"",
                    "Your face is so red.",
                    {
                      "note": "She's sitting back on her heels, looking at you lying there with lilac toes in the air. Tyler sits down next to her and offers her the last bit of cake. She eats it off his fork."
                    }
                  ],
                  "after": "Brooke, to Tash: \"[video] HE ASKED FOR MORE\" Tash: \"zoe ate cake off tyler's fork\" Brooke: \"i saw\" Tash: \"like right in front of him\" Brooke: \"he was upside down on the rug he didnt see anything\""
                }
              ]
            },
            {
              "you": "(Stop fighting. Lie back and let them.)",
              "them": [
                {
                  "note": "You stop struggling. You lie flat on the rug, laughing up into the fig tree, lilac toes wriggling in four people's hands."
                },
                "\"He's given up!\" Tash says. \"He's just lying there!\"",
                "\"He loves it,\" Tyler says. \"Zo. He loves this.\"",
                {
                  "note": "It goes on. They take turns. Tyler pulls up a bit of grass and does it between your toes. You're crying laughing."
                },
                {
                  "note": "After a while Zoe stops. She sits back on her heels and just watches you."
                },
                "{name}. You can say stop, you know."
              ],
              "replies": [
                {
                  "you": "(Gasping) Stop! Stop. Okay. Stop.",
                  "outcome": "kept",
                  "spark": 6,
                  "gaydar": 82,
                  "them": [
                    {
                      "note": "They stop as soon as you say it and let go."
                    },
                    "\"Three minutes,\" Brooke says. \"I timed it for the group chat.\"",
                    {
                      "note": "Tyler pats your bare foot twice. \"Good effort, champ.\""
                    },
                    {
                      "note": "Then he gets up and stretches. \"Zo, ice cream? Van's over there.\""
                    },
                    {
                      "note": "She looks at you, lying there. Then she goes with him. They're gone a while."
                    }
                  ],
                  "after": "Zoe, to Brooke, that night: \"he was so happy brooke\" \"like just lying there laughing\" \"idk. it was weird to watch\" Brooke: \"and tyler?\" Zoe: \"we got ice cream\" Brooke: \"for 40 minutes\""
                },
                {
                  "you": "(Can't speak. Just keep laughing.)",
                  "outcome": "kept",
                  "spark": 4,
                  "gaydar": 84,
                  "them": [
                    {
                      "note": "You can't get a word out. You're laughing too hard. They keep going."
                    },
                    "Okay. Stop. Everyone stop. He can't breathe.",
                    {
                      "note": "Everyone stops and lets go at once."
                    },
                    "\"He didn't say stop,\" Tyler says.",
                    "He couldn't. Look at him.",
                    {
                      "note": "You're lying half off the rug in the grass, socks gone, cake on your foot, still giggling at nothing. The little girl from the next rug has come over to look at your toes."
                    },
                    {
                      "note": "Zoe looks at you for a long time. Then she gets up and brushes off her dress."
                    },
                    "Tyler, you driving? Can you drop me home?",
                    "\"Yeah. Course.\""
                  ],
                  "after": "Tash, to the group chat: \"[video] four minutes\" Zoe: \"please stop\" Brooke: \"zo left with tyler\" Zoe: \"he dropped me home\" Tash: \"he dropped you home at 11pm\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "Being that ticklish in front of people is embarrassing, and that's all it is. They stopped when you said stop, or when you couldn't."
    },
    {
      id: "c6h", route: "zoe", gaydar: 97, gaydarSays: "You wore my platforms to Brooke's. Everyone saw, {name}. Everyone.", title: "In the driveway", contact: "Zoe", irl: true,
      intro: "You've been going out with Zoe for six weeks. Today was her friend Brooke's barbecue in Ashgrove. You wore little floral shorts, a pastel cropped tee, her white platform sandals, toes painted lilac, and a bit of gloss. Brooke's boyfriend asked Zoe, in front of everyone, if you were her gay best friend. She laughed. She hasn't said much since. Now she's parked in your driveway with the engine off.",
      outfitPrompt: "What did you wear to Brooke's barbecue?",
      outfits: [{"label": "Board shorts and a tee, but her platforms and lilac toes", "gaydar": -3, "intro": "You've been going out with Zoe for six weeks. Today was her friend Brooke's barbecue in Ashgrove. Board shorts and a plain tee, like the other guys. But your toes were painted lilac and you were wearing her white platform sandals, and that's all anyone looked at. Brooke's boyfriend asked Zoe, in front of everyone, if you were her gay best friend. She laughed. She hasn't said much since. Now she's parked in your driveway with the engine off."}, {"label": "Floral shorts, a cropped tee, her platforms, lilac toes, gloss"}, {"label": "Her floral sundress, her platforms, lilac toes, gloss and lashes", "gaydar": 2, "intro": "You've been going out with Zoe for six weeks. Today was her friend Brooke's barbecue in Ashgrove. You borrowed her floral sundress and her white platform sandals, painted your toes lilac, and did gloss and lashes. Brooke's boyfriend asked Zoe, in front of everyone, if you were her gay best friend. She laughed. She hasn't said much since. Now she's parked in your driveway with the engine off.", "at": 3, "them": ["And you wore my sundress, {name}. To Brooke's. Everyone knows it's mine."]}],
      them: [
        { note: "She doesn't take her hands off the steering wheel." },
        "Can we talk before you go in?",
        "I've been thinking about it the whole drive home. What Jayden said. And the way everyone went quiet after, like they were all waiting to see what I'd say.",
        "I'm just going to say it, okay. I don't think this is working. And I think it's because you don't actually want to be with a girl."
      ],
      replies: [
        { you: "What? No. That's not... I'm not gay.",
          them: [
            "Okay. Then why did you spend half an hour talking to Brooke about her nails and like two minutes talking to me.",
            "And the toes. And my platforms. And every time we're at mine you'd rather go through my wardrobe than, like. Kiss me.",
            "I'm not trying to be mean. I just need you to tell me something that makes sense, because I feel like I'm going crazy."
          ],
          replies: [
            { you: "I just like clothes. Lots of straight guys do.",
              them: [
                "Name one. Name one straight guy we know who'd wear my sandals.",
                { note: "You can't." },
                "Yeah.",
                "I don't need you to say it. I just can't be your girlfriend while you work it out. It's embarrassing, {name}. Tash asked me in the kitchen if you'd come out yet. Like everyone knew except me."
              ],
              replies: [
                { you: "Please don't do this.",
                  them: [
                    "I have to.",
                    "If I don't do it now I'll just end up doing it in three months."
                  ] },
                { you: "Tash should mind her own business.",
                  them: ["Probably. But she wasn't wrong, was she.", { note: "You don't answer. She nods at the windscreen." }] }
              ] },
            { you: "You're overthinking it.",
              them: [
                "Am I? Everyone at that barbecue was thinking it. Jayden just said it out loud.",
                "I'm not overthinking it, {name}. I was there."
              ] },
            { you: "(Say nothing.)",
              them: [
                { note: "The silence goes on long enough that a car goes past and its headlights slide across the dash." },
                "Yeah. I thought so.",
                "I'm not angry. I'm just tired of pretending I can't see it."
              ] }
          ] },
        { you: "Please. Give me another chance. I'll tone it down.",
          them: [
            "Tone what down? The toes? The platforms?",
            "{name}, no. I don't want you to tone it down. That's worse.",
            "Then you'd be miserable and I'd be going out with someone who's pretending. And one day you'd meet some guy in the Valley and that'd be it. I'd rather it hurt now."
          ],
          replies: [
            { you: "I wouldn't do that to you.",
              them: [
                "You wouldn't mean to.",
                "You're really nice. I just don't fancy you anymore. Sorry. I don't know how else to say it."
              ] },
            { you: "I can change. I can be what you want.",
              them: [
                { note: "She finally looks at you. Her eyes are wet." },
                "See, that's the bit I hate. I don't want you to change.",
                "You looked so happy today. Just be that. Not with me though."
              ],
              replies: [
                { you: "(Start crying.)",
                  them: [
                    { note: "She reaches over the gearstick and holds your hand. For a while neither of you says anything." },
                    "I know. Me too."
                  ] },
                { you: "Okay.", them: ["Okay.", "Go inside and text Jess or something. Don't just sit in there on your own."] }
              ] },
            { you: "Just one more date. Somewhere just us.",
              them: [
                "And what, you wear jeans and a hoodie and we both pretend?",
                "I don't want one more date where I'm watching you watch the waiter.",
                "When I think about us I just see you on my bed going through my wardrobe. That's what Brooke does. I don't need two Brookes."
              ] }
          ] },
        { you: "(Start crying.)",
          them: [
            { note: "She reaches over the gearstick and puts a hand on your arm." },
            "Oh, {name}. Don't. You'll set me off.",
            { note: "Too late. She wipes her face with the back of her hand." },
            "I really liked you. I still do, that's the stupid part.",
            "But I want someone who actually wants me. And you don't. Not like that."
          ],
          replies: [
            { you: "I'm sorry. I'm so sorry.",
              them: [
                "I know you are. I'm not angry. Well, I'm a bit angry. Mostly I'm sad.",
                "Go inside. Have a shower or something."
              ] },
            { you: "I don't know what's wrong with me.",
              them: [
                "Nothing's wrong with you. Hey. Look at me.",
                "You're gay, {name}. You've been trying so hard not to be and it's just. It's really obvious."
              ],
              replies: [
                { you: "...yeah.", gaydar: 100, them: ["Yeah.", { note: "She squeezes your arm once, then lets go." }] },
                { you: "Don't say that word.",
                  them: ["Okay. I won't.", "Brooke will, though. Probably tonight."] }
              ] }
          ] },
        { you: "You're right. I think I'm gay.", gaydar: 100,
          them: [
            { note: "She lets go of the wheel and laughs, the kind of laugh that's half crying." },
            "Oh my god. Okay. Okay.",
            "I think I sort of knew. Since trivia probably. It's different hearing it though.",
            "Are you okay? Have you said that to anyone before?"
          ],
          replies: [
            { you: "No. You're the first.",
              them: [
                "Me? In my car?",
                "Oh my god, {name}.",
                "No, I'm glad it was me. I think."
              ] },
            { you: "Nicole's been calling me babe for months. She probably knows.",
              them: [
                "Nicole knew before me? Great.",
                "No sorry. That's good. I'm glad someone knew.",
                "I'm not going to be weird about it, I promise. Maybe give Brooke's stuff a miss for a bit though."
              ] },
            { you: "Are you going to tell everyone?",
              them: [
                "No. God, no.",
                "I mean Brooke's going to know from my face. But I won't say anything."
              ] }
          ] },
        { you: "So because I painted my toes, I'm gay now?",
          them: [
            "No. It's not the toes. It's everything.",
            "And don't make this about me being judgy. I stood up for you all afternoon. Jayden made his comment and I laughed it off. Tash asked me in the kitchen if you'd come out yet and I said he's not gay, and she looked at me like I was an idiot. I've been defending you all day and I'm sick of it."
          ],
          replies: [
            { you: "I didn't ask you to defend me.",
              them: [
                "No, you didn't. You didn't even notice.",
                "You were having the best time. I was in the kitchen with Tash."
              ] },
            { you: "...Tash asked if I'd come out?",
              them: [
                "Yeah. That's where everyone's at, {name}."
              ] }
          ] },
        { you: "Is this because I looked better than you today?",
          them: [
            { note: "She snorts, despite herself." },
            "Honestly? A bit. Those platforms were a choice.",
            "But no.",
            "Brooke took a photo of you by the pool and you looked at it for like ten minutes. You've never once looked at a photo of us like that."
          ],
          replies: [
            { you: "That's not fair.", them: ["Isn't it?", "Go look at your camera roll."] },
            { you: "...yeah. That's fair.", them: ["Yeah.", "Sorry."] }
          ] },
        { you: "Jayden was joking. It was a joke.",
          them: [
            "Was it? Everyone laughed like it wasn't.",
            "And I laughed because he's kind of right.",
            "You hug me and pat my back. Like twice. That's how Brooke hugs me."
          ],
          replies: [
            { you: "I hug you fine!", them: ["You hug me like Brooke does. And you kiss me on the forehead, {name}. Every time."] },
            { you: "(Laugh.) He's not wrong, is he.", gaydar: 98, them: ["No. He's not.", { note: "She laughs too. It's a wet laugh." }, "Six weeks. Oh my god. Brooke's going to be unbearable."] }
          ] },
        { you: "Can we still be friends?",
          them: [
            "Not yet. I need a bit.",
            "But yeah. Probably. At some point."
          ] }
      ],
      after: "Zoe, to Brooke, at midnight: \"ok we broke up\" Brooke: \"oh no\" Brooke: \"was it the gay thing\" Zoe: \"yeah\" Zoe: \"i dont want to talk about it\" Brooke: \"ok\" Zoe: \"can u come over tho\"",
      debrief: "Getting dumped for being gay hurts in a strange way, because she said the thing you hadn't. Whatever you said in that car was a normal thing to say."
    },
    {
      id: "zoe-end", route: "zoe", gaydar: 99, spark: 0, gaydarSays: "Kyle calls my platforms \"the tall shoes\". I've never been happier.", title: "Zoe and Kyle", contact: "Zoe", irl: true,
      outfits: [
        { label: "Board shorts and a tee", gaydar: -2, intro: "Two months later. Brooke's next barbecue. Brooke invited you herself (\"we're friends now, deal with it\"). Board shorts, a tee. Zoe's there with a guy in a trucker cap and a grease-stained tank top who's already manning the grill. Kyle. Mechanic." },
        { label: "Your own floral sundress, platforms and lilac toes", gaydar: 1, intro: "Two months later. Brooke's next barbecue. You came in your OWN floral sundress this time, your own platforms and lilac toes. Zoe's there with a guy in a trucker cap and a grease-stained tank top who's already manning the grill. Kyle. Mechanic.", them: [{ note: "Zoe sees your sundress and laughs out loud. \"You got your OWN,\" she says." }] }
      ],
      them: [
        "Hi. Oh my god, hi. You came.",
        { note: "She hugs you with one arm. The other one's holding Kyle's beer." },
        "This is Kyle. Kyle, this is {name}. We... you know. Before.",
        "\"Hey man,\" Kyle says, flipping a hot dog. \"Hot dog?\" He hasn't looked at your outfit once. He's looking at the sausages.",
        "He's a mechanic. He has zero opinions about anything I wear, it's amazing.",
        "Like I asked him if this top was okay and he said \"yeah\". Just yeah. That's it.",
        {"if":"zoe-ambush=held","text":"Brooke still talks about the picnic, by the way. How Tyler couldn't make you laugh. It's her favourite story."},
        {"if":"zoe-ambush=cracked|begged|kept","text":"\"Oh, wait,\" Kyle says, looking up from the hot dogs. \"Are you the guy from the park video? Brooke showed me. With the little girl doing the noise.\""},
        {"if":"zoe-ambush=cracked|begged|kept","note":"Zoe goes red and says \"Kyle\". Kyle says \"what? it was funny\" and goes back to the sausages."}
      ],
      replies: [
        { you: "Hi Kyle! Yes please, thanks babe. Zo, he's lovely. I'm really happy for you.",
          them: [
            "\"Babe,\" Kyle repeats, cheerfully, and hands you a hot dog with ketchup. \"Here you go.\"",
            "He didn't even notice you called him babe. He never notices anything.",
            "You look good, {name}. Really."
          ],
          replies: [
            { you: "Thanks. I feel good actually.", them: ["Good.", "Brooke wants a photo of you. She's posting it. She says you're her 'favourite plus one'."] },
            { you: "Thanks, Zo. I'm glad you've got someone who doesn't steal your platforms.", them: ["\"Me too,\" she says. Then: \"I do miss someone doing my eyeliner though.\"", "\"I'm right here,\" you say. She laughs."] }
          ] },
        { you: "(Walk up to the grill.) Kyle. Hi. Can we talk? About Zoe.",
          them: [
            "\"Yeah, go for it man,\" Kyle says, not looking up from the grill.",
            { note: "He's got grease on his forearms. He glances over and smiles at you sideways, and your stomach does a thing. You stand there with your hands clasped in front of you like you're waiting to order." },
            "\"Hold these for us?\" He hands you the tongs. \"Gotta grab more onions. Try not to break a nail.\""
          ],
          replies: [
            { you: "(Wait for him. Holding the tongs.)",
              them: [
                { note: "He comes back. You've had four minutes to practise." },
                "\"Right. Zoe,\" Kyle says. \"Go.\"",
                "\"I want her back,\" you say. It comes out very small. \"Sorry.\"",
                "\"Ha! Okay,\" Kyle says, and takes the tongs back. \"Good luck with that, man. Hot dog?\"",
                "\"Sauce is on the table, sweetheart.\"",
                { note: "He goes back to the onions, still laughing. That's the whole conversation for him." },
                "Zoe, from the deck: \"Did you just ask Kyle for me back and he gave you a hot dog?\"",
                "\"Yes,\" you say.",
                "She covers her face. \"You're so cute. I hate it. You're so cute.\"",
                { note: "Later she comes and pats your cheek on her way past with the salad." },
                "\"You know you're not really my type anymore, right? You're more like my Brooke.\""
              ] },
            { you: "(Hand the tongs to Jayden and walk away very fast.)", them: ["\"Good chat, man!\" Kyle yells after you.", { note: "Jayden, Brooke's boyfriend, takes the tongs and looks at you. \"Gay best friend,\" he says, and nods, like that settles it." }] }
          ] },
        { you: "(To Zoe) A trucker cap, Zo. You used to make fun of trucker caps.",
          them: [
            "I know. Shut up.",
            "He wears it backwards when he's under the car. It's actually really hot.",
            "And he's taller than me in my platforms. You and me were the same height in them, that was so weird."
          ] },
        { you: "Hi. I'm just going to go find Brooke.",
          them: ["\"No problem man. Hot dog's here when you want one.\"", "Zoe, quietly: \"Thanks for coming. Really.\"", "\"Brooke made me,\" you say. \"I know,\" she says. \"I'm still glad.\""] }
      ],
      after: "Brooke posts a photo that night: you doing Zoe's eyeliner on the deck while Kyle holds a sausage in the background. Caption: \"the ex, the new bf and the gay best friend 💕\". Zoe comments: \"the ex and the gay best friend are the same person brooke\". Brooke replies: \"yeah??\".",
      debrief: "You went to a barbecue and watched your ex with someone new. That's hard, and you stayed."
    },
    {
      id: "sophie-1", route: "sophie", gaydar: 15, gaydarSays: "He's sweet. He has a lot of opinions about Taylor Swift. A lot.", title: "Riverside", contact: "Sophie",
      outfits: [
        { label: "A navy shirt and chinos", gaydar: -5, intro: "Sophie: a paralegal, calm, funny in a dry way. You met through Dani's work. First date: dinner at Riverbar at Eagle St. You wore a navy shirt and chinos. She wore a black jumpsuit and gold earrings and you knocked your water over before the entrees came." },
        { label: "A cream shirt, your rings and a bit of tinted balm", intro: "Sophie: a paralegal, calm, funny in a dry way. You met through Dani's work. First date: dinner at Riverbar at Eagle St. A cream shirt, your rings and a bit of tinted balm. She wore a black jumpsuit and gold earrings and noticed your rings first thing." }
      ],
      them: ["Hi, thanks for tonight. I don't usually say this after a first date but I'd like to do it again.", "Also no guy has ever asked me my favourite Taylor era before. Or had that many feelings about it.", "Folklore btw. In case you were still wondering."],
      replies: [
        { you: "Folklore's a good answer. Still wrong though, it's Reputation. And yes, I'd love to.",
          gaydar: 20,
          them: ["Of course it's Reputation.", "Ok. I'll cook. Friday?", "Bring wine. Not a sweet one please."],
          replies: [
            { you: "Friday's good. Dry, I promise.", them: ["Good."] },
            { you: "What are you cooking? So I get the right one.", them: ["Pasta probably.", "Don't stress about the wine."] }
          ] },
        { you: "I had a really good time. Second date, definitely.",
          them: ["Good.", "Friday? I'll cook. You're on dessert.", "Don't stress about it. I can tell you're going to stress about it."],
          replies: [
            { you: "I'm already stressing. Friday's good.", them: ["Ha. Ok."] },
            { you: "I'm not overthinking. I've just been writing this text for twenty minutes.", them: ["That's overthinking.", "Friday."] }
          ] },
        { you: "Hang on. Folklore? Over 1989?",
          gaydar: 20,
          them: ["Yes. And I'm not doing this over text.", "Come over Friday, I'll cook, you can argue with me in person."] }
      ],
      after: "Sophie, to her friend Kirra: \"first date was good. hes sweet\" Kirra: \"just sweet?\" Sophie: \"no. good sweet\" Sophie: \"i think\" Kirra: \"send a pic\""
    },
    {
      id: "sophie-2", route: "sophie", gaydar: 50, gaydarSays: "I got the nail polish out as a joke. He didn't take it as one.", title: "Movie night", contact: "Sophie", irl: true,
      outfits: [
        { label: "Sweatpants and a hoodie. Cosy.", gaydar: -5, intro: "Six weeks in. Movie night at Sophie's flat in Paddington. You came in sweatpants and a hoodie. She's got a face mask on, a bottle of wine open and her nail polish laid out on the coffee table like she's planning something." },
        { label: "Sweatpants, a cropped hoodie and a lip oil", intro: "Six weeks in. Movie night at Sophie's flat in Paddington. You came in sweatpants, a cropped hoodie and a lip oil. She's got a face mask on, a bottle of wine open and her nail polish laid out on the coffee table like she's planning something." }
      ],
      them: [
        "Okay. Mamma Mia or The Devil Wears Prada. You choose.",
        { note: "She's painting her own nails. She's not very good at it." },
        "Actually, while you pick. Do you want me to do yours? As a joke. I bought this pink and I'm never going to wear it."
      ],
      replies: [
        { you: "Yes. Do my toes too. And Devil Wears Prada, obviously, I've seen it like eleven times.",
          gaydar: 60,
          them: [
            "Eleven.",
            { note: "She does your nails, then your toes. When the cerulean bit comes on you say the whole thing along with Meryl, with the hands." },
            "You know it word for word.",
            "I was kidding about the nails, by the way."
          ],
          replies: [
            { you: "Was I supposed to be joking? They look amazing. Look at them. Soph. LOOK.", them: ["Yeah. They're better than mine.", { note: "She smiles, but she watches you admire your toes for a very long time." }] },
            { you: "Sorry, I got carried away. Do you want me to take it off?", them: ["No, leave it. It's nice on you.", "Nicer than on me, which is annoying."] }
          ] },
        { you: "Ha, okay. One nail. And Mamma Mia.",
          them: [
            "One nail. Okay.",
            { note: "She paints your pinky hot pink. You look at it all through Mamma Mia. At 'Dancing Queen' you hold your hand up to the light." },
            "You've looked at that nail more than you've looked at me tonight.",
            "It's fine. It's a good pink."
          ],
          replies: [
            { you: "It's a really good pink. Can you do the rest?", gaydar: 60, them: [{ note: "She does the rest without saying anything. You watch the rest of the movie with your hands flat on your knees so they dry." }] },
            { you: "Sorry. I'm looking at you now.", them: ["Mm.", { note: "She leans her head on your shoulder. You look at your nail again when she's not watching." }] }
          ] },
        { you: "As a joke? Soph. I'm not a ten-year-old at a sleepover.",
          them: [
            "Okay.",
            { note: "She holds the hot pink up and waits." },
            "You're looking at it. You've been looking at it since you sat down."
          ],
          replies: [
            { you: "...Fine. One hand.", gaydar: 58, them: [{ note: "She does one hand. You hold it up to the lamp before she's finished the second coat." }, "Mm."] },
            { you: "(Put it down.) Devil Wears Prada.", them: [{ note: "Halfway through, you mouth the whole cerulean speech along with Meryl. Sophie pauses it and looks at you." }, "You know this word for word, don't you."] }
          ] }
      ],
      after: "Sophie, to Kirra: \"ok so i got my nail polish out as a joke\" Kirra: \"and\" Sophie: \"he didnt think it was a joke\" Kirra: \"soph\" Sophie: \"i know\""
    },
{
      "id": "sophie-feet",
      "route": "sophie",
      "gaydar": 76,
      "gaydarSays": "Kirra posted it. My boss has seen it, {name}. My boss.",
      "title": "Game night",
      "contact": "Sophie",
      "irl": true,
      "intro": "Two months in. Game night at Kirra's flat. Socks off at the door, Kirra's rule, because of the rug. Your toes are hot pink. Sophie did them properly the week after movie night. Kirra's flatmate Ethan is a personal trainer, and Sophie mentioned twice in the car that he's \"just a friend\". Kirra has her phone out. Kirra always has her phone out.",
      "them": [
        {
          "note": "You peel your socks off at the door. Kirra's phone swings round to your feet straight away."
        },
        "\"Hot pink! Soph, did you do these?\"",
        "I did. He picked the colour.",
        {
          "note": "Ethan's lying on the couch. He sits up to have a look."
        },
        "\"Nice,\" he says. \"Bet he's ticklish.\"",
        "\"I'm not,\" you say. Kirra hits record."
      ],
      "replies": [
        {
          "you": "(Sit on the rug and play it cool.)",
          "them": [
            {
              "note": "You sit on the rug with your legs out. Ethan slides off the couch and sits at your feet, cross-legged."
            },
            "\"Cool. So you won't mind.\"",
            {
              "note": "He takes your ankle and digs his fingers in under your toes. You go straight over backwards on the rug, laughing, flapping your arms."
            },
            "\"NOT THE TOES. NOT THE TOES!\"",
            "\"Kirra, are you getting this?\" \"I'm getting ALL of this.\"",
            {
              "note": "Sophie's on the couch, laughing, with her feet tucked up. Ethan glances up at her while he's doing it, like he's checking she's watching."
            }
          ],
          "replies": [
            {
              "you": "Okay! Stop! Red! Red!", "spark": 22,
              "them": [
                {
                  "note": "He stops and lets go and puts his hands up."
                },
                "\"Red's red,\" he says. \"Fair.\" He gets up and sits on the couch. Next to Sophie.",
                {
                  "note": "You're lying on Kirra's rug, red-faced, pulling your hair off your forehead."
                },
                "\"Posting it,\" Kirra says.",
                "Kirra, no.",
                "\"Posting it with a little crown on his head,\" Kirra says, and does."
              ]
            },
            {
              "you": "(Laughing) Sophie! Help me! Get him off!", "spark": 12,
              "gaydar": 80,
              "them": [
                "\"Ethan, stop,\" Sophie says. She's laughing too hard for it to work.",
                {
                  "note": "He keeps going for about three more seconds, then lets go."
                },
                "\"She said stop, so I stopped,\" he says, and looks at her. \"I always do what Soph says.\"",
                {
                  "note": "Sophie goes a bit pink. She throws a cushion at him. He catches it and keeps it."
                },
                "\"You yelled for your girlfriend to save you,\" Kirra says. \"From being tickled. I'm putting that in the caption.\""
              ]
            }
          ]
        },
        {
          "you": "(Keep your feet under the coffee table the whole night.)", "spark": 24,
          "after": "Kirra, to Sophie, the next morning: \"[video] 'I'M GOING TO DIE'\" \"2400 views\" Sophie: \"delete it\" Kirra: \"no\" Kirra: \"ethan sat on your chair all night\" Sophie: \"on the ARM of my chair\"",
          "gaydar": 74,
          "them": [
            {
              "note": "You play three rounds of Codenames with your feet hidden under the coffee table. It works until you get up for a drink."
            },
            {
              "note": "Ethan's waiting. He catches your ankle as you step over his legs, you topple onto the couch, and he sits on the end with your ankles in his lap."
            },
            "\"Got you.\"",
            {
              "note": "You're laughing before he even starts. When he does start, you're kicking, howling, grabbing a cushion over your face. Kirra's phone is right there. Sophie's crying laughing."
            },
            "\"Stop! Stop! I'm going to die!\"",
            {
              "note": "He stops and lets your feet go."
            },
            "\"You're fine,\" he says, and messes up your hair. Then he sits on the arm of Sophie's chair for the rest of the night."
          ]
        }
      ],
      "after": "Kirra, to Sophie, the next morning: \"2400 views\" Sophie: \"delete it\" Kirra: \"no. top comment is 'the way he screamed NOT THE TOES'\" Kirra: \"ethan commented 'ticklish AND a pushover'\" Sophie: \"hes not a pushover\" Kirra: \"ok\" Kirra: \"you liked ethans comment btw\"",
      "debrief": "A video of you online feels huge for about a day, then people scroll past. It stopped when someone said stop."
    },
    {
      "id": "sophie-ambush",
      "route": "sophie",
      "gaydar": 79,
      "irl": true,
      "title": "The rematch",
      "contact": "Sophie",
      "gaydarSays": "You double-knotted them. Ethan still had them off in about ten seconds.",
      "intro": "Two weeks after game night. Kirra invited you back, \"for a rematch\", and you know what that means. So you've kept your sneakers on and double-knotted them. Ethan's on the couch in his gym gear. Kirra's phone is already out.",
      "them": [
        {
          "note": "You sit down on the rug with your knees up and your sneakers firmly on. Kirra looks at your feet. Then at Ethan."
        },
        "\"Socks off at the door, {name}. House rule.\"",
        "\"Not tonight,\" you say. \"I'm keeping them on. I know what you two are doing.\"",
        "\"We're not doing anything,\" Ethan says. \"Are we, Kirra?\"",
        "\"Nothing at all,\" Kirra says, and hits record.",
        {
          "note": "Ethan gets off the couch, sits on the rug and gets hold of your ankle like he's about to stretch out a client's hamstring."
        },
        "\"No. Ethan. No! I said they're staying on!\"",
        "\"Double knots,\" he says, working on them anyway. \"Cute.\"",
        {
          "note": "You kick. He just holds the ankle tighter. Kirra puts her phone in her teeth and grabs your other foot. Sophie, laughing, sits behind you and holds your arms. \"Sorry,\" she says. She doesn't sound sorry."
        },
        {
          "note": "Both sneakers off. Then the socks, pulled off by the toe, slowly. Still hot pink."
        },
        "\"Pink!\" Kirra says round the phone. \"Soph, your pink!\"",
        "I know. I did a good job.",
        "\"Right,\" Ethan says. \"Rematch. Three, two...\"",
        {
          "note": "He starts. Kirra starts too, phone in one hand, tickling with the other."
        }
      ],
      "replies": [
        {
          "you": "(Lock up. Stare at the ceiling fan. Do not give Kirra the video.)",
          "them": [
            {
              "note": "You stare at the ceiling fan. Ethan's knuckles go up the arch, slow and firm. Kirra's nails go fast under the toes. Your whole body goes rigid."
            },
            "\"He's resisting!\" Kirra says. \"He's been training!\"",
            "\"Soph,\" Ethan says. \"Let go of his arms. Take a foot.\"",
            {
              "note": "Sophie lets go of your arms and takes over the other foot from Kirra, who sits back to film properly. Now it's Ethan and Sophie."
            }
          ],
          "replies": [
            {
              "you": "(Bite your lip. Not a sound.)",
              "them": [
                {
                  "note": "You hold it. Nothing comes out. Your eyes stream. The pink toes curl and cramp."
                },
                "\"This is not the same man as last time,\" Kirra says. \"This is not the same man.\"",
                "\"Soph,\" Ethan says, \"you must know a spot.\"",
                {
                  "note": "Sophie looks at your foot, then at you. She's got a little smile."
                }
              ],
              "replies": [
                {
                  "you": "(Look at her.) Soph. You wouldn't.",
                  "outcome": "held",
                  "spark": 30,
                  "them": [
                    {
                      "note": "She holds your eye for a second. Then she lets go of your foot and pushes Ethan's hands off the other one."
                    },
                    "Okay, that's enough. Kirra, you can stop, he's not going to do it.",
                    "\"He's so close though...\"",
                    "He's not. Look at him.",
                    {
                      "note": "Ethan lets go. Sophie hands you your socks and sits next to you while you put them on, her knee against yours. Kirra films that instead."
                    },
                    "\"Okay,\" Ethan says, a bit flat, and goes to the kitchen. He's in there a while."
                  ],
                  "after": "Kirra, to Sophie: \"[video] he didnt laugh\" Sophie: \"dont post that\" Kirra: \"why its a good one\" Sophie: \"because he'll hate it\" Kirra: \"ethans been in the kitchen for 20 min\""
                },
                {
                  "you": "(Say nothing. Keep holding.)",
                  "outcome": "cracked",
                  "spark": 18,
                  "them": [
                    {
                      "note": "Sophie shuffles down and goes for your little toe, the one she always has to paint twice."
                    },
                    {
                      "note": "You last half a second. Then you shriek, loud, and you're giggling helplessly, and Ethan and Kirra pile back in."
                    },
                    "\"SOPHIE!\" Kirra screams. \"Soph broke him!\"",
                    "I've done your nails, {name}. I know where everything is.",
                    {
                      "note": "They stop when you finally gasp \"stop\". Sophie fist-bumps Ethan. Kirra gets that on video too."
                    }
                  ],
                  "after": "Kirra, to Sophie: \"[video] soph found it\" Sophie: \"im a bit proud tbh\" Kirra: \"u fist bumped ethan\" Sophie: \"everyone fist bumps ethan\" Kirra: \"mm\""
                }
              ]
            },
            {
              "you": "(You can't. It comes out as a shriek.)",
              "them": [
                {
                  "note": "You break. You shriek, then giggle, high and helpless, and then you're twisting all over the rug trying to get your feet back. Not a chance."
                },
                "\"YES!\" Kirra says. \"Rematch to us!\"",
                "\"Same as last time,\" Ethan says, not stopping. \"Ticklish and a pushover.\"",
                {
                  "note": "Sophie's laughing so hard she's lying on the rug with you. Kirra's phone is right up close to your face."
                }
              ],
              "replies": [
                {
                  "you": "(Giggling) Okay! You win! You win, you win!",
                  "outcome": "cracked",
                  "spark": 18,
                  "them": [
                    {
                      "note": "They stop and let go. Ethan holds his hands up like he's racked a bar."
                    },
                    "\"Two nil.\"",
                    {
                      "note": "You curl up with your pink toes tucked under Sophie's leg. You're red to your ears. Kirra's already typing a caption."
                    },
                    "That was so loud.",
                    {
                      "note": "She's still giggling. Ethan sits down right next to her and she doesn't move over."
                    }
                  ],
                  "after": "Kirra, to Sophie: \"posting it\" Sophie: \"don't\" Kirra: \"caption: 'rematch: still ticklish, still a pushover'\" Sophie: \"KIRRA\" Kirra: \"ethan already liked it\""
                },
                {
                  "you": "(Red, giggling) Kirra, put the phone down! Stop!",
                  "outcome": "cracked",
                  "spark": 16,
                  "them": [
                    {
                      "note": "They stop as soon as you say it and let go."
                    },
                    "\"Stopped! Hands off!\" Ethan says.",
                    {
                      "note": "You hug your knees with your feet hidden under you. Your hair's everywhere. Kirra's still filming your face."
                    },
                    "Are you okay? You did a full scream.",
                    {
                      "note": "Then Kirra plays the scream back on her phone and Sophie loses it. Ethan's laughing too, and every time they look at each other they set each other off again."
                    }
                  ],
                  "after": "Sophie, to Kirra: \"i feel bad\" Kirra: \"u laughed the hardest\" Sophie: \"i KNOW\" Kirra: \"you and ethan couldnt even look at each other\" Sophie: \"it was a funny noise kirra\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're giggling before they even start.)",
          "them": [
            {
              "note": "You're gone straight away. Giggling, squealing, kicking at nothing, before Ethan's even properly started."
            },
            "\"Oh, he's WORSE!\" Kirra says. \"He's worse than last time!\"",
            "\"Soph, get in,\" Ethan says. \"Everyone on a foot.\"",
            {
              "note": "Sophie, laughing, lets go of your arms and takes the toes on one foot. Kirra props her phone against the couch so she can use both hands. Three of them."
            },
            "You said you weren't ticklish! At game night! You literally said it!"
          ],
          "replies": [
            {
              "you": "(Giggling) Please! Please, please stop!",
              "them": [
                {
                  "note": "They stop and let go straight away. You lie on the rug panting, arm over your eyes."
                },
                "\"That's a please,\" Ethan says. \"Fine.\"",
                "\"Got it,\" Kirra says.",
                {
                  "note": "Then Sophie pulls your foot back into her lap and taps the little toe."
                },
                "Ten more seconds? Just me. I'll be nice."
              ],
              "replies": [
                {
                  "you": "(Pull it back.) No! I'm done, Soph. Done.",
                  "outcome": "begged",
                  "spark": 12,
                  "them": [
                    "Fine. Spoilsport.",
                    {
                      "note": "You sit with your feet tucked under a cushion for the rest of the night. Ethan's put your sneakers on top of the fridge."
                    },
                    "\"Want them, sweetheart? Reach.\"",
                    {
                      "note": "You can't reach. Sophie can't either. Ethan picks her up round the waist so she can get them, and she shrieks, and Kirra films all of it."
                    }
                  ],
                  "after": "Kirra, to Sophie: \"he begged lol\" Kirra: \"and then ethan picked u up\" Sophie: \"to get his SHOES\" Kirra: \"u didnt have to hold on that long\""
                },
                {
                  "you": "(Still giggling) ...Fine. Ten. Only you.",
                  "outcome": "kept",
                  "spark": 6,
                  "gaydar": 83,
                  "them": [
                    {
                      "note": "Kirra counts down from ten. Sophie goes straight for the little toe. You scream laughing from 'ten'."
                    },
                    {
                      "note": "At 'one' Ethan and Kirra pile back in. You're laughing too hard to protest. They stop when you finally squeak \"stop\"."
                    },
                    "\"He asked!\" Kirra says. \"On camera! He asked for it!\"",
                    "I said ten seconds. You're the one who said yes.",
                    {
                      "note": "She's sitting back on her heels, looking at you. Ethan sits down beside her and bumps her shoulder. She bumps it back."
                    }
                  ],
                  "after": "Kirra, to Sophie: \"[video] he ASKED\" Kirra: \"4000 views\" Kirra: \"also u and ethan were doing the shoulder thing for an hour\" Sophie: \"what shoulder thing\" Kirra: \"soph\""
                }
              ]
            },
            {
              "you": "(Stop fighting. Lie back on the rug and let them.)",
              "them": [
                {
                  "note": "You stop fighting. You lie flat on Kirra's rug, laughing at the ceiling fan, pink toes wriggling in three people's hands."
                },
                "\"He's given up!\" Kirra says. \"He's just letting us!\"",
                "\"Look at him, Soph,\" Ethan says. \"Best night of his life.\"",
                {
                  "note": "It goes on. They take turns. Ethan does each toe one at a time, counting reps out loud. You're crying from laughing."
                },
                {
                  "note": "After a while Sophie stops. She sits back and watches your face."
                },
                "You know you can tell them to stop, right?"
              ],
              "replies": [
                {
                  "you": "(Gasping) Okay, stop. Stop! I mean it.",
                  "outcome": "kept",
                  "spark": 6,
                  "gaydar": 83,
                  "them": [
                    {
                      "note": "They stop as soon as you say it and let go."
                    },
                    "\"Three minutes ten,\" Kirra says. \"New record. Posting.\"",
                    {
                      "note": "Ethan slaps the sole of your foot, once. \"Good set.\""
                    },
                    {
                      "note": "Then he gets up and stretches. \"Soph, want to walk down to get gelato?\""
                    },
                    {
                      "note": "She looks at you on the rug. Then she gets her bag. They're gone for over an hour. Kirra keeps filming you in case you do anything else."
                    }
                  ],
                  "after": "Sophie, to Kirra: \"is he still on your rug\" Kirra: \"yes. hes eating your chips\" Kirra: \"where are u\" Sophie: \"still at the gelato place\" Kirra: \"its been an hour\" Sophie: \"its open late\""
                },
                {
                  "you": "(You can't get a word out.)",
                  "outcome": "kept",
                  "spark": 4,
                  "gaydar": 85,
                  "them": [
                    {
                      "note": "You can't get a word out. You're laughing too hard. They keep going."
                    },
                    "Ethan. Ethan, stop, he's gone purple.",
                    {
                      "note": "Everyone stops and lets go at once."
                    },
                    "\"He didn't say stop.\"",
                    "Because he can't talk, Ethan.",
                    {
                      "note": "You're lying across Kirra's rug with your hair stuck to your face, still giggling at nothing. Kirra's phone is still going."
                    },
                    {
                      "note": "Sophie looks at you for a long time. Then she picks up her keys."
                    },
                    "I'm going to head off. Ethan, are you going?",
                    "\"I live here.\"",
                    "Right. Yeah. Can you walk me down then?"
                  ],
                  "after": "Kirra, to Sophie: \"ur car is literally out the front\" Kirra: \"its been 40 min\" Sophie: \"we're talking\" Kirra: \"about {name}?\" Sophie: \"at first\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "You said no to the shoes and they took them anyway. You're allowed to be annoyed about that. They stopped when you said stop, and when you couldn't, Sophie said it."
    },
    {
      id: "c6i", route: "sophie", gaydar: 98, gaydarSays: "There's literally video evidence, {name}.", title: "Saturday morning", contact: "Sophie", irl: true,
      intro: "Sophie, three months. Last night you told her you were having a quiet one. You weren't. You went to the Valley with Dani in a crop top, a mini skirt and heeled sandals, toes painted hot pink, and you danced with a guy at the Wickham until 1am. Now it's Saturday morning, Sophie's on your doorstep with two coffees, and she hasn't smiled once.",
      outfitPrompt: "What did you wear to the Valley last night?",
      outfits: [{"label": "A black tee, a mini skirt, heeled sandals, hot pink toes", "gaydar": -2, "intro": "Sophie, three months. Last night you told her you were having a quiet one. You weren't. You went to the Valley with Dani in a black tee, a mini skirt and heeled sandals, toes painted hot pink, and you danced with a guy at the Wickham until 1am. Now it's Saturday morning, Sophie's on your doorstep with two coffees, and she hasn't smiled once."}, {"label": "A crop top, a mini skirt, heeled sandals, hot pink toes"}, {"label": "A sparkly crop top, a mini skirt, heels, pink toes, glitter and lashes", "gaydar": 1, "intro": "Sophie, three months. Last night you told her you were having a quiet one. You weren't. You went to the Valley with Dani in a sparkly crop top, a mini skirt, heeled sandals, toes painted hot pink, glitter and lashes, and you danced with a guy at the Wickham until 1am. There's still glitter on your pillow. Now it's Saturday morning, Sophie's on your doorstep with two coffees, and she hasn't smiled once.", "them": [{"note": "There's glitter on your cheek. She sees it."}]}],
      them: [
        { note: "She hands you a coffee and sits on the arm of the couch instead of next to you." },
        "So my friend Kirra was in the Valley last night.",
        "She sent me a video at like midnight. It's dark and shaky but it's you, {name}. In a skirt, with your arms round some guy's neck.",
        { note: "She looks at your feet. Your toes are still hot pink." },
        "I'm not going to scream at you. I just want you to tell me the truth, for once."
      ],
      replies: [
        { you: "That wasn't me.",
          them: [
            { note: "She looks at your toes again, then back at you, and waits." },
            "{name}. I painted those. I know what colour they are.",
            "Please don't lie to me while you're still wearing my nail polish."
          ],
          replies: [
            { you: "...okay. It was me.",
              them: [
                "Thank you.",
                "Was it the first time? Going out like that?",
              ],
              replies: [
                { you: "No.",
                  them: [
                    { note: "She nods." },
                    "The 'quiet ones'. All the quiet ones.",
                    "I don't even care about the skirt. I'd have helped you pick it.",
                    "I care that you lied. Like, a lot."
                  ] },
                { you: "Yeah. Last night was the first time.",
                  them: [
                    "And you went straight from my place on Thursday to a gay bar on Friday in a skirt.",
                    "I'm not having a go. I just want to know how long you've wanted to."
                  ] }
              ] },
            { you: "It's a costume. Dani dared me.",
              them: [
                "Right. A costume. And the guy was part of the dare?",
                "Do you want to know what Kirra said? She said, 'Soph, I don't think he's straight, babe.' And I sat in bed at 12am and thought, yeah. I don't think he is either.",
                "So say it was a dare if you want. I don't believe you."
              ] }
          ] },
        { you: "I'm sorry. I should have told you where I was.",
          them: [
            "Yeah. You should have.",
            "But I don't really care that you went to the Valley.",
            "It's the guy in that video. Three months, {name}, and I've never met him."
          ],
          replies: [
            { you: "That's not true. I'm happy with you.",
              them: [
                "You're comfortable with me.",
                "You were laughing in that video. Like head back laughing. You don't laugh like that with me. You do with Dani. And some guy with a moustache, apparently."
              ] },
            { you: "I know. I'm sorry.",
              them: [
                "Don't be sorry. Just stop lying.",
                "I think we both know where this goes, yeah?"
              ],
              replies: [
                { you: "Are you breaking up with me?",
                  them: [
                    "Yeah.",
                    "Sorry. I just can't do another three months of this."
                  ] },
                { you: "(Nod.)", them: [{ note: "She nods back and finishes her coffee." }] }
              ] }
          ] },
        { you: "Did you kiss him? Is that what you want to know? I didn't.",
          them: [
            "I didn't ask if you kissed him.",
            "Did you want to?",
            { note: "You don't answer fast enough." },
            "Okay. Yeah."
          ],
          replies: [
            { you: "I don't know what I want.",
              them: [
                "I think you do. I think you've known for a while.",
                "And I don't really want to be around while you figure it out. Sorry."
              ] },
            { you: "Yes. I wanted to.", gaydar: 100,
              them: [
                { note: "She breathes out slowly." },
                "Okay.",
                "Well. At least you said it."
              ] }
          ] },
        { you: "(Start crying.)",
          them: [
            { note: "She puts her coffee down on the side table." },
            "Please don't. I'm the one who's supposed to be upset here.",
            { note: "Her voice cracks on 'upset'. She sits down next to you after all." },
            "I'm not trying to make you feel bad. I just. Was any of it real? Like at all?"
          ],
          replies: [
            { you: "Yes. I really care about you.",
              them: [
                "I believe you. I do.",
                "But you don't want me. Not like that. I've known for ages, I just didn't want to say it."
              ] },
            { you: "I wanted it to be.",
              them: [
                "Yeah.",
                "Me too.",
                "Come here.",
                { note: "She hugs you for a long time. Then she picks up her keys." }
              ] }
          ] },
        { you: "Please don't break up with me. I'll stop going out like that.",
          them: [
            "I don't want you to stop going out like that.",
            "Seriously. You looked amazing. I watched it three times and by the third time I wasn't even angry, I was just like, oh. Oh, that's him.",
            "And then what, I get the quiet ones forever?"
          ],
          replies: [
            { you: "But I love you.",
              them: [
                { note: "She closes her eyes for a second." },
                "You've never said that before. Don't say it now just because I'm leaving.",
                "You love me like you love Dani. It's not the same."
              ] },
            { you: "Then what do I do?",
              them: [
                "I don't know, {name}. Go on a date with a guy? One who'd see that video and want to message you.",
                "And tell him the truth. Like, from the start."
              ] }
          ] },
        { you: "I think I'm gay, Soph.", gaydar: 100,
          them: [
            { note: "She doesn't move for a moment. Then she lets out a breath that sounds a bit like a laugh." },
            "Yeah. I think you are too.",
            "I've thought it for a while. When we walked past those two guys holding hands on Boundary St you went really quiet. I kept telling myself I was imagining it.",
            "I'm glad you said it. I'm also kind of gutted."
          ],
          replies: [
            { you: "Yeah. Me too.",
              them: [
                "Okay. Well.",
                "Kirra's going to be unbearable. She said it like a month ago."
              ] },
            { you: "Are you angry?",
              them: [
                "No. Not about that.",
                "About the lying, yeah. A bit. Ask me in a few weeks."
              ] },
            { you: "Can I still see you?",
              them: [
                "Not for a while. I need to stop being your girlfriend in my head first.",
                "Maybe. Let me get back to you."
              ] }
          ] },
        { you: "He was just a guy. We were just dancing.",
          them: [
            "You were on your tiptoes with your arms round his neck, {name}.",
            "You've never once done that with me.",
            { note: "She almost laughs. She doesn't." },
            "And the weird thing is I wasn't even jealous. It was like watching Kirra have a good night."
          ] },
        { you: "You went through a video of me? That's a bit much.",
          them: [
            "I didn't go through anything. Kirra sent it to me at midnight. I was home on my own because you said you were tired.",
            "Don't make this about me watching a video. You lied. You put on a skirt and heels and went out and danced with a guy and lied to me about it.",
            "And honestly, the skirt isn't even the bit that hurts."
          ],
          replies: [
            { you: "Then what is?",
              them: [
                "That you said you were tired. You just said it, like it was nothing.",
                "So how many other times was it nothing?"
              ] },
            { you: "Fine. Then go.",
              them: [
                { note: "She stands up and puts your coffee on the bench." },
                "Okay. I will.",
                "I hope you work it out, {name}. Just stop doing it with girls who actually like you."
              ] }
          ] }
      ],
      after: "Sophie sits in her car outside for ten minutes before she drives off. That night Kirra texts her: \"u ok?\" Sophie: \"yeah its done\" Kirra: \"want me to come over\" Sophie: \"no\" Sophie: \"maybe. bring wine\" Kirra: \"omw\" Kirra: \"the skirt was cute tho\" Sophie: \"kirra\"",
      debrief: "Getting caught out before you're ready is a rough way for it to happen. Whatever you said that morning, people say all of it."
    },
    {
      id: "sophie-end", route: "sophie", gaydar: 99, spark: 0, gaydarSays: "Nathan has three polos and wears them in order. Kirra calls him restful. She means it nicely.", title: "Sophie and Nathan", contact: "Sophie", irl: true,
      outfits: [
        { label: "Jeans and a black tee", gaydar: -2, intro: "Three months later. You're at the Wickham with Dani on a Friday. Jeans and a black tee. Then Sophie walks in with Kirra and a guy in a navy polo, chinos and boat shoes, holding Sophie's hand. He looks a bit lost. Nathan." },
        { label: "The mini skirt, heeled sandals, hot pink toes and glitter", gaydar: 1, intro: "Three months later. You're at the Wickham with Dani on a Friday, in the mini skirt, heeled sandals, hot pink toes and glitter. Then Sophie walks in with Kirra and a guy in a navy polo, chinos and boat shoes, holding Sophie's hand. He looks a bit lost. Nathan.", them: [{ note: "Kirra sees your skirt and screams \"THE VIDEO\" across the bar." }] }
      ],
      them: [
        { note: "Sophie walks over, smiling, and gives you a quick side-on hug." },
        "Hi. Kirra's birthday. She wanted to come here. Of course she did.",
        "This is Nathan. Nathan, this is {name}. We used to see each other.",
        "\"Hey man,\" Nathan says, and shakes your hand. \"First time in a gay bar. Everything's really pink.\"",
        "He's a physio. Kirra says he's so straight it's restful. I've stopped arguing with her.",
        {"if":"sophie-ambush=held","text":"Kirra still has the video of you not laughing. Ethan still won't watch it."},
        {"if":"sophie-ambush=cracked|begged|kept","text":"\"Wait,\" Nathan says. \"Kirra's video. The rematch. That's you?\" He laughs. \"She shows it to everyone. Very reactive feet, man.\""},
        {"if":"sophie-ambush=cracked|begged|kept","note":"Sophie puts her hand over her face. Kirra, somewhere behind you, is already filming."}
      ],
      replies: [
        { you: "Nathan! Welcome, babe. They're meant to be pink, that's the point. Soph, he's cute. Good job.",
          them: [
            "He is cute.",
            "You look really good, {name}.",
            "Are you seeing anyone?"
          ],
          replies: [
            { you: "Not yet. Dani keeps introducing me to guys. Strictly for dancing.", them: ["\"Strictly for dancing,\" Sophie says, very dry. \"Sure.\"", "Kirra, behind her: \"he's GAY, Soph\" Sophie: \"I know, Kirra.\""] },
            { you: "Not really. I'm just figuring stuff out.", them: ["Mm. Okay.", "Kirra says you've been here every Friday for three months, but okay."] }
          ] },
        { you: "(Turn to Nathan.) Nathan. Can we go outside for a minute? I need to say something.",
          them: [
            "\"Yeah, sure man,\" Nathan says, and follows you out to the street.",
            { note: "Out of the noise it's suddenly very quiet. He stands close with his hands in his pockets, waiting. He's got really nice eyelashes." },
            "\"What's up?\""
          ],
          replies: [
            { you: "I want Sophie back. I know that's... I just wanted to be honest with you.",
              them: [
                "\"Oh. Okay,\" Nathan says. His mouth twitches. He's trying very hard not to laugh. \"That's... brave, man.\"",
                { note: "Then he asks if you want a water, the way he'd ask a patient who's about to faint." },
                { note: "Sophie's at the door. She's been there the whole time." },
                "\"You went outside to win me back and he's offering you a water.\"",
                "\"You said it so quietly, {name}. You looked like you were about to cry. It was very cute.\"",
                { note: "She fixes your fringe for you, the way she does Kirra's before photos." },
                "\"No, {name}. Come inside. Kirra's buying shots and she wants you in the photo.\""
              ] },
            { you: "Your hands are very... professional. Sorry. Never mind. Bye.", gaydar: 100, them: ["\"Thanks, I'm a physio,\" he says, smirking. \"You're not the first guy to notice.\"", { note: "You go red so fast you feel it in your ears. Dani appears, takes your arm and walks you back inside without a word. She's shaking with silent laughter." }] }
          ] },
        { you: "(To Kirra) Boat shoes. At the Wickham.",
          them: [
            "Kirra: \"I KNOW.\"",
            "He likes his boat shoes, okay.",
            "And he's never once asked to borrow my concealer. So."
          ] },
        { you: "Hi Nathan. Have fun. The pink ones are the best ones.",
          them: ["\"Thanks, man! Will do.\"", "Sophie, quietly: \"Thanks for being nice. After everything.\"", "\"You too,\" you say. She nods and goes back to Nathan."] }
      ],
      after: "Kirra posts a story: Nathan holding a pink cocktail, looking baffled, and you in the background, being spun round by Dani. Caption: \"soph's new man and soph's old man at the same gay bar. happy birthday to me\". Sophie reposts it with three heart emojis.",
      debrief: "Running into your ex and her new boyfriend is awkward for everyone. You don't have to come out of it looking good."
    },
    {
      id: "c6j", route: "bianca", gaydar: 25, gaydarSays: "He smelled so good. Like, really good. I'm not overthinking it.", title: "Rooftop", contact: "Bianca",
      intro: "You met Bianca at a housewarming in Teneriffe. She laughed at all your jokes and put her number in your phone herself. First date: drinks at a rooftop bar in the CBD. You wore a fitted black shirt, clear gloss, a clear coat on your nails, and a spritz of perfume from the women's counter you'd been too scared to wear anywhere.",
      outfits: [{"label": "A black shirt, the women's perfume and a tiny bit of clear gloss", "gaydar": -5, "intro": "You met Bianca at a housewarming in Teneriffe. She laughed at all your jokes and put her number in your phone herself. First date: drinks at a rooftop bar in the CBD. A plain black shirt, the tiniest bit of clear gloss, and a spritz of perfume from the women's counter you'd been too scared to wear anywhere."}, {"label": "A fitted black shirt, clear gloss and nails, the women's perfume"}, {"label": "A silky shirt half undone, perfume, gloss, nails and a gold necklace", "gaydar": 5, "intro": "You met Bianca at a housewarming in Teneriffe. She laughed at all your jokes and put her number in your phone herself. First date: drinks at a rooftop bar in the CBD. A silky black shirt with three buttons undone, a delicate gold necklace, clear gloss, clear nails, and the perfume from the women's counter.", "them": ["also the necklace?? cute"]}],
      them: ["home 🥰", "that was so fun", "ok random but you smelled SO good. what is that, i need it for myself"],
      replies: [
        { you: "Ha. It's actually a women's perfume.", gaydar: 35,
          them: ["wait really", "ok honestly that's kind of hot? like confident", "most guys i date smell like the gym lol"],
          replies: [
            { you: "I wore a bit of gloss too. Did you notice?", gaydar: 40,
              them: ["omg yes i did", "i wasn't going to say anything in case you were embarrassed", "it looked good though!! you should try a tinted one next time. like a pinky nude. it'd suit you"],
              replies: [
                { you: "You think?", them: ["100%", "i'll send you the one i use", "wait this is turning into a makeup chat lol", "anyway. second date? 😊"] },
                { you: "Maybe I'll leave the makeup to you.", gaydar: 35, them: ["haha ok", "im still sending it", "are we doing this again or what"] }
              ] },
            { you: "Is that weird?", them: ["no?? who cares where its from", "i'd wear your cologne if it smelled nice. same thing", "anyway i want to see you again. like soon"] }
          ] },
        { you: "Just something I picked up. Glad you liked it.",
          them: ["liked it is an understatement", "i kept leaning in. i hope that wasn't obvious lol", "can i see you again?"],
          replies: [
            { you: "It was a bit obvious. I liked it.", them: ["😳", "ok good", "next weekend? you pick"] },
            { you: "Yeah. Next weekend?", them: ["yes!! 🥰", "wear the perfume again pls"] }
          ] },
        { you: "It's my secret.",
          them: ["ugh fine. mysterious", "i'll get it out of you on date two", "there is a date two right? 😏"],
          replies: [
            { you: "There's a date two.", them: ["good 😊 night {name} x"] },
            { you: "I'll trade you. Perfume for where your earrings are from.", gaydar: 30, them: ["lol why do you want my earrings", "ok deal", "night x"] }
          ] },
        { you: "Thanks! You smelled good too. Vanilla? Is it vanilla? Sorry. I'm bad at this.",
          gaydar: 30,
          them: ["its vanilla and tonka lol", "how did u know that", "anyway yes to date two. before you ask"] }
      ],
      after: "Bianca, to her friend Shay: \"date was SO good. hes funny. and he smelled amazing\" Shay: \"what did he smell like\" Bianca: \"honestly kind of like me\" Bianca: \"like a girl perfume. not mine. but like\" Shay: \"?\" Bianca: \"idk it was nice\""
    },
    {
      id: "c6k", route: "bianca", gaydar: 60, gaydarSays: "He took my advice about the gloss. Then he kept going. I'm not mad. I don't know what I am.", title: "Gelato", contact: "Bianca", irl: true,
      intro: "Second date. Gelato at South Bank on a warm Saturday. You took her advice: tinted gloss, a pinky nude. You also painted your nails soft pink and wore a cream cropped knit with your high-waisted jeans. On the walk over you saw yourself in a shop window and liked what you saw.",
      outfits: [{"label": "Tinted gloss and pink nails, with a plain tee", "gaydar": -5, "intro": "Second date. Gelato at South Bank on a warm Saturday. You took her advice: tinted gloss, a pinky nude. You also painted your nails soft pink. You kept the rest plain, a white tee and jeans, just in case."}, {"label": "Tinted gloss, pink nails, a cream cropped knit"}, {"label": "Tinted gloss, pink nails, cropped knit, hoops and mascara", "gaydar": 5, "intro": "Second date. Gelato at South Bank on a warm Saturday. You took her advice and then some: tinted gloss, soft pink nails, a cream cropped knit with high-waisted jeans, little gold hoops and mascara. On the walk over you saw yourself in a shop window and liked what you saw.", "at": 2, "them": ["Wait. Mascara too? And HOOPS?"]}],
      them: [
        { note: "She hugs you hello. It's a nice hug. It's a shorter hug than last time." },
        "Oh my god. The gloss. You actually did it!",
        { note: "She grabs your hand, but only to turn it over and look at your nails." },
        "And your NAILS. Okay, who are you? This colour is so good on you. Is that the Essie one? It is, isn't it."
      ],
      replies: [
        { you: "It is. I picked it because of you.", gaydar: 65,
          them: [
            "Stop. Me?",
            "Okay can I be honest? You suit this so much more than the black shirt. Like the black shirt was fine. But you look way more relaxed.",
            "You know what you'd look amazing in? A little skirt. Like a pleated one. With those legs? Babe."
          ],
          replies: [
            { you: "A skirt? Really?", gaydar: 70,
              them: [
                "Yes! Don't look at me like that. Guys wear skirts. Harry Styles wears dresses on magazine covers.",
                "We should go shopping. Like next weekend. I know exactly which shop in the city.",
                { note: "She's already got her phone out, showing you skirts. She hasn't looked at your face in a minute." },
                "This one. Or this one. Ooh. Or this one in lilac."
              ],
              replies: [
                { you: "The lilac one.", gaydar: 75, them: ["I KNEW you'd say lilac", "Okay, it's a date. A shopping date. That's still a date. Right?", { note: "She goes back to scrolling." }] },
                { you: "Isn't this meant to be a date, not a shopping trip?", them: [{ note: "She laughs, then stops." }, "Oh. Yeah. Sorry. I got carried away.", "It is a date. Totally. Do you want to... walk along the river or something?", { note: "She puts her phone away. She doesn't take your hand." }] }
              ] },
            { you: "Let's not get carried away.", them: ["Okay okay. Baby steps.", "But I'm putting it on the list.", "There's a list now. Sorry."] }
          ] },
        { you: "It was just a dare from Dani.", gaydar: 55,
          them: [
            "Dani dared you to match your gloss to your nails?",
            { note: "She raises an eyebrow and licks her gelato." },
            "Okay. Well tell Dani she has good taste.",
            "Honestly, you look really good. Like, better than me, which is rude."
          ],
          replies: [
            { you: "You look great too.", them: ["Thanks babe", { note: "She's never called you babe before. It's how she says it to Shay on the phone." }] },
            { you: "Okay, it wasn't a dare. I just like it.", gaydar: 65, them: ["I know 😊", "Then wear more of it. Seriously. You lit up when I noticed your nails."] }
          ] },
        { you: "(Lean in to kiss her.)", gaydar: 65,
          them: [
            { note: "She turns at the last second and you get her cheek." },
            "Sorry. Sorry, I don't know why I did that.",
            "It's not you. Well. I don't know. It felt a bit like kissing one of my friends? Which sounds so bad.",
            "Can we just... have gelato and walk? I really like hanging out with you. I just don't know what this is anymore."
          ],
          replies: [
            { you: "Yeah. Gelato and a walk.", them: ["Okay. Good.", "The gloss is really good, by the way. I'm stealing it.", { note: "On the walk she links her arm through yours, the way she does with Shay." }] },
            { you: "Was it the nails?", them: ["No! The nails are cute.", "It's like... I don't know. I'd go dancing with you in a second. I just can't picture, like. The rest of it. Sorry. Does that make sense?"] }
          ] },
        { you: "Okay, who are YOU? You haven't looked at my face once.",
          them: [
            "I have!",
            { note: "She looks at your face. Then at your mouth." },
            "Okay, I've looked at your mouth. At the gloss. Not like that.",
            "That's bad, isn't it. I'm a terrible date. Gelato's on me."
          ] }
      ],
      after: "Bianca, to Shay: \"second date was fun\" Shay: \"just fun?\" Bianca: \"he did his nails pink. and the gloss i told him about\" Shay: \"so is he gay\" Bianca: \"idk\" Bianca: \"i want to take him shopping more than i want to kiss him if thats what ur asking\" Shay: \"bianca\""
    },
    {
      id: "c6l", route: "bianca", gaydar: 85, gaydarSays: "I did his makeup for Shay's birthday. Halfway through I realised I wasn't on a date.", title: "Getting ready at hers", contact: "Bianca", irl: true,
      intro: "Third date, sort of. Bianca invited you over to get ready before her friend Shay's birthday in the Valley. You came over in the lilac pleated skirt she helped you pick, a white baby tee and your pink nails. She opened the door and screamed.",
      outfits: [{"label": "The lilac skirt with a hoodie over it, and sneakers", "gaydar": -5, "intro": "Third date, sort of. Bianca invited you over to get ready before her friend Shay's birthday in the Valley. You came over in the lilac pleated skirt she helped you pick, but with a big hoodie over the top and your sneakers, just for the walk. She opened the door and screamed anyway."}, {"label": "The lilac skirt, a white baby tee and pink nails"}, {"label": "The lilac skirt, a baby tee, pink nails and a pearl clip in your hair", "gaydar": 3, "intro": "Third date, sort of. Bianca invited you over to get ready before her friend Shay's birthday in the Valley. You came over in the lilac pleated skirt she helped you pick, a white baby tee, your pink nails, and a pearl clip in your hair. She opened the door and screamed.", "them": ["Is that a PEARL CLIP. I'm going to cry."]}],
      them: [
        "OH MY GOD. You wore it. You actually wore it.",
        { note: "She pulls you inside by both hands and spins you round under her arm." },
        "Okay, sit. Sit down. I'm doing your makeup. Don't argue. I've been wanting to do this since the rooftop.",
        "Lashes? I'm thinking lashes. And a bit of blush. And maybe a liner, just a tiny wing."
      ],
      replies: [
        { you: "Go for it. Full glam.", gaydar: 90,
          them: [
            "Full glam. Okay. Okay okay okay.",
            { note: "She's already got the ring light on. She's humming." },
            "Close your eyes. Don't blink. Okay, open. Oh my god. {name}. Look.",
            { note: "She turns you to the mirror. You don't say anything for a long time." },
            "You look incredible. Like, I'm actually a bit annoyed. Now shoes. You can't wear sneakers with that. What size are you? I've got heels."
          ],
          replies: [
            { you: "Give me the heels.", gaydar: 95,
              them: [
                "YES. Okay, these. Block heel, you'll survive.",
                { note: "She kneels down and does up the strap for you." },
                "Babe, I have to say something and you can't be weird about it.",
                "This doesn't feel like a date. Like at all. It feels like getting ready with Shay.",
                "And I kind of love it? Is that bad?"
              ],
              replies: [
                { you: "I think I love this more too.", gaydar: 100, them: ["I know. I can tell", "So can we just do this? Like, be this?", "And find you a guy who loses it when he sees you in those heels"] },
                { you: "But I thought you liked me.", them: ["I do! I like you so much.", "I just kind of stopped fancying you somewhere around the nails", "Is that horrible? That's horrible. I'm sorry."] }
              ] },
            { you: "Maybe not the heels. My ankles.", them: ["Fine. Flats. These gold ones", "Next time heels though. I'm teaching you"] }
          ] },
        { you: "Just a bit. I don't want to look too much.",
          them: [
            "Too much for who?",
            "Babe, you're in a lilac skirt. I think we're past that. And it looks so good.",
            { note: "She does a little mascara, a bit of blush. Then she sits back and looks at you for a long time." },
            "Can I ask you something? You can tell me to shut up."
          ],
          replies: [
            { you: "Ask.",
              them: ["Do you want to be dating me? Or do you want to be... this? With a guy?", "Because I keep hyping you up and you keep getting happier and, like. Less into me. And I'm less into you. And I don't even mind, which is weird."],
              replies: [
                { you: "I don't know.", gaydar: 85, them: ["Okay. That's okay", "You can not know. I'll still do your lashes"] },
                { you: "With a guy. I think.", gaydar: 100, them: [{ note: "She grins and hugs you so hard the mascara wand ends up in your hair." }, "I KNEW IT. Sorry. I mean. Okay. Wow.", "Okay. Lashes. Sit still, my hands are shaking"] }
              ] },
            { you: "Shut up.", them: ["Rude. Okay. Lashes."] }
          ] },
        { you: "I thought this was a date.",
          them: [
            { note: "She stops with the lash glue in her hand." },
            "It... is? Isn't it?",
            "Honestly? I kind of stopped thinking of it like that at the gelato. I didn't say anything because I didn't want it to be weird.",
            "Do you still fancy me? Like, actually? Be honest."
          ],
          replies: [
            { you: "Yes.", them: ["Okay.", { note: "She goes back to the lash glue." }, "You got way more excited about the lashes than you just did about me, though."] },
            { you: "...not really.", gaydar: 90, them: ["Yeah. Me neither. Not like that.", "But I REALLY like you. Just as, like, my person to get ready with. Is that okay?"] }
          ] },
        { you: "Can I do yours first? Your wing's a bit wonky.",
          gaydar: 90,
          them: [
            { note: "Her hand goes to her eye." },
            "It is NOT wonky.",
            { note: "She checks the mirror. It's wonky." },
            "Oh my god. Fine. Do mine.",
            { note: "You fix her wing. She sits with her eyes shut and one hand on your knee, the way she'd lean on Shay." },
            "Babe. That's better than mine. You're doing it every Saturday now, I'm not even joking."
          ] }
      ],
      after: "At Shay's birthday, two girls ask where you got your skirt. One of them asks Bianca if you're single. Bianca says \"he's single, but you're not his type.\" She winks at you across the bar."
    },
    {
      id: "c6m", route: "bianca", gaydar: 95, gaydarSays: "Four dates and now he's in the group chat. I don't know how it happened either.", title: "Bianca's girls 💅", contact: "Bianca's girls 💅", gaydarWho: "Bianca",
      intro: "The morning after Shay's birthday. Bianca has added you to her group chat with Shay and Imogen.",
      them: [{ from: "Bianca", text: "ok everyone say hi to {name} 💅" }, { from: "Shay", text: "HI the skirt king" }, { from: "Imogen", text: "the lashes were insane last night. who did them" }, { from: "Bianca", text: "me obviously. hes a natural tho" }, { from: "Shay", text: "so are you two like. still dating??" }, { from: "Bianca", text: "lol" }, { from: "Bianca", text: "{name} you answer" }],
      replies: [
        { you: "I think we're more friends now? Like. This. The chat.", gaydar: 100,
          them: [{ from: "Bianca", text: "THANK YOU. that's what i've been saying" }, { from: "Bianca", text: "babe i'm not even sad. i was into you on the rooftop. then you got your nails done and i was like. oh he's going to be my favourite person to go out with" }, { from: "Imogen", text: "so we're allowed to set him up now?" }, { from: "Shay", text: "my cousin's gay and he's SO nice. jake. plays rugby. would die for a man in a pleated skirt" }],
          replies: [
            { you: "...Show me a photo of Jake.", them: [{ from: "Shay", text: "OMG" }, { from: "Bianca", text: "WE ARE DOING THIS" }, { from: "Imogen", text: "wear the lilac skirt. jake needs to see the lilac skirt" }] },
            { you: "Slow down. I just got here.", them: [{ from: "Bianca", text: "ok fair" }, { from: "Bianca", text: "but wickham next weekend. heels this time. non negotiable" }] }
          ] },
        { you: "We're still dating. I think.",
          them: [{ from: "Shay", text: "bianca??" }, { from: "Bianca", text: "babe 😭 i love you" }, { from: "Bianca", text: "but last night you spent forty minutes in the bathroom doing imogen's contour and zero minutes trying to kiss me" }, { from: "Imogen", text: "the contour was very good though" }, { from: "Bianca", text: "im not breaking up with you. i just dont think we were ever really. you know" }, { from: "Bianca", text: "ur literally in the girls chat" }],
          replies: [
            { you: "Did I just get friend-zoned in a group chat?", them: [{ from: "Bianca", text: "lol yes" }, { from: "Bianca", text: "we do brunch on sundays. you're on mimosas" }, { from: "Shay", text: "and you're doing my brows before" }] },
            { you: "Okay. Fair. That's fair.", gaydar: 100, them: [{ from: "Bianca", text: "ok good" }, { from: "Shay", text: "so can we set him up with my cousin now" }] }
          ] },
        { you: "Shay, who's asking? Are you setting me up already?",
          them: [{ from: "Shay", text: "maybe" }, { from: "Bianca", text: "lol she is" }, { from: "Bianca", text: "we're not dating. i love him but i'd rather borrow his lip oil than kiss him" }, { from: "Imogen", text: "so that's a yes he's single" }, { from: "Shay", text: "my cousin jake?? hes gay. plays rugby. very tall" }],
          replies: [
            { you: "...What's Jake's Instagram?", gaydar: 100, them: [{ from: "Bianca", text: "OMG" }, { from: "Shay", text: "sending it now" }, { from: "Imogen", text: "he didn't even pretend" }] },
            { you: "Bianca. You'd rather borrow my lip oil?", them: [{ from: "Bianca", text: "its the good one!!" }, { from: "Bianca", text: "dont act like you havent been in my heels" }] }
          ] },
        { you: "Are you saying I'm gay?",
          them: [{ from: "Imogen", text: "👀" }, { from: "Shay", text: "i'm not saying anything i'm just eating toast" }, { from: "Bianca", text: "i'm saying you went from gloss to a skirt and lashes in four weeks and every time i hyped you up you got happier and i got less into you" }, { from: "Bianca", text: "and im saying it as ur friend ok. not being mean" }],
          replies: [
            { you: "I'm not gay.", them: [{ from: "Bianca", text: "ok babe" }, { from: "Shay", text: "ok babe" }, { from: "Imogen", text: "ok babe" }, { from: "Bianca", text: "wickham saturday. wear the heels" }] },
            { you: "...yeah. I think I am.", gaydar: 100, them: [{ from: "Bianca", text: "🥹🥹🥹" }, { from: "Shay", text: "WELCOME" }, { from: "Imogen", text: "im crying on the bus" }, { from: "Bianca", text: "ok im calling you. pick up" }] }
          ] }
      ],
      after: "Bianca, privately, to you: \"the rooftop was real btw. i did fancy you\" \"idk what happened. the nails i think lol\" \"anyway ur coming saturday x\"",
      debrief: "You lost a date and got added to a group chat. It can sting a bit and still be nice."
    },
{
      "id": "bianca-feet",
      "route": "bianca",
      "gaydar": 97,
      "friend": true,
      "gaydarSays": "Jake went straight for his feet. Imogen says that's flirting. I'm choosing to believe her.",
      "title": "Pedi night",
      "contact": "Bianca",
      "irl": true,
      "intro": "A week after Shay's birthday. Bianca's place, pedicure night with the girls: Shay, Imogen, and you, all barefoot on the floor with the polishes out. Then the doorbell goes. It's Shay's cousin Jake, the one Bianca keeps saying you'd be perfect with. \"He was in the area,\" Bianca says, not looking at you.",
      "them": [
        {
          "note": "Jake's tall, in a cap and a hoodie. He looks at the four of you on the floor with your toes in separators, and laughs."
        },
        "\"Oh, this is a whole thing.\"",
        "Sit down, Jake. {name}'s doing my top coat and then it's his turn.",
        {
          "note": "Jake sits down on the floor right next to you. He looks at your feet, half done in a glossy pink."
        },
        "\"You're doing your own?\"",
        "\"Bianca's doing them,\" you say. \"I'm... yeah. Pink.\""
      ],
      "replies": [
        {
          "you": "(Hold your foot out for Bianca.)",
          "them": [
            {
              "note": "Bianca starts on your big toe. Jake watches, then reaches over and holds your ankle still for her."
            },
            "\"I'll help. Keep him steady.\"",
            {
              "note": "Then he runs his finger down your sole, right as Bianca's brush is on your nail. You yelp and kick, and pink goes all over your toe."
            },
            "\"JAKE,\" Bianca says. \"Now I have to start again!\"",
            "\"My bad,\" he says, and does it again. You're laughing, squirming against the couch, trying to keep your other foot away from him too. Shay and Imogen are howling.",
            "\"Jake! Stop! Please! The polish!\""
          ],
          "replies": [
            {
              "you": "(Laughing, pull your foot back.) Okay. Okay. You're banned from my feet.",
              "them": [
                {
                  "note": "He lets go when you pull. \"Banned,\" he says. \"Harsh.\""
                },
                "\"You're both bright red,\" Imogen says. \"Both of you.\"",
                "\"Shut up, Imogen,\" Jake says.",
                "Bianca, cleaning your toe with remover: \"I'm not saying anything. I'm just saying I knew it.\"",
                {
                  "note": "He stays for two hours and holds your ankle for every coat after that. He only tickles you once more."
                }
              ]
            },
            {
              "you": "(Giggling) If you're going to hold my foot, at least do the top coat.",
              "gaydar": 99,
              "them": [
                "\"Me?\" He looks at Bianca. She hands him the bottle immediately.",
                {
                  "note": "He paints your big toe with his tongue sticking out a bit. It's messy. Imogen films. Shay keeps saying \"oh my GOD\" under her breath."
                },
                "\"How's that?\"",
                "\"Terrible,\" you say. \"I love it.\"",
                {
                  "note": "He goes to blow on it and tickles under your toes instead. You shriek and grab his arm. He stops, laughing."
                },
                "\"Sorry. Couldn't help it.\" He doesn't let go of your foot."
              ]
            }
          ]
        },
        {
          "you": "Don't even think about it. I know that look.",
          "them": [
            "\"What look?\" Jake says, and wiggles his fingers at you.",
            {
              "note": "You scramble backwards. The girls grab you, Shay on one arm, Imogen on the other, laughing so hard they can barely hold on."
            },
            "\"Hold him!\" Bianca yells.",
            {
              "note": "Jake takes one foot very carefully, avoiding the wet polish, and tickles under your toes. You laugh until your eyes stream. Your mascara's gone."
            },
            "\"Stop! Okay! Stop!\"",
            {
              "note": "Everyone lets go at once. You lie on Bianca's floor, wrecked, with pink toes and mascara down your face."
            },
            "\"Sorry,\" Jake says, and hands you a tissue. \"You've got a great laugh.\"",
            "Bianca, very quietly: \"Babe. He likes you.\""
          ]
        }
      ],
      "after": "Bianca, to Shay and Imogen, after: \"WELL\" Shay: \"jake just texted me 'is he single'\" Imogen: \"he would not let go of his foot\" Bianca: \"told u\" Bianca: \"{name} i know ur reading this say something\"",
      "debrief": "Someone you like teasing you in front of your friends is embarrassing. It can also just be nice."
    },
    {
      "id": "bianca-ambush",
      "route": "bianca",
      "gaydar": 98,
      "friend": true,
      "irl": true,
      "title": "The new boots",
      "contact": "Bianca",
      "gaydarSays": "Jake had your boots off in about a second. I'm not sorry. I'd do it again.",
      "intro": "Two weeks after pedi night. Bianca made you buy heeled ankle boots, and tonight's the first time you've worn them out: drinks at hers before Shay's thing. You're keeping them on all night. You've decided. Then Jake turns up. \"In the area\" again, apparently.",
      "them": [
        {
          "note": "You're on the couch between Shay and Imogen, boots on, legs crossed, very aware of the boots. Jake sits on the floor in front of you with his drink."
        },
        "\"Nice boots,\" he says. \"Bet your toes are still pink under there.\"",
        "Obviously they are. I did a top coat.",
        "\"They're not,\" you say. \"And I'm not taking these off. I just got them on. There's a zip and a whole system.\"",
        "\"I know how a zip works,\" Jake says.",
        {
          "note": "He puts his drink down, takes hold of your ankle, and finds the zip on the inside of the boot."
        },
        "\"Jake. No! Jake, I said no! They're staying on!\"",
        "Shay, Imogen. Arms.",
        {
          "note": "Shay and Imogen each grab an arm and pull you back into the couch, shrieking with laughter. You kick. Jake catches the kicking foot and unzips that one too. Both boots off. Then the socks, slowly, toe end first."
        },
        {
          "note": "Still pink. Still shiny."
        },
        "Told you. Look at that shine. That's my work.",
        "\"Pretty,\" Jake says. He's still holding your foot. He looks up at you. \"Remember pedi night?\"",
        {
          "note": "He starts. Bianca, cackling, gets down on the floor and takes the other foot."
        }
      ],
      "replies": [
        {
          "you": "(Lock up. Stare at Bianca's fairy lights. Not a sound.)",
          "them": [
            {
              "note": "You stare at the fairy lights. Jake's thumbs go up your arch, slow. Bianca goes for your toes, fast, with her long nails. You go rigid all over."
            },
            "Oh, he's FIGHTING it. Babe. You're fighting it?",
            "\"Shay, Imogen, you want in?\" Jake says.",
            {
              "note": "They let go of your arms and each take a bit of a foot. Four of them now."
            }
          ],
          "replies": [
            {
              "you": "(Hold it. All the way.)",
              "them": [
                {
                  "note": "You hold it. Somehow. Your eyes water and your pink toes curl right up, but nothing comes out of you. Not one sound."
                },
                "\"Okay, that's impressive,\" Jake says, and lets go first. \"Respect.\"",
                "Who ARE you? On pedi night you screamed the house down.",
                {
                  "note": "Jake's looking at you. He doesn't say anything."
                }
              ],
              "replies": [
                {
                  "you": "(Hold your foot out to Jake.) Can I have my socks back, please?",
                  "outcome": "held",
                  "them": [
                    {
                      "note": "He picks up your sock and, without asking, puts it back on your foot for you. Then the other one. Then he zips your boots back up, slowly, one after the other."
                    },
                    {
                      "note": "Shay makes a noise like a kettle. Imogen grabs Bianca's arm."
                    },
                    "Oh my god. Oh my GOD. He did your boots up. Jake did your boots up.",
                    "\"He asked nicely,\" Jake says, and doesn't move away from your feet."
                  ],
                  "after": "Bianca, to Shay and Imogen: \"jake did his BOOTS UP\" Shay: \"he texted me 'is he always that calm'\" Imogen: \"jake is GONE\" Bianca: \"im a genius\""
                },
                {
                  "you": "(Wiggle your toes at Bianca.) Go on then. You know where.",
                  "outcome": "cracked",
                  "them": [
                    "Oh, you're asking for it.",
                    {
                      "note": "She goes straight for the gap between your second and third toe, the one she always has to put the separator in carefully. You last a second. Then you shriek and fold in half, giggling, and all four of them pile back in."
                    },
                    "I KNEW it. I've had my hands on these feet every week for a month.",
                    {
                      "note": "They stop when you get \"stop\" out. Jake's laughing harder than anyone. He hasn't let go of your ankle."
                    }
                  ],
                  "after": "Imogen, to the girls: \"[video] bianca found it\" Shay: \"jakes laugh tho\" Bianca: \"he didnt let go of his ankle for like 20 min after\" Imogen: \"u timed it??\" Bianca: \"obviously\""
                }
              ]
            },
            {
              "you": "(Too much. You lose it.)",
              "them": [
                {
                  "note": "You break. You're laughing so hard you slide off the couch onto the rug."
                },
                "THERE he is! There's my baby!",
                "\"Same as pedi night,\" Jake says, grinning, not stopping. \"Even louder.\"",
                {
                  "note": "Imogen's filming. Shay's crying with laughter."
                }
              ],
              "replies": [
                {
                  "you": "(Giggling) Okay! Okay, I'm ticklish! I'm SO ticklish!",
                  "outcome": "cracked",
                  "them": [
                    {
                      "note": "They stop and let go. You lie on the rug with your pink toes in the air, panting."
                    },
                    "\"I know you are,\" Jake says. \"I've known since pedi night.\"",
                    {
                      "note": "He lies down on the rug next to you, propped on an elbow, and looks at your face. Bianca turns the music up and pulls Shay and Imogen into the kitchen. Very obviously."
                    },
                    {
                      "note": "From the kitchen: \"LEAVE THEM ALONE, Imogen.\""
                    }
                  ],
                  "after": "Bianca, to Shay and Imogen, from the kitchen: \"DON'T go back in there\" Shay: \"what are they doing\" Bianca: \"talking. lying on my rug. talking.\" Imogen: \"jake's holding his foot again\" Bianca: \"of course he is\""
                },
                {
                  "you": "(Red, giggling) Stop! Stop it, all of you!",
                  "outcome": "cracked",
                  "them": [
                    {
                      "note": "They stop as soon as you say it and let go."
                    },
                    "Okay! Okay, hands off, everyone.",
                    {
                      "note": "You curl up on the rug, red to your ears, feet tucked under you. Jake picks up your boot and holds it out to you."
                    },
                    "\"Sorry,\" he says. He actually sounds a bit sorry. \"Got carried away. Your laugh's good.\"",
                    {
                      "note": "You take the boot. Your hand touches his. You both look at it for slightly too long. Bianca makes a tiny squeak."
                    }
                  ],
                  "after": "Bianca, to Shay and Imogen: \"'your laugh's good'\" \"he said YOUR LAUGH'S GOOD\" Shay: \"he's never said that to anyone\" Imogen: \"he said it to me once\" Shay: \"he did not\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're giggling before they've even started.)",
          "them": [
            {
              "note": "You're gone instantly. Squealing, giggling, wriggling into the couch cushions, before Jake's even properly started."
            },
            "Oh, BABE. You're hopeless!",
            "\"Shay, Imogen, get in here,\" Jake says.",
            {
              "note": "Four of them. Jake and Bianca on one foot, Shay and Imogen on the other. Imogen's got a makeup brush."
            },
            "This is the best night of my LIFE."
          ],
          "replies": [
            {
              "you": "(Giggling) Please! Please, please stop!",
              "them": [
                {
                  "note": "They stop and let go straight away. You lie back on the couch, panting, arm over your eyes."
                },
                "\"Okay, okay,\" Jake says.",
                "He's very polite. I raised him right.",
                {
                  "note": "Then Jake picks your foot up again. He's not tickling, just holding it, thumb on your arch."
                },
                "\"Can I have ten more seconds?\""
              ],
              "replies": [
                {
                  "you": "(Pull it back.) No! No more. Not even you.",
                  "outcome": "begged",
                  "them": [
                    "\"Fair enough,\" he says, and lets go. \"Not even me. Noted.\"",
                    {
                      "note": "He gives you your socks back. Then he picks up your boots and holds them, and doesn't give those back."
                    },
                    "\"You can have these back when you come to dinner with me.\"",
                    {
                      "note": "Bianca screams. Actually screams. Shay drops her drink."
                    }
                  ],
                  "after": "Bianca, to Shay and Imogen: \"HE HELD HIS BOOTS HOSTAGE FOR A DATE\" Shay: \"jake did that??\" Imogen: \"did {name} say yes\" Bianca: \"he said 'they're new boots'\" Bianca: \"which is a yes\""
                },
                {
                  "you": "(Still giggling) ...Go on then. Ten.",
                  "outcome": "kept",
                  "gaydar": 99,
                  "them": [
                    {
                      "note": "The girls count down from ten. Jake goes slow, then fast, then slow again. You're squealing from 'ten'."
                    },
                    {
                      "note": "At 'one' he stops, right on one, and lets go."
                    },
                    "\"I keep my word,\" he says.",
                    {
                      "note": "You lie there giggling with your pink toes in the air. He's still sitting at your feet. He doesn't move."
                    },
                    "Oh my god. Oh my god, look at them. Shay. LOOK AT THEM."
                  ],
                  "after": "Bianca, to the girls: \"he asked for more\" \"from JAKE\" \"and jake stopped at exactly ten\" Shay: \"jake's never stopped at anything\" Imogen: \"theyre getting married\" Bianca: \"obviously\""
                }
              ]
            },
            {
              "you": "(Stop fighting. Lie back and let them.)",
              "them": [
                {
                  "note": "You stop struggling. You flop back across the couch, laughing at the ceiling, pink toes wriggling in four people's hands."
                },
                "He's given UP! Babe, you've given up!",
                "\"Look at his face,\" Jake says.",
                {
                  "note": "It goes on and on. They take turns. Imogen's still got the makeup brush. You're crying laughing."
                },
                {
                  "note": "After a while Jake stops and just watches you."
                },
                "\"You can say stop, you know,\" he says."
              ],
              "replies": [
                {
                  "you": "(Gasping) Okay! Okay, stop now. Stop.",
                  "outcome": "kept",
                  "gaydar": 99,
                  "them": [
                    {
                      "note": "They stop as soon as you say it and let go."
                    },
                    "Three minutes! THREE minutes!",
                    {
                      "note": "Jake rests your foot on his knee and leaves it there."
                    },
                    "\"Shay's thing starts in an hour,\" he says. \"You coming? I'll carry your boots.\"",
                    {
                      "note": "Bianca grabs Imogen's arm so hard Imogen yelps."
                    }
                  ],
                  "after": "Bianca, to the group: \"three minutes and then jake said 'i'll carry your boots'\" Shay: \"did he carry them\" Bianca: \"the whole way to the bar\" Imogen: \"on his shoulder\" Bianca: \"i cant\""
                },
                {
                  "you": "(Can't speak. Just keep laughing.)",
                  "outcome": "kept",
                  "gaydar": 99,
                  "them": [
                    {
                      "note": "You can't get a word out. You're laughing too hard. Shay and Imogen keep going. Bianca keeps going."
                    },
                    "\"Hey. Hey, stop,\" Jake says. \"He can't breathe.\"",
                    {
                      "note": "Everyone stops and lets go at once."
                    },
                    "He was having fun!",
                    "\"Bee. He was crying.\"",
                    {
                      "note": "You're half off the couch, still giggling. Jake sits down next to you and waits until you've got your breath back."
                    },
                    "Okay. Okay, I'm in love with this. I'm in love with the two of you."
                  ],
                  "after": "Bianca, to the girls: \"jake made us stop because he was worried\" Imogen: \"and then he just sat with him\" Shay: \"for twenty minutes\" Bianca: \"told u all\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "They took your boots off after you said no, which is a bit much. They stopped when you said stop. It's fine if you liked it, and fine if you didn't."
    },
    {
      id: "bianca-end", route: "bianca", gaydar: 100, spark: 0, gaydarSays: "Liam made me a bedside table for my birthday. I'm never letting him go.", title: "Bianca and Liam", contact: "Bianca", irl: true,
      outfits: [
        { label: "Jeans and a tee, just lip oil", gaydar: 0, intro: "A month later. Bianca's birthday drinks at a rooftop in the Valley, the same one where you had your first date. You wore jeans and a tee and lip oil. She's brought a guy: a carpenter, still in his work boots, with sawdust on his jeans. Liam." },
        { label: "The lilac skirt, heels and full glam. She'd want that.", intro: "A month later. Bianca's birthday drinks at a rooftop in the Valley, the same one where you had your first date. You wore the lilac skirt, heels and full glam, because she'd never forgive you otherwise. She's brought a guy: a carpenter, still in his work boots, with sawdust on his jeans. Liam.", them: ["THE LILAC SKIRT. ON MY BIRTHDAY. I'm crying. I'm actually crying."] }
      ],
      them: [
        "Babe!! You came! Okay, this is Liam. Liam, this is {name}, my best friend. He's the one who did my contour.",
        "\"Hey,\" Liam says. \"The contour guy. Good work, man. I can't even tell what it is, but it looks good.\"",
        "He made me a bedside table for my birthday. Like, made it. I'm so in love I could scream.",
        { note: "She leans in and whispers: \"Be nice. Be nice! He's straight. He's so straight. Like, actually.\"" },
        {"if":"bianca-ambush=held","note":"Over by the bar, Jake raises his glass at you. He's still never seen you laugh when he wants you to. Bianca says it's driving him mad."},
        {"if":"bianca-ambush=cracked|begged|kept","note":"Over by the bar, Jake catches your eye and wiggles his fingers at you. You go red. Bianca nearly drops her drink."}
      ],
      replies: [
        { you: "Liam! Hi! You MADE her a table? Okay. Okay, B, I approve.",
          them: [
            "Right?? He's perfect.",
            "And you came! My best friend. My gay best friend. Sorry. Best friend.",
            "You are though, right? You don't have to say. I'm just saying. The vibes."
          ],
          replies: [
            { you: "Let's just say best friend.", them: ["Fine. For now.", "Jake's here by the way. Just so you know. No reason."] },
            { you: "Best friend. Gay or otherwise. Happy birthday, B.", them: [{ note: "She hugs you so hard she spills some of her drink down your back." }, "Gay or otherwise. Okay. I love you. Go get a drink.", "Jake asked if you were coming, by the way."] }
          ] },
        { you: "(Pull Liam aside.) Liam. Sorry. Can I tell you something? It's about B.",
          them: [
            "\"Yeah, course,\" Liam says, and bends down a bit to hear you.",
            { note: "He's got sawdust in one eyebrow. You nearly reach up and brush it out. You don't. Your heart's going stupidly fast." },
            "\"What's up?\""
          ],
          replies: [
            { you: "I think I still want to be with her. Like, properly. I'm sorry. I had to say it.",
              them: [
                "\"Ha. Fair enough, man,\" Liam says. He's not worried. \"Want a drink? I'll get you a spritz. With a little straw.\"",
                "Bianca, from across the bar, yelling: \"WHAT ARE YOU TWO TALKING ABOUT\"",
                "Liam, calling back: \"He wants you back, babe! I'm terrified!\"",
                { note: "Bianca comes over and takes your face in both hands." },
                "Babe. You told my boyfriend you want me back? To his face? In that little voice?",
                "That's the cutest thing anyone's ever done on my birthday. And no. Obviously no.",
                "You're my girlfriend, babe. Like my girl friend. Not my boyfriend. I love you though."
              ] },
            { you: "...Never mind. Do you, um. Do you work out? Sorry. Happy birthday to Bianca. Bye.", gaydar: 100, them: ["\"Just work, man,\" Liam says, delighted. \"Want me to make you a shelf? For all your, um. Products.\"", { note: "Your face is on fire. Bianca has her face in Shay's shoulder and is shaking. Imogen is filming. Shay's cousin Jake is watching from the bar with a little smile." }] }
          ] },
        { you: "(To Bianca) B. He's got sawdust on him. At your birthday.",
          them: [
            "I KNOW. Isn't it hot?",
            "He came straight from work. I don't think he owns a mirror.",
            "That's what you're for, babe.",
            { note: "She grabs your hand and drags you off to the bathroom to check her teeth, and leaves Liam at the bar." }
          ] },
        { you: "Hi Liam. Happy birthday, B. I'm going to the bar.",
          them: ["\"Grab us a beer, man?\" Liam asks. \"Actually, I'll come with you.\"", { note: "He walks you to the bar and orders you a spritz without asking. Bianca told him that's what you drink." }] }
      ],
      after: "Bianca, in the group chat at 2am: \"best birthday ever\" Bianca: \"also jake asked for {name}'s number\" Shay: \"DID HE GIVE IT\" Bianca: \"he said he'd think about it\" Imogen: \"hes been looking at jake all night\" Bianca: \"hes thinking about it SO hard\"",
      debrief: "She's got Liam now, and she still wanted you there on her birthday. That's a good friend to have."
    },
    {
      id: "c7", route: "jess", title: "The group chat", contact: "Jess",
      them: ["ok i need to tell you something and i don't want you to be upset", "hannah's in a group chat with my friend kate and kate screenshotted this to me", "\"update: jess set me up with a gay guy 🙃 he wore lip tint on a date and spent the whole night looking at the bartender\"", "and sam said mia rang her basically saying the same thing", "and something about a group chat with the netball girls??", "and a girl i know from uni says her friend ella went to brunch with a guy in a dress and im like. was that you", "also someone called lucy follows me now?? and zoe's friend brooke liked my post from 2019 lol. its like a whole investigation", "anyway. are you ok?"],
      replies: [
        { you: "Great. So everyone's talking about me.",
          them: ["two people are talking about you and they're being dicks about it", "ok more than two. but the point stands", "i told kate to drop it", "but {name}. are they wrong?"],
          replies: [
            { you: "No. I'm gay.",
              them: ["ok", "ok. thank you for telling me", "sorry i kept setting you up with girls lol", "wait i have a guy from work. like right now. do you want him"],
              replies: [
                { you: "Not yet. I need a minute.", them: ["fair", "hes a really good cook though. just saying"] },
                { you: "...what's his name?", them: ["oh we're DOING this", "alex. hes lovely. a bit too into running"] },
                { you: "Are you upset I didn't tell you?", them: ["a tiny bit", "mostly im just glad youre ok", "and that i can stop pretending i didnt notice the lip tint"] }
              ] },
            { you: "I don't want to talk about it.", them: ["ok. i'm not going anywhere. text me whenever"],
              after: "You don't text her that night. You text her three days later: \"they weren't wrong.\" She replies in under a minute. A month after that, Dani sets you up on a dating app. This time you tick 'men'." },
            { you: "What exactly are they saying?",
              them: ["you don't want to know", "ok fine. mostly 'why is he dating girls'. some 'his makeup was better than mine'. one 'he's so obviously gay i feel stupid'", "mia told sam it was like going out with her friend hayley lol. georgie said 'nice guy. not a boyfriend'. thats the whole review from georgie", "honestly the makeup one is a compliment", "the rest is them being embarrassed and taking it out on you"],
              replies: [
                { you: "They're not wrong though.", them: ["yeah i figured", "thats fine obviously", "you ok?"] },
                { you: "I feel sick.", them: ["coming over", "don't argue. i'm bringing chips and the bad wine"] },
                { you: "Which one said my makeup was better than hers? I want a name.", them: ["lol hannah", "she also said your lashes were 'unfair'", "she's not wrong. now are you ok or not"] }
              ] }
          ] },
        { you: "They're not wrong.",
          them: ["yeah i kind of figured", "i'm sorry it came out like that. that's shit", "you ok?"],
          replies: [
            { you: "Not really. But kind of relieved?", them: ["that makes sense", "drinks friday. my shout", "and wear whatever you want. like the dress if you want. i mean it"] },
            { you: "I feel like an idiot for dating all of them.", them: ["youre not an idiot", "you thought thats what you were supposed to do. two guys from my uni did the exact same thing and theyre married to men now", "maybe stop letting me set you up for a bit lol"] }
          ] },
        { you: "It was just makeup, Jess.",
          them: ["ok. that's fine", "but you know you can tell me stuff right", "like actual stuff. not just makeup stuff"],
          replies: [{ you: "I know.", them: ["ok good"],
          after: "It takes you another two weeks to tell her. She says \"I know, babe\" and orders you a drink. A month after that, Dani sets you up on a dating app. This time you tick 'men'." }, { you: "Okay. It's not just makeup.", them: ["i know", "i knew when you asked if my eyeliner was a wing or a kitten lol"] }] },
        { you: "Who's Lucy?? Why is she following you?",
          them: ["THAT'S your question??", "idk she found me through sam or something. she liked three of my photos and one of them was of you", "ok i'm asking again. are you ok"],
          replies: [{ you: "Yeah. And yeah, they're right. I'm gay.", them: ["ok", "ok. i love you", "and i'm blocking lucy"] }] }
      ],
      after: "A month later, Dani sets you up on a dating app. This time you tick 'men'.",
      debrief: "Being talked about like that is horrible. You still get to say it yourself, when and how you want."
    },
    {
      id: "s1", route: "bf", title: "Hey there",
      them: ["hey! your profile made me smile", "is that your dog or are you just really good at borrowing dogs"],
      replies: [
        { you: "She's mine! Her name's Biscuit.",
          them: ["BISCUIT", "ok im invested", "what is she?? she looks like a kelpie that fell in a bag of flour", "oh im {bf} btw"],
          replies: [
            { you: "Kelpie cross something. The vet literally shrugged.",
              them: ["the vet shrugged lol", "ok can i ask. is this your first time on here? you've got very just-downloaded-it energy. in a good way"],
              replies: [
                { you: "Is it that obvious?",
                  them: ["a bit lol", "your bio says 'new to this, be nice'", "which is either really honest or a trap"],
                  replies: [
                    { you: "It's not a trap. I only came out a couple of months ago.",
                      them: ["oh wow ok. thats big. congrats 🏳️‍🌈", "no rush on anything", "we can just talk about biscuit for a week if you want", "or coffee whenever. theres a good place in paddington"],
                      replies: [
                        { you: "Coffee sounds good. Saturday?", them: ["saturday 😊 ill send you the place", "warning im taller than i look in my pics and i knock stuff over a lot"] },
                        { you: "Can we just talk for a bit first?", them: ["course", "ok tell me the worst thing biscuit has ever done"] }
                      ] },
                    { you: "It's a trap. Biscuit runs the account.", them: ["lol", "tell biscuit id like to take her owner for coffee"] }
                  ] },
                { you: "I've been on here a while, thanks very much.", them: ["sure 😏", "ok pro. whats your go-to first date"],
                  replies: [{ you: "Coffee. Easy to leave if it's bad.", them: ["wow ok brutal", "coffee saturday then. ill try not to be bad"] }] }
              ] },
            { you: "She ate a whole birthday cake once. Candles and all.",
              them: ["wait CANDLES?", "is she ok", "i need to meet her. and you i guess 😏"] }
          ] },
        { you: "Borrowed. I have a whole dog-borrowing operation.",
          them: ["lol i knew it", "do you rent them out? asking for me", "im {bf}. coffee sometime? bring a borrowed one"],
          replies: [
            { you: "Only if you bring a borrowed dog too.", them: ["my housemate has a really fat sausage dog called kevin", "so thats sorted"] },
            { you: "Okay, she's mine. I panicked.", them: ["you panicked over a dog question 😂", "ok coffee saturday. bring the real one"] }
          ] },
        { you: "Hi. Sorry, I'm really nervous. I've never messaged a guy before.",
          them: ["hey dont be sorry", "like never ever or never on here?"],
          replies: [
            { you: "Ever. I've only ever dated girls.",
              them: ["ok well youre doing fine so far", "my first ever message to a guy was 'hello there'. like obi wan. he didnt reply", "so honestly youre ahead"],
              replies: [
                { you: "Oh no. That's so bad.", them: ["i know. i still think about it at 3am", "coffee sometime? no pressure. less star wars i promise"] },
                { you: "That actually helps. Thanks.", them: ["good", "im {bf} btw. tell me about the dog"] }
              ] },
            { you: "On here. I'm a bit new.", them: ["everyone's new at some point", "im {bf}. whats the dogs name"] }
          ] }
      ]
    },
    {
      id: "s2", route: "bf", title: "After the first date",
      them: ["home 🙂", "that was really nice. you're easy to be around", "also sorry about your flat white. i did warn you"],
      replies: [
        { you: "Me too. I was so nervous but it was easy?",
          them: ["you hid it well!", "i changed my shirt three times and then wore the first one", "can i see you again"],
          replies: [
            { you: "Yes, definitely.", them: ["good 😊", "ill think of something with less stuff to spill"],
              replies: [
                { you: "Can I pick? I want to go somewhere I've never been with a guy.", them: ["ooh yes", "where"],
                  replies: [
                    { you: "The Valley. Somewhere gay.", them: ["yes. ill take you to my favourite bar", "they play a lot of kylie. like a LOT. just so you know"] },
                    { you: "Honestly? Just a walk. Somewhere quiet.", them: ["new farm park on sunday?", "we can hold hands or not, whatever"] }
                  ] },
                { you: "Surprise me.", them: ["oh no pressure", "ok i have an idea. wear comfy shoes"] }
              ] },
            { you: "Can I be honest? I didn't know if I'd like it. But I did.",
              them: ["oh good lol", "wait what did you think you wouldnt like"],
              replies: [
                { you: "Being out in public with a guy. Like, on a date.", them: ["yeah that makes sense", "nobody in there cared btw. the barista only cared that i spilled your coffee", "next time somewhere more chill"] },
                { you: "I don't know. Liking a guy, I guess. It's still new.", them: ["yeah of course", "you dont have to have it figured out. you just have to turn up and watch me spill things"] }
              ] }
          ] },
        { you: "I had fun. Same time next week?",
          them: ["already in my calendar", "i actually put 'coffee w biscuit guy' in my work calendar and my manager saw it", "so now i have to see you again. for HR reasons"],
          replies: [
            { you: "Well, we can't upset HR.", them: ["exactly", "next saturday. ill bring napkins"] },
            { you: "Your manager knows about me already?", them: ["she knows i had coffee with a cute guy with a dog", "she asked if you were the one. linda it was one coffee"] }
          ] },
        { you: "Was it okay that I didn't kiss you goodbye?",
          them: ["yes!! totally", "it was your first date with a guy, i wasnt going to make it weird", "was the hug ok? im a hugger sorry"],
          replies: [
            { you: "The hug was nice.", them: ["good 😊", "more hugs then", "can i see you again"] },
            { you: "Next time maybe you can kiss me.", them: ["oh", "ok. yes. noted", "very noted", "next saturday??"] }
          ] }
      ]
    },
    {
      id: "s3", route: "bf", title: "Good morning",
      them: ["morning ☀️", "[photo] this is my coffee instead of brunch with you", "its from the work machine. tastes like a coin", "hope work's ok today"],
      replies: [
        { you: "Morning! That is a tragic coffee.",
          them: ["i know 😔", "dinner tonight to make up for it?"],
          replies: [
            { you: "Yes. Where?", them: ["theres a thai place in west end that does the best pad see ew", "its also really dark in there so you wont see how much i eat"] },
            { you: "Can't tonight. Tomorrow?", them: ["tomorrow works", "ill survive on coin coffee"] }
          ] },
        { you: "Good morning to you too 😊",
          them: ["oh i like getting one back", "is this a thing now? good morning texts?", "bc im into it"],
          replies: [
            { you: "It's a thing now.", them: ["great. im going to be so annoying about it", "have a good day x"] },
            { you: "I've never had someone text me good morning before.", them: ["never??", "ok well now you do. every day. sorry in advance"] }
          ] },
        { you: "I told someone at work about you.",
          them: ["wait what", "who?? what did you say"],
          replies: [
            { you: "Sam. I said I'm seeing a guy.", them: ["{name} thats big", "what did she say"],
              replies: [
                { you: "She said 'finally' and asked to see a photo.", them: ["finally lol i like her already", "which photo. please not the squinting one"] },
                { you: "She was really nice about it.", them: ["good", "ok my morning just got way better"] }
              ] },
            { you: "Just that I had a good weekend. Baby steps.", them: ["still counts", "one day youll tell them about me and my coin coffee"] }
          ] }
      ]
    },
    {
      id: "s4", route: "bf", title: "So... are we?",
      them: ["ok can i ask something kind of forward", "i deleted the app last night. i dont really want to see anyone else", "do you want to be my boyfriend?"],
      replies: [
        { you: "Yes. I'd really like that.",
          them: ["😊😊😊", "ok im grinning at my phone like an idiot", "my housemate just asked who died"],
          replies: [
            { you: "I have a boyfriend. That's so weird to say.", them: ["good weird or bad weird"],
              replies: [
                { you: "Good weird. Really good weird.", them: ["say it out loud", "like in your kitchen. go on"] },
                { you: "Scary weird. But I want it.", them: ["scary's ok", "ill be scared with you. well im not scared. but you know what i mean"] }
              ] },
            { you: "Did you just tell your housemate?", them: ["i told my housemate, the group chat and kevin", "kevin wants to meet biscuit"] }
          ] },
        { you: "I want to, I'm just nervous about the word.",
          them: ["thats ok", "we can just keep doing what we're doing and you can use the word whenever", "im not going anywhere lol. i deleted the app"],
          replies: [
            { you: "Okay. Boyfriend. Yes. Boyfriend.", them: ["💙", "you said it!!"] },
            { you: "Can I tell people I'm seeing someone first?", them: ["yeah of course", "seeing someone, dating, hanging out with a tall guy who spills things. whatever you want", "i know what it is"] }
          ] },
        { you: "Wait, you deleted the app before asking me?",
          them: ["...yes", "bold i know", "if you say no im redownloading it and we never speak of this"],
          replies: [
            { you: "Don't redownload it. Yes.", them: ["oh thank god", "boyfriend 😭"] },
            { you: "I deleted mine last week.", them: ["LAST WEEK??", "and you let me sweat like this", "ok. boyfriends. both of us"] }
          ] }
      ]
    },
    {
      id: "s5", route: "bf", title: "Meeting your friends",
      them: ["trivia with jess and priya tonight!! should i be scared", "whats the dress code for meeting the friends"],
      replies: [
        { you: "Jess will grill you. Priya will love you.",
          them: ["ok. ill do the sport questions so jess likes me", "what does she grill people on"],
          replies: [
            { you: "Your intentions.", them: ["my intentions are trivia and you", "wait. you then trivia. then chips"] },
            { you: "Whether you're good enough for me.", them: ["fair. probably not", "but i know a scary amount about 2000s pop so"] }
          ] },
        { you: "I'm a bit nervous introducing you.",
          them: ["yeah thats fair", "is it them knowing or me being there"],
          replies: [
            { you: "The friends seeing me with a guy. For real.", them: ["yeah. thats a big one", "if it gets too much just squeeze my hand and we'll go outside for a bit. deal?"],
              replies: [{ you: "Deal.", them: ["see you at 7 💙"] }, { you: "Can we not hold hands in front of them yet?", them: ["course. no hands", "just two guys who are very good at trivia"] }] },
            { you: "What if they don't like you?", them: ["then ill win them over with trivia", "and if that doesnt work ill sulk a bit. but ill still like you"] }
          ] },
        { you: "Wear something cute. They'll judge.",
          them: ["cute how", "like nice shirt cute or like your kind of cute? bc i cant do what you do. id look like a lampshade"],
          replies: [
            { you: "Nice shirt. I'll do enough cute for both of us.", them: ["ok deal", "what are you wearing"],
              replies: [{ you: "The pink shirt. And gloss.", them: ["oh i love that shirt", "ok now im nervous. youre going to look way better than me"] }] },
            { you: "Lampshade could work.", them: ["rude", "...probably true though"] }
          ] }
      ],
      after: "Jess texts you at 10pm: \"ok i LIKE him\" Priya texts at 10:02: \"he knew every spice girls answer\" Priya: \"like every single one\""
    },
    {
      id: "s6", route: "bf", title: "Holding hands",
      them: ["can i hold your hand tomorrow? on the walk at south bank", "totally fine if not", "i just thought id ask instead of doing the weird hand brush thing"],
      replies: [
        { you: "Yes. I'd like that.",
          them: ["ok 🙂", "can i ask. have you held a guy's hand in public before"],
          replies: [
            { you: "No. Never.", them: ["oh ok. big one then", "if you want to let go just let go. i wont be weird about it"],
              replies: [
                { you: "What if someone says something?", them: ["then we keep walking", "and ill probably say something back and you'll be embarrassed", "but its south bank on a sunday. everyone's looking at the ibises"] },
                { you: "Okay. I'm excited.", them: ["me too. way more than a normal person should be about a walk"] }
              ] },
            { you: "Once, at Pride. But that doesn't count.", them: ["it counts!", "but yeah tomorrow's just a normal sunday. thats harder"] }
          ] },
        { you: "Maybe not in public yet. Is that okay?",
          them: ["yeah of course", "can i hold it in the car though? nobody sees that"],
          replies: [
            { you: "Yeah. The car's fine.", them: ["car hand holding. very romantic", "one day south bank. no rush"] },
            { you: "Sorry. I feel like I'm letting you down.", them: ["youre not", "i came out at 19 and didnt hold a guys hand in public till i was like 23. i get it"] }
          ] },
        { you: "I'll try. I might let go if I get nervous.",
          them: ["thats fine", "if you let go ill just walk really close to you. like annoyingly close"],
          replies: [{ you: "Deal.", them: ["deal 💙"] }] }
      ],
      after: "On the walk he keeps bumping his shoulder into yours. After a while you start bumping back."
    },
    {
      id: "s6b", route: "bf", title: "Summer feet",
      them: ["davies park markets tomorrow?", "its meant to be 33. wear something cool"],
      replies: [
        { you: "I was thinking the flip-flops. And painted toes.",
          them: ["the pink ones from the women's section? yes", "what colour toes"],
          replies: [
            { you: "Pink, to match.", them: ["obviously", "im buying you a mango smoothie"] },
            { you: "Rainbow. A different colour each toe.", them: ["ok amazing", "im going to be so smug holding your hand all morning"] }
          ] },
        { you: "My toes are painted but I'll wear sneakers.",
          them: ["you can!", "but you painted them for a reason right", "nobody looks at feet at the markets. and if they do theyre thinking nice colour"],
          replies: [
            { you: "Okay. Sandals it is.", them: ["😊 see you at 8"] },
            { you: "Sneakers this time. Sandals next time.", them: ["deal"],
              after: "You wear the sneakers. The next Saturday you wear the sandals, and he notices before you say anything." }
          ] },
        { you: "Can I borrow your flip-flops? Mine are too manly.", them: ["mine are worse lol. theyre from a petrol station", "shops after breakfast? we'll find you some cute ones"] }
      ],
      after: "At the markets the lady at the plant stall looks down and says \"ooh, love that colour on you.\" You say thanks. You barely even go red.",
      debrief: "Painted toes at the markets counts. It isn't a small thing."
    },
    {
      id: "s7b", route: "bf", title: "Lazy Sunday",
      intro: "Sunday afternoon at his place in New Farm. The game's on mute, you've got your feet up on the couch, and he's been eyeing your socks for ten minutes.",
      them: ["ok so you know how you said youre not ticklish", "you squirmed when my hand brushed your foot before. i saw it", "socks off. i'm testing this"],
      replies: [
        { you: "Don't you dare.",
          them: ["too late, one sock down 😈", "omg you ARE ticklish. you kicked the remote across the room", "say stop and i'll stop"],
          replies: [
            { you: "Okay okay STOP 😂", them: ["stopping. hands up", "you've gone bright red lol", "come here, i'll make you a tea as an apology"] },
            { you: "...fine. Five more seconds.", them: ["five more seconds, he says 😂", "you lasted two", "officially the most ticklish man in brisbane. im telling jess"] }
          ] },
        { you: "I'm not ticklish. Go on, try.",
          them: ["big words", "socks off then", "ok you lasted about one second before you yelped. the neighbours probably heard"],
          replies: [
            { you: "That was a cough.", them: ["a cough. sure", "do you want me to stop or are you still 'not ticklish'"],
              replies: [
                { you: "Stop! I give up 😂", them: ["stopped 🙂", "your feet are freezing btw. blanket?"] },
                { you: "Revenge is coming.", them: ["i'm not ticklish", "(i am extremely ticklish, please don't)"] }
              ] },
            { you: "Okay fine, I'm a bit ticklish.", them: ["a bit 😂", "i'll leave them alone. for today"] }
          ] },
        { you: "Only if I get to do yours after.", them: ["deal", "wait no. i didn't think that through", "ok truce, nobody's feet get touched", "(for now)"] }
      ],
      after: "Later he pulls the blanket over both of you and keeps one hand resting on your ankle for the rest of the game. You don't move it.",
      debrief: "Mucking around on the couch with your boyfriend is part of it too. And stop means stop."
    },
    {
      id: "s8", route: "bf", title: "A wobble",
      them: ["hey can we talk about the work drinks", "when your boss came over you introduced me as your friend", "it stung a bit ngl. ive been thinking about it all night and id rather just say it"],
      replies: [
        { you: "I'm sorry. I panicked.",
          them: ["i know. ive done it too", "i just. i like being with you and i want people to know. one day"],
          replies: [
            { you: "I want that too. I'm just not there yet.", them: ["i know. we're ok 💙"] },
            { you: "Can we work out together how I tell work?", them: ["yes. pancakes saturday and we make a plan", "on a napkin. very professional"] },
            { you: "I don't know why I did it.",
              them: ["i think you do lol", "youre not out at work, your boss walked over, your brain went nope", "doesnt make you a bad boyfriend"],
              replies: [{ you: "Thanks for getting it.", them: ["always. still bringing it up again in a month though 😏"] }] }
          ] },
        { you: "I'm not out at work yet. I should have told you that.",
          them: ["oh. ok that makes sense", "ill follow your lead at work stuff. just tell me, yeah?", "id rather know where the lines are than walk into them"],
          replies: [
            { you: "Sam knows. Nobody else.", them: ["ok so sam's safe", "so no holding hands under the table at work drinks then 😂"] },
            { you: "I want to be out at work. I'm just scared.", them: ["yeah. people can be weird", "when youre ready ill come to the next one and be extremely obviously your boyfriend"] }
          ] },
        { you: "It's not a big deal. You're overreacting.",
          them: ["ok maybe its not a big deal to you", "but i spent a long time being someone's 'friend' when i wasnt. im not doing that again", "im not saying come out at work tomorrow. just dont tell me its nothing"],
          replies: [
            { you: "You're right. I'm sorry.", them: ["thank you", "we're ok. i just needed to say it"] },
            { you: "I didn't know that about you.", them: ["yeah. my first boyfriend kept me a secret for a year", "so its a bit of a sore spot. i should have told you"] }
          ] }
      ],
      debrief: "Couples have wobbles. You talked about it, which is most of it."
    },
    {
      id: "s9", route: "bf", title: "Three words",
      them: ["cant sleep", "been thinking about you. and biscuit a bit", "i love you. you dont have to say it back. i just wanted to say it"],
      replies: [
        { you: "I love you too.",
          them: ["💙💙💙", "ok now im definitely not sleeping", "have you said that to a guy before?"],
          replies: [
            { you: "No. You're the first.", them: ["oh", "ok im screenshotting this", "sorry. not sorry"] },
            { you: "Come over. I don't want to say it over text.", them: ["its 1am", "...im putting my shoes on"] }
          ] },
        { you: "I'm not quite there yet, but I'm really happy with you.",
          them: ["honestly thats a good text to get at 1am", "no rush. i meant it either way", "im not counting or anything"],
          replies: [
            { you: "I think I'm close.", them: ["ill take close", "go to sleep"] },
            { you: "Thank you for not making it weird.", them: ["im the one texting i love you at 1am lol", "if anyones making it weird its me"] }
          ] },
        { you: "Did you mean to send that?",
          them: ["yes", "ok i was going to say it at dinner on saturday and i couldnt wait", "do you want me to unsend it. i wont. but do you"],
          replies: [
            { you: "Don't you dare unsend it.", them: ["ok 😊", "i love you"] },
            { you: "Say it again on Saturday. Out loud.", them: ["deal", "out loud. over dumplings"] }
          ] }
      ]
    },
    {
      id: "s10", route: "bf", title: "Six months",
      them: ["happy six months 🥂", "remember when you were scared of the word boyfriend", "and last week you introduced me to your boss and i didnt even ask"],
      replies: [
        { you: "I know. Who even am I.",
          them: ["here's to the next six. and biscuit obviously", "whats your favourite bit so far"],
          replies: [
            { you: "The first time we held hands at South Bank.", them: ["you let go after like 30 seconds", "then grabbed it back. i think about that a lot"] },
            { you: "When you spilt my coffee.", them: ["of course you'd pick that", "mine's when you told your boss 'this is my boyfriend'. you went so red. i nearly cried at the bar"] },
            { you: "Lazy Sundays on the couch.", them: ["even when i steal your socks?", "dont answer that"] }
          ] },
        { you: "Thank you for being so patient with me.",
          them: ["you didnt need patience. you just needed a bit of time", "and you did all the hard stuff. i just held your hand. like literally", "love you"],
          replies: [
            { you: "I love you too.", them: ["💙", "thai place tonight then dancing in the valley? wear the gold sandals"] },
            { you: "Six months ago I couldn't say the word gay.", them: ["and now?"],
              replies: [{ you: "Now I'm gay and I've got a boyfriend and a very spoiled dog.", them: ["best text ive ever got", "happy six months x"] }] }
          ] }
      ],
      debrief: "This is the end of the story for now. Replay any chapter whenever you like."
    }
  ]
};
