import { useCallback, useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import axios from "axios";

export default function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = useCallback(async () => {

        if (!password || !name)
            return;

        console.log(name);
        console.log(password);

        const res = await axios.post('http://localhost:1000/auth/login', { name: name, password: password })

        console.log(res.data);
    })


    return (<>
        <input placeholder="name" type="text" onChange={(e) => setName(e.target.value)} />
        <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => handleLogin()}>Login</button>
    </>);
}