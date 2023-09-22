import { useCallback, useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [notFound, setNotFound] = useState(false);
    const navigate = useNavigate();

    const handleLogin = useCallback(async () => {

        if (!password || !name)
            return;

        var encryptPassword = CryptoJS.AES.encrypt(password, 'testeafssdfsdfewfersdfsdffd').toString(); // TODO: .env
        try {
            const res = await axios.post('http://localhost:1000/auth/login', { name: name, password: password })
            sessionStorage.setItem('token', res.data.token);
            setNotFound(false);
            navigate('Home');

        } catch (error) {
            setNotFound(true);
            console.log(error);
        }
    })


    return (<>
        <input placeholder="name" type="text" onChange={(e) => setName(e.target.value)} />
        <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <p>{notFound ? "User Not Found" : ""}</p>
        <button onClick={() => handleLogin()}>Login</button>
    </>);
}