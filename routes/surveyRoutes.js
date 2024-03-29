const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients} = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split('').map((email) => {
        return { email: email.trim() }
      }),
      _user: req.user.id,
      dateSent: Date.now(),
    })
  });
};
