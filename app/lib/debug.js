'use strict';

var chalk = require('chalk');

exports.info = function(req, res, next){
  console.log(chalk.bgRed('-------------------------------------------------------------'));
  console.log(chalk.bold.red('TIME   :'), chalk.bold.blue(new Date()));
  console.log(chalk.bold.red('PORT   :'), process.env.PORT);
  console.log(chalk.bold.red('DB     :'), process.env.DB);
  console.log(chalk.bold.red('URL    :'), req.url);
  console.log(chalk.bold.red('VERB   :'), req.method);
  console.log(chalk.bold.green('PARAMS :'), req.params);
  console.log(chalk.bold.green('QUERY  :'), req.query);
  console.log(chalk.bold.green('BODY   :'), req.body);
  console.log(chalk.bold.green('LOCALS :'), res.locals);
  console.log(chalk.bold.green('SESSION:'), req.session);
  console.log(chalk.bold.red('SESSID :'), req.sessionID);
  console.log(chalk.bold.red('HEADERS:'), req.headers.cookie);
  console.log(chalk.bgRed('-------------------------------------------------------------'));

  next();
};

