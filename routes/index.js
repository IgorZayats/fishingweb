var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/fish', function(req, res, next) {
  res.render('fish');
});
router.get('/gallery-page', function(req, res, next) {
  res.render('gallery-page');
});
router.get('/lake', function(req, res, next) {
  res.render('lake');
});
router.get('/peacefull', function(req, res, next) {
  res.render('peacefull');
});
router.get('/predators', function(req, res, next) {
  res.render('predators');
});
router.get('/river', function(req, res, next) {
  res.render('river');
});
router.get('/vereshchitsya', function(req, res, next) {
  res.render('vereshchitsya');
});
router.get('/weather', function(req, res, next) {
  res.render('weather');
});

module.exports = router;
