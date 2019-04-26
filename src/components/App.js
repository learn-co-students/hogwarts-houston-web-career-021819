import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'

class App extends Component {
  state = {
    hogs:[]
  }

  componentDidMount(){
    let hogURL = 'http://localhost:3001/hogs'

    fetch(hogURL)
    .then(res => res.json())
    .then(hogs =>  
      this.setState({
        hogs: hogs
      })
    )
  }

  render() {
    return (
      
      <div className="App">
          < Nav />
          < HogContainer allHogs = {this.state.hogs} />
      </div>
    )
  }
}

export default App;
