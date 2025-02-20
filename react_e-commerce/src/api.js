import axios from "axios";
import { useEffect } from "react";

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
// const handleLogin = async(e) => {
//     e.preventDefault(); //prevent page refresh
//     console.log("Logging in as:", role);
//     try {
//         const resp = await login(role,password)
//         if(resp.success){
//             navigate(role === "admin"? "/admin" : "/home")
//         }else{
//             alert("login failed")
//         }
//     } catch (error) {
//         console.error("Login error: =>", error);
//     }
// };

  //   useEffect(() => {
  //     const getFrames = async () => {
  //         try {
  //             const data = await fetchFrames();
  //             setFrames(data);
  //         } catch (error) {
  //             console.error("Failed to fetch frames", error);
  //         }
  //     };
  //     getFrames();
  // }, []);

// export const fetchFrames = async () => {
//     try {
//         const response = await axios.get(`${API_BASE_URL}/frames`, { withCredentials: true });
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching frames:", error);
//         return [];
//     }
// };
// useEffect(()=>{
//     const getFrames = async ()={
//         try {
//             const response = await fetch(`${API_BASE_URL}/frames`)
//             if(!response.ok){
//                 throw Error("Errrrr")
//             }else{
//                 const data = await response.json()
//                 setFrames(data)
//             }
//         } catch (error) {
//             console.error("Failed to fetch frames", error);
//         }
//     }
//     },
//     [])