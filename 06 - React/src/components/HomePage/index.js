import './style.css'

export default function HomePage() {

    return (<>
        <div className="main">
            <h1>Home Page</h1>

            <div className="buttons-section">
                <button>Calculator</button>
                <button>TextOnChange</button>
                <button>Click</button>
                <button>Counter</button>
                <button>ToDoList</button>
            </div>
        </div>
    </>);
}