import { useState } from 'react';
import airbnbLogo from '../assets/Icons/airbnb.svg';
import worldIcon from '../assets/Icons/world.png';
import { useNavigate } from 'react-router-dom';

const NavBar = ({onSearch}) => {//enables you to use it elsewhere
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    const handleLogout = async()=>{
        try {
            const response = await fetch ("http://localhost:8000/logout",{
                credentials: "include"
            })
            if(response.ok){
                navigate("/")
            }else{
                console.error("Logout failed")
            }
        } catch (error) {
            console.error("Error during logout:=>", error)
        }
    }

    const [searchTerm, setSearchTerm] = useState("")
    const handleSearchChange = (e) =>{
        const {name, value} = e.target
        setSearchTerm(value)
        onSearch(value)
    }
    return (
        <>
            <nav className="navbar">
                {/* Logo */}
                <div className="logo">
                    <img src={airbnbLogo} alt="Airbnb logo" />
                </div>

                {/* Search Bar */}
                <div className="searchbar">
                    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="search" placeholder="Search locations" value={searchTerm} onChange={handleSearchChange} required />
                        <button type="submit">Search</button>
                    </form>
                </div>

                {/* Right Section */}
                <div className="nav-options">
                    <button className="host-btn">Airbnb your home</button>
                    <img src={worldIcon} className="icon" alt="Global icon" />
                    {/* Account Dropdown */}
                    <button onClick={() => setIsOpen(!isOpen)} className="account-btn">Account</button>
                    {isOpen && (
                        <div className="dropdown">
                            <ul>
                                <li><a href="#">Dashboard</a></li>
                                <li><a href="#">Settings</a></li>
                                <li><a href="#">Earnings</a></li>
                                <li><a href="#" onClick={handleLogout}>Sign out</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default NavBar;
