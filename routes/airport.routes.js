const auth = require('../middleware/auth')
const airport = require('../controllers/airport.ctrl')
const airportMiddleware = require('../middleware/airport')
module.exports = app => {
    app.get('/airports', [auth.verifyUser], airport.getAll)
    app.get('/airports/runways/:icao', airport.getRwy)
    app.post('/airports', [auth.verifyUser, airportMiddleware.verifyInput], airport.insert)
}