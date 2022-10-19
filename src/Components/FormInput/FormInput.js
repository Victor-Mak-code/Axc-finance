import "./FormInput.css";

const FormInput = (props) => {
    return(
        <div className="form__input">
            <input placeholder={props.formValue} type={props.formType}/>
        </div>
    )
};


export default FormInput;