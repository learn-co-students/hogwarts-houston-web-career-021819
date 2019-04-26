import React from 'react'

export default class PigCard extends React.Component {

    state = {
        selected: false,
        greased: this.props.pig.greased,
        visible: true
    }

    changeTheState = () => {
        console.log(this.state.greased)
        this.setState({ selected: !this.state.selected })
        if (this.state.greased === true) {
            this.setState({ greased: "oh yeah I'm a greasy little piggy"})
        }
        else if (this.state.greased === false) {
            this.setState({ greased: "nope, I'm a squeaky clean piggy"})
        }
    }

    invisibilityCloak = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    showMeTheTails = () => {
        if (this.state.selected === true){
            return(
            <div>
                <li>Specialty: {this.props.pig.specialty}</li>
                <li>Greased: {this.state.greased}</li>
                <li>Weight: {this.props.pig.weight} tons</li>
                <li>Rank: {this.props.pig["highest medal achieved"]}</li>
            </div>
            )
        }
        
    }


    render() {
        console.log(this.state.visible)
        return(
            <div className="ui eight wide column">
                { this.state.visible ?   
                    <div className = {this.props.pig.name}>
                        <img src={this.props.pig.image} /><br/>
                        {this.props.pig.name}<br/>
                        
                        {this.showMeTheTails()}
                        <button onClick={this.changeTheState}>Piggy Deets</button>
                </div>  : null }
                <button onClick={this.invisibilityCloak}> {this.state.visible ? "Hide this pink plunderer" : "Show me the pink oinker" } </button>
            </div>
        )

    }
}