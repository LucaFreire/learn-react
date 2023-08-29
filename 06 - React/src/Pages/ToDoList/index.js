import { useState } from 'react';
import { NotDone, Done } from './styled';
import './style.css'
import liexira from '../../imgs/lixeira.png'
import done from '../../imgs/done.png'
import undone from '../../imgs/undone.png'

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
                    <div className='buttons'>
                        <img id='switch-value' src={!item.IsDone ? done : undone} onClick={() => SwitchValue(item)} />
                        <img id='remove-button' onClick={() => Remove(item)} src={liexira} />
                    </div>
                </div>
            )
        })
    };

    return (
        <>
            <div className='main-to-do-list'>
                <h1>ToDo List</h1>
                <h3>Add your Task</h3>
                <div className='main-section'>
                    <input id='input-task' value={currentInput} onChange={(sender) => setCurrentInput(sender.target.value)}></input>
                    <button id="add-button" onClick={() => AddAtList()}>+</button>
                </div>
                {RenderList()}
            </div>
        </>
    );
}