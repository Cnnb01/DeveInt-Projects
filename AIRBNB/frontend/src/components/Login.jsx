import { useState } from "react";
import { useNavigate } from "react-router-dom"
const Login = ()=>{
    const [formData, setFormData] = useState({
        email:"",
        loginpassword:""
    })
    const navigate = useNavigate()//initialize navigation
    const [role, setRole] = useState("")
    const handleChange = (event)=>{
        const {value, name} = event.target
        setFormData((prevValue)=>{
            return{
                ...prevValue,
                [name]:value
            }
        })
        if (name === "email") {
            setRole(value);
            // console.log("Role/email updated to:", value);
        }
    }
    const handleSubmit = async (event)=>{
        event.preventDefault(); //prevents page refresh
        console.log("The data in the form is=>",formData)
        try {
            const response = await fetch("http://localhost:8000/",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({...formData, role}),
                credentials: "include"
            })
                const data = await response.json()
                console.log("response from server=>", data)
                //navigate to homepage
                if(response.ok){
                    // alert ("login successfull")
                    if (role === "admin@gmail.com") {
                        console.log("THE ROLE ISSS=>",role)
                        navigate("/admin");
                    } else {
                        // console.log("THE ROLEEE", role)
                        navigate("/home");
                    }
                }else{
                    console.log("The error=>",data.message)
                    navigate("/")
                }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    const handleSignup = ()=>{
        navigate("/signup")
    }
    return(
        <>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Your email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="shadow-xs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Your password</label>
                <input type="password" name="loginpassword" value={formData.loginpassword} id="password" onChange={handleChange} className="shadow-xs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5" required />
            </div>
            <button type="submit" className="text-white bg-[#ff385c] hover:bg-[#e63950] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
            <p>Dont have an account?<a href="#" onClick={handleSignup}> Signup</a> instead</p>
        </form>
        </div>
    </div>

        </>
    )
}
export default Login;