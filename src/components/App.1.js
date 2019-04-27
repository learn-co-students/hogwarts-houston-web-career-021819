import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hog from './Hog';

class App extends Component {
  //setup initial state
  state = {
     hogs: [],
     filteredHogs: [], //create this because we need to destructively change the hogs array,so we better create a new category for it so it doesn't affect others
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


filterByGrease = () =>{
  this.setState({
   filteredHogs:this.state.hogs.filter(hog=>hog.greased == true)
  })
}


 sortByWeight = () => {
   let sortedHogs = this.state.hogs.sort((a,b) =>{return a.weight - b.weight})
    this.setState({
     hogs: sortedHogs,
     filteredHogs: [] //remember to always change it back otherwise it will always show the filtered hogs in render tenary part
   })
 }

 sortByName = () =>{
  let sortedHogs = this.state.hogs.sort((a,b) =>{
    if(a.name > b.name){
      return -1      //alphabetically, return -1 is ascending, default no sorting is 0
    }})
    console.log(sortedHogs)
   this.setState({
      hogs: sortedHogs,
      filteredHogs: []
    })
 }
 
 change = (e) =>{
   if(e.target.value == "Filter by Grease"){
     this.filterByGrease()
   }else if(e.target.value == "Sort by Weight"){
     this.sortByWeight()
   }else if(e.target.value == "Sort by Name")
     this.sortByName()
 }

 hide = () =>{
   console.log('you reached me')
  
 }

  render() {
    return (
      <div className = "App" className = "ui grid container">
          < Nav/>
          <select onChange = {(e)=>this.change(e)}>
            <option> Choose your filter </option>
            <option value = "Filter by Grease"> Filter by Grease </option>
            <option value = "Sort by Weight">Sort by Weight</option>
            <option value = "Sort by Name">Sort by Name</option>
          </select>
          {this.state.filteredHogs.length > 0 
          ? this.state.filteredHogs.map(hog=><Hog {...hog} updateId = {this.updateId} renderThisHog = {this.renderThisHog} showDetails={hog.id == this.state.selectedId} /> )
          :this.state.hogs.map(hog=><Hog {...hog} lastClicked={this.state.lastClicked} updateId = {this.updateId} renderThisHog = {this.renderThisHog} showDetails={hog.id == this.state.selectedId} /> )
          }
         
      
      </div>
    )
  }
} 

export default App;
