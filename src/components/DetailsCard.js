import React from 'react'

const DetailsCard = (props) => (
  <div className="ui centered card" onClick={props.handleClick}>
    <div className="image">
      <img src={props.image} alt=""/>
    </div>
    <div className="content">
      <div className="header">{props.name}</div>
      <div className="meta">Specialty: {props.specialty} </div>
    </div>
    <div className="extra content">
      <span className="left floated">
        <li className="left aligned">{props.weight} stone</li>
        <li className="left aligned">{props.greased ? "So fresh and so clean" : "I'm a dirty boy"}</li>
        <li className="left aligned">{props["highest medal achieved"]}</li>
      </span>
      <span className="right floated">
        <br />
        <br />
        <button onClick={props.hide}>Hide</button>
      </span>
    </div>
  </div>
)

export default DetailsCard
