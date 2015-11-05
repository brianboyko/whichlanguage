var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  local: {
    email: String
  },
  tests: {
    type: Array // stores test results
  }
});

module.exports = mongoose.model('User', userSchema);
