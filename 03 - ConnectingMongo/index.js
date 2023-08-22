const express = require('express')
const app = express()
require('./startup/db')();
require('./startup/routes')(app);

const port = 8080;
const server = app.listen(port, () => console.log(`server is running http://localhost:${port}`))

module.exports = server;