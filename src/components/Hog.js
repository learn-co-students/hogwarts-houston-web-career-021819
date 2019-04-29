import React from 'react'

export default class Hog extends React.Component {

    state = {
        asImg: true,
        hidden: false
    }




    render(){
        return (
            <div className="ui eight wide column" hidden={this.state.hidden} onClick={() => this.setState({asImg: !this.state.asImg})}>
            {
                (this.state.asImg) ?
                <div>
                    <h1>{this.props.name}</h1>
                    <img src={this.props.image} alt=""></img>
                    <br/>
                </div> :
                <div>
                    <h1>{this.props.name}</h1>
                    <h2>Specialty: {this.props.specialty}</h2>
                    <h2>Weight: {this.props.weight}</h2>
                    <h2>Highest Medal Achieved: {this.props['highest medal achieved']}</h2>
                    <button type="checkbox" onClick={()=> this.setState({hidden: true})}>delete</button>
                </div>
            }
            </div>
        )
    }
}