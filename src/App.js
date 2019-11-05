import React, { Component } from 'react';
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/animate.css'
import './assets/css/price-range.css'
import './assets/css/main.css'
import './assets/css/responsive.css'
import Header from './components/Header'
import Banners from './components/Banners'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Banners />
      </div>
    )
  }
}

export default App;
