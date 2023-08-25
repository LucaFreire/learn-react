import { useEffect, useState } from "react";

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
            <h3>{show ? `Titulo Alterado para ${document.title}` : ""}</h3>
        </>
    );
}