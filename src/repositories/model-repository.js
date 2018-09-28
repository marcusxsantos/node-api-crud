'use strict'

const mongoose = require('mongoose');
const Model = mongoose.model('../models/model');

exports.create = async(data) => {
    var model = new Model(data);
    return await model.save();
};