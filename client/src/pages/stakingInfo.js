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
                    <h1 className="display-1 font-weight-bold">Staking will be available August 18</h1>
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
                    <h3>Our two staking pools for the Testnet are running and earning rewards.</h3>
                        <div className="row">
                           
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

                    <div className="container  mt-5">
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
<br></br>

                </HeaderDetails>

                {/* {Navlinks} */}
                <div className="container mt-2">
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
                            <h2 className="mb-3">Welcome to the new financial operation system. Taking control over your funds and earning rewards by staking is only one of the many benefits of a decentralized system like Cardano.  </h2>
                            <p></p>
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

@media only screen and (min-device-width : 320px) and (max-device-width : 768px) {

}
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {

}
@media only screen  and (min-width : 1224px) {

}
@media only screen  and (min-width : 1824px) {
    #left {
    font-size: 45px;
    margin-left: -607px;
    margin-right: 264px;
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
}
h1 {
    padding-top: 7%;
    padding-bottom:25px;
}
h3{
    color:black;
    font-family: Helvetica Neue,Arial,"Noto Sans",sans-serif ;
    padding-bottom:45px;
}
}
`;