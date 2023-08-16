const bodyParser = require('body-parser')
const endPoints = require('./endPoints')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        endPoints,
    )
}