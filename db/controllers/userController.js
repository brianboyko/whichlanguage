var User = require('../models/userModel');
var mongoose = require('mongoose');
module.exports = {
  storeUser: function(req, res) {
    var myUser = new User({
      local: {
        first: req.body.first,
        last: req.body.last,
        email: req.body.email
      },
      scores: req.body.scores
    });
    myUser.save(function(err) {
      if (err) {
        console.log("There's an error:", err);
      } else {
        console.log("Success.");
      }
    });
  }
};