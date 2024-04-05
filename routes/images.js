// routes/images.js
const express = require('express');
const router = express.Router();
const Image = require('../models/image');

// Route for retrieving an image by ID
router.get('/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.set('Content-Type', image.contentType);
    res.send(image.image);
  } catch (error) {
    console.error('Error retrieving image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
