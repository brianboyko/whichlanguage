var UserController    = require('../db/controllers/userController');

// not sure if this is strictly required here.
// var User              = require('../db/models/userModel');
// var mongoose          = require('mongoose'); 

module.exports = function(app){

  app.post('/api/storeUser', function(req, res){
    UserController.storeUser(req, res)
  });

  app.get('/api/getUserByEmail', function(req, res){
    UserController.getUserByEmail(req, res)
  });

};
