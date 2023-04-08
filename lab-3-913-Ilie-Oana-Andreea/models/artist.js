const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,

    },

    manager: {
        required: true,
        type: String,

    },

    members: {
        required: true,
        type: String,

    },

    genre: {
        required: true,
        type: String
    },

    category: {
        required: true,
        type: String
    }
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;