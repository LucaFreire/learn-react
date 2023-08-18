import express from "express"
import Sports from "../model/sports.mjs"

const router = express.Router()

router.get("/sports/get", async (req, res) => {
    console.log("sports get");
    try {
        const data = await Sports.find()
        return res.status(200).send(data)
    } catch (error) {
        return res.status(400).send({ error: error })
    }
})

router.post("/sports/post", async (req, res) => {
    console.log("sports post")

    const { name, qtdPlayers } = req.body
    const sport = {
        name: name,
        qtdPlayers: qtdPlayers
    }

    if (!sport.name || !sport.qtdPlayers)
        return res.status(401).send({ message: "Invalid Input." })

    try {
        const content = await Sports.create(sport)
        return res.status(200).send(content)
    } catch (error) {
        return res.status(400).send({ error: error })
    }
})

export default router