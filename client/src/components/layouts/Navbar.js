import React, { Component } from "react";
import home from "../assets/img/home.svg";
import logo from "../assets/img/logo3.png";
import shop from "../assets/img/monitor.svg"
// import alt from "../assets/img/nature.svg"
import { Link } from 'react-router-dom'
// import App from "../../App";
import "../../App.css";
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  handleInputChange(e) {
    e.preventDefault();
    const value = e.target.value;
    this.setState({
      search: value
    })
    console.log(this.state.search)
  }

  handleFormSubmit(e) {
    e.preventDefault();
    // window.location.href="/" + this.state.search;

  }

  render() {
    return (
      <nav id="navsol" className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand mx-5" href='#'><img src={logo} alt="logo" style={{ width: "98px" }} /> </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span id='nic' >
            <i className="navbar-toggler-icon" style={{ color: '#fff' }} />

          </span>

        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white text-uppercase ml-5" to="/">
                <img src={home} alt="home" style={{ width: "25px", marginTop: "-7px" }} /> Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase ml-5" to="/altmedia">Alt. Media
        </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase ml-5" to="/contacts"><img src={shop} alt="home" style={{ width: "25px", marginTop: "-7px" }} />Shop
        </Link>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0 nav-search">
            <input onChange={(e) => this.handleInputChange(e)} className="form-control mr-sm-2" type="search" name="search" placeholder="Search" aria-label="Search" value={this.state.search} />
            <Link className="nav-link text-white text-uppercase bg-primary nav-search-btn" to={"/" + this.state.search}>
              <button type="submit" className="btn btn-primary">Search</button>
            </Link>
            {/* <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"></button> */}
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;