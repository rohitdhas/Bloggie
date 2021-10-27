const Blog = require('../Database/Schemas/blogSchema')

const search = async (req, res) => {
    try {
        let results = await Blog.aggregate([
            {
                "$search": {
                    "autocomplete": {
                        "query": `${req.query.term}`,
                        "path": 'title',
                        "fuzzy": {
                            "maxEdits": 1,
                        },
                    },
                },
            },
        ]);
        res.json({ data: results });
    } catch (e) {
        console.log(e)
        res.status(500).send({ message: e });
    }
}

module.exports = search;