var User = require('../models/userModel')
var mongoose = require('mongoose');
module.exports = {
  storeUser: function(req, res) {
    context = this; // some people prefer .bind(this);
    console.log("req.body", req.body, "req.data", req.data)
  //   var myUser = new User({
  //     local: {
  //       first: req.data.first,
  //       last: req.data.last,
  //       email: req.data.email
  //     },
  //     scores: req.data.scores
  //   });
  //   myUser.save(function(err) {
  //     if (err) {
  //       console.log("There's an error:", err);
  //     } else {
  //       var confirm = context.getUserByEmail({
  //         email: req.data.email
  //       });
  //       console.log("Confirmation:", confirm);
  //     }
  //   });
  // }
  }
}


