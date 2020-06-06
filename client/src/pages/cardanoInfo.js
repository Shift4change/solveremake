import React, { Component } from 'react';
import { InfoConsumer } from "../components/context";
import styled from 'styled-components';
import Reviews from "../components/Reviews";
import YouTube from "react-youtube"
import { Link } from 'react-router-dom';
import logo from "../components/assets/img/cardanologo.svg"
import carwall from "../components/assets/img/cardano-wall.jpg"
import carwall2 from "../components/assets/img/cardano-wall2.jpg"
import adahome from "../components/assets/img/adahome.jpg"
import byron from "../components/assets/img/byron.jpg"
import shelly from "../components/assets/img/Shelley001.jpg"
import goguen from "../components/assets/img/goguen2.jpeg"
import basho from "../components/assets/img/matsuo-basho11.jpg"
import voltaire from "../components/assets/img/voltaire.jpg"
import "./cardanoInfo.css"
class CardanoC extends Component {
    render() {




        return (
            <div>
                {/* // <React.Fragment> */}
                <HeaderDetails className="container-fluid align-items-center pt-5">
                    <h1 className=" display-2 font-weight-bold pt-5 " id="front" > <img src={logo} alt='Front' id="logo" className="card-img-top mt-2  mb-3" style={{ width: "150px", height: "150px" }} />Cardano</h1>
                    {/* <h4 className="display-5 align-left" >Eras of Cardano</h4> */}
                    {/* <hr></hr> */}
                    <div className="container mt-2">
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <Link to="/ada">
                                    <i id="left" class="fas fa-arrow-left"> </i> </Link>
                            </div>
                            <div className="col-2">
                                <Link to="/exchanges">
                                    <i id="right" class="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div id="cc" className="container ">
                        <div className="row mt-">
                            <div className="col-10 col-lg-4 mx-auto mt- mb-">
                                <div className="card" >
                                    {/* <h3 className="card-title text-uppercase mt-3"> HOME</h3> */}
                                    <img src={adahome} alt='Bitcoin' className="card-img-top " />
                                    <h3 className="card-title text-uppercase mt-4 mb-3">Intro</h3>
                                    <div className="card-body">
                                        <h3 className="card-title text-uppercase"></h3>
                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="ch" className="card-text mt-4 mb-2">Cardano is Home to the Ada cryprocurrency, which can be used to send and recivie digital funds.  Cardano is more then just a cryptocurrency, it is a tehnological platform capable of running financial applications currently used every day by individuals, organisations and governments all around the world.</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-10 col-lg-4 mx-auto mt-0 mb-">
                                <div className="card" >
                                    {/* <h3 className="card-title text-uppercase mt-3">Cardano</h3> */}
                                    <img src={carwall} alt='Bitcoin' className="card-img-top " />
                                    <h3 className="card-title text-uppercase mb-0 mt-4">platform</h3>
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="cp" className="card-text mt-">Cardano is constructed in layers, which gives the system flexibility to be maintained and allow for upgrades. After the layer that runs Ada is complete, a separate layer is built to handle smart contracts, the digital legal agreements that underpin future commerce and business. Cardano will also run decentralised applications, not controlled by any single party but instead operate on a blockchain.</p>


                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt- mb-5">
                                <div className="card" >
                                    {/* <h3 className="card-title text-uppercase mt-3">Staking vs mining</h3> */}
                                    <img src={carwall2} alt='Bitcoin' className="card-img-top" />
                                    <h3 className="card-title text-uppercase mt-4">Phases</h3>
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="pc" className="card-text mb-">Cardano is a third-generation blockchain, created from the ground up using research, peer-review, and a rigorous formal development model. Cardano's story began in 2015, with a vision of addressing the three challenges facing all blockchain networks: scalability, interoperability, and sustainability. The first version of Cardano was shipped in 2017 and the first Era began.</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <h3> Byron Era</h3>
                                <hr></hr>

                                <div className="card" >
                                    {/* <h3 className="card-title text-uppercase mt-3">Byron</h3> */}
                                    <a id="byron" className="btn  text-uppercase" target="_blank" rel="noopener noreferrer" href="https://roadmap.cardano.org/en/byron/">  <img id="bi" src={byron} alt='Bitcoin' style={{ width: "260px", height: "200px" }} className="card-img-top" /></a>
                                    <h3 className="card-title text-uppercase mt-3">Foundation</h3>
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="bc" className="card-text mb-3">The Byron era was about the first crucial technology developments and about building a community to get people involved in creating the blockchain of the future. This first era of Cardano allowed users to buy and sell the Ada currency, running the Ouroboros consensus protocol. The heart of the Cardano network, Ouroboros is the first proof-of-stake protocol created on the basis of academic research, with a mathematically-proven level of security. </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <h3>Shelley Era</h3>
                                <hr></hr>
                                <div className="card" >
                                    {/* <h3 className="card-title text-uppercase mt-3">shelly</h3> */}
                                    <a id="shell" className="btn  text-uppercase" target="_blank" rel="noopener noreferrer" href="https://roadmap.cardano.org/en/shelley/"><img id="sc" src={shelly} alt='Bitcoin' style={{ width: "260px", height: "200px" }} className="card-img-top" /></a>
                                    <h3 className="card-title text-uppercase mt-3">Decentralization</h3>
                                    <div className="card-body">
                                        <p id="dc" className="card-text mb-3">
                                            As the Shelley era progresses more nodes will shift towards being run by the Cardano community, which allows Cardano to be 50-100 times more
                                            decentralized than other large blockchain networks and enjoy greater security as a result.

                                            Shelley will also see the introduction of a delegation and incentives scheme, a reward system to drive stake pools and community adoption, making
Cardano more useful, more rewarding, and valuable for all users.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <h3>Goguen Era</h3>
                                <hr></hr>
                                <div className="card" >
                                    {/* <h3 className="card-title text-uppercase mt-3">goguen</h3> */}
                                    <a id="goguen" className="btn  text-uppercase" target="_blank" rel="noopener noreferrer" href="https://roadmap.cardano.org/en/goguen/"><img id="gc" src={goguen} style={{ width: "260px", height: "200px" }} alt='Bitcoin' className="card-img-top" /></a>
                                    <h3 className="card-title text-uppercase mt-3">Smart contracts</h3>
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="scp" className="card-text ">The Goguen era represents a step change in the abilities of Cardano.
                                        One of the goals has been the creation of Plutus,
                                        a smart contract development language and execution platform.
                                        The Goguen era will make Cardano accessible to wider audiences via Marlowe,
                                        allowing financial and business experts with no previous technical knowledge to create smart contracts.
 Marlowe is a high-level, domain-specific language (DSL) for financial contracts which is built on Plutus.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-5">
                                <h3>Basho Era</h3>
                                <hr></hr>
                                <div className="card" >
                                    <a id="basho" className="btn  text-uppercase" target="_blank" rel="noopener noreferrer" href="https://roadmap.cardano.org/en/basho/"><img id="bbc" src={basho} style={{ width: "260px", height: "200px" }} alt='Bitcoin' className="card-img-top" /></a>
                                    <h3 className="card-title text-uppercase mt-3">Scaling</h3>
                                    {/* <img src={bdp} alt='halving' className="card-img-top" style={{width:"200px" }} /> */}
                                    {/* <p id="wan">3176.0008067 ADA</p> */}
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p className="card-text mb-2">  One of the core developments of Basho will be the introduction of sidechains:
                                        new blockchains, interoperable with the main Cardano chain, with immense potential to extend the capabilities of the network.
                                        Overall, the Basho era will see Cardano become one of the most high performance, resilient, and flexible blockchain platforms in the industry.
                                        This will provide a network infrastructure with the capability to scale in a sustainable, secure way,
 as well as the ability to add new functionality without compromising the reliability at the core of the network.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-lg-4 mx-auto mt-1 ">
                                <h3>Voltaire Era</h3>
                                <hr></hr>
                                <div className="card" >
                                    <a id="voltaire" className="btn  text-uppercase" target="_blank" rel="noopener noreferrer" href="https://roadmap.cardano.org/en/voltaire/"><img id="vc" src={voltaire} style={{ width: "260px", height: "200px" }} alt='Bitcoin' className="card-img-top" /></a>
                                    <h3 className="card-title text-uppercase mt-3">Governance</h3>


                                    {/* <img src={wa1} alt='Bitcoin' className="card-img-top" style={{width:"250px", height:"100%"}} /> */}
                                    <div className="card-body">

                                        {/* <h5 className="card-title">lalal</h5> */}

                                        <p id="wap" className="card-text mb-0 ">The Voltaire era of Cardano will provide the final pieces required for the Cardano network to become a self-sustaining system.
                                        It will require maintainence and improvements over time in a decentralized way.
                                        Voltaire will see the addition of voting and a treasury system which will add the ability for network participants to present Cardano
                                        improvement proposals that can be voted on by stakeholders.
                                        The treasury will allow a fraction of all transaction fees to be pooled to provide funds for development activities undertaken
following the voting process.</p>

                                    </div>
                                </div>
                            </div>

                            <div className="col-10 col-lg-4 mx-auto mt-1 mb-">
                                <h3>Academic Research</h3>
                                <hr></hr>
                                <div className="card" >
                                    <h3 className="card-title text-uppercase mb-3 mt-3">Papers</h3>
                                    <p> IOHK works with world-leading academics on fundamental research, most of which is subject to academic peer review, with papers presented at top-tier international conferences. </p>
                                    <div className="card-body "  >

                                        <ul className="list-unstyled" id="aca"  >
                                            <li style={{ margingTop: "-40px", paddingTop: "-40px" }} >IOHK Library  <a target="_blank" rel="noopener noreferrer" href="https://www.iohk.io/en/research/library/">Academic Research</a> </li>

                                        </ul>
                                        <h3 className="card-title text-uppercase mb-4 mt-3">developed</h3>
                                        <p>In collaboration with the research team, a technical prototyping team experiments with implementations of the functions and approach described in the research.</p>


                                        <p>IOHK engineers make great use of formal development methods: rigorous, mathematical techniques for testing that software works exactly as intended. Functional programming languages are used, most notably Haskell, since they are easier to test and verify.</p>
                                        <ul className="list-unstyled" id=""  >
                                            <li id="wc" style={{ margingTop: "-40px", paddingTop: "-40px" }} > View  <a target="_blank" rel="noopener noreferrer" href="https://iohk.io/en/team/"> the IOHK Team</a> </li>

                                        </ul>



                                        {/* <h5 className="card-title">lalal</h5> */}
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    {/* <p>hellou</p> */}
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

                        </div>
                    </div>
                </HeaderDetails>
                <br></br>
                {/* {Navlinks} */}
                <div className="container">
                    <ul className="nav nav-tabs">
                        {/* About Place Link */}
                        <li className="nav-item">
                            <a href="video" className="nav-link active" role="tab" data-toggle="tab">Cardano</a>
                            <h1></h1>

                        </li>
                        {/* Reviews link */}
                        {/* <li className="nav-item">
                            <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">Reviews</a>
                        </li> */}
                        {/* Map link */}
                        <li className="nav-item">
                            <a href="#aboutPlace" className="nav-link" role="tab" data-toggle="tab">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#academic" className="nav-link" role="tab" data-toggle="tab">Academic </a>
                        </li>
                    </ul>
                    {/* Tab Pane */}
                    <div className="tab-content mb-5">
                        {/* About Place Tab */}
                        <div className="tab-pane" id="video" className="tab-pane in active text-center" role="tabpanel">
                            {/* <iframe src="" style={{ border: '0', height: '28.125rem', width: "100%", frameborder: '0' }}></iframe> */}
                            <div className="container">
                                <div className="row">
                                    <div className="container col-10 col-lg-6 d-flex justify-content-center mt-5">
                                        <iframe width="420" height="315"
                                            src="https://www.youtube.com/embed/M1EocqtPDVE" allowfullscreen="true">
                                        </iframe>
                                    </div>
                                    <div className="container col-10 col-lg-6 d-flex justify-content-center mt-5">
                                        <iframe width="420" height="315"
                                            src="https://www.youtube.com/embed/Ja9D0kpksxw" allowfullscreen="true">
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
                        <div id="aboutPlace" className="tab-pane in  text-center" role="tabpanel">
                            <h2 className="mb-3">Cardano</h2>
                            <p>This is the first blockchain project to be developed from a scientific philosophy, and the only one to be designed and built by a global team of leading academics and engineers. It is essential that the technology is secure, flexible and scalable for use by many millions of users. Consequently, considerable thought and care from some of the leading experts in their fields has been devoted to the project and informed design decisions. The scientific rigour applied to mission-critical systems such as aerospace and banking has been brought to the field of cryptocurrencies, with a high assurance implementation. We believe this is the first time that this has been done.

A major innovation of Cardano is that it will balance the needs of users with those of regulators, and in doing so combine privacy with regulation. The vision for Cardano is that its new style of regulated computing will bring greater financial inclusion by providing open access for all to fair financial services.</p>
                            <img src="" alt="" className="img-thumbnail img-fluid" />
                        </div>

                        {/* {/*Academic*?}} */}
                        <div className="tab-pane" id="academic" role="tabpanel">
                            <div className="container">
                                <div className="row">
                                    {/* <iframe src="" style={{ border: '0', height: '28.125rem', width: "100%", frameborder: '0' }}></iframe> */}
                                    <div className="container col-10 col-lg-4 d-flex justify-content-center mt-5">
                                        <iframe width="420" height="315"
                                            src="https://www.youtube.com/embed/wsBBog2rCzY" allowfullscreen="true">
                                        </iframe>
                                    </div>
                                    <div className="container col-10 col-lg-4 d-flex justify-content-center mt-5">
                                        <iframe width="420" height="315"
                                            src="https://www.youtube.com/embed/nB6eDbnkAk8" allowfullscreen="true">
                                        </iframe>
                                    </div>
                                    <div className="container col-10 col-lg-4 d-flex justify-content-center mt-5">
                                        <iframe width="420" height="315"
                                            src="https://www.youtube.com/embed/PoNaw-Mtxgo" allowfullscreen="true">
                                        </iframe>
                                    </div>

                                </div>
                            </div>
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
background: linear-gradient(rgba(109,161,179), rgba(255,255,255));
height: 100%;
/* text-transform: uppercase; */
color: var(--mainWhite);
text-align: center;
padding-left: 0px;
padding-right:25px;

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
li{
    color: var(--mainDark);
}
#aca{
    margin-top: -35px;
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
/* #right{
    font-size:45px;
    margin-top:-138px;
    padding-left: -16px;
    margin-left: 407px;
    position:fixed;
}
#left{
    font-size:45px;
    margin-left: -445px;
    margin-top: -129px;
    padding-left:12px;
    position:fixed;
} */
#logo{
    margin-left: -122px;
    padding-left: 0px;
    padding-bottom: 17px;
    margin-right: -1px;
   
}
.fill{
    color:#555;
}



.nav-item {
    height: 18.75rem;
}



@media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
 
h1{
    font-size:0;
}
 #logo {
    margin-left: 30px;
    padding-left: 0px;
    padding-bottom: -13px;
    margin-right: -1px;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -46px;
    margin-left: -15px;
}
}
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {

    #right {
    font-size: 40px;
    margin-top: -11px;
    padding-left: -16px;
    margin-left: 128px;
    padding-bottom: 24px;
    position: static;
}

#left {
    font-size: 40px;
    margin-left: -62px;
    margin-right: 104px;
    margin-top: -11px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
}
#cp{
    padding-bottom:3px;
}
#ch{
    padding-bottom:27px;
}
#pc{
    margin-bottom:-10px;
}
#scp{
    margin-bottom:-8px;
}

}
@media only screen  and (min-width : 1224px) {
    #right {
    font-size: 40px;
    margin-top: -20px;
    padding-left: -16px;
    margin-left: 161px;
    padding-bottom: 24px;
    position: static;
}
#left {
    font-size: 40px;
    margin-left: -66px;
    margin-right: 144px;
    margin-top: -20px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
}
 #logo {
    margin-left: -41px;
    padding-left: 0px;
    padding-bottom: 17px;
    margin-right: -1px;
}
#cp{
    padding-bottom:12px;
}
#bc{
    padding-bottom:24px;
}
#wap{
    padding-bottom:8px;
}
#wc{
    padding-bottom:18px;
}
#scp{
    padding-bottom:15px;
}
#ch{
    padding-bottom:12px;
}

}
@media only screen  and (min-width : 1824px) {
    #right {
    font-size: 40px;
    margin-top: -4px;
    padding-left: -16px;
    margin-left: 245px;
    padding-bottom: 24px;
    position: static;
}

#left {
    font-size: 40px;
    margin-left: -179px;
    margin-right: 209px;
    margin-top: -4px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
}
#logo {
    margin-left: -55px;
    padding-left: 0px;
    padding-bottom: 17px;
    margin-right: -1px;
}
#cp{
    padding-bottom:12px;
}
#ch{
    padding-bottom:12px;
}
#bc{
    padding-bottom:24px;
}
#wap{
    padding-bottom:8px;
}
#wc{
    padding-bottom:19px;
}
#scp{
    padding-bottom:14px;
}
}




























/* @media(width: 760px) {
    h1{
        font-size:0;
    }
    h1,h4{
        color:var(--mainWhite)
    }
    #logo{
    margin-left: 19px;
    padding-left: 0px;
    padding-bottom: 0px;
    margin-right: 0px;
    }
    #bi{
        
        width: 234px;
        height: 229px;
    }
    #right{
    font-size:45px;
    margin-top:-138px;
    padding-left: -16px;
    margin-left: 392px;
    position:fixed;
    }
    #left {
    font-size: 45px;
    margin-left: -437px;
    margin-top: -138px;
    padding-left: 12px;
    position: fixed;

} */


}
/* @media(width: 1024px){
    #bc{
padding-bottom:24px;
    }
    #right{
    font-size:45px;
    margin-top:-138px;
    padding-left: -16px;
    margin-left: 392px;
    position:fixed;
    }
    #left {
    font-size: 45px;
    margin-left: -437px;
    margin-top: -138px;
    padding-left: 12px;
    position: fixed;
}
}
@media(width: 1326px){
    #right{
    font-size: 40px;
    margin-top: -17px;
    padding-left: -16px;
    margin-left: 163px;
    position: static;
}
#left{
    font-size: 40px;
    margin-left: -62px;
    margin-right: 123px;
    margin-top: -17px;
    padding-left: 12px;
    padding-bottom: 15px;
    position: static;
} */
    /* #right{
        font-size:45px;
        margin-top:-139px;
        padding-left: -16px;
        margin-left: 479px;
        position:fixed;
        }
        #left {
        font-size: 45px;
        margin-left: -570px;
        margin-top: -139px;
        padding-left: 49px;
        position: fixed;
    } */
    /* #bc{
padding-bottom:11px;
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
        #logo {
    margin-left: 8px;
    padding-left: 0px;
    padding-bottom: 17px;
    margin-right: -1px;
    width: 190px;
    height: 156px;
}
#ch {
    padding-bottom: 13px;
}
#dc {
    padding-bottom: -1px;
}
#bc{
    padding-bottom:23px;
}
#wc {
    padding-bottom: 17px;
}

    }




@media(width: 1440px) {
    #right{
    font-size: 40px;
    margin-top: -17px;
    padding-left: -16px;
    margin-left: 163px;
    position: static;
}
#left{
    font-size: 40px;
    margin-left: -62px;
    margin-right: 123px;
    margin-top: -17px;
    padding-left: 12px;
    padding-bottom: 15px;
    position: static;
}
    
    #front{
        margin-left:70px;
    }
    #logo{
        padding-right:10px;
        margin-right:10px;

    }
    #bc{
padding-bottom:11px;
    }

}
@media(max-width: 375px){
    .container {
        width: 26rem;
    margin-left: -26px;
    padding-right: 14px;
}
    #bi{
        margin-left:-13px;
        width: 230px;
    height: 200px;
    }
    #sc{
        margin-left:-13px;
    }
    #gc{
        margin-left:-13px;
    }
    #bbc{
        margin-left:-13px;
    }
    #vc{
        margin-left:-13px;
    }
    #right{
    font-size:45px;
        padding-top:-5px;
    padding-left:88px;
    margin-left: 0px;
    position:static
}

    #left {
        font-size: 45px;
    padding-top: -80px;
    padding-left: 53px;
    margin-left: -215px;
    padding-bottom: 27px;
    position: static;
}
#logo{
    margin-left: 35px;
    padding-left: 0px;
    padding-bottom: 17px;
    margin-right: -1px;
   margin-bottom:-30px;
   width: 225px;
    height: 169px;
}
h1{
    font-size:0px;
}

}
@media(width: 2560px){
    #ch {
    padding-bottom: 11px;
}
#bc{
    padding-bottom:24px;
}
#wc {
    padding-bottom: 17px;
}
#right{
        font-size: 34px;
    margin-top: -12px;
    padding-left: -16px;
    margin-left: 182px;
    position: static;
}
#left{
    font-size: 35px;
    margin-left: -81px;
    margin-right: 171px;
    margin-top: -12px;
    padding-left: 12px;
    padding-bottom: 25px;
    position: static;
}
#front{
        margin-left:70px;
    }

} */




`;