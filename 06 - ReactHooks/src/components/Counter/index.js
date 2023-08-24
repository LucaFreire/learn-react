import { useEffect, useState } from "react";

export default function Counter() {

    const [show, setShow] = useState(false);
    const array = ["Titulo 1", "Titulo 2", "Titulo 3"]
    var counter = 0;

    useEffect(() => {
        const timer = setInterval(() => {
            document.title = array[counter];
            counter++;
            counter = counter > 2 ? 0 : counter;
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
            <h3>{show ? `Titulo Alterado para ${document.title}` : ""}</h3>
        </>
    );
}