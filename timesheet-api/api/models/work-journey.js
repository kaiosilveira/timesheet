const mongoose = require('mongoose');

const schema = mongoose.Schema({
    from: {
        type: Number,
        required: true
    },
    to: {
        type: Number,
        required: true
    },
    pause: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    period: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'periods'
    }
});

const WorkJourney = mongoose.model('workJourneys', schema);
module.exports = WorkJourney;