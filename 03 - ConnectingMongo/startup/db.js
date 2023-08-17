const mongoose = require('mongoose')
const config = require('config')

module.exports = function () {
    const db = config.get('db');
    mongoose.connect(db, { userNewUrlParser: true, usenifiedTopology: true })
        .then(() => console.log(`connected to ${db}`))

}