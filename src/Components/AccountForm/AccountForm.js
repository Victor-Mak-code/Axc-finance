import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./AccountForm.css";

const AccountForm = (props) => {
    return(
        <div className="account__formsection">
            <h3>Verify Account</h3>
            <FormInput formValue="First Name" />
            <FormInput formValue="Last Name"/>
            <FormInput formValue="Email Address"/>
            <FormInput formValue="Password" formType="password"/>
            <FormInput formValue="Phone Number"/>
            <FormInput formValue="Country/Region"/>
            <Button btnValue="Continue" btnClass="btn"/>
        </div>
    )
};


export default AccountForm;