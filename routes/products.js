// routes/products.js
const express = require('express');
const productRoutes = express.Router();

// GET /products
productRoutes.get('/', (req, res) => {
  res.send('Here is the list of all products.');
});

// POST /products
productRoutes.post('/', (req, res) => {
  res.send('A new product has been added.');
});

module.exports = productRoutes;
