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

  //Josh's suggestion from this and below
  dropDownMenu = event => {
    this.setState({
      selectedValue: event.target.value
    });
  };

  render() {
    // console.log(this.state.hogs.filter(hog => { return hog.greased }));
    let filteredHogs = this.state.hogs;
    if (this.state.selectedValue == "name") {
      let allHogs = [...this.state.hogs];
      filteredHogs = allHogs.sort((a, b) => (a.name > b.name ? 1 : -1));
    }

    if (this.state.selectedValue == "weight") {
      let allHogs = [...this.state.hogs];
      filteredHogs = allHogs.sort((a, b) => (a.weight > b.weight ? 1 : -1));
    }

    if (this.state.selectedValue == "greased") {
      let allHogs = [...this.state.hogs];
      filteredHogs = allHogs.filter(hog => hog.greased);
    }

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
            {filteredHogs.map(hog => (
              <HogCard hog={hog} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
