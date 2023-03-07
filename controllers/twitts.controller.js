const Twitt = require('../models/Twitt.model');

module.exports.twittsController = {
    getTwitts: async (req, res) => {
        const twitts = await Twitt.find();
        res.json(twitts);
    },

    getTwittsById: async (req, res) => {
        const twitts = await Twitt.findById( req.params.id )
        .populate('user')
        .populate('likes')
        res.json(twitts)
    },

    addTwitts: async (req, res) => {
        const twitts = await Twitt.create({
            text: req.body.text,
            user: req.body.user,
            likes: req.body.likes
        });
        res.status(201).json(twitts);
    },

    removeTwitts: async (req, res) => {
        const twitts = await Twitt.findByIdAndRemove(req.params.id);
        res.json('deleted');
    }
}