const express = require('express')
const app = express()
require('./startup/db')();
require('./startup/routes')(app);
const port = 5000;


const server = app.listen(port, () => 
    console.log(`🔥server is running!🔥\nhttp://localhost:${port}`))

module.exports = server