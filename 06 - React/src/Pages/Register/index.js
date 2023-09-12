import './style.css';
import axios from 'axios';
import { useCallback, useState } from 'react';
import CryptoJS from 'crypto-js';
import env from 'react-dotenv';

export default function Register() {

    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleRegister = useCallback(async () => {

        if (!password || !name)
            return;

        var encryptPassword = CryptoJS.AES.encrypt(password, 'testeafssdfsdfewfersdfsdffd').toString(); // TODO: .env

        try {
            const res = await axios.post('http://localhost:1000/auth/register', { name: name, password: encryptPassword })
            console.log(res);

        } catch (error) {
            console.log(error);
        }
    });

    return (<>
        <input type="text" placeholder="email" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <input type="password" placeholder="password" value={name} onChange={(e) => setName(e.target.value)}></input>
        <button id="post-register" onClick={() => handleRegister()}>Register</button>
    </>);
}