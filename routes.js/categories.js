const express = require('express');
const categoryRoutes = express.Router();

categoryRoutes.get('/', (req, res) => {
  res.send('Here is the list of all categories.');
});

categoryRoutes.post('/', (req, res) => {
  res.send('A new category has been created.');
});

module.exports = categoryRoutes;
