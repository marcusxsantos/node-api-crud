'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    manufacturer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manufacturer'
    },
    model: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Model'
    },
    modelyear: {
        type: int,
        required: true
    }
});

module.exports = mongoose.model('Vehicle', schema);
