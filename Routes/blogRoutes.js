const express = require('express');
const router = express.Router();
const { getOneBlog,
    getAllBlogs,
    deleteBlog,
    updateBlog,
    createNewBlog } = require('../controllers/blogController');

// Get one Blog
router.get('/blog', getOneBlog)

// Create a new Blog
router.post('/blog', isAuthenticated, createNewBlog)

// Update a blog
router.put('/blog', isAuthenticated, updateBlog)

// Delete a Blog
router.delete('/blog', isAuthenticated, deleteBlog)

// Get all blogs
router.get('/blogs', getAllBlogs)


function isAuthenticated(req, res, next) {
    if (!req.user) return res.status(401).send({ message: "Not Logged in!" });
    else next();
}

module.exports = router;