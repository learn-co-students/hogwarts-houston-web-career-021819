//  Normal card, just name
// return (
//   <div className="ui card" style={{display: this.state.hidden ? "none" : ""}} onClick={this.handleClick}>
//     <div className="image">
//       <img src={this.props.image} alt=""/>
//     </div>
//     <div className="content"  style={{backgroundColor: "blue"}}>
//       <div className="header">{this.props.name}</div>
//       {this.state.clicked ? this.details() : null}
//     </div>
//     <br/>
//     <button onClick={this.hide}>Hide</button>
//   </div>
// )

// Fade works, but style is bad
// return (
//   <div className="ui card" style={{display: this.state.hidden ? "none" : ""}} onClick={this.handleClick}>
//     <div className="image">
//       <img src={this.props.image} alt=""/>
//     </div>
//     <div className="ui fade reveal">
//       <div className="visible content"  style={{backgroundColor: "blue"}}>
//         <div className="header">{this.props.name}</div>
//         {this.state.clicked ? this.details() : null}
//       </div>
//       <div className="hidden content">
//         <div className="header">{this.props.weight}</div>
//         {this.state.clicked ? this.details() : null}
//       </div>
//     </div>
//     <br/>
//     <button onClick={this.hide}>Hide</button>
//   </div>
// )
