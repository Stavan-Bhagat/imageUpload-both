const mongoose = require("mongoose");

const uri =
  "mongodb+srv://bhagatstavan7:jzh9Or95DYmxArYx@cluster0.efhokdg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "temp";

let isConnected = false;

async function connectToMongoDB() {
  try {
  
    if (!isConnected) {
  
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: dbName,
      });
      isConnected = true;
      console.log("Connected to the MongoDB server");
    }
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}

async function closeMongoDBConnection() {
  try {
    if (isConnected) {
      await mongoose.disconnect();
      isConnected = false;
      console.log("MongoDB connection closed");
    }
  } catch (err) {
    console.error("Error closing MongoDB connection:", err);
    throw err;
  }
}

module.exports = { connectToMongoDB, closeMongoDBConnection };
