import { useState } from "react";
import './styles.css'

export default function Calculator() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [res, setRes] = useState(0);

    return (

        <div class="main">
            <label>Number 1</label>
            <input onChange={(sender) => setNum1(Number(sender.target.value))} />
            <br />
            <label>Number 2</label>
            <input onChange={(sender) => setNum2(Number(sender.target.value))} />

            <div class="operations">
                <button onClick={() => setRes(num1 + num2)}>+</button>
                <button onClick={() => setRes(num1 - num2)}>-</button>
                <button onClick={() => setRes(num1 / num2)}>/</button>
                <button onClick={() => setRes(num1 * num2)}>X</button>
                <button onClick={() => setRes(0)}>Clear</button>
            </div>

            <h1>{res}</h1>
        </div>

    );
}