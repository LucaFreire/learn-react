const express = require('express')
const person = require('../routes/person')
const bodyParser = require('body-parser')

module.exports = function(app) {
    app.use(express.json()),
    app.use(bodyParser.json()),
    app.use('/person', person)
}