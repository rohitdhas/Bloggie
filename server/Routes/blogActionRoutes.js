const express = require('express');
const router = express.Router();
const Blog = require('../Database/Schemas/blogSchema');

// Route for modifying likes and dislikes of a blog post
router.put('/blog-likes', isAuthenticated, (req, res) => {
    const { id } = req.query;
    const { username } = req.user;

    Blog.findOneAndUpdate(
        { _id: id },
        [
            {
                $set: {
                    likedBy: {
                        $cond: [{ $in: [username, "$likedBy"] },
                        { $setDifference: ["$likedBy", [username]] },
                        { $concatArrays: ["$likedBy", [username]] }
                        ]
                    }
                }
            }
        ]
    ).then(() => res.send({ message: "Liked", success: true }))
        .catch(err => {
            console.log(err)
            res.status(500).end()
        })
})

// Route for modifying bookmarks of a blog post
router.put('/blog-bookmark', isAuthenticated, (req, res) => {
    const { id, bookmark } = req.query;
    const { username } = req.user;
    const action = bookmark ? "$push" : "$pull";

    Blog.findOneAndUpdate({ _id: id }, { action: { bookmarkedBy: username } })
        .then(() => res.send({ success: true }))
        .catch((err) => {
            console.log(err)
            res.status(500).send({ message: "Something went Wrong!" })
        })
})


function isAuthenticated(req, res, next) {
    if (!req.user) return res.status(401).send({ message: "Not Logged in!" });
    else next();
}

module.exports = router;