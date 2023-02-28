const Category = require('../models/Category.model')

module.exports.categoriesController = {

    getCats: (req, res) => {
        Category.find().then((allCategory) => {
            res.json(allCategory)
        });
    },

    addCats: (req, res) => {
        Category.create({
            name: req.body.name
        }).then((addCategory) => {
            res.status(201).json(addCategory)
        }); 
    },

    removeCats: (req, res) => {
        Category.findByIdAndRemove(req.params.id).then(() => {
            res.json('deleted')
        })
    }
};