import Record from "../models/Record.mjs";

class RecordController {
    static async getAll(req, res) {
        try {
            const data = await Record.find();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    static async findById(req, res) {
        const { Id } = req.body;

        if (!Id)
            return res.status(400).send({ message: "Invalid Input" })

        try {
            const data = await Record.findById(Id);
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    static async create(req, res) {
        const { Name, Address, CNPJ } = req.body;

        if (!Name || !Address || !CNPJ)
            return res.status(400).send({ message: "Invalid Input" });

        const record = {
            Name: Name,
            Address: Address,
            CNPJ: CNPJ
        };

        try {
            const response = await Record.create(record);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    static async update(req, res) {
        const { Id, Name, Address, CNPJ } = req.body;

        if (!Id || !Name || !Address || !CNPJ)
            return res.status(400).send({ message: "Invalid Input" });

        const record = {
            Name: Name,
            Address: Address,
            CNPJ: CNPJ
        };

        try {
            const response = await Record.findByIdAndUpdate(Id, record);
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }

    }

    static async deleteById(req, res) {
        const { Id } = req.body;

        try {
            const response = await Record.findByIdAndDelete(Id);
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }

    }
};

export default RecordController;