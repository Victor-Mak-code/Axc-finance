import {FaCheck} from "react-icons/fa";
import "../CardTransactions/CardTransactions.css";

const CardTransaction = (props) => {
    return(
        <div className="card__transaction">
             
            <FaCheck className="check__icon" />

            <div className="transaction__name">
                <span>{props.transactionName}</span>
             </div>

            <div className="transaction__price">
                <span>{props.transactionPrice}</span>
            </div>
        </div>
    )
};

export default CardTransaction;

