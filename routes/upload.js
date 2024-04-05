// const express = require("express");
// const router = express.Router();
// const upload = require("../config/multerConfig");

// // Define route handlers
// router.post("/", upload, async (req, res) => {
//   // Handle file upload logic
//   res.send("File uploaded successfully");
// });

// module.exports = router;
//-----------------------
//-----------------------------------for file path and name only
// const express = require('express');
// const router = express.Router();
// const upload = require('../config/multerConfig');
// const Image = require('../models/image'); // Import the Image model

// // Define route handler
// router.post('/', upload, async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }

//     const { filename, path } = req.file;

//     // Save image data to MongoDB
//     const image = new Image({ filename, path });
//     await image.save();

//     res.status(201).json({ message: 'Image uploaded successfully', image });
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;

//======================================== correct code binary info stores
// const express = require('express');
// const router = express.Router();
// const upload = require('../config/multerConfig');
// const Image = require('../models/image');

// router.post('/', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }

//     // Create a new image document
//     const image = new Image({
//       filename: req.file.originalname,
//       contentType: req.file.mimetype,
//       image: req.file.buffer // Store binary data
//     });

//     // Save the image to the database
//     await image.save();

//     res.status(201).json({ message: 'Image uploaded successfully', image });
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;
//-------------------------------------------------------
const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const Image = require('../models/Image');
const fs = require('fs'); // Require the 'fs' module for file system operations

router.post('/', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Save the file to the upload folder
    const filePath = `uploads/${req.file.originalname}`;
    fs.writeFileSync(filePath, req.file.buffer);

    // Create a new image document
    const image = new Image({
      filename: req.file.originalname,
      contentType: req.file.mimetype,
      path: filePath, // Save the file path in the database
      image: req.file.buffer // Save the binary data in the database
    });

    // Save the image data to the database
    await image.save();

    res.status(201).json({ message: 'Image uploaded successfully', image });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

