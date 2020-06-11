import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios";

class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            success: false,
            error: false,
            warn: false,
            warnEmail: false
        }
    }


    handleInputChange(e) {
        e.preventDefault();

        const name = e.target.name;
        const value = e.target.value;

        this.setState({ ...this.state, [name]: value });
        console.log(this.state)
    }

    handleFormSubmit(e) {
        e.preventDefault();

        if (!this.state.name || !this.state.email || !this.state.message) {
            return this.warn();
        }

        if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
            return this.warnEmail();
        }

        axios.post("/api/contact", this.state)
            .then(res => {
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                    success: true,
                    error: false
                })
                setTimeout(() => {
                    this.setState({ ...this.state, success: false })
                }, 3000)
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                    success: false,
                    error: true
                })
                setTimeout(() => {
                    this.setState({ ...this.state, error: false })
                }, 3000)
            })
    }

    warn() {
        this.setState({ ...this.state, warn: true })

        setTimeout(() => {
            this.setState({ ...this.state, warn: false })
        }, 3000)
    }

    warnEmail() {
        this.setState({ ...this.state, warnEmail: true })

        setTimeout(() => {
            this.setState({ ...this.state, warnEmail: false })
        }, 3000)
    }

    render() {
        return (
            <section className="my- pt-5 py-5">
                <div className="container pt-5">
                    {this.state.warnEmail ? <div class="alert alert-warning" role="alert">Please provide a valid email address.</div> : ""}
                    {this.state.warn ? <div class="alert alert-warning" role="alert">Please fill out all of the fields.</div> : ""}
                    {this.state.success ? <div class="alert alert-success" role="alert">Thank you for contacting us!</div> : ""}
                    {this.state.error ? <div class="alert alert-danger" role="alert">Something went wrong. We did not receive your contact!</div> : ""}
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1xEIVsbCJYkK9JTgTX1xmZRW8J_PTFg4M"
                                style={{
                                    border: "0",
                                    width: "100%",
                                    height: "315px",
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
                                <textarea onChange={(e) => this.handleInputChange(e)} name="message" className="form-control" cols="30" rows="3" placeholder="Type your message here..." value={this.state.message}></textarea>
                                <input type="submit" value="Submit" className="btn contact-btn" onClick={(e) => this.handleFormSubmit(e)} />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts;