const express = require('express');
const router = express.Router();
const passport = require('passport')
const { localLogin, register } = require('../controllers/userAuthController')
// __________________________Local Auth Routes__________________________

router.post("/login/local", localLogin);
router.post("/register", register);

// __________________________Google OAuth Routes__________________________

router.get('/login/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth-failed', failureMessage: "Auth Failed!" }),
    (req, res) => {
        // Successful authentication, send user data.
        res.redirect('/getUser');
    });

// __________________________Other Routes__________________________

router.get('/userdata', (req, res) => {
    if (!req.user) res.send({ message: "Not Logged In!", success: false })
    else res.send({ data: req.user, success: true })
})

router.get('/auth-failed', (req, res) => {
    res.status(401).send({ message: "Login Failed!", status: false })
})

router.get('/logout', (req, res) => {
    req.logOut();
    res.send({ messagae: "Logged Out!", success: true })
})

module.exports = router;