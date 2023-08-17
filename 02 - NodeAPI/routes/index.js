const bodyParser = require('body-parser')
const get = require('./get')
const post = require('./post')
const desafio = require('./Desafio')

module.exports = (app) => {
    app.use(
        bodyParser.json(), // to read all the post jsons
        get,
        post,
        desafio
    )
}