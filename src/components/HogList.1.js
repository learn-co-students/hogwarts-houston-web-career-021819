import React from "react";
import HogCard from "./HogCard";

export default class HogList extends React.Component {
  state = {
    hogs: []
  };

  componentDidMount() {
    fetch(`http://localhost:3001/hogs`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({
          hogs: data
        });
      });
  }

  dropDownMenu = event => {
    if (event.target.value == "name") {
      //this.sortedNames = () => {
      let allHogs = [...this.state.hogs];
      let sortedPigNames = allHogs.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.setState({
        hogs: sortedPigNames
      });
      //  };
    } else if (event.target.value == "weight") {
      // this.sortedWeight = () => {
      let allHogs = [...this.state.hogs];
      let sortedPigWeights = allHogs.sort((a, b) =>
        a.weight > b.weight ? 1 : -1
      );
      this.setState({
        hogs: sortedPigWeights
      });
      //};
    } else if (event.target.value == "greased") {
      // this.isGreased = () => {
      let allHogs = [...this.state.hogs];
      let greasedHogs = allHogs.filter(hog => {
        return hog.greased;
      });
      this.setState({
        hogs: greasedHogs
      });
      //};
    }
  };

  render() {
    // console.log(this.state.hogs.filter(hog => { return hog.greased }));
    return (
      <div>
        <div className="dropdown">
          <select name="dropdown" onChange={this.dropDownMenu}>
            <option value="all">All</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
            <option value="greased">Greased</option>
          </select>
        </div>

        <div>
          <ul>
            {this.state.hogs.map(hog => (
              <HogCard hog={hog} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
