import { Navigate } from "react-router-dom";
import getCookie from "../../lib/cookie";

function ProtectedRoute({ children }) {
    const userToken = getCookie();
    if (!userToken) return <Navigate to="/" />

    return children;
}

export default ProtectedRoute;