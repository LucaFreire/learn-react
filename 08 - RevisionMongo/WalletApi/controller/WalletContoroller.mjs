import Wallet from "../models/Wallet.mjs";

class WalletController {

    static async create(req, res) {
        const { Name, Date, Description, Balance, Historic } = req.body;

        if (!Name || !Date || !Description || !Balance || !Historic)
            return res.status(400).send({ message: "Invalid Input" })

        const wallet = {
            Name: Name,
            Date: Date,
            Description: Description,
            Balance: Balance,
            Historic: Historic,
        }

        try {
            const response = await Wallet.create(wallet);
            return res.status(200).send({ res: response });
        } catch (error) {
            return res.status(500).send(error)
        }
    }

    static async deleteById(req, res) {
        const { Id } = req.body;

        if (!Id)
            return res.status(400).send({ message: "Invalid Input" })

        try {
            const response = await Wallet.findByIdAndDelete(Id);
            return res.status(200).send({ res: response });
        } catch (error) {
            return res.status(500).send(error)
        }
    }

    static async findById(req, res) {
        const { Id } = req.body;

        if (!Id)
            return res.status(400).send({ message: "Invalid Input" });

        try {
            const response = await Wallet.findById(Id);
            return res.status(200).send({ res: response });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    static async getAll(req, res) {
        try {
            const response = await Wallet.find();
            return res.status(200).send({ res: response });
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    static async update(req, res) {
        const { Id, Name, Date, Description, Balance, Historic } = req.body;

        if (!Id || !Name || !Date || !Description || !Balance || !Historic)
            return res.status(400).send({ message: "Invalid Input" })

        const wallet = {
            Name: Name,
            Date: Date,
            Description: Description,
            Balance: Balance,
            Historic: Historic,
        }

        try {
            const response = await Wallet.findByIdAndUpdate(Id, wallet);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }

    }
}

export default WalletController;