// Desafio 1: Faça um formulário de músicas com título, nome do autor, nome da gravadora, ano de lançamento

import { useCallback, useState } from "react";
import axios from "axios";
import './style.css';

export default function MusicAPI() {

    const [title, setTitle] = useState('');
    const [recordName, setRecordName] = useState('');
    const [year, setYear] = useState(new Date());


    const handleMusicPost = useCallback(async () => {

        if (!title || !recordName || !year)
            return;

        const postObj = {
            title: title,
            recordName: recordName,
            year: year
        };

        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', postObj);
        clearInputs();
        console.log(res);
    })

    function clearInputs() {
        setTitle('');
        setRecordName('');
        setYear(0);
    }



    return (<>
        <div className="main-music-api">
            <div className="inputs-music-api">
                <input value={title} type='text' placeholder='Title' onChange={(sender) => setTitle(sender.target.value)}></input>
                <input value={recordName} type='text' placeholder='Record Name' onChange={(sender) => setRecordName(sender.target.value)}></input>
                <input value={year} placeholder='Year' type='date' onChange={(sender) => setYear(sender.target.value)}></input>

                <button id='post-btn' onClick={() => handleMusicPost()}>Post</button>
            </div>
        </div>
    </>);
}