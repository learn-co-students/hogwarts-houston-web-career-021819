import piggy from '../porco.png'
import React from 'react'

class Hog extends React.Component {

  
  render(){
      return(
          <div id = {this.props.id} className = "pigTile" style = {{display: 'block'}} >
              <div className = "image">
                 <img onClick = {()=> {this.props.updateId(this.props.id)}} src = {this.props.image}/>
              </div>
              <div className = "content">
                  <a class="header">Name: {this.props.name}</a>
                  <div className = "description">
                          {this.props.showDetails ?
                              <div>
                                    <p>Specialty: {this.props.specialty}</p>
                                    <p>Weight: {this.props.weight}</p>
                                    <p>Highest Medal Achieved: {this.props.highestMedalAchieved}</p>
                                    <p>Greased: {this.props.greased? 'Yes' : 'No'}</p>
                              </div> : null }
                  </div>
              </div>
                <button onClick = {()=>this.props.hide(this.props.id)}>Hide me</button>
             
          </div>
      )
  }
}

export default Hog