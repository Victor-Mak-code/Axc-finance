import React, {useState} from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import HeroTitle from "../../Components/HeroTitle/HeroTitle";
import HeroImg from "../../Components/HeroImg/HeroImg";
import Wallet from "../../Assets/images/wallet.svg";
import Footer from "../../Components/Footer/Footer";
import Footer1 from "../../Components/Footer1/Footer1";
import Footer2 from "../../Components/Footer2/Footer2";
import Modal from "../../Components/Modal/Modal";
import LoginForm from "../../Components/LoginForm/Login";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import MobileMenu from "../../Components/MobileMenu/MobileMenu";
import "./Crypto.css";

const CryptoWalletPage = () => {

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
        <div className="crypto__page">
            
            {ShowModal ? <Modal closeModalHandler={closeModalHandler}>
               {showLoginForm ?  <LoginForm /> : <SignUpForm />}
            </Modal>
            : null}


            {mobileNav ?  <MobileMenu CloseMobileNav={CloseMobileNav} SignUpModalHadler={SignUpModalHadler}/> : null}


            <Header SignUpModalHadler={SignUpModalHadler} ShowMobileNav={ShowMobileNav}/>

            <Hero>
                <HeroTitle 
                    titleDesc="YOUR ONE STOP CRYPTO WALLET" 
                    titleText1="AXC Crypto Wallet"
                    titleText2="Coming Soon !!"
                /> 

                <HeroImg heroImg={Wallet}  />
            </Hero>


            <Footer>
                <Footer1 />
                <Footer2 />
            </Footer>
        </div>
    )
};

export default CryptoWalletPage;