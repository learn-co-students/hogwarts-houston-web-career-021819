import React, { Component } from 'react';
// import HogDetail from './HogDetail';
export default class HogCard extends Component {

    state = {
        clicked: false,
        hided: false
    }

    handleClick =()=> {
        //change the state to the opposite
        this.setState({
            clicked:!this.state.clicked
        })
    }

    handleHided =()=> {
        this.setState({
            hided: !this.state.hided
        })
    }
    
    hideCard=(id)=>{
        let pigTile = document.getElementById(id)
        pigTile.style.display = "none"
    }

    render(){
        return (
            < div className = "pigTile" id={this.props.id}>
                < div className = {this.state.clicked ? "maxPigTile ui eight wide column" : "minPigTile ui eight wide column"} onClick={this.handleClick}>
                    <h3>{this.props.name}</h3>
                    <img alt = {this.props.name} width = "175px" height = "175px" src = {this.props.image}></img>
                    <p className = "subtleText" style = {{display: this.state.clicked ? 'block' : 'none'}}>Specialty: {this.props.specialty}</p>
                    <p className = "subtleText" style = {{display: this.state.clicked ? 'block' : 'none'}}>Weight: {this.props.weight}</p>
                    <p className = "subtleText" style = {{display: this.state.clicked ? 'block' : 'none'}}>Highest Medal Achieved: {this.props["highest medal achieved"]}</p>
                    <p className = "subtleText" style = {{display: this.state.clicked ? 'block' : 'none'}}> Greased: {this.props.greased ? "Yes" : "No"} </p>
                    <p> <button className = "ui blue button" onClick={(id)=>{this.hideCard(this.props.id)}}> Hide </button></p>
                </div>
            </div>
        )
    }
}