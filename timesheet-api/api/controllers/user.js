const { User } = require('../models'),
    mongoose = require('mongoose'),
    notifyError = require('../../_utils/notifyError');

class UserController {

    async list(req, res) {
        try { 
            const users = await User.find();
            res.json(users);
        } catch (ex) {
            console.log(ex);
            res.status(500).json(notifyError('Internal error'));
        }
    }

    async get(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                res.status(404).json(notifyError('User not found'));
            }
            res.json(user);
        } catch (ex) {
            console.log(ex);
            res.status(500).json(notifyError('Internal error'));
        }
    }
}

module.exports = UserController;