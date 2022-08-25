const config = require('../config/db.config')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASS,
    {
        host: config.HOST,
        port: config.PORT,
        dialect: config.DIALECT,
        logging: console.log
    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.airport = require('./airport.model')(sequelize, Sequelize)
// KONFIGURASI RELASIONAL
// Airport has 1 or more runways
// Runway owned by 1 Airport

module.exports = db