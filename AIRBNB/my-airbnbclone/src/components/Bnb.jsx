import { VacationCard } from "./VacationCard";
import img from '../assets/Icons/img1.jpg'

const Bnb = ()=>{
    return(
        <>
        <p>Bnb Page</p>
                <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"Naivasha, Kenya"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/>
        
        </>
    )
}
export default Bnb;