import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';

export default function ProtectedRoute({ Denied, Target }) {
    var [page, setPage] = useState(<></>);

    function renderPage() {
        const token = sessionStorage.getItem('token');

        if (!token) {
            setPage(Denied);
            return;
        }

        const decodeToken = jwt_decode(token);
        const { exp } = decodeToken;

        if (exp + '000' - Date.now() <= 0) {
            setPage(Denied);
            return;
        }
        setPage(Target);
    }

    useEffect(() => {
        renderPage();
    }, [])

    return page;
}