import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./Login.css";

const LoginForm = (props) => {
    return(
        <div className="login__form">
            <h2>Hi👋🏼 Welcome Back </h2>

            <FormInput formValue="Email Address" formType="text"/>
            <FormInput formValue="Password" formType="password"/>

            <div className="login__btn">
                  <Button btnValue="Login to Account" btnClass="btn"/>
            </div>
        </div>
    )
};

export default LoginForm;
