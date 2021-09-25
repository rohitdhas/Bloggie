const Blog = require('../Database/Schemas/blogSchema');

const errResponse = { message: "Something went wrong!", success: false }
const notAllowedResponse = { message: "Not Allowed!", success: false }

const getOneBlog = (req, res) => {
    const id = req.query.id;
    Blog.findById(id)
        .then(data => res.send({ data, success: true }))
        .catch(err => {
            console.log(err);
            res.status(500).send(errResponse)
        })
}

const createNewBlog = (req, res) => {
    try {
        const blog = new Blog(req.body);
        blog.save();
        res.send({ message: "Blog Created!", success: true })
    } catch (err) {
        console.error(err);
        res.status(500).send(errResponse)
    }
}

const updateBlog = (req, res) => {
    const id = req.query.id;
    const { username } = req.user;
    req.body.datePosted = new Date().toLocaleString();

    Blog.findOneAndReplace({ $and: [{ writtenBy: username }, { _id: id }] }, req.body)
        .then((data) => {
            if (data) {
                res.send({ message: "Document Updated!", success: true })
            } else res.send(notAllowedResponse)
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(errResponse)
        })
}

const deleteBlog = (req, res) => {
    const id = req.query.id;
    const { username } = req.user;
    Blog.findOneAndDelete({ $and: [{ writtenBy: username }, { _id: id }] })
        .then((data) => {
            if (data) {
                res.send({ message: "Document Deleted!", success: true })
            } else res.send(notAllowedResponse)
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(errResponse)
        })
}

const getAllBlogs = (req, res) => {
    Blog.find({ published: true }).sort({ $natural: -1 })
        .then(data => res.send({ data, success: true }))
        .catch(err => {
            console.log(err);
            res.status(500).send(errResponse)
        })
}

const removeDraft = (req, res) => {
    const id = req.query.id;
    const { username } = req.user;

    Blog.findOneAndDelete({ $and: [{ writtenBy: username }, { _id: id }, { published: false }] })
        .then((data) => {
            if (data) {
                res.send({ message: "Draft Deleted!", success: true })
            } else res.send(notAllowedResponse)
        })
        .catch(() => {
            res.status(500).send(errResponse)
        })
}

module.exports = {
    getOneBlog,
    getAllBlogs,
    deleteBlog,
    updateBlog,
    createNewBlog,
    removeDraft
}