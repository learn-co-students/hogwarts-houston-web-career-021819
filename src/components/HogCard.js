import React, { Component } from 'react';
// import HogDetail from './HogDetail';
export default class HogCard extends Component {

    state = {
        clicked: false
    }

    handleClick =()=> {
        this.setState({
            clicked:true
        })
    }
    
    hideCard=()=>{
        let pigTile = document.querySelector('.pigTile');
        pigTile.remove()
    }

    render(){
        return (
            < div className = "pigTile" >
                < div className = {this.state.clicked ? "maxPigTile ui eight wide column" : "minPigTile ui eight wide column"} onClick={this.handleClick}>
                    <h3>{this.props.name}</h3>
                    <img alt = {this.props.name} width = "175px" height = "175px" src = {this.props.image}></img>
                    <p className = "subtleText" style = {{display: this.state.clicked ? 'block' : 'none'}}>Specialty: {this.props.specialty}</p>
                    <p className = "subtleText" style = {{display: this.state.clicked ? 'block' : 'none'}}>Weight: {this.props.weight}</p>
                    <p className = "subtleText" style = {{display: this.state.clicked ? 'block' : 'none'}}>Highest Medal Achieved: {this.props["highest medal achieved"]}</p>
                    <p className = "subtleText" style = {{display: this.state.clicked ? 'block' : 'none'}}> Greased: {this.props.greased ? "Yes" : "No"} </p>
                    <p> <button onClick={this.hideCard}> Hide </button></p>
                </div>
            </div>
        )
    }
}