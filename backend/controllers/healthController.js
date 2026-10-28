const getHealth = (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'API is running',
  });
};

module.exports = { getHealth };