var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  local: {
    email        : String
  },
  tests: {
    'C'          : Number,
    'C++'        : Number,
    'C#'         : Number,
    'Java'       : Number,
    'Javascript' : Number,
    'Objective-C': Number,
    'Python'     : Number,
    'PHP'        : Number,
    'Ruby'       : Number
  } // stores test results  
});

module.exports = mongoose.model('User', userSchema);
