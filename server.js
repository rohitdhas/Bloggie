// __________________________ IMPORTS __________________________
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser");
const userAuthRoutes = require("./Routes/userAuthRoutes");
const blogRoutes = require('./Routes/blogRoutes')
const userProfileRoutes = require('./Routes/userProfileRoutes');
const blogActionRoutes = require('./Routes/blogActionRoutes');
const searchRoutes = require('./Routes/searchRoutes');
const path = require('path');
const app = express();

require('./passport-configs/localAuth-config');

// __________________________ DB Connection __________________________

require('./Database/DbConnection');

// __________________________ MIDDLEWARES __________________________
app.use(express.json());
app.use(express.static("client/build"));
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true
    })
);

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: false,
        resave: true,
        store: MongoStore.create({ mongoUrl: process.env.DB_URI }),
    })
);

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(passport.initialize());
app.use(passport.session());

// __________________________ ROUTES __________________________

app.use('/api', userAuthRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api', userProfileRoutes);
app.use('/api', blogActionRoutes)
app.use('/api', searchRoutes)

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// ____________________________________________________________

app.listen(process.env.PORT || 4040, (err) => {
    if (err) console.log(err.message);
    else console.log(`App is running on Port ${process.env.PORT}!`);
});