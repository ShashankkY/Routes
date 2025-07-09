// app.js
const express = require('express');
const app = express();
const port = 4000;

// Import the router
const productRoutes = require('./routes/products');

// Middleware: Logging
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // Important!
});

// Use the product routes
app.use('/products', productRoutes);

// Wildcard route (404 handler)
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
