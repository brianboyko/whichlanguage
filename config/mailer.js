var nodemailer = require('nodemailer');


var makeBody = function(req){
  console.log("Making body for ", req.body)
  var salutation = "Hello, " + req.body.first + "!"
  var intro = "We've calculated your scores from our test. Here they are!"
  var c = "C: " + (Math.floor(100 * (req.body.scores.c/7))) + "% ( " + req.body.scores.c + " out of 7 )";
  var cPlusPlus = "C++: " + (Math.floor(100 * (req.body.scores.cPlusPlus/8))) + "% ( " + req.body.scores.cPlusPlus + " out of 8 )";
  var cSharp = "C#: " + (Math.floor(100 * (req.body.scores.cSharp/13))) + "% ( " + req.body.scores.cSharp + " out of 13 )";
  var java = "Java: " + (Math.floor(100 * (req.body.scores.java/14))) + "% ( " + req.body.scores.java + " out of 14 )";
  var javascript = "Javascript: " + (Math.floor(100 * (req.body.scores.javascript/11))) + "% ( " + req.body.scores.javascript + " out of 11 )";
  var objectiveC = "Objective C: " + (Math.floor(100 * (req.body.scores.objectiveC/11))) + "% ( " + req.body.scores.objectiveC + " out of 11 )";
  var php = "PHP: " + (Math.floor(100 * (req.body.scores.php/7))) + "% ( " + req.body.scores.php + " out of 7 )";
  var python = "Python: " + (Math.floor(100 * (req.body.scores.python/9))) + "% ( " + req.body.scores.python + " out of 9 )";
  var ruby = "Ruby: " + (Math.floor(100 * (req.body.scores.ruby/11))) + "% ( " + req.body.scores.ruby + " out of 11 )";
  var closing = "For more information on programming, head to http://carlcheo.com/startcoding. Best of luck!"
  var ending = "Sincerely, Whichlang"
  return salutation + '\n\n' + intro + '\n\n' + c + '\n' + cPlusPlus + '\n' + cSharp + '\n' + java  + '\n' + javascript + '\n' + objectiveC + '\n' + php + '\n' + python + '\n' + ruby + '\n\n' + closing + '\n\n' + ending;
}


module.exports = function(req){
  var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
          user: "whichlang.challenge@gmail.com",
          pass: "mailmailmail"
      }
  });

  var mailOptions = {
    from: "The Whichlang Challenge <whichlang.challenge@gmail.com>", // sender address
  }
  mailOptions.to = req.body.email; // list of receivers
  mailOptions.subject = ("Your Whichlang Scores - " + req.body.first + " " + req.body.last); // Subject line
  mailOptions.text = makeBody(req);

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });

}