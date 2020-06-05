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
import blogo from "../components/assets/img/blogo.png"
import ledger from "../components/assets/img/ledger.svg"
import miners from "../components/assets/img/miners.svg"
import dg from "../components/assets/img/dg.svg"
import bh from "../components/assets/img/bh.svg"
import ob from "../components/assets/img/ob.svg"
import ep from "../components/assets/img/ep.svg"
import "./bitcoinInfo.css"



class BitcoinD extends Component {
    render() {




        return (
            <div>
                {/* // <React.Fragment> */}

                <HeaderDetails className="container-fluid align-items-center">
                    <h1 className="display-2 font-weight-bold  " id="front" > <img src={blogo} alt='Front' className="card-img-top mt-2   mb-" style={{ width: "150px", height: "150px", marginTop: "-45px", marginRight: "-20px", paddingLeft: "2px", paddingRight: "2px", paddingTop: "0px" }} /></h1>
                    {/* 
                    <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul> */}

                    <div className="row justify-content-center">
                        <div className="col-2">
                            <Link to="/">
                                <i id="left" class="fas fa-arrow-left"> </i> </Link>
                        </div>
                        <div className="col-2 col-lg-2">
                            <Link to="/ada">
                                <i id="right" class="fas fa-arrow-right"></i></Link>
                        </div>


                    </div>

                    {/* <h4 className="display-6 mb-2">Digital Gold /  Public Ledger</h4> */}
                    <br></br>
                    {/* <br></br> */}


                    <div className="container pt-2 ">
                        <div id="row" className="row mt-2">
                            <div className="col-10 col-lg-4 mx-auto mt-4 mb-5">
                                <div id="1" className="card" >
                                    <h3 className="card-title text-uppercase mt-3">Public Ledger</h3>
                                    <img src={ledger} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="b1p" className="card-text mb-4">Being a public ledger, the Bitcoin blockchain works similar to a bank database system.  As blocks are filled to capacity with transaction details, new blocks are mined and added to the blockchain by the network participants called miners.  </p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-10 col-lg-4 col-xl-4 mx-auto mt-4 mb-5">
                                <div className="card">
                                    <h3 className="card-title text-uppercase mt-3">Miners</h3>
                                    <img src={miners} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="two" className="card-text">Powerful machines and mining pools are used for mining. On average, the time it takes for all miner's computational power in the world to solve and obtain one new block is 10 minutes. Each block will give the miners a reward. This hard process is know as "Proof of Work" </p>


                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-4 mb-5">
                                <div id="4" className="card" >
                                    <h3 className="card-title text-uppercase mt-3">Digital Gold</h3>
                                    <img src={dg} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="dgp" className="card-text mb-4">Bitcoin is a scarce resource that's resistant to inflation. It's fixed supply of 21 million and it's process called "halving", make this system deflationary. Only 3 million Bitcoin are left to be mined and every 4 years the reward for mining new blocks is halved.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <div id="5" className="card" >
                                    <h3 className="card-title text-uppercase mt-3">Halving</h3>
                                    <img src={bh} id="bh" alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="bhp" className="card-text mb-4"> When the "halving" occurs miners receive 50% fewer bitcoins for verifying transactions and creating new blocks. This "Halving" cycle is very important for speculators since the number of bitcoin produced are reduce and if the demand remains the same this means the price will increase substantially.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <div id="6" className="card" >


                                    <div className="card-body">
                                        <img src={hp} id="pi" alt='halving' className="card-img-top mb-3" />

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <div id="7" className="card" >
                                    <h3 className="card-title text-uppercase mt-3">Be your own Bank</h3>
                                    <img id="owb" src={ob} alt='Bitcoin' className="card-img-top" />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="owp" className="card-text mb-4"> Bitcoin makes it possible to have control over your money and to transfer value anywhere in the world. Its cryptography makes it so that nobody can take your money or make a payment on your behalf. Bitcoin can provide you with high security and financial freedom as long as you take your wallet's security seriously.  </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <div id="8" className="card" >
                                    <h3 className="card-title text-uppercase mb- mt-3">Be part of the 1%</h3>
                                    <img src={bdp} alt='halving' className="card-img-top mb-2" style={{ width: "200px" }} />
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="ob" className="card-text mb-4 mt-2"> Owning 0.28 BTC makes you part of the 1% because of its fixed supply. A Bitcoin can be divided down to 8 decimal places. The smallest fraction is called a Satoshi. You don't have to buy, sell or transfer a whole bitcoin. You can start with a small amount before you get used to a wallet and exchanges.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 col-xl-4 mx-auto mt-1 ">
                                <div id="9" className="card" >
                                    <h3 className="card-title text-uppercase mt-3">Easy payments</h3>

                                    <p id="wan">Bitcoin address: 3E9jdx5TmpGwPvV6M7itiAd33NBuJgXtoZ</p>
                                    {/* <img src={wa1} alt='Bitcoin' className="card-img-top" style={{width:"250px", height:"100%"}} /> */}
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="wapb" className="card-text mb-1 ">Using Bitcoin for big transaction is very easy. No need for a credit card, e-mail or in some cases to reveal your identity. There are no banks to make you wait 3-7 business days for the transaction to be compleat. You just need a address or a QR code to send or receive funds.</p>
                                        <img src={wa} alt='wallet address' id="wa" className="card-img-top" style={{ width: "78px", height: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 col-xl-4 mx-auto mt-1">
                                <div id="10" className="card" >
                                    <h3 className="card-title text-uppercase mt-3">Getting Started</h3>
                                    <p className="mt-2 mb-3">Having control over your money is a great responsibility. </p>
                                    <div className="card-body mb-">
                                        <ul className="list-unstyled">
                                            <li className="mb-2" >First you will need a <a href="/wallets">wallet</a> </li>

                                            <li className="mb-2" >Second choose an <a href="/exchanges">exchange</a> </li>

                                        </ul>



                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="lb" className="card-text mt-5 ">After acquiring BTC create a new address in your wallet and send yourself or to a friend/family member a small portion of Bitcoin so you can get used to the simplicity of cryptocurrencies. </p>

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
                                        <iframe width="420" height="315"
                                            src="https://www.youtube.com/embed/EDyQEUZ0PlY" allowfullscreen="true">
                                        </iframe>
                                    </div>
                                    <div className="container col-10 col-lg-6 d-flex justify-content-center mt-5">
                                        <iframe width="420" height="315"
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




export default BitcoinD;


const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: 100%;
/* text-transform: uppercase; */
color: var(--mainWhite);
text-align: center;
padding-left:0px;

h1 {
    padding-top: 6%;
    margin-bottom: -1%;
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
    padding-top: 4%;
    padding-left: 2%;
    padding-right: 2%;
}
#wa{
    padding-top:4px;
}

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
.front{
    padding-left:5px;
}
#front{
    padding-top:89px;
    margin-top:px;
}



@media only screen  and (min-width : 1224px) {
   
   #right {
       font-size: 40px;
   margin-top: 16px;
   padding-left: -16px;
   margin-left: 126px;
   padding-bottom: 24px;
   position: static;
}

       #left{
       font-size: 40px;
   margin-left: -62px;
   margin-right: 104px;
   margin-top: 16px;
   padding-left: 12px;
   padding-bottom: 23px;
   position: static;
       } 
       #two{
           padding-bottom:24px;
       }
       #b1p{
           padding-bottom:24px;
       }
       #pi {
    width: 260px;
    height: 335px;
}
#ob{
    padding-bottom:24px;
}
#lb{
    margin-bottom:-6px;
}


   }


   
   
/* @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
      
   #right {
       font-size: 40px;
   margin-top: 16px;
   padding-left: -16px;
   margin-left: 126px;
   padding-bottom: 24px;
   position: static;
}

       #left{
       font-size: 40px;
   margin-left: -62px;
   margin-right: 104px;
   margin-top: 16px;
   padding-left: 12px;
   padding-bottom: 23px;
   position: static;
       } 
       } */
       @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
        .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -26px;
}
#pi {
    width: 260px;
    height: 320px;
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

       #left{
       font-size: 40px;
   margin-left: -62px;
   margin-right: 104px;
   margin-top: 16px;
   padding-left: 12px;
   padding-bottom: 23px;
   position: static;
       } 
       #pi {
    width: 260px;
    height: 383px;
}
#ob{
    padding-bottom:27px;
}
#lb{
    padding-bottom:17px;
}
}
/* @media only screen  and (min-width : 1824px) {
   
   #right {
       font-size: 40px;
   margin-top: 16px;
   padding-left: -16px;
   margin-left: 126px;
   padding-bottom: 24px;
   position: static;
}

       #left{
       font-size: 40px;
   margin-left: -62px;
   margin-right: 104px;
   margin-top: 16px;
   padding-left: 12px;
   padding-bottom: 23px;
   position: static;
       } 
       #two{
           padding-bottom:24px;
       }
       #b1p{
           padding-bottom:24px;
       }
       #pi {
    width: 260px;
    height: 335px;
}
#ob{
    padding-bottom:24px;
        
    }
    #lb{
        margin-bottom:-5px;
    }


   } */
















/* @media(width: 1326px){
    #right{
    font-size: 40px;
    margin-top: 16px;
    padding-left: -16px;
    margin-left: 123px;
    position: static;
}
#left{
        font-size: 40px;
    margin-left: -62px;
    margin-right: 116px;
    margin-top: 16px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
}
}



@media(width: 760px) {
    h1{
        font-size:0;
    }
    h4{
        color:var(--mainWhite)
    }
    .container{
        
        width:26rem;
        margin-left: -28px;
    padding-right: 17px;
    }
    p{
        align-self:start;
        display: table;
    }
    #front{
      padding-top:66px;
      padding-bottom:-15px;
      
    } */
   
/* }
@media(width: 1024px){
    #right {
        font-size: 40px;
    margin-top: 16px;
    padding-left: -16px;
    margin-left: 126px;
    padding-bottom: 24px;
    position: static;
}

        #left{
        font-size: 40px;
    margin-left: -62px;
    margin-right: 104px;
    margin-top: 16px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
        } */
       
        /* #pi {
    width: 236px;
    height: 383px;
}
#ob {
    padding-bottom: 5px;
    padding-top: 23px;
}
    
}
@media(width: 1366px){
    #right {
        font-size: 55px;
    margin-top: 46px;
    padding-left: -16px;
    margin-left: 165px;
    padding-bottom: 38px;
    position: static;
        }
        #left{
        font-size: 55px;
    margin-left: -62px;
    margin-right: 116px;
    margin-top: 46px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
        }
       

#two{
    padding-bottom:24px;
}
#b1p{
    padding-top:4px;
    padding-bottom:20px;
}
#pi {
    width: 236px;
    height: 335px;
}
#wap {
    padding-bottom: 21px;
}
#ob {
    padding-bottom: 25px;
    padding-top: 7px;
}
#wapb{
    padding-bottom:7px;
}
}
@media(width: 1768px){
    #two{
        padding-bottom:24px;
    }
    #b1p{
        padding-bottom:24px;
    }
    #pi {
    width: 236px;
    height: 335px;
}
#ob {
    padding-bottom: 27px;
}
#lb{
    margin-bottom: -7px;
}

}
   



@media(width: 1440px) {

#right{
    font-size: 40px;
    margin-top: 16px;
    padding-left: -16px;
    margin-left: 123px;
    position: static;
}
#left{
        font-size: 40px;
    margin-left: -62px;
    margin-right: 116px;
    margin-top: 16px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
}
#front{margin-left:-50px;
    
}

.card{
    width:21rem;
}
#card{
    padding-bottom:-5px;
}

#two{ margin-bottom:2px;
padding-bottom:22px;
   
}
} */

`;