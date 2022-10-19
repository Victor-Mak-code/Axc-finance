import {FaTimes} from "react-icons/fa";
import "./Modal.css";

const Modal = (props) => {
    return(
        <div className="modal">
            <div className="modal__content">
               <div className="close__btn" onClick={props.closeModalHandler}>
                     <FaTimes className="close__icon" />
               </div>

                {props.children}
            </div>
        </div>
    )
};


export default Modal;