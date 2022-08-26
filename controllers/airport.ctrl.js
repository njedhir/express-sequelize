const db = require('../models')
const Airport = db.airport
const Runway = db.runway

exports.getAll = (req, res) => {
    Airport.findAll({
        include: Runway
    })
        .then(rslt => res.send(rslt))
        .catch(err => res.status(500).send({message: err.message}))
}

exports.getRwy = (req, res) => {
    Airport.findOne({
        where: { icao: req.params.icao },
        include: [Runway]
    })
        .then(rslt => res.send(rslt))
        .catch(err => res.status(500).send({message: err.message}))
}

exports.insert = (req, res) => {
    Airport.create(req.body)
        .then(rslt => res.send(rslt))
        .catch(err => res.status(500).send({message: err.message}))
}