import React from "react";

export default class PigCard extends React.Component {
  state = { details: false, hidden: false };

  handleDetails = () => {
    if (this.state.details) {
      this.setState({ details: false });
    } else {
      this.setState({ details: true });
    }
  };

  hideHog = () => {
    if (this.state.hidden) {
      this.setState({ hidden: false });
    } else {
      this.setState({ hidden: true });
    }
  };

  render() {
    return this.state.hidden ? (
      <div className="centered ui pink card">
        <div className="ui bottom attached button" onClick={this.hideHog}>
          Show {this.props.name}
        </div>
      </div>
    ) : (
      <div
        className="centered ui pink card"
        style={{ display: this.state.hidden ? "none" : "" }}
      >
        <div className="blurring dimmable image">
          <div
            className={
              this.state.details
                ? "ui dimmer transition visible active"
                : "ui dimmer"
            }
          >
            <div className="content">
              <div className="center">
                <div className="content">
                  <h2 className="header">{this.props.name}</h2>
                  <div className="description">
                    <h4>
                      Highest Medal Achieved:{" "}
                      {this.props["highest medal achieved"]}
                    </h4>
                    <div>Specialty: {this.props.specialty}</div>
                    <br />
                    <div>Weight: {this.props.weight} tons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={this.props.image} alt="pigpic" />
        </div>
        <div className="content">
          <div className="header">{this.props.name}</div>
        </div>
        <div className="ui bottom attached button" onClick={this.handleDetails}>
          {this.state.details ? "Hide Details" : "Show Details"}
        </div>
        <div className="ui bottom attached button" onClick={this.hideHog}>
          Hide Hog
        </div>
      </div>
    );
  }
}
