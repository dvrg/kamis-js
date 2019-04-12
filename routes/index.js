var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET home page. */
router.get('/', async function (req, res, next) {
  var categories = await models.Category.findAll()
  res.render('index', {
    title: 'Express',
    categories: categories
  });
});

module.exports = router;