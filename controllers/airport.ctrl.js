const db = require('../models')
const Airport = db.airport
const Runway = db.Runway

exports.getAll = (req, res) => {
    Airport.findAll({
        include: Runway
    })
        .then(rslt => res.send(rslt))
        .catch(err => res.status(500).send({message: err.message}))
}