import React, { useState } from "react";

const Login = () => {
    const [role, setRole] = useState("customer")
    const togglePassword = (e) =>{
        setRole(e.target.value)
    }

    return(
        <body className="login jomolhari-regular">
        <div className="container mt-5 ">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div className="card p-4 loginform">
                    <h3 className="text-center">Login</h3>
                    <form action="/" method="POST">
                        <div className="mb-3">
                            <label htmlFor="role" className="form-label">Select Role</label>
                            <select className="form-control" id="role" name="role" required onChange={togglePassword}>
                                <option value="customer">Customer</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        {role === "admin" && (
                            <div className="mb-3" id="adminPasswordField">
                                <label htmlFor="adminPassword" className="form-label">Admin Password</label>
                                <input type="password" className="form-control" id="adminPassword" name="adminPassword" />
                            </div>
                        )}
                        <button type="submit" className="btn btn-outline-secondary w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </body>
    )
}

export default Login;