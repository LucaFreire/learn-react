const Person = require("../models/Person")

class PersonController {

    static async getAll(req, res) {
        console.log("get Person");
        try {
            const peoplee = await Person.find();
            return res.status(200).send(peoplee);
        } catch (error) {
            return res.status(500).send({ error: error })
        }
    }

    static async createPerson(req, res) {
        console.log("post Person");
        const { name, lastname, salary } = req.body;

        let person = {
            name: name,
            lastname: lastname,
            salary: salary
        }
        try {
            const result = await Person.create(person)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ error: error })
        }
    }

    static async getById(req, res) {
        const { Id } = req.params;
        try {
            const content = await Person.findById(Id);
            return res.status(200).send(content)
        } catch (error) {
            return res.status(500).send({ message: error })
        }
    }

    static async patch(req, res) {
        console.log('patch person');
        const { Id } = req.params;
        if (!Id)
            return res.status(400).send({ message: "Id is Null" })

        const newPerson = req.body;
        if (!newPerson.salary || !newPerson.name || !newPerson.lastname)
            return send.status(400).send({ meesage: "Invalid Input" })

        try {
            const person = await Person.findByIdAndUpdate(Id, newPerson)
            return res.status(200).send(person)
        } catch (error) {
            return res.status(500).send({ error: error })
        }
    }

    static async delete(req, res) {
        console.log('delete person');
        const { Id } = req.params;
        if (!Id)
            return res.status(400).send({ message: "Id is Null" })

        try {
            await Person.findByIdAndRemove(Id)
            return res.status(200).send({ message: "Removed" })
        } catch (error) {
            return res.status(500).send({ error: error })
        }
    }
}

module.exports = PersonController