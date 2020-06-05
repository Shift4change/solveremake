import React, { Component } from 'react';
import { InfoConsumer } from "../components/context";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Reviews from "../components/Reviews";
import YouTube from "react-youtube"
import ada from "../components/assets/img/adacoin.png"
import hp from "../components/assets/img/hlvingprice.png"
import wa from "../components/assets/img/wa.png"
import ac from "../components/assets/img/adacurrency.png"
import sa from "../components/assets/img/sa.png"
import wa1 from "../components/assets/img/wa1.png"
import bdp from "../components/assets/img/bdp.png"
import blogo from "../components/assets/img/blogo.png"
import bank from "../components/assets/img/bank.png"
import ledger from "../components/assets/img/ledger.svg"
import miners from "../components/assets/img/miners.svg"
import dg from "../components/assets/img/dg.svg"
import bh from "../components/assets/img/bh.svg"
import ob from "../components/assets/img/ob.svg"
import power from "../components/assets/img/powering.svg"
import networking from "../components/assets/img/networking.png"
import aw from "../components/assets/img/aw.png"
import adabank from "../components/assets/img/adabank.png"
import "./adaInfo.css"
class AdaA extends Component {
    render() {




        return (
            <div>
                {/* // <React.Fragment> */}
                <HeaderDetails id="hd" className="container-fluid align-items-center">
                    <h1 className="display-2 font-weight-bold " id="front" > <img src={ada} alt='Front' id="ada" className="card-img-top " style={{width: "175px", height: "175px"}} /></h1>
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <Link to="/bitcoin">
                                    <i id="left" class="fas fa-arrow-left"> </i> </Link>
                            </div>
                            <div className="col-2">
                                <Link to="/cardano">
                                    <i id="right" class="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div id="adaa" className="container ">
                        <div className="row mt-">
                            <div className="col-10 col-lg-4 col-xl-4 mx-auto mt-4 mb-5">
                                <div className="card" >
                                    <h3 className="card-title text-uppercase mt-3">Blockchain</h3>
                                    <img src={power} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-4">This revolutionary new technology was implemented to help you build trust without a third party. The blockchain can store information about transaction, contracts, identity and anything that has to do with finance. The goal is to cut the expensive middle man and put you in control of your data, money and information.  </p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-10 col-lg-4 col-xl-4 mx-auto mt-4 mb-5">
                                <div className="card" >
                                    <h3 className="card-title text-uppercase mt-3">currency</h3>
                                    <img id="ac" src={ac} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="acp" className="card-text mb-5">ADA is the currency that powers the Cardano Blockchain. Using ADA, you will be able to interact with Cardano. Whether you will stake, create smart contracts or send value through the Blockchain you will do so trusting that ADA provides fast and secure transactions . </p>


                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 col-xl-4 mx-auto mt-4 mb-5">
                                <div className="card" >
                                    <h3 className="card-title text-uppercase mt-3">Staking vs mining</h3>
                                    <img id="sa" src={sa} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="sap" className="card-text mb-4">Staking pools compete to validate transactions and to generate new blocks. This process decentralizes the network, is highly efficient and inexpansive compared to mining pools, which are using expensive machines, a high amount of electricity and the network participants are not rewarded in this process.  </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <div className="card" >
                                    <h3 className="card-title text-uppercase mt-3">Staking ADA</h3>
                                    <img src={networking} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="dp" className="card-text ">Delegating ADA to a Staking Pool increases the chances for the Pool to find a new Block and therefore to generate rewards. A Staking Pool is a highly competitive business that has to be on 24/7 to generate Blocks and create trust with its delegators (You). The rewards are distributed automatically by the network not by the Stake Pool Operators. Staking rewards are the incentive for delegating your ADA and participating in the network.  </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <div className="card">
                                    <h3 className="card-title text-uppercase mt-3">Pool Operators</h3>
                                    <img src={bank} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">
                                        <p id="po" className="card-text ">Anyone can become a Stakepool owner/operator. You will need some Devops knowledge and a lot of time but anyone can do it. To decentralize the network it is encouraged to create a Staking pool if you have the skills. In order to provide trust with the delegators (You), the Pool owners/operators have to pledge a significant amount of ADA before successfully running a Staking Pool, generating blocks and getting rewards. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <div className="card">
                                    <h3 className="card-title text-uppercase mt-3">Be your own Bank</h3>
                                    <img src={adabank} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="ab" className="card-text ">The speed of Transactions are currently at 1000 tps this will increase over time. Being faster then Bitcoin, having low fees and staking, make ADA an important asset that you can use to transfer value any time and anywhere  in the world. Its cryptography makes it so that nobody can take your money or make a payment on your behalf. ADA can provide you with high security and financial freedom as long as you take your wallet's security seriously.  </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <div className="card" >
                                    <h3 className="card-title text-uppercase mt-3 mb-3 ">participants</h3>
                                    {/* <img src={bdp} alt='halving' className="card-img-top" style={{width:"200px" }} /> */}
                                    <p id="wan">3176.0008067 ADA</p>
                                    <div className="card-body mb-3">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="pap" className="card-text mb-5">   ADA is a deflationary cryptocurrency that has a fixed supply and can be divided down to 8 decimal places. The smallest fraction is called a Lovelace.  Getting your funds of the exchanges and creating your wallet, will put you in control. Choosing one or multiple Staking Pools will be available to you in your Wallet.  You can start with a small amount before you get used to a wallet and exchanges.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 ">
                                <div className="card" >
                                    <h3 className="card-title text-uppercase mt-3">Easy payments</h3>
                                    <div className="cardbody">
                                        <p id="add" className="card-text">ADA address:
                                        DdzFFzCqrht8AKqAywbC8Wins2B2BJXyz
                                        iuqb8Y1VFECC6giTyWhr5CjMrRgn
                                        eaARPbtEWPDf9gHiCTGFaWaRZosV
                                    TrvuhYEEK9mzPt4</p>
                                        {/* <img src={wa1} alt='Bitcoin' className="card-img-top" style={{width:"250px", height:"100%"}} /> */}
                                    </div>
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="wap" className="card-text mb-2 ">Using ADA for transaction is very easy. No need for a credit card, e-mail or in some cases to reveal your identity. There are no banks to make you wait 3-7 business days for the transaction to be compleat. You just need an address or a QR code to send or receive funds.</p>
                                        <img src={aw} alt='wallet address' id="wa" className="card-img-top" style={{ width: "78px", height: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-">
                                <div className="card" >
                                    <h3 className="card-title text-uppercase mt-3">Getting Started</h3>
                                    <p>Having control over your money is a great responsibility. </p>
                                    <div className="card-body mb-">
                                        <ul className="list-unstyled">
                                            <li >First you will need a <a href="/wallets">wallet</a> </li>

                                            <li>Second choose an <a href="/exchanges">exchange</a> </li>

                                        </ul>



                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-">After acquiring ADA create a new address in your wallet and send yourself or to a friend/family member a small portion of ADA so you can get used to the simplicity of cryptocurrencies. </p>
                                        <p id="dsp">Delegating/Staking your ADA doesn't mean your funds will be locked. You are able to move funds between Staking Pools and to transfer funds as you please!</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <br></br>
                    {/* Social Icons */}
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
                            {/* Map */}
                            <div className="tab-pane" id="map" role="tabpanel">
                                {/* <iframe src="" style={{ border: '0', height: '28.125rem', width: "100%", frameborder: '0' }}></iframe>
                             */}
                            </div>
                        </div>
                    </div>
                    <br></br>
                </HeaderDetails>
                <br></br>
                {/* {Navlinks} */}
                <div className="container">
                    <ul className="nav nav-tabs">
                        {/* About Place Link */}
                        <li className="nav-item">
                            <a href="#video" className="nav-link active " role="tab" data-toggle="tab">Videos</a>
                        </li>
                        {/* Reviews link */}
                        <li className="nav-item">
                            <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">Questions</a>
                        </li>
                        {/* Map link */}
                        <li className="nav-item">
                            <a href="#about" className="nav-link" role="tab" data-toggle="tab">About</a>
                        </li>
                    </ul>
                    {/* Tab Pane */}
                    <div className="tab-content mb-5">
                        {/* About Place Tab */}
                        <div id="video" className="tab-pane in active text-center" role="tabpanel">
                            <div className="container">
                                <div className="row">
                                    <div className="container col-10 col-lg-6 d-flex justify-content-center mt-5">
                                        <iframe width="575" height="315"
                                            src="https://www.youtube.com/embed/EDyQEUZ0PlY" allowfullscreen="true">
                                        </iframe>
                                    </div>
                                    <div className="container col-10 col-lg-6 d-flex justify-content-center mt-5">
                                        <iframe width="575" height="315"
                                            src="https://www.youtube.com/embed/UlKZ83REIkA" allowfullscreen="true">
                                        </iframe>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* reviews */}
                        <div className="tab-pane" id="reviews" role="tabpanel">
                            <Reviews />
                        </div>
                        {/* Map */}
                        <div className="tab-pane" id="about" role="tabpanel">
                            {/* <iframe src="" style={{ border: '0', height: '28.125rem', width: "100%", frameborder: '0' }}></iframe>
                     */}
                            <h2 className="mb-3">PROOF OF WORK AND MINING</h2>
                            <p>Proof of work is the most common consensus algorithm type for cryptocurrencies. It originated in Bitcoin, and this is how this cryptocurrency works. To generate proof of work, a computer has to solve a challenge. The challenge is a computationally heavy problem which is hard to solve, but the solution is easy to verify. When a computer on a proof of work based network finds a solution, it publishes it along with the transactions that the computer has been observing while cracking the problem. The owner of this computer collects the transaction fees and a reward for generating a block. The entire process is called mining. Mining is very energy consuming, and the amount of energy needed is constantly increasing, which can lead to unsound competition.</p>
                            <img src="" alt="" className="img-thumbnail img-fluid" />

                        </div>
                    </div>
                </div>
            </div >
            // </React.Fragment>
        );

    }
}




export default AdaA;


const HeaderDetails = styled.header`
background: linear-gradient(rgba(141,122,137), rgba(255,255,255));
height: 100%;
/* text-transform: uppercase; */
color: var(--mainWhite);
text-align: center;
padding-left:0px;

h1 {
    padding-top: 3%;
    margin-bottom: -2%;
    padding-right:14px;
    margin-left:3px;
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
    padding-top: 3%;
    padding-left: 2%;
    padding-right: 2%;
}
#wan{
    color:blue;
}
#add{
    font-size:14px;
}

i {
    font-size: 1.875rem;
    color: var(--mainDark);
}

i:hover {
   color: var(--mainBlue);
   cursor:pointer;
}

#wap{
    padding-bottom:5px;
} */


.nav-item {
    height: 18.75rem;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -46px;
    margin-left: -15px;
}
#ada {
    padding-left: 21px;
    margin-top: 66px;
    margin-bottom: 28px;
    margin-right: -32px;
}
}
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    #right {
    font-size: 40px;
    margin-top: 16px;
    padding-left: -16px;
    margin-left: 126px;
    padding-bottom: 24px;
    position: static;
}

#left {
    font-size: 40px;
    margin-left: -62px;
    margin-right: 104px;
    margin-top: 16px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
}
#ada {
    padding-left: 21px;
    margin-top: 40px;
    margin-bottom: 28px;
    margin-right: -32px;
}
#ab{
    padding-bottom:24px;
}
#wap {
    padding-bottom: 29px;
}

}
@media only screen  and (min-width : 1224px) {
    #right {
        font-size: 40px;
    margin-top: 16px;
    padding-left: -16px;
    margin-left: 153px;
    padding-bottom: 24px;
    position: static;
}

        #left{
        font-size: 40px;
    margin-left: -62px;
    margin-right: 156px;
    margin-top: 16px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
        } 
        #ada {
    padding-left: 21px;
    margin-top: -29px;
    margin-bottom: 28px;
    margin-right: -22px;
}
 
 #front{
     padding-top:6%;
 } 
 #pap{
     margin-top:22px;
 }
 #dsp{
     margin-top:-5px;
 }
 #po{
     padding-bottom:24px;
 }
}
@media only screen  and (min-width : 1824px) {
    
    #right {
    font-size: 40px;
    margin-top: 20px;
    padding-left: -16px;
    margin-left: 245px;
    padding-bottom: 24px;
    position: static;
}

#left {
    font-size: 40px;
    margin-left: -179px;
    margin-right: 209px;
    margin-top: 20px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
}
#ada {
    padding-left: 21px;
    margin-top: -62px;
    margin-bottom: 28px;
    margin-right: -32px;
}
#po{
    padding-bottom:24px;
}

    }




`;






















































