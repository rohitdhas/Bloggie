const express = require('express');
const router = express.Router();

const { removeDraft } = require('../controllers/blogController');
const { getBookmarks, getDrafts, removeBookmark } = require('../controllers/userProfileController');

router.get('/bookmarks', isAuthenticated, getBookmarks);
router.get('/drafts', isAuthenticated, getDrafts);
router.delete('/bookmark', isAuthenticated, removeBookmark);
router.delete('/draft', isAuthenticated, removeDraft)

function isAuthenticated(req, res, next) {
    if (!req.user) return res.status(401).send({ message: "Not Logged in!" });
    else next();
}

module.exports = router;
