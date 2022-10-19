import Button from "../Button/Button";
import "./HeroTitle.css";

const HeroTitle = (props) => {
    return(
        <div className="hero__title-box">
            <div className="hero__title">
                <p>{props.titleDesc}</p>
                <h1>
                    {props.titleText1}
                    <br /> {props.titleText2}
                </h1>
            </div>

            <div className="hero__btn">
                <Button btnValue={props.btnValue1} btnClass={props.btnClass1} btnAction={props.SignUpModalHadler} />
                <Button btnValue={props.btnValue2} btnClass={props.btnClass2} btnAction={props.LoginModalHandler}/>
            </div>
        </div>
    )
};


export default HeroTitle;