import { useState } from "react";
import { useNavigate } from "react-router-dom"
const Login = ()=>{
    const [formData, setFormData] = useState({
        email:"",
        loginpassword:""
    })
    const navigate = useNavigate()//initialize navigation
    const handleChange = (event)=>{
        const {value, name} = event.target
        setFormData((prevValue)=>{
            return{
                ...prevValue,
                [name]:value
            }
        })
    }
    const handleSubmit = async (event)=>{
        event.preventDefault(); //prevents page refresh
        console.log("The data in the form is=>",formData)
        try {
            const response = await fetch("http://localhost:8000/login",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formData)
            })
                const data = await response.json()
                console.log("response fro server=>", data)
                //navigate to homepage
                if(response.ok){
                    alert ("login successfull")
                    navigate("/")
                }else{
                    alert(data.message)
                }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    return(
        <>
        LOGIN
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
            </form>

        </>
    )
}
export default Login;