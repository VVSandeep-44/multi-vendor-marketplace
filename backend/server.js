require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');

const app = express();
const port = 3000;

const homeRoutes = require('./routes/homeRoutes');
const healthRoutes = require('./routes/healthRoutes');

app.use('/', homeRoutes);
app.use('/api/health', healthRoutes);

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();