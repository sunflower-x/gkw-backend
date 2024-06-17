const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  password: {
    // unselect
    type: String,
  }
});


const User = new mongoose.model("User", userSchema);
module.exports = User;
