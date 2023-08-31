import Casa from '../model/Casa.mjs';

class CasaController {
    static async create(req, res) {
        const { Owner, Price, Location } = req.body;

        if (!Owner || !Price || !Location)
            return res.status(400).send({ message: "Bad Request" });

        const casa = {
            Owner: Owner,
            Price: Price,
            Location: Location
        };

        try {
            const response = await Casa.create(casa);
            return res.status(200).send({ response });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async getAll(req, res) {
        try {
            const data = await Casa.find();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async getById(req, res) {
        const { Id } = req.params;

        try {
            const data = await Casa.findById(Id);
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }
}

export default CasaController;