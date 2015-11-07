var User = require('../models/userModel')
var mongoose = require('mongoose');
module.exports = {
  storeUser: function(req, res) {
    context = this; // some people prefer .bind(this);
    console.log("req.email:", req.email);
    console.log("req.tests:", req.tests);
    var myUser = new User({
      email: req.email,
      tests: req.tests
    });
    myUser.save(function(err) {
      if (err) {
        console.log("There's an error:", err);
      } else {
        var confirm = context.getUserByEmail({
          email: req.email
        });
        console.log("Confirmation:", confirm);
      }
    });
  },
  getUserByEmail: function(req, res) {
    console.log(req.email);
    User.findOne({
      "email": req.email
    }, function(err, data) {
      if (err) {
        console.log("There's an error:", err);
      }
      console.log("data", data);
      return data;
      //res.send(data);
    });
  }
}