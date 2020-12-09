const passport = require('passport')

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }), (req, resp) => {
    resp.sendStatus(200)
  })

  app.get('/auth/google/callback', passport.authenticate('google'))

  app.get('/api/logout', (req, resp) => {
    req.logout()
    resp.send(req.user)
  })

  app.get('/api/current_user', (req, resp) => {
    resp.send(req.user)
  })
}
