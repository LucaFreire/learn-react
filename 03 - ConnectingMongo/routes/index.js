const bodyParser = require('body-parser')
const person = require('./person')

module.exports = (app) => {
    app.use(
        bodyParser, person

    )
}
