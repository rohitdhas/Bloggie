const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zcz95G9y-0CjNqLvB8fP-UKzjZqzVeEGOe9EUBuIdJqnGT5u8_aKiyNhIiM4zWj4VQc&usqp=CAU'
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('user', UserSchema);
module.exports = User;