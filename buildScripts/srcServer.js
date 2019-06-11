/* Comment out to replace with ES6 scripts
var express = require('express');
var path = require('path');
var open = require('open');
*/

//import express1 from 'express';
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

/* Comment out to replace with ES6 scripts
var port = 3000;
var app = express();
*/
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
  //console.log("For debugging");
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
    console.log("opening webpage...");
    }
  });
