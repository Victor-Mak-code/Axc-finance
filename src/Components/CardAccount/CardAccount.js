import {FaUserAlt} from "react-icons/fa";
import Button from "../Button/Button";

import "./CardAccount.css";

const CardAccount = (props) => {
    return(
        <div className="card__account">
    

            <div className="card__edit">
                <FaUserAlt className="account__icon"/>
            </div>

           <div className="accounts__btn">
             <Button btnValue="Profile Information" btnClass="btn-white" btnAction={props.GoToCardsPage}/>
           </div>
        </div>
    )
};



export default CardAccount;