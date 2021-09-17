require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Mongoose Connected!")
})
    .catch(err => console.log(err))