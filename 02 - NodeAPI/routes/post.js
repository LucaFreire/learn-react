const express = require('express')
const router = express.Router()

router
    .post('/api/insert', (req, res) => {
        const { age, name, job, salary } = req.body;

        if (!name || !name || !job || !salary)
            return res.status(400).send({ message: "not valid data" })
        const person = {
            name: name,
            age: age,
            job: job,
            salary: salary,
        }
        console.log(person)
    })

module.exports = router