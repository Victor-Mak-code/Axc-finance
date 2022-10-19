import whiteCards from "../../Assets/images/white-dark-cards.png";
import "./AboutImg.css";

const AboutImg = (props) => {
    return(
        <div className="about__img">
            <img src={whiteCards} alt="about-cards" />
        </div>
    )
};

export default AboutImg;