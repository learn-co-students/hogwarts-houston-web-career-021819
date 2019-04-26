import React from "react";
import PigCard from "./PigCard";

export default class PigIndex extends React.Component {
  render() {
    return (
      <div className="ui link cards">
        {this.props.pigs.map(pig => {
          return (
            <PigCard {...pig} key={pig.id} handleClick={this.handleClick} />
          );
        })}
      </div>
    );
  }
}
