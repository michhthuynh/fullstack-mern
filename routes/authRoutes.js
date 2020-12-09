const passport = require('passport')

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }), (req, resp) => {
    resp.sendStatus(200)
  })

  app.get('/auth/google/callback', passport.authenticate('google'))
  app.get('/api/current_user', (req, resp) => {
    console.log(req.user)
    resp.send(req.user)
  })
}
