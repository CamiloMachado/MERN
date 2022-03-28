const mongoose = require("mongoose");

const annotationSchema = new mongoose.Schema({
  title: String,
  notes: String,
  priority: Boolean
})

module.exports = new mongoose.model("Annotation", annotationSchema);
