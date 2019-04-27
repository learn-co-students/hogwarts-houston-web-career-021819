import React from 'react';

export default class HogCard extends React.Component {
    state = {
        visible: false
    }

    showDetails = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render(){

        return(
            <div className="pigTile">
                <h3>{this.props.hog.name}</h3>
                <img src={this.props.hog.image} />
                <br/>
                <button className="ui red basic button" onClick={this.showDetails}>Show Details</button>
                {this.state.visible ?
                <ul>
                    <li>Speciality: {this.props.hog.specialty}</li>
                    <li>Greased: {this.props.hog.greased ? "Yes" : "No"}</li>
                    <li>Weight: {this.props.hog.weight}</li>
                    <li>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</li>
                </ul> : null }
            </div>
        )
    }
}