const Category = require('../models/Category.model')

module.exports.categoriesController = {

    getCats: (req, res) => {
        Category.find().then((allCategory) => {
            res.json(allCategory)
        });
    },

    addCats: (req, res) => {
        Category.create({
            name: req.body.name,
            text: req.body.text
        }).then((addCategory) => {
            res.status(201).json(addCategory)
        });
    }
};