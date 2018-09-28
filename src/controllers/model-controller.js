'use strict'

const repository = require('../repositories/model-repository');

exports.post = async(req, res, next) => {
    try {

        await repository.create(req.body);

        res.status(200).send({
            message: 'Modelo incluído com sucesso'
        })
    } catch (e) {
        res.status(400).send({
            message: 'Erro ao incluir modelo',
            data: e
        })
    }
}