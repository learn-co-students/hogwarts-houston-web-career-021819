import React, {Component} from 'react'
import PigCard from './PigCard'

export default class PigContainer extends Component {

    state = {
        pigs: [],
        sortedPigs: [],
        filtered: false,
        nameSorted: false,
        weightSorted: false
      }

      fetchPigs(){
        fetch('http://localhost:3001/hogs')
          .then(res => res.json())
          .then(pigData => {
            this.setState({pigs: pigData})
          })
      }

    componentDidMount(){
      this.fetchPigs()
    }
    
    renderEachPig(){
        let pigsToMap1 = null
        this.state.nameSorted ? pigsToMap1 = this.state.pigs.slice().sort((a, b) => (a.name > b.name) ? 1 : -1) : pigsToMap1 = this.state.pigs.slice()
        let pigsToMap2 = null
        this.state.weightSorted ? pigsToMap2 = pigsToMap1.slice().sort((a, b) => (a.weight > b.weight) ? 1 : -1) : pigsToMap2 = pigsToMap1.slice()
        return pigsToMap2.map( pig => {
            if (!this.state.filtered || pig.greased){
                return <PigCard key={pig.id} {...pig} />
            }
        })
    }

    render () {
        return (
            <div>
                <h1 className="ui header">Tasty Pigs!</h1>
                <div className="ui form">
                    <div className="three fields">
                        <div className="field">
                            <div className="ui toggle checkbox">
                                <input type="checkbox" onClick={()=>this.setState({filtered: !this.state.filtered})}></input>
                                <label>Filter on greased</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui toggle checkbox">
                                <input type="checkbox" name="sort by name" onClick={()=>this.setState({nameSorted: !this.state.nameSorted})}></input>
                                <label>Sort by Name (A-Z)</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui toggle checkbox">
                                <input type="checkbox" name="sort by weight" onClick={()=>this.setState({weightSorted: !this.state.weightSorted})}></input>
                                <label>Sort by weight (low to high)</label>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="ui grid container">
                    <div className="ui link cards">
                        {this.renderEachPig()}
                    </div>
                </div>
            </div>
        )
    }

}