
import { useEffect, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import CryptoTab from '../Components/CryptoTab';
import CryptoModule from '../Components/CryptoModule';

export default function HomePage() {
    const [listings, setListings] = useState([]);
    const [chosenCrypto, setChosenCrypto] = useState(false);
    const [chosenCryptoData, setChosenCryptoData] = useState();

    useEffect(() => {
        setChosenCrypto(false);
        setChosenCryptoData();
        axios('/api/home').then(async (data) => {
            Object.values(await data)[0]['data'].map((crypto_data) => {
                setListings(listings => [...listings, crypto_data]);
            })
        })
    }, []);

    function openDashboard (cid) {
          axios(`/api/crypto/${cid}`).then(async (data) => {
              setChosenCryptoData(await data['data']['data'][cid]);
              setChosenCrypto(true);
          })      
    }

    return (
        <div id="crypto_col" className={chosenCrypto ? 'row' : ''} style={{display:'flex'}}>
            <ul id="list_cryptos" className={chosenCrypto ? 'column' : ''} style={{width: chosenCrypto ? '50%' : '100%'}}>
                {
                    listings.map(crypto_data =>
                        <li className=".flex" >
                            <CryptoTab id={crypto_data.id} name={crypto_data.name} symbol={crypto_data.symbol}
                                img="./crypto-broker.jpeg" price={crypto_data.quote}
                                circ_supply={crypto_data.circulating_supply} total_supply={crypto_data.total_supply}
                                cmc_rank={crypto_data.cmc_rank} platforms={crypto_data.platforms} openDashboard={openDashboard} />
                        </li>
                    )
                }
            </ul>
            {
                chosenCrypto ? 
                < CryptoModule data={chosenCryptoData}/> //width needs to be 50% too 
                :
                <></>
            }
        </div>
    );
}