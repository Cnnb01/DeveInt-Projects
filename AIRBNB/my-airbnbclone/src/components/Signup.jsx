import { useState } from "react";
import { useNavigate } from "react-router-dom"
const Signup = ()=>{
    const [formData, setFormData] = useState({
        fullname:"",
        myemail:"",
        mypswd:""
    })
    const navigate = useNavigate()//initialize navigation
    //when a change happens on the form
    const handleChange = (event)=>{
        const {value, name} = event.target
        setFormData((prevValue)=>{
            return{
                ...prevValue,
                [name]:value
            }
            // if(name === "fullname"){
            //     return{
            //         fullname: value,
            //         myemail: prevValue.myemail,
            //         mypswd: prevValue.mypswd
            //     }
            // }else if (name === "myemail"){
            //     return{
            //         fullname: prevValue.fullname,
            //         myemail: value,
            //         mypswd: prevValue.mypswd
            //     }
            // }else if (name === "mypswd"){
            //     return{
            //         fullname: prevValue.fullname,
            //         myemail: prevValue.myemail,
            //         mypswd: value
            //     }
            // }
        })
    }
    //when we submit the form
    const handleSubmit = async(event)=>{
        event.preventDefault(); //prevents page refresh
        console.log("The data in the form is=>",formData)
        try {
            const response = await fetch("http://localhost:8000/signup",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    name: formData.fullname,
                    email: formData.myemail,
                    password: formData.mypswd
                })
            })
            const data = await response.json()
            console.log("response fro server=>", data)
            //navigate to homepage
            if(response.ok){
                alert ("user created successfully")
                navigate("/home")
            }else{
                alert(data.message)
            }
        } catch (error) {
            console.error("Error:", error);
        }

    }

    return(
        <>
        SIGNUP
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Your Full name</label>
                <input type="name" name="fullname" id="name" value={formData.fullname} onChange={handleChange} className="shadow-xs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5" placeholder="Jane Doe" required />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Your email</label>
                <input type="email" name="myemail" id="email" value={formData.myemail} onChange={handleChange} className="shadow-xs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Your password</label>
                <input type="password" name="mypswd" id="password" value={formData.mypswd} onChange={handleChange} className="shadow-xs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5" required />
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-gray-200 " required />
                </div>
                <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-[#ff385c] hover:underline dark:text-[#e63950]">terms and conditions</a></label>
            </div>
            <button type="submit" className="text-white bg-[#ff385c] hover:bg-[#e63950] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register new account</button>
            </form>

        </>
    )
}
export default Signup;