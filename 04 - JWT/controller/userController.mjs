import Users from '../model/user.mjs';

class UsersController {

    static async getAll(req, res) {
        console.log("get Users");
        try {
            const peoplee = await Users.find();
            return res.status(200).send(peoplee);
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async create(req, res) {
        console.log("post create");
        const { name, password } = req.body;

        let person = {
            name: name,
            password: password
        };

        try {
            const result = await Users.create(person);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }

    static async getById(req, res) {
        console.log("get By ID");
        const { Id } = req.params;

        try {
            const content = await Users.findById(Id);
            return res.status(200).send(content);
        } catch (error) {
            return res.status(500).send({ message: error });
        }
    }
}

export default UsersController;