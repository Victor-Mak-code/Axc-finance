import Button from "../Button/Button";
import { Link } from "react-router-dom";
import {FaTimes} from "react-icons/fa";
import "./MobileMenu.css";

const MobileMenu = (props) => {
    return(
        <div className="mobile__menu">
           <div className="menu__content">
             <div className="close__icon" onClick={props.CloseMobileNav}>
                <FaTimes />
            </div>
                <h3>Menu</h3>

                
                <div className="menu__links">
                    <Link to="/" className="menu__link">Home</Link>
                    <Link to="/about" className="menu__link">About us</Link>
                    <Link to="/cards" className="menu__link">Cards</Link>
                    <Link to="/accounts" className="menu__link">Accounts</Link>
                    <Link to="/cryptowallet" className="menu__link">Crypto Wallet</Link>
                </div>

                <Button btnValue="Create Account" btnClass="btn" btnAction={props.SignUpModalHadler}/>
           </div>
        </div>
    )
};


export default MobileMenu;