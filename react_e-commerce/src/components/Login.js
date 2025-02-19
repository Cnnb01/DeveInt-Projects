import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

const Login = () => {
    const [role, setRole] = useState("customer")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const togglePassword = (e) =>{
        const newRole = e.target.value
        setRole(newRole)
        console.log("Selected role:", newRole);
    }
    const handleLogin = async(e) => {
        e.preventDefault(); //prevent page refresh
        console.log("Logging in as:", role);
        try {
            const resp = await login(role,password)
            if(resp.success){
                navigate(role === "admin"? "/admin" : "/home")
            }else{
                alert("login failed")
            }
        } catch (error) {
            console.error("Login error: =>", error);
        }
    };

    return(
        // <body className="login jomolhari-regular">
        <div className="container mt-5 login jomolhari-regular">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div className="card p-4 loginform">
                    <h3 className="text-center">Login</h3>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="role" className="form-label">Select Role</label>
                            <select className="form-control" id="role" name="role" required value={role} onChange={togglePassword}>
                                <option value="customer">Customer</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        {console.log("Current role state:", role)}

                        {role === "admin" && (
                            <div className="mb-3" id="adminPasswordField">
                                <label htmlFor="adminPassword" className="form-label">Admin Password</label>
                                <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Admin Password"/>
                            </div>
                        )}
                        <button type="submit" className="btn btn-outline-secondary w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    // </body>
    )
}

export default Login;