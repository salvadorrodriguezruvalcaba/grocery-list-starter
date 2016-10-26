const express = require('express');
const router = express.Router();

const GroceryModel = require('../models/GroceryModel.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grocery-list');

router.get('/*', (req, res, next) => {
  GroceryModel.find((err, groceries) => {
    res.render('groceries.ejs', {
      groceries: groceries
    });
  });
});

/* POST Create a task. */
router.post('/*', (req, res, next) => {

    var grocery = new GroceryModel({
          code : req.body.code,
          name : req.body.name,
          quantity : req.body.quantity,
          price : req.body.price
    });

    grocery.save((err, item) => {
      res.redirect('/groceries');
    });
});

module.exports = router;
