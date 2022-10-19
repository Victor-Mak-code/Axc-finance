import Button from "../Button/Button";
import "./HeroImg.css";

const HeroImg = (props) => {
    return(
        <div className="hero__img">
            <img src={props.heroImg} alt="hero-img"/>

            <div className="hero__img-btn">
               <Button btnValue={props.btnValue1} btnClass={props.btnClass1} btnAction={props.showPaymentHandler}/> 
               <Button btnValue={props.btnValue2} btnClass={props.btnClass2} btnAction={props.closePaymentModal} />
            </div>
        </div>
    )
}

export default HeroImg;