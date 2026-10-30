const Product = require('../models/Product');

// Create a new product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      message: 'Product created successfully',
      product,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed to create product',
      error: error.message,
    });
  }
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve products',
      error: error.message,
    });
  }
};

module.exports = { createProduct, getProducts };