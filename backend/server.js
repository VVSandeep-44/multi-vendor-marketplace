const express = require('express');

const app = express();
const port = 3000;

// Import the home routes
const homeRoutes = require('./routes/homeRoutes');
const healthRoutes = require('./routes/healthRoutes');

// Connect the routes to the application
app.use('/', homeRoutes);
app.use('/api/health', healthRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});