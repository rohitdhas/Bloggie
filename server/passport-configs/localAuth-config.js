const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;
const passport = require('passport');
const User = require('../Database/Schemas/userSchema');

passport.use(
  new localStrategy((username, password, done) => {
    try {
      User.findOne({ username }, (err, user) => {
        if (err) console.log(err.message)
        if (!user)
          return done(null, false, { message: "User Doesn't Exist❌", status: false });
        bcrypt.compare(password, user.password, (err, res) => {
          if (err) console.log('pass err');
          if (res) {
            return done(null, user);
          } else return done(null, false, { message: "Incorrect Password!❌", status: false });
        });
      });
    } catch (err) {
      console.log(err.message)
    }
  })
);

passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser((id, done) => {
  try {
    User.findById(id, (err, user) => {
      done(err, user);
    })
  } catch (err) {
    console.log(err.message)
  }
});