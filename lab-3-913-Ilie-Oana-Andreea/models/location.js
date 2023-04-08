const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = Schema({
    name: {
        required: true,
        type: String
    },

    city: {
        required: true,
        type: String
    },

    address: {
        required: true,
        type: String
    },

    capacity: {
        required: true,
        type: Number
    },

    description: {
        required: true,
        type: String
    },

    contact: {
        required: true,
        type: String
    }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;