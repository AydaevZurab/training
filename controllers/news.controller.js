const News = require("../models/News.model")

module.exports.newsController = {
    getNews: (req, res) => {
        News.find().then((allNews) => {
            res.json(allNews)
        })
    },
    
    getNewsById: (req, res) => {
        News.findById(req.params.id).then((newsId) => {
            res.json(newsId)})
    },

    addNews: (req, res) => {
        News.create({
            title: req.body.title,
            text: req.body.text
        }).then((addNews) => {
            res.status(201).json(addNews)
        })
    }
};