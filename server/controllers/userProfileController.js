const Blog = require('../Database/Schemas/blogSchema');
const User = require('../Database/Schemas/userSchema');

const getBookmarks = (req, res) => {
    const { bookmarks } = req.user;
    Blog.find({ _id: { $in: bookmarks } })
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

module.exports = { getBookmarks, getDrafts, removeBookmark }