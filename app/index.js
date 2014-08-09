'use strict';

var port = process.env.PORT;
var db   = process.env.DB;

var express = require('express');
var app = express();

require('./lib/config')(app);
require('./lib/mongodb')(db);
require('./routes/routes')(app, express);

app.listen(port, function(){
  console.log('Express Ready:', port);
});

