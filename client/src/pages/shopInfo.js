import React, { Component } from 'react';
import styled from 'styled-components';
import { Link }  from 'react-router-dom';

class Shop extends Component {
            
                render() {

                    return (
                        <div>
                            <HeaderDetails className="container-fluid ">
                            <div className="container">
                            <div className="row">
                                {/* <h3>use your rewards in an easy way</h3>
                                <h1>hi</h1> */}
                                <h1 className="display-1  font-weight-bold">Staking will be available August 18 on the mainnet.</h1>
                                <body>
  <script src="https://js.crypto.com/sdk?publishable-key=pk_test_FSAXMkr7WB1ERTdvvwkUjCtY"></script>
</body>

                            </div>
                            </div>






                            </HeaderDetails>
                           

                        </div>




                    );



                }
}
export default Shop ;

const HeaderDetails = styled.header` 
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: 100vh;
h1{
    color: var(--mainDark);
 font-size:35px;
 padding-top:80px;
 padding-left: 136px;
}
h3{
    color: var(--mainDark);
 font-size:35px;
}

`;