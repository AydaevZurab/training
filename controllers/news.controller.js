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

    getNewsByIdAndCats: (req, res) => {
        res.json(`news by id - ${req.params.id}, all cats`)
    },

    getNewsByIdAndCatsById: (req, res) => {
        res.json(`news by id - ${req.params.newsId} from cats by id - ${req.params.catsId}`)
    },

    addNews: (req, res) => {
        News.create({
            title: req.body.title,
            text: req.body.text
        }).then((addNews) => {
            res.json(addNews)
        })
    }
}