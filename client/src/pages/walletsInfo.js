import React, { Component } from 'react';
import { InfoConsumer } from "../components/context";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Reviews from "../components/Reviews";
import YouTube from "react-youtube"
import Led from "../components/assets/img/LedgerNanoS.jpg"
import Da from "../components/assets/img/daedalus.png"
import yoroi from "../components/assets/img/yoroi.png"
class Wallets extends Component {
    render() {




        return (
            <div>
                {/* // <React.Fragment> */}
                <HeaderDetails className="container-fluid align-items-center">
                    <h1 className="display-3  mb-5 font-weight-bold"> Wallets</h1>
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-2">
                            <Link to="/exchanges">
                            <i id="left" class="fas fa-arrow-left"> </i> </Link>
                                </div>
                                <div className="col-2">
                                    <Link to="/staking">
                            <i id="right" class="fas fa-arrow-right"></i></Link>
                                </div>
                                </div>
                                </div>
                    <div className="container">
                        <div className="row">
                  
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                    {/* <h3>cardano</h3>
                   <hr></hr> */}
                        <div className="card" style={{ width: "19rem" }}>
                          <a
                                href="https://daedaluswallet.io/en/download/" target="_blank" rel="noopener noreferrer nofollow"
                                className="hover"
                                >  <img src={Da}  style={{height:"170px"}} alt='Bitcoin'  className="card-img-top" /> </a>
                            <div className="card-body mb-4">
                                <h3 className="card-title text-uppercase">Desktop wallet</h3>
                                {/* <h5 className="card-title">lalal</h5> */}
                                <p className="card-text">Developed by IOHK Daedalus is the best desktop wallet for Cardano. The vision for Daedalus is to become an App store for decentralized applications. Finding Staking pools and staking your ADA is easy using  Daedalus .  </p>

                                <a  
                                href="https://daedaluswallet.io/en/download/" target="_blank" rel="noopener noreferrer nofollow"
                                className="btn btn-outline-primary text-uppercase"
                                >
                                Download here
                                </a>

                               
                            </div>
                        </div>
                    </div> <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "19rem" }}>
                          <a
                                href="https://yoroi-wallet.com/" target="_blank" rel="noopener noreferrer nofollow"
                                className="hover"
                                >  <img src={yoroi} style={{height:"170px"}} alt='Bitcoin'  className="card-img-top" /> </a>
                            <div className="card-body mb-4">
                                <h3 className="card-title text-uppercase">Light wallet</h3>
                                {/* <h5 className="card-title">lalal</h5> */}
                                <p className="card-text"> Developed by Emergo, yoroi is a light wallet. You can use it as a chrom extension or on your phone for easy payments. Although with this wallet you won't download the whole Blockchain, it is secure, easy to use and you can stake your ADA. </p>

                                <a  
                                href="https://yoroi-wallet.com/" target="_blank" rel="noopener noreferrer nofollow"
                                className="btn btn-outline-primary text-uppercase"
                                >
                                Download Here
                                </a>

                               
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "19rem" }}>
                          <a
                                href="https://www.ledger.com/" target="_blank" rel="noopener noreferrer nofollow"
                                className="hover"
                                >  <img src={Led}  alt='Bitcoin'  className="card-img-top" /> </a>
                            <div className="card-body mb-4">
                                <h3 className="card-title text-uppercase ">Hardware wallet</h3>
                                {/* <h5 className="card-title">lalal</h5> */}
                                <p className="card-text mt-4"> For securing your coins safe offline you can use a Hardware wallet. The ledger wallet can be used to store many cryptocurrencies including Cardano(ADA) and Bitcoin.  </p>

                                <a  
                                href="https://www.ledger.com/" target="_blank" rel="noopener noreferrer nofollow"
                                className="btn btn-outline-primary text-uppercase mt-4"
                                >
                                Order Here
                                </a>

                               
                            </div>
                        </div>
                    </div>
                   
                    </div>
                    </div>
                    {/* <h4 className="display-5">dadasd</h4>
                    <p>hellou</p>
                    <p>Transactions are irreversible so bubble check the address before sending funds.</p> */}

                    {/* Social Icons */}
                    <div id="social" className="container mt-5">
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
                    <br></br>
                </HeaderDetails>
                {/* {Navlinks} */}
                <div className="container">
                    <ul className="nav nav-tabs">
                        {/* About Place Link */}
                        <li className="nav-item">
                            <a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">About</a>
                        </li>
                        {/* Reviews link */}
                        <li className="nav-item">
                            <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">Reviews</a>
                        </li>
                        {/* Map link */}
                        <li className="nav-item">
                            <a href="#map" className="nav-link" role="tab" data-toggle="tab">videos</a>
                        </li>
                    </ul>
                    {/* Tab Pane */}
                    <div className="tab-content mb-5">
                        {/* About Place Tab */}
                        <div id="aboutPlace" className="tab-pane in active text-center" role="tabpanel">
                            <h2 className="mb-3">Wallet security</h2>
                            <p>The Byron era also saw the delivery of the Daedalus wallet, IOHK's official desktop wallet for ada, as well as Yoroi, a light wallet from IOHK's sister company Emurgo designed for quick transactions and day-to-day use.</p>
                            <img src="" alt="" className="img-thumbnail img-fluid" />
                        </div>
                        {/* reviews */}
                        <div className="tab-pane" id="reviews" role="tabpanel">
                            <Reviews />
                        </div>
                        {/* Map */}
                        <div className="tab-pane" id="map" role="tabpanel">
                            <iframe src="" style={{ border: '0', height: '28.125rem', width: "100%", frameborder: '0' }}></iframe>
                        </div>
                    </div>
                </div>
            </div>
            // </React.Fragment>
        );

    }
}
        
        
         
    
export default Wallets;


const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: 100%;
text-transform: uppercase;
color: var(--mainWhite);
text-align: center;




h1 {
    padding-top: 10%;
    color: var(--mainDark);
}
h3{
    color: var(--mainDark);
}

h4 {
    color: var(--mainDark);
}
p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
}

i {
    font-size: 1.875rem;
    color: var(--mainDark);
}

i:hover {
   color: var(--mainBlue);
   cursor:pointer;
}
#right{
    font-size:45px;
    margin-top:-100px;
    padding-left: -16px;
    margin-left: 413px;
    position:fixed;
}
#left{
    font-size:45px;
    margin-left:-450px;
    margin-top:-100px;
    padding-left:12px;
    position:fixed;
}

.nav-item {
    height: 18.75rem;
}

@media(max-width: 760px) {
    h1,h4{
        color:var(--mainWhite)
    }
    h1{
        padding-top:23%;
    }
    .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -40px;
}
#social{
    padding-left:40px;
}
}
`;