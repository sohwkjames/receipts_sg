const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complaintSchema = new Schema({
  title: String,
  text: String
})

mongoose.model('complaints', complaintSchema);
