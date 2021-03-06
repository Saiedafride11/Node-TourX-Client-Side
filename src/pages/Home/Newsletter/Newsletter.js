import React from 'react';
import './Newsletter.css';
import Fade from 'react-reveal/Fade';

const Newsletter = () => {
    return (
        <div style={{backgroundColor: "#E5F1FB", padding: "40px 0px", width: "100%"}}>
            <div className="container">
                <div className="newsletter">
                    <Fade left>
                        <div className="d-flex align-items-center">
                            <div>
                                <h2 style={{color: '#ff7f47'}}>Grab Our Newsletter</h2>
                                <p className="text-muted">To receive latest offers and discounts from the shop.</p>
                                <form className="row g-3">
                                    <div className="col-auto">
                                        <input type="email" className="form-control" placeholder="Enter Your Email Address"/>
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn mb-3 text-white" style={{backgroundColor: '#ff7f47'}}>Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="newsletter-img">
                            <img src="https://i.ibb.co/6vwm8g6/newsletter.png" alt=""/>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;