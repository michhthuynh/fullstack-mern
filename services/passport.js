const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../configs/keys')
const mongoose = require('mongoose')
require('../models/User')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleID: profile.id })
    if (existingUser) {
      // we already have a record with the given profile ID
      return done(null, existingUser)
    } else {
      const user = await new User({ googleID: profile.id }).save()
      return done(null, user)
    }
  })
)