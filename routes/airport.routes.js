const airport = require('../controllers/airport.ctrl')
module.exports = app => {
    app.get('/airports', airport.getAll)
}