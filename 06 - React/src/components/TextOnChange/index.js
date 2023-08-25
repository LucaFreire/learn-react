import { useState } from 'react';
import './styles.css'

export default function TextOnChange() { 

    const [text, setText] = useState('')
    return(
        <>
            <label>Fill</label>
            <input onChange={(sender) => setText(sender.target.value)}/>
            <button onClick={(sender) => console.log(text)}>Send</button>
        </>
    );
}