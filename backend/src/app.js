const express = require('express')
const cors = require('cors')
const projectRoutes = require('./routes/projectRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', projectRoutes)

module.exports = app
