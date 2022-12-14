const User = require('../model/User');
require('dotenv/config');
const { Strategy, ExtractJwt } = require('passport-jwt');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.APP_SECRET
}

module.exports = (passport) => {
    try{
        passport.use(new Strategy(opts, async(payload, done) => {
            await User.findById(payload.user_id)
            .then(async user => {
                if(user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => {
                return done(null, false);
            }); 
        }))
    } catch(err) {
        console.log(err);
    }
    
}