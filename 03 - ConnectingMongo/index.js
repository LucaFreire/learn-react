const express = require('express')
const routes = require('./routes')
require('./startup/db')
const app = express()

const port = 8080;
routes(app)
const server = app.listen(port, () => console.log(`server is running http://localhost:${port}`))


module.exports = server;