const Blog = require('../Database/Schemas/blogSchema');

const getOneBlog = (req, res) => {
    const id = req.query.id;
    Blog.findById(id)
        .then(data => res.send({ data, success: true }))
        .catch(err => {
            console.log(err);
            res.status(500).send({ message: "Something went wrong!", success: false })
        })
}

const createNewBlog = (req, res) => {
    try {
        const blog = new Blog(req.body);
        blog.save();
        res.send({ message: "Blog Created!", success: true })
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Something went wrong!", success: false })
    }
}

const updateBlog = (req, res) => {
    const id = req.query.id;
    const { username } = req.user;
    req.body.datePosted = new Date().toLocaleString();

    Blog.findOneAndReplace({ $and: [{ username }, { _id: id }] }, req.body)
        .then(() => res.send({ message: "Document Updated!", success: true }))
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Something went wrong!", success: false })
        })
}

const deleteBlog = (req, res) => {
    const id = req.query.id;
    const { username } = req.user;
    Blog.findOneAndDelete({ $and: [{ username }, { _id: id }] })
        .then(() => res.send({ message: "Document Deleted!", success: true }))
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Something went wrong!", success: false })
        })
}

const getAllBlogs = (req, res) => {
    Blog.find({ published: true })
        .then(data => res.send({ data, success: true }))
        .catch(err => {
            console.log(err);
            res.end()
        })
}

const removeDraft = (req, res) => {
    const id = req.query.id;
    const { username } = req.user;
    Blog.findOneAndDelete({ $and: [{ username }, { _id: id }, { published: false }] })
        .then(() => res.send({ message: "Draft Deleted!", success: true }))
        .catch(() => {
            res.status(500).send({ message: "Something went wrong!", success: false })
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