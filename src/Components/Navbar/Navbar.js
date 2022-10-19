import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
    return(
        <div className="navbar">
            <ul>
                <li><Link to="/" className="nav__link">Home</Link></li>
                <li><Link to="/about" className="nav__link">About us</Link></li>
                <li><Link to="/cards" className="nav__link">Cards</Link></li>
                <li><Link to="/accounts" className="nav__link">Accounts</Link></li>
                <li><Link to="/cryptowallet" className="nav__link">Crypto Wallet</Link></li>
            </ul>
        </div>
    )
};




export default Navbar;