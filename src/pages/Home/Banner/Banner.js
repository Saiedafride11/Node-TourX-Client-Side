import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/K6w8g3M/banner3.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Amazing Tour <br/> In Indonesia</h1>
                        <h3>7 Days, 8 Night Tour</h3>
                        <div className="banner-btn">
                            <a href="/tours" className="btn-common">All Package</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/BfZ3Jz2/banner2.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Amazing Tour <br/> In Hampshire </h1>
                        <h3>7 Days, 8 Night Tour</h3>
                        <div className="banner-btn">
                            <a href="/tours" className="btn-common">All Package</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/pWxqk9Z/banner.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Amazing Tour <br/> In madagascar</h1>
                        <h3>7 Days, 8 Night Tour</h3>
                        <div className="banner-btn">
                            <a href="/tours" className="btn-common">All Package</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;