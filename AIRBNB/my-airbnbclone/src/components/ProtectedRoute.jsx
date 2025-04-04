import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
const ProtectedRoute = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const checkAuth = async ()=>{
            try {
                const response = await fetch("http://localhost:8000/admin",{
                    method: "GET",
                    credentials: "include"
            })
                const data = await response.json();

                // console.log("RESPONSEE.OK SAYSS=>",response.ok)
                console.log("DATA.MESSAGE SAYYS=>",data.message)

                if (data.message === "Welcome Admin! You have access to this page.") {
                    setAuthenticated(true)
                }else{
                    setAuthenticated(false)
                }
            } catch (error) {
                setAuthenticated(false)
            }finally{
                setLoading(false)
            }
        }
        checkAuth()
    }, [])

    if (loading){
        return <h1>Loading...</h1>
    }
    return authenticated? children: <Navigate to="/home" />
}
export default ProtectedRoute;