import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => { //children prop in React allows components to wrap and render other components inside them
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("http://localhost:8000/admin", { withCredentials: true });
                if (response.success) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);
    return isAuthenticated ? children : <Navigate to="/home" />;
};

export default ProtectedRoute;
