import { VacationCard } from "./VacationCard";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Bnb = ()=>{
    const {home_id} = useParams()
    const [home, setHome] = useState(null);
    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate(`/checkout/${home_id}`);
    };
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
            <VacationCard key={home.home_id} image={`data:image/jpeg;base64,${home.home_picture}`} hostname={home.host_name} amenities={home.amenities} pricing={home.cost} location={home.home_location} startdate={home.from_date} enddate={home.to_date} desc={home.home_desc}/>
            <button type="submit" onClick={handleCheckout} class="text-white bg-[#ff385c] hover:bg-[#e63950] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Book this bnb</button>
        </>
    )
}
export default Bnb;