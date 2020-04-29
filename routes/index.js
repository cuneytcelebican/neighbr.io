var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

/* GET login page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET login page. */
router.get('/how-it-works', function(req, res, next) {
  res.render('how-it-works', { title: 'How It Works' });
});


/* GET request page. */
router.get('/request', function(req, res, next) {
  res.render('request', { title: 'Request' });
});

module.exports = router;
