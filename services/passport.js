const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  // user.id here points to the mongo db's ID of the user record
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
  }, 
  (accessToken, refreshToken, profile, done) => {
    // this function fires when user logs into google auth
    
    const user = User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if (existingUser) {
          console.log('Existing user found');
          done(null, existingUser);
        } else {
          console.log('Creating new user');
          new User({ 
            googleId: profile.id,
            name: profile.displayName
          }).save()
            .then(user => done(null, user))
        }
      })
  })
);