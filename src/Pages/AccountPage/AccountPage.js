import React,{ useState} from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import HeroTitle from "../../Components/HeroTitle/HeroTitle";
import AccountForm from "../../Components/AccountForm/AccountForm";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import Footer1 from "../../Components/Footer1/Footer1";
import Footer2 from "../../Components/Footer2/Footer2";
import Modal from "../../Components/Modal/Modal";
import LoginForm from "../../Components/LoginForm/Login";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import MobileMenu from "../../Components/MobileMenu/MobileMenu";
import "./AccountPage.css";

const AccountPage = (props) => {

    const [ShowModal, setShowModal] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    const SignUpModalHadler = () => {
        setShowModal(true);
    };
    const closeModalHandler = () => {
        setShowModal(false);
        setShowLoginForm(false);
    };

    const ShowMobileNav = () => {
        setMobileNav(true);
    };
    const CloseMobileNav = () => {
        setMobileNav(false);
    };


    return(
        <div>

            {ShowModal ? <Modal closeModalHandler={closeModalHandler}>
               {showLoginForm ?  <LoginForm /> : <SignUpForm />}
            </Modal>
            : null}

            {mobileNav ?  <MobileMenu CloseMobileNav={CloseMobileNav} SignUpModalHadler={SignUpModalHadler} /> : null}

            <Header SignUpModalHadler={SignUpModalHadler} ShowMobileNav={ShowMobileNav}/>
            <Hero>
                <HeroTitle 
                    titleDesc="COMPLETE YOUR KYC TO CONTINUE" 
                    titleText1="Verify Your Identity"
                    titleText2="To Get your Dollar Card"
                />

                <AccountForm />
            </Hero>

            <About />

            <Footer>
                <Footer1 />
                <Footer2 />
            </Footer>
            
        </div>
    )
};

 export default AccountPage;