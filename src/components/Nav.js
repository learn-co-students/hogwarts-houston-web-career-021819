import piggy from "../porco.png";
import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div className="navWrapper">
        <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>
        <br />
        <br />
        Sort Hogs By:{" "}
        <select name="type" id="type" onChange={this.props.onSortChange}>
          <option value="none">N/A</option>
          <option value="name ascending">Name Ascending</option>
          <option value="name descending">Name Descending</option>
          <option value="weight ascending">Weight Ascending</option>
          <option value="weight descending">Weight Descending</option>
        </select>{" "}
        <button onClick={this.props.onSortSubmit}>Sort Hogs</button>
        <br />
        <br />
        <button onClick={this.props.onFilter}>Filter Out Greased Hogs</button>
      </div>
    );
  }
}

export default Nav;
