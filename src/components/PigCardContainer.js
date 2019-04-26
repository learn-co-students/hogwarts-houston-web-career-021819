import React from 'react'
import PigCard from './PigCard'
import DetailsCard from './DetailsCard'

export default class PigCardContainer extends React.Component {
  state = {
    details: false,
    hidden: false
  }

  handleClick = () => {
    this.setState({
      details: !this.state.details
    })
  }

  hide = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render() {
    return (
      <div className="ui four wide column">
        { !this.state.hidden
          ? (
            this.state.details
            ? <DetailsCard {...this.props} handleClick={this.handleClick} hide={this.hide} />
            : <PigCard {...this.props} handleClick={this.handleClick} hide={this.hide} />
          )
          : null
        }
      </div>
    )
  }
}
