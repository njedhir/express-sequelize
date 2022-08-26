// Inisiasi
require('dotenv').config()
const express = require('express')

// Config
const port = process.env.PORT

// Sequelize
const db = require('./models')
db.sequelize.sync({
    // force: true
}).then(() => {
    console.log('Sequelize initialized')
}).catch(err => console.log(err))

// Instansiasi
const app = express()

app.use(express.json())
require('./routes/kalkulator.routes')(app)
require('./routes/airport.routes')(app)
require('./routes/runway.routes')(app)
app.listen(port)
console.log('Server is ready on port', port)
