const User = require('../models/User.model');

module.exports.usersController = {
    getUsers: async (req, res) => {
        const users = await User.find();
        res.json(users);
    },

    getUsersByid: async (req, res) => {
        const users = await User.findById( req.params.id )
        .populate('saves')
        res.json(users);
    },

    addUsers: async (req, res) => {
        const users = await User.create({
            name: req.body.name,
            saves: req.body.saves
        });
        res.status(201).json(users);
    },

    removeUsers: async (req, res) => {
        const users = await User.findByIdAndRemove(req.params.id);
        res.json("deleted");
    }
}