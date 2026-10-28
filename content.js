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
      intro: "You and Archie have been together three years. Her sister has a Pinterest board for your wedding. You've never told anyone that the board makes your chest go tight.",
      them: ["{name}, dinner at that Italian place on Friday? I booked us a table 🍝", "My sister keeps asking when we're getting engaged 😂", "She asked me at lunch today. In front of the whole café. I nearly died"],
      replies: [
        { you: "Sounds good! Haha tell her to relax.",
          them: ["Already did. She never listens 🙄", "She's also decided you're wearing the navy suit to her wedding so. Good luck with that", "Love you x"],
          replies: [
            { you: "Love you too x",
              them: ["😘", "Oh and wear something nice Friday. Not the rugby polo. I'm begging"],
              replies: [
                { you: "I was thinking of trying something a bit different actually.", gaydar: 15, them: ["Ooh different how?", "Like a nice shirt? Yes please. You've got that cream one with the tags still on"] },
                { you: "No promises.", them: ["{name} 😐", "Fine. But if you wear the polo I'm ordering the most expensive thing on the menu"] }
              ] },
            { you: "Do we have to talk about weddings?",
              them: ["Haha ok calm down, it's my sister's wedding not ours", "...unless you're trying to tell me something lol", "You're not are you"],
              replies: [
                { you: "No, no. Just a long day.", them: ["Ok. You've had a lot of long days lately", "Friday. Carbs. Wine. You'll be fine x"] },
                { you: "I don't know.", gaydar: 20, them: ["You don't know what?", "{name}?", "Ok you're being weird. We'll talk Friday"] }
              ] }
          ] },
        { you: "Ha. Yeah. Friday's good.",
          them: ["You okay? You've seemed a bit far away lately.", "Like you're here but you're not. I don't know how else to say it", "I'm here if something's up x"],
          replies: [
            { you: "Just tired. Work stuff.",
              them: ["Okay. You've said that a lot", "I'm not having a go. I just miss you, even when you're sitting next to me", "Get some sleep xx"] },
            { you: "Can I ask you something weird?",
              them: ["Always", "Is it about the wedding? Because I promise I'm not expecting a ring"],
              replies: [
                { you: "Do you ever feel like you're playing a part?", gaydar: 20,
                  them: ["Like at work? All the time", "Like with us? No. Never.", "Do you?"],
                  replies: [
                    { you: "Sometimes.", them: ["Oh", "Ok", "That's kind of a big thing to say over text {name}", "Let's talk properly Friday. Ok? I love you"] },
                    { you: "No. Forget it. I'm being dramatic.", them: ["You're allowed to be dramatic with me", "But ok. Friday x"] }
                  ] },
                { you: "Never mind. It's nothing.", them: ["It's never nothing when you say it's nothing", "But ok. Friday x"] }
              ] }
          ] },
        { you: "Can we go somewhere else this time?",
          them: ["Why? You love that place", "You literally said their tiramisu was a religious experience"],
          replies: [
            { you: "The waiter there keeps staring at me.", gaydar: 15, them: ["The cute one? Lol he's probably just bored", "Or he thinks you're cute. Should I be worried 😂", "Kidding. We're going. Wear something nice"] },
            { you: "Fine, Italian.", them: ["Yay. Friday 7. Love you x"] }
          ] }
      ],
      after: "You put the phone down and feel like you're playing a part. You've felt that for a while. On Friday you open your wardrobe and look at the cream shirt with the tags on, and the little bottle of lilac nail polish you bought \"for a friend\".",
      debrief: "That far-away feeling is common before people come out. It's not you being a bad partner. It's a part of you asking to be seen."
    },
    {
      id: "c1b", route: "archie", gaydar: 40, gaydarSays: "Since when does my boyfriend own lip gloss??", title: "The Italian place", contact: "Archie",
      intro: "Friday. You wore clear gloss, a bit of mascara, the cream silky shirt that's been in your wardrobe with the tags on, and your nails painted lilac. Archie looked at you for a second too long when you picked her up and didn't say anything all the way there.",
      outfits: [{"label": "A plain shirt, but clear gloss and lilac nails", "gaydar": -10, "intro": "Friday. You kept it simple: a plain white shirt and your good jeans. But you put on clear gloss and painted your nails lilac, and you didn't take either off. Archie noticed in the car. She didn't say anything all the way there."}, {"label": "The cream silky shirt, gloss, mascara and lilac nails"}, {"label": "Silky shirt, gloss, mascara, lilac nails and gold hoops", "gaydar": 5, "intro": "Friday. Clear gloss, a bit of mascara, the cream silky shirt that's had the tags on for months, lilac nails, and the little gold hoops you bought online and hid in your sock drawer. Archie looked at the hoops for a long time at the first red light. She didn't say anything all the way there.", "them": ["and EARRINGS??"]}],
      them: ["home", "what was that tonight", "the lip gloss {name}. and your nails"],
      replies: [
        { you: "What do you mean?",
          them: ["dont do that", "you know exactly what i mean", "you just turned up in it like it was normal", "the waiter kept looking at your hands and i wanted to die"],
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
                    { you: "I didn't lose a bet.", them: ["yeah i know {name}", "thats kind of the problem"] },
                    { you: "Okay.", them: ["ok?", "thats it?", "whatever. night"] }
                  ] }
              ] },
            { you: "Do you not like it?",
              them: ["no", "i dont", "its not you. or its not the you i know"],
              replies: [
                { you: "Maybe it is me.", gaydar: 60,
                  them: ["what does that mean", "{name} you're freaking me out"],
                  replies: [
                    { you: "Forget I said that.", them: ["you cant just say that and then go forget it", "fine. night"] },
                    { you: "I don't know yet. I'm trying to work it out.", gaydar: 65, them: ["work WHAT out", "we've been together three years", "im not doing this over text"] }
                  ] },
                { you: "That's fair.", them: ["im not trying to be mean", "i just want my boyfriend back. not whoever that was tonight"],
                  replies: [{ you: "Okay.", them: ["night"] }] }
              ] }
          ] },
        { you: "Did you not like it?",
          them: ["honestly? no", "it was really embarrassing", "and dont wear it saturday. my friends will be there"],
          replies: [
            { you: "Yeah, okay.", them: ["thanks", "night"] },
            { you: "I'm going to wear what I want.",
              them: ["wow ok", "then dont be surprised when people say stuff", "and dont expect me to stick up for you"],
              replies: [
                { you: "I wasn't asking you to.", them: ["good", "night"] },
                { you: "Night, Archie.", them: ["night"] }
              ] }
          ] }
      ],
      after: "You take the gloss off with toilet paper in the bathroom. Your nails you leave. You look at them a lot over the weekend.",
      debrief: "Wanting to look a certain way before you can explain why is really common. Someone being uncomfortable with it doesn't make it wrong, and you don't owe anyone a reason yet."
    },
{
      "id": "archie-feet",
      "route": "archie",
      "gaydar": 65,
      "spark": 40,
      "gaydarSays": "Josh from logistics had my boyfriend giggling like a schoolgirl in front of my whole office. My BOSS was there.",
      "title": "Pool party",
      "contact": "Archie",
      "irl": true,
      "intro": "Archie's work summer party at her boss's house. Shoes off by the pool, the boss's rule. You took your sneakers off at the gate and remembered too late that your toes are still lilac from last weekend. Josh from logistics is here. Archie talks about him a lot for someone she says is boring.",
      "them": [
        {
          "note": "Archie looks at your feet on the pool tiles. She doesn't say anything. She takes your hand, then lets it go when her boss walks past."
        },
        {
          "note": "Josh comes over with two beers. Polo shirt, board shorts, big bare feet. He hands one to Archie and one to you."
        },
        "\"So you're the famous {name}.\" He looks down. \"Nice colour, buddy. Arch, you never said he gets pedicures.\"",
        "It's not a pedicure. He just...",
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
                  "note": "Archie laughs, a bit relieved, and sits down next to you. She puts her hand on your knee. It stays there for a whole minute."
                },
                "Okay, that was impressive. I'd have screamed.",
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
                  "note": "He stops. Archie's laughing, but she's not looking at you. She's looking at Josh, shaking her head, like he's the one who did something cute."
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
              "after": "Archie, texting Priyanka that night: \"he giggled like a little girl in front of my whole work\" \"josh made him beg\" \"i don't know why i'm annoyed. i'm annoyed\""
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
                  "note": "Archie isn't laughing. She's holding Josh's beer while he does it. She keeps holding it after."
                }
              ],
              "after": "Archie, to Priyanka, the next morning: \"he just lay there and let josh tickle him. for like five minutes\" Priyanka: \"he looked like he was having the time of his life tbh\" Archie: \"yeah. that's the problem\""
            }
          ]
        }
      ],
      "debrief": "Being ticklish isn't a character flaw, and neither is laughing hard in front of people. Whatever she felt watching it was about her and Josh, not about you."
    },
    {
      id: "c3", route: "archie", gaydar: 99, spark: 0, gaydarSays: "Left him for Josh. He asked where Josh got his jacket.", title: "The other guy", contact: "Archie", irl: true,
      intro: "Archie texted you this morning: \"can you come over tonight. we need to talk.\" Her place in Paddington. There's a men's denim jacket on the back of her kitchen chair. It isn't yours. She's put the kettle on twice without making anything.",
      them: [
        { note: "She sits on the far end of the couch with her knees pulled up and a cushion in her lap, like a shield." },
        "Okay. I'm just going to say it, because I've been practising in the shower for a week and if I don't say it now I'll chicken out and we'll watch MasterChef instead.",
        "I've met someone. His name's Josh. He's from work, he's in logistics, he plays pickup soccer on Wednesdays and he's honestly a bit boring. Nothing's happened. Well. Not much. A coffee. A really long coffee. But I want something to happen.",
        { note: "She looks at the jacket on the chair, then back at you." },
        "And before you say anything, I don't think you're going to be as upset as you think you should be. Because I don't think you've wanted me in a long time, {name}. I think you want someone like Josh too."
      ],
      replies: [
        { you: "What's that supposed to mean? I'm your boyfriend. Of course I want you.",
          them: [
            "You know what it means.",
            { note: "She doesn't look away. She's been crying earlier; you can tell from her eyes." },
            "The gloss at the Italian place. The lilac nails you never took off. The way you know the names of all my lipsticks. The way you look at waiters, and bartenders, and the guy at the liquor store who calls you 'buddy'.",
            "The way you looked at Josh at my work drinks, honestly. Before I even liked him. You asked him where his jacket was from and you went red.",
            "You're gay, {name}. I've known for months. I kept waiting for you to tell me, and you never did, and I'm not waiting anymore. I'm not angry. I'm just done waiting."
          ],
          replies: [
            { you: "I'm not gay, Archie. I like makeup. That's not the same thing.",
              them: [
                "Okay.",
                "Then you're a straight guy who wears lip gloss, borrows my concealer, cries at Queer Eye and hasn't kissed his girlfriend properly since Christmas.",
                "Either way, I'm going. I'm not trying to be cruel. I'm trying to be honest, because one of us has to be, and it was never going to be you."
              ],
              replies: [
                { you: "Archie, please. Listen to me. I'm not gay. I just need to try harder with us.",
                  them: [
                    { note: "She smiles at you, sad and very kind." },
                    "Babe. You don't have to be anything for me anymore. That's what I'm trying to tell you. You're off the hook.",
                    "You don't have to try harder. You don't have to take the gloss off before you pick me up. You can stop."
                  ] },
                { you: "(Say nothing.)",
                  them: [
                    { note: "She waits a long time. The kettle clicks off again." },
                    "Yeah.",
                    "I hope one day you say it to someone, {name}. Even if it isn't me. Especially if it isn't me, actually. You should say it to someone who's not losing anything."
                  ] }
              ] },
            { you: "Wait, you noticed me looking at Josh? Were you watching to see if I was looking at Josh?",
              them: [
                "I didn't need to watch. Everyone saw.",
                "He even asked me after. In the car park. 'Is your boyfriend...?' And he did this little hand thing. And I said no, he's not.",
                "And then I went home and cried in the shower, because I knew I was lying for you. And I didn't want to lie for you anymore."
              ],
              replies: [
                { you: "Josh asked you if I was gay? In the car park? That's so embarrassing.",
                  them: ["That's the bit you're upset about?", { note: "She laughs, properly, for the first time tonight." }, "God, I'm going to miss you. You're ridiculous."] },
                { you: "I'm sorry you had to lie for me. That's not fair on you.",
                  them: ["No. It wasn't.", "But I chose to. For a long time. Because I loved you and I thought if I didn't say it, it wouldn't be true."] }
              ] }
          ] },
        { you: "You're leaving me for a guy from work? A guy who plays pickup soccer?",
          them: [
            "Yes.",
            "I'm leaving you for a man who looks at me like I'm the only person in the room. He's not exciting. He wears the same three polo shirts. He's never owned a moisturiser in his life. And he looks at me like that.",
            { note: "She says it gently, which somehow makes it worse." },
            "You've never looked at me like that, {name}. You look at men like that. You look at my makeup bag like that.",
            "I'm not angry anymore. I was, for a while, a few months ago. Now I just want us both to be with someone who actually wants us."
          ],
          replies: [
            { you: "I do want you. I've wanted you for three years. You're my best friend.",
              them: [
                "Exactly. I'm your best friend.",
                "You want me to do your eyebrows and watch MasterChef and tell you if your shirt's see-through. And I love that, I really do. It's been the best three years.",
                "But I want someone who wants to kiss me, not borrow my lip gloss. And I don't think that's ever going to be you."
              ] },
            { you: "Is he better than me? Just tell me what he's got that I don't.",
              them: [
                "He's not better. He's just... into me. Into girls. Simple as that.",
                "He doesn't spend dinner wondering if the waiter's single. He didn't ask me what shade my nail polish was. He asked me what I was doing on the weekend and then he turned up.",
                "And honestly? He's never once looked at my bathroom shelf like he wanted to move in."
              ] }
          ] },
        { you: "(Start crying.)",
          them: [
            { note: "She drops the cushion and moves down the couch and puts her arm around you, the way she always has." },
            "I know. I'm sorry. I know.",
            "I'm not dumping you because you're a bad boyfriend. You were a lovely boyfriend. You remembered my sister's birthday every single year. You were just a gay one.",
            "And I think you need someone to say that out loud, because you never will. So I'm saying it. You're gay, babe. It's okay."
          ],
          replies: [
            { you: "Don't say that. Please don't say that.",
              them: ["Okay. I won't say it again.", "But I'm not taking it back. I'll just be quiet about it. Like you've been."] },
            { you: "(Keep crying into her shoulder.)",
              them: [
                { note: "She holds on until you stop. It takes a while. She doesn't let go once." },
                "Josh is picking me up at seven. You can stay till then.",
                "We'll watch MasterChef. One last time. You can tell me which contestant you think is cute, and I won't say anything."
              ] }
          ] },
        { you: "Please, Archie. Give me another chance. I'll stop with the makeup. I'll stop with all of it.",
          them: [
            "It's not the makeup.",
            "I'd let you wear my entire makeup bag if you wanted me. Honestly. I'd do your lashes every morning. But you don't want me. Taking the gloss off won't change that.",
            "And I don't want you to stop. That's the bit you're not getting. I don't want you to change for me. I want you to be with a man who loves you in it."
          ],
          replies: [
            { you: "I don't want to be with a man. I want to be with you.",
              them: [
                { note: "She just looks at you for a long time. Long enough that you look away first." },
                "Okay, babe.",
                "Josh is picking me up at seven."
              ] },
            { you: "Okay. Okay.", them: ["Okay.", { note: "She squeezes your hand. Then she picks up Josh's jacket and puts it on." }] }
          ] },
        { you: "Fine. Go be with Josh. Go have a boring life with Mr Pickup Soccer.",
          them: [
            "I will.",
            "And it's going to be boring and lovely and I'm going to be so happy, {name}.",
            "Leave your key on the bench, yeah? And take your lilac nail polish. It's in my bathroom. It's always been more yours than mine."
          ] }
      ],
      after: "Archie, to her sister, that night: \"I did it. I told him about Josh.\" \"How'd he take it?\" \"He kept saying he's not gay.\" \"Is he?\" \"Babe. He cried, and then he asked me where Josh got his jacket.\"",
      debrief: "Sometimes someone else says it before you're ready. It can feel like being found out and being let go at the same time. You still get to decide when you say it yourself."
    },
    {
      id: "c4", route: "archie", gaydar: 99, spark: 0, gaydarSays: "Josh's friend Ryan does pilates. I'm just saying.", title: "Archie and Josh", contact: "Archie",
      intro: "Three weeks later. Archie's Instagram is all Josh now: Josh at pickup soccer, Josh at the Breakfast Creek Hotel holding a steak the size of his head, Josh in a polo shirt with his arm around her. Not one photo of him in anything but a polo shirt. Then she texts.",
      them: ["Hey {name}. Just wanted to say I'm doing okay.", "Josh and I are good. Like, really good. He took me to the Brekky Creek and ate a 500g steak and then fell asleep on the couch by 8:30. It's the most romantic thing that's ever happened to me", "I hope that doesn't hurt to hear. And I hope you're okay too. I mean that."],
      replies: [
        { you: "I'm okay. Honestly. I'm really happy for you, Arch. He seems like a real guy's guy.",
          them: [
            "He is SUCH a guy's guy. He doesn't own a single thing with a scent. His shampoo is 2-in-1. I'm obsessed with him",
            "Thank you for saying that. It means a lot",
            "Can I say one thing and then I'll leave it alone forever? Promise",
            "Josh has a friend. Ryan. He's gay, he's lovely, he does reformer pilates, he has a dog called Margot and he has very nice arms. Just putting it out there into the universe"
          ],
          replies: [
            { you: "Archie. I'm not gay. Why does everyone keep saying that?",
              them: ["Ok babe 💛", "Ryan's number is in my phone whenever you want it", "No pressure. Just arms"] },
            { you: "Why are you telling me about his arms? Why would I care about his arms?",
              them: ["No reason 😇", "Purely an arms update", "For your information. As a straight man. Who likes information about arms"] },
            { you: "...How nice are the arms? Hypothetically.",
              them: ["VERY nice", "Ok I'm saying nothing else. I'm just smiling at my phone and Josh is asking why", "I told him it's a work thing"] }
          ] },
        { you: "Are you texting me from his place right now?",
          them: ["...maybe", "Sorry. Too soon?", "He says hi btw. He also says your jacket at the work drinks was nicer than his, and he wants to know where you got it. He's never asked me where I got anything"],
          replies: [
            { you: "Tell him it's from the women's section at Zara. Actually, don't tell him that.", them: ["LOL", "Oh I'm telling him", "...he said 'fair enough' and went back to the game. That's Josh"] },
            { you: "Too soon, Arch. I need a bit.", them: ["Sorry. You're right. I'll go", "Look after yourself. Properly. Drink water and moisturise. Actually you already moisturise more than anyone I know"] }
          ] },
        { you: "I miss you. Not as a girlfriend. Just you. Is that weird?",
          them: [
            "Not weird. I miss you too. As my best friend",
            "Can we be that? Eventually? I want to hear about everything. Everyone. Whoever they are. Whatever they look like. However many polo shirts they own",
            "Even if it's a Ryan. Especially if it's a Ryan"
          ],
          replies: [
            { you: "Yeah. Eventually. When it stings less.", them: ["Good 💛", "Take as long as you need. I'm not going anywhere. I'm just going to be on a couch in Bulimba watching Josh sleep through the game"] },
            { you: "It's not going to be a Ryan.", them: ["Ok babe", "Whoever it is. I'll be happy for them"] }
          ] }
      ],
      after: "You still haven't said the word to anyone. Archie said it for you. Nicole acts like it's already been said. And Archie's new boyfriend owns three polo shirts and has never once borrowed her lip gloss.",
      debrief: "Watching someone you loved be happy with someone else stings, even when you know they're better off. It doesn't mean you were the problem. You were just never their person."
    },
    {
      id: "c2", route: "nicole", gaydar: 75, friend: true, gaydarSays: "He knew Jemima's lip liner by name. I'm not saying anything. I'm just saying.", title: "One of the girls", contact: "Nicole",
      intro: "Friday drinks at the Regatta with the uni girls. Archie couldn't come. You spent most of the night helping Ailisha pick a lipstick on her phone and told Jemima the bartender was \"objectively\" good-looking, which you then spent ten minutes explaining was a normal thing for a straight guy to say. Nicole watched you the whole time with a little smile.",
      them: ["{name}!! tonight was so fun", "ok i've decided something and you're not allowed to argue", "you're coming to girls' night from now on. thursdays. permanently. you're one of us now"],
      replies: [
        { you: "Girls' night? Nic, I'm a guy. I've got a girlfriend. I'm pretty sure that disqualifies me.",
          them: [
            "are you though",
            "like technically yes. legally yes. i've seen you play pickup soccer (badly)",
            "but you knew the name of jemima's lip liner. you said the bartender had 'great forearms'. you cried at the mamma mia trailer. the TRAILER, {name}",
            "you're one of the girls babe. i don't make the rules"
          ],
          replies: [
            { you: "I'm literally dating Archie. Three years. We're basically engaged according to her sister.",
              them: ["mm", "how is archie", "do you two still go on dates or is it mostly you doing her eyebrows while you watch masterchef"],
              replies: [
                { you: "We go on dates! We went to the Italian place last week. It was very romantic and very straight.", them: ["very straight 😂", "was that the night you wore lip gloss", "jemima told me. jemima tells me everything", "anyway. girls' night is thursday. bring the good face masks, not the cheap ones"] },
                { you: "...okay, it's mostly eyebrows. But I'm really good at eyebrows.", them: ["i KNOW you are. that's my whole point", "thursday. you're doing mine too"] }
              ] },
            { you: "The bartender DID have great forearms. That's just a fact. Anyone could see that.",
              them: ["SEE", "this is exactly what i'm talking about", "next time we'll go somewhere with even better forearms. i know a bar in the valley 👀"],
              replies: [
                { you: "What's that supposed to mean?", them: ["nothing!! 😇", "just that the drinks are good. and the forearms. and the music is mostly kylie", "very normal bar for very normal straight guys"] },
                { you: "...What bar? Just so I know. For the cocktails.", them: ["omg", "i'll send you the address", "purely for the cocktails obviously. which are pink. and come with a little umbrella"] }
              ] }
          ] },
        { you: "Ha. Sure. What do you even do at girls' night?",
          them: [
            "face masks. wine. the bachelorette. talk about boys. rate boys. ruin boys' lives in the group chat",
            "you'd be so good at it. you always have opinions about the guys on the bachelorette",
            "you literally said 'he's too pretty to be on this show' about every single one of them last season"
          ],
          replies: [
            { you: "I don't have opinions about the guys. I was just commenting. Objectively.", them: ["objectively 😂", "ok babe", "thursday 7pm. i'll save you the good spot on the couch"] },
            { you: "Fine. But I'm Team Jordan and I'm not changing my mind.", them: ["TEAM JORDAN 😭", "ok you're definitely coming", "and you're explaining why. in detail. with evidence"] }
          ] },
        { you: "What do you mean, one of you? What's that supposed to mean, Nic?",
          them: [
            "you know what i mean",
            "and before you panic, i'm not asking you anything. you don't have to tell me anything. ever, if you don't want to",
            "i'm just saying you're my favourite person to go shopping with. i'd rather go with you than any of the girls",
            "and i'm going to start treating you like it 💅"
          ],
          replies: [
            { you: "There's nothing to tell, Nic. Honestly. I just like shopping.", them: ["ok 💛", "nothing to tell. got it", "anyway can you come to sephora with me saturday, i need a second opinion on blush and you're the only one who's honest"] },
            { you: "Thanks, Nic. I'd love to come.", them: ["yay", "now. sephora saturday. bring your good taste and your loyalty card. i know you have one"] }
          ] }
      ],
      after: "You go to girls' night. You have opinions about all the guys on The Bachelorette. Nicole doesn't say anything. She just tops up your wine and calls you \"babe\" in exactly the voice she uses for the other girls.",
      debrief: "Some friends don't need you to say it. They just quietly make room for you. You get to say it out loud whenever you're ready, or never."
    },
    {
      id: "nicole-2", route: "nicole", gaydar: 90, friend: true, gaydarSays: "He swatched eleven lipsticks on his own wrist. ELEVEN.", title: "Sephora", contact: "Nicole", irl: true,
      outfits: [
        { label: "Jeans and a tee. It's just shopping.", gaydar: -5, intro: "Saturday. Sephora in the Queen St Mall. Jeans, a plain tee, nothing that says anything. Nicole is waiting at the entrance with two iced lattes." },
        { label: "Your cropped knit, a bit of tinted balm and your rings", intro: "Saturday. Sephora in the Queen St Mall. You wore your cream cropped knit, a bit of tinted lip balm and all your rings, because it's Sephora and you didn't want to look like you didn't belong. Nicole is waiting at the entrance with two iced lattes." },
        { label: "Cropped knit, lip tint, mascara and a little shoulder bag", gaydar: 5, intro: "Saturday. Sephora in the Queen St Mall. Cropped knit, berry lip tint, mascara, and the little black shoulder bag you bought online and have never taken out of the flat. Nicole is waiting at the entrance with two iced lattes. She sees the bag and nearly drops one.", them: ["And a BAG. Okay. We're doing this properly then."] }
      ],
      them: [
        "Iced oat latte, extra shot, because you're a diva and I love you.",
        { note: "She hands it to you and links her arm through yours, like she does with the girls." },
        "Okay, mission one: blush. Mission two: a lip for my cousin's wedding. Mission three, and this is the important one: you're getting something for yourself and you're not allowed to pretend it's for Archie."
      ],
      replies: [
        { you: "I don't need anything. I'm just here for moral support. And the free samples.",
          them: [
            "Babe, you just walked straight past the blush and went to the Rare Beauty stand like it was calling your name.",
            { note: "You're already holding a liquid blush. You don't remember picking it up." },
            "Put it on your hand. Go on. I'm not judging. I'm literally the least judgy person in this entire shopping centre."
          ],
          replies: [
            { you: "Okay, but this shade is actually so pretty. Look how it melts in. Nic, LOOK at it.",
              them: [
                "I'm looking!! It's gorgeous!",
                "Okay, that's the one. You're getting it. Don't give me that face. It's for you. You can wear it at home. You can wear it to girls' night. Nobody at girls' night is going to say a single thing except 'where's that from'.",
                { note: "The sales girl comes over and asks if your girlfriend needs help. Nicole says, \"Oh, we're not together,\" and the sales girl says, \"Oh, sorry, I thought,\" and then looks at your swatched wrist, and then says \"oh, okay\" in a totally different voice." }
              ],
              replies: [
                { you: "Why did she say 'oh okay' like that? What did that mean?", them: ["Mean? Nothing. She was just being nice.", { note: "Nicole is biting her lip so hard trying not to laugh." }, "Come on. Lip for my cousin's wedding. I need your eye."] },
                { you: "Fine. I'm getting it. But it's a secret. Archie can't know.", them: ["Your secret's safe with me. All of them are.", { note: "She says \"all of them\" very lightly. She doesn't look at you when she says it." }] }
              ] },
            { you: "Nic, I'm a straight guy in Sephora. I'm literally only here for you.",
              them: [
                "Mm-hm.",
                "Then why have you swatched eleven lipsticks on your own wrist?",
                { note: "You look down. There are eleven stripes on your wrist. You did that." },
                "It's fine. It's honestly fine. Straight guys swatch. Sure. Pick your favourite."
              ],
              replies: [
                { you: "The fourth one. Obviously. The mauve. It's giving soft but expensive.", them: ["'It's giving soft but expensive.'", "{name}. I need you to hear yourself.", "Okay. Mauve it is. I'm buying it for you. Don't argue."] },
                { you: "None of them. I'm washing my wrist. This never happened.", them: ["It happened, babe. I took a photo.", "Kidding. Mostly. Come on, blush."] }
              ] }
          ] },
        { you: "Okay, wait. Mission three. Can I get a lip oil? Just a clear one. Nothing crazy.",
          them: [
            "Yes. Yes yes yes.",
            "Clear's fine. But can I suggest the tinted one? Just slightly? Like a rosy one? Because your lips are naturally pink and it would literally just look like you, but better.",
            "And don't tell me you haven't already looked at them. You were looking at that Dior stand when we walked in like it owed you money."
          ],
          replies: [
            { you: "Okay, fine, the rosy one. But if anyone asks, it's chapstick.", them: ["'It's chapstick' 😂", "Nobody at girls' night is going to ask. They're going to ask where it's from and then buy it themselves.", "Now. Since you're here. Do you want to look at the brow stuff? Your brows are better than mine and it makes me furious."] },
            { you: "The rosy one. And maybe a little liner. Just to see. Don't make it a thing.", them: [{ note: "She very carefully doesn't make it a thing. Her eyes are shining." }, "Not a thing. Totally normal. Lip oil and a liner. Very normal Saturday. Let's get you a basket."] }
          ] },
        { you: "Nic. Why do you keep linking arms with me like I'm one of your girlfriends?",
          them: [
            "Because you are one of my girlfriends.",
            "Okay, that came out wrong. You're my friend. And you're... you know. The kind of friend I link arms with. The kind I go to Sephora with.",
            "Do you want me to stop?"
          ],
          replies: [
            { you: "No. I don't want you to stop. I kind of like it.", them: ["Good. Because I wasn't going to.", { note: "She squeezes your arm and steers you towards the blush." }] },
            { you: "It's fine. People might think we're together, that's all.", them: ["Nobody in this shop thinks we're together, babe.", "Trust me. Nobody."] }
          ] }
      ],
      after: "On the way out Nicole says, \"Same time next month?\" like it's already a standing thing. You go home with a blush, a lip oil and a mauve lipstick you put in your bedside drawer under your socks. You check it's still there before bed. It is.",
      debrief: "Being treated as one of the girls before you've said anything can feel like a hug and a bit scary at once. You're allowed to enjoy it."
    },
    {
      id: "nicole-3", route: "nicole", gaydar: 97, friend: true, gaydarSays: "He rated my Hinge guys out of ten and then said 'actually, I'd date him'. I didn't even flinch.", title: "Rate my Hinge", contact: "Nicole",
      intro: "A month of Thursdays later. Archie's with Josh now. You're at Nicole's every Thursday, and some Sundays. Your blush lives in her bathroom. Tonight she's lying across your lap swiping on Hinge, and you're giving every guy a score out of ten.",
      them: ["ok i'm texting you even though you're literally sitting on my couch because jemima's here and i don't want her to see", "this one. marcus. 31. engineer. 6'2. dog. thoughts", "be honest. you're always honest about guys. you're honestly better at this than me"],
      replies: [
        { you: "Nine. Ten if he loses the bucket hat. The jawline is DOING something. I'd go on a date with him honestly. Like if I were you. Obviously.",
          them: [
            "'like if i were you. obviously' 😭",
            "babe",
            "you'd go on a date with him",
            "you said it. jemima heard it. she just mouthed 'omg' at me across the room"
          ],
          replies: [
            { you: "As you, Nic! I meant if I were you! I'm with Archie. Was with Archie. I'm straight.",
              them: [
                "ok babe 💛",
                "you know i'm never going to ask you, right",
                "you can say whatever you want to me whenever you want. or not. but you don't have to keep doing the 'obviously' thing with me. i'm not going anywhere either way"
              ],
              replies: [
                { you: "I know. Thanks. Can we just keep swiping?", them: ["yes. next one. tom. 28. physio. very good arms", "your face just did a thing. i saw it. i'm saying nothing. i'm SAYING nothing"] },
                { you: "I'm not doing a thing. Next guy. Quick, before I die.", them: ["next guy. ryan. pilates. dog called margot", "wait isn't that josh's friend", "{name} your face"] }
              ] },
            { you: "Okay, but have you seen his second photo? The one at the beach? Nic. NIC.",
              them: ["i have seen it", "i'm sending you a screenshot so you can look at it in peace", "you're welcome"] }
          ] },
        { you: "Three. Bucket hat, fish photo, and he says 'looking for my partner in crime'. Absolutely not, babe. Next.",
          them: ["'absolutely not, babe' 😭", "you called me babe", "you've never called me babe", "i'm screenshotting this for the girls"],
          replies: [
            { you: "I didn't. Did I? It slipped out. It's from girls' night. You're all a bad influence.",
              them: ["we're a wonderful influence", "you're fully one of us now. you said 'babe' and 'absolutely not' in one sentence. ailisha is going to cry"] },
            { you: "I'll call you babe if I want, babe. Next guy. Come on. I'm on a roll.",
              them: ["OMG", "ok next guy. he's a vet. he's holding a puppy", "{name} if you don't give this man a ten i'm kicking you out"] }
          ] },
        { you: "Why do you always ask me about guys? You've got Jemima and Ailisha for this.",
          them: [
            "because you're better at it than them",
            "you notice things. you clocked that the last one was wearing a wedding ring in his third photo. you said one guy's hair was 'giving 2014 one direction' and you were right",
            "you look at guys the way i look at guys. so you're the best person to ask",
            "that's all i'm going to say about that"
          ],
          replies: [
            { you: "I don't look at guys like that. I just notice stuff. I'm a noticing person.", them: ["ok you're a noticing person", "notice this one for me. mitch. 29. electrician. very manly", "would you"] },
            { you: "(Say nothing. Look at Mitch's photos for a really long time.)",
              them: [{ note: "She watches you scroll through all six of Mitch's photos. Twice. Then she takes the phone back, very gently, and hugs you so hard your rings dig into her back." }, "ok", "you don't have to say anything", "but when you're ready, we're finding YOU a hinge guy. jemima is already making a list"] }
          ] }
      ],
      after: "Nicole never asks. She just starts sending you screenshots of guys she thinks you'd like, with no comment, every couple of days. You never reply to them. You never delete them either.",
      debrief: "A friend who sees you before you're ready to be seen, and waits, is rare. Nobody's on a deadline here."
    },
    {
      id: "hannah-1", route: "hannah", gaydar: 20, gaydarSays: "Nice guy. Knew my earrings were from Claire's, which was weird, but nice.", title: "Coffee with Jess's friend", contact: "Hannah",
      outfits: [
        { label: "A polo and chinos. Normal guy.", gaydar: -10, intro: "Jess set you up with her friend Hannah: 31, physio, \"very no-nonsense, you'll love her\". Sunday coffee in Teneriffe. You wore a navy polo and chinos and felt like you were in a costume of a straight guy. She was early. She'd already ordered." },
        { label: "A button-up and a clear coat on your nails", intro: "Jess set you up with her friend Hannah: 31, physio, \"very no-nonsense, you'll love her\". Sunday coffee in Teneriffe. A white button-up, jeans, and a clear coat on your nails that nobody would notice unless they were looking. She was early. She'd already ordered." },
        { label: "A button-up, clear nails and a tiny bit of clear gloss", gaydar: 5, intro: "Jess set you up with her friend Hannah: 31, physio, \"very no-nonsense, you'll love her\". Sunday coffee in Teneriffe. A white button-up, a clear coat on your nails, and a little bit of clear gloss you put on in the car and nearly wiped off twice. She was early. She'd already ordered." }
      ],
      them: ["hey, thanks for coffee", "that was actually really nice. i was expecting jess to set me up with another one of her uni friends who talks about crypto", "you're easy to talk to. and you actually asked me questions which is rare honestly"],
      replies: [
        { you: "Thanks for coming. I was pretty nervous, Jess talked you up a lot. Said you'd see straight through me.",
          them: [
            "lol she says that about everyone. i'm not that scary",
            "i'm just busy. i work six days, i do reformer on the seventh, and i don't really do dates that go nowhere. so if i say yes to a second one it means something",
            "also random but how did you know my earrings were from lovisa. my last boyfriend didn't know i had ears"
          ],
          replies: [
            { you: "My friend Nicole has the same ones. I just notice that stuff, I guess.",
              them: ["ha fair. you're observant", "i like that. most guys don't notice anything", "so. second date? friday? i'll pick somewhere with actual food this time"],
              replies: [
                { you: "Friday sounds good. You pick, I'm easy.", them: ["good. paddington. there's a little italian place", "don't be late. i'm always early and it makes me cranky"] },
                { you: "Friday's great. Should I dress up?", them: ["just don't wear flip-flops and we're fine", "see you friday"] }
              ] },
            { you: "Honestly I was just looking at them the whole time because they were cute. Sorry. Is that weird?",
              them: ["lol no. it's nice", "most guys look somewhere else entirely", "friday? second date?"],
              replies: [{ you: "Yes. Friday. Definitely.", them: ["good", "paddington. 7. i'll book"] }] }
          ] },
        { you: "It was nice! The coffee was great. Do you want to do it again?",
          them: ["yeah i would", "you're different to the guys i normally go out with. less... i dunno. less blokey? in a good way", "friday?"],
          replies: [
            { you: "Is less blokey a good thing?", them: ["for me yeah. i've dated enough guys who only talk about sports", "friday. paddington. i'll book somewhere"] },
            { you: "Friday's perfect. I'm looking forward to it.", them: ["me too", "night {name}"] }
          ] },
        { you: "Did you notice my nails? Sorry. I don't know why I'm asking that.",
          gaydar: 30,
          them: ["your nails?", "oh. the clear stuff? yeah i noticed", "it's fine. lots of guys do that now. my brother does a clear coat because he bites them", "do you bite them?"],
          replies: [
            { you: "Yeah. Totally. That's why. I bite them.", them: ["ha ok. well it worked, they looked good", "anyway. second date? friday?"] },
            { you: "No, I just like how they look.", gaydar: 35, them: ["oh", "ok. fair enough", "um. friday? second date?"] }
          ] }
      ],
      after: "Hannah, to Jess: \"he's nice. really nice actually. asked me loads of questions.\" Jess: \"told you!!\" Hannah: \"he knew my earrings were from lovisa though. is that a thing?\" Jess: \"...he's observant\""
    },
    {
      id: "hannah-2", route: "hannah", gaydar: 50, gaydarSays: "He asked the waitress about her skin routine. For eight minutes. I timed it.", title: "Second date", contact: "Hannah", irl: true,
      outfits: [
        { label: "A nice shirt and a couple of rings", gaydar: -5, intro: "Second date. A little Italian place in Paddington. You wore a nice black shirt and two of your rings. Hannah is already at the table with a glass of red, and she's ordered garlic bread for both of you." },
        { label: "A nice shirt, your rings, and nude polish on your nails", intro: "Second date. A little Italian place in Paddington. A nice black shirt, all four of your rings, and a nude polish on your nails, which you told yourself was basically the same as clear. It isn't. Hannah is already at the table with a glass of red." },
        { label: "Shirt, rings, nude nails and a tinted lip balm", gaydar: 5, intro: "Second date. A little Italian place in Paddington. A nice black shirt, all your rings, nude polish, and a tinted lip balm that's basically a lip tint if you're honest. Hannah is already at the table with a glass of red. She looks at your mouth for a second too long when you sit down.", them: [{ note: "\"Is that... tinted?\" she says, and then, \"sorry, nothing\"." }] }
      ],
      them: [
        { note: "She stands up to kiss you on the cheek. She glances at your hands while she does it." },
        "Hi. You're on time. Good. I've ordered garlic bread, I hope that's okay, I'm starving, I've had back-to-back ACLs all day.",
        { note: "She sits down and looks at your hands again. Properly this time." },
        "Okay, I have to ask, because I'll be thinking about it all night otherwise. Your nails. Is that polish? Like, actual polish?"
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
            { you: "My week was good! I finally found a moisturiser that doesn't break me out, which, honestly, life changing. It's this Korean one, it's got snail mucin in it. Sorry. Is that too much detail?",
              them: [
                "Snail mucin.",
                "No, it's... I actually use that one. That's so weird. You use the same moisturiser as me.",
                { note: "She laughs, but it's a different laugh to last time. Smaller." },
                "Okay. What else. Do you play any sport? Anything? Touch? Squash?"
              ],
              replies: [
                { you: "Not really. I do pilates sometimes. And I go to a dance class with my friend Dani. It's mostly Beyoncé.",
                  gaydar: 55,
                  them: ["Mostly Beyoncé.", "Okay. Cool. That's... cool.", { note: "She checks her phone. Just for a second." }, "Sorry. Work. Keep going."] },
                { you: "I played soccer in high school. I was terrible. I mostly hid on the wing and talked to the other team.",
                  them: ["Ha. Okay. That's cute.", "My brothers all played. Christmas is basically just them tackling each other in the backyard. You'd hate it.", "Or you'd hide on the wing and talk to my sister-in-law."] }
              ] },
            { you: "My week was fine. Work stuff. Can we talk about you though? How were the ACLs?",
              them: ["Oh my god, thank you. Nobody ever asks about the ACLs.", "Okay so the first one was a netballer, and she'd done it at Nissan Arena, and the whole team came to the appointment...", { note: "She talks for ten minutes and she's funny and you like her. You do. You really like her. You just catch yourself looking at the waiter's forearms twice." }] }
          ] },
        { you: "It is polish. Do you hate it? I can take it off for next time.",
          them: [
            "No. Don't take it off on my account.",
            "I don't hate it. I'm just... trying to work out what it means. Is that bad? I'm 31, I don't really have time to work stuff out on dates. I like to know what I'm getting.",
            "So. What am I getting?"
          ],
          replies: [
            { you: "You're getting a guy who likes his nails done. That's it. Nothing to work out.",
              them: ["Okay.", "Okay. That's fair. I'm being dramatic. Sorry. Garlic bread?", { note: "She pushes the plate towards you. She doesn't look at your hands again for the rest of the night. You notice her not looking." }] },
            { you: "I don't know what you mean. It's just polish.", them: ["Right. Yeah. Just polish.", "Sorry. Ignore me. I'm tired. Tell me something funny."] }
          ] },
        { you: "Oh my god, you noticed! It's this brand called Essie, it's called 'Ballet Slippers', it's literally the perfect nude. You'd love it.",
          gaydar: 60,
          them: [
            { note: "She looks at you. She looks at your nails. She looks at you again." },
            "I... have that exact one. In my bathroom. Right now.",
            "Okay. Wow. Okay.",
            "Sorry, I'm just recalibrating. Give me a sec. Can you pass the garlic bread?"
          ],
          replies: [
            { you: "Recalibrating what? Did I say something weird?", them: ["No. You're fine. It's fine.", "I just thought I was going on a date with a guy who'd want to talk about me, not my nail polish. But it's fine. It's fun. Tell me about your work."] },
            { you: "Sorry, I get excited about this stuff. I'll stop. Tell me about your day.", them: ["It's okay. You're sweet when you're excited.", "Okay. ACLs. Strap in."] }
          ] }
      ],
      after: "Walking her to her car, she hugs you instead of kissing you. In the car she texts Jess: \"second date was nice. he's lovely. he uses the same moisturiser as me and owns the same nail polish as me and he talked to the waitress about her skin for like 8 minutes.\" Jess: \"oh.\" Hannah: \"yeah. 'oh'.\""
    },
    {
      id: "c5", route: "hannah", gaydar: 85, gaydarSays: "Lip tint, mascara, and eyes on the bartender all night. Do the maths.", title: "The wine bar", contact: "Hannah",
      intro: "Third date. Drinks at a wine bar in New Farm. You wore a pink knit, a berry lip tint, mascara, your rings and fresh nail polish. She clocked it the second she sat down. The conversation was fine. Polite. She checked her phone a lot. You spent more time than you meant to talking to the bartender about his jacket. She left at 8:40 and said she had an early start.",
      outfits: [
        { label: "A plain tee and just a berry lip tint", gaydar: -10, intro: "Third date. Drinks at a wine bar in New Farm. You played it safe: a navy tee, jeans, and just a berry lip tint. It's barely anything. She clocked it the second she sat down anyway. The conversation was fine. Polite. She checked her phone a lot. You spent more time than you meant to talking to the bartender about his jacket. She left at 8:40 and said she had an early start." },
        { label: "Pink knit, lip tint, mascara, rings, fresh nails" },
        { label: "Pink knit, lip tint, mascara, rings, pearls and little heeled boots", gaydar: 5, intro: "Third date. Drinks at a wine bar in New Farm. A pink knit, a berry lip tint, mascara, your rings, fresh nail polish, a string of pearls and little heeled ankle boots that made you taller than her. She looked at the boots, then the pearls, then the lip tint, in that order. The conversation was fine. Polite. She checked her phone a lot. You spent more time than you meant to talking to the bartender about his jacket. She left at 8:40 and said she had an early start.", them: ["also the pearls were a lot ngl"] }
      ],
      them: ["hey", "ok i'm just going to be honest because i'm 31 and i don't have time to do this the polite way", "i don't think we should see each other again"],
      replies: [
        { you: "Oh. Okay. Can I ask why? I thought tonight was going okay. I mean, I know I was a bit chatty with the bartender, but he was really sweet.",
          them: [
            "he was really sweet",
            "{name} you spent forty minutes asking him where his jacket was from. you knew the BRAND. you asked if it came in other colours",
            "and i paid $18 for parking and got dressed up and you turned up in more makeup than me. again. it's been more every time. first it was clear nails, then polish, now lip tint and mascara",
            "it's fine if that's your thing. honestly. but i'm not dating a guy who wears more lip than me and looks at the bartender like that"
          ],
          replies: [
            { you: "Like what? I wasn't looking at him like anything. It was a really good jacket. It was Acne Studios, Hannah. You don't see that in New Farm.",
              them: ["oh my god", "you're doing it again", "i'm done. good luck with everything. honestly"],
              after: "She leaves you on read. You google the jacket at 11pm. It's $1,400. You add it to your wishlist anyway." },
            { you: "Okay. That's fair. I'm sorry, Han. I didn't mean to make you feel like that. You were really nice to me.",
              them: [
                "you were nice too. you're a really nice guy",
                "you're just not a guy who wants to go out with me. i don't think you're a guy who wants to go out with any girl, honestly",
                "and that's not me being nasty. that's just what i saw tonight"
              ],
              replies: [
                { you: "What's that supposed to mean? I'm not gay, if that's what you're saying.", them: ["i didn't say gay", "you did", "anyway. take care {name}"] },
                { you: "Okay. Thanks for being honest.", them: ["np", "tell jess she owes me a wine"] }
              ] }
          ] },
        { you: "Is this about the makeup? Because I can tone it down. I just thought it looked cute tonight.",
          them: [
            "it's not about how it looks. it looked fine. your lip tint is better than mine. that's kind of the problem",
            "it's that every time i've seen you you've had a bit more on, and every time you've looked a bit more comfortable, and every time you've been a bit less interested in me",
            "i'm not stupid. i've done this before. i'm not doing it again"
          ],
          replies: [
            { you: "Done what before? What are you talking about?",
              them: ["dated a guy who was working stuff out", "it was two years. he's very happy now. with a man called craig", "i went to their engagement party. it was lovely. i'm not doing it again"] },
            { you: "I'm not working anything out. I just like a lip tint. Lots of guys wear makeup now.",
              them: ["ok", "lots of guys don't look at bartenders like that though", "night {name}"] }
          ] },
        { you: "Wait, before you go. Was it the pink knit? Be honest. I knew it was too much with the lip. I KNEW it.",
          gaydar: 90,
          them: [
            "...",
            "{name}. i'm breaking up with you and you're asking me for outfit feedback",
            "the knit was cute. the lip was cute. you looked cute. that's the whole problem. you looked cuter than me and you were trying to"
          ],
          replies: [
            { you: "Okay but you'd tell me if the lip was too much, right? As a friend?", them: ["we're not friends {name}", "but no. it wasn't too much. it was perfect. goodbye"] },
            { you: "Sorry. That came out wrong. I'm sorry it didn't work out, Han.", them: ["me too. a bit", "you're a lovely guy. just not my guy. bye"] }
          ] }
      ],
      after: "You read her last message a few times. It stings, but not the way getting dumped is supposed to. Mostly because she wasn't wrong about the bartender.",
      debrief: "Getting knocked back on a date is normal. Getting knocked back because someone read you right can feel worse, because it's true. It still isn't anything to be ashamed of."
    },
    {
      id: "hannah-feet", route: "hannah", gaydar: 92, gaydarSays: "Dylan said your feet are nicer than mine. He's not wrong. That's the problem.", title: "White carpet", contact: "Hannah", irl: true,
      intro: "Kate's housewarming in Paddington. Kate's Hannah's best friend from uni and she's got a brand new white carpet. There's a sign taped to the door: SHOES OFF. YES YOU. On Sunday Dani painted your toes a pale pink called Ballet Slippers, and you left it on because nobody was going to see.",
      them: [
        { note: "There's a pile of shoes in the hallway. Hannah kicks off her sneakers and waits for you." },
        "Come on. Kate will actually kill you.",
        { note: "You undo your laces as slowly as you can. Then your socks. Hannah looks down." },
        "Oh. Okay. They're pink.",
        { note: "A big guy in the hallway looks down too. Barefoot, beer in hand, farmer's tan, Kate's eyes. He grins." },
        "\"Dylan. Kate's brother.\" He looks at your toes, then at Hannah. \"This is the date? Han. Come on.\"",
        "Dylan's a carpenter. He's been asking me out since I was nineteen. Ignore him.",
        "\"Eleven times,\" Dylan says. \"Guess my odds just went up though.\""
      ],
      replies: [
        { you: "(Curl your toes into the carpet.) Thanks. It was a bet. I lost a bet.",
          them: [
            "\"Yeah? Who with?\" Dylan says.",
            { note: "You don't have an answer. Hannah looks at you." },
            "It wasn't a bet. Dani put it on her story. 'Pedi day with my bestie.'",
            "\"Pedi day. With his bestie,\" Dylan says, delighted. He puts a hand on Hannah's back and steers her towards the kitchen. \"Come get a drink, Han. Your bestie can come too. Mind the tiles, man, they're cold on fresh polish.\""
          ],
          replies: [
            { you: "(Follow them to the kitchen.)",
              them: [
                { note: "Dylan opens Hannah's cider on the edge of the bench. Then he opens yours too and hands it to you. \"Didn't want you breaking a nail,\" he says." },
                { note: "Every time you move, your pink toes are right there on Kate's white tiles. Kate's housemate looks at them, then at you, then at Hannah." },
                "\"Han,\" the housemate says, very quietly. \"Is he...\"",
                "I don't know.",
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
            "Hannah, when she finally comes back in: \"You've been talking about cuticles for half an hour.\"",
            "\"Dylan's nice,\" you say. You don't know why you said it.",
            "\"Yeah,\" she says. \"He is.\""
          ] },
        { you: "(Stand up straight.) She's here with me, man.",
          them: [
            "\"Course she is, buddy,\" Dylan says. He looks down at you. Then at your toes. Then back up. He just smiles.",
            { note: "Hannah bites her lip." },
            "\"Love the confidence,\" Dylan says, and pats your cheek. Actually pats it. \"Go grab a drink, man. Grown-ups are talking.\""
          ],
          replies: [
            { you: "(Go and grab a drink.)",
              them: [{ note: "When you get back Dylan's in your spot on the couch next to Hannah, with his big bare feet up on the coffee table. She hasn't moved over." }] },
            { you: "...Your feet are huge.",
              gaydar: 98,
              them: [
                "\"Size thirteen,\" Dylan says. \"Not a drop of polish on 'em.\"",
                "{name}. Why are you looking at his feet?",
                { note: "You go red. Dylan laughs, properly, and puts his arm round Hannah. She lets him." }
              ] }
          ] }
      ],
      after: "Hannah, to Kate, at 1am: \"did you see his toes\" Kate: \"babe everyone saw his toes. dylan's been on about them all night\" Hannah: \"what did he say\" Kate: \"'han's date has nicer feet than han'. then he asked if you're free friday\"",
      debrief: "Having something about yourself on show before you're ready is a big feeling. They were still your toes, and you were the one who chose to paint them."
    },
    {
      "id": "hannah-tickle",
      "route": "hannah",
      "gaydar": 94,
      "irl": true,
      "title": "Movie night",
      "contact": "Hannah",
      "gaydarSays": "Dylan had my date's foot in a headlock in front of Kate's whole lounge room. Kate's carpet survived. My dignity didn't.",
      "intro": "A week after the housewarming. Kate's having people over to watch a movie on the white carpet, and Hannah said come, so you came. SHOES OFF. YES YOU. is still on the door. Your toes are still Ballet Slippers pink, because you never took it off. Dylan's on the couch. He's taken the whole middle of it.",
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
          "note": "Kate pauses the movie. She doesn't even pretend she isn't going to watch. Dylan's thumb is resting on the arch of your foot. Not moving yet. Just resting there."
        },
        "\"Ready, champ?\" he says, and starts."
      ],
      "replies": [
        {
          "you": "(Don't react. Look at the TV. Breathe through your nose.)",
          "them": [
            {
              "note": "You stare at the paused frame on the TV. A woman in a raincoat. You stare at her raincoat like your life depends on it."
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
                    "\"You would have,\" Dylan says. \"You did. In 2014.\"",
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
                  "after": "Hannah, to Kate: \"he basically won\" Kate: \"he coughed\" Hannah: \"it was a laugh. i know what his laugh sounds like now. it's a laugh\" Kate: \"dylan's asking if you want a lift home\" Hannah: \"...tell him maybe\""
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
                      "note": "She asks it the way you'd ask a kid who fell off a scooter. Then she turns round to Dylan and they both start laughing, quietly, into the same cushion."
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
                  "note": "Then he puts his hand back on your ankle. Not tickling. Just resting it there. He looks at you with his eyebrows up."
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
                    "You're fine. It was funny. It was really funny.",
                    {
                      "note": "She says it without looking away from the TV."
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
                      "note": "Hannah looks down at you for a long moment. Then she looks at Dylan. Then she goes and gets her keys."
                    },
                    "I'm going to head off. Dylan, you're driving me? You've had one beer.",
                    "\"Yeah,\" Dylan says, already getting up. \"Yeah, I'm driving you.\""
                  ],
                  "after": "Hannah, to Kate, from Dylan's ute: \"i'm not being mean\" \"i just watched a grown man giggle on your carpet for three minutes\" \"and i realised i'd never once wanted to kiss him\" Kate: \"and dylan\" Hannah: \"dylan's driving me home\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "Being ticklish is just how your body is. Laughing in front of people isn't weakness, and whatever she decided while she watched, she was going to decide anyway."
    },
    {
      id: "hannah-end", route: "hannah", gaydar: 99, spark: 0, gaydarSays: "Brodie owns four pairs of steel caps and zero lip products. I've never been happier.", title: "Hannah and Brodie", contact: "Hannah", irl: true,
      outfits: [
        { label: "Jeans, a nice top and just lip oil. Keep it low-key.", gaydar: -2, intro: "Six weeks later. Jess's birthday drinks at a pub in Newstead. You went low-key: jeans, a black top, lip oil. Then Hannah walks in. With a guy." },
        { label: "Your going-out look: a sheer top, lashes, gloss, a little bag", intro: "Six weeks later. Jess's birthday drinks at a pub in Newstead. You did your going-out look: a sheer black top, gold rings, lashes, gloss and the little shoulder bag. Then Hannah walks in. With a guy." },
        { label: "Full glam: a satin top, lashes, contour, heeled boots, pink nails", gaydar: 1, intro: "Six weeks later. Jess's birthday drinks at a pub in Newstead. Full glam. Satin top, lashes, a proper contour, heeled boots, pink nails, the works. Two of Jess's work friends have already asked where you got your boots. Then Hannah walks in. With a guy.", them: [{ note: "She sees your boots before she sees your face. She almost smiles." }] }
      ],
      them: [
        { note: "He's huge. Hi-vis vest still on under his flannel. Steel caps. A tan line from a work shirt. He's holding two schooners and looking for somewhere to put them." },
        "Oh. Hi, {name}. Didn't know you'd be here. Well, I did. Jess said. This is Brodie.",
        { note: "Brodie puts down a pint and shakes your hand so hard your rings click together." },
        "\"Hey man. Brodie. Electrician. Han's told me a lot about you.\" He looks at your nails. \"Nice nails, man. My niece does hers like that.\"",
        "He's lovely. He's so lovely. He doesn't own a single product, {name}. Not one. He washes his face with the 3-in-1. I'm obsessed.",
        {"if":"hannah-tickle=held","text":"\"Hang on,\" Brodie says. \"Are you the guy Dylan tried to tickle? He said you didn't even blink. He's still annoyed about it. Respect, man.\""},
        {"if":"hannah-tickle=cracked|begged|kept","text":"\"Hang on,\" Brodie says, and starts grinning. \"You're the ticklish guy. Dylan showed the whole pub the video. The squeaky one.\""},
        {"if":"hannah-tickle=cracked|begged|kept","note":"Hannah looks at the floor. Brodie looks at your shoes like he's wondering what's inside them."}
      ],
      replies: [
        { you: "Oh my god, hi Brodie! Love the hi-vis, very rugged. Han, he's gorgeous. I'm so happy for you, babe, honestly.",
          them: [
            { note: "Hannah stares at you for a second. You just called her \"babe\". You've never called her that." },
            "Thanks. He is. And... thanks for being nice about it.",
            "Can I say something? And don't take it the wrong way. I'm really glad I didn't keep going with us. I'd have spent years wondering why you liked my makeup bag more than me. Look at you now. You look so much happier.",
            { note: "Brodie has wandered off to watch the game on the TV above the bar." }
          ],
          replies: [
            { you: "I'm not... it's not like that, Han. I'm just more comfortable now. That's all.",
              them: ["Okay.", "Whatever it's like, it suits you.", "Brodie's going to ask you about sport in a minute. Just say 'yeah, the refs were terrible'. That's all he needs."] },
            { you: "Honestly? I do look happier. I feel happier. I just don't know what that means yet.",
              them: ["I think you do.", "But that's yours to say. Not mine.", { note: "She squeezes your arm and goes back to Brodie, who's shouting at a referee on a TV with no sound." }] }
          ] },
        { you: "He's very... blokey. Like, very manly. Is that what you wanted? I didn't think you were into that.",
          them: [
            "It's exactly what I wanted.",
            "No offence, but after you I wanted someone who'd never once ask where a jacket was from. Brodie's never asked where anything is from. He buys all his clothes at the hardware store.",
            "He looks at me like I'm the only person in the room. You looked at the bartender like that. That's all I needed. Someone who looks at me."
          ],
          replies: [
            { you: "That's fair. I'm glad you found that. I really am.", them: ["Thanks. I mean it, you look good. Better than you did with me.", "Go have fun. Jess is doing shots."] },
            { you: "Bunnings. Babe. He buys his clothes at THE HARDWARE STORE?", them: [{ note: "She laughs, a proper one." }, "He does. And I love it.", "Go away, {name}. You're making me laugh and I'm supposed to be over you."] }
          ] },
        { you: "(Go over to Brodie.) Um. Hi. Sorry. Can I borrow you for a sec? It's about Hannah.",
          them: [
            "\"Borrow me?\" Brodie says, loud enough for his friends at the bar to hear. He puts his pint down and leans right down to your height. \"Go on then, man.\"",
            { note: "He smells like Axe body spray and the inside of a pickup truck. You had a whole speech ready on the drive over. It's gone." },
            "\"Take your time. I've got all night.\""
          ],
          replies: [
            { you: "I think I want her back. Sorry. I know you're with her. I just wanted to say it to you first.",
              them: [
                "\"You want her back,\" Brodie says. He looks you up and down, slowly, from your rings to your boots. Then he laughs. \"Yeah, okay.\"",
                "\"Han! Your ex wants to fight me for you!\"",
                { note: "His friends turn round. One of them raises his pint at you." },
                "\"I'm shaking, man. Look.\" He holds his hand out flat. It's dead still.",
                { note: "Hannah comes over and puts her hand on your shoulder." },
                "Brodie. Leave him alone.",
                "{name}. You said sorry three times. You were holding your drink with both hands.",
                "That's the cutest thing I've ever seen. No. But so cute."
              ] },
            { you: "...Never mind. Sorry. Your arms are really big. Sorry. Bye.",
              gaydar: 100,
              them: [
                "\"There it is,\" Brodie says, grinning, and flexes, just a bit, just for you. \"Han, I think your ex has got a crush on me.\"",
                { note: "You go red from your neck up. His friends are laughing. Hannah's got her hand over her mouth." },
                "Oh my god. You went over there to fight for me and you've got a crush on him.",
                "Don't argue. Your whole face has gone pink."
              ] }
          ] },
        { you: "(Smile, say 'nice to meet you, Brodie', then go and hide in the bathroom with Jess.)",
          them: [
            { note: "In the bathroom Jess fixes your lashes, which don't need fixing, and says nothing for a full minute." },
            "\"You okay?\" Jess says eventually.",
            { note: "Through the door you can hear Brodie telling someone about a switchboard." },
            "\"He's literally the straightest man I've ever seen,\" Jess says. \"She went from you to THAT. That's not about you. That's her running in the opposite direction.\""
          ],
          replies: [
            { you: "The opposite direction from what, Jess?", them: ["\"From a guy who does his lashes better than she does,\" Jess says.", "\"Which you do, by the way. Come on. Shots.\""] },
            { you: "I'm fine. I'm actually fine. Weirdly. He seems nice.", them: ["\"He does,\" Jess says. \"Very nice. Very handy. Very not for you.\"", "\"Come on, your gloss is perfect. Shots.\""] }
          ] }
      ],
      after: "Later, Hannah, to Jess, outside by the Ubers: \"he looked so good tonight. like, better than me. again.\" Jess: \"he did.\" Hannah: \"i don't miss him. i thought i would. i just keep thinking he's going to meet some guy and be so happy.\" Jess: \"yeah.\" Hannah: \"brodie asked if he plays touch.\"",
      debrief: "Seeing someone who dumped you, happy with a guy who's your total opposite, is a weird feeling. It isn't a ranking. It's just two people who wanted different things."
    },
    {
      id: "mia-1", route: "mia", gaydar: 15, gaydarSays: "He said my dress was 'so me'. Nobody's ever said that. Cute??", title: "Dumplings", contact: "Mia",
      outfits: [
        { label: "Jeans and a hoodie. Low effort.", gaydar: -10, intro: "Sam from work set you up with her cousin Mia. \"She's sweet, she's shy, don't be weird.\" First date: dumplings in Sunnybank. You wore jeans and a grey hoodie. Mia wore a yellow sundress and kept apologising for things that weren't her fault." },
        { label: "A linen shirt and your silver rings", intro: "Sam from work set you up with her cousin Mia. \"She's sweet, she's shy, don't be weird.\" First date: dumplings in Sunnybank. You wore a white linen shirt and your silver rings. Mia wore a yellow sundress and kept apologising for things that weren't her fault." },
        { label: "Linen shirt, rings, and a bit of tinted lip balm", gaydar: 5, intro: "Sam from work set you up with her cousin Mia. \"She's sweet, she's shy, don't be weird.\" First date: dumplings in Sunnybank. A white linen shirt, your rings, and a tinted lip balm you told yourself was just for the dry air. Mia wore a yellow sundress and kept apologising for things that weren't her fault." }
      ],
      them: ["hi!! sorry for texting so soon", "i just wanted to say thank you for tonight, i had a really nice time", "sorry i spilled the soy sauce. and sorry i talked about my cat so much. her name's mochi if you forgot. you probably didn't forget because i said it like 40 times"],
      replies: [
        { you: "Don't be sorry! I loved hearing about Mochi. And honestly your dress was so pretty, that yellow is so you.",
          them: [
            "omg thank you",
            "nobody's ever said a dress was 'so me' before. that's such a nice thing to say",
            "my last boyfriend said i looked like a banana. so",
            "sorry. too much info. would you want to hang out again?? only if you want to. no pressure. sorry"
          ],
          replies: [
            { you: "Stop saying sorry! Yes, I'd love to. What about Eat Street next weekend?", them: ["yes!! i love eat street", "ok i'm not saying sorry anymore. this is me not saying it", "see you saturday 😊"] },
            { you: "A banana? He needs his eyes checked. Yes, let's hang out again.", them: ["😭 thank you", "ok saturday? eat street? i'll try not to spill anything"] }
          ] },
        { you: "I had a really nice time too, Mia. You're easy to be around.",
          them: ["really?? i thought i was being so awkward", "sam said you'd be nice. she was right", "can i see you again?"],
          replies: [
            { you: "Yeah, of course. You pick where.", them: ["eat street? saturday? it's so loud there that i can't be awkward because you can't hear me lol"] },
            { you: "Only if Mochi comes.", them: ["😭😭 she would bite you", "but she might like you. she likes people who smell nice and you smelled really nice", "eat street saturday?"] }
          ] },
        { you: "The dumplings were amazing. Did you see the guy making them in the window? His hands were so fast.",
          gaydar: 20,
          them: ["haha yes!! i could have watched him for hours", "you were really into it lol. i thought you were going to ask for his number", "kidding!! sorry. weird joke. can i see you again?"],
          replies: [
            { you: "Ha! No, just appreciating the craft. Yes, let's do it again.", them: ["😊 eat street? saturday?"] },
            { you: "I mean, if he'd given me his number I wouldn't have said no. For dumpling reasons.", gaydar: 25, them: ["lol", "for dumpling reasons", "ok um. eat street saturday?"] }
          ] }
      ],
      after: "Mia, to Sam: \"he's so nice!! he said my dress was 'so me'.\" Sam: \"told you he's a sweetheart.\" Mia: \"he also smelled really good. like really good. like better than me?\" Sam: \"...that's nice\""
    },
    {
      id: "mia-2", route: "mia", gaydar: 45, gaydarSays: "He bought earrings at Eat Street. For himself. I said they were cute. They WERE cute.", title: "Eat Street", contact: "Mia", irl: true,
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
            { note: "The stall lady holds a mirror up for you. You put them in. They look good. Really good. Mia says \"oh\" very quietly." }
          ],
          replies: [
            { you: "Oh my god, I love them. I'm getting them. Do you want a pair too? We can match!",
              gaydar: 55,
              them: [
                "Match?",
                "Um. Sure! Yeah. That's... that's cute. We can match.",
                { note: "She buys a pair too. She puts them in her bag instead of her ears. She holds your hand for the rest of the night, but loosely, like she's not sure she's allowed to." }
              ] },
            { you: "Actually, never mind. They're a bit much. Let's get the spring rolls.",
              them: ["No! They looked nice. You should get them if you want them.", "Sorry. I just mean, don't not get them because of me. I don't mind. I really don't.", { note: "She says \"I really don't\" the way people say it when they're not sure." }] }
          ] },
        { you: "Ha, no, I was just looking. Spring rolls! Lead the way.",
          them: [
            "Okay! This way. Hold my hand so we don't get separated, it's so busy.",
            { note: "She takes your hand. She looks down at your nails while she does it." },
            "Your hands are so soft. Do you use a hand cream? Sorry. Random question."
          ],
          replies: [
            { you: "L'Occitane. The shea one. It's honestly the best one, you have to try it. I'll lend you mine.", gaydar: 50, them: ["Oh. Okay. You... carry it with you?", "That's... yeah. Cool. Sorry. Spring rolls."] },
            { you: "Not really. Just lucky I guess.", them: ["Lucky. Okay. They're really soft.", "Sorry. I keep saying weird things. Spring rolls!"] }
          ] },
        { you: "They're for my friend Nicole. She'd love them. I've got really good taste in earrings, if I do say so myself.",
          them: ["You do! They're so pretty. She's lucky.", "Do you buy jewellery for your friends a lot?", { note: "She says it nicely, but she's looking at you like she's trying to do a sum in her head." }],
          replies: [
            { you: "All the time. Me and Nicole go to Sephora every month. It's our thing.", gaydar: 50, them: ["Oh. That's... nice. That you have a thing.", "I don't really go to Sephora. It's a bit much for me. Sorry."] },
            { you: "Only for special people. Like you, maybe. If you're lucky.", them: [{ note: "She goes pink and laughs." }, "Oh! Stop. Okay. Spring rolls."] }
          ] }
      ],
      after: "Mia, to Sam, from the Uber home: \"had fun. he bought earrings. for himself. gold hoops.\" Sam: \"ok?\" Mia: \"they looked really good for him\" Sam: \"ok good?\" Mia: \"i don't know how i feel about it\" Sam: \"he's my coworker not my problem lol\""
    },
{
      "id": "mia-feet",
      "route": "mia",
      "gaydar": 65,
      "spark": 40,
      "gaydarSays": "Theo found his feet and he made a noise like a kettle. In front of everyone. Sorry. It was cute. It was too cute.",
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
                "\"I don't lose it,\" you say. Your foot's still tingling."
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
                {
                  "note": "Theo stops, because Mia asked. He winks at her. \"Anything for you.\""
                },
                {
                  "note": "You sit up, pink in the face, tucking both feet under you. Mia goes back to her cards. She doesn't sit closer to you this time."
                }
              ],
              "after": "Mia, to Sam: \"he yelled for me to save him\" Mia: \"from being tickled\" Mia: \"sorry. i don't know how to feel\""
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
              "after": "Mia, to Sam: \"he just let theo do it. for ages. he was LOVING it\" Sam: \"ha\" Mia: \"sorry. i think he likes theo more than i do\""
            }
          ]
        }
      ],
      "debrief": "Laughing till you can't breathe in front of a room isn't you failing at something. It's just a body being a body. Nobody there will remember it the way you do."
    },
    {
      id: "c6", route: "mia", gaydar: 85, gaydarSays: "Asked if my top was from Zara. Mid-putt. MID. PUTT.", title: "Mini golf", contact: "Mia",
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
            "ok can i be honest. i hate being honest. i'm so bad at it. but sam said i have to be honest more",
            "i thought the lipstick was a joke at first. like a dare. and then you just kept wearing it and you were so happy and you called the guy at the counter 'darling' and i didnt know where to look",
            "and you asked if my top was from sportsgirl. while i was putting. and it WAS from sportsgirl. and that's when i knew i had to go home"
          ],
          replies: [
            { you: "It wasn't a joke, Mia. I like wearing it. I thought you'd think it was cute. You said my earrings were cute.",
              them: [
                "i did. they are",
                "i just... i thought i was going on dates with a guy. like a guy guy. and every time i see you you're less of a guy guy and more like... like one of my friends?",
                "sorry. that sounds mean. i don't mean it mean. you're really lovely. you're just not who i thought"
              ],
              replies: [
                { you: "I am a guy, Mia. I just like nice things. Guys can like nice things.", them: ["i know. sorry. you're right", "but i don't think i want to date a guy who likes nicer things than me", "sorry"] },
                { you: "So what, I'm like one of your girlfriends now? That's what you're saying?", them: ["kind of yeah", "you'd be the best one honestly. you know about tops and lipstick and stuff", "but not to date. sorry"] }
              ] },
            { you: "Oh my god, I KNEW it was Sportsgirl. The little puff sleeves gave it away. Sorry. That's not the point, is it.",
              gaydar: 90,
              them: ["no it's not the point lol", "but yes it was sportsgirl. it was on sale", "{name} i think we should just be friends. sorry. you're lovely. i just don't think you want a girlfriend", "and i don't think i want a boyfriend who knows what sportsgirl's sleeves look like"] }
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
                "lipstick. earrings. the cardigan. the way you walk now. you didn't walk like that at dumplings",
                "i don't date guys who are more done up than me. i'm sorry. i really am. i'm not trying to be mean, i'm just not into it"
              ],
              replies: [
                { you: "That's honest, at least. Thank you for telling me, even though I can tell it was hard for you.", them: ["it was SO hard", "i've been typing this for 20 minutes", "you're really nice {name}. sorry"] },
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
      after: "Mia rings Sam on the drive home. \"Your coworker's gay.\" \"What? How do you know?\" \"Sam. He wore lipstick to mini golf. He asked if my top was from Zara. He called the guy at the counter darling.\" \"Maybe he just likes makeup?\" \"Then why is he going on dates with me?\" Sam doesn't have an answer for that.",
      debrief: "Some people won't get it, and some will talk about it. That's about them. You got dressed as yourself and walked out the door, and that part was yours."
    },
    {
      id: "mia-end", route: "mia", gaydar: 99, spark: 0, gaydarSays: "Lachlan plays golf. Real golf. No windmills. I think I'm in love.", title: "Mia and Lachlan", contact: "Mia",
      intro: "Two months later. You're at Sam's for her birthday barbecue in a long linen shirt, lashes and the gold hoops. Mia's there. She's brought a guy: Lachlan, an accountant, in boat shoes and a quarter-zip, talking to Sam's husband about negative gearing. That night, Mia messages you.",
      them: [
        "hi {name}!! sorry it's late",
        "i just wanted to say it was really nice to see you today. you looked SO good. i'm not just saying that. the hoops with the lashes. sam's sister asked me if you were single and i didn't know what to say",
        "and i wanted to say sorry. properly. for mini golf. i was really weird and i left and i made it about me",
        "i'm really happy now. lachlan's lovely. he's an accountant and he plays golf. real golf. no windmills. he doesn't know what sportsgirl is. i asked him and he said 'is that a netball team'",
        "anyway i'm rambling. sorry. i just hope you're happy too"
      ],
      replies: [
        { you: "Mia! You don't have to say sorry. Honestly, babe, mini golf was a lot. I was a LOT. I'm so happy for you. Lachlan seems sweet. A bit beige, but sweet.",
          them: [
            "a bit beige 😭",
            "he IS beige. he owns six quarter-zips. they're all navy",
            "i love him so much. after you i just wanted someone simple. like someone who'd never ask me where my top was from because he doesn't care. that's so relaxing honestly",
            "can i ask you something? you can say no"
          ],
          replies: [
            { you: "Ask me anything. I'm an open book. Mostly.",
              them: ["are you seeing anyone? like... anyone?", "sam said you've been going out in the valley with dani a lot", "sorry. that's nosy. you don't have to answer"],
              replies: [
                { you: "Not really. Just having fun. Dancing. It's a straight-guy-having-fun thing, Mia.", them: ["ok 😊", "a straight guy having fun in the valley in lashes", "sorry!! i'm teasing. i'm learning to tease. lachlan says i'm getting better at it"] },
                { you: "There's no one. And there's no one in the Valley either, before you ask. Sam's a gossip.", them: ["sam is SUCH a gossip", "ok. well when there is someone, whoever they are, i hope they think the hoops are cute. they are cute"] }
              ] },
            { you: "No. Not tonight. I've had two wines and Sam's husband tried to explain negative gearing to me.", them: ["lol fair", "lachlan explained it to me for an hour on the drive home. i loved every second", "night {name} 😊"] }
          ] },
        { you: "It's fine, Mia. Really. You were honest, eventually. I'm glad you found someone.",
          them: [
            "thank you. you were really nice about it, even when i wasn't",
            "can i say one more thing and then i'll go to bed",
            "i think you'd be really happy with someone who loves all the stuff you love. like the earrings and the lipstick and the cute tops. someone who thinks that's the best thing about you. i don't think that's a girl. sorry. i don't mean it badly"
          ],
          replies: [
            { you: "What's that supposed to mean? You think I should date guys?",
              them: ["i didn't say that!!", "ok i kind of said that", "sorry. i'm going to bed. lachlan's already asleep. he sleeps at 9:30 like a grandpa. i love him"] },
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
                { note: "Lachlan looks down at them. Then back up at you. Then he smiles, slowly, like someone's just told him the exam's been cancelled." },
                { from: "Lachlan", text: "oh man. glitter" },
                "oh my god. {name}. your toes. they're so cute",
                "sorry. you came to say something. go"
              ],
              replies: [
                { you: "(Stand up as straight as you can, barefoot.) Mia, I made a mistake. I want another chance. I wanted to say it in front of Lachlan so it's fair.",
                  them: [
                    { from: "Lachlan", text: "ha. sure man. you two have a chat. i'll be in the lounge" },
                    { note: "He says it over his shoulder. He doesn't look back. He's left you alone with his girlfriend and he's whistling." },
                    "{name} that's so sweet",
                    "but you said it so quietly. and you're standing on my mat holding your socks with glitter toes",
                    "i can't. you're too cute. it'd be like going out with my friend's little brother. sorry. i'm so sorry"
                  ],
                  replies: [
                    { you: "(Look down at your toes.) Okay. That's okay. Sorry for coming over.",
                      them: ["no!! don't be sorry", { note: "She hugs you. From the lounge, without looking away from the game:" },
                        { from: "Lachlan", text: "want a coffee man? or a hot chocolate" }, "stay for a tea. he wants to ask you about a shirt for my cousin's wedding. he's been nervous about it all week"] },
                    { you: "He's not even a little bit worried, is he?",
                      them: ["no babe", "sorry", "when i walked past just now he said 'mia, he's got glitter on his toes. i think we're safe'", "and then he laughed for like a whole minute", "he's not wrong though babe. sorry"] }
                  ] },
                { you: "(Stand on one foot so they can't see the other one.)",
                  gaydar: 100,
                  them: [
                    { from: "Lachlan", text: "steady there, princess" },
                    { note: "He comes down the hall and holds your elbow while you wobble. His hand's warm. He smells like soap and tea. The speech goes. For a second so does your name." },
                    { from: "Lachlan", text: "nice colour. mia's got that one. you two should share" },
                    { note: "\"Thanks,\" you say. It comes out tiny." },
                    "omg",
                    "{name}. did you just go shy at lachlan",
                    "you came over to win me back and you've gone pink because he held your elbow",
                    "i'm putting the kettle on. you're staying. this is the cutest thing that's ever happened in this flat"
                  ] }
              ] },
            { you: "Actually, never mind. It's late. Night, Mia.", them: ["are you sure?? ok", "night {name} 😊 text me tomorrow"] }
          ] },
        { you: "Did Sam's sister really ask if I was single? Which one? The one with the bob?",
          them: ["yes the one with the bob!!", "i said i didn't know", "then she said 'is he... you know' and did a little wrist thing and i said i DON'T KNOW sorry and walked away", "sorry. i shouldn't have told you that"],
          replies: [
            { you: "She did a WRIST thing? Mia. I'm not gay. Why does everyone keep doing wrist things at me?", them: ["i don't know!!", "sorry", "night {name}. you looked really pretty today. sorry. handsome. you know what i mean"] },
            { you: "The bob was very cute though. Tell her I said that.", them: ["lol ok", "she'll be confused", "everyone's always confused about you {name}. in a nice way. night"] }
          ] }
      ],
      after: "Mia, to Lachlan, in bed: \"do you think {name} is gay?\" Lachlan, already half asleep: \"who's {name}?\" Mia: \"the guy with the hoops at the barbecue.\" Lachlan: \"oh. yeah. obviously.\" Then he's asleep.",
      debrief: "Some people need someone simple and safe. That's what they're choosing, not a verdict on you."
    },
    {
      id: "ella-1", route: "ella", gaydar: 20, gaydarSays: "His Hinge pics are a polo at a wedding. In real life he knew what a 'cat eye' was. Hmm.", title: "Matched", contact: "Ella",
      outfits: [
        { label: "The polo from your Hinge photos", gaydar: -10, intro: "You matched with Ella on Hinge. Your profile is mostly photos of you in a polo shirt at a wedding, which Jess says is \"very marketable\". First date: drinks at a little bar in West End. You wore the polo. Ella's a primary school teacher with a cat-eye so sharp you couldn't stop looking at it." },
        { label: "A black tee and a bit of concealer", intro: "You matched with Ella on Hinge. Your profile is mostly photos of you in a polo shirt at a wedding. First date: drinks at a little bar in West End. You wore a fitted black tee and a bit of concealer you stole from Nicole. Ella's a primary school teacher with a cat-eye so sharp you couldn't stop looking at it." },
        { label: "A black tee, concealer and a clear brow gel", gaydar: 5, intro: "You matched with Ella on Hinge. Your profile is mostly photos of you in a polo shirt at a wedding. First date: drinks at a little bar in West End. A fitted black tee, a bit of concealer and clear brow gel, which made your brows look annoyingly good. Ella's a primary school teacher with a cat-eye so sharp you couldn't stop looking at it." }
      ],
      them: ["hey!! home safe", "tonight was really fun. you're way funnier than your profile", "also i have to know, how did you know what a 'cat eye' was. you said 'your cat eye is so sharp' like it was nothing. none of the guys i date know that word"],
      replies: [
        { you: "My friend Nicole does hers every day. I've watched her do it a hundred times. Yours was perfect though, honestly. Like a ruler.",
          them: ["omg stop 😭", "it took me 4 goes tonight", "ok you're officially the first guy to compliment my eyeliner. i'm putting that in my diary", "second date?"],
          replies: [
            { you: "Yes! What about GOMA next weekend? There's an exhibition I've been wanting to see.", them: ["omg yes i love GOMA", "a guy who wants to go to an art gallery. who are you", "sunday? 😊"] },
            { you: "Second date, yes. And you can show me how you did it. The eyeliner. For research.", gaydar: 25, them: ["haha for research", "ok deal", "GOMA? sunday?"] }
          ] },
        { you: "I don't know, I just noticed. You looked really good tonight.",
          them: ["😊 thank you", "you looked good too. different to your pics. better", "your pics are literally you in a polo at a wedding. i nearly didn't swipe", "second date?"],
          replies: [
            { you: "The polo pics were Jess's idea. She said they're 'marketable'.", them: ["lol jess was wrong", "you're way cuter in person. sunday? GOMA?"] },
            { you: "Second date. Definitely.", them: ["yay. sunday. GOMA. i'll meet you at the big red thing out the front"] }
          ] }
      ],
      after: "Ella, to her sister: \"date was so good. he's funny. he complimented my eyeliner??\" Her sister: \"wait he knew what eyeliner was\" Ella: \"he knew what a CAT EYE was\" Her sister: \"interesting\""
    },
    {
      id: "ella-2", route: "ella", gaydar: 50, gaydarSays: "He spent the whole of GOMA describing the outfits in the paintings. Not the paintings. The OUTFITS.", title: "GOMA", contact: "Ella", irl: true,
      outfits: [
        { label: "A nice shirt and a clear brow gel", gaydar: -5, intro: "Second date. Sunday at GOMA. You wore a nice cream shirt and the brow gel. Ella's in a slip skirt and a little cardigan and she's already waiting by the big red sculpture out the front." },
        { label: "A cream shirt, a bit of mascara and a light lip tint", intro: "Second date. Sunday at GOMA. A cream shirt, a coat of mascara and a light lip tint. You practised the mascara three times this morning. Ella's in a slip skirt and a little cardigan, waiting by the big red sculpture. She does a double take at your lashes." },
        { label: "A cream shirt, mascara, lip tint and your nails painted lilac", gaydar: 5, intro: "Second date. Sunday at GOMA. A cream shirt, mascara, lip tint and lilac nails. Ella's in a slip skirt and a little cardigan, waiting by the big red sculpture. She looks at your hands, then your face, then your hands again.", them: [{ note: "\"Are your nails... purple?\" she says. \"Lilac,\" you say. She says \"oh\" and then \"cute\" a second too late." }] }
      ],
      them: [
        "Hi! Okay, I've got the map. There's the Pacific art one and then there's this fashion one upstairs that's apparently amazing. Which first?",
        { note: "She's smiling, but she keeps looking at your lashes. She doesn't say anything about them." }
      ],
      replies: [
        { you: "Oh my god, the fashion one. Obviously. Sorry. Is that okay? I've been dying to see it, there's a gown in there that's covered in like ten thousand hand-sewn beads.",
          gaydar: 55,
          them: [
            "Ha. Sure. Fashion first.",
            { note: "Upstairs, you stand in front of the beaded gown for eleven minutes. You explain the beading. You explain the silhouette. You explain why the neckline is 'giving 1950s but make it modern'. Ella stands next to you and nods." },
            "You know a lot about dresses.",
            "Like, a LOT. More than me. And I'm the one who wears them."
          ],
          replies: [
            { you: "I just think they're beautiful. Like, it's art. Wearable art. That's all.",
              them: ["Yeah. No, totally. It's art.", "It's just... my last boyfriend thought GOMA was a type of pasta. So this is a big change for me.", { note: "She laughs. You laugh. She doesn't hold your hand when you walk to the next room." }] },
            { you: "Sorry. I went on a bit. I always do when it comes to dresses. Nicole says I'm a menace.",
              them: ["No, it's fine! It's kind of cute.", "Do you... wear dresses? Sorry. That's a weird question. I don't know why I asked that.", { note: "You both stand there in front of the gown and don't say anything for a bit too long." }],
              replies: [
                { you: "Ha! No. God, no. Can you imagine?", gaydar: 55, them: ["Ha. Yeah. No.", { note: "She laughs. You laugh. You're both laughing a bit too hard." }] },
                { you: "...Not yet.", gaydar: 65, them: [{ note: "She turns and looks at you properly for the first time all day." }, "Not yet?", "Okay. Okay. Cool. Let's... let's go see the Pacific stuff."] }
              ] }
          ] },
        { you: "Whatever you want! I'm easy. You pick.",
          them: [
            "Okay, Pacific first, then fashion. I'm a teacher, I like a plan.",
            { note: "You walk around the Pacific gallery and she tells you about her Year 2s, and she's funny and lovely, and you like her. Then you get to the fashion room and you go quiet and you don't hear a single thing she says for ten minutes." },
            "{name}? Hello? You've been staring at that dress for ages."
          ],
          replies: [
            { you: "Sorry! It's just so pretty. Look at the colour. Imagine wearing that to brunch.",
              gaydar: 55,
              them: ["Imagine ME wearing it to brunch, you mean?", { note: "She says it like a joke. It isn't totally a joke." }] },
            { you: "Sorry. I zoned out. Tell me about your Year 2s again.", them: ["Ha, it's okay. Okay, so there's this kid called Oscar...", { note: "You listen. You try. You still look back at the dress when she's not looking." }] }
          ] }
      ],
      after: "Ella, to her sister: \"second date at GOMA\" Sister: \"and??\" Ella: \"he had mascara on. like proper mascara. and he spent the whole time looking at dresses\" Sister: \"looking at them or wanting to wear them\" Ella: \"i don't know?? i asked if he wears dresses and he said 'not yet'\" Sister: \"ELLA\""
    },
    {
      id: "c6b", route: "ella", gaydar: 90, gaydarSays: "His lashes were better than mine. At BRUNCH. On a SUNDAY.", title: "Brunch in the dress", contact: "Ella",
      intro: "Third date. Brunch in Paddington. You'd bought the dress the day after GOMA and never worn it out of the flat: pale blue, floral, little buttons down the front. Nails done, foundation, blush, lashes, a pink lip. You nearly changed three times. You didn't. When you walked up she looked at you, then at her phone, then back at you. \"Sorry. I thought I had the wrong guy.\"",
      outfits: [
        { label: "The dress, white sneakers and light makeup", gaydar: -5, intro: "Third date. Brunch in Paddington. The pale blue floral dress you bought the day after GOMA, but with white sneakers so it felt less scary, and light makeup: a bit of foundation, lashes, a pink lip. When you walked up she looked at you, then at her phone, then back at you. \"Sorry. I thought I had the wrong guy.\"" },
        { label: "The dress, nails, foundation, blush, lashes, a pink lip" },
        { label: "The dress, strappy heels, painted toes, full glam and a handbag", gaydar: 5, intro: "Third date. Brunch in Paddington. The pale blue floral dress, strappy heeled sandals, toes painted pink, full glam (foundation, contour, blush, lashes, a pink lip) and a little white handbag. You nearly changed three times. You didn't. When you walked up she looked at your heels, then at her phone, then back at you. \"Sorry. I thought I had the wrong guy.\"", them: ["and HEELS. you were taller than me. in heels. at brunch"] }
      ],
      them: ["hey", "ok i have to ask. i've been thinking about it all afternoon", "why did you wear a dress"],
      replies: [
        { you: "Because I wanted to. You asked if I wear dresses at GOMA, and I said 'not yet', and then I thought... why not yet? Why not now? And I felt really good in it, Ella. Did I not look good?",
          them: [
            "you looked GOOD. that's not the point",
            "you didnt say anything on here. you didnt text me 'hey heads up i'm wearing a dress to brunch'. i turned up in jeans and a tee like an idiot and you turned up in a dress with a better blush than me",
            "your hinge pics are literally you in a polo shirt at a wedding",
            "i felt really blindsided tbh"
          ],
          replies: [
            { you: "I didn't think I needed to warn you. It's just a dress. People wear dresses to brunch every day.",
              them: [
                "you didnt NEED to. it would've been nice",
                "people were staring the whole time. the lady with the pram actually stopped walking. the waiter called you 'love' and then went red",
                "and i was sitting there going, is this a date? is he my date? or is this my new friend who's better at makeup than me"
              ],
              replies: [
                { you: "I noticed the staring. I was trying to ignore it. I thought if I just acted normal, it'd be normal.", them: ["well i couldnt ignore it", "it was really uncomfortable for me. i know thats not your fault exactly. but it was"] },
                { you: "Were they staring at me or at us, though?", them: ["at you", "and then at me like what's she doing with him", "i felt like the plus one at my own date"],
                  replies: [{ you: "Sorry, Ella. I didn't think about it like that.", them: ["its ok", "i just dont think this is for me. i want to be the one who's dressed up on a date. not the one sitting next to someone who's more dressed up"] }] }
              ] },
            { you: "That's fair. Sorry. I should have said something first.",
              them: ["its fine", "i just dont think we want the same thing"],
              replies: [{ you: "What do you mean? Like, you're not into it? Or not into me?", them: ["as in i want a guy who's into me", "and i dont think you are. i think you were into the waiter. you gave him a 'thank you darling' and touched his arm"] }] }
          ] },
        { you: "Did you hate it? Be honest. You can say it. I'd rather know.",
          them: [
            "kind of yeah",
            "sorry",
            "not the dress itself. it was a gorgeous dress. i'd wear it. that's the thing. i'd wear it, and you wore it better",
            "i spent the whole time trying to work out if you were into me or the waiter",
            "are you gay?"
          ],
          replies: [
            { you: "I don't know, Ella. I really don't. I just know I felt more like me today than I have in years.",
              gaydar: 95,
              them: ["ok", "that's actually really honest. thank you", "but i don't want to be the girl you figure it out on. i've got enough going on. i've got 24 seven-year-olds", "you should figure it out though. with someone who's not me"] },
            { you: "No. I'm not. I just like the dress.",
              them: ["ok", "sure"],
              replies: [{ you: "I'm not, Ella. Seriously.", them: ["ok {name}"],
                after: "You look at \"No.\" on the screen for a long time. It felt heavier to say than the dress felt to wear." }] },
            { you: "Does it matter? Can't I just be a guy who likes dresses?",
              them: ["yes?? it matters. it was a DATE", "you can be whatever you want. but i want to date a guy who wears jeans to brunch and looks at me. that's all"],
              replies: [{ you: "Fair. Yeah. That's fair.", them: ["right", "ok well good luck. genuinely"] }] }
          ] }
      ],
      after: "Ella, to her sister: \"brunch guy turned up in a dress.\" \"WHAT. like a costume?\" \"no like. a nice one. with lashes. and a better blush than me.\" \"is he gay\" \"obviously he's gay\" \"then why did he match with you\" \"THAT'S WHAT I SAID\"",
      debrief: "Wearing the thing you've been too scared to wear out is a big step, whatever the date thinks. You didn't go home and change. That's the bit to keep."
    },
    {
      id: "ella-beach", route: "ella", gaydar: 93, gaydarSays: "Coral gel toes on a beach full of lifesavers. Hayden hasn't stopped grinning.", title: "Kings Beach", contact: "Ella", irl: true,
      intro: "Ella's uni friends do a beach day at Kings Beach in Caloundra every summer. You wore boardies and a linen shirt, and you kept your sneakers on for the whole drive up, because last night you painted your toes coral and then panicked about it.",
      them: [
        { note: "On the sand everyone kicks their flip-flops off. You keep your sneakers on until Ella looks at them." },
        "Babe. It's the beach. Shoes off.",
        { note: "You take them off. Then your socks. Coral toes, in the sand, in front of nine people." },
        "Oh my god. When did you do that?",
        { note: "A tall guy in red and yellow boardies comes up from the water, shaking it out of his hair. Shoulders like a door." },
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
            "You did so well, babe. Hayden saved you.",
            "\"I didn't need saving.\"",
            "\"Dude,\" Hayden says, grinning at Ella, not you. \"You did a bit.\""
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
            { note: "Hayden picks up the softball bat. \"Beach softball, boys,\" he says to the other guys. Then, to you: \"You can keep score, man. Wouldn't want you breaking anything.\"" },
            { note: "You keep score on the back of Ella's sunscreen with her eyeliner. Hayden hits a home run into the water. Ella cheers so loud a seagull takes off." }
          ] }
      ],
      after: "Ella, to her sister, on the drive home: \"he took his shoes off and his toes were CORAL\" \"stop\" \"and hayden saw\" \"what did hayden say\" \"nothing. he just kept looking at me like. you sure about this one?\" \"are you\" \"no\"",
      debrief: "Being the most polished person on a beach full of lifesavers is a lot. You still took your shoes off. That counts."
    },
    {
      "id": "ella-tickle",
      "route": "ella",
      "gaydar": 95,
      "irl": true,
      "title": "The surf club",
      "contact": "Ella",
      "gaydarSays": "Hayden said it was sunscreen. It was not sunscreen. The whole surf club watched my date squeal.",
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
                  "note": "You don't break. You stare at the ocean so hard a seagull stares back. Your face goes red, but you don't make a sound."
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
                  "after": "Ella, to Meg, in the car: \"he didn't even laugh\" Meg: \"hayden was so annoyed\" Ella: \"right??\" Meg: \"you liked that\" Ella: \"i liked that\""
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
                "\"Ells, he squeals! Like a kettle!\""
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
                  "after": "Meg, to Ella: \"[video] the kettle\" Ella: \"DELETE IT\" Meg: \"hayden asked me to send it to him\" Ella: \"you didn't\" Meg: \"he's your lifesaver. i sent it\""
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
                "We heard. Everyone heard. People in the water heard.",
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
                      "note": "Ella goes for a swim. Hayden goes too, because he's on patrol, he says. He's not on patrol. His shift finished an hour ago."
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
                      "note": "You lie there, wrecked, coral toes still curling on their own. Hayden pats your shin twice. \"Good effort, champ.\""
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
      "debrief": "Being ticklish isn't embarrassing, even when it feels like it in the moment. What she felt watching it was hers to sort out, not yours."
    },
    {
      id: "ella-end", route: "ella", gaydar: 99, spark: 0, gaydarSays: "Connor plays rugby and thinks a cat eye is an actual cat's eye. Perfect man.", title: "Ella and Connor", contact: "Ella",
      intro: "A month later, Ella's Instagram story pops up: her and a guy in a Reds jersey at Suncorp, his arm round her, both holding pies. His name's Connor. You reply to the story with a heart-eyes emoji before you can stop yourself. Ten minutes later she replies.",
      them: [
        "omg hi!!",
        "ok that's so nice of you. this is connor. he plays rugby. like on weekends with his friends, not for real. he has a cauliflower ear and he thinks it's sexy",
        "i asked him last week if he liked my cat eye and he said 'what's wrong with your eye'",
        "i've never been happier honestly lol",
        "how are you?? are you ok? i felt bad about how i left things after brunch",
        {"if":"ella-tickle=held","text":"also hayden still brings up the surf club. how you didn't laugh. it bugs him so much lol"},
        {"if":"ella-tickle=cracked|begged|kept","text":"also sorry but connor has seen the surf club video. hayden put it in the club chat and connor's cousin is in the club. connor said 'the kettle guy?' i said yes. sorry"}
      ],
      replies: [
        { you: "Oh my god, he's SO rugby. Look at his neck. I'm so happy for you, Ella! And don't feel bad. Brunch was... a moment. I was having a moment.",
          them: [
            "you were DEFINITELY having a moment",
            "it was a good moment though. you looked so happy. i was just in the way of it",
            "can i say something without it being weird"
          ],
          replies: [
            { you: "Say it. I can take it.",
              them: [
                "i think you'd love a connor",
                "like not connor. connor's mine. but a guy like that. big, a bit dumb, looks at you like you're the best thing he's ever seen",
                "i think you'd look at him the way you looked at the waiter at brunch. and he'd look back"
              ],
              replies: [
                { you: "Ella! I'm not... I don't... why is everyone saying this to me?", them: ["because it's true babe 💛", "anyway connor says hi. he's asking if you want to come to touch on wednesday. i told him you'd hate it. i said you'd come in a skort"] },
                { you: "...What's his number? Kidding. Kidding! Mostly.", them: ["LOL", "he's taken. but his friend ben is single. just saying", "ben also has a cauliflower ear. you'd have to get used to that"] }
              ] },
            { you: "Actually no. Don't say it. I know what you're going to say.", them: ["ok 😊", "i won't say it then", "but i'm thinking it. very loudly. in your direction"] }
          ] },
        { you: "I miss you. I want to try again. And I'm going to tell Connor that. To his face.",
          them: [
            "omg",
            "{name}",
            "ok i told him. he sent a voice note. i'll type it out because it's mostly him chewing",
            "\"hey man, ella says you want her back. ha. all good. come down to touch wednesday and try and take her off me. bring proper shoes yeah, not the heels\"",
            "you can hear his friends laughing in the background",
            "he's not worried babe. at all. i think it's cute tho"
          ],
          replies: [
            { you: "Fine. I'll be there.",
              them: ["omg ok", "i'm coming. i'm bringing snacks"],
              after: "Wednesday. You wear a white skort and a visor because Ella said it as a joke and you missed the joke. Before the game Connor jogs over, all sweaty, and yells \"boys, he came! in a skort!\" and puts a hand on your shoulder, and you forget why you came. You get the ball once and pass it straight back to him. Afterwards he says \"so. still gonna take her off me, man?\" and you say \"nothing. good game. you're really fast\" and your voice goes up at the end. He says \"didn't think so\", ruffles your hair and goes to get Ella a pie. Ella sends you the video with \"you're so cute i could die 😭 still no tho\"." },
            { you: "Actually tell him never mind. I'd ruin my nails.",
              them: ["lol he said 'thought so'", "and 'tell him to come anyway, the boys want to meet him'", "you're adorable you know that. adorable just isn't the same as boyfriend"] }
          ] },
        { you: "I'm okay. Honestly. Still wearing the dress, if that's what you're asking. Wore it to the Valley last weekend with Dani.",
          them: [
            "STOP",
            "the valley in the blue dress?? i need photos",
            "see this is what i mean. you're out there living your best life in a floral dress and i'm at suncorp watching connor eat two pies. we're both exactly where we should be"
          ],
          replies: [
            { you: "Two pies is a lot, babe. Is he okay?", them: ["he's fine. he's a prop. that's literally his job", "ok i have to go he's yelling at a referee. glad you're good {name} x"] },
            { you: "We are. I'm really glad for you, Ella.", them: ["me too", "for both of us. even if you won't say it yet"] }
          ] }
      ],
      after: "Ella, to Connor at half time: \"remember the guy from hinge i told you about? brunch guy?\" Connor, mouth full of pie: \"the one in the dress?\" Ella: \"yeah he just replied to my story.\" Connor: \"he gay?\" Ella: \"yeah.\" Connor: \"good for him.\" Then he yells at the referee again.",
      debrief: "Being someone's 'before' is a funny thing. You both found out what you wanted. Hers just plays rugby."
    },
    {
      id: "tayla-1", route: "tayla", gaydar: 20, gaydarSays: "Cute, funny, knew every word to 'Padam Padam'. Probably just a Kylie fan?", title: "Felons", contact: "Tayla",
      outfits: [
        { label: "Jeans, a tee and a cap. Brewery guy.", gaydar: -10, intro: "Tayla plays wing defence on Sam's netball team. She's loud, she's funny, and she asked YOU out, at Sam's work drinks, which nobody has ever done. First date: Felons Brewery on a Friday. You wore jeans, a tee and a cap and tried to look like you knew what a hazy IPA was." },
        { label: "A short-sleeve shirt and your rings", intro: "Tayla plays wing defence on Sam's netball team. She's loud, she's funny, and she asked YOU out, at Sam's work drinks. First date: Felons Brewery on a Friday. You wore a short-sleeve patterned shirt and your rings, and ordered a spritz before remembering it was a brewery." },
        { label: "A patterned shirt, rings and a clear gloss", gaydar: 5, intro: "Tayla plays wing defence on Sam's netball team. She's loud, she's funny, and she asked YOU out. First date: Felons Brewery on a Friday. A patterned shirt, your rings and a clear gloss. You ordered a spritz. The bartender said \"good choice\" and winked. Tayla said \"ooh, a spritz guy\" and laughed." }
      ],
      them: ["omg that was so fun", "i can't believe you knew all the words to padam padam when they played it. you did the little hand thing", "my last boyfriend thought kylie was a girl from his work"],
      replies: [
        { you: "I mean, who doesn't know Padam Padam? It's a cultural reset. I was just being polite.",
          them: ["'a cultural reset' 😂", "ok you're hilarious", "my netball girls are going to love you. it's bec's 30th in a few weeks, you should come. as my date. if you want"],
          replies: [
            { you: "Yes! I'd love that. Wait, will your whole netball team be there? Is that terrifying?", them: ["SO terrifying. they're feral", "but they'll love you. steph will interrogate you. just answer everything with a joke", "come watch our game sunday first? ease you in"] },
            { you: "Your netball girls? As in, all of them? Okay. I'll bring my best Kylie.", them: ["LOL please do", "come watch our game on sunday first. meet the girls. it's low stakes. mostly"] }
          ] },
        { you: "Okay, I'm a Kylie fan. Is that a dealbreaker? Be honest.",
          them: ["dealbreaker?? it's a dealMAKER", "you're the most fun first date i've had all year", "come watch my netball sunday? the girls want to meet you. i may have talked about you a bit"],
          replies: [
            { you: "You talked about me? What did you say?", them: ["that you're cute. and funny. and you smell nice", "steph said 'smells nice how' and i said 'like a candle' and she gave me a look. not sure why", "sunday?"] },
            { you: "Sunday. I'll be the one cheering the loudest.", them: ["perfect. bring snacks. the girls love snacks"] }
          ] }
      ],
      after: "Tayla, to the netball group chat: \"date went SO well. he's hilarious and he knows all the kylie songs.\" Steph: \"all of them?\" Tayla: \"all of them.\" Steph: \"hmm.\" Bec: \"STEPH.\""
    },
    {
      id: "tayla-2", route: "tayla", gaydar: 55, gaydarSays: "He told my centre her ponytail was 'giving'. Giving WHAT, {name}.", title: "Courtside", contact: "Tayla", irl: true,
      outfits: [
        { label: "Shorts, a tee, sunglasses. Supportive boyfriend.", gaydar: -5, intro: "Sunday morning. Tayla's netball game at the courts in Downey Park. You came in shorts, a tee and sunglasses with a bag of Sour Patch Kids for the girls. You sit on the sideline with Steph's boyfriend, who keeps trying to talk to you about baseball." },
        { label: "Little shorts, a cropped tee, sunglasses and a bit of tint", intro: "Sunday morning. Tayla's netball game at Downey Park. You wore little pastel shorts, a cropped white tee, big sunglasses and a bit of lip tint. You brought Sour Patch Kids. Steph's boyfriend looked at your shorts and then went back to his phone for the rest of the game." },
        { label: "Little shorts, a cropped tee, sunglasses, tint and painted nails", gaydar: 5, intro: "Sunday morning. Tayla's netball game at Downey Park. Pastel shorts, a cropped tee, big sunglasses, lip tint and pink nails. You made a sign. It says 'GO TAYLA 💅'. Steph saw the sign, then the nails, then looked at Bec.", them: [{ note: "Steph mouths something to Bec across the court. You're pretty sure it's \"the NAILS\"." }] }
      ],
      them: [
        { note: "After the game, sweaty and buzzing, Tayla runs over and hugs you. Her teammates are right behind her." },
        "You came! You actually came! Girls, this is {name}. {name}, this is Bec, it's her 30th soon, and this is Steph, ignore anything she says.",
        { note: "Steph looks you up and down, slowly, from your sunglasses to your shoes." },
        "\"Hi,\" Steph says. \"Love the outfit. Very... netball-adjacent.\""
      ],
      replies: [
        { you: "Thank you! Your game was amazing. And Bec, your ponytail was SO good. It didn't move once. How do you do that? It was giving Ariana.",
          gaydar: 65,
          them: [
            "\"Giving Ariana,\" Steph repeats. Very slowly.",
            { note: "Bec laughs and actually tells you about her hair tie. You get really into it. You ask follow-up questions. Tayla stands next to you, smiling, and then less smiling." },
            "Okay! Okay. Babe, should we go get a coffee? Just us?",
            { note: "At the coffee van she's quiet. Then: \"You were really into Bec's hair.\"" }
          ],
          replies: [
            { you: "I just love a good ponytail. I'm sorry, did I embarrass you? I talk too much when I'm nervous.",
              them: ["No! You didn't embarrass me. They loved you.", "Steph's just... Steph. She thinks everyone's something.", "Come to Bec's 30th. Please. I want you there."] },
            { you: "Hers was good, but yours was better. Obviously. You had a little flick at the end. Very sporty but make it fashion.",
              them: [{ note: "She laughs. It's a real laugh, but she's looking at you a bit differently now." }, "'Sporty but make it fashion.' Okay.", "You're so funny. You're... you know what, you're coming to Bec's 30th. I need the girls to see how funny you are. Not just how... yeah."] }
          ] },
        { you: "Netball-adjacent? I'll take it. Steph, your wing work was terrifying. I was scared for the other team.",
          them: [
            "\"Thanks,\" Steph says. She looks at your nails, or your tint, or your shorts, you can't tell which. \"You're very... supportive.\"",
            "He brought snacks! Who brings snacks? I love him. Okay, I don't LOVE him, we've been on one date. Ignore me.",
            { note: "The girls laugh. Steph doesn't. She's still looking at you like a puzzle she's nearly finished." }
          ],
          replies: [
            { you: "Is Steph always this intense or is it just me?", them: ["\"It's just you,\" Steph says, and walks off to get her water bottle.", "She's always like that. Don't worry. Come to Bec's 30th. Please?"] },
            { you: "(Offer Steph a Sour Patch Kid as a peace offering.)", them: ["\"...thanks,\" Steph says, taking two.", { note: "She eats them, watching you. You're pretty sure you've passed some kind of test. Or failed one." }] }
          ] }
      ],
      after: "That night, in a group chat you're not in: Steph: \"ok i'm just going to say it. tayla's guy is gay.\" Bec: \"STEPH\" Steph: \"he said bec's ponytail was 'giving ariana'\" Bec: \"it WAS giving ariana tho\" Steph: \"that's not the point bec\""
    },
    {
      id: "c6c", route: "tayla", gaydar: 90, gaydarSays: "Did Bec's eyeliner better than Bec does. In the bathroom. At her own 30th.", gaydarWho: "Tayla", title: "Wrong chat", contact: "Bec's 30th 🎂",
      intro: "Bec's 30th in the Valley, as Tayla's date. You wore a satin top, a skirt, eyeliner and a bit of glitter. You did Bec's eyeliner in the bathroom when hers smudged. You danced to every Kylie song and nobody else did. Bec added you to the group chat to sort out Ubers. The next morning:",
      outfits: [
        { label: "Satin top, jeans and a flick of eyeliner", gaydar: -5, intro: "Bec's 30th in the Valley, as Tayla's date. You wore a satin top with jeans and a little flick of eyeliner. You did Bec's eyeliner in the bathroom when hers smudged. Bec added you to the group chat to sort out Ubers. The next morning:" },
        { label: "Satin top, a skirt, eyeliner and glitter" },
        { label: "A satin slip dress, heels, eyeliner and a lot of glitter", gaydar: 5, intro: "Bec's 30th in the Valley, as Tayla's date. You wore a satin slip dress, heels, sharp eyeliner and glitter on your cheekbones. You did Bec's eyeliner in the bathroom when hers smudged. Bec added you to the group chat to sort out Ubers. The next morning:", them: [{ from: "Bec", text: "also {name} you walked in heels better than me. at my own birthday. rude" }] }
      ],
      them: [{ from: "Bec", text: "thanks for coming everyone!! 🥳 still hungover. someone took my shoe home and i need it back" }, { from: "Steph", text: "ok be honest is tayla's guy gay or" }, { from: "Steph", text: "WRONG CHAT" }, { from: "Steph", text: "omg sorry {name} that was meant for bec" }, { from: "Tayla", text: "steph 😐" }],
      replies: [
        { you: "Ha. All good, Steph. Happens to the best of us. Bec, I think your shoe is in my bag, by the way. Don't ask.",
          them: [{ from: "Steph", text: "im so sorry" }, { from: "Bec", text: "omg thank you. and to be fair to steph he did do my eyeliner in the bathroom. better than i do it" }, { from: "Bec", text: "like SO much better" }, { from: "Tayla", text: "can everyone stop" }],
          replies: [
            { you: "Bec, your eyeliner did look incredible. You're welcome. My rates are very reasonable.",
              them: [{ from: "Bec", text: "it did tbh" }, { from: "Steph", text: "see this is what i mean" }, { from: "Tayla", text: "oh my god" }, { from: "Tayla", text: "muting this" }] },
            { you: "(Say nothing else.)" }
          ],
          after: "An hour later Tayla messages you on her own: \"honestly that was so embarrassing. everyone was asking me if you were gay all night and i didnt know what to say. you did bec's makeup. you danced to kylie on your own. steph asked me three times. i don't think this is going anywhere\"" },
        { you: "To answer your question, Steph: I don't know, babe. I'm still working it out. But the eyeliner was fire, right?",
          gaydar: 95,
          them: [{ from: "Steph", text: "oh" }, { from: "Bec", text: "😳" }, { from: "Bec", text: "it WAS fire" }, { from: "Tayla", text: "are you serious" }, { from: "Tayla", text: "you couldnt have worked that out BEFORE i brought you to my friend's 30th?" }],
          replies: [
            { you: "Sorry, Tay. I really am. I didn't know it was going to be like this.",
              them: [{ from: "Tayla", text: "yeah well i looked like an idiot" }, { from: "Tayla", text: "i spent the whole night saying 'he's not gay, he's just fun' and steph kept doing this face" }, { from: "Steph", text: "in my defence bec's cousin is single and he's gay so" }, { from: "Tayla", text: "STEPH" }] },
            { you: "Tayla, can we talk on our own?", them: [{ from: "Tayla", text: "not really no" }, { from: "Bec", text: "ok maybe take this somewhere else guys" }],
              after: "Tayla doesn't reply to your DM. Two days later Sam mentions, carefully, that netball was \"a bit awkward\"." }
          ] },
        { you: "Steph. Darling. I'm wearing your lip gloss in my profile pic. I borrowed it in the bathroom. Does that answer your question?",
          gaydar: 95,
          them: [{ from: "Steph", text: "LMAO" }, { from: "Bec", text: "i'm crying" }, { from: "Tayla", text: "this isn't funny" }, { from: "Tayla", text: "it's a little bit funny. but it's mostly not funny" }, { from: "Tayla", text: "can you ring me. we need to talk" }],
          after: "On the phone, Tayla's not angry. She's just tired. \"I really liked you,\" she says. \"You're the most fun person I've ever brought anywhere. But I want to date a guy who borrows my hoodie, not my lip gloss.\"" },
        { you: "(Leave the group.)",
          after: "You leave the group. Your phone buzzes twice more with Tayla's name and you don't open it until lunch." }
      ],
      debrief: "Finding out people are talking about you is awful, especially when it happens right in front of you. You can laugh it off, say it straight, or step out. All three are fine."
    },
{
      "id": "tayla-feet",
      "route": "tayla",
      "gaydar": 93,
      "gaydarSays": "Jordan found out you're ticklish in about four seconds. Steph has it on video. Twice.",
      "title": "Pool day",
      "contact": "Tayla",
      "irl": true,
      "intro": "A week after Bec's 30th. Pool day at Steph's. Everyone's barefoot on the hot pavers. Your toes are still glittery pink from the party, because the remover's at Dani's. Steph's cousin Jordan is here. He coaches Tayla's netball team on Thursdays and he's been asking her to dinner since preseason.",
      "them": [
        {
          "note": "Tayla's on the lounger next to yours. Bec and Steph are sitting on the edge of the pool with their feet in."
        },
        "\"Tay, your boyfriend's toes are sparklier than the pool,\" Steph says.",
        {
          "note": "Jordan comes out of the house with a tray of drinks. He's in board shorts, no shirt, and he sits right on the end of your lounger like it's his."
        },
        "\"So this is the guy.\" He looks at your feet, then at Tayla. \"Tay. Really?\"",
        "Be nice, Jordan.",
        "\"I'm always nice.\" He grabs your ankle. \"Hold still, I want to see the glitter.\""
      ],
      "replies": [
        {
          "you": "(Try to pull your foot back.) Hey! No. Give it back.",
          "them": [
            {
              "note": "He doesn't give it back. He runs one finger down the sole of your foot, very slowly."
            },
            {
              "note": "You make a noise you've never made before. It's high. It goes across the whole pool."
            },
            "\"Oh, he's ticklish,\" Jordan says, delighted. \"Tay, did you know he's ticklish?\"",
            "Steph's already got her phone out.",
            {
              "note": "He does it again, under your toes this time. You're laughing so hard you can't get a word out, slapping the lounger, trying to kick and not kick him at the same time."
            }
          ],
          "replies": [
            {
              "you": "Stop! Stop stop stop. Jordan. STOP.", "spark": 7,
              "them": [
                {
                  "note": "He lets go straight away and holds both hands up."
                },
                "\"Stopped. All yours.\" He pats your foot like it's a dog. \"Cute toes though, buddy.\"",
                {
                  "note": "You pull both feet up under you. Your face is hot and so are your ears. Bec is crying laughing into her towel."
                },
                "\"Did you SQUEAL?\" Bec says. \"Tay, he squealed.\"",
                "He squealed.",
                {
                  "note": "Jordan swaps onto the end of Tayla's lounger. She moves her legs so he can sit."
                }
              ]
            },
            {
              "you": "(Laughing) Okay, okay, I give up, you win!", "spark": 2,
              "gaydar": 95,
              "them": [
                "\"I win,\" Jordan says, and lets go. \"Didn't even have to try.\"",
                "\"Again,\" Steph says. \"My phone wasn't focused.\"",
                "No. Leave him alone, he's gone bright red.",
                {
                  "note": "Tayla says it, but she's smiling at Jordan when she does. He winks at her."
                },
                "\"Tay. Your boyfriend just surrendered to me in front of everyone,\" Jordan says. \"Pretty sure that means I get dinner.\""
              ]
            }
          ]
        },
        {
          "you": "I'm not ticklish. Go for it.", "spark": 5,
          "them": [
            "\"Yeah?\" Jordan says. He holds your ankle in one hand and wiggles his fingers in front of your toes.",
            {
              "note": "You're already giggling. He hasn't touched you yet."
            },
            "\"Not ticklish,\" Bec says. \"Sure.\"",
            {
              "note": "Then he does touch you, right in the arch, and you fold in half on the lounger, grabbing the towel and kicking your other leg in the air. Your sunglasses fall off."
            },
            "\"STOP,\" you get out, between laughing. \"Okay! I'm ticklish! I'm ticklish!\"",
            {
              "note": "He stops the second you say it."
            },
            "\"Thought so,\" he says. \"Tay, he's a liar and he's ticklish. That's two strikes.\"",
            "\"Three,\" Steph says. \"Glitter toes.\""
          ]
        },
        {
          "you": "(Tuck both feet under your towel.) They're not for touching.", "spark": 12,
          "gaydar": 92,
          "them": [
            "\"Not for touching,\" Jordan says. \"Did you hear that, Tay? His feet have rules.\"",
            {
              "note": "He reaches under the towel anyway and gives your toes one quick squeeze. You squeak and kick the towel off. Bec and Steph lose it."
            },
            "Jordan.",
            "\"Sorry, sorry,\" he says, not sorry. He gets up off your lounger and sits on the edge of the pool next to Tayla's feet instead. \"Couldn't help it. They were right there.\"",
            {
              "note": "For the rest of the afternoon he's in the pool, and Tayla's on the steps, and you're on your lounger with your feet under the towel."
            }
          ]
        }
      ],
      "after": "Steph, to the group chat that {name} isn't in this time: \"[video] i've watched this 30 times\" Bec: \"the SQUEAL\" Steph: \"jordan had him in hysterics in 4 seconds\" Bec: \"tay's been on jordan's lounger for an hour\" Tayla: \"i can see this chat you know\" Tayla: \"...he's a good coach ok\"",
      "debrief": "Being laughed with in front of people can feel a lot like being laughed at. You got to say stop, and it stopped. That's the part that counts."
    },
    {
      id: "tayla-end", route: "tayla", gaydar: 99, spark: 0, gaydarSays: "Mitch plays football and can't name one Kylie song. Steph approved him in four seconds.", title: "Tayla and Mitch", contact: "Tayla", irl: true,
      outfits: [
        { label: "Jeans and a tee. Keep your head down.", gaydar: -2, intro: "Two months later. Sam drags you to the netball grand final. Jeans, a tee, just lip oil. In the stands, next to Tayla's water bottle, is a guy: tall, sunburnt, in a football jersey, shouting \"GO TAY\" like he's at a stadium. That's Mitch." },
        { label: "Cute shorts, a cropped knit and lashes", intro: "Two months later. Sam drags you to the netball grand final. You wore little shorts, a cropped knit, lashes and gloss. In the stands, next to Tayla's water bottle, is a guy: tall, sunburnt, in a football jersey, shouting \"GO TAY\" like he's at a stadium. That's Mitch." },
        { label: "A sundress, sandals, painted toes and big sunglasses", gaydar: 1, intro: "Two months later. Sam drags you to the netball grand final. You wore a yellow sundress, sandals, painted toes and big sunglasses. Three women in the stands ask where your dress is from. In the stands, next to Tayla's water bottle, is a guy: tall, sunburnt, in a football jersey, shouting \"GO TAY\" like he's at a stadium. That's Mitch.", them: [{ note: "Steph sees your sundress from the court and gives you a slow thumbs up." }] }
      ],
      them: [
        { note: "After the game, Tayla walks over, sweaty and grinning, holding Mitch's hand." },
        "Oh! Hi! {name}! Sam said you might come. This is Mitch. Mitch, this is {name}. We, um. We went out. For a bit.",
        "\"Hey,\" Mitch says. \"Tay's told me about you. You did Bec's makeup, yeah? Legend.\" He means it.",
        "He plays AFL. Like, for Morningside. He doesn't know a single Kylie song. I played him Padam Padam and he said 'is this the one from the car ad'. I'm in love with him."
      ],
      replies: [
        { you: "Oh my god, hi Mitch! Love the guernsey, very... orange. Tay, babe, he's gorgeous. I'm obsessed. I'm so happy for you.",
          them: [
            "Thanks. He is. I am.",
            { note: "She looks at you properly for the first time. Your lashes. Your gloss. Your nails. She smiles. It's not an awkward smile anymore." },
            "You look really good, {name}. Like, really happy. Way happier than at Felons. Are you... are you seeing anyone?",
            "\"Tay,\" Mitch says. \"Don't be nosy.\" He's not annoyed. He just thinks it's not her business. You like him a bit for that."
          ],
          replies: [
            { you: "No one. Just me and my girls. Me and Dani are going out on Saturday. Strictly for the dancing.",
              them: ["The Valley?", "\"Love the Valley,\" Mitch says. \"Went to a buck's there once. Ended up at a bar with a drag show. Best night of my life.\"", "Mitch, babe. That's not... okay, never mind. {name}, have fun. Seriously."] },
            { you: "Not yet. Maybe soon. Who knows.", them: ["\"Who knows,\" Tayla says, and grins.", "Steph has a list, by the way. Of guys. For you. She made it after the 30th. I told her to burn it. She didn't."] }
          ] },
        { you: "(Stand up a bit taller.) Mitch. Can I have a word? Just us. It's about Tay.",
          them: [
            "\"Yeah, course man,\" Mitch says, and follows you to the fence.",
            { note: "He's a full head taller, sunburnt across the nose. He leans on the fence so he's down at your height, and waits. Your stomach flips. You put it down to nerves." },
            "\"What's up, champ?\""
          ],
          replies: [
            { you: "I want her back. I think. I'm going to ask her. I wanted to tell you first, because that's fair. Sorry.",
              them: [
                "\"You want her back?\" Mitch grins at you like you've told him a really good joke. \"Dude. Go for it. Take your shot. I'll wait.\"",
                "\"Here.\" He holds out his Gatorade. \"You look like you need this more than me.\"",
                { note: "You have a sip. Your hand shakes when you give it back. He sees it, and grins wider." },
                { note: "Tayla's walked over. She heard all of it." },
                "Oh my god. {name}. Did you just ask Mitch if you could win me back?",
                "You're so cute. No. But you're so cute."
              ] },
            { you: "...Nothing. Sorry. Your guernsey's a really good orange.",
              gaydar: 100,
              them: [
                "\"Ha. Thanks, man. Want one? Got a spare in the car. Might be a bit big on you.\"",
                { note: "You come back to Tayla holding a Lions guernsey and Mitch's number \"for when you want to come to a game\". You're red to the tips of your ears." },
                "You went over there to fight for me and came back with his number.",
                "Steph's filming. Sorry. I couldn't stop her."
              ] }
          ] },
        { you: "Ha. Okay. Nice to meet you, Mitch. I'm going to go find Sam.",
          them: ["\"Nice to meet you too, man!\"", { note: "Tayla catches your arm as you go. Just for a second." }, "Hey. I'm glad you're okay. I'm glad we're both okay.", "And Steph says hi. She also says 'told you so'. Don't reply to her."] }
      ],
      after: "Steph, in the netball group chat that night: \"update: {name} asked mitch if he could have tay back and mitch gave him a gatorade.\" Bec: \"i love him so much\" Tayla: \"which one\" Bec: \"both honestly\"",
      debrief: "Seeing your ex happy with someone who's your total opposite can feel strange. You can be gracious, you can try to win her back, you can just leave. Nobody's keeping score."
    },
    {
      id: "georgie-1", route: "georgie", gaydar: 20, gaydarSays: "Can't climb. Can do a perfect French tip. Interesting combo.", title: "Belay partner", contact: "Georgie",
      outfits: [
        { label: "Gym shorts and an old tee. You're here to climb.", gaydar: -10, intro: "Georgie climbs at the same gym as you, every Tuesday and Thursday. She's direct, she's strong, and she hates small talk. Tonight she asked you to belay her, then asked you to get a drink after. You wore gym shorts and an old Bintang tank top you got in Bali." },
        { label: "Fitted gym shorts and a nice tank", intro: "Georgie climbs at the same gym as you, every Tuesday and Thursday. She's direct, she's strong, and she hates small talk. Tonight she asked you to belay her, then asked you to get a drink after. You wore fitted gym shorts, a nice black tank and a clear coat on your nails, which you've started doing \"for grip\"." },
        { label: "Short shorts, a cropped tank, and nails with a French tip", gaydar: 5, intro: "Georgie climbs at the same gym as you. She's direct, she's strong, and she hates small talk. Tonight she asked you to belay her, then asked you to get a drink after. You wore short running shorts, a cropped tank and a French tip you did yourself last night. Chalk got all over it. You were devastated. Georgie noticed you being devastated." }
      ],
      them: ["hey. good session", "you're a terrible climber btw. but you're a good belayer and you're funny", "drink was nice. want to do it again. saturday. thai in west end"],
      replies: [
        { you: "Wow. Terrible? That's brutal. Accurate, but brutal. Yes to Thai.",
          them: ["i'm always brutal. ask anyone", "it's better than pretending", "saturday 7. the one on boundary st"],
          replies: [
            { you: "Saturday. Wear something nice. I want to see Georgie out of a harness.", them: ["lol ok", "you too. no bintang tank tops"] },
            { you: "Can I ask why you asked me out? Genuinely. I fell off a V1 twice.", them: ["because you don't take yourself seriously", "most guys at the gym are so intense. you sang ABBA on the wall", "saturday"] }
          ] },
        { you: "I'm not terrible! I'm just... graceful. In a different way. Saturday works.",
          them: ["graceful lol", "you did a little scream every time you slipped", "but yes. saturday"],
          replies: [
            { you: "It was a manly scream.", gaydar: 25, them: ["it was not", "it was a high note", "see you saturday"] },
            { you: "See you Saturday. I'll practise being less graceful.", them: ["don't. it was the best part"] }
          ] }
      ],
      after: "Georgie, to her housemate: \"asked out the guy from the gym\" Housemate: \"the one who sings?\" Georgie: \"yeah. he's funny. he does his own nails\" Housemate: \"oh?\" Georgie: \"for grip. apparently\""
    },
    {
      id: "georgie-2", route: "georgie", gaydar: 55, gaydarSays: "He asked the waiter if his eyebrows were laminated. They were. He was right. That's not the point.", title: "Tacos", contact: "Georgie", irl: true,
      outfits: [
        { label: "Jeans, a nice tee, clear nails", gaydar: -5, intro: "Second date. Tacos in Fortitude Valley. Jeans, a nice tee, clear nails. Georgie's in a black tank top and cargo pants with chalk still on her knuckles. She's already ordered for both of you." },
        { label: "A fitted shirt, gloss and painted nails", intro: "Second date. Tacos in Fortitude Valley. A fitted shirt, a clear gloss and your nails painted a soft sage green. Georgie's in a black tank top and cargo pants with chalk on her knuckles. She looks at your nails and then just looks at you, waiting." },
        { label: "A sheer shirt, gloss, sage nails and a little eyeliner", gaydar: 5, intro: "Second date. Tacos in Fortitude Valley. A sheer black shirt, gloss, sage nails and a thin line of eyeliner. Georgie's in a black tank top and cargo pants. She looks at your eyeliner for a full three seconds without blinking.", them: [{ note: "\"Eyeliner,\" she says. Not a question. Just noting it." }] }
      ],
      them: [
        "Hi. I ordered. Fish tacos, pork belly, the corn thing. You're having a marg, I can tell you're a marg person.",
        { note: "She sits back and looks at you. She doesn't do small talk, so she just looks." },
        "Your nails are green."
      ],
      replies: [
        { you: "Sage, actually. It's very in right now. Everyone's doing it. Do you like it? I can do yours, if you want. You'd suit a deep red.",
          gaydar: 60,
          them: [
            "No, I'll chip it on the wall in five minutes.",
            "But it's nice. You're good at it.",
            { note: "The waiter comes over. He has incredible eyebrows. You stare at them. Georgie watches you stare at them." },
            "Are you going to say something to him or just look?"
          ],
          replies: [
            { you: "Sorry! Are your brows laminated? They're amazing. Who does them?",
              gaydar: 65,
              them: ["\"Oh my god, yes! Thank you! There's a girl on James St,\" the waiter says, delighted.", { note: "You talk for four minutes. You get the girl's Instagram. The waiter brings you a free churro. Georgie eats her taco and says nothing until he leaves." }, "You got a free churro.", "I've been coming here two years and I've never got a free churro."] },
            { you: "I wasn't looking at him. I was looking at the specials board behind him.",
              them: ["The specials board is behind me.", "It's fine. Eat your taco."] }
          ] },
        { you: "They're for grip. Climbing grip. It's a technique.",
          them: [
            "No it isn't.",
            "I've been climbing for eleven years. Nail polish isn't a technique.",
            "You can just say you like it."
          ],
          replies: [
            { you: "...Fine. I like it. I like it a lot. I did them last night watching Drag Race.", gaydar: 65, them: ["Drag Race.", "Okay.", { note: "She drinks her marg. She doesn't say anything else about it. You're not sure if that's good or bad." }] },
            { you: "It's a technique. Look it up.", them: ["I won't.", "But okay. Eat your taco. They're better hot."] }
          ] }
      ],
      after: "Georgie, to her housemate: \"second date.\" Housemate: \"and?\" Georgie: \"green nails. eyeliner maybe. asked the waiter about his eyebrows. got a free churro.\" Housemate: \"you like him though?\" Georgie: \"i like him. i don't know if he likes me. i don't know if he likes girls.\""
    },
    {
      id: "c6d", route: "georgie", gaydar: 95, gaydarSays: "Looked at the waiter's arms eight times. I counted. Then I counted again.", title: "Straight up", contact: "Georgie",
      intro: "Third date. Thai in West End, the place on Boundary St. You wore a lilac slip dress with a cardigan over it, your nails painted, gloss and lashes. She didn't say one word about it the whole dinner, which was somehow worse. You talked to the waiter about his tattoos for a long time.",
      outfits: [
        { label: "The slip dress with a cardigan buttoned right up", gaydar: -5, intro: "Third date. Thai in West End. You wore the lilac slip dress but buttoned a big cardigan right up over it, and kept your makeup to gloss. She didn't say one word about it the whole dinner, which was somehow worse." },
        { label: "Lilac slip dress, a cardigan, nails, gloss and lashes" },
        { label: "Lilac slip dress, strappy sandals, painted toes, lashes, no cardigan", gaydar: 4, intro: "Third date. Thai in West End. The lilac slip dress, no cardigan, strappy sandals, toes painted to match, gloss and lashes. She didn't say one word about it the whole dinner, which was somehow worse.", them: ["the sandals too. dont think i didnt see the toes"] }
      ],
      them: ["hey", "im just going to ask because i hate games and i've been thinking about it since the tacos", "are you gay"],
      replies: [
        { you: "Why does everyone keep asking me that? I wore a dress, Georgie. It's 2026. Guys can wear dresses.",
          them: [
            "they can",
            "and it looked good. honestly. better than anything i own",
            "but you didn't look at me once tonight. you looked at the waiter. you asked about his tattoos for ten minutes. you touched his arm when he showed you the one on his bicep",
            "you looked at the waiters arms like 8 times. i counted. i'm a climber, i count reps"
          ],
          replies: [
            { you: "I was looking at the tattoo! It was a really good tattoo. It was a swallow. Very traditional.",
              them: ["it was a swallow on a very big arm", "{name}. i'm not mad. i just need you to stop pretending with me. i hate pretending", "i'm going to ask one more time and then i'll never ask again. are you gay"],
              replies: [
                { you: "...I don't know. I really don't, Georgie.", them: ["ok", "that's more honest than anything you've said in three dates", "i think we should stop seeing each other. you can still belay me. you're a good belayer"] },
                { you: "No.", them: ["ok", "then you're a straight guy who wears slip dresses and stares at waiters. fine", "either way i'm out. see you at the gym"] }
              ] },
            { you: "Fine. I can wear a dress and be straight.", them: ["sure", "are you?"],
              replies: [{ you: "...Next question.", them: ["right", "ok well. good luck. honestly. i mean it"] }] }
          ] },
        { you: "Wow. Straight to it. Okay. Can I ask you something first? Did you hate the dress?",
          them: [
            "no. i didn't hate it",
            "it suited you more than the bintang tank top. that's for sure",
            "i didn't say anything about it because i didn't know what to say. i still don't. that's why i'm asking you instead"
          ],
          replies: [
            { you: "I'm not gay. I just like pretty things. I've always liked pretty things.", them: ["ok", "i like pretty things too. i'm also not dating a guy who looks prettier than me at dinner", "sorry. that's harsh. but you know me"] },
            { you: "I don't know what I am. I know I felt really good in it.", gaydar: 97, them: ["ok", "that's fair", "but i'd rather not be the person you figure it out on. no offence. i like you. just not like that anymore"] }
          ] },
        { you: "No.",
          them: ["ok", "you looked at the waiters arms like 8 times but ok"],
          replies: [
            { you: "I didn't. You're imagining it.", them: ["i'm really not", "whatever. im not doing this. i hate games. see you at the gym"] },
            { you: "I'm not having this conversation over text, Georgie.", them: ["fine", "neither am i", "this is the end of the conversation then"] }
          ] }
      ],
      after: "Georgie, to her housemate: \"he's gay.\" \"the dress guy?\" \"the dress guy.\" \"did he say\" \"no. but he looked at the waiter's arms eight times.\" \"you counted?\" \"i always count.\"",
      debrief: "When someone asks you straight out, you can answer straight out, or not at all. Notice which answer felt lighter to say."
    },
    {
      id: "georgie-feet", route: "georgie", gaydar: 96, gaydarSays: "Lilac. Self-done. Cleaner edges than mine. Corey noticed. Corey notices everything.", title: "Climbing shoes", contact: "Georgie", irl: true,
      intro: "Thursday at the gym. You and Georgie have been seeing each other three weeks. Corey's here tonight. He sets the routes, he's got forearms like a man who sets routes, and he asks Georgie to come climbing outside with him every single week.",
      them: [
        { note: "After the session you sit on the bench and pull your climbing shoes off. Your toes come out. Lilac. You forgot." },
        "Huh. Lilac.",
        { note: "Corey drops his chalk bag next to you. His feet are bare, enormous and covered in chalk." },
        "\"No way,\" he says, loud enough for the whole bench. \"You get your toes done, man?\"",
        "He did them himself. Look at the edges. They're perfect.",
        "\"Course he did.\" Corey's grinning. He doesn't bother lowering his voice when he turns to Georgie. \"Kangaroo Point Saturday? Proper rock. Just us. Bet he'll survive a day without you.\""
      ],
      replies: [
        { you: "Can I come too?",
          them: [
            "\"Yeah, course, man,\" Corey says, way too easily. \"Bring flip-flops for the walk down. Don't want you chipping anything.\"",
            { note: "Georgie snorts. She doesn't say no to Saturday." },
            "Bring snacks. You can belay. You're good at belaying.",
            { note: "She means you'll be at the bottom holding the rope while Corey climbs next to her." }
          ] },
        { you: "(Shove your feet back into your socks.)",
          them: [
            { note: "One sock goes on inside out. Nobody says anything. Corey's still grinning." },
            "Don't hide them. They look good. That's the problem.",
            "\"What problem?\"",
            "Doesn't matter. Saturday, Corey. Seven."
          ] },
        { you: "They won't chip, actually. That's a top coat.",
          gaydar: 98,
          them: [
            "\"Top coat,\" Corey says, nodding slowly. \"Georgie. Come on. Come on.\"",
            "Three weeks and you've never said 'top coat' in front of me.",
            "\"You never asked,\" you say. You nod at Corey. \"He did.\"",
            { note: "Corey laughs and ruffles your hair. Then he goes and helps Georgie coil her rope, standing very close to her." }
          ] }
      ],
      after: "Georgie, to her housemate: \"corey asked me out again.\" \"and?\" \"i said yes. for climbing.\" \"what about {name}\" \"{name} has lilac toes. did them himself. better than i could.\" \"so?\" \"so i'm going climbing with corey.\"",
      debrief: "Getting caught out in front of the guy who wants your girl stings. It isn't a contest you have to win. You can just be the guy with the top coat."
    },
    {
      "id": "georgie-tickle",
      "route": "georgie",
      "gaydar": 97,
      "irl": true,
      "title": "The crash mats",
      "contact": "Georgie",
      "gaydarSays": "I counted. Corey tickled him for 41 seconds. He lasted four. I'm not saying that means anything. It means something.",
      "intro": "A week after Corey asked Georgie to Kangaroo Point. Thursday night at the gym again. After the session everyone lies on the big crash mats under the bouldering wall, barefoot, eating the lollies someone always brings. Your toes are still lilac. You didn't take it off. Corey's lying on the mat right next to Georgie.",
      "them": [
        {
          "note": "You lie down on Georgie's other side. Your feet end up near Corey's head, because that's how the mats work."
        },
        "\"Still lilac,\" Corey says, looking at them sideways. \"No chips. Respect.\"",
        "I told you. Top coat.",
        "\"How was the rock on Saturday?\" you ask her.",
        "Good. Corey led Pommy Wall. I seconded it. It was good.",
        {
          "note": "She doesn't say anything else about it. Corey smiles at the ceiling."
        },
        {
          "note": "Then Corey rolls over onto his elbow and looks at your foot like it's a route he's reading."
        },
        "\"Hey. Georgie. Climbers' feet are meant to be tough. Calluses. No feeling. Bet his aren't.\"",
        "Corey.",
        "\"Just checking. Science.\" His hand's already round your ankle. Chalky. \"Hold still, buddy. This is for the gym record.\"",
        "There's no gym record for that.",
        "\"There is now. Georgie, time it.\"",
        {
          "note": "Georgie, very slowly, takes out her phone and opens the stopwatch."
        }
      ],
      "replies": [
        {
          "you": "(Go rigid. Stare at the holds on the ceiling. Not a sound.)",
          "them": [
            {
              "note": "You stare at a pink crimp on the ceiling. Corey's chalky fingers start on your heel and walk up the sole, slow, one at a time."
            },
            "Five seconds.",
            {
              "note": "He gets to the arch. Your calf goes tight as a rope. He feels it and grins."
            },
            "\"Oh, he's fighting. Look at the calf.\"",
            "Ten seconds.",
            {
              "note": "A couple of the regulars sit up on the mats to watch. Someone says \"oh no, Corey's doing the thing\". So it's a thing. He does this."
            },
            "Fifteen.",
            {
              "note": "The chalk makes it dry and scratchy, which is somehow worse. He goes right under your toes."
            }
          ],
          "replies": [
            {
              "you": "(Hold it. Hold it all the way.)",
              "them": [
                {
                  "note": "You hold it. You hold it through twenty. Through thirty. Your eyes water. You don't make a sound."
                },
                "Forty. Forty-five.",
                {
                  "note": "At sixty Corey lets go and flops onto his back."
                },
                "\"Nothing,\" he says. \"Not a thing. Georgie, he's a statue.\"",
                "One minute and two seconds. Not a sound.",
                {
                  "note": "She's looking at you differently. Like you're a route she hadn't noticed was hard."
                }
              ],
              "replies": [
                {
                  "you": "(Sit up and dust the chalk off your foot.) My turn to time you, Corey.",
                  "outcome": "held",
                  "spark": 22,
                  "them": [
                    {
                      "note": "Corey laughs and sits up and tucks his feet right under himself. \"No thanks.\""
                    },
                    "Oh, that's interesting. Corey. Give me your foot.",
                    "\"Absolutely not.\"",
                    {
                      "note": "Georgie lies back down. This time she lies down a bit closer to you, and she leaves her hand on your arm."
                    },
                    "I'm putting it in the gym chat. One minute two. New record.",
                    {
                      "note": "Corey goes to put the lollies away. He takes a long time doing it."
                    }
                  ],
                  "after": "Georgie, to the gym chat: \"new record. 1:02. no reaction.\" Corey: \"rigged\" Georgie: \"you won't do yours\" Corey: \"no comment\" Georgie, to her housemate: \"he beat corey at corey's own thing. i liked it more than i expected\""
                },
                {
                  "you": "(Wiggle your toes in his face.) Go on. The other one.",
                  "outcome": "held",
                  "spark": 15,
                  "them": [
                    "\"Bad idea, buddy,\" Corey says, and grabs it.",
                    "Restarting the timer.",
                    {
                      "note": "This one he doesn't play with. He goes straight under the toes with both thumbs. You last eight seconds. Then a snort comes out, then a giggle, then you're kicking."
                    },
                    "Eight seconds. Okay. So the left one's the weak one.",
                    {
                      "note": "He lets go. The regulars are cheering. Georgie's laughing, properly, and she's laughing at Corey's face, not yours."
                    },
                    "\"Kangaroo Point again Saturday?\" Corey says to her, still grinning. She says \"yeah, okay.\""
                  ],
                  "after": "Georgie, to her housemate: \"right foot: 1:02. left foot: 8 seconds.\" \"so he's ticklish after all\" \"corey's taking me back to kangaroo point. we're doing a harder one\""
                }
              ]
            },
            {
              "you": "(It breaks. You giggle.)",
              "them": [
                {
                  "note": "At eighteen seconds it comes out of you: a high giggle, then a squeak, then you're curled on your side on the crash mat trying to get your foot back. His grip's like he's holding a jug hold. It doesn't move."
                },
                "Eighteen seconds.",
                "\"Eighteen!\" Corey says. \"Georgie, eighteen seconds!\"",
                "I can see the timer, Corey.",
                {
                  "note": "Someone at the bouldering wall has stopped mid-route to watch. She's hanging off one hand, laughing."
                }
              ],
              "replies": [
                {
                  "you": "(Giggling) Okay! Fine! I'm ticklish! Happy?",
                  "outcome": "cracked",
                  "spark": 10,
                  "them": [
                    {
                      "note": "He lets go straight away."
                    },
                    "\"Very happy.\" He lies back with his hands behind his head. \"Write it down, Georgie. Eighteen.\"",
                    "Writing it down.",
                    {
                      "note": "She actually writes it down. In her phone, under a note called 'Corey's records'. You can see your name above it. There are other names."
                    },
                    {
                      "note": "You sit up and pick chalk out of your toes. Georgie lies back down next to Corey, both of them on their phones, showing each other something."
                    }
                  ],
                  "after": "Georgie, to her housemate: \"18 seconds\" \"there's a list. corey keeps a list. he's at the top for not reacting\" \"{name} is at the bottom\" Housemate: \"is that bad\" Georgie: \"it's just numbers\""
                },
                {
                  "you": "(Bright red, giggling) Corey! Stop it!",
                  "outcome": "cracked",
                  "spark": 8,
                  "them": [
                    {
                      "note": "He stops the second you say it and lets go."
                    },
                    "\"Done, done. Sorry, buddy.\"",
                    {
                      "note": "You sit up and wrap your arms round your knees, feet flat on the mat where he can't get them. You're red right down your neck."
                    },
                    "You okay? That was a lot of noise.",
                    {
                      "note": "She says it the way she'd ask if you'd hurt your finger. Then she turns back to Corey. \"Do me.\""
                    },
                    "\"No way. You'll kick me.\"",
                    "I won't. I won't react.",
                    {
                      "note": "She doesn't. Corey tries for a full minute. She just lies there eating a lolly. They both look at you after."
                    }
                  ],
                  "after": "Georgie, to the gym chat: \"me: 1:00, no reaction. {name}: 18 seconds\" Corey: \"he went so red\" Georgie: \"he did\" Corey: \"kangaroo point saturday\" Georgie: \"yes\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're giggling the second he touches you.)",
          "them": [
            "One... oh. Okay. One second.",
            {
              "note": "You're gone before she's finished saying it. You're giggling, squirming across the crash mat, trying to roll away while he hangs on to your ankle."
            },
            "\"ONE SECOND!\" Corey says. \"Georgie! One second! That's a record!\"",
            "It's the worst record. It's a record for being the worst.",
            {
              "note": "He doesn't stop. He tucks your foot under his arm like a rope bag and goes at the sole with his chalky fingers. You're shrieking. The whole bouldering area has turned round."
            },
            "\"How have you been climbing with feet this ticklish?\""
          ],
          "replies": [
            {
              "you": "(Giggling) Please! Corey, please, stop!",
              "them": [
                {
                  "note": "He stops right away and lets go. You lie on the mat, panting, chalk all down your shin."
                },
                "\"He said please,\" Corey says. \"Georgie, he said please. Write that down.\"",
                "I'm not writing that down.",
                {
                  "note": "He picks your foot up again, gently, not tickling, just holding it, and wiggles it at Georgie like a puppet."
                },
                "\"One more round? He's the easiest one I've ever done.\""
              ],
              "replies": [
                {
                  "you": "(Pull it back.) No. I'm done. Absolutely done.",
                  "outcome": "begged",
                  "spark": 6,
                  "them": [
                    "\"Fair enough, champ.\" He lets it go.",
                    {
                      "note": "You sit cross-legged with your feet tucked under your knees for the rest of the night. Every time Corey moves, you flinch, and he notices, and he does it on purpose."
                    },
                    "Stop flinching. He's not going to.",
                    {
                      "note": "Georgie lies back down. She's on Corey's side of the mat now. He's showing her a video of a route in Spain and she's got her head almost on his shoulder."
                    }
                  ],
                  "after": "Georgie, to her housemate: \"he lasted one second\" \"one\" \"and then he begged\" Housemate: \"poor thing\" Georgie: \"yeah\" \"corey's asked me to go to the blue mountains for a weekend\" Housemate: \"and\" Georgie: \"it's a climbing trip\" Housemate: \"georgie\""
                },
                {
                  "you": "(Still giggling) ...Fine. One more round.",
                  "outcome": "kept",
                  "spark": 3,
                  "gaydar": 98,
                  "them": [
                    "Starting the timer.",
                    {
                      "note": "He goes again. You last zero seconds. You're laughing so hard you can't breathe. People are filming from the top of the wall."
                    },
                    "Thirty seconds. Forty. Corey, he's not even trying to get away.",
                    "\"He likes it,\" Corey says, still going. \"Look at him. He's having the best night of his life.\"",
                    {
                      "note": "He stops at a minute and lets go and holds his hand up for a high five. Georgie gives it to him."
                    },
                    "You asked for more. You actually asked for more.",
                    {
                      "note": "You lie on the mat giggling while Corey and Georgie pack up the lollies together."
                    }
                  ],
                  "after": "Georgie, to the gym chat: \"he asked for a second round\" Corey: \"he loved it\" Gym regular: \"is this the lilac toes guy\" Georgie: \"yes\" Gym regular: \"he seems happy\" Georgie: \"he does. he seems really happy.\""
                }
              ]
            },
            {
              "you": "(Stop fighting. Lie back and let him.)",
              "them": [
                {
                  "note": "You stop pulling. You lie back on the crash mat, arms out, laughing at the ceiling, lilac toes wriggling in Corey's chalky hand."
                },
                "\"He's given up,\" someone says. \"He's just lying there.\"",
                "Thirty seconds. He's... still going. Forty.",
                {
                  "note": "Corey takes his time. Heel. Arch. Between every toe. The ball of your foot. He hums while he does it. You're crying with laughter."
                },
                "A minute. Corey, a minute.",
                {
                  "note": "Georgie's not laughing anymore. She's watching your face while she holds the phone."
                },
                "{name}. You can say stop. You know that."
              ],
              "replies": [
                {
                  "you": "(Gasping) Stop! Stop. Okay. Stop.",
                  "outcome": "kept",
                  "spark": 2,
                  "gaydar": 98,
                  "them": [
                    {
                      "note": "He stops the moment you say it and lets go."
                    },
                    "One minute forty-one.",
                    "\"New record,\" Corey says. \"Longest ever. Most ticklish ever. Both.\"",
                    {
                      "note": "He pats your foot twice, like he's sending a route. Then he stands up and puts his hand down for Georgie. \"Bouldering? One more problem before close?\""
                    },
                    {
                      "note": "She takes his hand. They climb the purple one together. You lie on the mat with your feet in the air and the lollies, watching them."
                    }
                  ],
                  "after": "Georgie, to her housemate: \"1 minute 41 seconds\" \"he let corey tickle him for 1 minute 41 seconds\" \"and the whole time i was thinking. this is not a guy who likes girls\" Housemate: \"and corey\" Georgie: \"corey drove me home\""
                },
                {
                  "you": "(Can't speak. Too busy laughing.)",
                  "outcome": "kept",
                  "spark": 0,
                  "gaydar": 99,
                  "them": [
                    {
                      "note": "You can't say anything. You're laughing too hard to get a word out. Corey keeps going."
                    },
                    "Corey. Stop. Now.",
                    {
                      "note": "He stops straight away and lets go."
                    },
                    "\"He didn't say stop.\"",
                    "He can't. He's purple. Two minutes ten.",
                    {
                      "note": "You're lying across two crash mats now, chalk all over you, still giggling. The girl on the wall has climbed down to come and look."
                    },
                    {
                      "note": "Georgie puts her phone away. She looks at you for a long time. Then she looks at Corey."
                    },
                    "I'm going to go. Corey, you're going my way?",
                    "\"I'm going your way.\""
                  ],
                  "after": "Georgie, to her housemate, from Corey's car: \"two minutes ten\" \"he didn't say stop once\" \"i'm not mad. i'm just done counting\" Housemate: \"where are you\" Georgie: \"in corey's car\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "Some bodies are just ticklish. That says nothing about how strong you are. Whatever she was counting, she'd already started before the timer."
    },
    {
      id: "georgie-end", route: "georgie", gaydar: 99, spark: 0, gaydarSays: "Ben does rope access on skyscrapers. He's never worn a slip dress. I checked.", title: "Georgie and Ben", contact: "Georgie", irl: true,
      outfits: [
        { label: "Old gym gear. Pretend nothing happened.", gaydar: -2, intro: "Six weeks later, Tuesday night at the climbing gym. You wore your oldest gym gear and no makeup, hoping to be invisible. Georgie's on the overhang wall. Belaying her is a guy you've never seen: massive, bearded, ropes slung over his shoulder like he does this for a living. He does. That's Ben." },
        { label: "Matching pastel gym set and lip oil", intro: "Six weeks later, Tuesday night at the climbing gym. A matching lilac gym set, lip oil, your hair clipped back. Georgie's on the overhang wall. Belaying her is a guy you've never seen: massive, bearded, ropes slung over his shoulder like he does this for a living. He does. That's Ben." },
        { label: "Matching gym set, a full face of 'no-makeup makeup' and a pink claw clip", gaydar: 1, intro: "Six weeks later, Tuesday night at the climbing gym. A matching lilac gym set, 'no-makeup makeup' that took forty minutes, and a pink claw clip. Georgie's on the overhang wall. Belaying her is a guy you've never seen: massive, bearded, ropes over his shoulder. That's Ben.", them: [{ note: "Ben looks at your claw clip. Then he says \"nice clip\" like he means it." }] }
      ],
      them: [
        { note: "Georgie lowers off the wall and lands right next to you." },
        "Oh. Hi. This is Ben. Ben, {name}. We went out for a bit.",
        "\"Hey, man,\" Ben says. His voice is so deep you feel it in your ribs. \"Georgie says you're a good belayer.\"",
        "He does rope access. On skyscrapers. He abseils off the Infinity tower on Mondays. He's never once asked a waiter about his eyebrows. I'm very happy.",
        {"if":"georgie-tickle=held","text":"\"Corey told me about you,\" Ben says. \"The guy who beat his tickle thing. He hasn't shut up about it.\""},
        {"if":"georgie-tickle=cracked|begged|kept","text":"\"Oh, you're on Corey's list,\" Ben says. \"The bottom of it.\" He says it nicely. That makes it worse."},
        {"if":"georgie-tickle=cracked|begged|kept","note":"Georgie doesn't correct him. She just says \"it's a dumb list\" and chalks up."}
      ],
      replies: [
        { you: "Oh, hi Ben! Rope access, wow, very brave. Georgie, he's lovely. I'm really happy for you. Truly.",
          them: [
            "Thanks.",
            "You look good, {name}. You look... comfortable. You never looked comfortable with me. Even in the dress.",
            "That's not a dig. It's just true. I always say what's true."
          ],
          replies: [
            { you: "I am comfortable. I think I'm figuring stuff out. Slowly.", them: ["Good.", "Figure it out faster. You're wasting good eyeliner on climbing walls."] },
            { you: "I'm the same as I was. Just more... me.", them: ["Yeah. More you.", "More you is good. More you just isn't for me."] }
          ] },
        { you: "(Go up to Ben.) Ben. Hi. Sorry. Can I talk to you? About Georgie.",
          them: [
            "\"Yeah, man,\" Ben says, and starts coiling his rope. He doesn't look at you.",
            { note: "He's got chalk up his forearms and a little scar through one eyebrow. You look at the scar for too long." },
            "\"Go on.\""
          ],
          replies: [
            { you: "I think I made a mistake with her. I want to try again. So. Um. I just thought you should know.",
              them: [
                "\"Good luck with that,\" Ben says, still coiling. He still doesn't look up.",
                { note: "He says it like you've told him you're going to climb Everest in flip-flops." },
                "\"Want me to spot you on the overhang after? Might help with the whole... impressing her thing.\"",
                { note: "You say yes before you can think about it. Ben smirks. Georgie has heard every word from the bench." },
                "{name}. You came over to win me back and now he's spotting you.",
                "You're so cute. It's annoying how cute you are. Still no."
              ] },
            { you: "...Never mind. Your forearms are very... sorry. I'm going to go.",
              gaydar: 100,
              them: [
                { note: "Your face goes hot. You turn round too fast and kick the chalk bucket." },
                "\"Easy, tiger.\" Ben catches the bucket. Then your elbow. He's laughing.",
                "Georgie, quietly: \"You're bright red. You came over to fight him for me and you're bright red.\""
              ] }
          ] },
        { you: "(Wave, smile, and go to the other side of the gym for the rest of the night.)",
          them: [{ note: "You climb on your own for an hour. You fall off everything. At one point you look over and Ben's showing Georgie a move, and she's laughing, and it's a laugh you never got out of her." }, { note: "On your way out Georgie says \"see you Thursday\" like nothing's changed. Ben says \"see you, man\" and gives you a fist bump. You fist bump him back with your pink nails." }] }
      ],
      after: "Georgie, to her housemate: \"{name} told ben he wants me back.\" \"no.\" \"at the gym. then went bright red and kicked the chalk bucket.\" \"NO.\" \"ben spotted him on the overhang after.\" \"is ben worried\" \"ben's never been worried about anything. that's why i'm with ben.\"",
      debrief: "Going to win someone back and finding it's the guy making your face go hot is very human. So is laughing at it later. You don't have to out-man anyone to be worth something."
    },
    {
      id: "lucy-1", route: "lucy", gaydar: 15, gaydarSays: "Polo, chinos, very normal. Asked where I got my scrunchie. Probably for his sister.", title: "Date one", contact: "Lucy",
      outfits: [
        { label: "The polo. Very normal.", gaydar: -5, intro: "Lucy's a nurse at the RBWH. You met at Kayla's birthday and she gave you her number on a napkin. Date one: drinks at the Story Bridge Hotel. You wore a polo shirt and chinos, the most normal outfit you own. She wore a little black dress and a velvet scrunchie." },
        { label: "The polo, but with your good cologne and a silver chain", intro: "Lucy's a nurse at the RBWH. You met at Kayla's birthday and she gave you her number on a napkin. Date one: drinks at the Story Bridge Hotel. A polo, your good cologne and a thin silver chain you kept touching. She wore a little black dress and a velvet scrunchie." }
      ],
      them: ["hi! home safe 😊", "that was really nice. you're so easy to talk to. most guys just talk about themselves for 2 hours", "also you're the first guy to ever ask me where i got my scrunchie lol"],
      replies: [
        { you: "It was velvet! In a gorgeous bottle green. I had to know. Is that weird?",
          them: ["not weird!! cute", "it's from a market stall in paddington. i'll take you sometime", "date two? i'm on nights next week but the weekend after?"],
          replies: [
            { you: "Yes! The weekend after. I'll come to the market with you.", them: ["deal 😊 ok i'm going to sleep, i'm on a 7am. night!"] },
            { you: "For sure. And I'll buy you another scrunchie. In burgundy. You'd suit burgundy.", gaydar: 20, them: ["burgundy 😭 ok you have good taste", "date two. paddington markets. it's a plan"] }
          ] },
        { you: "I had a great time too. You were really fun.",
          them: ["you were too!! date two?", "i'm a nurse so my roster is chaos but i'll make it work"],
          replies: [{ you: "Make it work. I want to see you again.", them: ["😊 ok. weekend after next. i'll pick"] }] }
      ],
      after: "Lucy, to Kayla: \"he's lovely. like really lovely.\" Kayla: \"he looked very... polo.\" Lucy: \"he asked where my scrunchie was from.\" Kayla: \"lol why\" Lucy: \"he said it was a gorgeous bottle green\""
    },
    {
      id: "lucy-2", route: "lucy", gaydar: 40, gaydarSays: "He painted his nails 'Bordeaux'. He used the word Bordeaux. At a market.", title: "Paddington markets", contact: "Lucy", irl: true,
      outfits: [
        { label: "A tee and jeans, nails painted a deep red", gaydar: -5, intro: "Date two. Paddington markets on a Saturday morning. A plain tee and jeans, but you painted your nails last night, a deep red. You told yourself you'd take it off. You didn't. Lucy meets you at the gate with two coffees." },
        { label: "A linen shirt, deep red nails and a bit of tinted balm", intro: "Date two. Paddington markets on a Saturday morning. A cream linen shirt, a bit of tinted balm and your nails painted a deep red. Lucy meets you at the gate with two coffees and looks at your hands as you take yours." }
      ],
      them: [
        "Hi! I got you an oat flat white, I guessed. Was that right?",
        { note: "She hands it over. She looks at your fingers wrapped around the cup." },
        "Oh. Your nails. They're red. That's... new? They weren't red last time. Right? Or was I not paying attention?"
      ],
      replies: [
        { you: "They're new! It's called 'Bordeaux'. I did them last night. I wanted to try something a bit different. Do you hate it?",
          gaydar: 45,
          them: [
            "'Bordeaux.'",
            "No! I don't hate it. It's... it's a good colour. It's honestly a better red than the one I've got on.",
            { note: "She holds her hand next to yours. Yours is better. She laughs, a bit too loudly." },
            "Okay. Cool. Scrunchie stall? It's this way."
          ],
          replies: [
            { you: "Yes! Lead the way. I'm getting you the burgundy one. It'll match my nails. We'll be twins.",
              them: ["Twins. Ha. Okay.", { note: "At the stall you pick the burgundy one for her and a black velvet one for yourself. \"For the gym,\" you say. Lucy says \"of course\" in a voice you can't read." }] },
            { you: "Sorry. I know it's a bit much. I'll take it off before next time.",
              them: ["No, don't! I mean, it's your nails. Do what you want.", "It just surprised me. That's all. Come on, scrunchies."] }
          ] },
        { you: "You were paying attention. They weren't red. I just felt like it this week. Nobody's ever noticed my nails before.",
          them: [
            "Well I noticed. I'm a nurse. I notice hands.",
            "They suit you. Kind of annoyingly.",
            { note: "She takes your hand to walk through the crowd. Then she lets go, then takes it again. Like she's not sure." }
          ],
          replies: [
            { you: "Annoyingly? Why annoyingly?", them: ["Because my nails are a mess and you look like you've just come from a salon.", "Never mind. Scrunchies!"] },
            { you: "(Squeeze her hand.)", them: [{ note: "She squeezes back. It's nice. You're both looking at the nails between you." }] }
          ] }
      ],
      after: "Lucy, to Kayla: \"second date. he had red nails. like a deep red. he called it bordeaux.\" Kayla: \"BORDEAUX??\" Lucy: \"he bought a black scrunchie for himself. for the gym.\" Kayla: \"lucy.\" Lucy: \"i know.\""
    },
    {
      id: "c6e", route: "lucy", gaydar: 90, gaydarSays: "Gayer every date. By date five he'll be borrowing my dress.", title: "Getting gayer", contact: "Lucy",
      intro: "You've been seeing Lucy for three weeks. Date one you wore a polo. Date two your nails were painted. Date three: little silver hoops and a bit of gloss. Today, coffee in Teneriffe, you wore a cropped knit, lashes and blush. Her friend Kayla happened to be at the next table. Lucy kept looking over at her.",
      outfits: [{"label": "Cropped knit, a bit of mascara and blush", "gaydar": -5, "intro": "You've been seeing Lucy for three weeks. Date one you wore a polo. Date two your nails were painted. Date three: little silver hoops and a bit of gloss. Today, coffee in Teneriffe, you wore a cropped knit, a bit of mascara and blush. Her friend Kayla happened to be at the next table. Lucy kept looking over at her."}, {"label": "Cropped knit, lashes and blush"}, {"label": "Cropped knit, lashes, blush, gloss and a mini skirt", "gaydar": 5, "intro": "You've been seeing Lucy for three weeks. Date one you wore a polo. Date two your nails were painted. Date three: little silver hoops and a bit of gloss. Today, coffee in Teneriffe, you wore a cropped knit, lashes, blush, gloss and a mini skirt. Her friend Kayla happened to be at the next table and nearly dropped her latte. Lucy kept looking over at her.", "them": ["also a SKIRT. to coffee. with me"]}],
      them: ["hey so", "dont take this the wrong way", "but you get gayer every single time i see you lol"],
      replies: [
        { you: "Is that a bad thing?",
          them: ["idk", "its just a lot of change in three weeks", "first date you were like normal guy. today you had better lashes than me"],
          replies: [
            { you: "I'm just wearing what I like now.",
              them: ["yeah i can see that", "kayla literally texted me under the table", "\"is he gay or is he just really into fashion\"", "and i didnt know what to say"],
              replies: [
                { you: "What did you say?", them: ["i said i dont know", "which is kind of embarrassing when im the one dating you", "so. are you?"],
                  replies: [
                    { you: "Yeah. I think I am.", gaydar: 100, them: ["ok", "i mean. i kind of knew by date three", "the girls are going to be insufferable about this"] },
                    { you: "I don't know yet.", them: ["ok", "well can you work it out before date five", "bc i'm not doing another coffee with kayla watching"] }
                  ] },
                { you: "Kayla could've just asked me.", them: ["oh she wants to trust me", "she asked me three times in the car park"] }
              ] },
            { you: "Normal guy?", them: ["you know what i mean", "like straight looking", "ok that came out bad. but you know"] }
          ] },
        { you: "Gayer how?",
          them: ["um", "the nails. the earrings. the lip stuff", "today you asked the barista where she got her eyeliner done", "and you were way more interested in her answer than anything i said"],
          replies: [
            { you: "That's not fair.", them: ["isnt it", "i asked about your weekend and you said 'good'", "you asked her about eyeliner for five minutes"] },
            { you: "Okay. That's fair.", them: ["yeah", "can i just ask you straight", "are you gay"],
              replies: [
                { you: "Yeah.", gaydar: 100, them: ["ok", "thank you for saying it", "kind of wish it wasnt three weeks in but ok"] },
                { you: "Why does it matter?", them: ["because were dating??", "or i thought we were"] }
              ] }
          ] },
        { you: "Your friends have been talking about me, haven't they.",
          them: ["...a bit", "ok a lot", "hang on"],
          replies: [
            { you: "Show me.",
              them: ["ok dont be mad", "[screenshot] Kayla: ok i saw him. lucy hes gay", "[screenshot] Ruby: the earrings or the lashes", "[screenshot] Kayla: BOTH. and he complimented the barista's nails", "[screenshot] Ruby: lucy babe ask him", "[screenshot] Lucy: i cant just ASK him", "so. im asking"],
              replies: [
                { you: "Tell Ruby yes.", gaydar: 100, them: ["omg", "ok", "honestly kind of relieved. i thought i was doing something wrong", "dont tell kayla i said that"] },
                { you: "I'm not answering a group chat.", them: ["fair", "im not asking for them though", "im asking for me"],
                  replies: [{ you: "Yeah. I am.", gaydar: 100, them: ["ok", "thanks"] }, { you: "Can I tell you in person?", them: ["yeah ok", "not with kayla there though"] }] }
              ] },
            { you: "I don't want to know.", them: ["ok fair", "they just keep asking me if youre gay and i dont know what to tell them"] }
          ] }
      ],
      after: "Lucy's group chat that night. Kayla: \"so??\" Lucy: \"dont\" Ruby: \"thats a yes then\" Lucy: \"im not saying anything\" Kayla: \"thats DEFINITELY a yes\" Kayla: \"ask him where he gets his lashes done\"",
      debrief: "Changing how you look bit by bit is a real way to come out. People notice, and they talk. Nobody gets to decide when you say it, even when they've already guessed."
    },
    {
      id: "lucy-feet", route: "lucy", gaydar: 92, gaydarSays: "Red toes at the low table. Fraser drove me home. It's nothing. Probably.", title: "Low tables", contact: "Lucy", irl: true,
      intro: "Kayla's birthday dinner at a Japanese place in Sunnybank. The private room has tatami mats, low tables and a sign at the step: please remove your shoes. You're in loafers with no socks, and you painted your toes red on Tuesday because Lucy said red would suit you. Also here: Fraser. He's a paramedic who works nights with Lucy, and Kayla told you in the car he's \"obsessed with her\".",
      them: [
        { note: "Everyone lines their shoes up at the step. You slip your loafers off. Red toes, on the tatami, under the bright light." },
        "Oh! You did them! They look so good.",
        { note: "Fraser sits down cross-legged right next to Lucy. Big guy, grey hoodie, thick work socks. He looks at your feet." },
        "\"Red,\" he says, and grins at Lucy. \"Bold, man. Real bold.\"",
        { note: "There's nowhere to put your feet. Under the low table they end up right next to his knee." },
        "Fraser's a paramedic. Don't let him tell you about his worst callout. He'll do it with the gyoza on the table.",
        "\"Wasn't gonna,\" Fraser says, leaning back on his hands, closer to her. \"Gonna tell him about the nurse who saved my life at 3am with a Mars bar.\" Lucy goes pink."
      ],
      replies: [
        { you: "(Kneel and tuck your feet under you.)",
          them: [
            { note: "You sit on your feet. After ten minutes you can't feel them." },
            { note: "Fraser pours Lucy's sake, then everyone else's, then yours. He says \"say when\" and you say \"when\" and your voice goes up on it. \"Easy, lightweight,\" he says." },
            "Kayla, from across the table: \"{name} sits like my ballet teacher.\"",
            "He does! Sorry. He does.",
            { note: "She's laughing, but she isn't looking at you. She's waiting for the Mars bar story." }
          ] },
        { you: "It's called Big Apple Red. Lucy picked it.",
          gaydar: 96,
          them: [
            "Kayla: \"LUCY picked it?\"",
            "I said it would suit him. And it does.",
            "\"Did you paint them for him too?\" Fraser asks her, grinning.",
            "No! He does his own. He's better at it than me.",
            { note: "Fraser laughs, says \"course he is\" and pinches a gyoza off her plate. She slaps his hand. Then she lets him have it." }
          ] },
        { you: "Bold's kind of my thing.",
          them: [
            "\"Yeah? I can see that,\" Fraser says, looking right at your toes, and laughs. He doesn't look worried about anything.",
            { note: "When the karaage comes he gives Lucy the biggest piece. Then he puts the little crumbly one on your plate, the way you'd serve a kid." },
            "Ruby, quietly, next to you: \"You know he's been after her for a year, yeah?\"",
            "\"I know now,\" you say."
          ] }
      ],
      after: "Kayla, in the group chat after: \"{name} sat through dinner with red toes and fraser did not stop grinning\" Ruby: \"fraser drove lucy home\" Kayla: \"FRASER DROVE LUCY HOME?\" Lucy: \"he lives near me. it's nothing\" Ruby: \"it's not nothing\"",
      debrief: "Being on show when you didn't plan to be is hard, especially next to someone who's sure of himself. You stayed at the table."
    },
    {
      "id": "lucy-tickle",
      "route": "lucy",
      "gaydar": 94,
      "irl": true,
      "title": "After night shift",
      "contact": "Lucy",
      "gaydarSays": "Fraser said he was checking his reflexes. I'm a nurse. That is not how you check reflexes. Everyone at the table knew that.",
      "intro": "A week after Kayla's birthday. Lucy's off a run of night shifts, and her share house in Annerley does a big breakfast when someone finishes nights. Shoes off at the door, because the floorboards are new. You came in sandals. Your toes are still Big Apple Red. Fraser's already here, because he finished the same shift. He's on the couch in his uniform pants and a hoodie, barefoot.",
      "them": [
        {
          "note": "Lucy hugs you at the door, sleepy, still in scrubs. She looks down at your toes and smiles."
        },
        "You kept the red! I love that you kept it.",
        "\"Big Apple Red,\" Fraser says from the couch. \"I remembered. I've been thinking about it all week.\"",
        "Fraser, don't start. He's been up for nineteen hours. He gets silly.",
        {
          "note": "Breakfast is on the coffee table. There's nowhere left on the couch except the end next to Fraser. You sit there with your plate. Lucy sits on the floor between his feet and leans back against his legs. Like she does that a lot."
        },
        {
          "note": "You put your feet up on the ottoman. Fraser looks at them. Then he puts his coffee down."
        },
        "\"Hey. Lucy. Want to see a reflex? Plantar reflex. You'll love it.\"",
        "I've seen a plantar reflex, Fraser. I'm a nurse.",
        "\"Not on him you haven't.\"",
        {
          "note": "He's already got your foot. He holds it up by the heel and runs one finger slowly up the outside of your sole, heel to toes, very professional, the way they do it at the hospital."
        },
        "\"Toes should curl down,\" he says. \"Normal response. Let's see.\"",
        {
          "note": "Then the finger goes back down the middle. Faster. And it's not the hospital way anymore."
        }
      ],
      "replies": [
        {
          "you": "(Keep your face still. You're a grown man eating eggs.)",
          "them": [
            {
              "note": "You hold your fork in the air and keep looking at your eggs. Your toes curl so hard they go white."
            },
            "\"Toes curling. Normal response,\" Fraser says. \"Let's check it again.\"",
            "That's not a reflex anymore. That's just tickling.",
            "\"Clinical opinion noted.\"",
            {
              "note": "Two of Lucy's housemates come out of the kitchen with toast. One of them says \"oh, is Fraser doing the feet thing?\" So he does this to people."
            },
            {
              "note": "He gets the gap under your toes with his thumbnail. Your fork is shaking. A bit of egg falls off it."
            }
          ],
          "replies": [
            {
              "you": "(Don't break. Eat your eggs.)",
              "them": [
                {
                  "note": "You put the egg in your mouth and chew. It's the hardest thing you've ever done. He tries the arch. The heel. Your little toe. You chew."
                },
                {
                  "note": "After a long time he puts your foot down and picks up his coffee."
                },
                "\"Nothing. Abnormal response. Lucy, he's got no feelings in his feet.\"",
                "He's got plenty of feelings. He's just better at hiding them than you.",
                {
                  "note": "She looks up at you from the floor. She's smiling like she's surprised."
                }
              ],
              "replies": [
                {
                  "you": "(Put your feet down on the floor next to Lucy.) Thanks for breakfast, Luce.",
                  "outcome": "held",
                  "spark": 24,
                  "them": [
                    {
                      "note": "You put your feet on the floorboards right next to her. She leans off Fraser's legs and onto yours."
                    },
                    "You're welcome. Sorry about him. He's not normally like this. He is normally like this.",
                    "\"I'm going to bed,\" Fraser says, a bit flat. He takes his coffee with him.",
                    {
                      "note": "Lucy stays leaning on your legs while the housemates clear up. She falls asleep there for twenty minutes. You don't move."
                    }
                  ],
                  "after": "Lucy, to Kayla: \"fraser tried to tickle him and he didn't even flinch\" Kayla: \"wow\" Lucy: \"he just ate his eggs\" Kayla: \"and you\" Lucy: \"i fell asleep on him\" Kayla: \"LUCY\" Lucy: \"on his legs. it was nice\""
                },
                {
                  "you": "(Smile.) You can try the other one if you want.",
                  "outcome": "held",
                  "spark": 16,
                  "them": [
                    "\"Oh, he's brave,\" Fraser says, and grabs it.",
                    {
                      "note": "He doesn't bother with the reflex this time. Both thumbs, straight under the toes. A giggle comes out of you. Just one, small and high. You put your hand over your mouth."
                    },
                    "\"There it is. Normal response, finally.\"",
                    {
                      "note": "He lets go. The housemates clap. Lucy's laughing up at Fraser, and he puts his hand on her head and messes her hair up, and she lets him."
                    },
                    "Okay. Both of you. Eat your breakfast.",
                    {
                      "note": "She stays leaning on Fraser's legs."
                    }
                  ],
                  "after": "Lucy, to Kayla: \"he lasted ages and then giggled once\" Kayla: \"cute\" Lucy: \"fraser messed my hair up\" Kayla: \"cute??\" Lucy: \"i don't know kayla. i'm so tired\""
                }
              ]
            },
            {
              "you": "(It's too much. You giggle.)",
              "them": [
                {
                  "note": "You crack. The egg goes everywhere. A high, helpless giggle comes out, and then another, and you're doubled over on the couch with your plate tipping."
                },
                "\"Abnormal response!\" Fraser says. \"Lucy, look! Very abnormal!\"",
                {
                  "note": "Lucy grabs your plate before it goes. She's laughing so hard she's crying, but it's the over-tired kind."
                },
                "\"Someone get this on video, he sounds like a squeaky toy.\"",
                {
                  "note": "One of the housemates gets it on video."
                }
              ],
              "replies": [
                {
                  "you": "(Giggling) Okay! Okay, I'm ticklish! You got me!",
                  "outcome": "cracked",
                  "spark": 10,
                  "them": [
                    {
                      "note": "He lets go straight away and sits back with his coffee."
                    },
                    "\"I always get them. Fourteen years on the road. Nobody beats the plantar reflex.\"",
                    "That's not what the plantar reflex is for.",
                    {
                      "note": "You sit up, red, picking egg off your shorts. You try to make a joke and it comes out as a giggle again. Fraser points at you without looking."
                    },
                    {
                      "note": "Lucy goes to make more coffee. Fraser goes to help her. You can hear them laughing in the kitchen. About something else, maybe."
                    }
                  ],
                  "after": "Lucy's housemate, to the house chat: \"[video] the squeaky toy\" Lucy: \"please delete\" Housemate: \"fraser asked for it\" Lucy: \"why does fraser want it\" Housemate: \"he said he wants to show the station\" Lucy: \"oh no\""
                },
                {
                  "you": "(Red, giggling) Fraser! Stop! Stop it!",
                  "outcome": "cracked",
                  "spark": 8,
                  "them": [
                    {
                      "note": "He stops the moment you say it and lets go."
                    },
                    "\"Okay, okay. Clinical trial over. Sorry, man.\"",
                    {
                      "note": "You tuck your feet under you and sit on them. Your face is burning. There's egg on the couch."
                    },
                    "Are you okay, babe? You went really high.",
                    {
                      "note": "She asks it kindly, like she's asking a patient. Then Fraser says \"he hit a note I didn't know men could hit\" and she snorts, and then she can't stop, and she has to put her face in his knee."
                    }
                  ],
                  "after": "Lucy, to Kayla: \"fraser tickled him and he squealed\" Kayla: \"lol\" Lucy: \"and then i laughed. into fraser's knee. for like five minutes\" Kayla: \"lucy\" Lucy: \"i know. i know\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're giggling before the second stroke.)",
          "them": [
            {
              "note": "You're gone straight away. High, squeaky giggles. You put your plate down before you drop it and grab a cushion and hug it."
            },
            "\"Oh, that's VERY abnormal,\" Fraser says, delighted. \"Lucy, look at this. Look at him.\"",
            "I'm looking.",
            {
              "note": "He tucks your foot under his arm like he's holding a patient's leg for a splint, and goes at it with his whole hand. You're shrieking into the cushion."
            },
            "\"Red toes and the most ticklish feet in Brisbane. Lucy, he's a whole case study.\"",
            {
              "note": "The housemates have come out of the kitchen to watch. One of them is eating toast and just watching, like it's TV."
            }
          ],
          "replies": [
            {
              "you": "(Giggling) Fraser! Please, please stop!",
              "them": [
                {
                  "note": "He stops and lets go straight away. You fold over the cushion, panting."
                },
                "\"He said please,\" Fraser says. \"Very polite patient. Lucy, he's very polite.\"",
                "He is very polite.",
                {
                  "note": "Fraser holds your foot up again, just holding it, not tickling, and looks at you over it."
                },
                "\"One more test? Ten seconds. For research.\""
              ],
              "replies": [
                {
                  "you": "(Pull your foot back.) No! No more research.",
                  "outcome": "begged",
                  "spark": 6,
                  "them": [
                    "\"Fair enough, sweetheart. Patient declines.\" He lets go.",
                    {
                      "note": "You eat the rest of breakfast with your feet pulled right up under you on the couch, as far from Fraser as you can get."
                    },
                    {
                      "note": "Lucy stays on the floor leaning on his legs. At some point he starts playing with her hair while he talks to her housemates, and she closes her eyes."
                    },
                    "You're fine, babe. It was funny. You're just really ticklish.",
                    {
                      "note": "She says it with her eyes closed."
                    }
                  ],
                  "after": "Lucy, to Kayla: \"he begged fraser to stop\" Kayla: \"aw\" Lucy: \"in such a little voice\" \"fraser played with my hair for an hour after\" Kayla: \"and you let him\" Lucy: \"i was really tired\" Kayla: \"lucy\""
                },
                {
                  "you": "(Still giggling) ...Okay. Ten seconds.",
                  "outcome": "kept",
                  "spark": 3,
                  "gaydar": 96,
                  "them": [
                    {
                      "note": "The housemates cheer. Fraser counts out loud like he's doing CPR, ten down to one. You're squealing from 'ten'."
                    },
                    {
                      "note": "At 'one' he keeps going for another five. Then he stops and lets go."
                    },
                    "\"Research complete. Results: extremely ticklish. Asked for more.\"",
                    "You asked for more. Babe. You asked for more.",
                    {
                      "note": "She gets up off the floor to take the plates. Fraser gets up to help. In the kitchen he says something and she laughs and bumps her hip into his."
                    },
                    {
                      "note": "You lie on the couch, still giggling, red toes in the air."
                    }
                  ],
                  "after": "Lucy's housemate, to the house chat: \"[video] he asked for more\" Lucy: \"i'm going to sleep for 14 hours\" Housemate: \"fraser's still here\" Lucy: \"he's helping with dishes\" Housemate: \"it's been an hour\""
                }
              ]
            },
            {
              "you": "(Stop fighting. Just laugh.)",
              "them": [
                {
                  "note": "You stop pulling. You lie back across the couch and laugh at the ceiling, cushion on your chest, red toes wriggling in Fraser's hand."
                },
                "\"He's not even resisting,\" a housemate says, mouth full of toast.",
                "\"He loves it,\" Fraser says. \"Lucy, look at him. Happiest patient I've ever had.\"",
                {
                  "note": "It goes on and on. He does the arch, then the heel, then each toe one at a time like he's checking circulation. You're crying from laughing."
                },
                {
                  "note": "Lucy's stopped laughing. She's sitting up on the floor watching you, a bit worried, like you're a patient she's not sure about."
                },
                "{name}? You can say stop. You know that, right?"
              ],
              "replies": [
                {
                  "you": "(Gasping) Stop! Stop. Okay. Stop.",
                  "outcome": "kept",
                  "spark": 2,
                  "gaydar": 97,
                  "them": [
                    {
                      "note": "He stops the moment you say it and lets go."
                    },
                    "\"Two and a half minutes,\" Fraser says, checking his watch. \"Very good stamina.\"",
                    {
                      "note": "He pats your ankle twice, like he's finished bandaging it. \"Good effort, champ.\""
                    },
                    {
                      "note": "You lie there wrecked, red toes still curling on their own, while Fraser stands up and stretches and says \"Luce, you want a lift to Kayla's later?\""
                    },
                    "Yeah. Yeah, okay.",
                    {
                      "note": "She doesn't ask if you want to come."
                    }
                  ],
                  "after": "Lucy, to Kayla: \"i watched fraser tickle him for two and a half minutes\" \"and he LOVED it\" \"and i just sat there thinking. i've seen enough patients to know when someone's happy\" Kayla: \"and fraser\" Lucy: \"fraser's driving me to yours\""
                },
                {
                  "you": "(Can't speak. Too busy laughing.)",
                  "outcome": "kept",
                  "spark": 0,
                  "gaydar": 98,
                  "them": [
                    {
                      "note": "You can't get a word out. You're laughing too hard. Fraser keeps going."
                    },
                    "Fraser. Stop. He can't breathe.",
                    {
                      "note": "She says it in her work voice. He stops straight away and lets go."
                    },
                    "\"He didn't say stop.\"",
                    "He couldn't. Look at him. He's purple.",
                    {
                      "note": "You've slid half off the couch onto the new floorboards. You're still giggling at nothing. A housemate is filming from the kitchen door."
                    },
                    {
                      "note": "Lucy looks at you for a long moment. Then she looks up at Fraser and sighs."
                    },
                    "I'm going to bed. Fraser, can you see him out? Thanks for coming, {name}.",
                    {
                      "note": "Fraser sees you out. At the door he says, \"See you round, sweetheart,\" and pats you on the head. Then he goes back inside."
                    }
                  ],
                  "after": "Lucy, to Kayla, at 4pm when she wakes up: \"fraser's still here\" Kayla: \"WHAT\" Lucy: \"he fell asleep on the couch\" \"i'm not upset about {name}. i watched him giggle on my floor for three minutes and i just knew\" Kayla: \"knew what\" Lucy: \"that i'd rather be with the one doing the tickling\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "Laughing that hard isn't a weakness or a giveaway. It's just a body doing what it does. Whatever she worked out, she was always going to work it out."
    },
    {
      id: "lucy-end", route: "lucy", gaydar: 99, spark: 0, gaydarSays: "Hamish wears work boots and has never said the word 'Bordeaux' in his life. He drinks it though.", title: "Lucy and Hamish", contact: "Lucy", irl: true,
      outfits: [
        { label: "Jeans and a black tee", gaydar: -2, intro: "Two months later. Kayla's engagement drinks at Cloudland. You wore jeans and a black tee and planned to leave early. Then Lucy walks in with a guy in RM Williams boots, moleskins and a blue checked shirt tucked in. Ag consultant. From Toowoomba. Hamish." },
        { label: "Your going-out look: a mesh top, lashes and a little bag", intro: "Two months later. Kayla's engagement drinks at Cloudland. A black mesh top, lashes, gloss, your little shoulder bag. Then Lucy walks in with a guy in RM Williams boots, moleskins and a blue checked shirt tucked in. Ag consultant. From Toowoomba. Hamish." }
      ],
      them: [
        { note: "Lucy comes straight over and hugs you. Properly. Like an old friend." },
        "{name}! You look SO good. Kayla said you were coming. This is Hamish. Hamish, this is {name}. We went on a few dates. Before you.",
        "\"Hey,\" Hamish says, and shakes your hand like he's buying a bull off you. \"Lucy says you've got great taste. She said you'd tell me if my shirt's alright.\"",
        "He grew up on a cattle station. He owns three pairs of boots and they're all the same. He's never heard of a scrunchie. I'm so happy.",
        {"if":"lucy-tickle=held","text":"Fraser still talks about you, by the way. 'The one with no plantar reflex.' He's sure it's a medical condition."},
        {"if":"lucy-tickle=cracked|begged|kept","text":"\"Oh, hey,\" Hamish says. \"Fraser showed me a video of you. At breakfast. With the feet.\" He grins. \"You've got a laugh on you.\""},
        {"if":"lucy-tickle=cracked|begged|kept","note":"Lucy goes pink and says \"Hamish\" in her nurse voice. He doesn't stop grinning."}
      ],
      replies: [
        { you: "Oh, Hamish. Babe. The shirt's fine. The tuck is very... rural. Lucy, he's adorable. I'm so happy for you.",
          them: [
            "'The tuck is very rural' 😂 I'm going to say that to him every day now.",
            "Thank you. I really am happy.",
            "Can I say something? You look so much more like you now. Like, at the Story Bridge you looked like you were in a costume. Now you look like... you."
          ],
          replies: [
            { you: "I feel like me. Mostly. I'm still working some stuff out.", them: ["I know. Kayla has a list of guys for when you're done working it out.", "Kayla has a list for everyone. Ignore her."] },
            { you: "I was in a costume. A polo costume. Never again.", them: ["\"Never again,\" she says, laughing. \"Promise me.\"", "Hamish, quietly, to Lucy: \"what's wrong with polos?\" She pats his arm."] }
          ] },
        { you: "(Go up to Hamish.) Hamish? Hi. Sorry. Can I say something? About Lucy?",
          them: [
            "\"Course, man,\" Hamish says, and puts one big hand on your shoulder to move you out of a waiter's way.",
            { note: "He leaves it there. It's warm through your top. You stop being able to think." },
            "\"What is it?\""
          ],
          replies: [
            { you: "I still like her. I want her back. I think. I'm sorry. You seem really nice.",
              them: [
                "\"You?\" Hamish says, and laughs, a big country laugh. \"Fighting me for her? Dude.\"",
                "\"Tell you what. I'll get you a drink. Something pink, yeah?\"",
                { note: "He's not worried. He's having a great night." },
                { note: "Lucy's come over. She heard." },
                "Did you just tell Hamish you want me back? In that little voice?",
                "Oh my god. Come here. You're the sweetest thing.",
                { note: "She hugs you. Over her shoulder, Hamish gives you a thumbs up." }
              ] },
            { you: "...Never mind. Your shirt's really nice. Is that brushed cotton?",
              gaydar: 100,
              them: [
                "\"Yeah, Country Road,\" he says. \"Lucy picked it. You want to keep feeling it, or are we done?\"",
                { note: "You touch the sleeve. Then you notice you're touching the sleeve. You let go and walk back to Kayla's table very fast, red to the ears." },
                { note: "Kayla raises one eyebrow and slides her list of guys across the table." }
              ] }
          ] },
        { you: "Hi Hamish. Nice to meet you. Excuse me, I need to find Kayla.",
          them: ["\"Nice to meet you, man!\"", "Lucy, quietly, as you go: \"Hey. Thanks for being so nice about this. You didn't have to be.\"", "\"I know,\" you say. And you mean it. Hamish is very nice. He's very, very not for you."] }
      ],
      after: "Kayla, in the group chat: \"update: {name} went up to hamish to win lucy back and ended up feeling his sleeve\" Ruby: \"NO\" Lucy: \"he was so cute about it\" Kayla: \"lucy that's not the point\" Lucy: \"hamish says he's a good guy\"",
      debrief: "Sometimes the person who didn't work out for you finds someone so different it almost makes you laugh. That's okay. It means you were both looking for something else."
    },
    {
      id: "jade-1", route: "jade", gaydar: 15, gaydarSays: "Wore flip-flops and asked the bartender for a 'dirty martini, extra dirty'. Fun guy?", title: "Howard Smith Wharves", contact: "Jade",
      outfits: [
        { label: "Board shorts, a tee and flip-flops", gaydar: -5, intro: "Jade from Hinge. Very funny bio. First date: drinks at Howard Smith Wharves on a Friday afternoon. You wore board shorts, a tee and your old flip-flops. She wore a white sundress and looked at your feet once and said \"flip-flops to a date, very Queensland\"." },
        { label: "Linen shorts, a nice shirt and your good slides", intro: "Jade from Hinge. Very funny bio. First date: drinks at Howard Smith Wharves on a Friday afternoon. Linen shorts, a nice short-sleeve shirt and your good slides. You'd had a pedicure on Tuesday \"for your health\". Nothing on them. Just buffed. Jade didn't notice. Probably." }
      ],
      them: ["hey!! that was so fun", "ok i've never seen a guy order a dirty martini 'extra dirty, with three olives, and can you make it pretty'. the bartender LOVED you", "second date? i want to do something outside, it's too nice to be inside"],
      replies: [
        { you: "Ha, I like a drink that looks good. Second date, yes! What were you thinking?",
          them: ["picnic? new farm park? i'll bring the cheese, you bring the drinks. and you can make them pretty", "saturday afternoon?"],
          replies: [
            { you: "Picnic! I love that. I'll bring my good picnic blanket. It's got little lemons on it.", gaydar: 20, them: ["little lemons 😭 ok perfect", "saturday. 3pm. it's going to be hot, wear something cool"] },
            { you: "Saturday works. I'll bring the drinks. Spritz okay?", them: ["spritz is perfect. see you then 😊"] }
          ] },
        { you: "The bartender was cute. I mean nice. He was nice. Yes to a second date.",
          gaydar: 20,
          them: ["lol he was cute", "ok picnic. new farm park. saturday. it's going to be 33 degrees so dress for it"] }
      ],
      after: "Jade, to her friend Mel: \"date was fun!! he made the bartender make his martini pretty.\" Mel: \"pretty??\" Jade: \"pretty.\" Mel: \"ok.\""
    },
    {
      id: "jade-2", route: "jade", gaydar: 45, gaydarSays: "Clear polish on his toes. 'For the health of the nail'. Okay babe.", title: "Second picnic", contact: "Jade", irl: true,
      outfits: [
        { label: "Shorts, a tee and slides, toes buffed and bare", gaydar: -5, intro: "Second date. A smaller picnic, just the two of you, at Kangaroo Point cliffs. Shorts, a tee, slides. Your toes are buffed and bare. Jade brought a cheese board and a little speaker. She kicks her sandals off straight away. You keep yours on." },
        { label: "Shorts, a nice shirt and slides, toes with a clear gloss coat", intro: "Second date. A smaller picnic, just the two of you, at Kangaroo Point cliffs. Shorts, a nice shirt, slides, and a clear gloss coat on your toenails that you did last night, very carefully, with your tongue out. Jade brought a cheese board. She kicks her sandals off and looks at your feet." }
      ],
      them: [
        "Okay, I brought brie, I brought quince, I brought those little crackers. Sit sit sit.",
        { note: "She glances down at your slides." },
        "Wait. Are your toenails shiny? Like... polished? Are they painted?"
      ],
      replies: [
        { you: "It's just a clear coat! It's for the health of the nail. My nail lady says it strengthens them.",
          them: [
            "Your nail lady.",
            "You have a nail lady?",
            { note: "She looks at your toes, then her toes, which are a chipped coral from two weeks ago, then your toes again." },
            "Okay. That's... okay. My toes look terrible next to yours. Can you not look at them."
          ],
          replies: [
            { you: "Your toes are cute! The coral's fun. But you should get a fresh coat. I'll book you in with my lady. She's in Fortitude Valley.",
              gaydar: 50,
              them: ["Ha. Okay. You're booking me a pedicure. On our second date.", "That's... honestly so nice? And so weird? Both?", { note: "She laughs. Then she pulls her feet under her dress so you can't see them." }] },
            { you: "I won't look. Pinky promise. Brie?", them: ["\"Brie,\" she says, and laughs, and passes it over. \"You're a weird guy. I like it. I think.\""] }
          ] },
        { you: "Yeah, they're painted. Clear. I like how it looks. I'm thinking of doing a colour next time. Maybe a coral.",
          gaydar: 55,
          them: [
            "A coral. Like mine.",
            { note: "She wiggles her own coral toes. Then she stops wiggling them." },
            "Okay. Yeah. You'd suit coral. You've got nice feet. That's a weird sentence to say to a guy."
          ],
          replies: [
            { you: "Thanks! I moisturise them every night. Shea butter. Then socks. It's a whole thing.", gaydar: 55, them: ["Socks?? To bed?", "Okay that's... that's a whole routine. I don't do that. I just let them suffer.", { note: "She hands you a cracker. She's smiling, but she's quieter for the rest of the afternoon." }] },
            { you: "You're the first person to say that. I'll take it.", them: ["Take it. It's a compliment.", "A weird one. But a compliment."] }
          ] }
      ],
      after: "Jade, to Mel: \"he has a nail lady.\" Mel: \"what\" Jade: \"for his TOES. he does a clear coat. he's thinking about coral.\" Mel: \"jade.\" Jade: \"don't.\""
    },
{
      "id": "jade-feet",
      "route": "jade",
      "gaydar": 70,
      "spark": 35,
      "gaydarSays": "I notice feet. Sean noticed your feet. Then Sean TICKLED your feet and you laughed like a squeaky toy.",
      "title": "Hot tub",
      "contact": "Jade",
      "irl": true,
      "intro": "Mel's birthday. Mel has a hot tub, and that's the whole party. You came in slides with your toes painted a soft coral, your first real colour, and you had to take the slides off at the deck. Mel's brother Sean is here. He's been trying with Jade for years, according to Mel, who tells everyone everything.",
      "them": [
        {
          "note": "You sit on the edge of the hot tub with your feet in the water. Jade looks at your toes under the water for a long time."
        },
        "coral. ok. that's new",
        {
          "note": "Sean's sitting on the edge across from you. He pulls your foot out of the water and props it on his knee."
        },
        "\"Coral,\" he says. \"Jade, he's matching you.\"",
        "he is not matching me",
        "\"He kind of is.\" He runs one finger right down the arch of your wet foot."
      ],
      "replies": [
        {
          "you": "(Tense up. Don't give him anything.)",
          "them": [
            {
              "note": "You grip the edge of the tub. Your jaw's tight. Sean grins and goes for under your toes, slowly."
            },
            "\"Ooh, he's trying so hard,\" Mel says.",
            {
              "note": "Jade's watching your face, half smiling."
            }
          ],
          "replies": [
            {
              "you": "(Hold it.) You done?",
              "spark": 40,
              "them": [
                "\"Huh,\" Sean says, and drops your foot back in the water. \"Thought you'd be a screamer.\"",
                {
                  "note": "Jade slides along the edge until she's right next to you, shoulder to shoulder."
                },
                "ok i'm a bit impressed",
                "\"Don't be,\" you say. \"I nearly died.\""
              ],
              "after": "Jade, to Mel, after: \"he didn't even laugh\" Mel: \"sean's devastated\" Jade: \"good\" Jade: \"the coral though\" Mel: \"jade.\" Jade: \"i know\""
            },
            {
              "you": "(Lose it. Laugh so hard you slip into the water.)",
              "spark": 22,
              "them": [
                {
                  "note": "You burst out laughing, try to pull away, and slide right off the edge into the hot tub with a splash. Sean's still holding your ankle."
                },
                "\"Man overboard!\" Sean says, and keeps tickling your foot above the water.",
                "\"OKAY. Stop! I give up!\"",
                {
                  "note": "He lets go. You come up spluttering, hair flat, giggling. Mel's filming. Jade's laughing so hard she's holding onto Sean's arm."
                }
              ],
              "after": "Mel, to the group chat: \"[video] sean made jade's date laugh so hard he fell in the hot tub\" Jade: \"stop posting it\" Mel: \"you held sean's arm\" Jade: \"i was SLIPPING\""
            }
          ]
        },
        {
          "you": "(Give in. You're laughing already.)",
          "them": [
            {
              "note": "You burst into giggles straight away, high and squeaky, kicking water everywhere. Sean holds on with both hands."
            },
            "\"Jade, he's so ticklish it's not even fair,\" Sean says.",
            {
              "note": "Jade wipes water off her face. She's laughing, and then she isn't really."
            }
          ],
          "replies": [
            {
              "you": "(Giggling) Sean! Please! Pleeease stop!",
              "spark": 18,
              "them": [
                {
                  "note": "He stops and lets your foot slide back into the water."
                },
                "\"Pleeease,\" Sean says, doing your voice. Mel snorts into her drink.",
                "that was a very long please",
                {
                  "note": "Jade moves to the other side of the hot tub, next to Sean, to get the drinks. She stays there."
                }
              ],
              "after": "Jade, to Mel: \"pleeeeease\" Mel: \"i KNOW\" Jade: \"my date said pleeeease to your brother\" Mel: \"sean's very pleased with himself\""
            },
            {
              "you": "(Lie back on the deck and let him keep going.)",
              "spark": 8,
              "gaydar": 78,
              "them": [
                {
                  "note": "You lean all the way back on the warm deck and just laugh. Sean tickles under your coral toes and you squeal and wriggle and don't try to stop him at all."
                },
                "\"He's loving this,\" Mel says. \"Jade, your date is loving this.\"",
                {
                  "note": "You finally gasp \"stop\". He stops right away and pats your foot. \"Good sport.\""
                },
                {
                  "note": "When you sit up, Jade's out of the tub, wrapped in a towel, scrolling her phone. \"cute,\" she says, without looking up."
                }
              ],
              "after": "Jade, to Mel: \"he just LAY THERE\" Mel: \"he was having the best night of anyone\" Jade: \"i'm aware\" Jade: \"sean's actually kind of funny\" Mel: \"oh my god\""
            }
          ]
        }
      ],
      "debrief": "You can be ticklish and still be someone worth fancying. Who fancies who after a night like that was never really about your feet."
    },
    {
      id: "c6f", route: "jade", gaydar: 92, gaydarSays: "Same sandals as me. Neater toes. Next.", title: "Painted toes", contact: "Jade",
      intro: "Third date with Jade. A picnic at New Farm Park on a 33-degree Saturday. You painted your toenails the night before, a glossy coral, and bought tan strappy sandals from the women's section at the department store, the ones with the little gold buckle and a bit of a heel. You checked your feet about forty times on the bus. Jade looked down at them before she looked at your face.",
      outfits: [{"label": "Plain shorts and a tee, with the strappy sandals and coral toes", "gaydar": -5, "intro": "Third date with Jade. A picnic at New Farm Park on a 33-degree Saturday. Plain shorts and a tee, so the rest of you is normal. But you painted your toenails glossy coral the night before and wore the tan strappy sandals from the women's section at the department store, the ones with the little gold buckle and a bit of a heel. Jade looked down at them before she looked at your face."}, {"label": "Linen shorts, the strappy women's sandals and coral toes"}, {"label": "A floral sundress, the strappy sandals, coral toes and a straw bag", "gaydar": 4, "intro": "Third date with Jade. A picnic at New Farm Park on a 33-degree Saturday. A floral sundress, a straw bag, toes painted glossy coral, and the tan strappy sandals from the women's section at the department store with the little gold buckle and a bit of a heel. You checked your feet about forty times on the bus. Jade looked at the dress, then down at your feet, before she looked at your face.", "them": ["and a sundress. to a picnic. with me"]}],
      them: ["hey thanks for today", "random q", "were those womens sandals"],
      replies: [
        { you: "Yeah. From Myer.",
          them: ["lol ok", "i have the exact same ones", "like the exact same. same colour", "it was so weird looking down and seeing my feet on you"],
          replies: [
            { you: "Great minds?",
              them: ["haha", "ok and the toes. did you do those yourself"],
              replies: [
                { you: "Yeah, last night.", them: ["they were neater than mine tbh", "ngl i spent half the picnic looking at your feet instead of at you", "i dont think im what youre looking for"] },
                { you: "A friend did them.", them: ["which friend", "actually dont answer that", "i just dont think this is a date thing for you"] }
              ] },
            { you: "Do you want me to not wear them?",
              them: ["no?? wear what you want", "just maybe not on dates with girls", "you know what i mean"],
              replies: [
                { you: "Not really.", them: ["ok well", "i do", "good luck"] },
                { you: "Yeah. I do.", them: ["yeah"] }
              ] }
          ] },
        { you: "Is that a problem?",
          them: ["not a problem", "just surprising", "mel asked me to send her a pic of you and i accidentally sent one of your feet", "she replied 'jade hes gay'"],
          replies: [
            { you: "Did you agree with her?",
              them: ["kind of", "the coral was a dead giveaway lol", "are you?"],
              replies: [
                { you: "Yeah.", gaydar: 100, them: ["ok", "fair enough", "your pedicure was better than half my friends' tbh"] },
                { you: "I don't know.", them: ["ok", "you might want to work that out before the next picnic"] }
              ] },
            { you: "You sent her a photo of my feet??",
              them: ["it was an accident!!", "i was trying to get your face and you moved", "anyway she thinks youre gay"],
              replies: [
                { you: "She's probably right.", gaydar: 100, them: ["yeah", "ok well. thanks for the picnic i guess"] },
                { you: "Tell Mel to mind her business.", them: ["lol good luck with that", "shes already told our whole group chat"] }
              ] }
          ] },
        { you: "No, they're men's.",
          them: ["they had a gold buckle", "and a heel", "come on {name}"],
          replies: [
            { you: "Okay fine. They're women's.", them: ["lol yeah", "its fine. they looked good", "just not really a date thing for me"] },
            { you: "(Leave it on read)", after: "You leave it on read. Your feet look great in the photo you take of them that night. You don't send it to anyone." }
          ] }
      ],
      after: "Jade, to Mel: \"ok you were right.\" Mel: \"the toes told me everything\" Jade: \"they were neater than mine\" Mel: \"jade.\" Jade: \"I KNOW\"",
      debrief: "Painted toes and women's sandals are small details, but you wore them on a date in broad daylight. People notice small things, and they talk. You still got to wear them."
    },
    {
      id: "jade-end", route: "jade", gaydar: 99, spark: 0, gaydarSays: "Riley's a plumber. His toenails look like they've been through a war. I love him.", title: "Jade and Riley", contact: "Jade", irl: true,
      outfits: [
        { label: "Shorts, a tee and slides. Toes bare.", gaydar: -2, intro: "Two months later. You're at New Farm Park with Nicole on a hot Sunday, on your lemon picnic blanket. You see Jade on the next blanket over, with a guy. He's in gym shorts and a fishing shirt, barefoot, and his feet are... a lot. That's Riley. He's a plumber. He catches you looking." },
        { label: "A sundress, your strappy sandals and freshly painted pink toes", gaydar: 1, intro: "Two months later. You're at New Farm Park with Nicole on a hot Sunday, on your lemon picnic blanket, in a sundress with your strappy sandals and freshly painted pink toes. You see Jade on the next blanket over, with a guy. He's in gym shorts and a fishing shirt, barefoot, and his feet are... a lot. That's Riley. He's a plumber. He catches you looking." }
      ],
      them: [
        { note: "Jade sees you, waves, and walks over, dragging Riley by the hand." },
        "Oh my god, hi! {name}! Nicole! This is Riley. Riley, this is {name}, we went on a few dates. Remember I told you?",
        "\"The sandals guy!\" Riley says, beaming. \"Yeah, Jade told me. Legend. I could never pull that off. Look at my feet.\"",
        { note: "You look at his feet. You wish you hadn't." },
        "He's a plumber. He fishes every weekend. He's never had a pedicure. He thinks moisturiser is 'for when you get burnt'. He's perfect."
      ],
      replies: [
        { you: "Hi Riley! Lovely to meet you. Babe, your feet. We need to talk about your feet. Jade, he's lovely, I'm so happy for you.",
          them: [
            "\"Ha! Yeah, they're cooked,\" Riley says happily. \"Jade wants to take me to your nail lady.\"",
            "I DO want to take him to your nail lady. He won't go.",
            "\"Not a chance,\" Riley says. \"I'd scare her.\" He's not wrong."
          ],
          replies: [
            { you: "She's seen worse. Probably. Maybe. I'll text you her number, Jade.", them: ["Please do. Riley, you're going.", "\"I'm not going,\" Riley says, grinning. He's definitely going."] },
            { you: "Honestly, Riley, I'll do them myself. Sit down. Nicole, pass me the kit.", gaydar: 100, them: [{ note: "Nicole silently hands you your little pedicure kit from her bag. She always has it now. Riley looks at Jade. Jade looks at you." }, "Oh my god. Are you serious?", "\"Go on then,\" Riley says, and sits on the lemon blanket, and sticks his foot out. You give a plumber a pedicure in New Farm Park. Jade films the whole thing."] }
          ] },
        { you: "(Stand up.) Riley. Can I have a quick word? Over there.",
          them: [
            "\"Yeah, no problem,\" Riley says, and follows you over to the big fig tree, barefoot.",
            { note: "Up close he's got a sunburnt neck and very blue eyes. You worked out what to say on the walk over. You look at his eyes and lose it." },
            "\"What's up, man?\""
          ],
          replies: [
            { you: "Um. I want Jade back. I'm going to ask her. I just wanted you to know. Sorry.",
              them: [
                "\"Ha! You?\" Riley looks down at your painted toes, then back up. \"Good luck, man. Genuinely.\" He's grinning.",
                { note: "He walks back, sits down next to Jade, says something in her ear, and they both look over at you. Then he opens a bag of Twisties." },
                "Did you just tell Riley you're going to win me back?",
                "You said sorry to him. He wished you good luck.",
                "You're adorable. I'm not leaving him. But you're adorable."
              ] },
            { you: "...Never mind. Sorry. Do you moisturise? Your feet, I mean. Sorry.",
              them: [
                "\"Ha. Nah,\" Riley says. \"That's more your department, eh?\"",
                { note: "You tell him about urea cream for four minutes. He nods the whole time with a big smirk on his face. You're bright red the whole time and you don't know why." },
                { note: "Back on the blanket, Nicole is crying laughing. Jade has her head on one side." },
                "You went over there to fight for me and gave him a skincare routine.",
                "You're so cute it's actually annoying."
              ] }
          ] },
        { you: "Hi. Nice to meet you. Enjoy your picnic.",
          them: ["\"You too, man! Love the blanket. Lemons!\"", "Jade, quietly: \"Thanks for being nice. And your toes look amazing. Pink suits you better than coral.\"", "\"I know,\" you say. She laughs."] }
      ],
      after: "Jade, to Mel: \"ran into {name} at the park.\" Mel: \"the toes guy?\" Jade: \"he gave riley a pedicure. on a picnic blanket. riley loved it.\" Mel: \"WHAT\" Jade: \"riley wants to go again\"",
      debrief: "Some exes end up being the person you'd trust with your new boyfriend's feet. That's a strange kind of happy ending, but it counts."
    },
    {
      id: "olivia-1", route: "olivia", gaydar: 15, gaydarSays: "Cute. Funny. Moisturised. Very moisturised.", title: "Coffee in Bulimba", contact: "Olivia",
      outfits: [
        { label: "A plain tee and jeans", gaydar: -5, intro: "Olivia from Bumble. Marketing, loves pasta, has a sister she's on the phone to constantly. First date: coffee on Oxford St in Bulimba. You wore a plain white tee and jeans. She arrived in a little green dress and said \"oh, you're cute\" out loud and then went red." },
        { label: "A white tee, a gold chain and a fresh face of skincare", intro: "Olivia from Bumble. Marketing, loves pasta, has a sister she's on the phone to constantly. First date: coffee on Oxford St in Bulimba. A white tee, a thin gold chain and an hour of skincare that made you actually glow. She said \"oh, you're cute\" out loud and then went red." }
      ],
      them: ["hi!! okay that was the best first date i've had in like a year", "you're so easy to talk to. and your skin is RIDICULOUS. what do you use. tell me everything", "also second date? drinks? i'll pick somewhere fun"],
      replies: [
        { you: "Ha, thank you! It's a whole routine. Cleanser, toner, a serum, moisturiser, SPF. I'll send you a list. Yes to drinks!",
          gaydar: 20,
          them: ["a LIST 😭 please", "my last boyfriend washed his face with a bar of soap. the same bar he used on his feet", "drinks thursday? there's a cocktail bar on james st i love"],
          replies: [
            { you: "Thursday. James St. I'll wear something nice.", them: ["yay 😊 and send the list!!"] },
            { you: "A bar of soap?? On his face AND his feet? Babe. Run.", gaydar: 25, them: ["I RAN 😂", "ok i like you. thursday. james st. it's a date"] }
          ] },
        { you: "Thank you! I had a really good time. Drinks sound great.",
          them: ["yay!! thursday?", "and i'm still going to get your skincare out of you. i'm relentless. ask my sister"],
          replies: [{ you: "Thursday. And fine, I'll tell you. But it's a secret.", them: ["my lips are sealed. with a lip balm. which you'll also recommend"] }] }
      ],
      after: "Olivia, on the phone to her sister: \"first date was so good. he's funny. and his skin is amazing.\" Sister: \"his SKIN?\" Olivia: \"he has a five-step routine.\" Sister: \"...interesting\" Olivia: \"don't do that\""
    },
    {
      id: "olivia-2", route: "olivia", gaydar: 45, gaydarSays: "He ordered an espresso martini and said the foam was 'serving'. Serving WHAT.", title: "Cocktails on James St", contact: "Olivia", irl: true,
      outfits: [
        { label: "A black shirt and a bit of concealer", gaydar: -5, intro: "Second date. A cocktail bar on James St. A black shirt and a bit of concealer under your eyes. Olivia's in a little red top and she's already ordered you something pink." },
        { label: "A black shirt, a bit of mascara, and a clear gloss", intro: "Second date. A cocktail bar on James St. A black shirt, a bit of mascara and a clear gloss. Olivia's in a little red top and she's already ordered you something pink. She looks at your lashes and blinks twice." }
      ],
      them: [
        "Okay, I got you a Pornstar Martini because you seem like a fun guy. Was that right? Sorry, I panicked.",
        { note: "She looks at you properly. Your lashes. Your mouth." },
        "Wait. Are you... wearing mascara? Sorry. That's such a weird question."
      ],
      replies: [
        { you: "Just a bit! It's a tubing one, so it doesn't smudge. I've got really short lashes, it just helps. Is it obvious?",
          gaydar: 50,
          them: [
            "A tubing one.",
            "No, it's not obvious! It's just... I know what a tubing mascara is because I own one. I didn't know guys knew what a tubing mascara is.",
            { note: "She laughs. She sips her drink. She's still looking at your lashes." },
            "Okay. Cool. Tell me about your week. Anything but mascara. Kidding."
          ],
          replies: [
            { you: "My week was a lot. My friend Dani dragged me to a drag brunch on Sunday and I cried at the finale. Twice.", gaydar: 55, them: ["A drag brunch!", "Okay. That sounds... fun? Do you go to a lot of drag brunches?", { note: "You say \"only a few\". It's been six this year." }] },
            { you: "Work, mostly. Boring. Tell me about yours.", them: ["Oh my god, okay, my boss is unhinged...", { note: "She's funny. She's really funny. You laugh at everything. You also look at the bartender's arms while he shakes a martini, and she sees you do it." }] }
          ] },
        { you: "Not weird! Yeah, just a little. I like how it looks. And this Pornstar is perfect, by the way. You read me so well.",
          them: [
            "I did, didn't I.",
            "Can I ask... is that a thing you do? Like, normally? Makeup?",
            "Sorry. That came out wrong. I'm not judging. I'm genuinely curious. I've just never been on a date with a guy who has better lashes than me."
          ],
          replies: [
            { you: "A bit. More and more lately. I don't know why. It just makes me feel good.", gaydar: 55, them: ["That's fair. It should make you feel good.", "It's just new for me. That's all. I'll catch up."] },
            { you: "Only on special occasions. Like dates with gorgeous women.", them: ["Oh, stop. Okay. That was smooth.", { note: "She smiles. She also looks at your lashes again when you look away." }] }
          ] }
      ],
      after: "Olivia, to her sister: \"he wore mascara. tubing mascara. he knew it was tubing.\" Sister: \"olivia\" Olivia: \"he's also been to six drag brunches this year\" Sister: \"OLIVIA\" Olivia: \"he's lovely though. third date. i'm doing a third date.\""
    },
{
      "id": "olivia-feet",
      "route": "olivia",
      "gaydar": 70,
      "gaydarSays": "No shoes on the boat. Pink toes on the boat. Marcus tickling the pink toes on the boat. My sister will not shut up about it.",
      "title": "Boat day",
      "contact": "Olivia",
      "irl": true,
      "intro": "Olivia's sister's birthday, on her friend Marcus's boat. Marcus has one rule: no shoes on board. Last night Olivia painted your toes a soft pink \"for the photos\" and you let her. Marcus went to school with Olivia. Her sister says he's been in love with her since high school.",
      "them": [
        {
          "note": "Marcus is on the back step, taking everyone's shoes as they climb on. He holds his hand out for yours."
        },
        "\"Shoes, buddy. Rules.\"",
        {
          "note": "You hand him your sneakers. Then you take your socks off. He looks down."
        },
        "\"Oh, very nice,\" he says. \"Liv, did you do these?\"",
        "Maybe.",
        "\"They match your nails.\" He grins at her, not at you. \"You've got a type, Liv. And it's not me.\""
      ],
      "replies": [
        {
          "you": "(Go and lie on the front deck in the sun. Feet up.)",
          "them": [
            {
              "note": "You lie on your front on the warm deck with your feet in the air, crossed at the ankles. Olivia and her sister are sitting on the cushions just behind you."
            },
            {
              "note": "Marcus walks past on his way to the anchor. He stops."
            },
            "\"Liv. Look at this. He's sunbathing his pedicure.\"",
            {
              "note": "He crouches down and drags one finger along both your soles at once."
            },
            {
              "note": "You shriek and roll over so fast you nearly go off the side. He catches your ankle so you don't, and then he doesn't let go, and tickles under your toes instead."
            }
          ],
          "replies": [
            {
              "you": "Marcus! Marcus. Please. Stop!", "spark": 26,
              "them": [
                {
                  "note": "He stops and lets go of your ankle."
                },
                "\"Saved your life and you're yelling at me,\" he says. \"Unbelievable.\"",
                {
                  "note": "Olivia's sister has her hand over her mouth. Olivia's laughing too, properly, with her head back."
                },
                "You screamed like a seagull.",
                "\"He did,\" Marcus says, and sits down on the cushion next to her. \"Want a drink, Liv?\"",
                {
                  "note": "She says yes. She doesn't move over to make room for you."
                }
              ]
            },
            {
              "you": "(Laughing too hard to talk, just kick.)", "spark": 14,
              "gaydar": 75,
              "them": [
                {
                  "note": "You kick, but not very hard, because you're laughing too much. Marcus holds on with one hand and keeps going with the other."
                },
                "\"Liv, is he kicking me or is he dancing?\"",
                "Let him go, he's going to wet himself!",
                {
                  "note": "He lets go. You lie on the deck trying to breathe. Olivia's sister is filming. Olivia's laughing so hard she's leaning on Marcus to stay upright."
                },
                "\"Ten out of ten,\" Marcus says. \"Most ticklish guy I've ever met. And I've got three brothers.\""
              ]
            }
          ]
        },
        {
          "you": "(Sit with Olivia and keep your feet flat on the deck.)", "spark": 28,
          "them": [
            {
              "note": "You sit on the cushions with Olivia and keep your pink toes tucked right in. Marcus drives the boat. Every time you look up, he's looking at Olivia in the mirror."
            },
            "Her sister, leaning over: \"So are you ticklish? Liv won't tell me.\"",
            "\"I'm not,\" you say.",
            "\"He's lying,\" Olivia says. \"He's really bad.\"",
            {
              "note": "Marcus kills the engine, walks straight back and sits down at your feet."
            },
            "\"Heard you're not ticklish.\" He picks up your foot like it's nothing. \"Let's test it.\"",
            {
              "note": "He barely touches you. You're already laughing, then squealing, then begging. Olivia's sister has her phone up. Olivia covers her face, laughing."
            },
            "\"Stop, stop, okay, I'm ticklish!\"",
            {
              "note": "He stops. \"Science,\" he says, and goes back to driving. Olivia goes and sits up the front with him."
            }
          ]
        }
      ],
      "after": "Olivia's sister, on the drive home: \"marcus held your boyfriend's foot for five whole minutes\" Olivia: \"i know\" Sister: \"and you sat with marcus the whole way back\" Olivia: \"i know\" Sister: \"so which one of them are you dating\" Olivia: \"i don't know\"",
      "debrief": "Some people tease to get closer to someone else, and you happen to be in the way. That's about them, not you. You still had a good day on a boat."
    },
    {
      id: "c6g", route: "olivia", gaydar: 90, gaydarSays: "Red toes, gold sandals, eyes on the waiter. Babe.", title: "Across the table", contact: "Olivia", irl: true,
      intro: "Third date with Olivia. Dinner at a little Italian place on James St. You wore a black wrap top, wide-leg linen pants and flat gold sandals from the women's section, toes painted cherry red. Mascara, a bit of bronzer, gloss. She's already at the table when you walk in.",
      outfits: [{"label": "Linen shirt and chinos, gold sandals, red toes, a little makeup", "gaydar": -5, "intro": "Third date with Olivia. Dinner at a little Italian place on James St. A linen shirt and chinos, so it's half normal. Then flat gold sandals from the women's section, toes painted cherry red, a little mascara and gloss. She's already at the table when you walk in."}, {"label": "Black wrap top, linen pants, gold sandals, red toes, makeup"}, {"label": "A black slip dress, gold heeled sandals, red toes, full makeup", "gaydar": 5, "intro": "Third date with Olivia. Dinner at a little Italian place on James St. A black slip dress, gold heeled sandals, toes painted cherry red, mascara, bronzer, a red lip to match your toes. Two tables turn when you walk in. She's already at the table.", "them": [{"note": "Her eyes go from your heels to your dress to your red lip, and back down to your feet."}]}],
      them: [
        { note: "She stands up to hug you, then glances down. Then at your face. Then down again." },
        "Hi! Sorry. Hi. You look... wow. Okay. Sit, sit.",
        "I'm just going to say it, because otherwise I'll be thinking about it all night. Your toes are painted. Red. Like, properly done. Did you get them done at a salon?"
      ],
      replies: [
        { you: "Yeah, at the nail place on Brunswick St.",
          them: [
            "Oh my god, the one next to the dumpling place? I go there!",
            "So we've possibly sat next to each other getting pedicures and not known it. That's such a weird thought.",
            { note: "She laughs, but her eyes keep drifting under the table." },
            "Sorry, I'm being weird. It's just I've never been on a date with a guy whose feet look nicer than mine. I genuinely don't know what to do with that."
          ],
          replies: [
            { you: "Is that a problem?",
              them: [
                "No! No. I don't think so. I don't know.",
                "It's not that it's a problem. It's that my brain keeps trying to put you in a box and you won't go in it.",
                "You've got the mascara and the gloss and the sandals, and you walked in here like you were meeting the girls for a wine. And I'm sitting here in the dress I bought for tonight, thinking, is he even looking at me?"
              ],
              replies: [
                { you: "I am looking at you.",
                  them: [
                    { note: "She tilts her head and watches you for a second." },
                    "You're looking at me the way my friends look at me when I've got a new top on. Like, cute dress babe. Which is nice! It's just not a date look.",
                    "And when the waiter came over you sat up straighter. I saw it."
                  ],
                  replies: [
                    { you: "I didn't.",
                      them: [
                        "You did. It's fine, he's very good-looking. I'd sit up straighter too.",
                        "I just don't want to be the girl who pretends she didn't notice. I've been that girl. It took me two years to stop being her."
                      ] },
                    { you: "...okay. I did.", gaydar: 95,
                      them: [
                        "Ha. Thank you.",
                        "Look, I'm going to finish my pasta because it's the best carbonara in Brisbane, and then I think we call it. Not in a horrible way. You're fun. You're just not into me, and I think we both know why."
                      ] },
                    { you: "Can we just start again? Pretend I walked in normal?",
                      them: [
                        "Walked in normal? {name}, this is normal for you. You're more comfortable in those sandals than I am in mine.",
                        "I don't want to pretend. I'd rather have a nice dinner with you as whatever this is than a fake date."
                      ] }
                  ] },
                { you: "Honestly? I'm not sure if I am.",
                  them: [
                    "Okay. That's actually a really honest answer.",
                    "Can I ask you something? You don't have to answer. Have you ever been on a date with a guy?"
                  ],
                  replies: [
                    { you: "No.",
                      them: [
                        "Maybe you should. I'm serious. Not to get rid of you.",
                        "I just think you'd have a better night than this one. You'd be sitting there in your red toes and he'd think they were the best thing about you, instead of me spending the whole entree trying not to look at them."
                      ] },
                    { you: "Once. Sort of.", gaydar: 95,
                      them: [
                        "Sort of! Okay. And how did that feel, compared to this?",
                        { note: "You don't answer. You don't really need to. She nods slowly." },
                        "Yeah. That's what I thought."
                      ] }
                  ] }
              ] },
            { you: "I like having them done. It makes me feel good.",
              them: [
                "That's fair. It's the best hour of my month, honestly.",
                "I guess I just don't know any straight guys who do it. My brother wouldn't let someone touch his feet if you paid him. He wears socks to the beach.",
                "Are you straight? Sorry. That is such a rude question for a third date. Ignore me. Eat a breadstick."
              ],
              replies: [
                { you: "Yeah, I'm straight.",
                  them: [
                    { note: "She says \"okay\" in the voice people use when they don't believe you." },
                    "Okay. Then I'm sorry, that was rude of me.",
                    "But can I be honest? Even if you are, I don't think I'm the right person for you. I want someone who'd feel a bit awkward walking into a nail salon. That's just my thing. It's not a dig."
                  ],
                  replies: [
                    { you: "So that's it? Because of my toes?",
                      them: [
                        "It's not the toes. The toes are cute.",
                        "It's that you came here dressed for yourself and not for me, and you haven't asked me one question about myself yet. You asked the waiter where he got his watch.",
                        "I'm not angry. I'm just not going to sit here and pretend this is going somewhere."
                      ] },
                    { you: "Fair enough.", them: ["Yeah.", "Want to split a tiramisu anyway? It'd be a waste not to."] }
                  ] },
                { you: "No. I'm not.", gaydar: 100,
                  them: [
                    "Oh. Okay.",
                    { note: "She breathes out, and laughs a little." },
                    "Thank god. Not thank god you're gay. Thank god I'm not crazy. I've been sitting here for twenty minutes going, Olivia, you've got this wrong, stop it.",
                    "So why are you here? With me? I'm not being nasty. I actually want to know."
                  ],
                  replies: [
                    { you: "I thought I should try.",
                      them: [
                        "Try what, being straight?",
                        "Babe. You turned up in red toenails and gold sandals. I think part of you knew exactly how tonight was going to go."
                      ] },
                    { you: "I'm scared to date guys.",
                      them: [
                        "Yeah. I'd be scared too.",
                        "But you're clearly not scared of being looked at. Half this restaurant has looked at your feet tonight and you haven't flinched once. You can do a coffee with a guy.",
                        "And if you need someone to tell you what to wear to it, I'm free on weekends."
                      ] }
                  ] },
                { you: "I don't know yet.",
                  them: [
                    "Okay. That's allowed.",
                    "I just don't want to be the date you work it out on. I've done that before, I was with a guy for two years and he worked it out on me the whole time. I'm not doing it again.",
                    "So I think we just have dinner, yeah? As friends. And you text me when you know."
                  ] }
              ] }
          ] },
        { you: "Thanks. I wanted to look nice tonight.",
          them: [
            "You do look nice. That's kind of the problem.",
            "You look nicer than me. Your makeup's better than mine. Your toes are better than mine.",
            "And I keep thinking, if a girl walked in like this I'd think, love her, she's gorgeous. But you're a guy, and I'm on a date with you, and I can't work out what I'm supposed to feel."
          ],
          replies: [
            { you: "What do you want to feel?",
              them: [
                "Like you're into me. Like you made the effort for me.",
                "And I don't think you did. I think you made the effort for you. Which is great! It's just not a date with me then, is it."
              ] },
            { you: "Should I have dressed differently?",
              them: [
                "No. God, no. Please don't do that for anyone.",
                "If you'd turned up in a polo and chinos I'd have had a nice boring night and gone on three more dates with you, and then found out anyway, and been way more upset. This is better. This is quicker."
              ],
              replies: [
                { you: "Found out what?",
                  them: [
                    "Come on, {name}.",
                    { note: "She reaches across and taps the table near your hand. Gently." },
                    "That you're gay. You don't have to say it. I'm not going to make you say it."
                  ] },
                { you: "Yeah. That's probably true.",
                  them: ["I know it is. I've been out with a guy who was hiding it. I'm not doing that again, not even for someone with toes this good."] }
              ] },
            { you: "(Your eyes go hot. You look at your plate.)",
              them: [
                { note: "She goes quiet." },
                "Oh no. Hey. I'm not trying to upset you.",
                "I'm not saying you look bad. You look amazing. I'm saying this isn't a date, it's dinner with someone who looks really good, and I think that's what you'd rather it be too.",
                "Do you want to just get dessert and not talk about it?"
              ],
              replies: [
                { you: "Yeah. Dessert.", them: ["Tiramisu. My shout. Don't argue with me."] },
                { you: "Sorry. I'm fine.", them: ["You're allowed to not be fine. I'm not going to tell anyone you cried into your carbonara."] }
              ] }
          ] },
        { you: "You noticed? I was worried you'd think it was weird.",
          them: [
            "I mean... a little bit? I'm not going to lie to you.",
            "It's not weird. It's just a lot for a third date. And I can't tell if you're trying to tell me something.",
            "Are you?"
          ],
          replies: [
            { you: "Maybe I am.",
              them: ["Okay. I'm listening.", "Take your time. The pasta's not going anywhere."],
              replies: [
                { you: "I think I like guys.", gaydar: 100,
                  them: [
                    { note: "She doesn't look surprised at all." },
                    "Okay. That's a big thing to say to a girl across a table on a third date. You did good.",
                    "New plan. We eat, we split the bill, and you tell me about the guy you actually want to be sitting across from."
                  ] },
                { you: "I don't know how to say it.",
                  them: ["Then don't. I think I already know.", "It's fine, {name}. I'm not upset. I'm a bit sad about the dress, but I'll wear it again."] }
              ] },
            { you: "No. I just like it.",
              them: [
                "Okay. Then I'll be honest back. It's not for me.",
                "I want a guy who looks like he borrowed my jeans, not my sandals. That's my problem, not yours. But I don't think we should do this again."
              ] }
          ] }
      ],
      after: "Olivia, on the phone to her sister on the drive home: \"No, he was lovely. He was so lovely. He just had his toes done better than mine and spent the whole night looking at the waiter.\" \"So he's gay.\" \"So he's gay. I told him he should date guys.\" \"You did NOT.\" \"I did. He sort of smiled.\"",
      debrief: "Someone saying \"I think you'd be happier with guys\" can sting and feel like relief at the same time. Both are allowed."
    },
    {
      id: "olivia-end", route: "olivia", gaydar: 99, spark: 0, gaydarSays: "James does F45 at 5am and thinks 'tubing' is a river activity. Marry me.", title: "Olivia and James", contact: "Olivia", irl: true,
      outfits: [
        { label: "A black tee and jeans", gaydar: -2, intro: "Two months later. Saturday night on James St, at the same cocktail bar. You're out with Dani. You're in a black tee and jeans and just lip oil. Olivia walks in with a guy in a Lululemon quarter-zip, an Apple Watch and the haircut every guy in finance has. James." },
        { label: "Your gold sandals, red toes, a slip dress and a red lip", gaydar: 1, intro: "Two months later. Saturday night on James St, at the same cocktail bar. You're out with Dani in a black slip dress, the gold sandals, red toes and a red lip. Olivia walks in with a guy in a Lululemon quarter-zip, an Apple Watch and the haircut every guy in finance has. James." }
      ],
      them: [
        { note: "Olivia spots you, squeals, and comes straight over." },
        "{name}! Oh my god. You look AMAZING. Is that a red lip? It matches your toes. Of course it does.",
        "This is James. James, this is {name}. The one I told you about. Carbonara night.",
        "\"Ah, the carbonara guy!\" James says, and shakes your hand. \"Liv says you've got the best taste in Brisbane. Can you tell me what's wrong with this quarter-zip? She won't.\"",
        "He works in finance. He does F45 at 5am. He thinks tubing is something you do on a river. I'm obsessed with him."
      ],
      replies: [
        { you: "Hi James! Okay, honestly? The quarter-zip is fine, it's the colour. Navy's washing you out, babe. Try a sage. Liv, he's lovely. I'm so happy for you.",
          them: [
            "\"Sage,\" James says, nodding, very seriously, like you've given him a stock tip. \"Noted.\"",
            "Oh my god, you just styled my boyfriend in four seconds.",
            "Can I say something? I'm so glad we stopped. You'd have spent every date styling me and never once looking at me like James does. He looks at me like I'm a stock that's going up."
          ],
          replies: [
            { you: "That's the most finance compliment I've ever heard. I'm so happy for you, Liv.", them: ["He's so finance. I love it.", "Dani's waving at you. Go. And for the record, you look way happier than you did at carbonara."] },
            { you: "Did you ever think about the guy thing? Like, what you said at carbonara?", them: ["\"Every day,\" she says. \"Have you?\"", { note: "You don't answer. She squeezes your hand and goes back to James." }] }
          ] },
        { you: "(Step closer to James.) James. Can I say something? I don't really know how to say it.",
          them: [
            "\"Go for it, man,\" James says, and checks his Apple Watch.",
            { note: "He's very tall and very calm and he smells like expensive aftershave. You look at his quarter-zip so you don't have to look at his face." },
            "\"You alright? You've gone a bit pink.\""
          ],
          replies: [
            { you: "I think I let Liv go too fast. I want to take her out again. I wanted to tell you. Man to man.",
              them: [
                "\"Man to man,\" James says, grinning, and gives your shoulder a squeeze that's a bit too hard. \"Love that for you.\"",
                { note: "He turns round and calls out \"babe, your friend wants to take you out again\" to Olivia, and he's laughing before he finishes saying it." },
                "Oh my god. {name}. Did you just ask my boyfriend if you can date me?",
                "You said 'man to man' in that voice. You were holding your drink with both hands.",
                "Come here. You're so cute. No."
              ] },
            { you: "...Never mind. Your arms are very F45. Okay. Bye.", gaydar: 100, them: ["\"Thanks, man!\" James says, and flexes, on purpose. \"F45. Five am. You'd die.\"", { note: "You go back to Dani with your face burning. Dani hands you a drink without a word." }, "Olivia, later, by the bathrooms: \"You went over there to get me back and came back blushing about his arms.\" \"I don't want to talk about it,\" you say."] }
          ] },
        { you: "Hi James. Lovely to meet you. Enjoy your night.",
          them: ["\"You too, man! Love the sandals.\"", "Olivia, quietly: \"He means that, by the way. He thinks everyone's great.\"", "\"That's nice,\" you say. And it is."] }
      ],
      after: "Olivia, to her sister, from the Uber: \"saw carbonara guy.\" Sister: \"and??\" Olivia: \"he told james to wear sage. then asked james if he could take me out again. man to man.\" Sister: \"what did james say\" Olivia: \"'love it'. then he ordered a sage quarter-zip on the way home.\"",
      debrief: "There's no shame in being the one who notices what everyone else is wearing. It's just not the same as being the one who looks at her like James does."
    },
    {
      id: "zoe-1", route: "zoe", gaydar: 20, gaydarSays: "He asked if my top was from H&M. It was. Lucky guess?", title: "Trivia", contact: "Zoe",
      outfits: [
        { label: "A flannel and jeans", gaydar: -5, intro: "Zoe's a dental nurse and does a pub trivia night with her friends Brooke and Tash every Wednesday. Her team needed a sixth. You were the sixth. You wore a flannel and jeans. You knew every answer in the pop culture round and nothing in the sport round." },
        { label: "A fitted shirt and a bit of brow gel", intro: "Zoe's a dental nurse and does a pub trivia night with her friends Brooke and Tash every Wednesday. Her team needed a sixth. You were the sixth. A fitted shirt and a bit of brow gel. You knew every answer in the pop culture round and nothing in the sport round." }
      ],
      them: ["hey it's zoe from trivia!! brooke gave me your number, hope that's ok", "you single handedly won us the pop culture round. you knew who designed lady gaga's meat dress", "also you asked if my top was from glassons and it WAS. how did you know"],
      replies: [
        { you: "Hi Zoe! Of course it's okay. And I just know a Glassons top when I see one. It's a gift. And a curse.",
          gaydar: 25,
          them: ["a gift and a curse lol", "ok random but do you want to get a drink? just us? not trivia", "brooke says i should ask. brooke says a lot of things"],
          replies: [
            { you: "Yes! I'd love that. Somewhere quiet?", them: ["yay. there's a little wine bar in paddo. friday?", "i'll try not to wear glassons so you can't guess"] },
            { you: "Brooke's right. Ask more things. Yes, I'd love a drink.", them: ["😊 ok friday", "brooke is going to be unbearable"] }
          ] },
        { you: "Ha, lucky guess! You looked great in it though.",
          them: ["😊 thanks", "want to get a drink sometime? just us?"],
          replies: [{ you: "I'd really like that.", them: ["friday? paddington?"] }] }
      ],
      after: "Zoe, to Brooke: \"i asked him out.\" Brooke: \"YES\" Zoe: \"he knew my top was from glassons.\" Brooke: \"weird\" Zoe: \"cute weird\" Brooke: \"sure\""
    },
    {
      id: "zoe-2", route: "zoe", gaydar: 55, gaydarSays: "He went through my wardrobe on our fourth date. I let him. I don't know why I let him.", title: "Her wardrobe", contact: "Zoe", irl: true,
      outfits: [
        { label: "Jeans, a tee and a little lip balm", gaydar: -5, intro: "A month in. Zoe's place in Toowong on a Sunday. Jeans, a tee, a bit of tinted balm. She's trying to decide what to wear to Brooke's barbecue next week and she's thrown half her wardrobe on the bed." },
        { label: "Shorts, a crop tee and your toenails painted lilac", gaydar: 5, intro: "A month in. Zoe's place in Toowong on a Sunday. Short shorts, a crop tee, and lilac toenails you painted last night \"just to see\". Zoe's trying to decide what to wear to Brooke's barbecue next week and she's thrown half her wardrobe on the bed. She sees your toes and stops.", them: [{ note: "\"Are your toes... lilac?\" she says. \"Since when?\" \"Since last night,\" you say. She says \"cute\" in a very small voice." }] }
      ],
      them: [
        "Okay, help. I have nothing to wear. Literally nothing. Brooke's barbecue is going to be all her uni friends and they're all so pretty.",
        { note: "You're already on your feet. You're already at the bed. You're already holding up a floral sundress." },
        "Oh. You're... okay, you're really into this."
      ],
      replies: [
        { you: "This one. With your white platforms. And a little gold hoop. Trust me. It's giving 'effortless but I tried'.",
          gaydar: 60,
          them: [
            "'Effortless but I tried.'",
            { note: "She tries it on. It's perfect. She looks at herself in the mirror and then at you in the mirror." },
            "Okay. That's perfect. You're right. How are you so good at this?",
            "Actually, don't answer that. Do you want to... try something on? Like, as a joke?"
          ],
          replies: [
            { you: "As a joke? Hand me the platforms. I want to see if I can walk in them.", gaydar: 70,
              them: [{ note: "You can walk in them. You can walk in them really well. Zoe watches you walk the length of her bedroom and back." }, "Okay. That's... you're better at that than me.", "I don't know how I feel about that. Wear them to the barbecue. Kidding. Unless?"] },
            { you: "Ha, no. I'm good. You look perfect. That's what matters.", them: ["\"Thank you,\" she says. \"You're the best boyfriend for this. Like, the best.\"", { note: "She says boyfriend like she's testing the word. Then she kisses your cheek, not your mouth." }] }
          ] },
        { you: "Okay, but first: where did you get this skirt? Is this Princess Polly? I've wanted it for months.",
          gaydar: 65,
          them: [
            "You've wanted it? For... you?",
            { note: "You realise what you said. She realises what you said." },
            "That's fine! That's okay. Do you want to borrow it? You can borrow it. Is that weird? That's weird. I'm going to stop talking."
          ],
          replies: [
            { you: "I meant for you. I've wanted it for you. I've been looking at it for you.", them: ["Right. For me.", "Okay.", { note: "She hangs the skirt back up very carefully, like it's evidence." }] },
            { you: "...Can I actually borrow it?", gaydar: 75, them: [{ note: "She hands it to you. She doesn't say anything. She just watches you hold it up against yourself in the mirror." }, "\"It suits you,\" she says eventually. \"Like, really suits you.\"", "\"Brooke's going to ask so many questions.\""] }
          ] }
      ],
      after: "Zoe, to Brooke: \"he went through my wardrobe today.\" Brooke: \"cute??\" Zoe: \"he tried on my platforms. he walked better in them than me.\" Brooke: \"...cute??\" Zoe: \"i don't know brooke. i don't know.\""
    },
{
      "id": "zoe-feet",
      "route": "zoe",
      "gaydar": 75,
      "gaydarSays": "We lost the music round because Tyler had your foot and you couldn't stop laughing. Brooke is still mad. I am also still mad. A bit.",
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
              "note": "He tickles you. You scream. It's not a manly scream. Brooke's neighbour bangs on the wall."
            },
            "\"Okay, he wasn't joking,\" Tyler says, and lets go, laughing. \"Brooke, your neighbour hates me.\"",
            "\"Everyone hates you,\" Brooke says. \"Next question.\"",
            {
              "note": "Zoe's squeezing your hand. When you look over, she's still smiling at Tyler."
            }
          ]
        }
      ],
      "after": "Tash, to Brooke, after: \"did you hear the noise he made\" Brooke: \"my NEIGHBOUR heard the noise he made\" Tash: \"tyler's never going to let it go\" Brooke: \"tyler walked zoe to her car. took him 20 minutes\"",
      "debrief": "Getting caught out in front of a group is one of the worst feelings, and it passes. Asking someone to stop, and having them stop, is you being in charge of your own body."
    },
    {
      id: "c6h", route: "zoe", gaydar: 97, gaydarSays: "Lilac toes and platforms to a barbecue. I rest my case.", title: "In the driveway", contact: "Zoe", irl: true,
      intro: "You've been going out with Zoe for six weeks. Today was her friend Brooke's barbecue in Ashgrove. You wore little floral shorts, a pastel cropped tee, her white platform sandals, toes painted lilac, and a bit of gloss. Brooke's boyfriend asked Zoe, in front of everyone, if you were her gay best friend. She laughed. She hasn't said much since. Now she's parked in your driveway with the engine off.",
      outfitPrompt: "What did you wear to Brooke's barbecue?",
      outfits: [{"label": "Board shorts and a tee, but her platforms and lilac toes", "gaydar": -3, "intro": "You've been going out with Zoe for six weeks. Today was her friend Brooke's barbecue in Ashgrove. Board shorts and a plain tee, like the other guys. But your toes were painted lilac and you were wearing her white platform sandals, and that's all anyone looked at. Brooke's boyfriend asked Zoe, in front of everyone, if you were her gay best friend. She laughed. She hasn't said much since. Now she's parked in your driveway with the engine off."}, {"label": "Floral shorts, a cropped tee, her platforms, lilac toes, gloss"}, {"label": "Her floral sundress, her platforms, lilac toes, gloss and lashes", "gaydar": 2, "intro": "You've been going out with Zoe for six weeks. Today was her friend Brooke's barbecue in Ashgrove. You borrowed her floral sundress and her white platform sandals, painted your toes lilac, and did gloss and lashes. Brooke's boyfriend asked Zoe, in front of everyone, if you were her gay best friend. She laughed. She hasn't said much since. Now she's parked in your driveway with the engine off.", "at": 3, "them": ["And you wore my sundress, {name}. To Brooke's. Everyone knows it's mine."]}],
      them: [
        { note: "She doesn't take her hands off the steering wheel." },
        "Can we talk before you go in?",
        "I've been thinking about it the whole drive home. What Jayden said. And the way everyone went quiet after, like they were all waiting to see what I'd say.",
        "I'm going to say something and I need you to just let me say it. I don't think this is working. And I think the reason it's not working is that you don't actually want to be with a girl."
      ],
      replies: [
        { you: "That's not true. I'm not gay.",
          them: [
            "Okay. Then tell me why you spent half an hour talking to Brooke about her nail colour and two minutes talking to me.",
            "Tell me why you painted your toes lilac for a barbecue. Why you wore platforms. Why every time we're at mine you'd rather go through my wardrobe than kiss me.",
            "I'm not trying to be mean. I just need you to tell me something that makes sense, because I feel like I'm going crazy."
          ],
          replies: [
            { you: "I just like clothes. Lots of straight guys do.",
              them: [
                "Name one. Name one straight guy we know who'd wear my sandals.",
                { note: "You can't." },
                "Yeah.",
                "I'm not saying you have to say it. I'm saying I can't be the girl you're dating while you work it out. It's humiliating, {name}. I'm sorry, but it is. Tash asked me in the kitchen if you'd come out yet. Like it was already a thing everyone knew except me."
              ],
              replies: [
                { you: "Please don't do this.",
                  them: [
                    "I have to.",
                    "If I don't do it now I'll do it in three months and it'll be so much worse. For both of us."
                  ] },
                { you: "Tash should mind her own business.",
                  them: ["Probably. But she wasn't wrong, was she.", { note: "You don't answer. She nods at the windscreen." }] }
              ] },
            { you: "You're overthinking it.",
              them: [
                "Am I? Everyone at that barbecue was thinking it. Jayden just said it out loud.",
                "I'm not overthinking it. I'm the last one to say it."
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
            "{name}, I don't want you to tone it down. That's the worst thing you could say to me.",
            "If you tone it down for me, you'll be miserable and I'll be going out with someone who's pretending. And then one day you'll meet some guy at a bar in the Valley and that'll be it. I'd rather it hurt now."
          ],
          replies: [
            { you: "I wouldn't do that to you.",
              them: [
                "You wouldn't mean to.",
                "I'm not saying you're a bad person. You're a really nice person. You're just not my person. And I think you know whose person you are."
              ] },
            { you: "I can change. I can be what you want.",
              them: [
                { note: "She finally looks at you. Her eyes are wet." },
                "That's what's breaking my heart. You shouldn't have to change. Not for me. Not for anyone.",
                "I want you to go out and be exactly as camp as you were today, and I want you to do it on a date with a guy who thinks it's the best thing about you."
              ],
              replies: [
                { you: "(Start crying.)",
                  them: [
                    { note: "She reaches over the gearstick and holds your hand. For a while neither of you says anything." },
                    "I know. Me too."
                  ] },
                { you: "Okay.", them: ["Okay.", "Go inside. Text Jess. Don't sit on your own all night."] }
              ] },
            { you: "Just one more date. Somewhere just us.",
              them: [
                "And what, you wear jeans and a hoodie and we both pretend?",
                "I don't want one more date where I'm watching you watch the waiter. I want to remember you how you were today: annoying, and loud, and in my sandals, and happy. You were so happy today. Just not with me."
              ] }
          ] },
        { you: "(Start crying.)",
          them: [
            { note: "She reaches over the gearstick and puts a hand on your arm." },
            "Oh, {name}. Don't. You'll set me off.",
            { note: "Too late. She wipes her face with the back of her hand." },
            "I really liked you. I still like you, that's the stupid part. You're funny, and you're kind, and you're the only person who's ever told me my eyeliner was uneven before I left the house.",
            "But I want someone who wants me. Not my eyeliner. Me."
          ],
          replies: [
            { you: "I'm sorry. I'm so sorry.",
              them: [
                "I know you are. I'm not angry. Well, I'm a bit angry. Mostly I'm sad.",
                "Go inside, have a shower. Take the polish off or don't. Text Jess, she'll come over."
              ] },
            { you: "I don't know what's wrong with me.",
              them: [
                "Nothing's wrong with you. Hey. Look at me.",
                "Nothing is wrong with you. You're gay, and you've been trying really hard not to be, and that's exhausting. That's what's wrong. Not you."
              ],
              replies: [
                { you: "...yeah.", gaydar: 100, them: ["Yeah.", { note: "She squeezes your arm once, then lets go." }] },
                { you: "Don't say that word.",
                  them: ["Okay. I won't.", "But I think you should say it to someone eventually. Even if it's just to yourself in the mirror."] }
              ] }
          ] },
        { you: "You're right. I think I'm gay.", gaydar: 100,
          them: [
            { note: "She lets go of the wheel and laughs, the kind of laugh that's half crying." },
            "Oh my god. Okay. Okay.",
            "I knew. I think I knew from the second date, when you asked if my top was from H&M. But hearing you say it is different.",
            "Are you okay? Have you said that to anyone before?"
          ],
          replies: [
            { you: "No. You're the first.",
              them: [
                "Me? Your girlfriend? In my car, in your driveway?",
                "That's honestly so you.",
                "I'm glad it was me. I think. Ask me again in a month."
              ] },
            { you: "Nicole's been calling me babe for months. She probably knows.",
              them: [
                "Nicole worked it out before me? Great. Love that for me.",
                "No, that's fine. That's good. I'm glad someone knew.",
                "I'm not your girlfriend anymore, but I'm not going to be weird about this, I promise. Just maybe skip Brooke's next barbecue for a bit."
              ] },
            { you: "Are you going to tell everyone?",
              them: [
                "No. God. It's not mine to tell.",
                "Although, {name}. You wore lilac toenails and platforms to a barbecue. I don't think anyone's waiting for an announcement."
              ] }
          ] },
        { you: "So because I painted my toes, I'm gay now?",
          them: [
            "No. Not because you painted your toes.",
            "Because of everything. The toes are just the bit everyone could see.",
            "And don't make this about me being judgy. I stood up for you all afternoon. Jayden made his comment and I laughed it off. Tash asked me in the kitchen if you'd come out yet and I said he's not gay, and she looked at me like I was an idiot. I've been defending you all day and I'm sick of it."
          ],
          replies: [
            { you: "I didn't ask you to defend me.",
              them: [
                "No. You didn't. That's kind of the problem.",
                "You didn't seem to care what anyone thought, and I cared enough for both of us. I can't do it anymore."
              ] },
            { you: "...Tash asked if I'd come out?",
              them: [
                "Yeah. That's where everyone's at.",
                "Everyone except you. Or maybe you're there too, and you just haven't said it."
              ] }
          ] },
        { you: "Is this because I looked better than you today?",
          them: [
            { note: "She snorts, despite herself." },
            "Honestly? A bit. Those platforms were a choice.",
            "But no. It's because you looked better than me and you were happier about it than you've ever been about anything we've done together. Brooke took a photo of you by the pool and you looked at it for ten minutes. You've never looked at a photo of us like that."
          ],
          replies: [
            { you: "That's not fair.", them: ["Isn't it?", "Go and look at your camera roll. Then tell me it's not fair."] },
            { you: "...yeah. That's fair.", them: ["Yeah.", "I'm going to miss you doing my eyeliner, you know."] }
          ] },
        { you: "Can we still be friends?",
          them: [
            "Not yet. I need a bit.",
            "But yeah. Probably. Eventually. You're going to need someone to tell you when your gloss is on your teeth, and it's not going to be Jayden."
          ] }
      ],
      after: "Zoe, to Brooke, at midnight: \"ok we broke up.\" Brooke: \"oh babe. because of the gay thing?\" Zoe: \"because of the gay thing.\" Brooke: \"are you ok\" Zoe: \"i told him he should be dating guys.\" Brooke: \"honestly he'll be so much happier\" Zoe: \"yeah. that's what makes it worse\"",
      debrief: "Being broken up with because you're gay is a strange kind of hurt: you lose someone, and they say the thing you couldn't. Denial, tears, begging, saying it out loud: all of those are normal reactions in that car."
    },
    {
      id: "zoe-end", route: "zoe", gaydar: 99, spark: 0, gaydarSays: "Kyle's a mechanic and has never once tried on my platforms. Thank god.", title: "Zoe and Kyle", contact: "Zoe", irl: true,
      outfits: [
        { label: "Board shorts and a tee", gaydar: -2, intro: "Two months later. Brooke's next barbecue. Brooke invited you herself (\"we're friends now, deal with it\"). Board shorts, a tee. Zoe's there with a guy in a Holden cap and a grease-stained tank top who's already manning the grill. Kyle. Mechanic." },
        { label: "Your own floral sundress, platforms and lilac toes", gaydar: 1, intro: "Two months later. Brooke's next barbecue. You came in your OWN floral sundress this time, your own platforms and lilac toes. Zoe's there with a guy in a Holden cap and a grease-stained tank top who's already manning the grill. Kyle. Mechanic.", them: [{ note: "Zoe sees your sundress and laughs out loud. \"You got your OWN,\" she says." }] }
      ],
      them: [
        "Hi. Oh my god, hi. You came.",
        "This is Kyle. Kyle, this is {name}. We... you know. Before.",
        "\"Hey man,\" Kyle says, flipping a hot dog. \"Hot dog?\" He hasn't looked at your outfit once. He's looking at the sausages.",
        "He's a mechanic. He's got a Commodore he talks to. He's never once been in my wardrobe. It's so relaxing, {name}. You have no idea."
      ],
      replies: [
        { you: "Hi Kyle! I'll have a hot dog, thanks babe. Zoe, he's lovely. Very... automotive. I'm happy for you.",
          them: [
            "\"Babe,\" Kyle repeats, cheerfully, and hands you a hot dog with ketchup. \"Here you go.\"",
            "He's not going to notice you called him babe. He doesn't notice anything that isn't a car or me. I love it.",
            "You look good, {name}. You look like you. The sundress suits you way better than it ever suited me."
          ],
          replies: [
            { you: "It does, doesn't it. I'm taking that as a win.", them: ["Take it. You earned it.", "Brooke wants a photo of you in it. She's posting it. She says you're her 'favourite plus one'."] },
            { you: "Thanks, Zo. I'm glad you've got someone who doesn't steal your platforms.", them: ["\"Me too,\" she says. Then: \"I do miss someone doing my eyeliner though.\"", "\"I'm right here,\" you say. She laughs."] }
          ] },
        { you: "(Walk up to the grill.) Kyle. Hi. Can we talk? About Zoe.",
          them: [
            "\"Yeah, go for it man,\" Kyle says, not looking up from the grill.",
            { note: "He's got grease on his forearms and a pencil behind his ear for some reason. He glances over and smiles at you sideways, and your stomach does a thing. You stand there with your hands clasped in front of you like you're waiting to order." },
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
                "She covers her face. \"You're so cute. I hate it. You're so cute.\""
              ] },
            { you: "(Hand the tongs to Jayden and walk away very fast.)", them: ["\"Good chat, man!\" Kyle yells after you.", { note: "Jayden, Brooke's boyfriend, takes the tongs and looks at you. \"Gay best friend,\" he says, nodding. Not mean. Just like he's finally confirmed something." }] }
          ] },
        { you: "Hi. I'm just going to go find Brooke.",
          them: ["\"No problem man. Hot dog's here when you want one.\"", "Zoe, quietly: \"Thanks for coming. Really.\"", "\"Brooke made me,\" you say. \"I know,\" she says. \"I'm still glad.\""] }
      ],
      after: "Brooke posts a photo that night: you, in your sundress, doing Zoe's eyeliner on the deck while Kyle holds a sausage in the background. Caption: \"the ex, the new bf and the gay best friend 💕\". Zoe comments: \"the ex and the gay best friend are the same person brooke\". Brooke replies: \"i know babe\".",
      debrief: "Some exes end up as your friends. Some new boyfriends hand you the tongs. Either way, you walked into a barbecue in your own sundress."
    },
    {
      id: "sophie-1", route: "sophie", gaydar: 15, gaydarSays: "He's sweet. He likes Taylor Swift a normal amount. I think.", title: "Riverside", contact: "Sophie",
      outfits: [
        { label: "A navy shirt and chinos", gaydar: -5, intro: "Sophie: a paralegal, calm, funny in a dry way. You met through Dani's work. First date: dinner at Riverbar at Eagle St. You wore a navy shirt and chinos. She wore a black jumpsuit and gold earrings and was so composed you felt like a puppy next to her." },
        { label: "A cream shirt, your rings and a bit of tinted balm", intro: "Sophie: a paralegal, calm, funny in a dry way. You met through Dani's work. First date: dinner at Riverbar at Eagle St. A cream shirt, your rings and a bit of tinted balm. She wore a black jumpsuit and gold earrings and noticed your rings first thing." }
      ],
      them: ["Hi. Thank you for tonight. I don't usually say this after a first date but I'd like to see you again.", "You're very sweet. You're the first guy who's ever asked what my favourite Taylor Swift era is and actually had an opinion back.", "Folklore, by the way. I stand by it."],
      replies: [
        { you: "Folklore is a very respectable answer. Mine's Reputation, obviously. The drama. The snakes. The costumes. Yes to a second date.",
          gaydar: 20,
          them: ["Reputation. Of course it is.", "Okay. Second date. I'll cook. Friday. Bring wine. Not a sweet one.", "And bring your opinions about Taylor. I want to hear the full Reputation defence."],
          replies: [
            { you: "The full defence will take three hours. I'll bring two bottles.", them: ["Perfect. Friday."] },
            { you: "Friday. I'll bring a dry white. And snacks.", them: ["Good. See you then."] }
          ] },
        { you: "I had a really good time. Second date, definitely.",
          them: ["Good.", "Friday? I'll cook. You're on dessert.", "Don't overthink it. You look like an overthinker."],
          replies: [{ you: "I'm a massive overthinker. Friday.", them: ["I could tell. Friday."] }] }
      ],
      after: "Sophie, to her friend Kirra: \"first date was good. he's sweet.\" Kirra: \"just sweet?\" Sophie: \"he defended Reputation for twenty minutes. passionately.\" Kirra: \"oh no\" Sophie: \"it was cute\""
    },
    {
      id: "sophie-2", route: "sophie", gaydar: 50, gaydarSays: "I painted his nails as a joke. He wasn't joking. He picked the colour.", title: "Movie night", contact: "Sophie", irl: true,
      outfits: [
        { label: "Sweatpants and a hoodie. Cosy.", gaydar: -5, intro: "Six weeks in. Movie night at Sophie's flat in Paddington. You came in sweatpants and a hoodie. She's got a face mask on, a bottle of wine open and her nail polish laid out on the coffee table like she's planning something." },
        { label: "Sweatpants, a cropped hoodie and a lip oil", intro: "Six weeks in. Movie night at Sophie's flat in Paddington. You came in sweatpants, a cropped hoodie and a lip oil. She's got a face mask on, a bottle of wine open and her nail polish laid out on the coffee table like she's planning something." }
      ],
      them: [
        "Okay. Mamma Mia or The Devil Wears Prada. You choose.",
        { note: "She's painting her own nails. She's not very good at it." },
        "Actually, while you're choosing, do you want me to do yours? As a joke. I've got a hot pink here that nobody's ever brave enough to wear."
      ],
      replies: [
        { you: "Give me the hot pink. And do my toes too. Devil Wears Prada. I've seen it eleven times. I can do the whole cerulean speech.",
          gaydar: 60,
          them: [
            "The whole cerulean speech.",
            { note: "She does your nails. Then your toes. You do the whole cerulean speech while she does it, with hand movements, while your nails dry." },
            "You know it word for word.",
            "I was joking about the nails, {name}. You weren't joking at all."
          ],
          replies: [
            { you: "Was I supposed to be joking? They look amazing. Look at them. Soph. LOOK.", them: ["They do look amazing.", "Better than mine. Again.", { note: "She smiles, but she watches you admire your toes for a very long time." }] },
            { you: "Sorry, I got carried away. Do you want me to take it off?", them: ["No. Keep it.", "It suits you. That's the strange part. It really suits you."] }
          ] },
        { you: "Ha. Okay. Just one nail. For a laugh. Mamma Mia.",
          them: [
            "One nail. Okay.",
            { note: "She paints your pinky hot pink. You look at it all through Mamma Mia. At 'Dancing Queen' you hold your hand up to the light." },
            "You've looked at that nail more than you've looked at me tonight.",
            "It's fine. It's a good pink."
          ],
          replies: [
            { you: "It's a really good pink. Can you do the rest?", gaydar: 60, them: [{ note: "She does the rest. She doesn't say anything. You both watch Meryl Streep on a goat island." }] },
            { you: "Sorry. I'm looking at you now.", them: ["Mm.", { note: "She leans her head on your shoulder. You look at your nail again when she's not watching." }] }
          ] }
      ],
      after: "Sophie, to Kirra: \"I painted his nails. And his toes. Hot pink.\" Kirra: \"as a joke?\" Sophie: \"I thought it was a joke. He did the whole cerulean speech.\" Kirra: \"Soph.\" Sophie: \"I know.\""
    },
{
      "id": "sophie-feet",
      "route": "sophie",
      "gaydar": 76,
      "gaydarSays": "Kirra posted it. Ethan tickling your painted feet while you screamed 'NOT THE TOES'. 2,400 views. My boss has seen it.",
      "title": "Game night",
      "contact": "Sophie",
      "irl": true,
      "intro": "Two months in. Game night at Kirra's flat. Socks off at the door, Kirra's rule, because of the rug. Your toes are still the coral Sophie painted at movie night. Kirra's flatmate Ethan is a personal trainer, and Sophie mentioned twice in the car that he's \"just a friend\". Kirra has her phone out. Kirra always has her phone out.",
      "them": [
        {
          "note": "You peel your socks off at the door. Kirra's phone swings round to your feet straight away."
        },
        "\"Coral! Soph, did you do these?\"",
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
      "after": "Kirra, to Sophie, the next morning: \"2400 views\" Sophie: \"delete it\" Kirra: \"no. top comment is 'the way he screamed NOT THE TOES'\" Kirra: \"second comment is ethan saying 'ticklish AND a pushover'\" Sophie: \"he's not a pushover\" Kirra: \"which one are you defending\"",
      "debrief": "Something embarrassing ending up online can feel huge in the moment. Most people who see it forget by lunchtime. You said red and it stopped, every time."
    },
    {
      id: "c6i", route: "sophie", gaydar: 98, gaydarSays: "There's literally video evidence, {name}.", title: "Saturday morning", contact: "Sophie", irl: true,
      intro: "Sophie, three months. Last night you told her you were having a quiet one. You weren't. You went to the Valley with Dani in a crop top, a mini skirt and heeled sandals, toes painted hot pink, and you danced with a guy at the Wickham until 1am. Now it's Saturday morning, Sophie's on your doorstep with two coffees, and she hasn't smiled once.",
      outfitPrompt: "What did you wear to the Valley last night?",
      outfits: [{"label": "A black tee, a mini skirt, heeled sandals, hot pink toes", "gaydar": -2, "intro": "Sophie, three months. Last night you told her you were having a quiet one. You weren't. You went to the Valley with Dani in a black tee, a mini skirt and heeled sandals, toes painted hot pink, and you danced with a guy at the Wickham until 1am. Now it's Saturday morning, Sophie's on your doorstep with two coffees, and she hasn't smiled once."}, {"label": "A crop top, a mini skirt, heeled sandals, hot pink toes"}, {"label": "A sparkly crop top, a mini skirt, heels, pink toes, glitter and lashes", "gaydar": 1, "intro": "Sophie, three months. Last night you told her you were having a quiet one. You weren't. You went to the Valley with Dani in a sparkly crop top, a mini skirt, heeled sandals, toes painted hot pink, glitter and lashes, and you danced with a guy at the Wickham until 1am. There's still glitter on your pillow. Now it's Saturday morning, Sophie's on your doorstep with two coffees, and she hasn't smiled once.", "them": [{"note": "There's glitter on your cheek. She sees it."}]}],
      them: [
        { note: "She hands you a coffee and sits on the arm of the couch instead of next to you." },
        "So my friend Kirra was in the Valley last night.",
        "She sent me a video at about midnight. It's dark and it's shaky, but it's you, {name}. In a skirt. Dancing with a guy. With your arms around his neck.",
        { note: "She looks at your feet. Your toes are still hot pink." },
        "I'm not going to scream at you. I just want you to tell me the truth, for once."
      ],
      replies: [
        { you: "That wasn't me.",
          them: [
            { note: "She looks at your toes again, then back at you, and waits." },
            "{name}. Your toes are the exact same pink as the girl in the video. Except it isn't a girl. It's you.",
            "Please don't do this. I can handle a lot of things. I can't handle you lying to my face while you're still wearing the nail polish."
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
                    { note: "She nods. She doesn't look surprised, just tired." },
                    "The 'quiet ones'. All the quiet ones.",
                    "I'm not even angry about the skirt, {name}. I'd have helped you pick it. I'm angry that you lied, and I'm angry I'm the last to know."
                  ] },
                { you: "Yeah. Last night was the first time.",
                  them: [
                    "And you went straight from my place on Thursday to a gay bar on Friday in a skirt.",
                    "I'm not having a go. I'm just trying to work out how long you've wanted to, and how long you've been pretending with me."
                  ] }
              ] },
            { you: "It's a costume. Dani dared me.",
              them: [
                "A costume. With matching toes. And a guy.",
                "Do you want to know what Kirra said? She said, 'Soph, I don't think he's straight, babe.' And I sat in bed at 12am and thought, yeah. I don't think he is either.",
                "So you can keep saying it was a dare, but I'm not going to stand here and pretend I believe you."
              ] }
          ] },
        { you: "I'm sorry. I should have told you where I was.",
          them: [
            "Yeah. You should have.",
            "But that's not the part I care about, really. I don't care that you went to the Valley. I care that you went as the person in that video, and that person is someone I've never met.",
            "Three months, {name}. I've never seen you look that happy. Not once. Not with me."
          ],
          replies: [
            { you: "That's not true. I'm happy with you.",
              them: [
                "You're comfortable with me. That's different.",
                "You were laughing in that video. Like, head back, eyes closed laughing. You don't laugh like that with me. You laugh like that with Dani, and apparently with some guy with a moustache at the Wickham."
              ] },
            { you: "I know. I'm sorry.",
              them: [
                "Don't be sorry for being happy. Be sorry for lying.",
                "I think we both know where this goes, yeah?"
              ],
              replies: [
                { you: "Are you breaking up with me?",
                  them: [
                    "Yeah. I am.",
                    "And it's not because you wore a skirt. It's because you want to be dancing with guys, and I'd rather you do that honestly than do it behind my back for another three months."
                  ] },
                { you: "(Nod.)", them: [{ note: "She nods back. Neither of you says it. You both know." }] }
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
                "I'm not going to stand here and be the thing standing between you and finding out properly. That's not fair on me and it's not fair on you."
              ] },
            { you: "Yes. I wanted to.", gaydar: 100,
              them: [
                { note: "She breathes out slowly." },
                "Thank you for being honest. Finally.",
                "Then I think you should. Not while you're with me. But you should."
              ] }
          ] },
        { you: "(Start crying.)",
          them: [
            { note: "She puts her coffee down on the side table, very carefully, like she's trying to do something with her hands." },
            "Please don't. I'm the one who's supposed to be upset here.",
            { note: "Her voice cracks on 'upset'. She sits down next to you after all." },
            "I'm not trying to make you feel bad. I'm trying to work out what's real. Was any of it real? Us?"
          ],
          replies: [
            { you: "Yes. I really care about you.",
              them: [
                "I believe you. I do.",
                "But caring about me isn't the same as wanting me. And I think you want something I can't be. I can't be a guy with a moustache at the Wickham, {name}. No matter how much you like me."
              ] },
            { you: "I wanted it to be.",
              them: [
                "Yeah.",
                "That's the saddest thing you could've said. And also the most honest.",
                "Come here.",
                { note: "She hugs you. It's a goodbye hug, and you both know it." }
              ] }
          ] },
        { you: "Please don't break up with me. I'll stop going out like that.",
          them: [
            "I don't want you to stop going out like that.",
            "Seriously. You looked amazing. I watched the video three times and the third time I wasn't even angry, I was just like, oh. Oh, that's him. That's who he actually is.",
            "If you stop, you'll just be sad and pretending again, and I'll be the reason. I don't want to be the reason."
          ],
          replies: [
            { you: "But I love you.",
              them: [
                { note: "She closes her eyes for a second." },
                "You've never said that before. Don't say it now just because I'm leaving.",
                "Maybe you love me like you love Dani. Like a person you feel safe with. That counts for something. It's just not enough for me."
              ] },
            { you: "Then what do I do?",
              them: [
                "Honestly? Go back to the Valley. Download one of the apps. Go on a date with a guy who'd watch that video and think 'I hope he messages me'.",
                "And when you do, tell him the truth from the start. Don't do to him what you did to me."
              ] }
          ] },
        { you: "I think I'm gay, Soph.", gaydar: 100,
          them: [
            { note: "She doesn't move for a moment. Then she lets out a breath that sounds a bit like a laugh." },
            "Yeah. I think you are too.",
            "I've thought it for a while. The way you are with my makeup. The way you went quiet when we walked past those two guys holding hands on Boundary St. I just kept telling myself I was imagining it.",
            "I'm really glad you said it. I'm also really sad. Is that okay? Can I be both?"
          ],
          replies: [
            { you: "Of course you can.",
              them: [
                "Okay. Good. Because I'm going to be both for a while.",
                "And you're going to go and be happy, and I'm going to be annoyed about how good you look in a skirt. Deal?"
              ] },
            { you: "Are you angry?",
              them: [
                "About you being gay? No. Never.",
                "About the lying? Yeah, a bit. Give me a few weeks. Then I want to hear everything about the moustache guy."
              ] },
            { you: "Can I still see you?",
              them: [
                "Not for a while. I need to stop being your girlfriend in my head first.",
                "But yeah. One day. You'll owe me a pedicure. Hot pink. Matching."
              ] }
          ] },
        { you: "You went through a video of me? That's a bit much.",
          them: [
            "I didn't go through anything. Kirra sent it to me. At midnight. While I was home on my own because my boyfriend said he was tired.",
            "Don't make this about me watching a video. You lied. You put on a skirt and heels and went out and danced with a guy and lied to me about it.",
            "And honestly, the skirt isn't even the bit that hurts."
          ],
          replies: [
            { you: "Then what is?",
              them: [
                "That you looked happier in that video than you have in three months with me.",
                "I'm not going to compete with that. I can't. I don't think anyone can, except maybe a guy."
              ] },
            { you: "Fine. Then go.",
              them: [
                { note: "She stands up and puts your coffee on the bench." },
                "Okay. I will.",
                "I hope you work it out, {name}. I really do. Just stop doing it with girls who actually like you."
              ] }
          ] }
      ],
      after: "Sophie sits in her car outside for ten minutes before she drives off. That night Kirra texts her: \"you ok?\" Sophie: \"yeah. its done. i told him to go on a date with a guy.\" Kirra: \"you're a better person than me.\" Sophie: \"i know.\" Kirra: \"the skirt was cute tho\" Sophie: \"KIRRA\"",
      debrief: "Getting caught before you're ready is one of the worst ways for it to come out. Being angry, lying, begging or saying it straight are all things people do in that moment. What matters is what you do next, and who you're honest with after."
    },
    {
      id: "sophie-end", route: "sophie", gaydar: 99, spark: 0, gaydarSays: "Nathan's a physio who wears the same three polos. Kirra says he's 'so straight it's restful'.", title: "Sophie and Nathan", contact: "Sophie", irl: true,
      outfits: [
        { label: "Jeans and a black tee", gaydar: -2, intro: "Three months later. You're at the Wickham with Dani on a Friday. Jeans and a black tee. Then Sophie walks in, with Kirra, and a guy. Navy polo, chinos, boat shoes. Holding Sophie's hand. He looks completely lost in a gay bar and completely fine with it. Nathan." },
        { label: "The mini skirt, heeled sandals, hot pink toes and glitter", gaydar: 1, intro: "Three months later. You're at the Wickham with Dani on a Friday, in the mini skirt, heeled sandals, hot pink toes and glitter. Then Sophie walks in, with Kirra, and a guy. Navy polo, chinos, boat shoes. Holding Sophie's hand. He looks completely lost in a gay bar and completely fine with it. Nathan.", them: [{ note: "Kirra sees your skirt and screams \"THE VIDEO\" across the bar." }] }
      ],
      them: [
        { note: "Sophie walks over. She's smiling. She hasn't smiled at you like that since before the video." },
        "Hi. Kirra's birthday. She wanted to come here. Of course she did.",
        "This is Nathan. Nathan, this is {name}. We used to see each other.",
        "\"Hey man,\" Nathan says, and shakes your hand. \"Love this bar. First time in a gay bar. The drinks are really pink.\"",
        "He's a physio. He wears the same three polos. He's never heard of the cerulean speech. Kirra says he's so straight it's restful."
      ],
      replies: [
        { you: "Hi Nathan! Welcome to the Wickham, babe. The drinks are supposed to be pink. Soph, he's adorable. I'm so happy for you.",
          them: [
            "He is adorable.",
            "And you look... wow. You look so happy. Happier than three months with me. I'm not saying that to be sad. I'm just saying it.",
            "Are you seeing anyone?"
          ],
          replies: [
            { you: "Not yet. Dani keeps introducing me to guys. Strictly for dancing.", them: ["\"Strictly for dancing,\" Sophie says, very dry. \"Sure.\"", "Kirra, behind her: \"he's GAY, Soph\" Sophie: \"I know, Kirra.\""] },
            { you: "Not really. I'm just figuring stuff out.", them: ["You've been figuring it out in a mini skirt at the Wickham for three months.", "I think you've figured it out, babe. You just haven't told anyone."] }
          ] },
        { you: "(Turn to Nathan.) Nathan. Can we go outside for a minute? I need to say something.",
          them: [
            "\"Yeah, sure man,\" Nathan says, and follows you out to the street.",
            { note: "Out of the noise it's suddenly very quiet. He stands close with his hands in his pockets, waiting. He's got really nice eyelashes. You didn't need to know that." },
            "\"What's up?\""
          ],
          replies: [
            { you: "I want Sophie back. I know that's... I just wanted to be honest with you.",
              them: [
                "\"Oh. Okay,\" Nathan says. His mouth twitches. He's trying very hard not to laugh. \"That's... brave, man.\"",
                { note: "Then he asks if you want a water, the way he'd ask a patient who's about to faint. He's not worried. Not even slightly." },
                { note: "Sophie's at the door. She's been there the whole time." },
                "\"You went outside to win me back and he's offering you a water.\"",
                "\"You said it so quietly, {name}. You looked like you were about to cry. It was so cute I nearly said yes.\"",
                "\"Nearly,\" she says. \"Come back in.\""
              ] },
            { you: "Your hands are very... professional. Sorry. Never mind. Bye.", gaydar: 100, them: ["\"Thanks, I'm a physio,\" he says, smirking. \"You're not the first guy to notice.\"", { note: "You go red so fast you feel it in your ears. Dani appears, takes your arm and walks you back inside without a word. She's shaking with silent laughter." }] }
          ] },
        { you: "Hi Nathan. Have fun. The pink ones are the best ones.",
          them: ["\"Thanks, man! Will do.\"", "Sophie, quietly: \"Thanks for being nice. After everything.\"", "\"You were nice first,\" you say. \"You told me to go on a date with a guy.\" \"Did you?\" she asks. You don't answer. She smiles."] }
      ],
      after: "Kirra posts a story: Nathan holding a pink cocktail, looking baffled, and you in the background in your mini skirt, being spun round by Dani. Caption: \"soph's new man and soph's old man at the same gay bar. only in brisbane\". Sophie reposts it with three heart emojis.",
      debrief: "Being in the same room as an ex and their new person can feel huge. You don't have to win it. You can just be there, in whatever you're wearing."
    },
    {
      id: "c6j", route: "bianca", gaydar: 25, gaydarSays: "He smelled like the women's counter at Myer. Not complaining. Yet.", title: "Rooftop", contact: "Bianca",
      intro: "You met Bianca at a housewarming in Teneriffe. She laughed at all your jokes and put her number in your phone herself. First date: drinks at a rooftop bar in the CBD. You wore a fitted black shirt, clear gloss, a clear coat on your nails, and a spritz of perfume from the women's counter you'd been too scared to wear anywhere.",
      outfits: [{"label": "A black shirt, the women's perfume and a tiny bit of clear gloss", "gaydar": -5, "intro": "You met Bianca at a housewarming in Teneriffe. She laughed at all your jokes and put her number in your phone herself. First date: drinks at a rooftop bar in the CBD. A plain black shirt, the tiniest bit of clear gloss, and a spritz of perfume from the women's counter you'd been too scared to wear anywhere."}, {"label": "A fitted black shirt, clear gloss and nails, the women's perfume"}, {"label": "A silky shirt half undone, perfume, gloss, nails and a gold necklace", "gaydar": 5, "intro": "You met Bianca at a housewarming in Teneriffe. She laughed at all your jokes and put her number in your phone herself. First date: drinks at a rooftop bar in the CBD. A silky black shirt with three buttons undone, a delicate gold necklace, clear gloss, clear nails, and the perfume from the women's counter.", "them": ["also the necklace?? cute"]}],
      them: ["home 🥰", "that was so fun", "ok random but you smelled SO good. what is that, i need it for myself"],
      replies: [
        { you: "Ha. It's actually a women's perfume.", gaydar: 35,
          them: ["wait really", "ok honestly that's kind of hot? like confident", "most guys i date smell like lynx africa and fear"],
          replies: [
            { you: "I wore a bit of gloss too. Did you notice?", gaydar: 40,
              them: ["omg yes i did", "i wasn't going to say anything in case you were embarrassed", "it looked good though!! you should try a tinted one next time. like a pinky nude. it'd suit you"],
              replies: [
                { you: "You think?", them: ["100%", "i'll send you the one i use", "ok this is turning into a makeup chat on a date text lol. we're doing great", "second date? 😊"] },
                { you: "Maybe I'll leave the makeup to you.", gaydar: 35, them: ["haha fair", "but the offer stands", "second date? 😊"] }
              ] },
            { you: "Is that weird?", them: ["no?? smell good, who cares where it's from", "i'd literally wear your cologne if it smelled nice. same thing", "anyway. second date? i want to see you again 😊"] }
          ] },
        { you: "Just something I picked up. Glad you liked it.",
          them: ["liked it is an understatement", "i kept leaning in. i hope that wasn't obvious lol", "can i see you again?"],
          replies: [
            { you: "It was a bit obvious. I liked it.", them: ["😳", "ok good", "next weekend? you pick"] },
            { you: "Yeah. Next weekend?", them: ["yes!! 🥰", "wear the same perfume or i'm cancelling"] }
          ] },
        { you: "It's my secret.",
          them: ["ugh fine. mysterious", "i'll get it out of you on date two", "there is a date two right? 😏"],
          replies: [{ you: "There's a date two.", them: ["good 😊 night {name} x"] }] }
      ],
      after: "Bianca, to her friend Shay: \"date was SO good. he's funny. and he smelled amazing.\" Shay: \"what did he smell like\" Bianca: \"...honestly? kind of like me\""
    },
    {
      id: "c6k", route: "bianca", gaydar: 60, gaydarSays: "Pink nails and a cropped knit. I'm not mad. I'm just… recalibrating.", title: "Gelato", contact: "Bianca", irl: true,
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
            "Stop. I'm honoured.",
            "Okay, can I be honest? You suit this way more than the black shirt. Like, the black shirt was fine. This is you. You look so much more relaxed.",
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
                { you: "The lilac one.", gaydar: 75, them: ["I KNEW you'd say lilac", "Okay, it's a date. A shopping date. Which is still a date. Right?", { note: "She says \"right?\" like she isn't sure either." }] },
                { you: "Isn't this meant to be a date, not a shopping trip?", them: [{ note: "She laughs, then stops." }, "Oh. Yeah. Sorry. I got carried away.", "It is a date. Totally. Do you want to... walk along the river or something?", { note: "She puts her phone away. She doesn't take your hand." }] }
              ] },
            { you: "Let's not get carried away.", them: ["Okay okay. Baby steps.", "But I'm putting it on the list. The skirt list. Which I just started. In my head."] }
          ] },
        { you: "It was just a dare from Dani.", gaydar: 55,
          them: [
            "A dare. With matching gloss.",
            { note: "She raises an eyebrow and licks her gelato." },
            "Okay. Well, Dani has good taste. You should keep losing her dares.",
            "Honestly, you look really good. Like, better than me, which is rude."
          ],
          replies: [
            { you: "You look great too.", them: ["Thanks babe", { note: "She's never called you babe before. It doesn't sound like a girlfriend babe. It sounds like a friend babe." }] },
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
            { you: "Yeah. Gelato and a walk.", them: ["Okay. Good.", "And for the record, the gloss is perfect. I'd steal it."] },
            { you: "Was it the nails?", them: ["No! The nails are cute.", "It's... everything together, I think. You look like someone I'd go out dancing with. Not someone I'd go home with. Does that make sense?"] }
          ] }
      ],
      after: "Bianca, to Shay: \"second date was fun.\" Shay: \"just fun?\" Bianca: \"he had pink nails and tinted gloss and honestly he looked better than me.\" Shay: \"so is he gay\" Bianca: \"i don't know. i kind of want to take him shopping more than i want to kiss him. is that a sign\" Shay: \"bianca that's THE sign\""
    },
    {
      id: "c6l", route: "bianca", gaydar: 85, gaydarSays: "I did his lashes. He did mine better. We're not dating, are we.", title: "Getting ready at hers", contact: "Bianca", irl: true,
      intro: "Third date, sort of. Bianca invited you over to get ready before her friend Shay's birthday in the Valley. You came over in the lilac pleated skirt she helped you pick, a white baby tee and your pink nails. She opened the door and screamed.",
      outfits: [{"label": "The lilac skirt with a hoodie over it, and sneakers", "gaydar": -5, "intro": "Third date, sort of. Bianca invited you over to get ready before her friend Shay's birthday in the Valley. You came over in the lilac pleated skirt she helped you pick, but with a big hoodie over the top and your sneakers, just for the walk. She opened the door and screamed anyway."}, {"label": "The lilac skirt, a white baby tee and pink nails"}, {"label": "The lilac skirt, a baby tee, pink nails and a pearl clip in your hair", "gaydar": 3, "intro": "Third date, sort of. Bianca invited you over to get ready before her friend Shay's birthday in the Valley. You came over in the lilac pleated skirt she helped you pick, a white baby tee, your pink nails, and a pearl clip in your hair. She opened the door and screamed.", "them": ["Is that a PEARL CLIP. I'm going to cry."]}],
      them: [
        "OH MY GOD. You wore it. You actually wore it.",
        { note: "She pulls you inside by both hands and spins you around like you're her doll." },
        "Okay, sit. Sit down. I'm doing your makeup. Don't argue. I've been wanting to do this since the rooftop.",
        "Lashes? I'm thinking lashes. And a bit of blush. And maybe a liner, just a tiny wing."
      ],
      replies: [
        { you: "Go for it. Full glam.", gaydar: 90,
          them: [
            "Full glam. Okay. Okay okay okay.",
            { note: "She has a ring light. She has three palettes out. She's humming." },
            "Close your eyes. Don't blink. Okay, open. Oh my god. {name}. Look.",
            { note: "She turns you to the mirror. You look like someone you've been trying to meet for years." },
            "You look incredible. Like, I'm actually a bit annoyed. Now shoes. You can't wear sneakers with that. What size are you? I've got heels."
          ],
          replies: [
            { you: "Give me the heels.", gaydar: 95,
              them: [
                "YES. Okay, these. Block heel, you'll survive.",
                { note: "She kneels down and does up the strap for you, like a friend does before a night out." },
                "Babe, I have to say something and you can't be weird about it.",
                "This doesn't feel like a date. It feels like getting ready with one of my girls. And honestly? I love it. I love this more than any date I've been on this year."
              ],
              replies: [
                { you: "I think I love this more too.", gaydar: 100, them: ["I know you do. I can see it", "So can we just... be this? Me and you, getting ready, going out?", "And then you find a guy who loses his mind when he sees you in those heels"] },
                { you: "But I thought you liked me.", them: ["I do like you. So much.", "I just stopped fancying you somewhere around the pink nails, and started wanting to be your best friend instead", "Is that horrible? It feels like a promotion to me"] }
              ] },
            { you: "Maybe not the heels. My ankles.", them: ["Fair. Flats. Gold ones. Here", "But next time, heels. I'm teaching you. Shay will help"] }
          ] },
        { you: "Just a bit. I don't want to look too much.",
          them: [
            "Too much for who?",
            "You're wearing a lilac skirt, babe. The 'too much' ship has sailed and honestly it looks so good on you.",
            { note: "She does a little mascara, a bit of blush. Then she sits back and looks at you for a long time." },
            "Can I ask you something? You can tell me to shut up."
          ],
          replies: [
            { you: "Ask.",
              them: ["Do you want to be dating me? Or do you want to be... this? With a guy?", "Because I think I've been encouraging you to be more you every time I see you, and every time you get more you, you get less into me. And I get less into you. And I don't even mind."],
              replies: [
                { you: "I don't know.", gaydar: 85, them: ["That's okay", "But I think you do. I think we both do"] },
                { you: "With a guy. I think.", gaydar: 100, them: [{ note: "She grins and hugs you so hard the mascara wand ends up in your hair." }, "I KNEW IT. I mean. Okay. Thank you for telling me.", "Right. Lashes. If you're coming out to me, you're doing it in lashes"] }
              ] },
            { you: "Shut up.", them: ["Rude. Accurate. Okay, lashes then."] }
          ] },
        { you: "I thought this was a date.",
          them: [
            { note: "She stops with the lash glue in her hand." },
            "It... is? Isn't it?",
            "Honestly? I think I stopped thinking of it like that two dates ago. Around the gelato. Around the nails. I didn't say anything because I didn't want to make it weird.",
            "Do you still fancy me? Like, actually? Be honest."
          ],
          replies: [
            { you: "Yes.", them: ["Okay.", { note: "She doesn't sound like she believes you, and she doesn't sound sad about it." }, "Then why do you look happiest when I'm talking about your outfit, and not when I'm talking about us?"] },
            { you: "...not really.", gaydar: 90, them: ["Yeah. Me neither. Not like that.", "But I REALLY like you. Just as, like, my person to get ready with. Is that okay?"] }
          ] }
      ],
      after: "At Shay's birthday, three different girls ask where you got your skirt. One of them asks Bianca if you're single. Bianca says \"he's single, but you're not his type.\" She winks at you across the bar."
    },
    {
      id: "c6m", route: "bianca", gaydar: 95, gaydarSays: "Went from 'is he into me' to 'is he gayer than my hairdresser' in four dates. He is.", title: "Bianca's girls 💅", contact: "Bianca's girls 💅", gaydarWho: "Bianca",
      intro: "The morning after Shay's birthday. Bianca has added you to her group chat with Shay and Imogen.",
      them: [{ from: "Bianca", text: "ok everyone say hi to {name} 💅" }, { from: "Shay", text: "HI the skirt king" }, { from: "Imogen", text: "the lashes were insane last night. who did them" }, { from: "Bianca", text: "me obviously. but he could do them himself next time. i watched him fix mine" }, { from: "Shay", text: "so are you two like. still dating??" }, { from: "Bianca", text: "lol" }, { from: "Bianca", text: "{name} you answer" }],
      replies: [
        { you: "I think I'm more one of the girls now.", gaydar: 100,
          them: [{ from: "Bianca", text: "THANK YOU. that's what i've been saying" }, { from: "Bianca", text: "babe i'm not even sad. i was into you on the rooftop. then you got your nails done and i was like. oh he's going to be my favourite person to go out with" }, { from: "Imogen", text: "so we're allowed to set him up now?" }, { from: "Shay", text: "my cousin's gay and he's SO nice. jake. plays rugby. would die for a man in a pleated skirt" }],
          replies: [
            { you: "...Show me a photo of Jake.", them: [{ from: "Shay", text: "OMG" }, { from: "Bianca", text: "WE ARE DOING THIS" }, { from: "Imogen", text: "wear the lilac skirt. jake needs to see the lilac skirt" }] },
            { you: "Slow down. I just got here.", them: [{ from: "Bianca", text: "fair. we'll ease you in" }, { from: "Bianca", text: "step one: next weekend, the Wickham. you, me, heels this time. i'll hold your bag" }] }
          ] },
        { you: "We're still dating. I think.",
          them: [{ from: "Shay", text: "bianca??" }, { from: "Bianca", text: "babe 😭 i love you" }, { from: "Bianca", text: "but last night you spent forty minutes in the bathroom doing imogen's contour and zero minutes trying to kiss me" }, { from: "Imogen", text: "the contour was very good though" }, { from: "Bianca", text: "i'm not breaking up with you. i'm promoting you. bestie. it's better, i swear" }],
          replies: [
            { you: "Did I just get friend-zoned in a group chat?", them: [{ from: "Bianca", text: "gay-best-friend-zoned. it's a much nicer zone" }, { from: "Shay", text: "the snacks are better here" }] },
            { you: "Okay. Fair. That's fair.", gaydar: 100, them: [{ from: "Bianca", text: "i knew you'd say that" }, { from: "Bianca", text: "now. jake." }] }
          ] },
        { you: "Are you saying I'm gay?",
          them: [{ from: "Imogen", text: "👀" }, { from: "Shay", text: "i'm not saying anything i'm just eating toast" }, { from: "Bianca", text: "i'm saying you went from gloss to a skirt and lashes in four weeks and every time i hyped you up you got happier and i got less into you" }, { from: "Bianca", text: "and i'm saying it like a friend. i'll be the first one at pride with you if you want" }],
          replies: [
            { you: "I'm not gay.", them: [{ from: "Bianca", text: "ok babe" }, { from: "Shay", text: "ok babe" }, { from: "Imogen", text: "ok babe" }, { from: "Bianca", text: "wickham next saturday. wear the heels. purely platonic straight-guy reasons" }] },
            { you: "...yeah. I think I am.", gaydar: 100, them: [{ from: "Bianca", text: "🥹🥹🥹" }, { from: "Shay", text: "WELCOME" }, { from: "Imogen", text: "i'm crying on the bus" }, { from: "Bianca", text: "i'm so proud of you. and i'm taking full credit for the skirt" }] }
          ] }
      ],
      after: "Bianca, privately, to you: \"for the record. the rooftop was real. i really liked you. i just like THIS you more, even if this you isn't for me. now go find a guy who'll do up your heel straps x\"",
      debrief: "Sometimes the people who encourage you to be more yourself are the ones who see first that you're not theirs. Losing a date and gaining a friend who hypes you up is a pretty good trade."
    },
{
      "id": "bianca-feet",
      "route": "bianca",
      "gaydar": 97,
      "friend": true,
      "gaydarSays": "I introduced him to Jake and Jake tickled his feet until he cried. Imogen says that's flirting. Imogen's right.",
      "title": "Pedi night",
      "contact": "Bianca",
      "irl": true,
      "intro": "A week after Shay's birthday. Bianca's place, pedicure night with the girls: Shay, Imogen, and you, all barefoot on the floor with the polishes out. Then the doorbell goes. It's Shay's cousin Jake, the one Bianca keeps saying you'd be perfect with. \"He was in the area,\" Bianca says. He wasn't in the area.",
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
                "\"I'm not red,\" Jake says. He's red.",
                "Bianca, cleaning your toe with remover: \"I'm not saying anything. I'm just saying I knew it.\"",
                {
                  "note": "He stays for two hours. He holds your ankle for every coat after that, very still, very carefully, and doesn't tickle you once. Well. Once."
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
                "\"Sorry. Couldn't help it.\" He doesn't look sorry. He doesn't let go of your foot either."
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
            "\"Hold him!\" Bianca yells. \"For science!\"",
            {
              "note": "Jake takes one foot very carefully, avoiding the wet polish, and tickles under your toes. You scream, laugh, beg, and cry a little, from laughing. Your mascara's gone."
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
      "after": "Bianca, to Shay and Imogen, after: \"WELL\" Shay: \"jake just texted me 'is he single'\" Imogen: \"he held his foot for two hours. that's a proposal\" Bianca: \"i'm the best wingwoman alive\" Bianca: \"{name} you're reading this, i know you are, say something\"",
      "debrief": "Being fussed over and teased by someone you like, in front of your friends, is embarrassing in the best way. It's allowed to feel nice."
    },
    {
      id: "bianca-end", route: "bianca", gaydar: 100, spark: 0, gaydarSays: "Liam's a carpenter who thinks contour is a word from maths. He's perfect and I'm keeping him.", title: "Bianca and Liam", contact: "Bianca", irl: true,
      outfits: [
        { label: "Jeans and a tee, just lip oil", gaydar: 0, intro: "A month later. Bianca's birthday drinks at a rooftop in the Valley, the same one where you had your first date. You wore jeans and a tee and lip oil. She's brought a guy. Carpenter. Work boots under his jeans. Has sawdust on him at a rooftop bar. Liam." },
        { label: "The lilac skirt, heels and full glam. She'd want that.", intro: "A month later. Bianca's birthday drinks at a rooftop in the Valley, the same one where you had your first date. You wore the lilac skirt, heels and full glam, because she'd never forgive you otherwise. She's brought a guy. Carpenter. Work boots under his jeans. Has sawdust on him at a rooftop bar. Liam.", them: ["THE LILAC SKIRT. ON MY BIRTHDAY. I'm crying. I'm actually crying."] }
      ],
      them: [
        "Babe!! You came! Okay, this is Liam. Liam, this is {name}, my best friend. He's the one who did my contour.",
        "\"Hey,\" Liam says. \"The contour guy. Good work, man. I can't even tell what it is, but it looks good.\"",
        "He's a carpenter. He made me a bedside table for my birthday. He thinks contour is a maths word. I'm so in love I could scream.",
        { note: "She leans in and whispers: \"Be nice. Be nice! He's straight. He's so straight. Like, actually.\"" }
      ],
      replies: [
        { you: "Liam! Hi! A bedside table? Babe, that's so romantic I could die. B, he's perfect. I'm so happy for you.",
          them: [
            "He IS perfect.",
            "And look at you. Lilac skirt on my birthday. You're the best gay best friend a girl's ever had. Sorry. Friend. Best friend.",
            "You are, though, right? You don't have to say anything. I'm just saying the vibes are very gay best friend."
          ],
          replies: [
            { you: "The vibes are very best friend. Let's leave it there.", them: ["\"Leave it there,\" she says, grinning. \"Okay. For now.\"", "Shay's here. Shay has a cousin. Shay always has a cousin."] },
            { you: "Best friend. Gay or otherwise. Happy birthday, B.", them: [{ note: "She hugs you so hard your lashes nearly come off." }, "Gay or otherwise. Okay. I love you. Go get a drink. Jake's here, by the way. Shay's cousin. He asked if you were coming."] }
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
                "That's the cutest thing anyone's ever done on my birthday. No. Never. But I love you."
              ] },
            { you: "...Never mind. Your hands are very... carpentry. Happy birthday to Bianca. Bye.", gaydar: 100, them: ["\"Thanks, man,\" Liam says, delighted. \"I'll make you a shelf if you want. For all your, um. Products.\"", { note: "Your face is on fire. Bianca has her face in Shay's shoulder and is shaking. Imogen is filming. Shay's cousin Jake is watching from the bar with a little smile." }] }
          ] },
        { you: "Hi Liam. Happy birthday, B. I'm going to the bar.",
          them: ["\"Grab us a beer, man?\" Liam asks. \"Oh. Never mind. You're in heels, I'll come with you.\"", { note: "He walks you to the bar, and orders you a spritz without asking, because Bianca told him that's what you drink. He's very straight. He's also very nice." }] }
      ],
      after: "Bianca, in the group chat at 2am: \"best birthday ever. liam made me a table. {name} wore the lilac skirt. jake asked for his number.\" Shay: \"DID HE GIVE IT\" Bianca: \"he said he'd 'think about it'\" Imogen: \"he's thinking about it in heels\" Bianca: \"he's thinking about it SO hard\"",
      debrief: "Some girls you date become the friend who knows you best. That's not losing. That's just finding out where you fit."
    },
    {
      id: "c7", route: "jess", title: "The group chat", contact: "Jess",
      them: ["ok i need to tell you something and i don't want you to be upset", "hannah's in a group chat with my friend kate and kate screenshotted this to me", "\"update: jess set me up with a gay guy 🙃 he wore lip tint on a date and spent the whole night looking at the bartender\"", "and sam said mia rang her basically saying the same thing", "and something about a group chat with the netball girls??", "and my friend from hinge says her friend ella went on brunch with a guy in a dress and i'm like. was that you", "also someone called lucy follows me now?? and zoe's friend brooke liked my post from 2019. it's giving investigation", "i'm not saying anything. i'm just asking. are you ok?"],
      replies: [
        { you: "Great. So everyone's talking about me.",
          them: ["two people are talking about you and they're being dicks about it", "ok more than two. but the point stands", "i told kate to drop it", "but {name}. are they wrong?"],
          replies: [
            { you: "No. I'm gay.",
              them: ["ok", "ok. thank you for telling me", "i'm sorry i set you up with them lol. i'd have set you up with literally anyone else if you'd told me", "like i have a guy from work in mind RIGHT NOW"],
              replies: [
                { you: "Not yet. I need a minute.", them: ["fair. take a minute. take ten", "but he has nice arms and he can cook. just putting that out there"] },
                { you: "...what's his name?", them: ["oh we're DOING this", "his name's Tom. hes lovely. hes also slightly too into running but nobody's perfect"] },
                { you: "Are you upset I didn't tell you?", them: ["a tiny bit. like 5%", "the other 95% is just glad you're ok. and that i dont have to pretend i didnt notice the lip tint anymore"] }
              ] },
            { you: "I don't want to talk about it.", them: ["ok. i'm not going anywhere. text me whenever"],
              after: "You don't text her that night. You text her three days later: \"they weren't wrong.\" She replies in under a minute. A month after that, Dani sets you up on a dating app. This time you tick 'men'." },
            { you: "What exactly are they saying?",
              them: ["you don't want to know", "ok fine. mostly 'why is he dating girls'. some 'his makeup was better than mine'. one 'he's so obviously gay i feel stupid'", "honestly the makeup one is a compliment", "the rest is them being embarrassed and taking it out on you"],
              replies: [
                { you: "They're not wrong though.", them: ["yeah. i figured", "and that's fine. that's more than fine", "you ok?"] },
                { you: "I feel sick.", them: ["coming over", "don't argue. i'm bringing chips and the bad wine"] }
              ] }
          ] },
        { you: "They're not wrong.",
          them: ["yeah i kind of figured", "i'm sorry it came out like that. that's shit", "you ok?"],
          replies: [
            { you: "Not really. But kind of relieved?", them: ["that makes sense", "drinks friday. my shout. wear whatever you want", "and i mean WHATEVER. if you want to wear the dress ella was talking about, wear the dress"] },
            { you: "I feel like an idiot for dating all of them.", them: ["you're not an idiot", "you were trying to be what you thought you were meant to be. lots of people do that", "although maybe stop accepting setups from me for a bit lol"] }
          ] },
        { you: "It was just makeup, Jess.",
          them: ["ok. that's fine", "but you know you can tell me stuff right", "like actual stuff. not just makeup stuff"],
          replies: [{ you: "I know.", them: ["ok good"] }, { you: "Okay. It's not just makeup.", them: ["i know babe", "i've known since you asked if my eyeliner was wing or kitten. i'm just glad you said it"] }],
          after: "It takes you another two weeks to tell her. She says \"I know, babe\" and orders you a drink. A month after that, Dani sets you up on a dating app. This time you tick 'men'." },
        { you: "Who's Lucy?? Why is she following you?",
          them: ["THAT'S your question??", "idk she found me through sam or something. she liked three of my photos and one of them was of you", "ok i'm asking again. are you ok"],
          replies: [{ you: "Yeah. And yeah, they're right. I'm gay.", them: ["ok", "ok. i love you", "and i'm blocking lucy"] }] }
      ],
      after: "A month later, Dani sets you up on a dating app. This time you tick 'men'. You've never felt this nervous about pressing 'like'.",
      debrief: "Being talked about behind your back is horrible, and it says more about them than you. You get to decide when and how you say it, even if other people got there first."
    },
    {
      id: "s1", route: "bf", title: "Hey there",
      them: ["Hey! Your profile made me smile.", "Is that your dog or are you just very good at borrowing dogs?"],
      replies: [
        { you: "All mine. Her name's Biscuit.",
          them: ["Biscuit 😍 Okay I'm already invested", "What is she? She looks like a kelpie that got into a bag of flour", "I'm {bf}, by the way"],
          replies: [
            { you: "Kelpie cross something. The vet just shrugged.",
              them: ["The vet shrugged 😂 That's the best answer", "Okay I have to ask. Is this your first time on here? You've got very 'just downloaded it' energy. In a good way"],
              replies: [
                { you: "Is it that obvious?",
                  them: ["A bit. Your bio says 'new to this, be nice' which is either very honest or a trap", "I'll be nice. I promise"],
                  replies: [
                    { you: "It's not a trap. I only came out a couple of months ago.",
                      them: ["Oh, that's huge. Congrats 🏳️‍🌈", "No rush on anything. We can just talk about Biscuit's crimes for a week if you want", "Or coffee, whenever you're ready. I know a good spot in Paddington"],
                      replies: [
                        { you: "Coffee sounds good. Saturday?", them: ["Saturday 😊 I'll send you the place", "Fair warning, I'm taller than my photos suggest and I'll probably knock something over"] },
                        { you: "Can we talk a bit more first?", them: ["Of course. Tell me about Biscuit's greatest crimes", "I need the full rap sheet"] }
                      ] },
                    { you: "It's a trap. Biscuit runs the account.", them: ["Then Biscuit has excellent taste", "Tell Biscuit I'd like to take her owner for coffee"] }
                  ] },
                { you: "I've been on here a while, thanks very much.", them: ["Sure you have 😏", "Okay, seasoned pro. What's your go-to first date?"],
                  replies: [{ you: "Coffee. Easy to leave if it's bad.", them: ["Smart. Brutal. I respect it", "Coffee Saturday? I'll try not to be bad"] }] }
              ] },
            { you: "She ate a whole birthday cake once. Candles and all.",
              them: ["CANDLES?", "Okay she's a legend", "I'm going to need to meet her. And you, I suppose 😏"] }
          ] },
        { you: "Borrowed. I have a whole dog-borrowing operation.",
          them: ["Haha I knew it 😂", "Do you rent them by the hour? Asking for me", "I'm {bf}. Coffee sometime? You can bring a borrowed dog"],
          replies: [
            { you: "Only if you bring a borrowed dog too.", them: ["I'll see what I can do. My housemate has a very fat sausage dog called Kevin", "Kevin and Biscuit. It's a double date"] },
            { you: "Okay, she's mine. I panicked.", them: ["You panicked over a dog question 😂", "That's adorable. Coffee. Saturday. Bring the real dog"] }
          ] },
        { you: "Hi. Sorry, I'm really nervous. I've never messaged a guy before.",
          them: ["Hey, no need to be sorry", "Never messaged a guy, or never messaged a guy on here?"],
          replies: [
            { you: "Ever. I've only ever dated girls.",
              them: ["Okay. Well, you're doing great so far", "Can I tell you something? My first message to a guy was 'hello there'. Like Obi-Wan. He didn't reply. Rightly", "So you're already ahead"],
              replies: [
                { you: "That's genuinely terrible.", them: ["I know 😂 I think about it at 3am", "Coffee sometime? No pressure. I'll keep the Star Wars to a minimum"] },
                { you: "That actually helps. Thanks.", them: ["Anytime. Take it at your speed", "I'm {bf}, by the way. Tell me about the dog"] }
              ] },
            { you: "On here. I'm a bit new.", them: ["We've all been new. You're doing fine", "I'm {bf}. What's the dog's name?"] }
          ] }
      ]
    },
    {
      id: "s2", route: "bf", title: "After the first date",
      them: ["Home safe 🙂", "I had a really nice time today. You're easy to be around.", "Also I'm sorry I knocked your flat white over. I did warn you"],
      replies: [
        { you: "Me too. I was nervous but it felt easy.",
          them: ["You hid it well! I was nervous too 😅", "I changed my shirt three times. Then went back to the first one", "Can I see you again?"],
          replies: [
            { you: "Yes, definitely.", them: ["😊 Good", "I'll think of something better than coffee. Something with fewer spillable things"],
              replies: [
                { you: "Can I pick? I want to go somewhere I've never been with a guy.", them: ["Ooh. Yes. Anywhere you want", "Where are you thinking?"],
                  replies: [
                    { you: "The Valley. Somewhere gay.", them: ["Yes. Absolutely. I'll take you to my favourite bar", "Warning: they play a lot of Kylie. Like, a lot"] },
                    { you: "Honestly? Just a walk. Somewhere quiet.", them: ["I love that. New Farm Park, Sunday afternoon?", "We can hold hands or not. Whatever feels right"] }
                  ] },
                { you: "Surprise me.", them: ["Oh no. Pressure", "Okay I've got an idea. Wear comfy shoes"] }
              ] },
            { you: "Can I be honest? I didn't know if I'd like it. But I did.",
              them: ["That's really nice to hear", "Can I ask what you thought you wouldn't like?"],
              replies: [
                { you: "Being out in public with a guy. Like, on a date.", them: ["Yeah. That makes total sense", "For what it's worth, nobody in that café cared. The barista only cared that I spilled your coffee", "Next time we'll go somewhere even more casual. Baby steps"] },
                { you: "I don't know. Liking a guy, I guess. It's still new.", them: ["Of course it is", "You don't have to have it all worked out. You just have to show up and spill your coffee. Well. Watch me spill it"] }
              ] }
          ] },
        { you: "I had fun. Same time next week?",
          them: ["Already in the calendar 📅", "I literally put 'coffee with the Biscuit guy' in my work calendar. My manager saw it", "So now I have to see you again. For HR reasons"],
          replies: [
            { you: "For HR reasons 😂 Fair enough.", them: ["Glad you understand", "Next Saturday. I'll bring a towel this time"] },
            { you: "Your manager knows about me already?", them: ["She knows I had a coffee with a cute guy with a dog", "She's very invested. She asked if you were 'the one' and I said it was one coffee, Linda"] }
          ] },
        { you: "Was it okay that I didn't kiss you goodbye?",
          them: ["Totally okay", "I didn't want to rush anything. You told me it was your first date with a guy. I wasn't going to make it weird", "Was it okay that I hugged you? I'm a hugger, sorry"],
          replies: [
            { you: "The hug was nice.", them: ["Good 😊 More hugs then", "Can I see you again?"] },
            { you: "Next time maybe you can kiss me.", them: ["Oh", "Okay yes. Noted. Very noted", "Next Saturday?"] }
          ] }
      ]
    },
    {
      id: "s3", route: "bf", title: "Good morning",
      them: ["Morning ☀️", "This is the coffee I'm having instead of being at brunch with you. It's sad.", "It's from the work machine. It tastes like a coin", "Hope work's kind to you today"],
      replies: [
        { you: "Morning! That is a tragic coffee.",
          them: ["I know. Pray for me 😔", "Dinner tonight to make up for it?"],
          replies: [
            { you: "Yes. Where?", them: ["There's a Thai place in West End that does the best pad see ew in Brisbane", "Also it has very dim lighting. Very romantic. Very good for hiding how much I eat"] },
            { you: "Can't tonight. Tomorrow?", them: ["Tomorrow works. I'll survive on coin coffee until then"] }
          ] },
        { you: "Good morning to you too 😊",
          them: ["I like getting a good morning back", "Is this a thing now? Good morning texts?", "Because I'm into it"],
          replies: [
            { you: "It's a thing now.", them: ["Great. Excellent. I'm going to be insufferable about it", "Have a great day x"] },
            { you: "I've never had someone text me good morning before.", them: ["Never?", "Well, now you do. Every day. Sorry in advance"] }
          ] },
        { you: "I told someone at work about you.",
          them: ["Wait really??", "Who? What did you say?"],
          replies: [
            { you: "Sam. I said I'm seeing a guy.", them: ["{name} that's huge", "How did she take it?"],
              replies: [
                { you: "She said 'finally' and asked to see a photo.", them: ["Finally 😂 I like Sam already", "Which photo did you show her? Please say not the one where I'm squinting"] },
                { you: "She was really nice about it.", them: ["Good. That's how it should be", "I'm proud of you. Seriously. Good morning just got a lot better"] }
              ] },
            { you: "Just that I had a good weekend. Baby steps.", them: ["Baby steps count", "One day you'll tell them about me and my coin coffee"] }
          ] }
      ]
    },
    {
      id: "s4", route: "bf", title: "So... are we?",
      them: ["Can I ask something that might be a bit forward?", "I deleted the app last night. I don't really want to see anyone else.", "Would you want to be my boyfriend?"],
      replies: [
        { you: "Yes. I'd really like that.",
          them: ["😊😊😊", "Okay I'm grinning at my phone like an idiot", "My housemate just asked who died. Nobody. I have a boyfriend"],
          replies: [
            { you: "I have a boyfriend. That's so weird to say.", them: ["Good weird or bad weird?"],
              replies: [
                { you: "Good weird. Really good weird.", them: ["Say it again", "Not to me. Out loud. In your kitchen"] },
                { you: "Scary weird. But I want it.", them: ["Scary is allowed. I'm here for the scary bits too"] }
              ] },
            { you: "Did you just tell your housemate?", them: ["I told my housemate, my group chat, and Kevin the sausage dog", "Kevin is thrilled. Kevin wants to meet Biscuit"] }
          ] },
        { you: "I want to, I'm just nervous about the word.",
          them: ["That's okay. It's a big word, especially if it's new.", "We can just be us for now and use the word whenever you're ready.", "I'm not going anywhere."],
          replies: [
            { you: "Thank you. Boyfriend. Okay. Yes.", them: ["Boyfriend 💙", "You did it. You said the word"] },
            { you: "Can I tell people I'm seeing someone first?", them: ["Of course", "Seeing someone. Dating. Hanging out with a tall man who spills things. Whatever you want to call it", "I know what it is"] }
          ] },
        { you: "Wait, you deleted the app before asking me?",
          them: ["...yes", "Bold strategy, I know", "If you say no I'm redownloading it and pretending this never happened"],
          replies: [
            { you: "Don't redownload it. Yes.", them: ["😭 Okay good. My heart can't take that", "Boyfriend"] },
            { you: "I deleted mine last week.", them: ["LAST WEEK??", "And you let me sweat it out like this", "Okay. Boyfriends. Both of us. Officially"] }
          ] }
      ]
    },
    {
      id: "s5", route: "bf", title: "Meeting your friends",
      them: ["Trivia with Jess and Priya tonight! Be honest, should I be scared?", "What do I wear? Is there a dress code for meeting the friends?"],
      replies: [
        { you: "Jess will grill you. Priya will love you.",
          them: ["Noted. I'll answer every sport question to win Jess over", "What does Jess grill people about?"],
          replies: [
            { you: "Your intentions.", them: ["My intentions are trivia and you", "In that order? No. You first. Then trivia. Then chips"] },
            { you: "Whether you're good enough for me.", them: ["Fair. I'm probably not", "But I'll bring my A game. And my B game. I know a lot about 2000s pop"] }
          ] },
        { you: "I'm a bit nervous introducing you.",
          them: ["That's fair, it's a new thing for you.", "Is it the friends knowing, or just me being there?"],
          replies: [
            { you: "The friends seeing me with a guy. For real.", them: ["Yeah. That's a big one", "If it gets too much just squeeze my hand and we'll get some air. Deal?"],
              replies: [{ you: "Deal.", them: ["See you at 7 💙"] }, { you: "Can we not hold hands in front of them yet?", them: ["Of course. No hands. Just two guys being very good at trivia"] }] },
            { you: "What if they don't like you?", them: ["Then I'll win them over with trivia", "And if they still don't like me, I'll still like you. That's what matters"] }
          ] },
        { you: "Wear something cute. They'll judge.",
          them: ["Cute like how cute", "Like nice shirt cute or like 'your outfit' cute? Because I can't do what you do. I'd look like a lampshade"],
          replies: [
            { you: "Nice shirt. I'll do enough cute for both of us.", them: ["Perfect division of labour", "What are you wearing?"],
              replies: [{ you: "The pink shirt. And gloss.", them: ["Oh I love that shirt", "Okay now I'm the nervous one. You're going to look way better than me"] }] },
            { you: "Lampshade could work.", them: ["Rude", "Accurate. But rude"] }
          ] }
      ],
      after: "Jess texts you at 10pm: \"Okay I LIKE him.\" Priya texts at 10:02: \"he knew every Spice Girls answer. marry him.\""
    },
    {
      id: "s6", route: "bf", title: "Holding hands",
      them: ["Can I hold your hand on the walk along South Bank tomorrow?", "Totally okay if you're not there yet.", "I just figured I'd ask instead of doing the awkward hand-brush thing"],
      replies: [
        { you: "Yes. I'd like that.",
          them: ["Then it's a date 🙂", "Can I ask something? Have you held a guy's hand in public before?"],
          replies: [
            { you: "No. Never.", them: ["Then tomorrow's a big one", "If you want to let go at any point, let go. I won't be hurt. I promise"],
              replies: [
                { you: "What if someone says something?", them: ["Then we keep walking", "And I'll probably say something back, which you'll find embarrassing, which will be funny", "But honestly, it's South Bank on a Sunday. Most people will be looking at the ibises"] },
                { you: "Okay. I'm excited.", them: ["Me too. More than a normal person should be about a walk"] }
              ] },
            { you: "Once, at Pride. But that doesn't count.", them: ["It totally counts", "But tomorrow is a normal Sunday. That's a different kind of brave"] }
          ] },
        { you: "Maybe not in public yet. Is that okay?",
          them: ["Of course it's okay. There's no rush.", "Your pace is the right pace.", "Can I hold your hand in the car, though? Nobody sees that"],
          replies: [
            { you: "Yeah. The car's fine.", them: ["Car hand-holding. Very romantic. Very private", "One day we'll do it on South Bank. No rush"] },
            { you: "Sorry. I feel like I'm letting you down.", them: ["You're not. At all", "I came out at 19 and didn't hold hands in public till I was 23. I get it more than you think"] }
          ] },
        { you: "I'll try. I might let go if I get nervous.",
          them: ["That's completely fine.", "I'll be there either way", "And if you let go I'll just walk really close to you. Like an annoying golden retriever"],
          replies: [{ you: "Deal.", them: ["Deal 💙"] }] }
      ],
      after: "Halfway along the Arbour you notice you've been holding his hand for ten minutes and haven't once checked who was looking."
    },
    {
      id: "s6b", route: "bf", title: "Summer feet",
      them: ["Davies Park markets tomorrow?", "It's meant to be 33. Wear something cool"],
      replies: [
        { you: "I was thinking the flip-flops. And painted toes.",
          them: ["The pink ones from the women's section? Yes please", "What colour toes?"],
          replies: [
            { you: "Pink, to match.", them: ["Obviously", "You'll look great. I'm buying you a mango smoothie as a reward"] },
            { you: "Rainbow. A different colour each toe.", them: ["Okay that's amazing", "I'm going to hold your hand and be very smug all morning"] }
          ] },
        { you: "My toes are painted but I'll wear sneakers.",
          them: ["You can, totally", "But you painted them for a reason, right?", "Nobody at the markets is looking at your feet. And if they are, they're thinking 'nice colour'"],
          replies: [
            { you: "Okay. Sandals it is.", them: ["😊 See you at 8"] },
            { you: "Sneakers this time. Sandals next time.", them: ["Deal. Next time"],
              after: "You wear the sneakers. The next Saturday you wear the sandals, and he notices before you say anything." }
          ] },
        { you: "Can I borrow your flip-flops? Mine are too manly.", them: ["Mine are worse, they're from a gas station", "Kmart after breakfast? We'll find you some cute ones"] }
      ],
      after: "At the markets the lady at the plant stall looks down and says \"ooh, love that colour on you, love.\" You say thanks. You barely even go red.",
      debrief: "Some of the biggest steps are small ones. Painted toes in public count."
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
      debrief: "Being silly and goofy with a guy you like is part of it too. And 'stop' always works."
    },
    {
      id: "s8", route: "bf", title: "A wobble",
      them: ["Hey. Can we talk about the work drinks?", "When your boss came over you introduced me as your friend.", "It stung a bit. I've been sitting with it all night and I'd rather say it than be weird about it"],
      replies: [
        { you: "I'm sorry. I panicked.",
          them: ["I get it. I really do. I've been there.", "I just want you to know I'm proud to be with you, and I hope one day you feel the same out loud."],
          replies: [
            { you: "I am proud of you. I'll get there.", them: ["I know you will. We're okay 💙"] },
            { you: "Can we work out together how I tell work?", them: ["I'd really like that. Pancakes and a plan on Saturday?", "We can write it on a napkin. Very professional"] },
            { you: "I don't know why I did it.",
              them: ["I think you do", "You're not out at work. Your boss came over. Your brain went 'danger'", "That's not a bad thing about you. It's just where you're at"],
              replies: [{ you: "Thanks for getting it.", them: ["Always. But I'm still going to bring it up again in a month 😏"] }] }
          ] },
        { you: "I'm not out at work yet. I should have told you that.",
          them: ["Ah, okay. That makes sense. Thanks for telling me.", "I'll follow your lead at work stuff. Just talk to me, yeah?", "I'd rather know where the lines are than walk into them"],
          replies: [
            { you: "Sam knows. Nobody else.", them: ["Okay. So Sam's safe", "Should I stop holding your hand under the table at work drinks then 😂"] },
            { you: "I want to be out at work. I'm just scared.", them: ["Scared is fair. People can be weird", "When you're ready, I'll be at the next work drinks being very obviously your boyfriend"] }
          ] },
        { you: "It's not a big deal. You're overreacting.",
          them: ["Okay. Maybe it's not a big deal to you", "But I spent a long time being someone's 'friend' when I wasn't. I'm not doing that again, not for anyone", "I'm not saying you have to come out at work tomorrow. I'm saying don't tell me it's nothing"],
          replies: [
            { you: "You're right. I'm sorry.", them: ["Thank you", "We're okay. I just needed to say it"] },
            { you: "I didn't know that about you.", them: ["Yeah. My first boyfriend kept me secret for a year", "So it's a bit of a sore spot. That's on me to tell you, not on you to guess"] }
          ] }
      ],
      debrief: "Couples have wobbles. Saying sorry and explaining where you're at is what makes it okay."
    },
    {
      id: "s9", route: "bf", title: "Three words",
      them: ["Can't sleep. Been thinking.", "About you mostly. And Biscuit a bit.", "I love you. I don't need you to say it back, I just wanted you to know."],
      replies: [
        { you: "I love you too.",
          them: ["💙💙💙", "Okay now I'm definitely not sleeping", "Have you said that to a guy before?"],
          replies: [
            { you: "No. You're the first.", them: ["Oh", "That's a lot. In a good way. I'm going to remember this text forever", "Screenshotting it. Sorry. Not sorry"] },
            { you: "Come over. I don't want to say it over text.", them: ["It's 1am", "...I'm putting my shoes on"] }
          ] },
        { you: "I'm not quite there yet, but I'm really happy with you.",
          them: ["That's a lovely thing to hear.", "No rush. I meant it either way.", "Seriously. I'm not counting"],
          replies: [
            { you: "I think I'm close.", them: ["I'll take close", "Go to sleep. Close is good"] },
            { you: "Thank you for not making it weird.", them: ["Hey, I'm the one texting I love you at 1am", "If anyone's making it weird, it's me"] }
          ] },
        { you: "Did you mean to send that?",
          them: ["Yes", "Okay I was going to say it on Saturday at dinner and I couldn't wait", "Do you want me to unsend it? I won't. But do you want me to"],
          replies: [
            { you: "Don't you dare unsend it.", them: ["Okay 😊", "I love you"] },
            { you: "Say it again on Saturday. Out loud.", them: ["Deal. Out loud. Over dumplings"] }
          ] }
      ]
    },
    {
      id: "s10", route: "bf", title: "Six months",
      them: ["Happy six months 🥂", "Remember when you were nervous about the word 'boyfriend'? Look at you now.", "You introduced me to your boss last week. Without me even asking"],
      replies: [
        { you: "Look at us now.",
          them: ["Here's to the next six. And Biscuit, obviously", "What was your favourite bit? Of the six months"],
          replies: [
            { you: "The first time we held hands at South Bank.", them: ["You let go after 30 seconds the first time", "Then grabbed it back. I'll never forget that"] },
            { you: "When you spilt my coffee.", them: ["Of course you'd pick that", "Mine's when you told your boss 'this is my boyfriend'. You went bright red. I nearly cried"] },
            { you: "Lazy Sundays on the couch.", them: ["Even when I steal your socks?", "Especially then. Don't answer that"] }
          ] },
        { you: "Thank you for being so patient with me.",
          them: ["You never needed patience. You just needed a bit of time.", "And you did all the hard bits. I just held your hand. Literally", "Proud of you. Love you."],
          replies: [
            { you: "I love you too.", them: ["💙", "Dinner. The Thai place. Then we go dancing in the Valley. Wear the gold sandals"] },
            { you: "Six months ago I couldn't say the word gay.", them: ["And now?"],
              replies: [{ you: "Now I'm gay and I've got a boyfriend and a very spoiled dog.", them: ["Best sentence I've ever read", "Happy six months, gorgeous"] }] }
          ] }
      ],
      debrief: "This is the end of the story for now. Replay any chapter whenever you like."
    }
  ]
};
