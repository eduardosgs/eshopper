import React, { Component } from 'react';
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/animate.css'
import './assets/css/price-range.css'
import './assets/css/main.css'
import './assets/css/responsive.css'
import Header from './components/Header'
import Banners from './components/Banners'
import Container from './components/Container'
import Footer from './components/Footer'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Banners />
        <Container />
        <Footer />
      </div>
    )
  }
}

export default App;
