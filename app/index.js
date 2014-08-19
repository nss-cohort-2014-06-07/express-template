'use strict';

var port    = process.env.PORT,
    db      = process.env.DB,
    express = require('express'),
    app     = express();

require('./lib/config')(app);
require('./lib/mongodb')(db);
require('./routes/routes')(app, express);

app.listen(port, function(){
  console.log('Express: Port', port);
});

