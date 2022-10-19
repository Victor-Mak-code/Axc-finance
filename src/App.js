import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import CryptoWalletPage from "./Pages/CryptoWalletPage/Crypto";
import AccountPage from "./Pages/AccountPage/AccountPage";
import CardPage from "./Pages/CardPage/CardPage";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/about" element={<AboutPage />}/>
              <Route path="/cryptowallet" element={<CryptoWalletPage />}/>
              <Route path="/accounts" element={<AccountPage/>}/>
              <Route path="/cards" element={<CardPage/>}/>
             
          </Routes>
        </BrowserRouter>
       
      
    </div>
  );
}

export default App;
