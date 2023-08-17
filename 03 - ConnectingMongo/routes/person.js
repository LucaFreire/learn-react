const express = require('express')
const PersonController = require('../controllers/PersonController')
const router = express.Router()
const Person = require("../models/Person")

const people = []

router
    .get('/person/get', (req, res) => {
        console.log("get Person");
        return res.status(200).send(people)
    })
    .post('person/post', async (req, res) => {
        const { name, lastname, salary } = req.body;
        console.log("post Person");

        let person = {
            name: name,
            lastname: lastname,
            salary: salary
        }

        const result = await Person.create(person)
        return res.status(200).send(result)
    })

module.exports = router