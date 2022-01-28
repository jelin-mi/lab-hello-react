import './Navbar.css';
import logo from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png';

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="logo"/>
            <img src={menu} alt="menu"/>
        </div>
    );
}

export default Navbar;