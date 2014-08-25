'use strict';

var chalk = require('chalk');

exports.info = function(req, res, next){
  console.log(chalk.bgRed('-------------------------------------------------------------'));
  console.log(chalk.bold.red('PORT   :'), process.env.PORT);
  console.log(chalk.bold.red('DB     :'), process.env.DB);
  console.log(chalk.bold.red('URL    :'), req.url);
  console.log(chalk.bold.red('VERB   :'), req.method);
  console.log(chalk.bold.red('PARAMS :'), req.params);
  console.log(chalk.bold.red('QUERY  :'), req.query);
  console.log(chalk.bold.red('BODY   :'), req.body);
  console.log(chalk.bold.red('SESSID :'), req.sessionID);
  console.log(chalk.bold.red('SESSION:'), req.session);
  console.log(chalk.bold.red('LOCALS :'), res.locals);
  console.log(chalk.bold.red('HEADER :'), req.headers.cookie);
  console.log(chalk.bgRed('-------------------------------------------------------------'));

  next();
};

