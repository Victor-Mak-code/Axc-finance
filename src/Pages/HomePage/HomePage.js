import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import HeroTitle from "../../Components/HeroTitle/HeroTitle";
import HeroImg from "../../Components/HeroImg/HeroImg";
import darkCards from "../../Assets/images/dark-cards.png";
import About from "../../Components/About/About";
import AboutImg from "../../Components/AboutImg/AboutImg";
import AboutLists from "../../Components/AboutLists/AboutLists";
import AboutList from "../../Components/AboutList/AboutList";
import Footer from "../../Components/Footer/Footer";
import Footer1 from "../../Components/Footer1/Footer1";
import Footer2 from "../../Components/Footer2/Footer2";
import Modal from "../../Components/Modal/Modal";
import LoginForm from "../../Components/LoginForm/Login";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import MobileMenu from "../../Components/MobileMenu/MobileMenu";
import "./HomePage.css";

const HomePage = () => {
    const navigate = useNavigate();
    const [ShowModal, setShowModal] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    
    const LoginModalHandler = () => {
        setShowModal(true);
        setShowLoginForm(true);
    };
    const SignUpModalHadler = () => {
        setShowModal(true);
    };
    const closeModalHandler = () => {
        setShowModal(false);
        setShowLoginForm(false);
    };

    const GoToCardsPage = () => {
        navigate('/cards');
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

           {mobileNav ?  <MobileMenu CloseMobileNav={CloseMobileNav} SignUpModalHadler={SignUpModalHadler}/> : null}


            <Header SignUpModalHadler={SignUpModalHadler} ShowMobileNav={ShowMobileNav}/>
            <Hero>
                <HeroTitle 
                    titleDesc="AXC Cryptocurrency Virtual Cards" 
                    titleText1="Get Your Dollar Cards" 
                    titleText2="With No Limits"
                    btnValue1="Create Account"
                    btnValue2="Login to Account"
                    btnClass1="btn"
                    btnClass2="btn"
                    LoginModalHandler={LoginModalHandler}
                    SignUpModalHadler={SignUpModalHadler}
                   
                />

                <HeroImg 
                heroImg={darkCards}
                
                />
            </Hero>

            <About>
                <AboutImg />

                <AboutLists GoToCardsPage={GoToCardsPage}>
                    <AboutList textValue="A user can only purchase a virtual dollar card.."/>
                    <AboutList textValue="Spend your crypto as Fiat with our virtual dollar Card."/>
                    <AboutList textValue="AXC Finance Contains price tracking of crypto Stablecoins."/>
                </AboutLists>
            
            </About>


            <Footer>
                <Footer1 />
                <Footer2 />
            </Footer>
        </div>
    )
};


export default HomePage;