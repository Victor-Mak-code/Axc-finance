import logo from "../../Assets/images/logo.png";
import "./Logo.css";

const Logo = () => {
    return(
        <div className="logo__box">
            <img src={logo} alt="Logo"/>
        </div>
    )
};


export default Logo;