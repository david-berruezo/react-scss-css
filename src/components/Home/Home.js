import React, { Component } from 'react';
// iamges
import hero from './../../../public/images/hero-2.jpg';
import about_leverage from './../../../public/images/about-leverage.jpg';

class Home extends Component {
    render() {
      return (
        <>
        <section id="slider" className="hero p-0">
            <div className="swiper-container no-slider featured animation slider-h-100">
                <div className="swiper-wrapper">
                    <div className="swiper-slide slide-center">
                        <img src={hero} data-aos="zoom-out-up" data-aos-delay="800" className="hero-image" alt="Hero Image" />
                        <div className="slide-content row" data-mask-768="70">
                            <div className="col-12 d-flex inner">
                                <div className="left align-self-center text-center text-md-left">
                                    <h1 data-aos="zoom-out-up" data-aos-delay="400" className="title effect-static-text">Hello Guys,<br /> I'm David</h1>
                                    <p data-aos="zoom-out-up" data-aos-delay="800" className="description">I work as React Developer.</p>
                                    <a href="#contact" data-aos="zoom-out-up" data-aos-delay="1200" className="smooth-anchor ml-auto mr-auto ml-md-0 mt-4 btn primary-button"><i className="icon-cup"></i>GET STARTED</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
        <section id="video" className="section-1 highlights image-left">
            <div className="container">
                <div className="row">
                    <div className="gallery col-12 col-md-6">
                        <a data-poster="assets/images/about-leverage.jpg" href="https://www.youtube.com/watch?v=7e90gBu4pas">
                            <i className="play-video icon-control-play"></i>
                            <div className="mask-radius"></div>
                            <img src={about_leverage} className="fit-image" alt="Institutional" />
                        </a>
                    </div>
                    <div className="col-12 col-md-6 pl-md-5 align-self-center text-center text-md-left">
                        <div className="row intro">
                            <div className="col-12 p-0">
                                <h2 className="featured alt">Institutional</h2>
                                <p>Get to know a little of our history and the road we traveled that took us to the level we are today.</p>
                            </div>
                        </div>
                        <div className="row items">
                            <div className="col-12 p-0">
                                <div className="row item">
                                    <div className="col-12 col-md-2 align-self-center">
                                        <i className="icon icon-trophy"></i>
                                    </div>
                                    <div className="col-12 col-md-9 align-self-center">
                                        <h4>Tradition</h4>
                                        <p>We are excellence in developing web solutions for companies.</p>
                                    </div>  
                                </div>
                                <div className="row item">
                                    <div className="col-12 col-md-2 align-self-center">
                                        <i className="icon icon-diamond"></i>
                                    </div>
                                    <div className="col-12 col-md-9 align-self-center">
                                        <h4>Innovation</h4>
                                        <p>We seek to build something that changes people's lives.</p>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="features" className="section-2 odd offers featured">
            <div className="container">
                <div className="row justify-content-center text-center items">
                    <div className="col-12 col-md-6 col-lg-4 item">
                        <div className="card no-hover">
                            <i className="icon icon-globe"></i>
                            <h4>Website Pro</h4>
                            <p>We build professional responsive websites optimized for the most popular search engines.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 item">
                        <div className="card no-hover">
                            <i className="icon icon-basket"></i>
                            <h4>E-Commerce</h4>
                            <p>Increase your sales with an incredible online store, full of features and functionality.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 item">
                        <div className="card no-hover">
                            <i className="icon icon-screen-smartphone"></i>
                            <h4>Mobile Apps</h4>
                            <p>Follow the global trend and create your revolutionary mobile app built with the best technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="funfacts" className="section-3 odd counter funfacts">
            <div className="container">
                <div className="row text-center intro">
                    <div className="col-12">
                        <h2>Fun Facts</h2>
                        <p className="text-max-800">Over the years we have done many things that we are proud of. This motivates us to continue looking for new challenges in order to improve our services.</p>
                    </div>
                </div>
                <div data-aos-id="counter" data-aos="fade-up" data-aos-delay="200" className="row justify-content-center text-center items">
                    <div className="col-12 col-md-6 col-lg-3 item">
                        <div data-percent="342" className="radial">
                            <span></span>
                        </div>
                        <h4>Great Projects</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 item">
                        <div data-percent="128" className="radial">
                            <span></span>
                        </div>
                        <h4>Innovations</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 item">
                        <div data-percent="745" className="radial">
                            <span></span>
                        </div>
                        <h4>Cups of Coffee</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 item">
                        <div data-percent="691" className="radial">
                            <span></span>
                        </div>
                        <h4>Happy Customers</h4>
                    </div>
                </div>
            </div>
        </section>
        <section id="subscribe" className="section-5 subscribe">
            <div className="container smaller">
                <div className="row text-center intro">
                    <div className="col-12">
                        <h2>Newsletter</h2>
                        <p className="text-max-800">Subscribe to our newsletter and follow our content closely. Receive news based on what has to do with you. We promise not to send promotions you don't like.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-0">
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" className="section-6 odd form featured">
            <div className="container">
            </div>
        </section>   
        </>    
      );
    }
}        

export default Home 