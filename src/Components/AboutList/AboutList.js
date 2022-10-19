import { FaCheck } from "react-icons/fa";
import "./AboutList.css";

const AboutList = (props) => {
    return(
      <div className="about__list">
            <FaCheck className="about__icon" />
            <span>{props.textValue}</span>
        </div>
    )
};


export default AboutList;