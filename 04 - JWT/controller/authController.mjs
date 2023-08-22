import Users from '../model/user.mjs'

class authController {

    static async register(req, res) {
        const { name, password } = req.body;

        const passwordHash = await bcrypt.hash(password, 12);

        const user = new Users({
            name,
            passwordHash
        })

        try {
            await user.save();
            res.status(200).send({ message: "created" })
        } catch (error) {
            res.status(500).send({ error: error })
        }
    }

    static async login(req, res) {
        const { name, password } = req.body;

        if (!name || !password)
            return res.status(401).send({ message: "Null Input" })

        try {
            const user = await Users.findOne({ name })
            if (!user)
                return res.status(400).send({ message: "Not found" })

            if (!await bcrypt.compare(password, user.password))
                return res.status(400).send({ message: "Not found" })

            const secret = process.env.SECRET;
            const token = jwt.sign(
                {
                    id: user._id
                },
                secret,
                {
                    expiresIn: '2 days'
                }
            );
            return res.status(200).send({ token: token })
        } catch (error) {
            res.status(500).send({ error: error })
        }
    }
}

export default authController;