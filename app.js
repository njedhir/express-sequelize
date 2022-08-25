// Inisiasi
require('dotenv').config()
const express = require('express')

// Config
const port = process.env.PORT

// Sequelize
const db = require('./models')
db.sequelize.sync().then(() => {
    console.log('Sequelize initialized')
})

// Instansiasi
const app = express()

app.use(express.json())
require('./routes/kalkulator.routes')(app)
require('./routes/airport.routes')(app)
app.listen(port)
console.log('Server is ready on port', port)
