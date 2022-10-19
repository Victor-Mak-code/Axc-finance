import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import MobileNavIcon from "../MobileNavIcon/MobileIcon";
import "./Header.css";


const Header = (props) => {
    return(
        <div className="header__section">
             <Logo />
             <Navbar />
             <Button btnValue="Create Account" btnClass="btn" btnAction={props.SignUpModalHadler}/>
             <MobileNavIcon ShowMobileNav={props.ShowMobileNav}/>
        </div>
    )
};


export default Header;