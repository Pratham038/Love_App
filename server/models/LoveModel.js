const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const loveSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  percent: {
    type: Number,
    required: true,
  },
});

//builds collection
module.exports = mongoose.model("Love", loveSchema);
