import { useState } from 'react';
import { NotDone, Done } from './styled';
import './style.css'

export default function ToDoList() {

    const [list, setList] = useState([]);
    const [currentInput, setCurrentInput] = useState('');

    function AddAtList() {
        if (currentInput === '')
            return;
        setList([...list, { Task: currentInput, IsDone: false }]);
        setCurrentInput('');
    }

    function SwitchValue(value) {
        var index = list.findIndex(item => item === value);
        var newValue = list[index];
        newValue.IsDone = !newValue.IsDone;
        let newArray = [];

        for (let i = 0; i < list.length; i++) {
            if (list[i] === value) {
                newArray[i] = newValue;
                continue;
            }
            newArray[i] = list[i];
        }
        setList(newArray)
    }

    function Remove(value) {
        setList(item => {
            let newArray = item.filter(p => p !== value);
            return newArray;
        })
    }

    function RenderList() {
        return list.map(item => {
            return (
                <div className='section'>
                    {!item.IsDone ? <NotDone>{item.Task}</NotDone> : <Done>{item.Task}</Done>}
                    <button id='switch-value' onClick={() => SwitchValue(item)}>{item.IsDone ? "Undone" : "Done"}</button>
                    <button id='remove-btn' onClick={() => Remove(item)}>Remove</button>
                </div>
            )
        })
    };

    return (
        <>
            <h1>ToDo List</h1>
            <h3>Add your Task</h3>
            <input id='input-task' value={currentInput} onChange={(sender) => setCurrentInput(sender.target.value)}></input>
            <button id="add-button" onClick={() => AddAtList()}>Add</button>
            {RenderList()}
        </>
    );
}