import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import PigIndex from "./PigIndex";

class App extends Component {
  state = { pigs: [], sorting: "none" };

  componentDidMount() {
    fetch("http://localhost:3001/hogs")
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ pigs: data });
      });
  }

  onSortChange = e => {
    this.setState({ sorting: e.target.value });
  };

  onSortSubmit = e => {
    if (this.state.sorting === "none") {
      return;
    } else if (this.state.sorting === "name ascending") {
      this.setState({
        pigs: this.state.pigs.sort(function(a, b) {
          let nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA < nameB)
            //sort string ascending
            return -1;
          if (nameA > nameB) return 1;
          return 0;
        })
      });
    } else if (this.state.sorting === "weight ascending") {
      this.setState({
        pigs: this.state.pigs.sort(function(a, b) {
          return a.weight - b.weight;
        })
      });
    } else if (this.state.sorting === "name descending") {
      this.setState({
        pigs: this.state.pigs.sort(function(a, b) {
          let nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA > nameB)
            //sort string ascending
            return -1;
          if (nameA < nameB) return 1;
          return 0;
        })
      });
    } else if (this.state.sorting === "weight descending") {
      this.setState({
        pigs: this.state.pigs.sort(function(a, b) {
          return b.weight - a.weight;
        })
      });
    }
  };

  onFilter = () => {
    console.log("filter button");
    this.setState({
      pigs: this.state.pigs.filter(pig => {
        if (!pig.greased) {
          return true;
        }
      })
    });
  };

  render() {
    return (
      <div className="App">
        <Nav
          onSortChange={this.onSortChange}
          onSortSubmit={this.onSortSubmit}
          onFilter={this.onFilter}
        />
        <PigIndex pigs={this.state.pigs} />
      </div>
    );
  }
}

export default App;
