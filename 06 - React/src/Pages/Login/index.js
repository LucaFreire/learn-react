import { useCallback, useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import axios from "axios";

export default function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [notFound, setNotFound] = useState(false);

    const handleLogin = useCallback(async () => {

        if (!password || !name)
            return;

        console.log(name);
        console.log(password);
        try {
            const res = await axios.post('http://localhost:1000/auth/login', { name: name, password: password })
            console.log(res.data);
            setNotFound(false);
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