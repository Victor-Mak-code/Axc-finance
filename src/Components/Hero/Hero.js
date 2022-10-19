import "./Hero.css";

const Hero = (props) => {
    return(
        <div className="hero__section">
            {props.children}
        </div>
    )
}


export default Hero;