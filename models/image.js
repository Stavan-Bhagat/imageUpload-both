// const mongoose = require('mongoose');

// // Define schema for image data
// const imageSchema = new mongoose.Schema({
//   filename: String,
//   path: String
// });

// // Create model from schema
// const Image = mongoose.model('Image', imageSchema);

// module.exports = Image;


//above will stores only filepath andthe name
//-------------------------------- single file

const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  image: Buffer // Store binary data of the image
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;

//============================================multiple file
// const mongoose = require('mongoose');

// const imageSchema = new mongoose.Schema({
//   filename: String,
//   contentType: String,
//   images: [{ 
//     data: Buffer,
//     contentType: String
//   }] // Store multiple binary data of the images
// });

// const Image = mongoose.model('Image', imageSchema);

// module.exports = Image;

