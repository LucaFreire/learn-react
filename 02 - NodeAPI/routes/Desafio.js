// Desafio: crie uma API para carros, crie os métodos get, post, get por id, put e delete

const express = require('express')
const router = express.Router()
const Car = require('../models/car')
const CarController = require('../controller/CarController')
router
    .get('/get', CarController.getAll)
    .get('/get/:Id', CarController.getById)
    .post('/post', CarController.create)
    .delete('/delete/:Id', CarController.delete)
    .patch('/patch/:Id', CarController.patch)
    
module.exports = router