const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../configs/keys')

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refeshToken, profile, done) => {
    console.log('access token:', accessToken)
    console.log('refesh token:', refeshToken)
    console.log('profile:', profile)
  })
)