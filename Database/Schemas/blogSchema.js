const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Blog = new Schema({
    title: {
        type: String,
        required: true
    },
    snippit: {
        type: String,
        required: true
    },
    markdown: {
        type: String,
    },
    datePosted: {
        type: String,
        default: new Date().toLocaleString()
    },
    writtenBy: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
    },
    published: {
        type: Boolean,
        default: false
    },
    coverImageUrl: {
        type: String,
    },
    likedBy: Array,
    bookmarkedBy: Array
})

module.exports = mongoose.model('Blog', Blog);
