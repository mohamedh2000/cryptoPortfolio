import {useState} from 'react';
import CryptoMarket from './cryptomarket';
import Donation from './donate';
import NavBar from '../Components/NavBar.js';
import '../styles/Home.module.css';


export default function Home() {

  const [home, setHome] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [cryptoMarket, setCryptoMarket] = useState(true);
  const [marketplace, setMarketplace] = useState(false);
  const [donation, setDonation] = useState(false);

  const setPage = (page) => {
      if(page == "home") {
        setHome(true);
        setPortfolio(false);
        setCryptoMarket(false);
        setMarketplace(false);
        setDonation(false);
      }
      else if(page == "portfolio") {
        setHome(false);
        setPortfolio(true);
        setCryptoMarket(false);
        setMarketplace(false);
        setDonation(false);
      }
      else if (page == 'cryptomarket') {
        setHome(false);
        setPortfolio(false);
        setCryptoMarket(true);
        setMarketplace(false);
        setDonation(false);
      }
      else if (page == "marketplace") {
        setHome(false);
        setPortfolio(false);
        setCryptoMarket(false);
        setMarketplace(true);
        setDonation(false);
      }
      else { 
        setHome(false);
        setPortfolio(false);
        setCryptoMarket(false);
        setMarketplace(false);
        setDonation(true);
      }
  }


  return (
    <div className="flex flex-col">
      <NavBar setPage={setPage}/>
      {
        (cryptoMarket ? <CryptoMarket /> : <Donation />)
      }
    </div>
  )
}
