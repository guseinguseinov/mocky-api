import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "../../lib/axios";
import getCookie from "../../lib/cookie";

function ProtectedRoute({ children }) {

    const [token, setToken] = useState(null);
    async function authenticateToken() {
        const { data } = await axios.get('/');
        setToken(data.data);
    }

    const userToken = getCookie();
    if (!userToken) return <Navigate to="/" />
    else {
        authenticateToken();
        <Navigate to="/" />
    }

    return children;
}

export default ProtectedRoute;