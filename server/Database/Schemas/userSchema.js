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
    },
    profileImage: {
        type: String,
        default: 'https://comnplayscience.eu/app/images/notfound.png'
    },
    password: {
        type: String,
        required: true,
    },
    drafts: {
        type: Array,
        default: []
    },
    bookmarks: {
        type: Array,
        default: []
    }
})

const User = mongoose.model('user', UserSchema);
module.exports = User;