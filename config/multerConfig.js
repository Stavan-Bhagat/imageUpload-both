// const multer = require("multer");
// const path = require("path");

// // Set storage engine
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Destination folder where uploaded files will be stored
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // File renaming to avoid name conflicts
//   },
// });

// // Init multer
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 }, // Limit file size to 1MB
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb); // Check file type
//   },
// }).single("image"); // 'image' is the field name in the form data

// function checkFileType(file, cb) {
//   // Allowed file extensions
//   const filetypes = /jpeg|jpg|png|gif/;
//   // Check file extension
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check MIME type
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb("Error: Images only! (JPEG, JPG, PNG, GIF)");
//   }
// }

// module.exports = upload;

//----------------------------------------------- single file
const multer = require('multer');

// Configure multer to store files in memory
const storage = multer.memoryStorage();

// Initialize multer with the configured storage
const upload = multer({ storage: storage });

module.exports = upload;


//-------------------------------------------------multiple file

// const multer = require('multer');

// // Configure multer to store files in memory
// const storage = multer.memoryStorage();

// // Initialize multer with the configured storage for multiple file uploads
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 }, // Limit file size to 1MB (optional)
// }).array('images', 5); // 'images' is the field name in the form data, 5 is the maximum number of files

// module.exports = upload;
