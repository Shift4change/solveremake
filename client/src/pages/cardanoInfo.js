import React, { Component } from 'react';
import { InfoConsumer } from "../components/context";
import styled from 'styled-components';
import Reviews from "../components/Reviews";
import YouTube from "react-youtube"
import logo from "../components/assets/img/cardanologo.svg"
import carwall from "../components/assets/img/cardano-wall.jpg"
import carwall2 from "../components/assets/img/cardano-wall2.jpg"
import adahome from "../components/assets/img/adahome.jpg"
import byron from "../components/assets/img/byron.jpg"
import shelly from "../components/assets/img/Shelley001.jpg"
import goguen from "../components/assets/img/goguen2.jpeg"
import basho from "../components/assets/img/matsuo-basho11.jpg"
import voltaire from "../components/assets/img/voltaire.jpg"
class CardanoC extends Component {
    render() {




        return (
            <div>
                {/* // <React.Fragment> */}
                <HeaderDetails className="container-fluid align-items-center pt-5">
                    <h1 className="display-2 font-weight-bold pt-5 " id="front" > <img src={logo} alt='Front' id="logo" className="card-img-top mt-2  mb-5" style={{ width: "150px", height: "150px" }} />Cardano</h1>
                    {/* <h4 className="display-5 align-left" >Eras of Cardano</h4> */}
                    {/* <hr></hr> */}
                   
                    <br></br>
                    <div className="container ">
                        <div className="row mt-">
                            <div className="col-10 col-lg-4 mx-auto mt- mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    {/* <h3 className="card-title text-uppercase mt-3"> HOME</h3> */}
                                    <img src={adahome} alt='Bitcoin' className="card-img-top " />
                                    <h3 className="card-title text-uppercase mt-4 mb-3">Intro</h3>
                                    <div className="card-body">
                                        <h3 className="card-title text-uppercase"></h3>
                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-5">Cardano is Home to the Ada cryprocurrency, which can be used to send and recivie digital funds.  Cardano is more then just a cryptocurrency, it is a tehnological platform capable of running financial applications currently used every day by individuals, organisations and governments all around the world.</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-10 col-lg-4 mx-auto mt- mb-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    {/* <h3 className="card-title text-uppercase mt-3">Cardano</h3> */}
                                    <img src={carwall} alt='Bitcoin' className="card-img-top " />
                                    <h3 className="card-title text-uppercase mt-3">platform</h3>
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-">Cardano is constructed in layers, which gives the system flexibility to be maintained and allow for upgrades. After the layer that runs Ada is complete, a separate layer is built to handle smart contracts, the digital legal agreements that underpin future commerce and business. Cardano will also run decentralised applications, not controlled by any single party but instead operate on a blockchain.</p>


                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt- mb-5">
                                <div className="card" style={{ width: "18rem" }}>
                                    {/* <h3 className="card-title text-uppercase mt-3">Staking vs mining</h3> */}
                                    <img src={carwall2} alt='Bitcoin' className="card-img-top" />
                                    <h3 className="card-title text-uppercase mt-3">Phases</h3>
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-">Cardano is a third-generation blockchain, created from the ground up using research, peer-review, and a rigorous formal development model. Cardano's story began in 2015, with a vision of addressing the three challenges facing all blockchain networks: scalability, interoperability, and sustainability. The first version of Cardano was shipped in 2017 and the first Era began.</p>

                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                            <h3> Byron Era</h3>
                            <hr></hr>
                            
                                <div className="card" style={{ width: "18rem" }}>
                                    {/* <h3 className="card-title text-uppercase mt-3">Byron</h3> */}
                                  <a id="byron" className="btn  text-uppercase" target="_blank" rel="noopener noreferrer" href="https://roadmap.cardano.org/en/byron/">  <img src={byron} alt='Bitcoin' className="card-img-top" /></a>
                                    <h3 className="card-title text-uppercase mt-3">Foundation</h3>
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-4">The Byron era was about the first crucial technology developments and about building a community to get people involved in creating the blockchain of the future. This first era of Cardano allowed users to buy and sell the Ada currency, running the Ouroboros consensus protocol. The heart of the Cardano network, Ouroboros is the first proof-of-stake protocol created on the basis of academic research, with a mathematically-proven level of security. </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <h3>Shelley Era</h3>
                                <hr></hr>
                                <div className="card" style={{ width: "18rem" }}>
                                    {/* <h3 className="card-title text-uppercase mt-3">shelly</h3> */}
                                    <a  id="shell" className="btn  text-uppercase" target="_blank" rel="noopener noreferrer" href="https://roadmap.cardano.org/en/shelley/"><img src={shelly} alt='Bitcoin' style={{width:"260px", height:"200px"}} className="card-img-top" /></a>
                                    <h3 className="card-title text-uppercase mt-3">Decentralization</h3>
                                    <div className="card-body">
                                        <p className="card-text mb-4">
As the Shelley era progresses more nodes will shift towards being run by the Cardano community, which allows Cardano to be 50-100 times more 
decentralized than other large blockchain networks and enjoy greater security as a result.

Shelley will also see the introduction of a delegation and incentives scheme, a reward system to drive stake pools and community adoption, making
Cardano more useful, rewarding, and valuable for all users.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <h3>Goguen Era</h3>
                                <hr></hr>
                                <div className="card" style={{ width: "18rem" }}>
                                    {/* <h3 className="card-title text-uppercase mt-3">goguen</h3> */}
                                    <a  id="goguen" className="btn  text-uppercase" target="_blank" rel="noopener noreferrer" href="https://roadmap.cardano.org/en/goguen/"><img src={goguen} style={{width:"260px", height:"200px"}} alt='Bitcoin' className="card-img-top" /></a>
                                    <h3 className="card-title text-uppercase mt-3">Smart contracts</h3>
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-5">The speed of Transactions are currently at 1000 tps this will increase over time. Being faster then Bitcoin, having low fees and staking, make ADA an important asset that you can use to transfer value any time and anywhere  in the world. Its cryptography makes it so that nobody can take your money or make a payment on your behalf. ADA can provide you with high security and financial freedom as long as you take your wallet's security seriously.  </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                            <h3>Basho Era</h3>
                                <hr></hr>
                                <div className="card" style={{ width: "18rem" }}>
                                <a  id="basho" className="btn  text-uppercase" target="_blank" rel="noopener noreferrer" href="https://roadmap.cardano.org/en/basho/"><img src={basho} style={{width:"260px", height:"200px"}} alt='Bitcoin' className="card-img-top" /></a>
                                    <h3 className="card-title text-uppercase mt-3">Scaling</h3>
                                    {/* <img src={bdp} alt='halving' className="card-img-top" style={{width:"200px" }} /> */}
                                    <p id="wan">3176.0008067 ADA</p>
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-5">   ADA is a deflationary cryptocurrency that has a fixed supply and can be divided down to 8 decimal places. The smallest fraction is called a Lovelace.  Getting your funds of the exchanges and creating your wallet, will put you in control. Choosing one or multiple Staking Pools will be available to you in your Wallet.  You can start with a small amount before you get used to a wallet and exchanges.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 ">
                            <h3>Voltaire Era</h3>
                                <hr></hr>
                                <div className="card" style={{ width: "18rem" }}>
                                <a  id="voltaire" className="btn  text-uppercase" target="_blank" rel="noopener noreferrer" href="https://roadmap.cardano.org/en/voltaire/"><img src={voltaire} style={{width:"260px", height:"200px"}} alt='Bitcoin' className="card-img-top" /></a>
                                    <h3 className="card-title text-uppercase mt-3">Governance</h3>

                                    <p id="add">ADA address: DdzFFzCqrht8AKqAywbC8Wins2B2BJXyziuqb8Y1VFECC6giTyWhr5CjMrRgneaARPbtEWPDf9gHiCTGFaWaRZosVTrvuhYEEK9mzPt4</p>
                                    {/* <img src={wa1} alt='Bitcoin' className="card-img-top" style={{width:"250px", height:"100%"}} /> */}
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="wap" className="card-text mb-2 ">Using ADA for transaction is very easy. No need for a credit card, e-mail or in some cases to reveal your identity. There are no banks to make you wait 3-7 business days for the transaction to be compleat. You just need an address or a QR code to send or receive funds.</p>
                                        <img src={logo} alt='wallet address' id="wa" className="card-img-top" style={{ width: "78px", height: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-">
                                <div className="card" style={{ width: "18rem" }}>
                                    <h3 className="card-title text-uppercase mt-3">Getting Started</h3>
                                    <p>Having control over your money is a great responsibility. </p>
                                    <div className="card-body mb-">
                                        <ul className="list-unstyled">
                                            <li >First you will need a <a href="/wallets">wallet</a> </li>

                                            <li>Second choose an <a href="/exchanges">exchange</a> </li>

                                        </ul>



                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-">After acquiring ADA create a new address in your wallet and send yourself or to a friend/family member a small portion of ADA so you can get used to the simplicity of cryptocurrencies. </p>
                                        <p>Delegating/Staking your ADA doesn't mean your funds will be locked. You are able to move funds between Staking Pools and to transfer funds as you please!</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <p>hellou</p>
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
                {/* {Navlinks} */}
                <div className="container">
                    <ul className="nav nav-tabs">
                        {/* About Place Link */}
                        <li className="nav-item">
                            <a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">About</a>
                            <h1></h1>

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
                            <h2 className="mb-3">Cardano</h2>
                            <p>This is the first blockchain project to be developed from a scientific philosophy, and the only one to be designed and built by a global team of leading academics and engineers. It is essential that the technology is secure, flexible and scalable for use by many millions of users. Consequently, considerable thought and care from some of the leading experts in their fields has been devoted to the project and informed design decisions. The scientific rigour applied to mission-critical systems such as aerospace and banking has been brought to the field of cryptocurrencies, with a high assurance implementation. We believe this is the first time that this has been done.

A major innovation of Cardano is that it will balance the needs of users with those of regulators, and in doing so combine privacy with regulation. The vision for Cardano is that its new style of regulated computing will bring greater financial inclusion by providing open access for all to fair financial services.</p>
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




export default CardanoC;


const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: 100%;
/* text-transform: uppercase; */
color: var(--mainWhite);
text-align: center;

hr {
    size:2px;
}
h1 {
    padding-top: 10%;
    color: var(--mainDark);
}
h3 {
    color: var(--mainDark);
    padding-bottom: -4px;
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
#byron:hover{
    background-color:rgb(44, 187, 105);
}
#shell:hover{
    background-color:rgb(104, 155, 253);

}
#goguen:hover{
    background-color:rgb(131, 45, 196);
}
#basho:hover{
    background-color:rgb(230, 170, 0);
}
#voltaire:hover{
    background-color:rgb(235, 34, 86);
}

i {
    font-size: 1.875rem;
    color: var(--mainDark);
}

i:hover {
   color: var(--mainBlue);
   cursor:pointer;
}
#logo{
    margin-left: -125px;
    padding-left: 0px;
    padding-bottom: 21px;
    margin-right: -1px;
    
}

/* #logo{
    margin-left: 0 px;
    padding-left: 0px;
    padding-bottom: 0px;
    margin-right: -0px;
} */

.nav-item {
    height: 18.75rem;
}

@media(max-width: 760px) {
    h1{
        font-size:0;
    }
    h1,h4{
        color:var(--mainWhite)
    }
    #logo{
    margin-left: 0;
    padding-left: 0px;
    padding-bottom: 0px;
    margin-right: 0px;
    
}
}
`;