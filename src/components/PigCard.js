import React, {Component} from 'react'
import PigDetails from './PigDetails'

export default class PigCard extends Component {

    state = {
        detailsShowing: false,
        display: 'inline',
        pigGifs: null
    }

    handleDivClick(){
        return this.setState({detailsShowing: !this.state.detailsShowing})
    }

    handleButtonClick(){
        return this.setState(this.state.display === 'inline' ? {display: 'none'}: {display: 'inline'})
    }

    fetchPigGifs(){
        fetch(`http://api.giphy.com/v1/gifs/search?q=pigs&api_key=9mupaNXiOn308v0yk6Etlits8S4jBsSl`)
        .then(res => res.json())
        .then(returnedData => {
            this.setState({
                pigGifs: returnedData.data
            })
        })
      }

    componentDidMount(){
        this.fetchPigGifs()
    }

    imageSource(){
        return this.props.image
        // return this.state.pigGifs ? this.state.pigGifs[Math.floor(Math.random() * 25)].images.original.url : this.props.image
    }

    render(){
            return(
                <div className="card" style={{display: this.state.display}}>
                    <div className="image">
                        <img src={this.imageSource()} alt={this.props.name} onClick={()=>this.handleDivClick()}></img>
                    </div>
                    <div className="content">
                        <a className="header">{this.props.name}</a>
                        {this.state.detailsShowing ? <PigDetails {...this.props} /> : null}
                    </div>
                    <div className="extra content">
                        <button className="mini ui pink button" onClick={()=>this.handleButtonClick()}>Hide Hog</button>
                    </div>
                </div>
            )
    }
}