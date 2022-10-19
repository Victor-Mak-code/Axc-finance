import { MdOutlineVisibilityOff} from "react-icons/md";
import "./CardInfoBox.css";

const CardInfoBox = (props) => {
    return(
        <div className="cardinfobox cardnow">
                <h1>Welcome!, Martins 👋🏼</h1>
                <div className="card__details">
                    <div className="card__balance">
                         <div>
                            <h3>Card Balance</h3>
                            <span>$100,000,000</span>
                         </div>

                         <div>
                            <MdOutlineVisibilityOff className="hide__data" />
                         </div>
                    </div>

                    <hr />

                    <div className="card__info">
                        <span>CVV:</span> <span>015</span>
                    </div>

                    <div className="card__info">
                        <span>Card Number:</span> <span> 7627919782728</span>
                    </div>

                     <div className="card__info">
                        <span>Card Name:</span> <span> Martins Okechukwu Igwe</span>
                    </div>
                    
                </div>
        </div>
    )
};


export default CardInfoBox;