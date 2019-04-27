import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hog from './Hog';

class App extends Component {
  //setup initial state
  state = {
     hogs: [],
     selectedId: null
  }


  //fetch the hogs
  componentDidMount(){
     fetch('http://localhost:3001/hogs')
     .then(response =>{return response.json()})
     .then(hogsData =>{
      //this.resetHogs(hogsData)//save all the hogs result for filter functions
        this.setState({
           hogs:hogsData
         })
     })
  }

 updateId = (id)=>{
    this.setState({
      ...this.state,
      selectedId:id
    })
 }
 
 change = (e) =>{
    this.setState({
      sort: e.target.value
    })
 }


 hogs(){
  let hogs = this.state.hogs
  if(this.state.sort == 'byGreased'){
    hogs = this.state.hogs.filter(hog=>hog.greased == true)
  }
  if(this.state.sort == 'byWeight'){
    hogs = this.state.hogs.sort((a,b) =>{return a.weight - b.weight})
  }
  if(this.state.sort == 'byName'){
    hogs = this.state.hogs.sort((a,b) =>{
      if(a.name > b.name){
        return -1      //alphabetically, return -1 is ascending, default no sorting is 0
      }})
  }
  return hogs
 }


 hide = (id) =>{
   let hogTile = document.getElementById(`${id}`)
   hogTile.style.display = "none"
   console.log(hogTile)
 }

  render() {
    let hogs = this.hogs()
    return (
      <div className = "App" >
          < Nav/>
          <div>
            <select className = "select" onChange = {(e)=>this.change(e)}>
                <option> Choose your filter </option>
                <option value = "byGreased"> Filter by Grease </option>
                <option value = "byWeight">Sort by Weight</option>
                <option value = "byName">Sort by Name</option>
           </select>
          </div>
          {hogs.length > 0 
          ? hogs.map(hog=><Hog {...hog} updateId = {this.updateId} renderThisHog = {this.renderThisHog} showDetails={hog.id == this.state.selectedId} hide = {this.hide}/> )
          :hogs.map(hog=><Hog {...hog} lastClicked={this.state.lastClicked} updateId = {this.updateId} renderThisHog = {this.renderThisHog} showDetails={hog.id == this.state.selectedId} hide = {this.hide}/> )
          }
      </div>
    )
  }
} 

export default App;
 