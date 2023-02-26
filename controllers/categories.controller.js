module.exports.categoriesController = {

    getCats: (req, res) => {
        res.json('all cats')
    },

    addcats: (req, res) => {
        res.status(201).json(req.body)
    }
};