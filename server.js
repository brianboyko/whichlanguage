// While Ionic has it's own serve capabilities, this code allows for
// use of barebones node, nodemon, and deployment to sites such as Heroku.
// Additionally, by starting the application via this server.js file, 
// I can help keep to a pseudo MVC (MVVM?) style and create models
// outside of the served www directory to connect to the MongoDB. 
// -- BB

//--------------
// REQUIRES
//--------------
// Libraries
var mongoose = require('mongoose'); // some people like the native driver, I think MongoDB (ORM) is easier on development than the native driver (ODM). 
var bodyParser = require('body-parser')
var express  = require('express');
// Local
var configDB = require('./db/config.js'); 
var nodemailer = require('nodemailer');

// -------------
// CONNECTIONS & CONFIGURATION
// -------------
mongoose.connect(configDB.url);
var app = express();
app.use(bodyParser.json());
require('./config/routes.js')(app);

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// -------------
// ROUTING
// -------------

app.use(express.static('www'));

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});