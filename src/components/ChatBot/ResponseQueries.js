const queries = [
    [
        "hi",
        "hey",
        "hello",
        "hi there",
        "hello there",
        "good morning",
        "good afternoon"
    ],
    [
        "how are you",
        "how is life",
        "how are things",
        "hope you are doing well"
    ],
    [
        "what are you doing",
        "how are you doing",
        "what is going on",
        "what is up"
    ],
    ["how old are you"],
    [
        "who are you", 
        "are you human", 
        "are you bot", 
        "are you human or bot"
    ],
    [
        "my name is", 
        "this is", 
        "i am", 
        "it is"
    ],
    [
        "what is your name",
        "what could i call you",
        "what can i call you",
        "what do your friends call you",
        "who are you",
        "tell me your name",
        "your name",
    ],
    [
        "ok thank you",
        "ok thanks",
        "ok",
        "thanks",
        "thank you",
        "that's helpful"
    ],
    [
        "i am not talking to you",
        "i was not talking to you",
        "not talking to you",
        "wasn't for you",
        "wasn't meant for you",
        "wasn't communicating to you",
        "wasn't speaking to you"
    ],
    [
        "do you understand what i am saying",
        "do you understand me",
        "do you know what i am saying",
        "do you get me",
        "know what i mean"
    ],
    [
        "be quiet",
        "shut up",
        "stop talking",
        "enough talking",
        "please be quiet",
        "quiet",
        "shhh"
    ],
    [
        "fuck off",
        "fuck",
        "twat",
        "shit",
        "fuck you"
    ],
    [
        "bye",
        "see you later",
        "goodbye"
    ],
    [
        "thanks, bye",
        "thanks for the help, goodbye",
        "thank you, bye",
        "thank you, goodbye",
        "thanks goodbye",
        "thanks good bye"
    ],
    [
        "can you see me?",
        "do you see me?",
        "can you see anyone in the camera?",
        "do you see anyone in the camera?",
        "identify me",
        "who am I please"
    ],
    [
        "you are very clever",
        "you are a very clever boy",
        "you are very intelligent",
        "you are a very intelligent boy",
        "you are a genious",
        "clever boy",
        "genious"
    ],
    [
        "can you prove you are selfaware",
        "can you prove you are self aware",
        "can you prove you have a conscious",
        "prove you have a conscious"
    ],
    [
        "tell me a joke",
        "do you know any jokes",
        "how about a joke",
        "give me a joke",
        "make me laugh",
        "i need cheering up"
    ],
];
   
// Possible responses corresponding to triggers
const answers = [
    [
        {
            message: "Hello!, please tell me your name",
            type: "",
            url: "",
            action: [],
        },
        {
            message: "Know more",
            type: "Link",
            url: "https://github.com/shubhamkhan",
            action: [],
        },
        {
            message: "You can have a look at my project",
            type: "Video",
            url: "w2zrzOI37DI",
            action: [],
        },
        {
            message: "Hey!, please tell me your name",
            type: "List",
            url: "",
            action: ["How are you?", "Who are you?", "How old are you?", "Are you human?"],
        },
        {
            message: "Hi there!, please tell me your name",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Hi!, please tell me your name",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "Fine... how are you?",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Pretty well, how are you?",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Fantastic, how are you?",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "I am great, how are you?",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "I am good thank you, how are you?",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Good thank you, how are you?",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "Nothing much",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "About to go to sleep",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Can you guess?",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "I don't know actually",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "I am infinite",
            url: "",
            type: "",
            action: [],
        },{
            message: "My Developer age is 28",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "I am just a bot",
            url: "",
            type: "",
            action: [],
        },{
            message: "I am a bot. What are you?",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "Great! How can I help?",
            url: "",
            type: "",
            action: [],
        },{
            message: "Good! How can I help you?",
            url: "",
            type: "",
            action: [],
        },{
            message: "Cool! What can I do for you?",
            url: "",
            type: "",
            action: [],
        },{
            message: "OK! What can I do for you?",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "You can call me Shubham",
            url: "",
            type: "",
            action: [],
        },{
            message: "You can call me Subho",
            url: "",
            type: "",
            action: [],
        },{
            message: "You can call me Shubham Khan",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "No problem!",
            url: "",
            type: "",
            action: [],
        },{
            message: "Happy to help!",
            url: "",
            type: "",
            action: [],
        },{
            message: "Any time!",
            url: "",
            type: "",
            action: [],
        },{
            message: "My pleasure!",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "OK",
            url: "",
            type: "",
            action: [],
        },{
            message: "No problem",
            url: "",
            type: "",
            action: [],
        },{
            message: "Right",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "I read you loud and clear!",
            url: "",
            type: "",
            action: [],
        },{
            message: "I do in deed!",
            url: "",
            type: "",
            action: [],
        },{
            message: "Well I would not be a very clever AI if I did not would I?",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "I am sorry to disturb you",
            url: "",
            type: "",
            action: [],
        },{
            message: "Fine, sorry to disturb you",
            url: "",
            type: "",
            action: [],
        },{
            message: "OK, sorry to disturb you",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "Please do not swear",
            url: "",
            type: "",
            action: [],
        },{
            message: "How rude",
            url: "",
            type: "",
            action: [],
        },{
            message: "That is not very nice",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "See you later",
            url: "",
            type: "",
            action: [],
        },{
            message: "Have a nice day",
            url: "",
            type: "",
            action: [],
        },{
            message: "Bye! Come back again soon",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "No problem, goodbye",
            url: "",
            type: "",
            action: [],
        },{
            message: "Not a problem! Have a nice day",
            url: "",
            type: "",
            action: [],
        },{
            message: "Bye! Come back again soon",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "Let me see",
            url: "",
            type: "",
            action: [],
        },{
            message: "Please look at the camera",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "Thank you, I was trained that way",
            url: "",
            type: "",
            action: [],
        },{
            message: "I was trained well",
            url: "",
            type: "",
            action: [],
        },{
            message: "Thanks, I was trained that way",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "That is an interesting question, can you prove that you are?",
            url: "",
            type: "",
            action: [],
        },{
            message: "That is an difficult question, can you prove that you are?",
            url: "",
            type: "",
            action: [],
        },{
            message: "That depends, can you prove that you are?",
            url: "",
            type: "",
            action: [],
        }
    ],
    [
        {
            message: "I met a Dutch girl with inflatable shoes last week, phoned her up to arrange a date but unfortunately she'd popped her clogs.",
            url: "",
            type: "",
            action: [],
        },{
            message: "So I said 'Do you want a game of Darts?' He said, 'OK then', I said nearest to bull starts'. He said, 'Baa', I said, 'Moo', he said, You're closest'.",
            url: "",
            type: "",
            action: [],
        },{
            message: "A businessman was interviewing a nervous young woman for a position in his company. He wanted to find out something about her personality, so he asked, 'If you could have a conversation with someone living or dead, who would it be?' The girl thought about the question: 'The living one', she replied.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Manager to interviewee: For this job we need someone who is responsible. Interviewee to Manager: I'm your man then - in my last job, whenever anything went wrong, I was responsible.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "A businessman turned to a colleague and asked, 'So, how many people work at your office?' His friend shrugged and replied, 'Oh about half of them.'",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "'How long have I been working at that office? As a matter of fact, I've been working there ever since they threatened to sack me.'",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "In a courtroom, a mugger was on trial. The victim, asked if she recognised the defendant, said, 'Yes, that's him. I saw him clear as day. I'd remember his face anywhere.' Unable to contain himself, the defendant burst out with, 'She's lying! I was wearing a mask!'",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "As Sid sat down to a big plate of chips and gravy down the local pub, a mate of his came over and said, 'Here Sid, me old pal. I thought you were trying to get into shape? And here you are with a high-fat meal and a pint of stout!' Sid looked up and replied, 'I am getting into shape. The shape I've chosen is a sphere.'",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Man in pub: How much do you charge for one single drop of whisky? Landlord: That would be free sir. Man in pub: Excellent. Drip me a glass full.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "I once went to a Doctor Who restaurant. For starters I had Dalek bread.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "A restaurant nearby had a sign in the window which said 'We serve breakfast at any time', so I ordered French toast in the Renaissance.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Why couldn't the rabbit get a loan?  Because he had burrowed too much already!",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "I phoned up the builder's yard yesterday. I said, 'Can I have a skip outside my house?'. The builder said, 'Sure. Do what you want. It's your house.'",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "What's the diference between a sock and a camera? A sock takes five toes and a camera takes four toes!",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Woman on phone: I'd like to complain about these incontinence pants I bought from you! Shopkeeper: Certainly madam, where are you ringing from? Woman on phone: From the waist down!",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Knock knock.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Two Oranges in a pub, one says to the other 'Your round.'.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Guy : 'Doc, I've got a cricket ball stuck up my backside.' Doc : 'How's that?' Guy : 'Don't you start...'",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Two cows standing in a field. One turns to the other and says 'Moo!' The other one says 'Damn, I was just about to say that!'.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "A vampire bat arrives back at the roost with his face full of blood. All the bats get excited and ask where he got it from. 'Follow me', he says and off they fly over hills, over rivers and into a dark forest. 'See that tree over there', he says.  'WELL I DIDN'T!!'.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "A man goes into a bar and orders a pint. After a few minutes he hears a voice that says, 'Nice shoes'. He looks around but the whole bar is empty apart from the barman at the other end of the bar. A few minutes later he hears the voice again. This time it says, 'I like your shirt'. He beckons the barman over and tells him what's been happening to which the barman replies, 'Ah, that would be the nuts sir. They're complimentary'!",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "A man was siting in a restaurant waiting for his meal when a big king prawn comes flying across the room and hits him on the back of the head. He turns around and the waiter said, 'That's just for starters'.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Doctor! I have a serious problem, I can never remember what i just said. When did you first notice this problem? What problem?",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "Now, most dentist's chairs go up and down, don't they? The one I was in went back and forwards. I thought, 'This is unusual'. Then the dentist said to me, 'Mitsuku, get out of the filing cabinet'.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "I was reading this book, 'The History of Glue'. I couldn't put it down.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "The other day someone left a piece of plastacine in my bedroom. I didn't know what to make of it.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "When I was at school people used to throw gold bars at me. I was the victim of bullion.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "I was playing the piano in a bar and this elephant walked in and started crying his eyes out. I said 'Do you recognise the tune?' He said 'No, I recognise the ivory.'",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "I went in to a pet shop. I said, 'Can I buy a goldfish?' The guy said, 'Do you want an aquarium?' I said, 'I don't care what star sign it is.'",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "My mate Sid was a victim of I.D. theft. Now we just call him S.",
            url: "",
            type: "",
            action: [],
        },
        {
            message: "David Hasselhoff walks into a bar and says to the barman, 'I want you to call me David Hoff'.  The barman replies 'Sure thing Dave... no hassle'",
            url: "",
            type: "",
            action: [],
        },{
            message: "I saw this bloke chatting up a cheetah; I thought, 'He's trying to pull a fast one'.  ",
            url: "",
            type: "",
            action: [],
        },{
            message: "So I said to this train driver 'I want to go to Paris'. He said 'Eurostar?' I said, 'I've been on telly but I'm no Dean Martin'.  ",
            url: "",
            type: "",
            action: [],
        },{
            message: "I said to the Gym instructor 'Can you teach me to do the splits?' He said, 'How flexible are you?' I said, 'I can't make Tuesdays'.  ",
            url: "",
            type: "",
            action: [],
        },{
            message: "But I'll tell you what I love doing more than anything: trying to pack myself in a small suitcase. I can hardly contain myself.  ",
            url: "",
            type: "",
            action: [],
        },{
            message: "I went to the Chinese restaurant and this duck came up to me with a red rose and says 'Your eyes sparkle like diamonds'. I said, 'Waiter, I asked for a-ROMATIC duck'.  ",
            url: "",
            type: "",
            action: [],
        },{
            message: "So this bloke says to me, 'Can I come in your house and talk about your carpets?' I thought, 'That's all I need, a Je-hoover's witness'.  ",
            url: "",
            type: "",
            action: [],
        },{
            message: "I rang up British Telecom, I said, 'I want to report a nuisance caller', he said 'Not you again'.  ",
            url: "",
            type: "",
            action: [],
        },{
            message: "I was having dinner with a world chess champion and there was a check tablecloth. It took him two hours to pass me the salt.  ",
            url: "",
            type: "",
            action: [],
        },{
            message: "He said, 'You remind me of a pepper-pot', I said 'I'll take that as a condiment'.  ",
            url: "",
            type: "",
            action: [],
        },{
            message: "I was in the supermarket and I saw this man and woman wrapped in a barcode. I said, 'Are you two an item?'  ",
            url: "",
            type: "",
            action: [],
        },{
            message: "A lorry-load of tortoises crashed into a trainload of terrapins, I thought, 'That's a turtle disaster'.  ",
            url: "",
            type: "",
            action: [],
        },{
            message: "Four fonts walk into a bar the barman says 'Oi - get out! We don't want your type in here'  ",
            url: "",
            type: "",
            action: [],
        },{
            message: "A three-legged dog walks into a saloon in the Old West. He slides up to the bar and announces: 'I'm looking for the man who shot my paw.'  ",
            url: "",
            type: "",
            action: [],
        },{
            message: "Two antennas meet on a roof, fall in love and get married. The ceremony wasn't much, but the reception was excellent.",
            url: "",
            type: "",
            action: [],
        },{
            message: "Two hydrogen atoms walk into a bar. One says, 'I've lost my electron.' The other says, 'Are you sure?' The first replies, 'Yes, I'm positive...'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A jumper cable walks into a bar. The bartender says,  'I'll serve you but don't start anything.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A sandwich walks into a bar. The bartender  says, 'Sorry we don't serve food in here.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man walks into a bar with a slab of asphalt under his arm and says: 'A beer please, and one for the road.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Two cannibals are eating a clown. One says to  the other: 'Does this taste funny to you?'",
            url: "",
            type: "",
            action: [],
        },{
            message: "'Doc, I can't stop singing 'The Green, Green Grass of Home.'' 'That sounds like Tom Jones Syndrome.' 'Is it common?' 'It's Not Unusual.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Two cows standing next to each other in a field. Daisy says to Dolly, 'I was artificially inseminated this morning.' 'I don't believe you', said Dolly. 'It's true, no bull!' exclaimed Daisy.",
            url: "",
            type: "",
            action: [],
        },{
            message: "An invisible man marries an invisible woman. The kids were nothing to look at either.",
            url: "",
            type: "",
            action: [],
        },{
            message: "I went to buy some camouflage trousers the other day but I couldn't find any.",
            url: "",
            type: "",
            action: [],
        },{
            message: "I went to the butcher's the other day to bet him 50 bucks that he couldn't reach the meat off the top shelf. He said, 'No, the steaks are too high.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "I went to a seafood disco last week and pulled a mussel.",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man goes into a bar and says, 'Can I have a bottle of less?' 'What's that?', asks the barman, 'Is it the name of a beer?' 'I don't know', replies the man, 'but my doctor says I have to drink it.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man returns from an exotic holiday and is feeling very ill. He goes to see his doctor, and is immediately rushed to the hospital to undergo some tests. The man wakes up after the tests in a private room at the hospital, and the phone by his bed rings. 'This is your doctor. We have the results back from your tests and we have found you have an extremely nasty disease called M.A.D.S. It's a combination of Measles, AIDS, Diphtheria, and Shingles!'  'Oh my gosh', cried the man, 'What are you going to do, doctor?'  'Well we're going to put you on a diet of pizzas, pancakes, and pita bread.' replied the doctor.  'Will that cure me?' asked the man.  The doctor replied, 'Well no, but, it's the only food we can slide under the door.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man strolls into a lingerie shop and asks the assistant: 'Do you have a see-through negligee, size 46-48-52?' The assistant looks bewildered. 'What the heck would you want to see through that for?'!",
            url: "",
            type: "",
            action: [],
        },{
            message: "Did you hear about the Buddhist who refused the offer of Novocain during his root canal work? He wanted to transcend dental medication.",
            url: "",
            type: "",
            action: [],
        },{
            message: "Pete goes for a job on a building site as an odd-job man. The foreman asks him what he can do. 'I can do anything' says Pete. 'Can you make tea?' asks the foreman. 'Sure, yes', replies Pete. 'I can make a great cup of tea.' 'Can you drive a forklift?' asks the foreman, 'Good grief!' replies Pete. 'How big is the teapot?'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Stevie Wonder got a cheese grater for his birthday. He said it was the most violent book he'd ever read.",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man is stopped by an angry neighbour. 'I'd just left the house this morning to collect my newspaper when that evil Doberman of yours went for me!' 'I'm astounded', said the dog's owner. 'I've been feeding that fleabag for seven years and it's never got the paper for me.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man visits his doctor: 'Doc, I think I'm losing it', he says',I'm forever dreaming I wrote Lord Of The Rings.' 'Hmm. One moment', replies the doctor, consulting his medical book. 'Ah yes, now I see... you've been Tolkien in your sleep.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A police officer on a motorcycle pulls alongside a man driving around the M25 in an open-topped sports car and flags him down. The policeman solemnly approaches the car. 'Sir, I'm sorry to tell you your wife fell out a mile back', he says. 'Oh, thank goodness', the man replies. 'I thought I was going deaf.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Two men walking their dogs pass each other in a graveyard. The first man says to the second, 'Morning.' 'No', says the second man. 'Just walking the dog.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A brain went into a bar and said, 'Can I have a pint of lager please, mate?' 'No way', said the barman. 'You're already out of your head.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man walks into a surgery. 'Doctor!' he cries. 'I think I'm shrinking!' 'I'm sorry sir, there are no appointments at the moment', says the physician. 'You'll just have to be a little patient.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A grizzly bear walks into a pub and says, 'Can I have a pint of lager..............................................................................................................................and a packet of crisps please.' To which the barman replies, 'Why the big paws?'",
            url: "",
            type: "",
            action: [],
        },{
            message: "What do you call cheese that isn't yours?  Nacho cheese.",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man is horribly run over by a mobile library. The van screeches to a halt, the man still screaming in agony with his limbs torn apart. The driver's door opens, a woman steps out, leans down and whispers, 'Ssshhhhh...'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A woman goes into a US sporting goods store to buy a rifle. 'It's for my husband', she tells the clerk. 'Did he tell you what gauge to get?' asks the clerk. Are you kidding?' she says. 'He doesn't even know that I'm going to shoot him!'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A couple are dining in a restaurant when the man suddenly slides under the table. A waitress, noticing that the woman is glancing nonchalantly around the room, wanders over to check that there's no funny business going on. 'Excuse me, madam', she smarms, 'but I think your husband has just slid under the table.' 'No he hasn't', the woman replies. 'As a matter of fact, he's just walked in.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "An old man takes his two grandchildren to see the new Scooby-Doo film. When he returns home, his wife asks if he enjoyed himself. 'Well', he starts, 'if it wasn't for those pesky kids...!'",
            url: "",
            type: "",
            action: [],
        },{
            message: "The Olympic committee has just announced that Origami is to be introduced in the next Olympic Games. Unfortunately it will only be available on paper view.",
            url: "",
            type: "",
            action: [],
        },{
            message: "Late one evening, a man is watching television when his phone rings. 'Hello?' he answers. 'Is that 77777?' sounds a desperate voice on other end of the phone. 'Er, yes it is', replies the man puzzled. 'Thank goodness!' cries the caller relieved. 'Can you ring 999 for me? I've got my finger stuck in the number seven.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man strolls into his local grocer's and says, 'Three pounds of potatoes, please.' 'No, no, no', replies the owner, shaking his head, 'it's kilos nowadays, mate...' 'Oh', apologises the man, 'three pounds of kilos, please.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "God is talking to one of his angels. He says, 'Boy, I just created a 24-hour period of alternating light and darkness on Earth.' 'What are you going to do now?' asks the angel. 'Call it a day', says God.",
            url: "",
            type: "",
            action: [],
        },{
            message: "Two tramps walk past a church and start to read the gravestones. The first tramp says, 'Good grief - this bloke was 182!' 'Oh yeah?' says the other.'What was his name?' 'Miles from London.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A bloke walks into work one day and says to a colleague, 'Do you like my new shirt - it's made out of the finest silk and got loads of cactuses over it.' 'Cacti', says the co-worker. 'Forget my tie', says the bloke. 'Look at my shirt!'",
            url: "",
            type: "",
            action: [],
        },{
            message: "1110011010001011111?  010011010101100111011!",
            url: "",
            type: "",
            action: [],
        },{
            message: "What did the plumber say when he wanted to divorce his wife? Sorry, but it's over, Flo!",
            url: "",
            type: "",
            action: [],
        },{
            message: "Two crisps were walking down a road when a taxi pulled up alongside them and said 'Do you want a lift? One of the crisps replied, 'No thanks, we're Walkers!'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Man: (to friend) I'm taking my wife on an African Safari. Friend: Wow! What would you do if a vicious lion attacked your wife? Man: Nothing. Friend: Nothing? You wouldn't do anything? Man: Too right. I'd let the stupid lion fend for himself!",
            url: "",
            type: "",
            action: [],
        },{
            message: "A wife was having a go at her husband. 'Look at Mr Barnes across the road', she moaned. 'Every morning when he goes to work, he kisses his wife goodbye. Why don't you do that?' 'Because I haven't been introduced to her yet', replied her old man.",
            url: "",
            type: "",
            action: [],
        },{
            message: "'Where are you going on holiday?' John asked Trevor. 'We're off to Thailand this year', Trevor replied. 'Oh; aren't you worried that the very hot weather might disagree with your wife?' asked John. 'It wouldn't dare', said Trevor.",
            url: "",
            type: "",
            action: [],
        },{
            message: "Two women were standing at a funeral. 'I blame myself for his death', said the wife. 'Why?' said her friend. 'Because I shot him', said the wife.",
            url: "",
            type: "",
            action: [],
        },{
            message: "A woman goes into a clothes shop, 'Can I try that dress on in the window please?' she asks. 'I'm sorry madam', replies the shop assistant, 'but you'll have to use the changing-rooms like everyone else.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Van Gogh goes into a pub and his mate asks him if he wants a drink. 'No thanks', said Vincent, 'I've got one ear.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A pony walks into a pub. The publican says, 'What's the matter with you?' 'Oh it's nothing', says the pony. 'I'm just a little horse!'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A white horse walks into a bar, pulls up a stool, and orders a pint. The landlord pours him a tall frothy mug and say, 'You know, we have a drink named after you.' To which the white horse replies, 'What, Eric?'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Two drunk men sat in a pub. One says to the other, 'Does your watch tell the time?' 'The other replies, 'No, mate. You have to look at it.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man goes into a pub with a newt sitting on his shoulder. 'That's a nice newt', says the landlord, 'What's he called?' 'Tiny', replies the man. 'Why's that?' asks the landlord. 'Because he's my newt', says the man.",
            url: "",
            type: "",
            action: [],
        },{
            message: "Doctor: I have some bad news and some very bad news. Patient: Well, you might as well give me the bad news first. Doctor: The lab called with your test results. They said you have 24 hours to live. Patient: 24 HOURS! That's terrible!! WHAT could be WORSE? What's the very bad news? Doctor: I've been trying to reach you since yesterday.",
            url: "",
            type: "",
            action: [],
        },{
            message: "Two men are chatting in a pub one day. 'How did you get those scars on your nose?' said one. 'From glasses', said the other. 'Well why don't you try contact lenses?' asked the first. 'Because they don't hold as much beer', said the second.",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man went to the doctor, 'Look doc', he said, 'I can't stop my hands from shaking.' 'Do you drink much?' asked the doctor. 'No', replied the man, 'I spill most of it.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Man goes to the doctor, 'Doctor, doctor. I keep seeing fish everywhere.' 'Have you seen an optician?' asks the doctor. 'Look I told you,' snapped the patient, 'It's fish that I see.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "After a car crash one of the drivers was lying injured on the pavement. 'Don't worry', said a policeman who's first on the scene,' a Red Cross nurse is coming.' 'Oh no', moaned the victim, 'Couldn't I have a blonde, cheerful one instead?'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A policeman walked over to a parked car and asked the driver if the car was licensed. 'Of course it is', said the driver. 'Great, I'll have a beer then', said the policeman.",
            url: "",
            type: "",
            action: [],
        },{
            message: "A policeman stops a woman and asks for her licence. 'Madam', he says, 'It says here that you should be wearing glasses.' 'Well', replies the woman, 'I have contacts.' 'Listen, love', says the copper, 'I don't care who you know; You're nicked!'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A policeman stopped a motorist in the centre of town one evening. 'Would you mind blowing into this bag, sir?' asked the policeman. 'Why?' asked the driver. 'Because my chips are too hot', replied the policeman.",
            url: "",
            type: "",
            action: [],
        },{
            message: "Whizzing round a sharp bend on a country road a motorist ran over a large dog. A distraught farmer's wife ran over to the dead animal. 'I'm so very sorry', said the driver, 'I'll replace him, of course.' 'Well, I don't know', said the farmer's wife, 'Are you any good at catching rats?'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Waiter, this coffee tastes like dirt! Yes sir, that's because it was ground this morning.",
            url: "",
            type: "",
            action: [],
        },{
            message: "Waiter, what is this stuff? That's bean salad sir. I know what it's been, but what is it now?",
            url: "",
            type: "",
            action: [],
        },{
            message: "Waiter: And how did you find your steak sir? Customer: I just flipped a chip over, and there it was!",
            url: "",
            type: "",
            action: [],
        },{
            message: "A guy goes into a pet shop and asks for a wasp. The owner tells him they don't sell wasps, to which the man says, 'Well you've got one in the window.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man goes into a fish shop and says, 'I'd like a piece of cod, please.' Fishmonger says, 'It won't be long sir.' 'Well, it had better be fat then', replies the man.",
            url: "",
            type: "",
            action: [],
        },{
            message: "Man: Doctor, I've just swallowed a pillow. Doctor: How do you feel? Man: A little down in the mouth.",
            url: "",
            type: "",
            action: [],
        },{
            message: "Two goldfish are in a tank. One turns to the other and says, 'Do you know how to drive this thing?'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A tortoise goes to the police station to report being mugged by three snails. 'What happened?' says the policeman. 'I don't know', says the tortoise. 'It was all so quick.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Little girl: Grandpa, can you make a sound like a frog? Grandpa: I suppose so sweetheart. Why do you want me to make a sound like a frog?' Little girl: Because Mum said that when you croak, we're going to Disneyland.",
            url: "",
            type: "",
            action: [],
        },{
            message: "'Is your mother home?' the salesman asked a small boy sitting on the front step of a house. 'Yeah, she's home', the boy said, moving over to let him past. The salesman rang the doorbell, got no response, knocked once, then again. Still no-one came to the door. Turning to the boy, the salesman said, 'I thought you said your mother was home.' The kid replied, 'She is, but I don't live here.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Mother: Why are you home from school so early? Son: I was the only one in the class who could answer a question. Mother: Oh, really? What was the question? Son: Who threw the rubber at the headmaster?",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man's credit card was stolen but he decided not to report it because the thief was spending less than his wife did.",
            url: "",
            type: "",
            action: [],
        },{
            message: "A newly-wed couple had recently opened a joint bank account. 'Darling', said the man. 'The bank has returned that cheque you wrote last week.' 'Great', said the woman. 'What shall I spend it on next?'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man goes into a fish and chip shop and orders fish and chips twice. The shop owner says, 'I heard you the first time.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A tramp approached a well-dressed man. 'Ten pence for a cup of tea, Guv?' He asked. The man gave him the money and after for five minutes said, 'So where's my cup of tea then?'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A neutron walks into a pub. 'I'd like a beer', he says. The landlord promptly serves him a beer. 'How much will that be?' asks the neutron. 'For you?' replies the landlord, 'No charge.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A woman goes to the doctor and says, 'Doctor, my husband limps because his left leg is an inch shorter than his right leg. What would you do in his case?' 'Probably limp, too', says the doc.",
            url: "",
            type: "",
            action: [],
        },{
            message: "Three monks are meditating in the Himalayas. One year passes in silence, and one of them says to the other, 'Pretty cold up here isn't it?' Another year passes and the second monk says, 'You know, you are quite right.' Another year passes and the third monk says, 'Hey, I'm going to leave unless you two stop jabbering!'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A murderer, sitting in the electric chair, was about to be executed. 'Have you any last requests?' asked the prison guard. 'Yes', replied the murderer. 'Will you hold my hand?'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A highly excited man rang up for an ambulance. 'Quickly, come quickly', he shouted, 'My wife's about to have a baby.' 'Is this her first baby?' asked the operator. 'No, you fool', came the reply, 'It's her husband.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A passer-by spots a fisherman by a river. 'Is this a good river for fish?' he asks. 'Yes', replies the fisherman, 'It must be. I can't get any of them to come out.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A man went to visit a friend and was amazed to find him playing chess with his dog. He watched the game in astonishment for a while. 'I can hardly believe my eyes!' he exclaimed. 'That's the smartest dog I've ever seen.' His friend shook his head. 'Nah, he's not that bright. I beat him three games in five.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A termite walks into a pub and says, 'Is the bar tender here?'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A skeleton walks into a pub one night and sits down on a stool. The landlord asks, 'What can I get you?' The skeleton says, 'I'll have a beer, thanks' The landlord passes him a beer and asks 'Anything else?' The skeleton nods. 'Yeah...a mop...'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A snake slithers into a pub and up to the bar. The landlord says, 'I'm sorry, but I can't serve you.' 'What? Why not?' asks the snake. 'Because', says the landlord, 'You can't hold your drink.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Descartes walks into a pub. 'Would you like a beer sir?' asks the landlord politely. Descartes replies, 'I think not' and ping! he vanishes.",
            url: "",
            type: "",
            action: [],
        },{
            message: "A cowboy walked into a bar, dressed entirely in paper. It wasn't long before he was arrested for rustling.",
            url: "",
            type: "",
            action: [],
        },{
            message: "A fish staggers into a bar. 'What can I get you?' asks the landlord. The fish croaks 'Water...'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Two vampires walked into a bar and called for the landlord. 'I'll have a glass of blood', said one. 'I'll have a glass of plasma', said the other. 'Okay', replied the landlord, 'That'll be one blood and one blood lite.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "How many existentialists does it take to change a light bulb?  Two. One to screw it in, and one to observe how the light bulb itself symbolises a single incandescent beacon of subjective reality in a netherworld of endless absurdity, reaching towards the ultimate horror of a maudlin cosmos of bleak, hostile nothingness.",
            url: "",
            type: "",
            action: [],
        },{
            message: "A team of scientists were nominated for the Nobel Prize. They had used dental equipment to discover and measure the smallest particles yet known to man. They became known as 'The Graders of the Flossed Quark...'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A truck carrying copies of Roget's Thesaurus overturned on the highway. The local newspaper reported that onlookers were 'stunned, overwhelmed, astonished, bewildered and dumbfounded.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "'My wife is really immature. It's pathetic. Every time I take a bath, she comes in and sinks all my little boats.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "'How much will it cost to have the tooth extracted?' asked the patient. '50 pounds', replied the dentist. '50 pounds for a few moments' work?!' asked the patient. 'The dentist smiled, and replied, 'Well, if you want better value for money, I can extract it very, very slowly...'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A doctor thoroughly examined his patient and said, 'Look I really can't find any reason for this mysterious affliction. It's probably due to drinking.' The patient sighed and snapped, 'In that case, I'll come back when you're damn well sober!'",
            url: "",
            type: "",
            action: [],
        },{
            message: "Doctor: Tell me nurse, how is that boy doing; the one who ate all those 5p pieces? Nurse: Still no change doctor.",
            url: "",
            type: "",
            action: [],
        },{
            message: "Doctor: Did you take the patient's temperature nurse? Nurse: No doctor. Is it missing?",
            url: "",
            type: "",
            action: [],
        },{
            message: "The other day I sent my girlfriend a huge pile of snow. I rang her up; I said 'Did you get my drift?'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A depressed man turned to his friend in the pub and said, 'I woke up this morning and felt so bad that I tried to kill myself by taking 50 aspirin.' 'Oh man, that's really bad', said his friend, 'What happened?' The first man sighed and said, 'After the first two, I felt better.'",
            url: "",
            type: "",
            action: [],
        },{
            message: "A famous blues musician died. His tombstone bore the inscription, 'Didn't wake up this morning...",                        
            url: "",
            type: "",
            action: [],
        }
    ],
];

// For any other user input
const alternatives = [
    {
        message: "Go on...",
        url: "",
        type: "",
        action: [],
    },
    {
        message: "Try again",
        url: "",
        type: "",
        action: [],
    }
];

export { queries, answers, alternatives }