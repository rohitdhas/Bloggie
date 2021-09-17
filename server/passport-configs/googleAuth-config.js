require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    // find user in db using id
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
},
    function (accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
    }
));

// function extractProfile(profile) {
//     let imageUrl = '';
//     if (profile.photos && profile.photos.length) {
//     imageUrl = profile.photos[0].value;
//     }
//     return {
//     id: profile.id,
//     displayName: profile.displayName,
//     image: imageUrl,
//     };
// }