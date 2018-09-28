'use strict'

const repository  = require('../repositories/vehicle-repository');

exports.post = async(req, res, next) => {
    try {
        repository.create({
            manufacturer: req.body.manufacturer,
            model: req.body.model,
            modelyear: req.body.modelyear
        })
    } catch (e) {
        
    }
};