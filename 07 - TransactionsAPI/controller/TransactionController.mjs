import Transaction from "../model/Transaction.mjs";

class TransactionController {

    static async getAll(req, res) {
        console.log("gett");
        try {
            const data = await Transaction.find();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async create(req, res) {
        const { Name, Value } = req.body;
        console.log("postt");


        if (!Name || !Value)
            return res.status(400).send({ message: "Bad Request" });

        const transaction = {
            Name: Name,
            Value: Value
        }

        try {
            const response = await Transaction.create(transaction);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send({ error: error })
        }

    }

}

export default TransactionController;