import { useState } from 'react';
import airbnbLogo from '../assets/Icons/airbnb.svg';
import worldIcon from '../assets/Icons/world.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                {/* Logo */}
                <div className="logo">
                    <img src={airbnbLogo} alt="Airbnb logo" />
                </div>

                {/* Search Bar */}
                <div className="searchbar">
                    <form className="search-form">
                        <input type="search" placeholder="Search locations" required />
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
                                <li><a href="#">Sign out</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default NavBar;
