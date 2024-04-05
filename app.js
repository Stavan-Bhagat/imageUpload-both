const express = require("express");
// const upload = require("./config/multerConfig"); 
const upload=require("./config/multerConfig");
const uploadRouter = require("./routes/upload");

const {
  connectToMongoDB,
  closeMongoDBConnection,
} = require("./connection/connection");
const insertRouter = require("./routes/insert");
const updateRouter = require("./routes/update");
const deleteRouter = require("./routes/delete");

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
