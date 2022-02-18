const { application } = require('express');
const mongoose = require('mongoose');
const Complaint = mongoose.model('complaints');

module.exports = (app) => {  
  app.get('/api/addsample', (req, res) => {
    let sampleComplaint = new Complaint({
      title: 'Sample title',
      text: 'Sample text'
    })
    sampleComplaint.save();
    res.send(sampleComplaint);
  });

  app.post('/api/complaint/add', (req, res) => {
    const { title, text } = req.body;
    let complaint = new Complaint( {
      title,
      text
    });
    complaint.save();

  })
};
