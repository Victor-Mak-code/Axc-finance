import "./Footer.css";

const Footer = (props) => {
    return(
        <div className="footer">
            {props.children}
        </div>
    )
};

export default Footer;