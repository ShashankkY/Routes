// app.js
const express = require('express');
const app = express();
const port = 4000;

// Middleware to parse JSON data
app.use(express.json());

// Import and use the books router
const bookRoutes = require('./routes/books');
app.use('/books', bookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
