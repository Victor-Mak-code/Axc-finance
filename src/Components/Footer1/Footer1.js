import Logo from "../Logo/Logo";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer1.css";

const Footer1 = (props) => {
    return(
        <div className="footer1__box">
             <Logo />
            
            <div className="form__footer">
                 <FormInput formValue="Enter your email address" />
                 <Button btnValue="Subscribe" btnClass="btn"/>
            </div>

            <div className="socials__footer">
                <a href="https://axcfinance.netlify.app/">
                    <FaFacebookF />
                </a>

                <a href="https://axcfinance.netlify.app/">
                    <FaTwitter />
                </a>

                 <a href="https://axcfinance.netlify.app/">
                    <FaInstagram />
                </a>
            </div>
        
        </div>
    )
};


export default Footer1;