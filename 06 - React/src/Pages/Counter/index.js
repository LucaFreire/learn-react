import { useEffect, useState } from "react";
import './style.css'

export default function Counter() {

    const [show, setShow] = useState(false);
    var counter = 1;

    useEffect(() => {
        const timer = setInterval(() => {
            document.title = `Titulo ${counter}`
            counter++;
            setShow(true);
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(false);
        }, 3000);
        return () => clearTimeout(timeout);

    }, [show])

    return (
        <>
            <div className="main-counter">
                <h3>{show ? `Titulo Alterado para ${document.title}` : ""}</h3>
            </div>
        </>
    );
}