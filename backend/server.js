const express = require('express');

const app = express();
const port = 3000;

// Import the home routes
const homeRoutes = require('./routes/homeRoutes');

// Connect the routes to the application
app.use('/', homeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});