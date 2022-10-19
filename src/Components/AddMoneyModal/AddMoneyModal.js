import "./AddMoneyModal.css";

const AddMoneyModal = (props) => {
    return(
        <div className="addmoney">
            <h1>{props.title}</h1>
        
            <img src={props.imgUrl} alt="Deposit"/>
        </div>
    )
};


export default AddMoneyModal;