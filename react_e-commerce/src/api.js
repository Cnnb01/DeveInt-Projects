import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export const login = async (role, adminPassword) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/`, { role, adminPassword }, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Login error:", error.response?.data || error);
        return { success: false, message: "Login failed" };
    }
};

export const fetchFrames = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/frames`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Error fetching frames:", error);
        return [];
    }
};
