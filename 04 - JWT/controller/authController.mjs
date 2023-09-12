import Users from '../model/user.mjs'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';

class authController {

    static async register(req, res) {
        const { name, password } = req.body;
        
        var bytes = CryptoJS.AES.decrypt(password, process.env.PASSWORDSECRET);
        var originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        const passwordHash = await bcrypt.hash(originalPassword, 12);

        const user = new Users({
            name: name,
            password: passwordHash
        });

        try {
            const userr = await user.save();
            res.status(200).send(userr);
        } catch (error) {
            res.status(500).send({ error: error })
        }
    }

    static async login(req, res) {
        const { name, password } = req.body;

        if (!name || !password)
            return res.status(401).send({ message: "Null Input" });

        try {
            const user = await Users.findOne({ name: name });
            if (!user)
                return res.status(400).send({ message: "Not found" });


            var bytes = CryptoJS.AES.decrypt(password, process.env.PASSWORDSECRET).toString();

            if (!bcrypt.compare(bytes, user.password))
                return res.status(400).send({ message: "Not found" });

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
            console.log(error)
            res.status(500).send({ error: error })
        }
    }
}

export default authController;