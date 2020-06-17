import React from 'react';
import styled from 'styled-components'

function Footer() {
    return (

        <FooterContainer className="main-footer  align-items-center ">
            <div className="footer-middle">
                <div className="container-fluid align-items-center">
                    <div className="row">
                        {/* Column 1    */}
                        <div className="col-sm-6 col-10 col-lg-3 ">
                            <h4><a href="/contacts">Contact Us</a></h4>
                            <ul className="list-unstyled align-items-center ">
                                <li>University of Pennsylvania</li>
                                <li>Address: 3401 Grays Ferry Ave, Philadelphia, PA 19146</li>
                                <li>Phone: +1 267-534-5393</li>

                            </ul>
                        </div>
                        {/* Column 2    */}
                        <div className=" col-sm-6 col-10  col-lg-3">
                            <h4><a className=" btn-outline ml-4" target="_blank" rel="noopener noreferrer" href="https://cardano.org">Cardano.org</a> </h4>
                            <ul className="list-unstyled">
                                <li><a id="iohk" className="btn btn-outline text-uppercase  " target="_blank" rel="noopener noreferrer" href="https://iohk.io/en/team/">IOHK</a></li>
                                <li><a className="btn btn-outline text-uppercase ml-5" target="_blank" rel="noopener noreferrer" href="https://emurgo.io/en/about-us#our-team">Emurgo</a></li>
                                <li><a className="btn btn-outline text-uppercase mr-3" target="_blank" rel="noopener noreferrer" href="https://cardanofoundation.org/">Cardano Foundation</a></li>
                                {/* <li><a href="/">Lorem Lorem</a></li> */}
                            </ul>
                        </div>
                        {/* Column 3    */}
                        <div className="col-sm-6 col-10 col-lg-3">
                            <h4 className="ml-5">Tools</h4>
                            <ul className="list-unstyled">
                                <li><a className="btn text-uppercase ml-4" target="_blank" rel="noopener noreferrer" href="https://pooltool.io/">Pool Tool</a></li>


                                <li><a className="btn btn-outline text-uppercase " target="_blank" rel="noopener noreferrer" href="https://guides.poapool.com/">Stakepool guides</a></li>
                                <li><a id="blockx" className="btn text-uppercase " target="_blank" rel="noopener noreferrer" href="https://explorer.cardano.org/">Block/Address Explorer</a></li>
                                {/* <li><a href="/">Lorem Lorem</a></li> */}
                            </ul>
                        </div>{/* Column 4    */}
                        <div className="col-sm-6 col-10 col-lg-3">
                            <h4 className="ml-5">Wallets</h4>
                            <ul className="list-unstyled">
                                <li><a className="btn text-uppercase" target="_blank" rel="noopener noreferrer" href="https://daedaluswallet.io/">Daedalus Wallet</a></li>
                                <li><a className="btn btn-outline text-uppercase ml-3" target="_blank" rel="noopener noreferrer" href="https://yoroi-wallet.com/">Yoroi Wallet</a></li>
                                <li><a className="btn btn-outline text-uppercase" target="_blank" rel="noopener noreferrer" href="https://www.ledger.com/">Hardware Wallet</a></li>
                                {/* <li><a href="/">Lorem Lorem</a></li> */}
                            </ul>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Solve staking App - All Rights Reserved
                    </p>
                    </div>
                </div>
            </div>
        </FooterContainer>

    );

}
export default Footer


const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

#iohk {
   
    margin-left:60px;
}

#cardano {
    color: var(--mainWhite)
}
.row{
padding-left:30px;
}
.footer-bottom {
    padding-top: 1rem;
    padding-bottom: .5rem;
}
ul li a{
    color: var(--mainGrey);
    
}
ul li a:hover {
    color: var(--mainLightGrey)
}#blockx{
    margin-left: -20px;
}

@media(max-width: 760px) {
    .row{
        padding-left:60px;
    }
}

`;
