const express = require('express');
const router = express.Router();
const { toggleBlogLikes, toggleBlogBookmarks } = require('../controllers/blogActionsController');

// Route for modifying likes and dislikes of a blog post
router.put('/blog-likes', isAuthenticated, toggleBlogLikes)

// Route for modifying bookmarks of a blog post
router.put('/blog-bookmarks', isAuthenticated, toggleBlogBookmarks)


function isAuthenticated(req, res, next) {
    if (!req.user) return res.status(401).send({ message: "Not Logged in!" });
    else next();
}

module.exports = router;