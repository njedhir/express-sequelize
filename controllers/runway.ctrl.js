const db = require('../models')
const Runway = db.runway

exports.getAll = (req, res) => {
    Runway.findAll()
        .then(rslt => res.send(rslt))
        .catch(err => res.status(500).send({message: err.message}))
}

exports.insert = (req, res) => {
    Runway.create(req.body)
        .then(rslt => res.send(rslt))
        .catch(err => {
            console.log(err.message)
            res.status(500).send({message: 'There\'s something wrong with the server. Please try again!'})
        })
}