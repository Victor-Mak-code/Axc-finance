import { Link } from "react-router-dom";
import "./Footer2.css";

const Footer2 = (props) => {
    return(
        <div className="footer2">
            <div className="footer__links">
                 <h3>Support</h3>
                 <Link to="/" className="footer__link">Customer Center</Link>
                 <Link to="/" className="footer__link">Virtual Cards</Link>
                 <Link to="/" className="footer__link">Contact Us</Link>
                 <Link to="/" className="footer__link">Accounts Center</Link>
            </div>

            <div className="footer__links">
                 <h3>Links</h3>
                 <Link to="/" className="footer__link">Sign Up</Link>
                 <Link to="/" className="footer__link">Create account</Link>
                 <Link to="/" className="footer__link">Crypto Wallet</Link>
                 <Link to="/" className="footer__link">Accounts Center</Link>
            </div>

             <div className="footer__links">
                 <h3>Features</h3>
                 <Link to="/" className="footer__link">Track Stable Coins</Link>
                 <Link to="/" className="footer__link">Request Cards</Link>
                 <Link to="/" className="footer__link">Contact Us</Link>
                 <Link to="/" className="footer__link">Accounts Center</Link>
            </div>
        </div>
    )
}


export default Footer2;