const mongoose = require('mongoose')

const Car = mongoose.model('Car', {
    name: String,
    year: Number
})

module.exports = Car