const Blog = require('../Database/Schemas/blogSchema');
const User = require('../Database/Schemas/userSchema');

const getProfile = (req, res) => {
    const username = req.query.username;
    let safeData = {};

    User.findOne({ username })
        .then((data) => {
            if (!data) res.status(404).send({ message: "No User Found!", success: false })
            else {
                safeData = {
                    username: data.username,
                    name: data.name,
                    profileImage: data.profileImage,
                    email: data.email
                }

                Blog.find({ $and: [{ writtenBy: username }, { published: true }] }, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        safeData.blogs = data;
                        res.send({ data: safeData, success: true })
                    }
                })
            }
        })
        .catch(err => res.status(500).end())
}

const getBookmarks = (req, res) => {
    const { username } = req.user;
    Blog.find({ bookmarkedBy: { $in: username } })
        .then(data => res.send({ data }))
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
}

const getDrafts = (req, res) => {
    const { username } = req.user;
    Blog.find({ $and: [{ username }, { published: false }] })
        .then(data => res.send({ data }))
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
}

const removeBookmark = (req, res) => {
    const { username } = req.user;
    const id = req.query.id;

    User.updateOne({ username }, { $pull: { bookmarks: id } })
        .then((data) => {
            res.send({ message: "Bookmark Removed!", success: true, data })
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
}

module.exports = { getProfile, getBookmarks, getDrafts, removeBookmark }