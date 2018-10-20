const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const riderSchema = new Schema({
  name: { type: String, required: true },
  user: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Rider = mongoose.model("Rider", riderSchema);

module.exports = Rider;
