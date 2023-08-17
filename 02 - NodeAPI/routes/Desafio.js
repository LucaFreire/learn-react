// Desafio: crie uma API para carros, crie os métodos get, post, get por id, put e delete

const express = require('express')
const router = express.Router()

list = []

class Car {
    constructor(id, name, year) {
        this.id = id,
            this.name = name,
            this.year = year
    }
}

router
    .get('/cars/get', (req, res) => {
        return res.status(200).send(list)
    })
    .get('/cars/get/:Id', (req, res) => {
        const { Id } = req.params;

        return res.status(200).send(list.find(element => element.id == Id))
    })
    .post('/cars/post', (req, res) => {
        const { name, year } = req.body;

        const car = new Car(list.length + 1, name, year)

        list.push(car)

        return res.status(200).send("Added")
    })
    .delete('/cars/delete', (req, res) => {
        const { name, year } = req.body;

        const car = new Car(list.length + 1, name, year)

        list.forEach(element => {
            if (element.id == car.id) {
                list.remove(element)
                return res.status(200)
            }
        });
        return res.status(404).send({ message: "car not found" })

    })
    .delete('/cars/delete/:Id', (req, res) => {
        const { id } = req.body;
        list.slice(id, 1)
        return res.status(200)
    })

    .put('/cars/put', (req, res) => {
        const { name, year } = req.body;

        const car = new Car(list.length + 1, name, year)

        for (let i = 0; i < array.length; i++) {
            if (list[i].id == car.id) {
                list[i] = car
                return res.status(200)
            }
        }
        return res.status(404).send({ message: "car not found" })
    })

module.exports = router