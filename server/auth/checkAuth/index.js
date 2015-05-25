'use strict';

var express = require('express');
var router = express.Router();

var jwt = require('jwt-simple');
var secret = require('../adminlogin/adminloginsecret');

router.post('/', function(req, res, next) {

  if (req.body.token) {
    var admin = jwt.decode(req.body.token, secret.secret);

    if (admin.username === secret.username) {
      res.send('OK');
    } else {
      res.send('NOT OK');
    }
  } else {
    res.send('NOT OK');
  }


});

module.exports = router;
