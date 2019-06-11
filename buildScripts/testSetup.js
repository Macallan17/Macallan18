// This file isn't tranpiled, so must use CommonJS and ES5

// Register babel to traspile before our tests run.
require('babel-register')();

// Disable webpack feature that Mocha doesn't understand. index.css require webpack.
require.extensions['.css'] = function() {};
