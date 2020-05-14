import React, { Component } from 'react';
import { InfoConsumer } from "../components/context";
import Info from "../components/info";
import plutus from "../components/assets/img/plutus-header.jpg"
import { Link } from 'react-router-dom';
import marlowe from "../components/assets/img/marlowe-header.jpg"
import bitcoin from "../components/assets/img/bitcoinA.jpeg"
import ada from "../components/assets/img/AdaA.png"
import cardano from "../components/assets/img/cardanoC.jpg"
import exchanges from "../components/assets/img/cryptoex.jpeg"
import wallets from "../components/assets/img/wallet1.png"
import staking from "../components/assets/img/blockchain.png"
import treasury from "../components/assets/img/treasury1.png"



class Home extends Component {
    render() {
        return (

            <div className="container">
                <div className="row mt-5">
                    {/* <InfoConsumer>
                        {value => {
                            return value.info.map(item => {
                                return <Info key={item.id} item={item} />
                            })
                        }}
                    </InfoConsumer> */}
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={bitcoin} alt='Bitcoin' className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title text-uppercase">Bitcoin</h3>
                                {/* <h5 className="card-title">lalal</h5> */}
                                <p className="card-text">Emerged after the 2008 financial crash. It has proven to it's skeptics not only to be a secure public Ledger but to be the best-performing asset in the last Decade. Being up as much as 9.000.000% </p>

                                <Link  
                                to="/bitcoin"
                                className="btn btn-outline-primary text-uppercase"
                                >
                                More Info
                                </Link>

                               
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={ada} alt='ADA' className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title text-uppercase">ADA</h3>
                                {/* <h5 className="card-title">lalal</h5> */}
                                <p className="card-text">Named after Ada Lovelace the famous mathematician and writer. ADA is a deflationary digital currency as it has a fixed supply. ADA is provably secure, smart money that is powering the Cardano Blockchain. </p>

                                <Link  
                                to="/ada"
                                className="btn btn-outline-primary text-uppercase"
                                >
                                More Info
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={cardano} alt='Cardano' className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title text-uppercase">CARDANO</h3>
                                {/* <h5 className="card-title">lalal</h5> */}
                                <p className="card-text">The first Blockchain protocol evolved out of scientific philosophy and a research-first approach. Cardano is a decentralized social-economic system, build by a large team of expert researchers and engineers from IOHK. </p>

                                <Link  
                                to="/cardano"
                                className="btn btn-outline-primary text-uppercase"
                                >
                                More Info
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={exchanges} alt='Exchanges' className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title text-uppercase">EXCHANGES</h3>
                                {/* <h5 className="card-title">lalal</h5> */}
                                <p className="card-text">Learn where to Buy, Sell and Trade your Favorite Cryptocurrency </p>


                                <Link  
                                to="/exchanges"
                                className="btn btn-outline-primary text-uppercase"
                                >
                                More Info
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={wallets} alt='Plutus' className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title text-uppercase">WALLETS</h3>
                                {/* <h5 className="card-title">lalal</h5> */}
                                <p className="card-text">Keep your Coins off Exchanges. Learn to use and secure your coins! </p>


                                <Link  
                                to="/wallets"
                                className="btn btn-outline-primary text-uppercase"
                                >
                                More Info
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={staking} alt='Plutus' className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title text-uppercase">TRY STAKING</h3>
                                {/* <h5 className="card-title">lalal</h5> */}
                                <p className="card-text">Now that you understand what a Cryptocurrency is, you can start learning how to Stake and create a passive income! </p>


                                <Link  
                                to="/staking"
                                className="btn btn-outline-primary text-uppercase"
                                >
                                More Info
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={treasury} alt='Treasury' className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title text-uppercase">TREASURY</h3>
                                {/* <h5 className="card-title">lalal</h5> */}
                                <p className="card-text">The fundamental purpose of the Cardano Treasury is to resolve the funding sustainability issue for long-term cryptocurrency development and maintenance. In Cardano's Treasury the voting power is proportional to the corresponding stake. Voting does not require identity. The system collects funding via three sources: minting new ADA, fees from staking rewards, and donations.</p>


                                <Link  
                                to="/treasury"
                                className="btn btn-outline-primary text-uppercase"
                                >
                                More Info
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={marlowe} alt='Plutus' className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title text-uppercase">Marlowe</h3>
                                {/* <h5 className="card-title">lalal</h5> */}
                                <p className="card-text">Is a domain-specific language (DSL) which is designed to be usable by someone who is expert in a particular field: in the case of Marlowe, financial contracts, rather than requiring programming skills to use it. Using a DSL has many advantages beyond its use by non-programmers </p>


                                <a className="btn btn-outline-primary text-uppercase" target="_blank" rel="noopener noreferrer" href="https://iohk.io/en/blog/posts/2018/12/11/marlowe-financial-contracts-on-blockchain/">More Info</a>
                                {/* <div className="btn btn-outline-primary text-uppercase">Plutus Playground</div> */}
                                <br></br>
                                {/* <p className="card-text">Learn Plutus for free un Udemy </p> */}
                                <a className="btn btn-outline-primary mt-1 text-uppercase" target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/marlowe-programming-language/">Learn Marlowe for free </a>

                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={plutus} alt='Plutus' className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title text-uppercase">PLUTUS</h3>
                                {/* <h5 className="card-title">lalal</h5> */}
                                <p className="card-text">Plutus is a pure functional programming language used for writing smart contracts for the Cardano blockchain. The syntax is fairly Haskell-like, but unlike Haskell, the language is eagerly evaluated. You can try out Plutus online, with no need to download or install anything, via: </p>


                                <a className="btn btn-outline-primary text-uppercase" target="_blank" rel="noopener noreferrer" href="https://prod.playground.plutus.iohkdev.io/">Plutus Playground</a>
                                {/* <div className="btn btn-outline-primary text-uppercase">Plutus Playground</div> */}
                                <br></br>
                                {/* <p className="card-text">Learn Plutus for free un Udemy </p> */}
                                <a className="btn btn-outline-primary mt-1 text-uppercase" target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/plutus-reliable-smart-contracts/">Learn plutus for free </a>

                            </div>
                        </div>
                    </div>
                    {/* <div className="col-10 col-lg-4 mx-auto mb-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={treasury1} alt='Plutus' className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title text-uppercase">TREASURY</h3>
                                {/* <h5 className="card-title">lalal</h5> */}
                                {/* <p className="card-text">The fundamental purpose of the Cardano Treasury is to "resolve the funding sustainability issue for long-term cryptocurrency development and maintenance." In Cardano's Treasury “the voting power is proportional to the corresponding stake." Voting does not require identity. The system collects funding via three sources: minting new ADA, fees from staking rewards, and donations. </p>

                                <a className="btn btn-outline-primary text-uppercase" target="_blank" rel="noopener noreferrer" href="https://prod.playground.plutus.iohkdev.io/">Plutus Playground</a>
                                <br></br>
                                 <a className="btn btn-outline-primary mt-1 text-uppercase" target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/plutus-reliable-smart-contracts/">Learn plutus for free </a>

                            </div>
                        </div> */}
                    {/* </div> */} 

                </div>
            </div>



        )
    }
}

export default Home;
