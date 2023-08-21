const express = require('express')
const Car = require('../routes/Desafio')
const bodyParser = require('body-parser')

module.exports = function(app) {
    app.use(express.json()),
    app.use(bodyParser.json()),
    app.use('/car', Car)
}