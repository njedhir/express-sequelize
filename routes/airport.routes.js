const airport = require('../controllers/airport.ctrl')
module.exports = app => {
    app.get('/airports', airport.getAll)
    app.get('/airports/runways/:icao', airport.getRwy)
    app.post('/airports', airport.insert)
}