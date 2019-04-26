import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import {HogContainer} from './HogContainer';
import {Filter} from './Filter'

class App extends Component {

  state = {
    hogs: []
  }

  filterByName = () => {
    let filteredHogs = this.state.hogs.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
    this.setState({hogs: filteredHogs})
  }

  filterByWeight = () => {
    let filteredHogs = this.state.hogs.sort((a,b) => a.weight > b.weight ? 1 : -1)
    this.setState({hogs: filteredHogs})
  }

  filterByGreased = () => {
    let filteredHogs = this.state.hogs.sort((a,b) => a.greased > b.greased ? 1 : -1)
    this.setState({hogs: filteredHogs})
  }

  fetchHogs = () => {
    fetch('http://localhost:3001/hogs')
    .then((res) => {
      return res.json()
    })
    .then((hogs) => {
      console.log(hogs)
      this.setState({
        hogs: hogs
      })
    })
  }

  chooseFilter = (value) => {
    if(value === 'name') 
      this.filterByName()
    if(value === 'weight')
      this.filterByWeight()
    if(value === 'greased')
      this.filterByGreased()
    
  }

  render() {
    return (
      <div className="App" >
        < Nav />
        < Filter chooseFilter={this.chooseFilter} filterByName={this.filterByName} filterByGreased={this.filterByGreased} filterByWeight={this.filterByWeight}/>
        <br/>
        < HogContainer hogs={this.state.hogs} />
      </div>
    )
  }

  componentDidMount() {
    this.fetchHogs()
    this.filterByName()
  }
  
}

export default App;
