import React, { Component } from 'react';
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/animate.css'
import './assets/css/price-range.css'
import './assets/css/responsive.css'
import './assets/css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Route from './routes'


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
        <Route />
        <Footer />
      </div>
    )
  }
}

export default App;
