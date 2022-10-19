import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import HeroImg from "../../Components/HeroImg/HeroImg";
import CardInfoBox from "../../Components/CradInfoBox/CardInfoBox";
import Deposit from "../../Assets/images/deposit.svg";
import About from "../../Components/About/About";
import CardTransaction from "../../Components/CardTransaction/CardTransaction";
import CardAccount from "../../Components/CardAccount/CardAccount";
import Footer from "../../Components/Footer/Footer";
import Footer1 from "../../Components/Footer1/Footer1";
import Footer2 from "../../Components/Footer2/Footer2";
import Modal from "../../Components/Modal/Modal";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import MobileMenu from "../../Components/MobileMenu/MobileMenu";
import AddMoneyModal from "../../Components/AddMoneyModal/AddMoneyModal";
import Button from "../../Components/Button/Button";
import "./CardPage.css";

const CardPage = (props) => {
    const navigate = useNavigate();
    const [ShowModal, setShowModal] = useState(false);
    const [showSignupForm, setShowSignUpForm] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [showPay, setShowPay] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);


    const GoToCardsPage = () => {
        navigate('/accounts');
    };
    const SignUpModalHadler = () => {
        setShowModal(true);
        setShowSignUpForm(true);
        setShowPayment(false);
    };
    const closeModalHandler = () => {
        setShowModal(false);
        setShowSignUpForm(false);
        setShowPayment(false);
        setShowPay(false);
    };
    const ShowMobileNav = () => {
        setMobileNav(true);
    };
    const CloseMobileNav = () => {
        setMobileNav(false);
    };

    const showPaymentHandler = () => {
        setShowModal(true);
        setShowPayment(true);
    };

    const closePaymentModal = () => {
        setShowModal(true);
        setShowPayment(false);
        setShowPay(true);
    };

    return(
        <div className="card__page">

            
            {ShowModal ? <Modal closeModalHandler={closeModalHandler}>
               {showSignupForm ?  <SignUpForm /> : null}

               {showPayment ? <AddMoneyModal title="AXC Deposits Coming Soon!!!" imgUrl={Deposit}/> : showPay ?
               <AddMoneyModal title="AXC Withdrawals Coming Soon!!!" imgUrl={Deposit}/> : null }

            </Modal>
            : null}

            {mobileNav ?  <MobileMenu CloseMobileNav={CloseMobileNav} SignUpModalHadler={SignUpModalHadler} /> : null}

            <Header SignUpModalHadler={SignUpModalHadler}  ShowMobileNav={ShowMobileNav}/>

            <Hero>
                <CardInfoBox />

                <HeroImg 
                heroImg={Deposit}
                btnValue1="Deposit" 
                btnValue2="Withdraw"
                btnClass1="btn"
                btnClass2="btn"
                showPaymentHandler={showPaymentHandler}
                closePaymentModal={closePaymentModal}
                />

            </Hero>

            <About>
              

            <div className="transactions__box-app">
                    <h3>Recent Transactions</h3>

                    <div className="transaction-box-card">
                        <CardTransaction transactionName="SSD Hard Drive" transactionPrice="$300"/>
                        <CardTransaction transactionName="Bitcoin Transfer" transactionPrice="$5000"/>
                        <CardTransaction transactionName="Samsung ZFold" transactionPrice="$10,000"/>
                        <CardTransaction transactionName="Dell Latitude" transactionPrice="$20,000"/>
                        

                        <div className="view__more-btn">
                            <Button btnValue="View More" btnClass="btn-white"/>
                        </div>
                    </div>

            </div>
                 
                   
            <CardAccount GoToCardsPage={GoToCardsPage} />

             
            </About>


            <Footer>
                <Footer1 />
                <Footer2 />
            </Footer>

        </div>
    )
}


export default CardPage;