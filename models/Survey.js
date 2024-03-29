const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0},
  recipients: [recipientSchema],
  // Points to an instance of a User model.
  _user: { type: Schema.Types.ObjectId, ref: 'users'},
  dateSent: Date,
  lastResponded: Date
})

mongoose.model('surveys', surveySchema);
