const express = require('express');
const app = express();
const port = 3000;

// Basic route
app.get('/home', (req, res) => {
  res.send('Hello World!');
});

// Route parameter with query parameter
app.get('/contact/:userid', (req, res) => {
  const id = req.params.userid;       // Get route param
  const role = req.query.role || 'Guest'; // Get query param (default: Guest)
  res.send(`Hello from Contact Page for user ${id} with role ${role}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
