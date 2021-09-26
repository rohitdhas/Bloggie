const express = require('express');
const router = express.Router();
const { localLogin, register } = require('../controllers/userAuthController')
// __________________________Local Auth Routes__________________________

router.post("/login/local", localLogin);
router.post("/register", register);

// __________________________Other Routes__________________________

router.get('/userdata', (req, res) => {
    if (!req.user) res.send({ message: "Not Logged In!", success: false })
    else res.send({ data: req.user, success: true })
})

router.get('/logout', (req, res) => {
    req.logOut();
    res.send({ messagae: "Logged Out!", success: true })
})

module.exports = router;