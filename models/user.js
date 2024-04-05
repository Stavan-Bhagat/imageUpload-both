// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   city: String,
// });

// module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
}, { strict: true }); 

module.exports = mongoose.model("User", userSchema);
