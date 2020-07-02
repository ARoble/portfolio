const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  firstName: { type: String, unique: true },
  secondName: { type: String },
});

const user = mongoose.model("admins", adminSchema);

module.exports = user;
