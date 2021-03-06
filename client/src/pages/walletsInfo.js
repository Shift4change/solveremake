import React, { Component } from 'react';
import { InfoConsumer } from "../components/context";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Reviews from "../components/Reviews";
import YouTube from "react-youtube"
import Led from "../components/assets/img/LedgerNanoS.jpg"
import Da from "../components/assets/img/Daedalus.png"
import yoroi from "../components/assets/img/yoroi.png"
import wallet from "../components/assets/img/wallets.svg"
import "./walletsInfo.css"
class Wallets extends Component {
    render() {




        return (
            <div>
                {/* // <React.Fragment> */}
                <HeaderDetails className="container-fluid align-items-center">
                    <h1 className="display-3   font-weight-bold"><img src={wallet} alt='Front' id="logo" className="card-img-top mt-  " style={{ width: "150px", height: "150px" }} /> Wallets</h1>
                    <div className="container pt-4 mt-5">
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
                    <div className="container" >
                        <div className="row">

                            <div className="col-8 col-sm-7 col-lg-4 mx-auto mb-5" >
                                {/* <h3>cardano</h3>
                   <hr></hr> */}
                                <div  className="card" >
                                    <a id="h" 
                                        href="https://daedaluswallet.io/en/download/" target="_blank" rel="noopener noreferrer nofollow"
                                        
                                    >  <img src={Da} style={{ height: "170px" }} alt='Bitcoin' className="card-img-top" /> </a>
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
                            </div> 
                            <div  className=" col-8 col-sm-7 col-lg-4 mx-auto mb-5">
                                <div   className="card" >
                                    <a id="y"
                                        href="https://yoroi-wallet.com/" target="_blank" rel="noopener noreferrer nofollow"
                                        
                                    >  <img  src={yoroi} style={{ height: "170px" }} alt='Bitcoin' className="card-img-top" /> </a>
                                    <div className="card-body mb-4">
                                        <h3 id="lgt" className="card-title text-uppercase">Light wallet</h3>
                                        {/* <h5 className="card-title">lalal</h5> */}
                                        <p id="ywp" className="card-text"> Developed by Emergo, yoroi is a light wallet. You can use it as a chrom extension or on your phone for easy payments. Although with this wallet you won't download the whole Blockchain, it is secure, easy to use and you can stake your ADA. </p>

                                        <a 
                                            href="https://yoroi-wallet.com/" target="_blank" rel="noopener noreferrer nofollow"
                                            className="btn btn-outline-primary text-uppercase"
                                        >
                                            Download Here
                                </a>


                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-7 col-8  col-lg-4 mx-auto mb-5">
                                <div  className="card" >
                                    <a id="l"
                                        href="https://www.ledger.com/" target="_blank" rel="noopener noreferrer nofollow"
                                        
                                    >  <img  src={Led} alt='Bitcoin' className="card-img-top" style={{    height: "169px"}}/> </a>
                                    <div className="card-body mb-4">
                                        <h3 className="card-title text-uppercase ">Hardware wallet</h3>
                                        {/* <h5 className="card-title">lalal</h5> */}
                                        <p id="lp" className="card-text mt-4"> For securing your coins safe offline, you can use a Hardware wallet. The ledger wallet can be used to store many cryptocurrencies including Cardano(ADA) and Bitcoin.  </p>

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
                            {/* <div className="col-2">
                                <i className="fab fa-facebook"></i>

                            </div> */}
                            <div className="col-2">
                              <a href="https://twitter.com/@Ada4theWorld" target="_blank" rel="noopener noreferrer nofollow">  <i className="fab fa-twitter"> </i></a>
                            </div>
                            {/* <div className="col-2">
                                <i className="fab fa-google-plus-g" />
                            </div>
                            <div className="col-2">
                                <i className="fab fa-reddit" />
                            </div> */}
                       
                        </div>
                    </div>
                    <br></br>
                </HeaderDetails>
                {/* {Navlinks} */}
                <div className="container">
                    <ul className="nav nav-tabs">
                        {/* About Place Link */}
                        <li className="nav-item">
                            <a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">Videos</a>
                        </li>
                        {/* Reviews link */}
                        <li className="nav-item">
                            <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">Questions</a>
                        </li>
                        {/* Map link */}
                        <li className="nav-item">
                            <a href="#map" className="nav-link" role="tab" data-toggle="tab">About</a>
                        </li>
                    </ul>
                    {/* Tab Pane */}
                    <div className="tab-content mb-5">
                        {/* About Place Tab */}
                        <div id="aboutPlace" className="tab-pane in active text-center" role="tabpanel">
                            <div className="container">
                                <div className="row">
                                    <div className="container col-10 col-lg-6 d-flex justify-content-center mt-5">
                                        <iframe width="575" height="315"
                                            src="https://www.youtube.com/embed/eNUwie_45E8" allowfullscreen="true">
                                        </iframe>
                                    </div>
                                    <div className="container col-10 col-lg-6 d-flex justify-content-center mt-5">
                                        <iframe width="575" height="315"
                                            src="https://www.youtube.com/embed/9jg8lsreIQ8" allowfullscreen="true">
                                        </iframe>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <h2 className="mb-3">Wallet security</h2>
                            <p>The Byron era also saw the delivery of the Daedalus wallet, IOHK's official desktop wallet for ada, as well as Yoroi, a light wallet from IOHK's sister company Emurgo designed for quick transactions and day-to-day use.</p>
                            <img src="" alt="" className="img-thumbnail img-fluid" /> */}
                    
                    {/* reviews */}
                    <div className="tab-pane" id="reviews" role="tabpanel">
                        <Reviews />
                    </div>
                    {/* Map */}
                    <div className="tab-pane" id="map" role="tabpanel">
                        {/* <iframe src="" style={{ border: '0', height: '28.125rem', width: "100%", frameborder: '0' }}></iframe> */}
                        <h2 className="mb-3">Wallet security</h2>
                        <p>The Byron era also saw the delivery of the Daedalus wallet, IOHK's official desktop wallet for ada, as well as Yoroi, a light wallet from IOHK's sister company Emurgo designed for quick transactions and day-to-day use.</p>
                        <img src="" alt="" className="img-thumbnail img-fluid" />
                    </div>
                </div>
            </div>
            </div >
            // </React.Fragment>
        );

    }
}




export default Wallets;


const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,155,109), rgba(255,255,255));
height: 100%;
font-family:  Helvetica;
/* text-transform: uppercase; */
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
/* #right{
    font-size:45px;
    margin-top:-177px;
    padding-left: -16px;
    margin-left: 413px;
    position:fixed;
}
#left{
    font-size:45px;
    margin-left:-450px;
    margin-top:-177px;
    padding-left:12px;
    position:fixed;
} */
 /* #h:hover{
    background-color:black;
    background-color:rgb(235, 34, 86); 
 } */
 
#logo{
    margin-left: -79px;
    padding-left: 0px;
    padding-bottom: 12px;
    margin-right: -1px;
   
}



.nav-item {
    height: 18.75rem;
}


#social{
    padding-left:40px;
}

/* @media(width: 375px){
    .container {
        width: 100%;
        padding-right: 2px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    #logo {
    margin-left: -11px;
    padding-left: 0px;
    padding-bottom: 12px;
    margin-right: -1px;
    padding-top:50px;
}
#right {
    font-size: 45px;
    margin-top: 0px;
    padding-left: -16px;
    margin-left: 80px;
    position: static;
    padding-bottom: 50px;
}
#left {
    font-size: 45px;
    margin-left: -195px;
    margin-top: 0px;
    padding-left: 27px;
    position: static;
}
}

@media(width: 768px) {
    .container{
        max-width: 585px
    }
    
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
    #left {
        font-size: 45px;
    margin-left: -342px;
    margin-top: -240px;
    padding-left: 27px;
    position: static;
    }
        #right {
            font-size: 45px;
    margin-top: -209px;
    padding-left: -16px;
    margin-left: 177px;
    position: static;
    padding-bottom: 50px;
        }
}


@media(width: 1440px) {
    #right{
       
    font-size:45px;
    margin-top:-223px;
    padding-left: -16px;
    margin-left: 509px;
    position:fixed;
    }
    #left {
    font-size: 45px;
    margin-left: -579px;
    margin-top: -223px;
    padding-left: 12px;
    position: fixed;
    }
}
@media(width: 1326px){
    #left {
        font-size: 45px;
        margin-left: -581px;
        margin-top: -209px;
        padding-left: 49px;
        position: fixed;
    }
        #right {
            font-size: 45px;
            margin-top: -209px;
            padding-left: -16px;
            margin-left: 468px;
            position: fixed;
        }
        #lp{
            padding-bottom:11px;
        }
}
@media(width: 1366px){
    #left {
        font-size: 55px;
    margin-left: -62px;
    margin-right: 154px;
    margin-top: -138px;
    padding-left: 12px;
    padding-bottom: 65px;
    position: static;
}
#right {
            font-size: 55px;
            margin-top: -209px;
            padding-left: -16px;
            margin-left: 155px;
            padding-bottom: 65px;
            position: static;
        }
        #lp{
            padding-bottom:11px;
        }
}

@media(width: 1024px){
    #left {
        font-size: 45px;
        margin-left: -447px;
        margin-top: -177px;
        padding-left: 12px;
        position: fixed;
    }
    #right {
    font-size: 45px;
    margin-top: -177px;
    padding-left: -16px;
    margin-left: 388px;
    position: fixed;
}
#lgt{
    margin-bottom:45px;
}
#lp{
    padding-bottom:13px;
}
} */
p{
    font-family: Helvetica Neue,Arial,"Noto Sans",sans-serif ;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
h1{
    font-size:0px;
}
.row {
    
    display: flex;
    
    flex-wrap: wrap;
    margin-right: -79px;
    margin-left: -76px;
    margin-top: 2px;
}
#logo {
    margin-left: -3px;
    padding-left: 0px;
    padding-bottom: 12px;
    margin-right: -1px;
    margin-bottom: -25px;
    margin-top: 46px;
}
}
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    #left {
    font-size: 40px;
    margin-left: -62px;
    margin-right: 110px;
    margin-top: 0px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
}
#logo {
    margin-left: -3px;
    padding-left: 0px;
    padding-bottom: 12px;
    margin-right: -1px;
    margin-bottom: -25px;
}

#right {
    font-size: 40px;
    margin-top: 0px;
    padding-left: -16px;
    margin-left: 127px;
    padding-bottom: 65px;
    position: static;
}
h1{
    margin-bottom:-44px;
    padding-top:13%;
}
#ywp{
    padding-bottom:32px;
}
#lp{padding-bottom:12px;
}


}
@media only screen  and (min-width : 1224px) {
    .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    margin-top: -3%;
}
h1 {
    padding-top: 8%;
    /* margin-bottom: -62px; */
}
#left {
    font-size: 40px;
    margin-left: -62px;
    margin-right: 166px;
    margin-top: -26px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
}
#right {
    font-size: 40px;
    margin-top: -55px;
    padding-left: -16px;
    margin-left: 148px;
    padding-bottom: 65px;
    position: static;
}
#lp{
    padding-bottom:12px;
}
}
@media only screen  and (min-width : 1824px) {
     h1 {
    padding-top: 6%;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    margin-top: -3%;
}
#left {
    font-size: 40px;
    margin-left: -179px;
    margin-right: 209px;
    margin-top: -27px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
}
#right {
    font-size: 40px;
    margin-top: -27px;
    padding-left: -16px;
    margin-left: 219px;
    padding-bottom: 56px;
    position: static;
}
#lp{
    padding-bottom:12px;
}

/* #left {
    font-size: 40px;
    margin-left: -318px;
    margin-right: 104px;
    margin-top: -49px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
} */
}


`;