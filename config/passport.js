const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const SECRET_KEY = process.env.SECRET_KEY;
const { User } = require('../models/User');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY
}

passport.use(new JwtStrategy(options, function(jwt_payload, done){

    User.findOne({_id: jwt_payload.sub}, function(err, user) {
        if(err) {
            return done(err, false);
        }
        if(user) {
            return done(null, user);
        }else{
            return done(null, false);
        }
    })
}));