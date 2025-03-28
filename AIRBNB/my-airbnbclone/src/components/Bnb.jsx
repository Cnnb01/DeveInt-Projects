import { VacationCard } from "./VacationCard";
import img from '../assets/Icons/img1.jpg'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Bnb = ()=>{
    const {home_id} = useParams()
    const [home, setHome] = useState(null);
    useEffect(()=>{
        const getHome = async()=>{
            try {
                const response = await fetch(`http://localhost:8000/homes/${home_id}`)
                if(!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setHome(data);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        getHome()
    }, [home_id])
    if (!home) {
        return <p>Loading...</p>;
    }

    return(
        <>
        <p>Bnb Page</p>
            {/* <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"Naivasha, Kenya"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/> */}
            <VacationCard home_id={home.home_id} image={`data:image/jpeg;base64,${home.home_picture}`} hostname={home.host_name} amenities={home.amenities} pricing={home.cost} location={home.home_location} startdate={home.from_date} enddate={home.to_date}/>
        </>
    )
}
export default Bnb;