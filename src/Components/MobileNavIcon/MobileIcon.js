import {FaBars} from "react-icons/fa";
import "./MobileIcon.css";

const MobileNavIcon = (props) => {
    return(
        <div className="mobile__nav--icon" onClick={props.ShowMobileNav}>
            <FaBars className="mobile__icon" />
        </div>
    )
}

export default MobileNavIcon;