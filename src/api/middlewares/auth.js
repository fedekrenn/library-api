const { SERVER_SECRET } = require('../../config/config')

const passport = require('passport')
const passportJwt = require('passport-jwt')

const { Strategy: JWTStrategy, ExtractJwt } = passportJwt

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SERVER_SECRET,
    },
    (jwtPayload, cb) => {
      return cb(null, jwtPayload)
    }
  )
)

const isLogged = (req, res, next) => {
  return passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return res
        .status(401)
        .json({ message: 'No estás autorizado para realizar la operación' })
    }
    if (!user) {
      return res
        .status(401)
        .json({ message: 'No estás autorizado para realizar la operación' })
    }
    req.user = user
    next()
  })(req, res, next)
}

module.exports = { isLogged }
