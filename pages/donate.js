import React from 'react';
import Web3 from 'web3';
import $ from 'jquery';

export const Donation = () => {
        const smartCAddress = '0xCf0b0429Ef6214a152046cA81c9d5F5fb67aAb63';
        const web3 = new Web3(window.ethereum);
        web3.eth.getAccounts().then((acc) => {
            web3.eth.defaultAccount = acc[0]
        })

        const donateToPerson = () => {
            let donateAmount = $("#donateNum").val() * 1e18;
            let options = {
                to: smartCAddress, 
                value: donateAmount.toString()
            };
            web3.eth.sendTransaction(options).then((receipt) => {
                console.log(receipt)
            })
        }

    return (
        <div className='w-full h-full flex mt-10' >  
            <div className="flex flex-col w-full" style={{marginTop:'30%', marginLeft:'40%'}}>
                <input type="number" id="donateNumUsd" className="outline-none focus:ring-2 focus:ring-yellow-200 mb-10 text-center rounded-xl shadow-xl p-2" placeHolder="Amount in USD" style={{width:'50%'}}/>
                <input type="number" id="donateNum" className="outline-none focus:ring-2 focus:ring-yellow-200 mb-10 rounded-xl text-center shadow-xl p-2" placeHolder="Amount of ONE" style={{width:'50%'}}/>
                <button className="rounded-xl shadow-xl p-2 ring-4 ring-yellow-200" onClick={() => donateToPerson()} style={{width:'50%'}}> Donate!</button>        
            </div>
        </div>
    )

}

export default Donation;