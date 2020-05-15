import React, { Component } from 'react';
import { InfoConsumer } from "../components/context";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Reviews from "../components/Reviews";
import YouTube from "react-youtube"
import bit from "../components/assets/img/bitcoin1.jpeg"
import mining from "../components/assets/img/mining.jpg"
import mining1 from "../components/assets/img/mining1.jpg"
import mkb from "../components/assets/img/mkb.jpg"
import bpc from "../components/assets/img/bpc.jpg"
import front from "../components/assets/img/bitcoinfront.png"
import hp from "../components/assets/img/hlvingprice.png"
import wa from "../components/assets/img/wa.png"
import wa1 from "../components/assets/img/wa1.png"
import bdp from "../components/assets/img/bdp.png"
import ledger from "../components/assets/img/ledger.svg"
import miners from "../components/assets/img/miners.svg"
import dg from "../components/assets/img/dg.svg"
import bh from "../components/assets/img/bh.svg"
import ob from "../components/assets/img/ob.svg"
import ep from "../components/assets/img/ep.svg"
// https://www.youtube.com/watch?v=_nBlN9yp9R8
// https://youtu.be/_nBlN9yp9R8

class BitcoinD extends Component {
    render() {




        return (
            <div>
                {/* // <React.Fragment> */}
                <HeaderDetails className="container-fluid align-items-center">
                <h1 className="display-2 font-weight-bold "> <img src={front} alt='Plutus' className="card-img-top mb-5"style={{width:"150px", height:"150px"}}  />BITCOIN</h1>
               
                 
                   

                    {/* <h4 className="display-6 mb-2">Digital Gold /  Public Ledger</h4> */}
                    <br></br>
                    {/* <br></br> */}


                    <div className="container ">
                        <div className="row mt-3">
                            <div className="col-10 col-lg-4 mx-auto mt-4 mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <h3 className="card-title text-uppercase mt-3">Public Ledger</h3>
                                    <img src={ledger} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-4">Being a public ledger, the Bitcoin blockchain works similar to a bank database system.  As blocks are filled to capacity with transaction details, new blocks are mined and added to the blockchain by the network participants called miners.  </p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-10 col-lg-4 mx-auto mt-4 mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <h3 className="card-title text-uppercase mt-3">Miners</h3>
                                    <img src={miners} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text">Powerful machines and mining pools are used for mining. On average, the time it takes for all miner's computational power in the world to solve and obtain one new block is 10 minutes. Each block will give the miners a reward. This hard process is know as "Proof of Work" </p>
                                       

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-4 mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <h3 className="card-title text-uppercase mt-3">Digital Gold</h3>
                                    <img src={dg} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-4">Bitcoin is a scarce resource that's resistant to inflation. It's fixed supply of 21 million and it's process called "halving", make this system deflationary. Only 3 million Bitcoin are left to be mined and every 4 years the reward for mining new blocks is halved.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <h3 className="card-title text-uppercase mt-3">Halving</h3>
                                    <img src={bh} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-4"> When the "halving" occurs miners receive 50% fewer bitcoins for verifying transactions and creating new blocks. This "Halving" cycle is very important for speculators since the number of bitcoin produced are reduce and if the demand remains the same this means the price will increase substantially.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                   
                                    
                                    <div className="card-body">
                                    <img src={hp} alt='halving' style={{ width: "260px", height: "385px" }} className="card-img-top mb-3" />

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <h3 className="card-title text-uppercase mt-3">Be your own Bank</h3>
                                    <img src={ob} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-4"> Bitcoin makes it possible to have control over your money and to transfer value anywhere in the world. Its cryptography makes it so that nobody can take your money or make a payment on your behalf. Bitcoin can provide you with high security and financial freedom as long as you take your wallet's security seriously.  </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <h3 className="card-title text-uppercase mt-3">Part of the 1%</h3>
                                    <img src={bdp} alt='halving' className="card-img-top" style={{width:"200px" }} />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-5"> Owning 0.28 BTC makes you part of the 1% because of its fixed supply. A Bitcoin can be divided down to 8 decimal places. The smallest fraction is called a Satoshi. You don't have to buy, sell or transfer a whole bitcoin. You can start with a small amount before you get used to a wallet and exchanges.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 ">
                                <div className="card" style={{ width: "18rem" }}>
                                    <h3 className="card-title text-uppercase mt-3">Easy payments</h3>
                                   
                                    <p id="wan">Wallet address: 3E9jdx5TmpGwPvV6M7itiAd33NBuJgXtoZ</p>
                                    {/* <img src={wa1} alt='Bitcoin' className="card-img-top" style={{width:"250px", height:"100%"}} /> */}
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="wap" className="card-text mb-2 ">Using Bitcoin for big transaction is very easy. No need for a credit card, e-mail or in some cases to reveal your identity. There are no banks to make you wait 3-7 business days for the transaction to be compleat. You just need a address or a QR code to send or receive funds.</p>
                                        <img src={wa} alt='wallet address' id="wa" className="card-img-top" style={{width:"78px", height:"100%"}} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-4">
                                <div className="card" style={{ width: "18rem" }}>
                                    <h3 className="card-title text-uppercase mt-5">Getting Started</h3>
                                  <p>Having control over your money is a great responsibility. </p>
                                    <div className="card-body mb-4">
                                    <ul className="list-unstyled">
                                        <li >First you will need a <a href="/wallets">wallet</a> </li>
                                        
                                    <li>Second choose an <a href="/exchanges">exchange</a> </li>
                                    
                                </ul>
                          
                                

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-4">After acquiring BTC create a new address in your wallet and send yourself or to a friend/family member a small portion of Bitcoin so you can get used to the simplicity of cryptocurrencies. </p>

                                    </div>
                                </div>
                            </div>
                            

                        </div>

                    </div>

                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <i className="fab fa-facebook"></i>

                            </div>
                            <div className="col-2">
                                <i className="fab fa-twitter"></i>
                            </div>
                            <div className="col-2">
                                <i className="fab fa-google-plus-g" />
                            </div>
                            <div className="col-2">
                                <i className="fab fa-reddit" />
                            </div>
                            <div className="col-2">
                                <i className="fab fa-whatsapp" />
                            </div>
                            <div className="col-2">
                                <i className="fab fa-facebook-messenger" />
                            </div>
                        </div>
                    </div>

                </HeaderDetails>
                <br></br>

            </div>
            // </React.Fragment>
        );

    }
}




export default BitcoinD;


const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: 380vh;
/* text-transform: uppercase; */
color: var(--mainWhite);
text-align: center;

h1 {
    padding-top: 3%;
    color: var(--mainDark);
}
h2{
    color: var(--mainDark);
}
h3 {
    color: var(--mainDark);
}
h4 {
    color: var(--mainDark);
}
li{
    
    color: var(--mainDark); 
}
ul{
    margin-top:-6px;
}
p {
    padding-left: 6%;
    padding-right: 6%;
    margin-bottom: 2%;
    color: var(--mainDark);
}

img {
    align-self:center;
    width:50px;
    height:50px;
    padding-top: 4%;
    padding-left: 2%;
    padding-right: 2%;
}
#wa{
    padding-top:4px;
}
/* #wap{
    margin-top:-5px;
} */
#wan{
    font-size: 0.82rem;
}

i {
    font-size: 1.875rem;
    color: var(--mainDark);
}

i:hover {
   color: var(--mainBlue);
   cursor:pointer;
}

.nav-item {
    height: 18.75rem;
}



@media(max-width: 760px) {
    h1,h4{
        color:var(--mainWhite)
    }
    p{
        align-self:start;
        display: table;
    }
    
}
`;