const kalkulator = require('../controllers/kalkulator.ctrl')

module.exports = app => {
    app.post('/kalkulator/zakat', kalkulator.hitungZakat)
    app.post('/kalkulator/pph', kalkulator.hitungPph)
}