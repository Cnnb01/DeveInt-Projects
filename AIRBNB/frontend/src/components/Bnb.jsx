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
    const handleBack = () => {
        navigate(`/home`);
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

    return (
        <>
        <div className="vacationpagediv">
        <button type="submit" onClick={handleBack} className="bnb-back-btn">Back</button>
            <div className="bnb-container">
                <div className="bnb-content">
                <div className="bnb-vac">
                <VacationCard  key={home.home_id} image={`data:image/jpeg;base64,${home.home_picture}`} hostname={home.host_name} amenities={home.amenities} pricing={home.cost} location={home.home_location} startdate={home.from_date} enddate={home.to_date} />
                </div>
                    <div className="bnb-details">
                        <p className="bnb-desc">{home.home_desc}</p>
                        <button type="submit" onClick={handleCheckout} className="bnb-booking-btn">Book this BnB</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Bnb;