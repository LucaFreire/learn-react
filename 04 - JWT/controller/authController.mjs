import Users from '../model/user.mjs'

class authController {

    static async register(req, res) {
        const { name, password } = req.body;

        const user = {
            nam: name,
            password: password
        }

        try {
            await Users.create(user);
            res.status(200).send({ message: "created" })
        } catch (error) {
            res.status(400).send({ error: error })
        }
    }

    static async login(req, res) {

    }
}

export default authController;