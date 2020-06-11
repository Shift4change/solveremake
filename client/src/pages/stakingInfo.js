import React, { Component } from 'react';
import { InfoConsumer } from "../components/context";
import styled from 'styled-components';
import Reviews from "../components/Reviews";
import YouTube from "react-youtube"
import { Link } from 'react-router-dom';
class StakingS extends Component {
    render() {




        return (
            <div>
                {/* // <React.Fragment> */}
                <HeaderDetails className="container-fluid align-items-center">
                    <h1 className="display-1 font-weight-bold">Staking will be available August 18 on the mainnet.</h1>
                    {/* <h4 className="display-5">dadasd</h4> */}
                    {/* <p>hellou</p> */}
                    {/* Social Icons */}
                    <div className="container mt-2">
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <Link to="/wallets">
                                    <i id="left" class="fas fa-arrow-left"> </i> </Link>
                            </div>

                            {/* <div className="col-2">
                                <Link to="/exchanges">
                                    <i id="right" class="fas fa-arrow-right"></i></Link>
                            </div> */}
                        </div>
                    </div>
                    <br></br>
                    <div className="container-fluid">
                        <h3>Our two staking pools  are running and earning rewards on the Testnet.</h3>
                        <div id="spr" className="row">

                            <br></br>
                            <div className="col-6">
                                <div id="be" class="exchange-button">

                                    <p id="be">Luna pool <a href="https://luna-pool.io/ " target="_blank" rel="noopener noreferrer nofollow" class="exchange-button__a">
                                        <span class="exchange-button__content">
                                            ticker: Luna

                                                <path fill="none" stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" d="M1.5 12 7 6.5 1.5 1">
                                            </path>

                                        </span>
                                    </a></p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div id="be" class="exchange-button">

                                    <p id="be">Solve pool <a href="https://solvestaking.com/ " target="_blank" rel="noopener noreferrer nofollow" class="exchange-button__a">
                                        <span class="exchange-button__content">
                                            ticker: Try1

                                                <path fill="none" stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" d="M1.5 12 7 6.5 1.5 1">
                                            </path>

                                        </span>
                                    </a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div className="container  mb-5  ">
                        <div className="row justify-content-center">
                            {/* <div className="col-2">
                                <i className="fab fa-facebook"></i>

                            </div> */}
                            <div className="col-2 ">
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
                    <br></br>

                </HeaderDetails>
                {/* <br></br>
                <br></br> */}
                {/* <br></br>
                <br></br>
                <br></br> */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {/* {Navlinks} */}
                <div id="con5" className="container mt-5">
                    <ul id="ana" className="nav nav-tabs">
                        {/* About Place Link */}
                        <li className="nav-item">
                            <a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">About</a>
                        </li>
                        {/* Reviews link */}
                        {/* <li className="nav-item">
                            <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">Reviews</a>
                        </li> */}
                        {/* Map link */}
                        <li className="nav-item">
                            <a href="#map" className="nav-link" role="tab" data-toggle="tab">videos</a>
                        </li>
                    </ul>
                    {/* Tab Pane */}
                    <div className="tab-content ">
                        {/* About Place Tab */}
                        <div id="aboutPlace" className="tab-pane in active text-center mb-5" role="tabpanel">
                            <h2>Welcome to the new financial operation system. Taking control over your funds and earning rewards by staking is only one of the many benefits of a decentralized system like Cardano.  </h2>
                            {/* <p></p>
                            <img src="" alt="" className="img-thumbnail img-fluid" /> */}
                        </div>
                        {/* reviews */}
                        {/* <div className="tab-pane" id="reviews" role="tabpanel">
                            <Reviews />
                        </div> */}
                        {/* Map */}
                        <div className="tab-pane" id="map" role="tabpanel">
                        <div className="container">
                                <div className="row">
                                    <div className="container mb-5 col-10 col-lg-10 d-flex justify-content-center mt-5">
                                        <iframe width="575" height="315"
                                            src="https://www.youtube.com/embed/tWdyDcBuC2Y" allowfullscreen="true">
                                        </iframe>
                                    </div>
                                    {/* <div className="container col-10 col-lg-6 d-flex justify-content-center mt-5">
                                        <iframe width="575" height="315"
                                            src="https://www.youtube.com/embed/9jg8lsreIQ8" allowfullscreen="true">
                                        </iframe>
                                    </div> */}
                                </div>
                            </div>
                            {/* <iframe src="" style={{ border: '0', height: '28.125rem', width: "100%", frameborder: '0' }}></iframe> */}
                        </div>
                    </div>
                </div>
            </div>
            // </React.Fragment>
        );

    }
}




export default StakingS;


const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: 100vh;
text-transform: uppercase;
color: var(--mainWhite);
text-align: center;

h1 {
    padding-top: 10%;
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
#left{
   position:static;
}

/* @media(max-width: 760px) {
    h1,h4{
        color:var(--mainWhite)
    }
    h1{
        padding-top: 102px;
    font-size: 58px;
    }
}
@media(width: 1440px){

#left {
    font-size: 45px;
    margin-left: -607px;
    margin-right: 264px;
    margin-top: -138px;
    padding-left: 12px;
    position: static;
}
}
@media(width: 1366px){
    #left {
    font-size: 45px;
    margin-left: -607px;
    margin-right: 264px;
    margin-top: -138px;
    padding-left: 12px;
    position: static;
}
} */

@media only screen and (min-device-width : 320px) and (max-device-width : 760px) {
    
    h1 {
    font-size: 25px;
    padding-top: 28%;
    padding-bottom: 47px;
}
h2 {
    font-size: 1rem;
}


#left {
    font-size: 45px;
    margin-left: -141px;
    margin-right: 164px;
    margin-top: -32px;
    padding-left: 12px;
    position: static;
    margin-bottom: 0px;
}
    .col-2{
    margin-bottom:20px;
}
h3{
    padding-top: 29px;
    font-size:20px;
    color:black;
    font-family: Helvetica Neue,Arial,"Noto Sans",sans-serif ;
    padding-bottom:30px;
    margin-bottom:20px;
}
.container {
    margin-top: 20px;
    margin-bottom: -40px;
}


.exchange-button__content {
    background-color: #126bff;
    display: block;
    border-radius: 14px;
    padding: 19px 6px 9px;
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    margin-right: -14px;
    margin-bottom: -21px;
    
}

}
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    #left {
        font-size: 45px;
    margin-left: -425px;
    margin-right: 264px;
    margin-top: -32px;
    padding-left: 12px;
    position: static;
    margin-bottom: 87px;
}
.exchange-button__content {
    background-color: #126bff;
    display: block;
    border-radius: 28px;
    padding: 23px 12px 12px;
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    margin-right: 20px;
    margin-bottom:-23px;
}
h1 {font-size:40px;
   
    padding-bottom:25px;
}
.col-2 {
    margin-bottom: -69px;
    margin-top: -22px;
}
h3{
    padding-top: 29px;
    font-size:20px;
    color:black;
    font-family: Helvetica Neue,Arial,"Noto Sans",sans-serif ;
    padding-bottom:30px;
    margin-bottom:20px;
}
.container {
    margin-top: -10px;
    margin-bottom: -40px;
}


}
@media only screen  and (min-width : 1224px) {
    #left {
    font-size: 45px;
    margin-left: -607px;
    margin-right: 264px;
    margin-top: 20px;
    padding-left: 12px;
    position: static;
    margin-bottom: 50px;
}

.exchange-button__content {
    background-color: #126bff;
    display: block;
    border-radius: 28px;
    padding: 23px 12px 12px;
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    margin-right: 20px;
    margin-bottom:3px;
}
h1 {font-size:40px;
    padding-top: 7%;
    padding-bottom:25px;
}
.col-2{
    margin-bottom:-60px;
}
h3{
    color:black;
    font-family: Helvetica Neue,Arial,"Noto Sans",sans-serif ;
    padding-bottom:45px;
}


}
@media only screen  and (min-width : 1824px) {
    #left {
    font-size: 45px;
    margin-left: -890px;
    margin-right: 428px;
    margin-top: -138px;
    padding-left: 12px;
    position: static;
}
.exchange-button__content {
    background-color: #126bff;
    display: block;
    border-radius: 28px;
    padding: 23px 12px 12px;
    color: #fff;
    font-size: 60px;
    font-weight: 700;
    margin-right: -103px;
    margin-bottom:3px;
    margin-top:20px
}
h1 {
    padding-top: 6%;
    padding-bottom: 62px;
}
h3{
    color:black;
    font-family: Helvetica Neue,Arial,"Noto Sans",sans-serif ;
    padding-bottom:55px;
    padding-top:35px
}
#spr{
    padding-right:100px;
}


}
`;