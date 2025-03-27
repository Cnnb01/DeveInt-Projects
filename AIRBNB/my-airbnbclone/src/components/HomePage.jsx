import { VacationCard } from "./VacationCard";
import img from '../assets/Icons/img1.jpg'
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState,useEffect } from "react";
const Homepage = ()=>{
const [homes, setHomes] = useState([])
useEffect(() => {
const getHomes = async ()=>{
    try {
        const response = await fetch("http://localhost:8000/homes")
        if (!response.ok) {
            throw new Error("Failed to fetch frames");
          }
          const data = await response.json();
          setHomes(data)
    } catch (error) {
        console.error("Failed to fetch frames", error);
    }
}
getHomes()
},[]);
    return(
        <>
        <NavBar/>
        <div className="homePage">
        {homes.map((home)=>(
            <VacationCard key={home.home_id} image={`data:image/jpeg;base64,${home.home_picture}`} hostname={home.host_name} amenities={home.amenities} pricing={home.cost} location={home.home_location} startdate={home.from_date} enddate={home.to_date}/>
        ))}
        {/* <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"the eyebrow"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/> */}
        </div>
        <Footer/>
        </>
    )
}
export default Homepage;