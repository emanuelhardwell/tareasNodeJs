/*  

*/

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const taskSchema = new schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("tasks", taskSchema);
