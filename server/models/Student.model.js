const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required",
  },
  birthdate: {
    type: Date,
  },
  year_lvl: {
    type: Number,
  },
  section: {
    type: String,
  },
  password: {
    type: String,
    required: "Password is required",
  },
  contact: {
    type: String,
  },
});

module.exports = mongoose.model('Student', StudentSchema)