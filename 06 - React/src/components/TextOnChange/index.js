import { useState } from 'react';
import './styles.css'

export default function TextOnChange() {

    const [text, setText] = useState('')
    return (
        <>
            <div className='main'>
                <label>Fill</label>
                <input onChange={(sender) => setText(sender.target.value)} />
                <button onClick={() => console.log(text)}>Send</button>
            </div>
        </>
    );
}