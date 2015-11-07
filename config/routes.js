var UserController    = require('../db/controllers/userController');
var mailer = require('./mailer.js');
// not sure if this is strictly required here.
// var User              = require('../db/models/userModel');
// var mongoose          = require('mongoose'); 

module.exports = function(app){

  app.post('/api/storeUser', function(req, res){
    mailer(req);
    UserController.storeUser(req, res);
  });

};
