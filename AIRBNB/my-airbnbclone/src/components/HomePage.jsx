import { VacationCard } from "./VacationCard";
import img from '../assets/Icons/img1.jpg'
import NavBar from "./NavBar";
import Footer from "./Footer";

const Homepage = ()=>{
    return(
        <>
        <NavBar/>
        <div className="homePage">
        <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"Naivasha, Kenya"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/>
        <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"the eyebrow"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/>
        <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"the eyebrow"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/>
        <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"the eyebrow"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/>
        <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"the eyebrow"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/>
        <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"the eyebrow"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/>
        <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"Naivasha, Kenya"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/>
        <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"the eyebrow"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/>
        <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"the eyebrow"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/>
        <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"the eyebrow"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/>
        <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"the eyebrow"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/>
        <VacationCard img={img} imgAlt={"Luxury resort"} eyebrow={"the eyebrow"} distance={"65 kilometers away"} title={"Private Villa"} pricing={"$300 USD per night"}/>
        </div>
        <Footer/>
        </>
    )
}
export default Homepage;