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
// import cluster from 'cluster';

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

app.get('/users', function(req, res) {
  //Hard coding API for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bbb@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Shun","lastName":"Tanaka","email":"caster@gmail.com"}
  ]);
  console.log("For debugging");

});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
    console.log("opening webpage...");
    }
  });
