'use strict'

const mongoose = require('mongoose');
const Vehicle = mongoose.model('../models/vehicle.js');

exports.create = async(data) => {
    const model = new Vehicle(data);
    return await model.save()
};