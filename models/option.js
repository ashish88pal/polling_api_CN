const mongoose = require('mongoose');

// Create the Option Schema
const OptionSchema = new mongoose.Schema({

    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    text: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
    },
    link_to_vote: {
        type: String
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Option', OptionSchema);

