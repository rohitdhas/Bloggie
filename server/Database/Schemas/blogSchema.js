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
        required: true
    },
    datePosted: {
        type: String,
        default: new Date().toLocaleString()
    },
    writtenBy: {
        type: String,
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
    },
    published: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Blog', Blog);
