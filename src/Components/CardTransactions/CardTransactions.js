import Button from "../Button/Button";
import "./CardTransactions.css";

const CardTransactions = (props) => {
    return(
        <div className="card__transactions--box">
             <h3>Recent Transactions</h3>
             
                <div className="card__transaction__main">
                    {props.children}
                </div>

            <div className="card__transactions--btn">
                 <Button btnValue="View More" btnClass="btn-white"/>
            </div>
        </div>
       
    )
};



export default CardTransactions;