import airbnbLogo from '../assets/Icons/airbnb.svg'
import a from '../assets/Icons/Ryokans.png'
import b from '../assets/Icons/Rooms.png'
import c from '../assets/Icons/Riads.png'
import d from '../assets/Icons/Yurts.png'
import e from '../assets/Icons/Top Cities.png'
import f from '../assets/Icons/Top of the world.png'
import g from '../assets/Icons/Tropical.png'
import h from '../assets/Icons/Outdoor.png'
import i from '../assets/Icons/Islands.png'
import j from '../assets/Icons/Lakefront.png'
import k from '../assets/Icons/Hotel.png'
import l from '../assets/Icons/Farms.png'
import w from '../assets/Icons/world.png'
import { useState } from 'react'
const NavBar = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        {/* <h1>The navbar </h1> */}
        <div className="navbarr">
            <div className="loogo">
                <img src={airbnbLogo} className="loogo" alt="Airbnb logo" />
            </div>
            <div className="searchbar">Stay | Experience
                <form class="max-w-md mx-auto insidesearch">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:ring-blue-500 focus:border-blue-500" placeholder="Search locations" required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#ff385c] hover:bg-[#e63950] focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>
                {/* <div className='insidesearch'></div> */}
            </div>
            <div className="signup">
                <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 py-0.5 px-0.5 rounded-full">Airbnb your home</button>
                <img src={w} className="ogo" alt="Airbnb logo" />

                <button onClick={()=>setIsOpen(!isOpen)} data-dropdown-toggle="dropdown" class="text-white end-2.5 bottom-2.5 bg-[#ff385c] hover:bg-[#e63950] focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2" type="button">Account

                </button>
                {isOpen &&(
                <div id="dropdown" class="absolute mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-200">
                    <ul class="py-2 text-sm text-gray-700 dark:text-black-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 hover:bg-gray-400 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white">Sign out</a>
                    </li>
                    </ul>
                </div>
                )}
            </div>
        </div>
        <div className='icoons'>
            <img src={a} className="ogo" alt="Airbnb logo" />
            <img src={b} className="ogo" alt="logo" />
            <img src={c} className="ogo" alt="Airbnb logo" />
            <img src={d} className="ogo" alt="Airbnb logo" />
            <img src={e} className="ogo" alt="Airbnb logo" />
            <img src={f} className="ogo" alt="Airbnb logo" />
            <img src={g} className="ogo" alt="Airbnb logo" />
            <img src={h} className="ogo" alt="Airbnb logo" />
            <img src={i} className="ogo" alt="Airbnb logo" />
            <img src={j} className="ogo" alt="Airbnb logo" />
            <img src={k} className="ogo" alt="Airbnb logo" />
            <img src={l} className="ogo" alt="Airbnb logo" />
            <img src={a} className="ogo" alt="Airbnb logo" />
            <img src={b} className="ogo" alt="Airbnb logo" />
            <img src={c} className="ogo" alt="Airbnb logo" />
            <img src={d} className="ogo" alt="Airbnb logo" />
            <img src={e} className="ogo" alt="Airbnb logo" />
            <img src={f} className="ogo" alt="Airbnb logo" />
            <img src={g} className="ogo" alt="Airbnb logo" />
            <img src={h} className="ogo" alt="Airbnb logo" />
            <img src={i} className="ogo" alt="Airbnb logo" />
            <img src={j} className="ogo" alt="Airbnb logo" />
            <img src={k} className="ogo" alt="Airbnb logo" />
            <img src={l} className="ogo" alt="Airbnb logo" />
            <img src={a} className="ogo" alt="Airbnb logo" />
            <img src={b} className="ogo" alt="Airbnb logo" />
            <img src={c} className="ogo" alt="Airbnb logo" />
            <img src={d} className="ogo" alt="Airbnb logo" />
            <img src={e} className="ogo" alt="Airbnb logo" />
            <img src={f} className="ogo" alt="Airbnb logo" />
            <img src={g} className="ogo" alt="Airbnb logo" />
            <img src={h} className="ogo" alt="Airbnb logo" />
            <img src={i} className="ogo" alt="Airbnb logo" />
            <img src={j} className="ogo" alt="Airbnb logo" />
            <img src={k} className="ogo" alt="Airbnb logo" />
            <img src={l} className="ogo" alt="Airbnb logo" />
            <img src={b} className="ogo" alt="Airbnb logo" />
            <img src={c} className="ogo" alt="Airbnb logo" />
            <img src={d} className="ogo" alt="Airbnb logo" />
            <img src={e} className="ogo" alt="Airbnb logo" />
            <img src={f} className="ogo" alt="Airbnb logo" />
            <img src={g} className="ogo" alt="Airbnb logo" />
            <img src={h} className="ogo" alt="Airbnb logo" />
            <img src={i} className="ogo" alt="Airbnb logo" />
            </div>

        </>
    )
}
export default NavBar;