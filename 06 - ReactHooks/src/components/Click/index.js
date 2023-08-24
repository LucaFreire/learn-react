import { useState } from 'react';
import './styles.css'

export default function Click() {

    const [num, setNum] = useState(0);

    return (
        <>
            <h1>Clicker</h1>
            {num}
            <br />
            <button onClick={() => { setNum(num + 1); }}>Add</button>
            <button onClick={() => { setNum(num - 1); }}>Decrement</button>
        </>
    );
}