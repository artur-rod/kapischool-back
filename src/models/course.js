const mongoose = require("../static/database");

const courseSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
    unique: true,
  },
  keywords: {
    type: Array,
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  price: {
    type: "string",
    required: true,
  },
  link: {
    type: "string",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
