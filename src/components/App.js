import React, { Component } from 'react';
//import logo from '../shared/images/logo.svg';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import './App.css';
import Helmet from "react-helmet";

/* <img src={logo} className="App-logo" alt="logo" /> */
class App extends Component {
  render() {
    return (
      <>
      <Helmet>
        <title>InfPerson Information</title>
        <meta name="title" content="Person Information" />
        <meta name="description" content="Thisrecipe talks about React Helmet" />
        <script src="./js/jquery.easing.min.js"></script>
      </Helmet>
      <Header />
      <Home />
      <Footer />   
      </>
    );
  }
}

export default App;
