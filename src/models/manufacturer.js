'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: string,
        required: true
    },
    description: {
        type: string
    }
});

module.exports = mongoose.model('Manufacturer', schema);