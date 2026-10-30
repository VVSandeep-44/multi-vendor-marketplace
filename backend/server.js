require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');

const app = express();
const port = 3000;

// Import routes
const homeRoutes = require('./routes/homeRoutes');
const healthRoutes = require('./routes/healthRoutes');
const productRoutes = require('./routes/productRoutes');

//Middleware to parse JSON request bodies
app.use(express.json());

//Routes
app.use('/', homeRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/products', productRoutes);

// Start the server after connecting to the database
const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();