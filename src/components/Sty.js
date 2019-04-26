import React from 'react'
import SortBar from './SortBar'
import PigCardContainer from './PigCardContainer'

export default class Sty extends React.Component {

  state = {
    pigs: [],
    sort: "all",
    greasedCheck: false
  }

  handleChange = (e) => {
    e.persist()
    this.setState({
      sort: e.target.value
    })
  }

  handleCheck = () => {
    this.setState({
      greasedCheck: !this.state.greasedCheck
    })
  }

  sortPigs = () => {
    const pigs = [...this.state.pigs]
    if (this.state.sort === "name") {
      return pigs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    } else if (this.state.sort === "weight") {
      return pigs.sort((a,b) => (a.weight < b.weight) ? 1 : ((b.weight < a.weight) ? -1 : 0))
    } else {
      return pigs
    }
  }

  filterPigs = () => {
    const pigs = [...this.sortPigs()]
    if (this.state.greasedCheck) {
      return pigs.filter(pig => pig.greased)
    } else {
      return pigs
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/hogs')
    .then(res => res.json())
    .then(data => this.setState({pigs: data}))
  }

  render() {
    return (
      <div className="sty">
        < SortBar sort={this.state.sort} greasedCheck={this.state.greasedCheck} handleChange={this.handleChange} handleCheck={this.handleCheck}/>
        <br /><br /><br /><br />
        <div className="ui grid container">
          {this.filterPigs().map(pig => <PigCardContainer {...pig} key={pig.id}/>)}
        </div>
      </div>
    )
  }
}
