import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'

class App extends Component {


  render() {

    return (
      <div className="App">
          < Nav />
          < HogList />
      </div>
    )
  }




}

export default App;
