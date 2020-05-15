import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios";

 class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
   

    handleInputChange(e) {
        e.preventDefault();

        const name = e.target.name;
        const value = e.target.value;

        this.setState({...this.state, [name]: value});
        console.log(this.state)
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log("handleformsubmit")

        axios.get("/contacts")
        .then(res => console.log(res))
        .catch(err => console.log(err))
        // axios.post("/api/contact", {name: "patrick", age: "10"})
        // .then(res => {
        //     console.log(res)
        // })
        // .catch(err => console.log("New Error", err))

    }

    render() {
        return (
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>
                
                <div className="row">
                    <div className="col-md-7">
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=11aAMX1OvVQ1Aq7bW0DiOpCmMJf01NDAH"
                    style={{
                        border:"0",
                        width:"100%",
                        height:"315px",
                        frameborder: "0"
                    }} allowFullscreen></iframe>
                    </div>
                    <div className="col-md-5">
                        <h4><strong>Contact Us</strong></h4>
                    <form>
                        <div className="form-group">
                            <input onChange={(e) => this.handleInputChange(e)} type="text" name="name" className="form-control" placeholder="Name" value={this.state.name} />
                        </div>
                        <div className="form-group">
                            <input onChange={(e) => this.handleInputChange(e)} type="email" name="email" className="form-control" placeholder="Email" value={this.state.email} />
                        </div>
                        {/* <div className="form-group">
                            <input type="tel" name="phone" className="form-control" placeholder="Phone" />
                        </div> */}
                       <textarea onChange={(e) => this.handleInputChange(e)} name="message" className="form-control" cols="30" rows="3" placeholder="Type your message here..." value={this.state.message}></textarea>
                       <input type="submit" value="Send" onClick={(e) => this.handleFormSubmit(e)} />
                       {/* <Link className="btn btn-outline-primary text-uppercase mt-1">
                           <i className="fa fa-paper-plane-o" aria-hidden="true" />&nbsp;Send
                           <i className="fab fa-telegram-plane" aria-hidden="true" />&nbsp;Send
                       </Link> */}
                    </form>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default Contacts;