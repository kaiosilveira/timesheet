const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    hourValue: {
        type: Number,
        required: true
    },
});

const User = mongoose.model('users', schema);

module.exports = User;