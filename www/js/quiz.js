module.exports = [
    // questions[0] 
    {
      'prompt': 'Why do you want to learn programming?',
      'answers': [
        //questions[0].answers[0] 
        {
          'text': 'I want to be able to learn alongside my kids',
          'addScore': function(score){
            score.python += 3;
            return score;
          }
        },
        {
          'text': 'Just for fun',
          'addScore': function(score){
            score.python += 1;
            score.javascript += 1;
            score.ruby += 1;
            return score;
          }
        },
        {
          'text': 'Looking to improve myself',
          'addScore': function(score){
            score.python += 1;
            score.javascript += 1;
            score.java += 1;
            return score;
          }
        },
        {
          'text': 'Interested in programming concepts',
          'addScore': function(score){
            score.python += 1;
            score.c += 1;
            score.java += 1;
            return score;
          }
        },
        {
          'text': 'To help with scientific research',
          'addScore': function(score){
            score.python += 2;
            score.java += 1;
            return score;
          }
        }
      ]
    },
    {
    // questions[1] 
      'prompt': 'What are you most likely to want to program?',
      'answers': [
        {
        //questions[1].answers[0]
          'text': 'Front-End Web',
          'addScore': function(score){
            score.javascript += 3;
            return score;
          }
        },
        {
          'text': 'Back-End Web',
          'addScore': function(score){
            score.php += 2;
            score.ruby += 1;
            return score;
          }
        },
        {
          'text': 'Full-Stack Web (Both front and back end)',
          'addScore': function(score){
            score.php += 1;
            score.javascript += 2;
            return score;
          }
        },
        {
          'text': 'Gaming (or 3D)',
          'addScore': function(score){
            score.cPlusPlus += 3;
            return score;
          }
        },
        {
          'text': 'Mobile Apps',
          'addScore': function(score){
            score.objectiveC += 1;
            score.java += 2;
            return score;
          }
        },
        {
          'text': 'Windows Desktop Apps',
          'addScore': function(score){
            score.cPlusPlus += 3;
            return score;
          }
        },
        {
          'text': 'Macintosh Desktop Apps',
          'addScore': function(score){
            score.objectiveC += 3;
            return score;
          }
        },
      ]
    },
    // questions[2] 
    {
      'prompt': 'What\'s your favorite toy?',
      'answers': [
        {
          //questions[2].answers[0]
          'text': 'Lego',
          'img': 'lego.jpg',
          'addScore': function(score){
            score.python += 2;
            score.javascript +=1;
            return score;
          }
        },
        {
          'text': 'Play-Doh',
          'img': 'playdoh.jpg',
          'addScore': function(score){
            score.javascript += 1;
            score.ruby += 2;
            return score;
          }
        },
        {
          'text': 'Hot Wheels Cars',
          'img': 'hotwheels.jpg',
          'addScore': function(score){
            score.cPlusPlus += 1;
            score.c += 1;
            return score;
          }
        },
        {
          'text': 'Transformers',
          'img': 'transformers.jpg',
          'addScore': function(score){
            score.python += 1;
            score.c += 1;
            score.javascript += 1;
            return score;
          }
        },
        {
          'text': 'Erector Set / Meccano',
          'img': 'erector.jpg',
          'addScore': function(score){
            score.java += 1;
            score.c += 1;
            score.cPlusPlus += 1;
            return score;
          }
        },
        {
          'text': 'An old and ugly teddybear but I\'ve had it since I was a little kid and love it.',
          'img': 'teddybear.jpg',
          'addScore': function(score){
            score.c += 1;
            score.php += 1;
            return score;
          }
        },
      ]
    },
    {
      // questions[3] 
      'prompt': 'What type of car are you most likely to buy next?',
      'answers': [
        {
          //questions[3].answers[0]
          'text': 'Toyota Corolla sedan (with automatic transmission)',
          'img': 'toyota.jpg',
          'addScore': function(score){
            score.python += 1;
            score.javascript += 1;
            score.ruby += 1;
            return score;
          }
        },
        {
          'text': 'Chevrolet Camero (with six speed manual transmission)',
          'img': 'chevy.jpg',
          'addScore': function(score){
            score.cPlusPlus += 1;
            score.c += 1;
            score.cSharp += 1;
            return score;
          }
        },
        {
          'text': 'Ford F150 Truck',
          'img': 'ford.jpg',
          'addScore': function(score){
            score.cPlusPlus += 1;
            score.java += 2;
            return score;
          }
        },
        {
          'text': 'A reliable 1989 Dodge Aries',
          'img': 'kcar.jpg',
          'addScore': function(score){
            score.php += 2;
            score.c += 1;
            return score;
          }
        }
      ]
    },
    {
      // questions[4] 
      'prompt': 'How do you learn best',
      'answers': [
        {
          //questions[4].answers[0]
          'text': 'I like to have a good understanding of the fundimentals before I try creating things.',
          'addScore': function(score){
            score.cPlusPlus += 1;
            score.c += 1;
            score.cSharp += 1;
            score.objectiveC += 1;
            score.java += 1;
            return score;
          }
        },
        {
          'text': 'I like to do things right away and learn the fundimentals after I see what they can do.',
          'addScore': function(score){
            score.python += 1;
            score.javascript += 1;
            score.ruby += 1;
            score.php +=1;
            return score;
          }
        }
      ]
    },
    {
      // questions[5] 
      'prompt': 'Where do you want your program to run',
      'answers': [
        {
          //questions[5].answers[0]
          'text': 'On a Windows desktop or server',
          'addScore': function(score){
            score.cSharp += 3;
            return score;
          }
        },
        {
          'text': 'On a Macintosh',
          'addScore': function(score){
            score.objectiveC += 3;
            return score;
          }
        },
        {
          'text': 'on a smartphone/tablet',
          'addScore': function(score){
            score.objectiveC += 2;
            score.java += 2;
            return score;
          }
        },
        {
          'text': 'Somewhere in "the cloud"',
          'addScore': function(score){
            score.ruby += 2;
            score.javascript += 2;
            return score;
          }
        },
        {
          'text': 'I want my code to run everywhere',
          'addScore': function(score){
            score.java += 2;
            score.javascript += 1;
            return score;
          }
        }
      ]
    },
    {
      // questions[6] 
      'prompt': 'Do you have a smartphone?',
      'answers': [
        {
          //questions[6].answers[0]
          'text': 'no',
          'addScore': function(score){
            // do nothing.
            return score;
          }
        },
        {
          'text': 'I have an iPhone',
          'addScore': function(score){
            score.objectiveC += 3;
            return score;
          }
        },
        {
          'text': 'I have an Android phone',
          'addScore': function(score){
            score.java += 3;
            return score;
          }
        },
        {
          'text': 'I have a Windows phone. (No really! I do!)',
          'addScore': function(score){
            score.cSharp += 3;
            return score;
          }
        }
      ]
    },
    {
      // questions[7] 
      'prompt': 'Finally, Which of these Middle Earth characters do you identify with most?',
      'answers': [
        {
          //questions[7].answers[0]
          'text': 'Gandalf: Wants peace and works with everyone.',
          'img': 'gandalf.jpg',
          'addScore': function(score){
            score.java += 2;
            score.javascript += 1;
            return score;
          }
        },
         {
          'text': 'Gandalf: Wants peace and works with everyone.',
          'img': 'lotr-gandalf.jpg',
          'addScore': function(score){
            score.java += 2;
            score.javascript += 1;
            return score;
          }
        },
         {
          'text': 'Treebeard: Help little hobbits',
          'img': 'lotr-treebeard.jpg',
          'addScore': function(score){
            score.python += 2;
            score.javascript += 1;
            return score;
          }
        },
         {
          'text': 'The One Ring/Sauron: Your power is known to all.',
          'img': 'lotr-onering.jpg',
          'addScore': function(score){
            score.c += 2;
            score.cPlusPlus += 1;
            return score;
          }
        },
         {
          'text': 'Saruman: Everyone thinks he\'s the good guy, but he\'s really all about power',
          'img': 'lotr-saruman.jpg',
          'addScore': function(score){
            score.cPlusPlus += 2;
            score.c += 1;
            return score;
          }
        },
         {
          'text': 'Samwise Gamgee: Frequently underestimated & seeks the simple life of the shire.',
          'img': 'lotr-samwise.jpg',
          'addScore': function(score){
            score.javascript += 2;
            score.ruby += 1;
            return score;
          }
        },
         {
          'text': 'Galadriel: Beautiful but likes to say in isolation in her forest.',
          'img': 'lotr-galadriel.jpg',
          'addScore': function(score){
            score.cSharp += 2;
            score.objectiveC += 1;
            return score;
          }
        },
         {
          'text': 'Boromir: Emotional, and a good guy, but sometimes it feels like he wants to run things. ',
          'img': 'lotr-boromir.jpg',
          'addScore': function(score){
            score.ruby += 2;
            score.python += 1;
            return score;
          }
        },
         {
          'text': 'Thorin Oakenshield: Inconsistant and unpredictable, but powerful.',
          'img': 'lotr-thorin.jpg',
          'addScore': function(score){
            score.php += 2;
            score.javascript += 1;
            return score;
          }
        },
         {
          'text': 'Smaug: Lonely, loves gold, sense of superiority (which is perhaps justified)',
          'img': 'lotr-smaug.jpg',
          'addScore': function(score){
            score.objectiveC += 2;
            score.cSharp += 1;
            return score;
          }
        },
      ]
    }
  ]