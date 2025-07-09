// routes/books.js
const express = require('express');
const bookRoutes = express.Router();

// GET /books
bookRoutes.get('/', (req, res) => {
  console.log('GET request to /books');
  res.send('Here is the list of books!');
});

// POST /books
bookRoutes.post('/', (req, res) => {
  const bookData = req.body;
  console.log('Book received:', bookData);
  res.send('Book has been added!');
});

module.exports = bookRoutes;
