const News = require("../models/News.model")

module.exports.newsController = {
    getNews: async (req, res) => {
      const news = await News.find()

      res.json(news)
    },

    getNewsById: (req, res) => {
        News.findById(req.params.id)
        .populate('category')
        .then((data) => {
            res.json(data)
        })
    },

    getNewsByCat: (req, res) => {
        News.find({ category: req.params.id })
        .populate('category')
        .then((data) => {
            res.json(data)
        })
    },

    addNews: (req, res) => {
        News.create({
            title: req.body.title,
            text: req.body.text,
            category: req.body.category
        }).then((data) => {
            res.status(201).json(data)
        })
    },

    removeNews: (req, res) => {
        News.findByIdAndRemove(req.params.id).then(() => {
            res.json('deleted')
        })
    },
    
    updateNews: (req, res) => {
        News.findByIdAndUpdate(req.params.id, 
        {
            title: req.body.title,
            text: req.body.text
        }, 
        { new: true }
        ).then((data) => {
            res.json(data)
        })
    }
};