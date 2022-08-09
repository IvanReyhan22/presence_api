const passport = require('passport')
const User = require('../models/user')
const JwtStrategy = require('passport-jwt').Strategy
const { retrieveJwt } = require('../middleware/auth')

const jwtOption = {
    jwtFromRequest: retrieveJwt,
    secretOrKey: process.env.JWT_SECRET
}

const jwtLogin = new JwtStrategy(jwtOption, (payload, done) => {
    User.findById(payload.data._id, (err, user) => {
        if (err) {
            return done(err, false)
        }
        return !user ? done(null, false) : done(null, user)
    })
})

passport.use(jwtLogin)