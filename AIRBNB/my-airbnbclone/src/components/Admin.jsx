import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Datepicker} from "flowbite"
const Admin = ()=>{
    const [form, setForm] = useState({
        image: null,
        hostname: "",
        amenities: "",
        pricing: "",
        startdate: "",
        enddate: "",
        place: ""
    })
    const navigate = useNavigate()
    const handleImageUpload = (event) =>{
        if(event.target.files.length > 0){
            console.log("Image selected:", event.target.files[0])
            setForm((prev)=>{
                return{
                ...prev,
                image: event.target.files[0]
        }})
        }
    }
    const handleChange = (event)=>{
        const {name, value} = event.target
        setForm((prev)=>{
            return{
                ...prev,
                [name] : value
            }
    })
    }

    const handleSubmit = async(event)=>{
        event.preventDefault(); //prevents page refresh
        const formData = new FormData()
        formData.append("image", form.image)
        formData.append("hostname", form.hostname);
        formData.append("amenities", form.amenities);
        formData.append("pricing", form.pricing);
        formData.append("startdate", form.startdate);
        formData.append("enddate", form.enddate);
        formData.append("place", form.place);
        console.log("Current data in the form is=>",form)
        try {
            const response = await fetch("admin",{
                method: "POST",
                body: formData,
                credentials: "include"
            })
            const data = await response.json()
            console.log("response from server(admin page)=>", data)
            //navigate to homepage
            if(response.ok){
                alert ("upload successfull")
                navigate("/")
            }else{
                alert(data.message)
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    useEffect(() => {
        //initialize Flowbite datepicker manually
        const startInput = document.getElementById("datepicker-range-start");
        const endInput = document.getElementById("datepicker-range-end");

        if (startInput && endInput) {
            new Datepicker(startInput, { autohide: true });
            new Datepicker(endInput, { autohide: true });
        }
    }, []);
    return(
        <>
        <h1>Admin page woohoo!</h1>
        <form onSubmit={handleSubmit} class="max-w-md mx-auto space-y-5 mt-4">
            <div class="max-w-md mx-auto">
                <label class="text-base text-slate-900 font-medium mb-3 block">Upload bnb picture</label>
                <input type="file" name="image" onChange={handleImageUpload} class="w-full text-slate-500 font-medium text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-slate-500 rounded" accept="image/*" required/>
                <p class="text-xs text-slate-500 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
            </div>
            <div>
                <label class="mb-2 text-sm text-slate-900 font-medium block">Host Name</label>
                <input type="name" name="hostname" value={form.hostname} onChange={handleChange} placeholder="Private Villa" class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
            </div>
            <div>
                <label class="mb-2 text-sm text-slate-900 font-medium block">Amenities available</label>
                <input type="name" placeholder="WiFi, hot-water, breakfast..." name="amenities" value={form.amenities} onChange={handleChange} class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
            </div>
            <div>
                <label class="mb-2 text-sm text-slate-900 font-medium block">Pricing</label>
                <input type="name" placeholder="100,000" name="pricing" value={form.pricing} onChange={handleChange} class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
            </div>
            <div>
                <label class="mb-2 text-sm text-slate-900 font-medium block">County and country</label>
                <input type="name" placeholder="Nakuru, Kenya" name="place" value={form.place} onChange={handleChange} class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
            </div>

            <div id="date-range-picker" date-rangepicker class="flex items-center">
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </div>
                <input id="datepicker-range-start" name="startdate" value={form.startdate} onChange={handleChange} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"/>
            </div>
            <span class="mx-4 text-gray-500">to</span>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </div>
                <input id="datepicker-range-end" name="enddate" value={form.enddate} onChange={handleChange} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/>
            </div>
            </div>
            <button type="submit" class="text-white bg-[#ff385c] hover:bg-[#e63950] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
        </form>
        </>
    )
}
export default Admin;