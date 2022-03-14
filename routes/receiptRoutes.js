const { application } = require('express');
const mongoose = require('mongoose');
const Receipt = mongoose.model('receipts');

module.exports = (app) => {  

  app.get('/api/receipts', async (req, res) => {
    const receipts = await Receipt.find({});

    res.send(receipts);
  });

  app.post('/api/receipts', (req, res) => {
    const { title, text } = req.body;
    let receipt = new Receipt( {
      title,
      text,
      datePosted: Date.now()
    });
    receipt.save();

    res.status(201).send()
  })
};
