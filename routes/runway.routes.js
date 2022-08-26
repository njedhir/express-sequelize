const runway = require('../controllers/runway.ctrl')
module.exports = app => {
    app.get('/runways', runway.getAll)
    app.post('/runways', runway.insert)
}