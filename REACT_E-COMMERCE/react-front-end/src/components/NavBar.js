import { Link } from "react-router-dom";
const NavBar = () => {
    return(
    <div id="navbar" className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <div id="compname" className="d-flex link-body-emphasis text-decoration-none">
            <h2 className="jomolhari-headers" id="h2">Framely</h2>
        </div>
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}
            <Link id="icons" to="/home">
                <img src="home.png" alt="Home"/>
            </Link>
            <Link id="icons" to="/cart">
                <img src="cart.png" alt="Cart"/>
            </Link>
            <Link id="icons" to="/account">
                <img src="account.png" alt="Account"/>
            </Link>
            <Link id="icons" to="/search">
                <img src="search.png" alt="search"/>
            </Link>
        </nav>
    </div>
    )
}

export default NavBar;