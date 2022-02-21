const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receiptSchema = new Schema({
  title: String,
  text: String,
  datePosted: Date
})

mongoose.model('receipts', receiptSchema);
