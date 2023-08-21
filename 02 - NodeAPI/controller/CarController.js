const Car = require('../models/car')

class CarController {
    static async getAll(req, res) {
        try {
            const data = await Car.find()
            return res.status(200).send(data)
        } catch (error) {
            res.status(400).send({ error: error })
        }
    }

    static async getById(req, res) {
        const { Id } = req.params;
        if (!Id)
            return res.status(400).send({ message: "Id is Null" })

        try {
            const data = await Car.findById(Id)
            return res.status(200).send(data)
        } catch (error) {
            return res.status(400).send({ error: error })
        }
    }

    static async create(req, res) {
        const { name, year } = req.body;

        const car = {
            name: name,
            year: year
        }
        if (!car.name || !car.year)
            return res.status(400).send({ message: "Invalid Input!" })

        try {
            const content = await Car.create(car)
            return res.status(200).send(content)
        } catch (error) {
            res.status(400).send({ error: error })
        }

        return res.status(200).send("Added")
    }

    static async delete(req, res) {
        const Id = req.params;
        if (!Id)
            return res.status(400).send({ message: 'Id is Null!' })

        try {
            const content = await Car.findByIdAndRemove(Id)
            return res.status(200).send(content)
        } catch (error) {
            return res.status(400).send({ error: error })
        }
    }

    static async patch(req, res) {
        const Id = req.params;
        if (!Id)
            return res.status(400).send({ error: "Id is Null!" })

        const car = req.body
        if (!car.name || !car.year)
            return res.status(400).send({ error: "Invalid Input!" })

        try {
            const content = await Car.findByIdAndUpdate(Id, car)
            return res.status(200).send(content)
        } catch (error) {
            return res.status(400).send({ error: error })
        }
    }
}

module.exports = CarController