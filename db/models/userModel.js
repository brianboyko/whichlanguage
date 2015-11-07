var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  local: {
    first: String,
    last: String,
    email: String
  },
  scores: {
    c: Number,
    cPlusPlus: Number,
    cSharp: Number,
    java: Number,
    javascript: Number,
    objectiveC: Number,
    php: Number,
    python: Number,
    ruby: Number
  }
});

module.exports = mongoose.model('User', userSchema);
