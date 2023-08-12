const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const localSchema = new Schema({
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    pais: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },

});

const Local = model('Local', localSchema);

module.exports = Local;