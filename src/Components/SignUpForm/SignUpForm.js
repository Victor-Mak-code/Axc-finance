import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

const SignUpForm = () => {
    return(
        <div className="signup__form">
            <h2>Create Account</h2>
            <FormInput formValue="First Name" />
            <FormInput formValue="Last Name" />
            <FormInput formValue="Email Address" />
            <FormInput formValue="Password" formType="password" />
            <Button btnValue="Create Account" btnClass="btn"/>
        </div>
    )
};

export default SignUpForm;