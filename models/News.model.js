const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    title: String,
    text: String
});

const News = mongoose.model('News', newsSchema)

module.exports = News;