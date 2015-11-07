angular.module('starter.quiz', [])

.factory('Quiz', function(){

  var questions = [
    // questions[0] 
    {
      'prompt': 'Why do you want to learn programming?',
      'name': 'q1',
      'answers': [
        //questions[0].answers[0] 
        {
          'text': 'I want to be able to learn alongside my kids',
          'value': {'python':3}
        },
        {
          'text': 'Just for fun',
          'value': {'python':1, 'javascript': 1, 'ruby': 1}
        },
        {
          'text': 'Looking to improve myself',
          'value': {'python':1, 'javascript': 1, 'java': 1}
        },
        {
          'text': 'Interested in programming concepts',
          'value': {'python':1, 'c': 1, 'java': 1}
        },
        {
          'text': 'To help with scientific research',
          'value': {'python':2, 'java': 1}
        }
      ]
    },
    {
    // questions[1] 
      'prompt': 'What are you most likely to want to program?',
      'name': 'q2',
      'answers': [
        {
        //questions[1].answers[0]
          'text': 'Front-End Web',
          'value': {'javascript': 3}
        },
        {
          'text': 'Back-End Web',
          'value': {'ruby':2, 'php': 1}
        },
        {
          'text': 'Full-Stack Web (Both front and back end)',
          'value': {'php':1, 'javascript': 2}
        },
        {
          'text': 'Gaming (or 3D)',
          'value': {'cPlusPlus': 3}
        },
        {
          'text': 'Mobile Apps',
          'value': {'objectiveC':1, 'java': 2}
        },
        {
          'text': 'Windows Desktop Apps',
          'value': {'cSharp': 3}
        },
        {
          'text': 'Macintosh Desktop Apps',
          'value': {'objectiveC': 3}
        },
      ]
    },
    // questions[2] 
    {
      'prompt': 'What was your favorite toy as a child?',
      'name': 'q3',
      'answers': [
        {
          //questions[2].answers[0]
          'text': 'Lego',
          'img': 'lego.jpg',
          'value': {'python':2, 'javascript': 1}
        },
        {
          'text': 'Play-Doh',
          'img': 'playdoh.jpg',
          'value': {'ruby':2, 'javascript': 1}
        },
        {
          'text': 'Hot Wheels Cars',
          'img': 'hotwheels.jpg',
          'value': {'c':2, 'cPlusPlus': 1}
        },
        {
          'text': 'Transformers',
          'img': 'transformers.jpg',
          'value': {'python':1, 'c': 1, 'javascript': 1}
        },
        {
          'text': 'Erector Set / Meccano',
          'img': 'erector.jpg',
          'value': {'java':1, 'c': 1, 'cPlusPlus': 1}
        },
        {
          'text': 'An old and ugly teddybear but I\'ve had it since I was a little kid and love it.',
          'img': 'teddybear.jpg',
          'value': {'c': 1, 'php': 2}
        },
      ]
    },
    {
      // questions[3] 
      'prompt': 'What type of car are you most likely to buy next?',
      'name': 'q4',
      'answers': [
        {
          //questions[3].answers[0]
          'text': 'Toyota Corolla sedan (with automatic transmission)',
          'img': 'toyota.jpg',
          'value': {'javascript':1, 'python': 1, 'ruby': 1}
        },
        {
          'text': 'Chevrolet Camero (with six speed manual transmission)',
          'img': 'chevy.jpg',
          'value': {'c':1, 'cPlusPlus': 1, 'cSharp': 1}
        },
        {
          'text': 'Ford F150 Truck',
          'img': 'ford.jpg',
          'value': {'java':2, 'cPlusPlus': 1}
        },
        {
          'text': 'A reliable 1989 Dodge Aries',
          'img': 'kcar.jpg',
          'value': {'php':2, 'c': 1}
        }
      ]
    },
    {
      // questions[4] 
      'prompt': 'How do you learn best?',
      'name': 'q5',
      'answers': [
        {
          //questions[4].answers[0]
          'text': 'I like to have a good understanding of the fundimentals before I try creating things.',
          'value': {'c':1, 'cPlusPlus': 1, 'cSharp': 1, 'objectiveC': 1, 'java': 1}
        },
        {
          'text': 'I like to do things right away and learn the fundimentals after I see what they can do.',
          'value': {'python':1, 'javascript': 1, 'php': 1, 'ruby': 1}
        }
      ]
    },
    {
      // questions[5] 
      'prompt': 'Where do you want your program to run?',
      'name': 'q6',
      'answers': [
        {
          //questions[5].answers[0]
          'text': 'On a Windows desktop or server',
          'value': {'cSharp':3}
        },
        {
          'text': 'On a Macintosh',
          'value': {'objectiveC':3}
        },
        {
          'text': 'on a smartphone/tablet',
          'value': {'objectiveC':2, 'java': 1}
        },
        {
          'text': 'Somewhere in "the cloud"',
          'value': {'ruby':2, 'javascript': 2}
        },
        {
          'text': 'I want my code to run everywhere',
          'value': {'java':2, 'javascript': 1}
        }
      ]
    },
    {
      // questions[6] 
      'prompt': 'Do you have a smartphone?',
      'name': 'q7',
      'answers': [
        {
          'text': 'I have an iPhone',
          'value': {'objectiveC':3}
        },
        {
          'text': 'I have an Android phone',
          'value': {'java':3}
        },
        {
          'text': 'I have a Windows phone. (No really! I do!)',
          'value': {'cSharp':3}
        },
        {
          //questions[6].answers[0]
          'text': 'I don\'t have a smartphone',
          'value': {} // no value
        },
      ]
    },
    {
      // questions[7] 
      'prompt': 'Finally, which of these Middle Earth characters do you identify with most?',
      'name': 'q8',
      'answers': [
         {
          'text': 'Gandalf: Wants peace and works with everyone.',
          'img': 'lotr-gandalf.jpg',
          'value': {'java':2, 'javascript': 1}
        },
         {
          'text': 'Treebeard: Help little hobbits',
          'img': 'lotr-treebeard.jpg',
          'value': {'python':2, 'javascript': 1}
        },
         {
          'text': 'The One Ring/Sauron: Your power is known to all.',
          'img': 'lotr-onering.jpg',
          'value': {'c':2, 'cPlusPlus': 1}
        },
         {
          'text': 'Saruman: Everyone thinks he\'s the good guy, but he\'s really all about power',
          'img': 'lotr-saruman.jpg',
          'value': {'cPlusPlus':2, 'c': 1}
        },
         {
          'text': 'Samwise Gamgee: Frequently underestimated & seeks the simple life of the shire.',
          'img': 'lotr-samwise.jpg',
          'value': {'javascript':2, 'ruby': 1}
        },
         {
          'text': 'Galadriel: Beautiful but likes to say in isolation in her forest.',
          'img': 'lotr-galadriel.jpg',
          'value': {'cSharp':2, 'objectiveC': 1}
        },
         {
          'text': 'Boromir: Emotional, and a good guy, but sometimes it feels like he wants to run things. ',
          'img': 'lotr-boromir.jpg',
          'value': {'ruby':2, 'python': 1}
        },
         {
          'text': 'Thorin Oakenshield: Inconsistant and unpredictable, but powerful.',
          'img': 'lotr-thorin.jpg',
          'value': {'php':2, 'javascript': 1}
        },
         {
          'text': 'Smaug: Lonely, loves gold, sense of superiority (which is perhaps justified)',
          'img': 'lotr-smaug.jpg',
          'value': {'objectiveC':2, 'cSharp': 1}
        },
      ]
    }    
  ]

    return {
      all: function() {
        return questions;
      },
      get: function(questionIndex) {
        return questions[questionIndex];
      }
    }
})

