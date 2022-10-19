import "./Button.css";

const Button = (props) => {
    return(
        <div className="btn__box">
            <button className={props.btnClass} onClick={props.btnAction}>{props.btnValue}</button>
        </div>
    )
};


export default Button;
