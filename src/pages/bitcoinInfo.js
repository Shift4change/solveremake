import React, { Component } from 'react';
import { InfoConsumer } from "../components/context";
import styled from 'styled-components';
import Reviews from "../components/Reviews";
import YouTube from "react-youtube"
import bit from "../components/assets/img/bitcoin1.jpeg"
import mining from "../components/assets/img/mining.jpg"
import mining1 from "../components/assets/img/mining1.jpg"
import mkb from "../components/assets/img/mkb.jpg"
import bpc from "../components/assets/img/bpc.jpg"
import front from "../components/assets/img/bitcoinfront.png"

// https://www.youtube.com/watch?v=_nBlN9yp9R8
// https://youtu.be/_nBlN9yp9R8

class BitcoinD extends Component {
    render() {




        return (
            <div>
                {/* // <React.Fragment> */}
                <HeaderDetails className="container-fluid align-items-center">
                    <h1 className="display-2 font-weight-bold">BITCOIN</h1>
                    {/* <img src={bit} alt="Bitcoin" className="img-thumbnail img-fluid" /> */}

                    <h4 className="display-6">Digital Gold /  Public Ledger</h4>
                    <br></br>
                    {/* <br></br> */}
                    <div className="container-fluid mt-5">
                        <div className="row">

                            <div className="col-4">
                                <p> Being a public ledger, the Bitcoin blockchain works similar to a bank database system. </p>
                                <p>Details of all confirmed transactions are recorded on each block created.</p>
                                <p> As blocks are filled to capacity with transaction details, new blocks are mined and added to the blockchain by the network participants called miners.</p>
                            </div>

                            <div className="col-4 mb-1">
                                <img src={front} alt='Plutus' className="card-img-top" />
                                {/* <img src={mining} alt='Plutus' className="card-img-top" /> */}
                            </div>
                            <div className="col-4">
                                <p>Bitcoin is a scarce resource that's resistant to inflation. It's finite supply of 21 million and it's process called "halving", make this system deflationary. </p>

                                <p>Only 3 million Bitcoin are left to be mined and every 4 years the reward for mining new blocks is halved, meaning miners receive 50% fewer bitcoins for verifying transactions.</p>

                            </div>

                        </div>

                    </div>
                    <div className="container-fluid mt-2 ">
                        <div className="row">

                            <div className="col-4">
                                <p> Powerful machines and mining pools are used for mining. On average, the time it takes for all miner's computational power in the world to obtain 1 BTC "Bitcoin" is 10 minutes. This hard process is know as "Proof of Work".</p>
                                <p >  </p>
                            </div>

                            <div className="col-4 mb-2">
                                <img src={mining} alt='Plutus' className="card-img-top" />
                                {/* <img src={mining} alt='Plutus' className="card-img-top" /> */}
                            </div>
                            <div className="col-4">
                                <p>This "Halving" cycle is very important for speculators since the number of bitcoin produced are reduce and if the demand remains the same this means the price will increase substantially.</p>
                            </div>

                        </div>

                    </div>
                    <div className="container-fluid mt-2 ">
                        <div className="row">
                            <div className="col-8 mt-5">
                                <img src={mkb} alt='Plutus' className="card-img-top" />
                                <img src={bpc} alt='Plutus' className="card-img-top" style={{height:"240px"}} />
                                {/* <img src={mining} alt='Plutus' className="card-img-top" /> */}
                                <p>Bitcoin usually has a 4 year cycle . Where the "Bear" market transforms into a "Bull" market and then a bubble forms and the cycle continues. Bitcoin doesn't care about the price fluctuation, and it continues to to be more resistent and improve because it is decentralized.  </p>
                            </div>
                            
                            <div className="col-4 mt-5">
                            <p>In this example the price of one BTC "Bitcoin" is 8,500 USD </p>
                            <p>Market Cap shows the size of how much money is flowing through the system at the particular time, in our case 156 B. USD </p>
                            <p>You can take a look at what other cryptocurrencies look like and find more details about their all time high and price fluctuation.<a className=" btn-outline ml-4" target="_blank" rel="noopener noreferrer" href="https://coinranking.com/">Here</a> </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid  ">
                        <div className="row">
                            
                            <div className="col-8 ">
                            <p>hhh  </p>
                                {/* <img src={mkb} alt='Plutus' className="card-img-top" /> */}
                                {/* <img src={mining} alt='Plutus' className="card-img-top" /> */}
                            </div>
                            
                        </div>
                    </div>
                    <p>hellou</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* Social Icons */}
                    <div className="container mt-5 ">
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {/* {Navlinks} */}
                <div className="container ">
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
                            <h2 className="mb-3">dsadas</h2>
                            <p>hellou</p>
                            {/* <img src={front} alt="" className="img-thumbnail img-fluid" /> */}
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




export default BitcoinD;


const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: 100vh;
/* text-transform: uppercase; */
color: var(--mainWhite);
text-align: center;

h1 {
    padding-top: 3%;
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

.nav-item {
    height: 18.75rem;
}

@media(max-width: 760px) {
    h1,h4{
        color:var(--mainWhite)
    }
}
`;