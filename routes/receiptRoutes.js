const { application } = require('express');
const mongoose = require('mongoose');
const Receipt = mongoose.model('receipts');

module.exports = (app) => {  
  app.get('/api/addsample', (req, res) => {
    let sampleReceipt = new Receipt({
      title: 'Sample title',
      text: 'Sample text'
    });
    sampleReceipt.save();
    res.send(sampleReceipt);
  });

  app.post('/api/receipts/add', (req, res) => {
    const { title, text } = req.body;
    console.log('req.body: ', req.body);
    let receipt = new Receipt( {
      title,
      text,
      date: Date.now()
    });
    receipt.save();
    res.status(201).send()
  })
};
