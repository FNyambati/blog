/////DEPENDINCIES////////
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var session = require('express-session');

/////////FILES//////////////
var passport = require('./services/passport.js');
var config = require('./config');

var app = express();

//CONNECTIONS TO MONGO AND PORT /////////
var mongoURI = config.MONGO_URI;
var port = config.PORT;
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('POWER LEVEL OVER ' + port + ' GIVE ME YOUR ENERGY');
  app.listen(port, function() {
    console.log("SPIRIT BOMB READY!");

  });
});
