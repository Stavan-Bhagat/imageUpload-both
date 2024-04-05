// routes/allImages.js
const express = require('express');
const router = express.Router();
const Image = require('../models/image');

// Route for retrieving all images
router.get('/', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error('Error retrieving images:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
