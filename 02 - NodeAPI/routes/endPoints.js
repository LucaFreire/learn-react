const express = require('express')
const router = express.Router()

router
    .get('/test', (req, res) => {
        res.send("Test End-Point") // send the value to front
        console.log("req test")

    })
    .get('/isPrimeNumber/:number?', (req, res) => { //? number can be null
        console.log("req isPrimeNumber")
        const { number } = req.params
        let isPrime = false

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                res.send(`${number} ${isPrime ? "is Prime" : "is not Prime"}`)
                return
            }
        }
        isPrime = true
        res.send(isPrime)
    })

module.exports = router