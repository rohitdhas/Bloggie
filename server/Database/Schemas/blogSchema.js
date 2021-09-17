const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = require('./userSchema');

const Blog = new Schema({
    title: {
        type: String,
        required: true
    },
    markdown: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    bookmarks: {
        type: Number,
        required: true,
        default: 0
    },
    tags: {
        type: Array,
        required: true,
    }
})

module.exports = mongoose.model('Blog', Blog);
