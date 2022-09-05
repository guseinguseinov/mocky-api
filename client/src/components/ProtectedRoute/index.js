import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const userToken = localStorage.getItem('userToken');

    if (!userToken) return <Navigate to="/" />

    return children
}

export default ProtectedRoute;