import { useState } from 'react';
import './styles.css'

export default function Click() {

    const [num, setNum] = useState(0);

    return (
        <>
            <div className='main-click'>
                <h1>Clicker</h1>
                {num}
                <br />
                <div>
                    <button className="btn-click" onClick={() => { setNum(num + 1); }}>+</button>
                    <button className="btn-click" onClick={() => { setNum(num - 1); }}>-</button>
                </div>
            </div>
        </>
    );
}