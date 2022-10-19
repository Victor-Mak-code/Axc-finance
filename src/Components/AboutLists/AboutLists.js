import Button from "../Button/Button";
import "./AboutLists.css";

const AboutLists = (props) => {
    return(
        <div className="about__list-box">
            <div className="about__lists">
                <h1>Features</h1> 
                {props.children}
            </div>

            <div className="about__btn">
                <Button btnValue="Get Your Virtual Cards" btnClass="btn-white" btnAction={props.GoToCardsPage}/>
            </div>
        </div>
    )
};


export default AboutLists;
