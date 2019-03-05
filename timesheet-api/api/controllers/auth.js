const { User } = require('../models')
const notifyError = require('../../_utils/notifyError')
const jwt = require('jsonwebtoken')

class AuthController {

    constructor(privateKey) {
        this.privateKey = privateKey;
        this.auth = this.auth.bind(this);
    }

    async auth(req, res) {

        try {
            const credentials = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

            if (!credentials) {
                res.status(400).json(notifyError('No credentials provided'));
                return;
            }
    
            const receivedUser = await User.findOne({ username: credentials.username });
            
            if (!receivedUser) {
                res.status(404).json(notifyError('User not found'));
                return;
            }
    
            if (receivedUser.password !== credentials.password) {
                res.status(400).json(notifyError('Password doesnt match'));
                return;
            }
    
            const user = { username: receivedUser.username, name: receivedUser.name, _id: receivedUser._id, hourValue: receivedUser.hourValue };
            const token = jwt.sign(user, this.privateKey);
    
            res.json({ token });

        } catch (ex) {
            console.log(ex);
            res.status(500).json(notifyError('Internal Error'));
        }
    }

}
module.exports = AuthController