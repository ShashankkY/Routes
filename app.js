const express = require('express');
const app = express();
const productRoutes = require('./routes.js/products');
const categoryRoutes = require('./routes.js/categories');

app.use(express.json());

// Mount routes
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

// Wildcard route for undefined paths
app.use( (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
