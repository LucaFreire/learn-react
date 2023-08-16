const express = require('express')
const router = require('./routes')
const app = express()

router(app)

const port = 5000;
const server = app.listen(port, () => 
    console.log(`🔥server is running!🔥\nhttp://localhost:${port}`))
module.exports = server

