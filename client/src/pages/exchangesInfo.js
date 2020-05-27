import React, { Component } from 'react';
import { InfoConsumer } from "../components/context";
import styled from 'styled-components';
import Reviews from "../components/Reviews";
import YouTube from "react-youtube";
import block from "../components/assets/img/exchanges.png"
import carda from "../components/assets/img/crypto-exchanges-cardano.png"

class ExchangesE extends Component {
    render() {




        return (
            <div>
                {/* // <React.Fragment> */}
                <HeaderDetails className="container-fluid align-items-center pt-3">
                    <h1 className="display-2 text-center  font-weight-bold"> exchanges</h1>
                    {/* <h4 className="display-5">dadasd</h4>
                    <p>hellou</p> */}
                      <div className="container mt-2">
                        <div className="row justify-content-center">
                            <div className="col-2">
                            <a  href="/cardano">
                            <i id="left" class="fas fa-arrow-left"> </i> </a>
                                </div>
                                <div className="col-2">
                                    <a href="/wallets">
                            <i id="right" class="fas fa-arrow-right"></i></a>
                                </div>
                                </div>
                                </div>
                    <div className="container-fluid mt-3 pt-5">
                        <div className="row">

                            <div id="cont" className="card container col-10 col-lg-10 mx-auto mt-1 pt-2 mb-1 p-1">

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

                                        <p id="bi">binance  <a href="https://www.binance.com/en/register?ref=16336880 " target="_blank" rel="noopener noreferrer nofollow" class="exchange-button__a">
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

            </div>
            // </React.Fragment>
        );

    }
}




export default ExchangesE;


const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: 100%;
text-transform: uppercase;
color: var(--mainWhite);
text-align: center;
padding-left:12px;

h1 {
    padding-top: 10%;
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
img{
    height:100%;
}
#bi{
    margin-top: -10px;
    padding-top: 25px;
    margin-left: -91px;
}
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
    margin-top:25px;
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
.exchange-button__content {
    background-color: #126bff;
    display: block;
    border-radius: 50px;
    padding: 16px 25px 16px;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .04em;
    transition: background-color .1s ease-out;
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
#ex{
    margin-top:20px;
    margin-right:-115px;
    width:474px;
    height:526px;
    padding-left:0px;

    
   
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
    margin-top:-80px;
    padding-left: -16px;
    margin-left: 413px;
    position:fixed;
}
#left{
    font-size:45px;
    margin-left:-450px;
    margin-top:-80px;
    padding-left:12px;
    position:fixed;
}

.nav-item {
    height: 18.75rem;
}

@media(max-width: 760px) {
    h1,h3,h4{
        color:var(--mainDark)
    }
    h1{
        padding-top: 86px;
        margin-bottom: -24px;
    font-size: 48px;
    padding-top: 86px;
    }
    #ex{
        margin-left: -1px;
    margin-right: -50px;
    margin-top: -12px;
    width: 283px;
    height: 250px;
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
`;