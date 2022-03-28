const mongoose = require("mongoose");

const dbConnect = mongoose.connect('mongodb://localhost:27017/annotationsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = dbConnect;
