import React, { Component } from 'react';
import { InfoConsumer } from "../components/context";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Reviews from "../components/Reviews";
import YouTube from "react-youtube";
import block from "../components/assets/img/exchanges.png"
import carda from "../components/assets/img/crypto-exchanges-cardano.png"
import hall from "../components/assets/img/hall.png"
import "./exchanges.css"
class ExchangesE extends Component {
    render() {




        return (
            <div>
                {/* // <React.Fragment> */}
                <HeaderDetails className="container-fluid align-items-center pt-">
                    <h1 className="display-3 text-center  font-weight-bold mb-5 "><img  src={hall} alt='Front' id="exim" className="card-img-top   "style={{width:"150px", height:"150px"}}  /> Exchanges</h1>
                    {/* <h4 className="display-5">dadasd</h4>
                    <p>hellou</p> */}
                      <div className="container  ">
                        <div className="row justify-content-center">
                            <div className="col-2">
                            <Link to="/cardano">
                            <i id="left" class="fas fa-arrow-left"> </i> </Link>
                                </div>
                                <div className="col-2">
                                    <Link to="/wallets">
                            <i id="right" class="fas fa-arrow-right"></i></Link>
                                </div>
                                </div>
                                </div>
                    <div className="container-fluid mt-  pt-2">
                        <div className="row">

                            <div id="cont" className="card container col-8 col-lg-8  mx-auto mt-1 pt-2 mb-1 p-1" >

                                <div className="card-body">
                                    {/* <h5 className="card-title text-center">Exchanges</h5> */}
                                    <p style={{ float: "right" }}><img src={carda} id="ex" className="container " /></p>


                                    {/* <p style={{float: "left"}}><img src={block} height="400px" width="400px" border="1px"/> he;pi</p> */}
                                    <h4 >Exchanges below are verified by the Blockchain Transparency Institute </h4>

                                    
                                   
                                    <div id="be" class="exchange-button">

                                        <p id="be">Bittrex  <a href="https://bittrex.com/ " target="_blank" rel="noopener noreferrer nofollow" class="exchange-button__a">
                                            <span class="exchange-button__content">
                                                Go to Bittrex
      <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="13" viewBox="0 0 9 13" class="exchange-button__next-icon">
                                                    <path fill="none" stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" d="M1.5 12 7 6.5 1.5 1">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a></p>
                                    </div>
                                    <div id="ke" class="exchange-button">

<p id="ke">Kraken  <a href="https://www.kraken.com/ " target="_blank" rel="noopener noreferrer nofollow" class="exchange-button__a">
    <span class="exchange-button__content">
        Go to Kraken
<svg xmlns="http://www.w3.org/2000/svg" width="8px" height="13" viewBox="0 0 9 13" class="exchange-button__next-icon">
            <path fill="none" stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" d="M1.5 12 7 6.5 1.5 1">
            </path>
        </svg>
    </span>
</a></p>
</div>
                                    <div class="exchange-button">

                                        <p id="eb">Binance  <a href="https://www.binance.com/en/register?ref=16336880 " target="_blank" rel="noopener noreferrer nofollow" class="exchange-button__a">
                                            <span class="exchange-button__content">
                                                Go to Binance
      <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="13" viewBox="0 0 9 13" class="exchange-button__next-icon">
          
                                                    <path fill="none" stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" d="M1.5 12 7 6.5 1.5 1">
                                                    </path>
                                                </svg>
                                                
                                            </span>
                                           
                                        </a></p>
                                    </div>
                                    <div id="cb" class="exchange-button">

                                        <p id="cb">Coinbase <a href="https://www.coinbase.com/join/fodrov_v " target="_blank" rel="noopener noreferrer nofollow" class="exchange-button__a">
                                            <span class="exchange-button__content">
                                                Go to Coinbase
      <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="13" viewBox="0 0 9 13" class="exchange-button__next-icon">
                                                    <path fill="none" stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" d="M1.5 12 7 6.5 1.5 1">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a></p>
                                    </div>

                                    <p id="pv" className="card-text">Read our disclaimer before investing. Take your security seriously by taking your funds off exchanges and into your own <a target="_blank" rel="noopener noreferrer" href="/wallets/">wallets</a> . Do not invest money you can't afford to lose. We are not financial advisors. The purpose of this website is to educate about Cardano.</p>
                                </div>
                            </div>
                        </div>

                    </div>


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
                    <br></br>
                </HeaderDetails>
                {/* {Navlinks} */}

            </div>
            // </React.Fragment>
        );

    }
}




export default ExchangesE;


const HeaderDetails = styled.header`
background: linear-gradient(rgba(94,96,197), rgba(255,255,255));
height: 100%;
/* text-transform: uppercase; */
color: var(--mainWhite);
text-align: center;
padding-left:12px;

h1 {
    padding-top: 11%;
    color: var(--mainDark);
}
h3{
    color: var(--mainDark);
}

h4 {padding-right:2px;
    padding-left:5px;
    color: var(--mainDark);
}
h5{vertical-align: left;
    color: var(--mainDark);
}
/* #cont{
   
    background-color: #F86;
} */
img{
    height:100%;
}
/* #bi{
    margin-top: -10px;
    padding-top: 25px;
    margin-left: -91px;
} */
#ke{
    margin-top: -20px;
    padding-top: 25px;
    margin-left: -43px;
}
#be{margin-top: -20px;
    padding-top: 25px;
    margin-left: -41px;

}
#cb{margin-top: -19px;
    padding-top: 25px;
    margin-left: -53px;

}
#pv{
    font-size:12px;
    margin-top:29px;
    padding-left:11px;
    vertical-align:middle;
}
p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 1%;
    color: var(--mainDark);
}

.exchange-button{
    padding-top:-50px;
  margin-top:0px;
    margin: 1px 0 0;
    text-align: center;
}
.exchange-button__a {
    display: inline-block;
    text-decoration: none;
}

.trade__label {
    background-color: #002889;
    display: inline-block;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .05em;
    padding: 7px 13px 8px;
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
    margin-top:-80px;
    padding-left: -16px;
    margin-left: 407px;
    position:fixed;
}
#left{
    font-size:45px;
    margin-left:-450px;
    margin-top:-80px;
    padding-left:12px;
    position:fixed;
} */

.nav-item {
    height: 18.75rem;
}

/* @media(width: 760px) {
    h1,h3,h4{
        color:var(--mainDark)
    }
    h1{
        padding-top: 86px;
        margin-bottom: -24px;
    font-size: 48px;
    padding-top: 86px;
    }

    #cont{
        margin-top:5px;
        padding-left:5px;
        margin-right:5px;
        padding-right:10px;
    }
    #bi{
  
        margin-left: -20px;
    padding-left: 15px;
    padding-right: 0px;
}
#ke{
    margin-left: -20px;
    padding-left: 15px;
    padding-right: 0px;
}
#be{
    margin-left: -20px;
    padding-left: 15px;
    padding-right: 0px;

}
#cb{    margin-left: -20px;
    padding-left: 15px;
    padding-right: 0px;
   
}
}

@media(width: 1440px) {
    #right{
       
    font-size:45px;
    margin-top:-122px;
    padding-left: -16px;
    margin-left: 510px;
    position:fixed;
    }
    #left {
    font-size: 45px;
    margin-left: -579px;
    margin-top: -122px;
    padding-left: 12px;
    position: fixed;
    }
    .exchange-button__content {
    background-color: #126bff;
    display: block;
    border-radius: 50px;
    padding: 35px 52px 44px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    }
    #pv {
    font-size: 12px;
    margin-top: 54px;
    padding-left: 11px;
    vertical-align: middle;
}

    #eb{
       
        margin-left: -90px;
    }

} */

@media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    h1{
        font-size:50px;
    padding-top: 34%;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -36px;
    margin-left: -15px;
}
.container-fluid {
    width: 100%;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
}
#exim{
    width: 150px;
    height: 150px;
    padding-top: 9px;
    margin-top: -35px;
}
h4{
    font-size:15px
}
#ex {
    margin-top: -18px;
    margin-right: -35px;
    width: 200px;
    height: 126px;
    padding-left: 0px;
}
.exchange-button__content {
    background-color: #126bff;
    display: block;
    border-radius: 28px;
    padding: 11px 12px 12px;
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    margin-right: -103px;
}
#eb {
    margin-left: -90px;
    margin-top: 5px;
}
}
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    .exchange-button__content {
    background-color: #126bff;
    display: block;
    border-radius: 61px;
    padding: 21px 14px 20px;
    color: #fff;
    font-size: 17px;
    font-weight: 700;
}
 #ex {
    margin-top: 20px;
    margin-right: -80px;
    width: 263px;
    height: 370px;
    padding-left: 0px;
}
#eb{
       
       margin-left: -90px;
   }
   h1{
    padding-top: 12%;
}
#exim{
    width: 150px;
    height: 150px;
    padding-top: 9px;
    margin-top: -50px;
}
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
}
@media only screen  and (min-width : 1224px) {
    .exchange-button__content {
        background-color: #126bff;
    display: block;
    border-radius: 50px;
    padding: 20px 42px 24px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
}
    #ex {
    margin-top: 20px;
    margin-right: -120px;
    width: 488px;
    height: 563px;
    padding-left: 0px;
}
#eb{
       
       margin-left: -90px;
   }
   h1{
    padding-top: 8%;
}
#exim{
    width: 150px;
    height: 150px;
    padding-top: 9px;
    margin-top: -50px;
}
#left {
    font-size: 40px;
    margin-left: -130px;
    margin-right: 104px;
    margin-top: -3px;
    padding-left: 12px;
    padding-bottom: 23px;
    position: static;
}
#right {
    font-size: 40px;
    margin-top: -3px;
    padding-left: -16px;
    margin-left: 150px;
    padding-bottom: 24px;
    position: static;
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
h1{
    padding-top: 6%;
}
#exim{
    width: 150px;
    height: 150px;
    padding-top: 9px;
    margin-top: -50px;
}
.exchange-button__content {
    background-color: #126bff;
    display: block;
    border-radius: 50px;
    padding: 35px 52px 44px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    }
    #pv {
    font-size: 12px;
    margin-top: 54px;
    padding-left: 11px;
    vertical-align: middle;
}
#eb{
       
       margin-left: -90px;
   }
    #ex {
    margin-top: 20px;
    margin-right: -48px;
    width: 749px;
    height: 563px;
    padding-left: 0px;
}
}

`;