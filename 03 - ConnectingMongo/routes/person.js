const express = require('express')
const PersonController = require('../controller/personController')
const router = express.Router()

router
    .get('/get', PersonController.getAll)
    .get('/get/:Id', PersonController.getById)
    .post('/post', PersonController.createPerson)
    .patch('/patch/:Id', PersonController.patch)
    .delete('/delete/:Id', PersonController.delete)

module.exports = router