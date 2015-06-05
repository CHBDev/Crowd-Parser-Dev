/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');


module.exports = function(app) {

  // Insert routes below
  app.use('/auth', require('./auth'));

  app.use('/database', require('./database'));

  app.use('/statistics', require('./statistics'));

  app.use('/checkout', require('./checkout'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
