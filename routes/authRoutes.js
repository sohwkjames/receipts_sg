const { application } = require('express');
const passport = require('passport');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({'Hello!': 'Backend is working!'});
  });
  
  app.get('/hello', (req, res) => {
    res.send({'Another endpoint!': 'This is another endpoint!'});
  });

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
    );  

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    },
  ));
  
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  })
};
