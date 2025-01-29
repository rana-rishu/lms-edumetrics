const mongoose = require("mongoose");

// Review Schema
const reviewSchema = new mongoose.Schema({
  collegeName: { type: String, required: true }, // Added collegeName field
  placement: { type: Number, required: true },
  faculty: { type: Number, required: true },
  infrastructure: { type: Number, required: true },
  reviewText: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Review Model
module.exports = mongoose.model("Review", reviewSchema);
