import Sports from "../model/sports.mjs"


class SportsController {

    static async getAll(req, res) {
        try {
            const data = await Sports.find()
            return res.status(200).send(data)
        } catch (error) {
            return res.status(400).send({ error: error })
        }
    }
    static async create(req, res) {
        console.log(req.body);
<<<<<<< HEAD
        const { name, qtdPlayers } = req.body;
=======
        const { name, qtdPlayers } = req.body
        
>>>>>>> 5daa17dcbb7b7e3aae5d80486b2de1b4cd7ef092
        const sport = {
            name: name,
            qtdPlayers: qtdPlayers
        }

        if (!sport.name || !sport.qtdPlayers)
            return res.status(401).send({ message: "Invalid Input." })

        try {
            const content = await Sports.create(sport)
            return res.status(200).send({content})
        } catch (error) {
            return res.status(400).send({ error: error })
        }
    }
}

export default SportsController