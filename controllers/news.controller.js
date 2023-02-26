module.exports.newsController = {
    getNews: (req, res) => {
        res.json('all news')
    },
    
    getNewsById: (req, res) => {
        res.json(`news by id - ${req.params.id}`)
    },

    getNewsByIdAndCats: (req, res) => {
        res.json(`news by id - ${req.params.id}, all cats`)
    },

    getNewsByIdAndCatsById: (req, res) => {
        res.json(`news by id - ${req.params.newsId} from cats by id - ${req.params.catsId}`)
    },

    addNews: (req, res) => {
        res.status(201).json(req.body)
    }
}