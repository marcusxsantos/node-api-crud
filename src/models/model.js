'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    manufacturer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manufacturer'
    },
    name: {
        type: string,
        required: true
    }
});

module.exports = mongoose.model('Model', schema);