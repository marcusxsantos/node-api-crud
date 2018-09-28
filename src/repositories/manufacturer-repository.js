'use strict'

const mongoose = require('mongoose');
const Manufacturer = mongoose.model('../models/manufacturer.js');

exports.create = async(data) => {
    const model = new Manufacturer(data);
    return await model.save();
};