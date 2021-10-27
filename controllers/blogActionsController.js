const Blog = require('../Database/Schemas/blogSchema');

const toggleBlogLikes = (req, res) => {
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
}

const toggleBlogBookmarks = (req, res) => {
    const { id } = req.query;
    const { username } = req.user;

    Blog.findOneAndUpdate(
        { _id: id },
        [
            {
                $set: {
                    bookmarkedBy: {
                        $cond: [{ $in: [username, "$bookmarkedBy"] },
                        { $setDifference: ["$bookmarkedBy", [username]] },
                        { $concatArrays: ["$bookmarkedBy", [username]] }
                        ]
                    }
                }
            }
        ]
    ).then(() => res.send({ message: "Bookmarked", success: true }))
        .catch(err => {
            console.log(err)
            res.status(500).end()
        })
}

module.exports = { toggleBlogBookmarks, toggleBlogLikes }