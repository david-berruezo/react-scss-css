import React, { Component } from 'react';
// Aquí importamos el archivo Home.css

// Vendor Stylesheet
import './css/bootstrap.min.css';
import './css/slider.min.css';
import './css/main.css';
//import './css/icons.min.css';
import './css/animation.min.css';
import './css/gallery.min.css';
import './css/cookie-notice.min.css';
import './css/default.css';
import './css/theme-blue.css';
//import './css/Home.css';

// scripts
// import $ from "jquery";


class Header extends Component {
  render() {
    return (
      <header id="header">
        <nav data-aos="zoom-out" data-aos-delay="800" className="navbar navbar-expand">
        <div className="container header">
          <a className="navbar-brand" href="/">
            Leverage<i className="version-number">2.1</i>
          </a>
          <div className="ml-auto"></div>
          <ul className="navbar-nav items">
              <li className="nav-item dropdown">
                  <a href="#header" className="nav-link smooth-anchor">Home <i className="icon-arrow-down"></i></a>
                  <ul className="dropdown-menu">
                      <li className="nav-item dropdown">
                          <a className="nav-link" href="#">Multi-Page <i className="icon-arrow-right"></i></a>
                          <ul className="dropdown-menu">
                              <li className="nav-item dropdown">
                                  <a className="nav-link" href="#">Agency <i className="icon-arrow-right"></i></a>
                                  <ul className="dropdown-menu">
                                      <li className="nav-item"><a href="home-1.html" className="nav-link">Demo 1</a></li>
                                      <li className="nav-item"><a href="home-2.html" className="nav-link">Demo 2</a></li>
                                      <li className="nav-item"><a href="home-3.html" className="nav-link">Demo 3</a></li>
                                      <li className="nav-item"><a href="home-4.html" className="nav-link">Demo 4</a></li>
                                      <li className="nav-item"><a href="home-5.html" className="nav-link">Demo 5</a></li>
                                      <li className="nav-item"><a href="home-6.html" className="nav-link">Demo 6</a></li>
                                      <li className="nav-item"><a href="home-7.html" className="nav-link">Demo 7</a></li>
                                      <li className="nav-item"><a href="home-8.html" className="nav-link">Demo 8</a></li>
                                      <li className="nav-item"><a href="home-9.html" className="nav-link">Demo 9</a></li>
                                      <li className="nav-item"><a href="home-10.html" className="nav-link">Demo 10</a></li>
                                  </ul>
                              </li>
                              <li className="nav-item dropdown">
                                  <a className="nav-link" href="#">Portfolio <i className="icon-arrow-right"></i></a>
                                  <ul className="dropdown-menu">
                                      <li className="nav-item"><a href="home-11.html" className="nav-link">Demo 11</a></li>
                                      <li className="nav-item"><a href="home-12.html" className="nav-link">Demo 12</a></li>
                                      <li className="nav-item"><a href="home-13.html" className="nav-link">Demo 13</a></li>
                                      <li className="nav-item"><a href="home-14.html" className="nav-link">Demo 14</a></li>
                                      <li className="nav-item"><a href="home-15.html" className="nav-link">Demo 15</a></li>
                                      <li className="nav-item"><a href="home-16.html" className="nav-link">Demo 16</a></li>
                                      <li className="nav-item"><a href="home-17.html" className="nav-link">Demo 17</a></li>
                                      <li className="nav-item"><a href="home-18.html" className="nav-link">Demo 18</a></li>
                                      <li className="nav-item"><a href="home-19.html" className="nav-link">Demo 19</a></li>
                                      <li className="nav-item"><a href="home-20.html" className="nav-link">Demo 20</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link" href="#">One-Page <i className="icon-arrow-right"></i></a>
                          <ul className="dropdown-menu">
                              <li className="nav-item dropdown">
                                  <a className="nav-link" href="#">Agency <i className="icon-arrow-right"></i></a>
                                  <ul className="dropdown-menu">
                                      <li className="nav-item"><a href="home-1-one-page.html" className="nav-link">Demo 1</a></li>
                                      <li className="nav-item"><a href="home-2-one-page.html" className="nav-link">Demo 2</a></li>
                                      <li className="nav-item"><a href="home-3-one-page.html" className="nav-link">Demo 3</a></li>
                                      <li className="nav-item"><a href="home-4-one-page.html" className="nav-link">Demo 4</a></li>
                                      <li className="nav-item"><a href="home-5-one-page.html" className="nav-link">Demo 5</a></li>
                                      <li className="nav-item"><a href="home-6-one-page.html" className="nav-link">Demo 6</a></li>
                                      <li className="nav-item"><a href="home-7-one-page.html" className="nav-link">Demo 7</a></li>
                                      <li className="nav-item"><a href="home-8-one-page.html" className="nav-link">Demo 8</a></li>
                                      <li className="nav-item"><a href="home-9-one-page.html" className="nav-link">Demo 9</a></li>
                                      <li className="nav-item"><a href="home-10-one-page.html" className="nav-link">Demo 10</a></li>
                                  </ul>
                              </li>
                              <li className="nav-item dropdown">
                                  <a className="nav-link" href="#">Portfolio <i className="icon-arrow-right"></i></a>
                                  <ul className="dropdown-menu">
                                      <li className="nav-item"><a href="home-11-one-page.html" className="nav-link">Demo 11</a></li>
                                      <li className="nav-item"><a href="home-12-one-page.html" className="nav-link">Demo 12</a></li>
                                      <li className="nav-item"><a href="home-13-one-page.html" className="nav-link">Demo 13</a></li>
                                      <li className="nav-item"><a href="home-14-one-page.html" className="nav-link">Demo 14</a></li>
                                      <li className="nav-item"><a href="home-15-one-page.html" className="nav-link">Demo 15</a></li>
                                      <li className="nav-item"><a href="home-16-one-page.html" className="nav-link">Demo 16</a></li>
                                      <li className="nav-item"><a href="home-17-one-page.html" className="nav-link">Demo 17</a></li>
                                      <li className="nav-item"><a href="home-18-one-page.html" className="nav-link">Demo 18</a></li>
                                      <li className="nav-item"><a href="home-19-one-page.html" className="nav-link">Demo 19</a></li>
                                      <li className="nav-item"><a href="home-20-one-page.html" className="nav-link">Demo 20</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </li>
              <li className="nav-item">
                  <a href="#video" className="nav-link smooth-anchor">About</a>
              </li>
              <li className="nav-item">
                  <a href="#features" className="nav-link smooth-anchor">Services</a>
              </li>
              <li className="nav-item">
                  <a href="#funfacts" className="nav-link smooth-anchor">Fun Facts</a>
              </li>
          </ul>
          <ul className="navbar-nav icons">
              <li className="nav-item">
                  <a href="#" className="nav-link" data-toggle="modal" data-target="#search">
                      <i className="icon-magnifier"></i>
                  </a>
              </li>
              <li className="nav-item social">
                  <a href="#" className="nav-link"><i className="icon-social-twitter"></i></a>
              </li>
              <li className="nav-item social">
                  <a href="#" className="nav-link"><i className="icon-social-instagram"></i></a>
              </li>
          </ul>
          <ul className="navbar-nav toggle">
              <li className="nav-item">
                  <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                      <i className="icon-menu m-0"></i>
                  </a>
              </li>
          </ul>
          <ul className="navbar-nav action">
              <li className="nav-item ml-3">
                  <a href="#contact" className="btn ml-lg-auto primary-button smooth-anchor"><i className="icon-speech"></i>CONTACT US</a>
              </li>
          </ul>
      </div>
      </nav>
    </header>
    );
  }
}

export default Header;
