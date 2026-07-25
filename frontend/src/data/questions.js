export const questions = {
  messages: {
    correct: {
      title: [
        "Great job",
        "Excellent job",
        "Wonderful",
        "Marvelous",
        "Amazing",
        "Awesome",
        "Fabulous",
        "Fantastic",
        "Incredible",
      ],
      message: ["Now you can watch"],
    },
    wrong: {
      title: ["Oops"], //['Sorry', 'Oops', 'Wrong', 'Incorrect'],
      message: [
        "I think you are trying a new thing! That is excellent! Try again.",
      ], //['The answer is wrong! Try again.', 'That is incorrect! Try again.']
    },
    empty: {
      title: ["Error"],
      message: ["Please enter the answer to go to the web page"],
    },
    invalid: {
      title: ["Oops", "Wrong", "Incorrect"],
      message: ["The answer is wrong!"],
    },
    quotes: {
      title: ["Quote"],
      message: [
        "We learn from failure, not from success!",
        "It is okay to make mistakes, as long as you learn from them",
        "A mistake is success in progress!",
        "The greatest mistake you can make is to be afraid of making mistake!",
        "Your best teacher is your last mistake!",
        "Mistakes are proof that you are trying!",
        "A person who never made a mistake never tried anything new!",
        "Making mistakes is better than faking perfections!",
        "Failure is the key to success!",
        "Each mistake teaches us something!",
        "A mistake that make you humble is better than an achievement that makes you arrogant!",
        "Mistakes have the power to turn you into something better than you were before!",
      ],
    },
  },

  category: [
    {
      name: "tense",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question: "Tomorrow, I _______ good.",
          image: "/images/thivya1.png",
          choices: ["was", "am", "will be", "were"],
          answer: ["will be"],
        },
        {
          question: "Today ________ friday.",
          choices: ["was", "is", "are", "were"],
          answer: ["is"],
        },
        {
          question: "Yesterday, I _______ science with Mary teacher.",
          choices: ["study", "studied", "will study"],
          answer: ["studied"],
          hint: "The answer is in past tense. The word 'yesterday' indicates that the action happened in the past.",
        },
        {
          question: "Yesterday, I  _______ computer.",
          choices: ["watched", "watch", "will watch"],
          answer: ["watched"],
        },
        {
          question: "Tomorrow, I  _______ good at school.",
          choices: ["am", "was", "will be"],
          answer: ["will be"],
        },
        {
          question:
            "Yesterday, I _______ fish crackers and pepperoni pizza for my breakfast.",
          choices: ["will eat", "eat", "ate"],
          answer: ["ate"],
        },
        {
          question: "Yesterday, I went to the school and _______ the medal.",
          choices: ["will get", "get", "got"],
          answer: ["got"],
        },
        {
          question: "Tomorrow, I _______ the piano at the piano recital.",
          choices: ["will play", "play", "played"],
          answer: ["will play"],
        },
        {
          question: "Tomorrow, appa _______ go to work.",
          choices: ["will not", "did not", "do not", "does not"],
          answer: ["will not"],
        },
        {
          question: "Yesterday, I _______ hit anoyone.",
          choices: ["will not", "did not", "do not", "does not"],
          answer: ["did not"],
        },
        {
          question: "Appa _______ know how to swim.",
          choices: ["will not", "did not", "do not", "does not"],
          answer: ["does not"],
        },
      ],
    },
    {
      name: "connection",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question: "You can get a dvd, __________ you need to study well.",
          choices: [
            "but",
            "otherwise",
            "then",
            "because",
            "so",
            "next",
            "also",
            "while",
          ],
          answer: ["but"],
        },
        {
          question:
            "You have to study well, ___________ you will not get DVDS.",
          choices: [
            "but",
            "otherwise",
            "then",
            "because",
            "so",
            "next",
            "also",
            "while",
          ],
          answer: ["otherwise"],
        },
        {
          question: "First, you study well, __________ we can buy a DVD.",
          choices: [
            "but",
            "otherwise",
            "then",
            "because",
            "so",
            "next",
            "also",
            "while",
          ],
          answer: ["then"],
        },
        {
          question: "You did not study well, _________ you do not get a DVD.",
          choices: [
            "but",
            "otherwise",
            "then",
            "because",
            "so",
            "next",
            "also",
            "while",
          ],
          answer: ["so"],
        },
        {
          question:
            "Theepak is a good singer, __________ he is good with computer.",
          choices: [
            "but",
            "otherwise",
            "then",
            "because",
            "so",
            "next",
            "also",
            "while",
          ],
          answer: ["also"],
        },
        {
          question: "You can not laugh _________ studying.",
          choices: [
            "but",
            "otherwise",
            "then",
            "because",
            "so",
            "next",
            "also",
            "while",
          ],
          answer: ["while"],
        },
        {
          question: "I got angry _________ I lost the game.",
          choices: [
            "but",
            "otherwise",
            "then",
            "because",
            "so",
            "next",
            "also",
            "while",
          ],
          answer: ["because"],
        },
        {
          question: "I got mad _________ shouted loud.",
          choices: [
            "but",
            "and",
            "then",
            "because",
            "so",
            "next",
            "also",
            "while",
          ],
          answer: ["and"],
        },
        {
          question: "I should not get mad _________ no one will like me.",
          choices: [
            "but",
            "otherwise",
            "then",
            "because",
            "so",
            "next",
            "also",
            "while",
          ],
          answer: ["otherwise"],
        },
        {
          question: "I did not get mad today _________ I need a suprise.",
          choices: [
            "but",
            "otherwise",
            "then",
            "because",
            "so",
            "next",
            "also",
            "while",
          ],
          answer: ["so"],
        },
        {
          question:
            "I will not get mad _________ I do not want anyone to hate me.",
          choices: [
            "but",
            "otherwise",
            "then",
            "because",
            "so",
            "next",
            "also",
            "while",
          ],
          answer: ["because"],
        },
        {
          question:
            "I went to the value village, _______ I could not find VHS.",
          choices: [
            "but",
            "otherwise",
            "then",
            "because",
            "so",
            "next",
            "also",
            "while",
          ],
          answer: ["but"],
        },
      ],
    },
    {
      name: "preposition",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question: "Theepak is sitting ______ the chair.",
          answer: ["on"],
          type: "one_word",
        },
        {
          question: "Appa is hiding _______ the table.",
          answer: ["under"],
          type: "one_word",
        },
        {
          question: "The pencil is _______ the box.",
          answer: ["inside", "in"],
          type: "one_word",
        },
        {
          question: "The school starts ______ 8:45 AM.",
          answer: ["at"],
          type: "one_word",
        },
        {
          question: "I have skating class ______ every Thursday.",
          answer: ["on"],
          type: "one_word",
        },
        {
          question: "We go to skating class _______ car.",
          answer: ["by"],
          type: "one_word",
        },
        {
          question: "The cover ______ the DVD is nice",
          answer: ["of"],
          type: "one_word",
        },
        {
          question: "This dvd belongs ______ me",
          answer: ["to"],
          type: "one_word",
        },
        {
          question: "I want to walk myself ______ Lawfield elementary school",
          answer: ["to"],
          type: "one_word",
        },
        {
          question: "I want ________ find Magic Box & Abirami DVD and VCD",
          answer: ["to"],
          type: "one_word",
        },
      ],
    },
    {
      name: "possessive",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question: "I am brushing _____ teeth.",
          answer: ["my"],
          type: "one_word",
        },
        {
          question: "Appa is brushing	_____ teeth.",
          answer: ["his"],
          type: "one_word",
        },
        /*{
					question: 'Amma is brushing	______ teeth.',
					answer: ['her'],
					type: 'one_word'				
				},
				{
					question: 'Thivya is brushing ______ teeth.',
					answer: ['her'],
					type: 'one_word'				
				},
				{
					question: 'They are brushing _______ teeth.',
					answer: ['their'],
					type: 'one_word'				
				},*/
        {
          question: "You are having ______ lunch.",
          answer: ["your"],
          type: "one_word",
        },
        {
          question: "Appa and amma are having	_______	lunch.",
          answer: ["their"],
          type: "one_word",
        },
        {
          question: "He is having	_______	lunch.",
          answer: ["his"],
          type: "one_word",
        },
      ],
    },
    {
      name: "emotions",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question: "Best thing to do when you get mad:",
          choices: ["cry", "shout", "hit someone", "be calm"],
          answer: ["be calm"],
        },
        {
          question: "When someone loses a game, how do they feel?",
          choices: ["mad", "sad", "happy", "surprised"],
          answer: ["sad"],
        },
        {
          question: "What is a bad thing to do when you get angry?",
          choices: [
            "be silent",
            "shout",
            "take a deep breath",
            "think about appa",
          ],
          answer: ["shout"],
        },
        {
          question: "What makes you angry?",
          choices: [
            "making a mistake",
            "feeling hungry",
            "feeling sleepy",
            "getting a gift",
          ],
          answer: ["making a mistake"],
        },
        {
          question: "What makes you angry?",
          choices: ["losing a game", "winning a game", "studying", "watching"],
          answer: ["losing a game"],
        },
        {
          question: "What makes you silly?",
          choices: [
            "losing a game",
            "winning a game",
            "studying",
            "too much watching",
          ],
          answer: ["too much watching"],
        },
        {
          question: "What does not make you angry?",
          choices: [
            "losing a game",
            "making a mistake",
            "do not understand something",
            "someone talk to you",
          ],
          answer: ["someone talk to you"],
        },
      ],
    },
    {
      name: "empathy",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question:
            "Theepak and Tyvion played a game. Theepak won the game. How does Tyvion feel?",
          choices: ["mad", "sad", "happy", "surprised"],
          answer: ["sad"],
        },
        {
          question:
            "Theepak and Tyvion played a game. Tyvion won the game. How does Tyvion feel?",
          choices: ["mad", "sad", "happy", "surprised"],
          answer: ["happy"],
        },
        {
          question:
            'Theepak made a mistake in a math class. Math teacher tried to explain the mistake to Theepak, but Theepak said "I can do it" and did not allow the math teacher to talk. How does math teacher feel?',
          choices: ["mad", "sad", "happy", "proud"],
          answer: ["mad", "sad"],
        },
        {
          question:
            "Theepak made a mistake in a math class. Math teacher explained the mistake to Theepak. Theepak listened to the teacher carefully and tried again after teacher stopped explaining. How does math teacher feel?",
          choices: ["mad", "sad", "happy", "frustrated"],
          answer: ["happy"],
        },
        {
          question:
            "Sithappa fell down from the stairs. Theepak saw that, but he did not care and walked away. How does sithappa feel about Theepak action?",
          choices: ["happy", "sad", "proud"],
          answer: ["sad"],
        },
        {
          question:
            'Sithappa fell down from the stairs. Theepak saw that and helped sithappa to get up and asked "are you ok, sithappa?". How does sithappa feel about Theepak action?',
          choices: ["happy", "sad", "proud"],
          answer: ["happy", "proud"],
        },
        {
          question:
            'One day, Theepak got angry and bit Mrs. P?". How did Mrs.P feel?',
          choices: ["happy", "sad", "proud"],
          answer: ["sad"],
        },
        {
          question:
            'One day, Theepak lost a game at school and said "it is ok to lose, I will try to win next time". How did Madame Jones feel about Theepak behavior?',
          choices: ["mad", "sad", "proud"],
          answer: ["proud"],
        },
        {
          question:
            'One day, Theepak and Mike played a game. Mike won the game. Theepak said "Well played, Mike"? How does Mike feel?',
          choices: ["mad", "sad", "happy"],
          answer: ["happy"],
        },
        {
          question:
            "One day, Theepak and Mike played a game. Mike won the game. Theepak got mad and shouted? How does Mike feel?",
          choices: ["proud", "sad", "happy"],
          answer: ["sad"],
        },
        {
          question:
            "Akka got a low mark for a test and was sad. Theepak should feel ______ for akka?",
          choices: ["sad", "mad", "happy"],
          answer: ["sad"],
        },
        {
          question:
            "Teacher is talking to Theepak. Theepak looking somewhere instead of looking at teacher. How does teacher feel?",
          choices: ["disappointed", "excited", "happy"],
          answer: ["disappointed"],
        },
      ],
    },
    {
      name: "empathy2",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question:
            "Theepak is scared of a roller-coaster ride. How do others fell?",
          choices: ["Scary cat", "It is ok"],
          answer: ["It is ok"],
        },
        {
          question:
            "Theepak do not wait for his turn in  the line and go in front of the line. How do others fell?",
          choices: ["Happy", "Ok", "Bad kid"],
          answer: ["Bad kid"],
        },
        {
          question:
            "Theepak interupts others and talk fast. How do others fell?",
          choices: ["Happy", "Ok", "Sad, because Theepak did not repect them"],
          answer: ["Sad, becuase Theepak did not repect them"],
        },
        {
          question:
            "Theepak keep talking about DVDs and VCDs. How do others fell?",
          choices: [
            "Happy",
            "Ok",
            "Sad, because they think Theepak does not care about them",
          ],
          answer: ["Sad, because they think Theepak does not care about them"],
        },
      ],
    },
    {
      name: "zones",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question: "Which is in the green zone?",
          choices: ["sad", "happy", "upset", "mad"],
          answer: ["happy"],
        },
        {
          question: "Which is in the red zone?",
          choices: ["sad", "happy", "upset", "yelling"],
          answer: ["yelling"],
        },
        {
          question: "Which is in the yellow zone?",
          choices: ["sad", "happy", "upset", "mad"],
          answer: ["upset"],
        },
        {
          question: "Calm belongs to which zone?",
          choices: ["green", "yellow", "red"],
          answer: ["green"],
        },
        {
          question: "Silly belongs to which zone?",
          choices: ["green", "yellow", "red"],
          answer: ["yellow"],
        },
        {
          question: "Mad belongs to which zone?",
          choices: ["green", "yellow", "red"],
          answer: ["red"],
        },
        {
          question: "hitting belongs to which zone?",
          choices: ["green", "yellow", "red"],
          answer: ["red"],
        },
        {
          question: "Which does not belong to red zone?",
          choices: ["mad", "angry", "yelling", "hitting", "calm"],
          answer: ["calm"],
        },
        {
          question: "Which does not belong to yellow zone?",
          choices: ["silly", "frustrated", "upset", "angry"],
          answer: ["angry"],
        },
        {
          question: "Which does not belong to green zone?",
          choices: ["calm", "happy", "okay", "hitting"],
          answer: ["hitting"],
        },
        {
          question: "What can you do to go from red zone to green zone?",
          choices: [
            "think good about yourself",
            "cry",
            "think bad about yourself",
          ],
          answer: ["think good about yourself"],
        },
        {
          question: "What can you do to go from red zone to green zone?",
          choices: ["take deep breaths", "cry", "think bad about yourself"],
          answer: ["take deep breaths"],
        },
      ],
    },
    {
      name: "self-esteem",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question: "You are good at",
          choices: ["swimming", "running", "talking", "requlating emotion"],
          answer: ["swimming"],
        },
        {
          question: "You are good at",
          choices: ["skating", "running", "talking", "requlating emotion"],
          answer: ["skating"],
        },
        /*{
					question: 'You are not good at',
					choices: ['skating', 'swimming', 'technology', 'requlating emotion'],
					answer: ['requlating emotion']				
				},
				{
					question: 'You are not good at',
					choices: ['skating', 'swimming', 'technology', 'talking'],
					answer: ['talking']				
				},*/
        {
          question: "Theepak is better than Thivya in",
          choices: ["writing", "studying", "technology", "talking"],
          answer: ["technology"],
        },
        {
          question: "Thivya is better than Theepak in",
          choices: ["drawing", "swimming", "technology", "skating"],
          answer: ["drawing"],
        },
        {
          question: "Theepak makes mistakes",
          choices: ["often", "sometimes", "never", "always"],
          answer: ["sometimes"],
        },
        {
          question: "Appa makes mistakes",
          choices: ["often", "sometimes", "never", "always"],
          answer: ["sometimes"],
        },
        {
          question: "Akka makes mistakes",
          choices: ["often", "sometimes", "never", "always"],
          answer: ["sometimes"],
        },
        {
          question: "Theepak makes _______ mistakes compared to others.",
          choices: ["more", "less", "equal"],
          answer: ["equal"],
        },
        {
          question: "Theepak has difficulty in talking because he",
          choices: ["does not work hard", "is autistic", "is not smart"],
          answer: ["is autistic"],
        },
      ],
    },
    {
      name: "Math",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question:
            "One DVD is 5 dollars. How do you find the price of 6 DVDs?",
          choices: ["addition", "subtraction", "multiplication", "divison"],
          answer: ["multiplication"],
        },
        {
          question:
            "One DVD is 4 dollars. One VHS is 2 dollars. How do you find the total price?",
          choices: ["addition", "subtraction", "multiplication", "divison"],
          answer: ["addition"],
        },
        {
          question:
            "Theepak has 172 points. He got 10 bad points. How do you find the new total points?",
          choices: ["addition", "subtraction", "multiplication", "divison"],
          answer: ["subtraction"],
        },
        {
          question:
            "Theepak has 172 points. He got 10 good points. How do you find the new total points?",
          choices: ["addition", "subtraction", "multiplication", "divison"],
          answer: ["addition"],
        },
        {
          question:
            "You have 20 dollars. If one DVD is 4 dollars, how do you find how many DVDs that you can buy?",
          choices: ["addition", "subtraction", "multiplication", "divison"],
          answer: ["divison"],
        },
        {
          question:
            "Theepak takes 30 seconds to swim one time. How many seconds will he take to swim 3 times",
          choices: ["30+3", "30-3", "30x3", "30/3"],
          answer: ["30x3"],
        },
        {
          question:
            "First, Theepak took 30 seconds to swim one time. Second time he was 3 seconds faster than before. How many seconds did he take second time?",
          choices: ["30+3", "30-3", "30x3", "30/3"],
          answer: ["30-3"],
        },
        {
          question:
            "There are 4 weeks in one month. There are 5 school days in one week. How many school days are in one month?",
          choices: ["4+5", "4x5", "4-5", "4/5"],
          answer: ["4x5"],
        },
        {
          question:
            "Theepak had 200 dollars in his money bank. He got 10 dollars from Appa for his birthday. He put that 10 dollars also in his money bank. How much money does he have now?",
          choices: ["200+10", "200-10", "200x10", "200/10"],
          answer: ["200+10"],
        },
        {
          question:
            "Theepak had 200 dollars in his money bank. He gave 10 dollars to Akka for her birthday. How much money does he have now?",
          choices: ["200+10", "200-10", "200x10", "200/10"],
          answer: ["200-10"],
        },
        {
          question:
            "Theepak had 200 dollars in his money bank. If one DVD is 10 dollars, how many DVDs can Theepak buy for 200 dollars?",
          choices: ["200+10", "200-10", "200x10", "200/10"],
          answer: ["200/10"],
        },
      ],
    },
    {
      name: "Good manners",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question: "Is it ok to pick nose in front of people?",
          choices: ["yes", "no"],
          answer: ["no"],
        },
        {
          question: "Which is a bad behavior?",
          choices: [
            "talking too loud",
            "talking softly",
            "smiling",
            "thinking before talk",
          ],
          answer: ["talking too loud"],
        },
        {
          question: "Others will appreciate if you?",
          choices: [
            "look at their face when they talk",
            "look somewhere when they talk",
            "make noise when they talk",
            "get mad when they talk",
          ],
          answer: ["look at their face when they talk"],
        },
        {
          question: "Which is not a good behavior?",
          choices: [
            "making mistakes",
            "shouting",
            "feeling sad",
            "feeling mad",
          ],
          answer: ["shouting"],
        },
        {
          question: "Which is a best thing to do?",
          choices: [
            "think before talk",
            "talk fast",
            "talk loud",
            "talk with anger",
          ],
          answer: ["think before talk"],
        },
        {
          question: "What is a reasonable expectation for a math test?",
          choices: ["100", "99", "85", "30"],
          answer: ["85"],
        },
        {
          question: "How should you feel if you get 80/100?",
          choices: ["happy", "sad", "mad", "frustrated"],
          answer: ["happy"],
        },
        {
          question: "How should you feel if you get 30/100?",
          choices: ["happy", "sad", "mad", "ok"],
          answer: ["sad"],
        },
        {
          question: "Which is not a good mark?",
          choices: ["30/100", "80/100", "90/100", "100/100"],
          answer: ["30/100"],
        },
        {
          question:
            "In a science test, 15/30 students got less than 70 marks. You got 71. You should feel?",
          choices: ["happy", "sad", "mad", "ok"],
          answer: ["happy", "ok"],
        },
        {
          question:
            "In a science test, 15/30 students got less than 80 marks. You got 71. You should feel?",
          choices: ["happy", "sad", "mad", "ok"],
          answer: ["sad"],
        },
      ],
    },
    {
      name: "Measurement Units",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question: "1 kg is ______ g.",
          answer: ["1000"],
          type: "one_word",
        },
        {
          question: "4 kg is ______ g.",
          answer: ["4000"],
          type: "one_word",
        },
        {
          question: "2000 g is ______ kg.",
          answer: ["2"],
          type: "one_word",
        },
        {
          question: "5000 g is ______ kg.",
          answer: ["5"],
          type: "one_word",
        },
        {
          question: "3000 g is equal to ______",
          choices: ["3 kg", "3 km", "3 m", "0.3 kg"],
          answer: ["3 kg"],
        },
        {
          question: "300 g is equal to ______",
          choices: ["3 kg", "30 kg", "0.3 kg", "300 kg"],
          answer: ["0.3 kg"],
        },
        {
          question: "3000 mg is equal to ______",
          choices: ["3 g", "3 kg", "0.3 kg", "30 g"],
          answer: ["3 g"],
        },
        {
          question: "3 g is equal to ______",
          choices: ["3000 kg", "3000 mg", "30 mg", "30 kg"],
          answer: ["3000 mg"],
        },
        {
          question: "0.5 kg is equal to ______",
          choices: ["500 g", "50 g", "5 g", "5000 g"],
          answer: ["500 g"],
        },
        {
          question: "0.2 kg is equal to ______",
          choices: ["200 g", "20 g", "2 g", "2000 g"],
          answer: ["200 g"],
        },
      ],
    },
    {
      name: "Measurement price",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question: "1 kg sugar is $4. How much is 5 kg sugar?",
          answer: ["$20"],
          type: "one_word",
        },
        {
          question: "1 kg ice-cream is $10. How much is 3 kg ice-cream?",
          answer: ["$30"],
          type: "one_word",
        },
        {
          question: "1 kg chocolate is $4. How much is 3 kg chocolate?",
          answer: ["$12"],
          type: "one_word",
        },
        {
          question: "100 g ice-cream is $3. How much is 300 g ice-cream?",
          answer: ["$9"],
          type: "one_word",
        },
        {
          question: "100 g ice-cream is $3. How much is 500 g ice-cream?",
          answer: ["$15"],
          type: "one_word",
        },
        {
          question: "100 g ice-cream is $5. How much is 2000 g ice-cream?",
          answer: ["$100"],
          type: "one_word",
        },
        {
          question: "1 kg sugar is $5. How much is 5000 g?",
          answer: ["$25"],
          type: "one_word",
        },
        {
          question: "1 kg sugar is $6. How much is 500 g?",
          answer: ["$3"],
          type: "one_word",
        },
        {
          question: "100 g ice-cream is $2. How much is 3000 g ice-cream?",
          answer: ["$60"],
          type: "one_word",
        },
        {
          question: "100 g ice-cream is $2. How much is 2 kg ice-cream?",
          answer: ["$40"],
          type: "one_word",
        },
        {
          question: "500 g ice-cream is $2. How much is 2000 g ice-cream?",
          answer: ["$8"],
          type: "one_word",
        },
        {
          question: "2000 g ice-cream is $8. How much is 2 kg ice-cream?",
          answer: ["$8"],
          type: "one_word",
        },
      ],
    },
    {
      name: "Problem scale",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question:
            "Appa spelled Magic box & Abirami Presents DVD and VCD incorrectly. What is the scale of this problem?",
          choices: ["tiny", "small", "medium", "big"],
          answer: ["tiny"],
        },
        {
          question:
            "Appa said Magic box & Abirami Nuresery rhymes 2 was release in 2005, instead of 2015. What is the scale of this problem?",
          choices: ["tiny", "small", "medium", "big"],
          answer: ["tiny"],
        },
        {
          question:
            "Appa said he will buy Magic box & Abirami Nuresery rhymes 2, but he did not buy. What is the scale of this problem?",
          choices: ["tiny", "small", "medium", "big"],
          answer: ["small", "tiny"],
        },
        {
          question:
            "Theepak cried a lot in the class. What is the scale of this problem?",
          choices: ["tiny", "small", "medium", "big"],
          answer: ["big"],
        },
        {
          question:
            "Theepak got sad and squeezed Amma. What is the scale of this problem?",
          choices: ["tiny", "small", "medium", "big"],
          answer: ["big"],
        },
        {
          question:
            "In the swimming, Theepak did his best but he could not win. What is the scale of this problem?",
          choices: ["no problem", "small", "medium", "big"],
          answer: ["no problem"],
        },
        {
          question:
            "Theepak did not know the answer to a problem that he study for the first time. What is the scale of this problem?",
          choices: ["no problem", "small", "medium", "big"],
          answer: ["no problem"],
        },
        {
          question:
            "100 mark is perfect, anyting above 80 mark is excellent, anything above 60 mark is good, anything below 50 mark is bad. When should you get upset?",
          choices: [
            "Not getting perfect",
            "Not geting excellent",
            "Not getting good",
            "Getting bad mark",
          ],
          answer: ["Getting bad mark"],
        },
        {
          question:
            "How many people do always get perfect score in all the tests and games?",
          choices: ["No one", "some people", "many people", "Every one"],
          answer: ["No one"],
        },
        {
          question: "People will appreciate if",
          choices: [
            "you do not practise, but win a game",
            "you practise hard, but lose a game",
            "you do not practise and lose a game",
          ],
          answer: ["you practise hard, but lose a game"],
        },
        {
          question: "Which is bad when you learn a new thing?",
          choices: [
            "try to be perfect",
            "ask for help",
            "make mistakes",
            "listen to others before you try",
          ],
          answer: ["try to be perfect"],
        },
      ],
    },
    {
      name: "High scool",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question: "What is an interview?",
          choices: [
            "Theepak ask question others",
            "A group of people ask question. Theepak answers to the questions",
            "A group of people scare Theepak",
            "Theepak behave silly infront of others",
          ],
          answer: [
            "A group of people ask question. Theepak answers to the questions",
          ],
        },
        {
          question: "What is the purpose of interview?",
          choices: [
            "To see if Theepak can do well in high school",
            "To see if Theepak likes Dora",
            "To see if Theepak like DVD",
            "To see if Theepak do math well",
          ],
          answer: ["To see if Theepak can do well in high school"],
        },
        {
          question: "Which is a bad behavior during an interview?",
          choices: [
            "Taking about DVD",
            "Answering to the question",
            "Listen to the questions",
            "Say sorry if you do not understand the question",
          ],
          answer: ["Taking about DVD"],
        },
        {
          question: "What would you say when you meet the interviewers?",
          choices: ["Hi everyone, nice to meet you!", "Nothing", "Hi"],
          answer: ["Hi everyone, nice to meet you!"],
        },
        {
          question: "How would you introduce you?",
          choices: [
            "I am Theepak. I like computers and want to become a computer programmer!",
            "I like DVDs",
            "I like watching and wants to but DVD",
          ],
          answer: [
            "I am Theepak. I like computers and want to become a computer programmer!",
          ],
        },
        {
          question: "What are you excited about going to high school?",
          choices: [
            "Learing new things",
            "Buy DVD",
            "Earn money",
            "Watch computer",
          ],
          answer: ["Learing new things"],
        },
        {
          question: "What are your strengths?",
          choices: [
            "Math, Science and Computer",
            "Language",
            "Math and Language",
            "Presentation",
          ],
          answer: ["Math, Science and Computer"],
        },
        {
          question: "What are your weaknesses (need help with)?",
          choices: ["Language", "Math", "Science", "Computer"],
          answer: ["Language"],
        },
        {
          question: "What are you proud of?",
          choices: [
            "I can teach computer to my dad",
            "I watch dora",
            "I can study",
            "I can play games",
          ],
          answer: ["I can teach computer to my dad"],
        },
        {
          question: "What do you want to do after graduating from high school?",
          choices: [
            "Buy DVD",
            "Earn money",
            "Go to a College or University",
            "Stay home",
          ],
          answer: ["Go to a College or University"],
        },
        {
          question: "What can you do other than studies?",
          choices: [
            "Swim and Skate",
            "Watch dora",
            "Watch computer",
            "Study math",
          ],
          answer: ["Swim and Skate"],
        },
        {
          question: "What is your favourite part of Lawfield?",
          choices: [
            "Good friends and teachers",
            "Watching",
            "Eating lunch",
            "Making noise",
          ],
          answer: ["Good friends and teachers"],
        },
        {
          question: "What would you say if you do not understand the question?",
          choices: [
            "yes",
            "no",
            "I do not know",
            "Sorry! I do not understand the question",
          ],
          answer: ["Sorry! I do not understand the question"],
        },
        {
          question: "What would you say at the end of the meeting?",
          choices: ["Thanks everyone for your time", "Bye", "Hi", "See you"],
          answer: ["Thanks everyone for your time"],
        },
      ],
    } /*,
		{
			name: 'Algebra',
			default_type: 'choice', //one_word, yes_no 
			questions:
			[
				{
					question: 'Write the following in word: <br>      2x + 4 = 6',
					choices: ['two times a number plus four equals to six', 'two times x plus four equals to six', 'x = 1'],
					answer: ['two times a number plus four equals to six']					
				},
				{
					question: 'Find x:   <br>    2x + 4 = 6',
					choices: ['two times a number plus four equals to six', 'two times x plus four equals to six', 'x = 1'],
					answer: ['x = 1']			
				},
				{
					question: 'Use FOIL to solve:  <br>     (x - 2)(2x+3)',
					choices: ['2x^2 + 3x -4x - 6', '2x^2 + 3x - 4x + 6', '2x^2 - 3x +4x - 6', '2x^2 - 3x -4x + 6'],
					answer: ['2x^2 + 3x -4x - 6']						
				},
				{
					question: 'Use FOIL to solve:  <br>     (x + 2)(2x - 3)',
					choices: ['2x^2 + 3x -4x - 6', '2x^2 + 3x - 4x + 6', '2x^2 - 3x +4x - 6', '2x^2 - 3x -4x + 6'],
					answer: ['2x^2 - 3x +4x - 6']						
				},
				{
					question: 'Use FOIL to solve:   <br>    (x - 2)(2x - 3)',
					choices: ['2x^2 + 3x -4x - 6', '2x^2 + 3x - 4x + 6', '2x^2 - 3x +4x - 6', '2x^2 - 3x -4x + 6'],
					answer: ['2x^2 - 3x -4x + 6']						
				},
				{
					question: 'Find x:   <br>    1.2 x + 2 = 5',
					choices: ['x = 1.*3', 'x = 1.2*7', 'x = 3/1.2', 'x = 7/3'],
					answer: ['x = 3/1.2']						
				},
				{
					question: 'Combine like term and simplify: <br>  2a + 3s + 4a - 2s',
					choices: ['6a + s', '6a - s', '6a - 5s', '-2a + s'],
					answer: ['6a + s']						
				},
				{
					question: 'Combine like term, simplify and solve a = 2, s = 3: <br>  2a + 3s + 4a - 2s',
					choices: ['6a + s', '15', '9'],
					answer: ['15']						
				}
			]	
		}*/,
    {
      name: "Being Fast",
      default_type: "choice", //one_word, yes_no
      questions: [
        {
          question:
            "Theepak finished 100 m race in 15.2 s, Appa finsihed race in 15.0 s and Jacob finished the race in 15.8 s. Who is the winner?",
          choices: ["Theepak", "Appa", "Jacob"],
          answer: ["Appa"],
        },
        {
          question:
            "Theepak finished 100 m race in 14.8 s, Appa finsihed race in 15.1 s and Jacob finished the race in 14.7 s. Who is the winner?",
          choices: ["Theepak", "Appa", "Jacob"],
          answer: ["Jacob"],
        },
        {
          question:
            "Theepak finished 100 m race in 14.6 s, Appa finsihed race in 14.8 s and Jacob finished the race in 14.7 s. Who is the winner?",
          choices: ["Theepak", "Appa", "Jacob"],
          answer: ["Theepak"],
        },
        {
          question:
            "In the javlin throw, Theepak threw 13.4 m, Appa threw 14.2 m and Akka threw 11.7 m. Who is the winner?",
          choices: ["Theepak", "Appa", "Akka"],
          answer: ["Appa"],
        },
        {
          question:
            "In the javlin throw, Theepak threw 15.4 m, Appa threw 13.2 m and Akka threw 12.7 m. Who is the winner?",
          choices: ["Theepak", "Appa", "Akka"],
          answer: ["Theepak"],
        },
        {
          question:
            "In a javlin throw competion, everyone threw three times. Theepak threw 10.4 m, 15.2 m and 13.7 m, Araby threw 10.2 m, 13.2 m and 8.9 m, and Connar threw 14.9 m, 13.8 m and 14.6 m. Who is the winner?",
          choices: ["Theepak", "Araby", "Connar"],
          answer: ["Theepak"],
        },
        {
          question:
            "In a javlin throw competion, everyone threw three times. Theepak threw 10.4 m, 13.2 m and 12.7 m, Araby threw 8.2 m, DQ and 6.2 m, and Connar threw 8.1 m, DQ and 13.3 m. Who is the winner? Here DQ means that throw is disqualified and not considered.",
          choices: ["Theepak", "Araby", "Connar"],
          answer: ["Connar"],
        },
        {
          question:
            "In a long jump competion, everyone jump three times. Theepak jumped 2.4 m, 3.2 m and 2.7 m, Araby jumped 1.2 m, DQ and 2.2 m, and Connar jumped 1.1 m, 3.3 m, and DQ. Who is the winner? Here DQ means that throw is disqualified and not considered.",
          choices: ["Theepak", "Araby", "Connar"],
          answer: ["Connar"],
        },
        {
          question:
            "In a long jump competion, everyone jump three times. Theepak jumped DQ, 3.1 m and DQ, Araby jumped 1.2 m, 2.1 and 2.2 m, and Connar jumped 1.1 m, 2.3 m, and 2.6. Who is the winner? Here DQ means that throw is disqualified and not considered.",
          choices: ["Theepak", "Araby", "Connar"],
          answer: ["Theepak"],
        },
        {
          question:
            "In a put shot competion, everyone threw three times. Theepak threw 4.4 m, 4.2 m and 4.7 m, Araby threw 3.2 m, DQ and 1.2 m, and Connar threw 8.1 m, DQ and 6.8 m. Who is the winner? Here DQ means that throw is disqualified and not considered.",
          choices: ["Theepak", "Araby", "Connar"],
          answer: ["Connar"],
        },
        {
          question:
            "In a put shot competion, everyone threw three times. Theepak threw 4.4 m, 4.2 m and 4.7 m, Araby threw 3.2 m, DQ and 1.2 m, and Connar threw 8.1 m, DQ and 6.8 m. Who is the winner? Here DQ means that throw is disqualified and not considered.",
          choices: ["Theepak", "Araby", "Connar"],
          answer: ["Connar"],
        },
        {
          question: "Who got the first place in this race?",
          questionImage: ["images/sport/100m_women.jpg"],
          choices: ["Lane 9", "Lane 4", "Lane 3", "Lane 5"],
          answer: ["Lane 9"],
        },
        {
          question: "Who got the third place in this race?",
          questionImage: ["images/sport/100m_women.jpg"],
          choices: ["Lane 9", "Lane 4", "Lane 3", "Lane 5"],
          answer: ["Lane 5"],
        },
        {
          question: "Who got the first place in this race?",
          questionImage: ["images/sport/100m_men.gif"],
          choices: [
            "Yellow t-shirt",
            "Blue t-shirt",
            "Brown t-shirt",
            "Green t-shirt",
          ],
          answer: ["Yellow t-shirt"],
        },
        {
          question: "Who got the second place in this race?",
          questionImage: ["images/sport/100m_men.gif"],
          choices: [
            "Yellow t-shirt",
            "Blue t-shirt",
            "Brown t-shirt",
            "Green t-shirt",
          ],
          answer: ["Blue t-shirt"],
        },
      ],
    },
  ],
};

questions.category.forEach((category) => {
  const cleanCategory = category.name.toLowerCase().replace(/\s+/g, "_");

  category.questions.forEach((question, index) => {
    if (!question.id) {
      question.id = `${cleanCategory}_${String(index + 1).padStart(3, "0")}`;
    }

    if (!question.topic) {
      question.topic = cleanCategory;
    }

    if (!question.difficulty) {
      question.difficulty = 1;
    }
  });
});
