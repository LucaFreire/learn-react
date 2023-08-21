const express = require('express')
const app = express()
const routes = require('./routes')

require('./startup/db')();
require('./startup/routes')(app);
const port = 5000;
routes(app)

const server = app.listen(port, () => 
    console.log(`🔥server is running!🔥\nhttp://localhost:${port}`))

module.exports = server