import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URLL
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/admin`, { withCredentials: true });
                if (response.data.success) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    });

    if (loading) return <h1>Loading...</h1>;

    return isAuthenticated ? children : <Navigate to="/home" />;
};

export default ProtectedRoute;
