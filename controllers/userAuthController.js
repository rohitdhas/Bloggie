const passport = require('passport')
const bcrypt = require('bcrypt');
const User = require('../Database/Schemas/userSchema')

const localLogin = (req, res, next) => {
    if (req.user) return res.send({ message: "Already Logged In!", success: false });
    else {
        passport.authenticate("local", (err, user, info) => {
            if (err) throw err;
            if (!user) res.send(info);
            else {
                req.logIn(user, (err) => {
                    if (err) throw err;
                    res.send({ message: "Logged In!", success: true });
                });
            }
        })(req, res, next);
    }
}

const register = (req, res) => {
    if (req.user) return res.send({ message: "Already Logged In!", success: false });
    else {
        const { name, email, username, password } = req.body;
        try {
            User.findOne({ $or: [{ username }, { email }] }, async (err, doc) => {
                if (err) {
                    res.status(500).send({ message: "Something Went Wrong!", success: false });
                };
                if (doc) res.send({ message: "Username or Email already exist!", success: false });
                else {
                    const hashedPassword = await bcrypt.hash(password, 10);
                    const newUser = User({
                        name,
                        email,
                        username,
                        password: hashedPassword,
                    });
                    await newUser.save();
                    res.send({ message: "Account Created✅", success: true });
                }
            });
        } catch (err) {
            console.log(err.message);
        }
    }
}

module.exports = {
    localLogin, register
}
