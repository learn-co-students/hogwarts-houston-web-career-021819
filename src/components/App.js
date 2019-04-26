import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Index from "./Index"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <Index/>
      </div>
    )
  }
}

export default App;
