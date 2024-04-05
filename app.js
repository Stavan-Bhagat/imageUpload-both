const express = require("express");
const { connectToMongoDB, closeMongoDBConnection } = require("./connection/connection");
const insertRouter = require("./routes/insert");
const updateRouter = require("./routes/update");
const deleteRouter = require("./routes/delete");
const uploadRouter = require("./routes/upload");
const imagesRouter = require("./routes/images");
const path = require("path"); // Import the 'path' module

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectToMongoDB().catch(console.error);

// Routes
app.use("/insert", insertRouter);
app.use("/update", updateRouter);
app.use("/delete", deleteRouter);
app.use("/upload", uploadRouter);
app.use("/images", imagesRouter);

// Serve static files (HTML, CSS, client-side JavaScript)
app.use(express.static(path.join(__dirname, "public"))); // Assuming your HTML file is in a 'public' directory

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Close MongoDB connection when the app exits
process.on("SIGINT", () => {
  closeMongoDBConnection().then(() => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});
//--------------new

// // app.js
// const express = require('express');
// const { connectToMongoDB, closeMongoDBConnection } = require('./connection/connection');
// const insertRouter = require('./routes/insert');
// const updateRouter = require('./routes/update');
// const deleteRouter = require('./routes/delete');
// const uploadRouter = require('./routes/upload');
// const imagesRouter = require('./routes/images'); // Import the route for individual images
// const allImagesRouter = require('./routes/allImages'); // Import the new route for all images

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Connect to MongoDB
// connectToMongoDB().catch(console.error);

// // Routes
// app.use('/insert', insertRouter);
// app.use('/update', updateRouter);
// app.use('/delete', deleteRouter);
// app.use('/upload', uploadRouter);
// app.use('/images', imagesRouter); // Use the route for individual images
// app.use('/allImages', allImagesRouter); // Use the new route for all images

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // Close MongoDB connection when the app exits
// process.on('SIGINT', () => {
//   closeMongoDBConnection().then(() => {
//     console.log('MongoDB connection closed');
//     process.exit(0);
//   });
// });
