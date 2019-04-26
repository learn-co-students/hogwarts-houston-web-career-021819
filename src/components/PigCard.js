import React from 'react'

const PigCard = ({image, name, handleClick, hide}) => (
  <div className="ui centered card" onClick={handleClick}>
    <div className="image">
      <img src={image} alt=""/>
    </div>
    <div className="content">
      <div className="header">{name}</div>
    </div>
    <div className="extra content">
      <span className="right floated">
        <button onClick={hide}>Hide</button>
      </span>
    </div>
  </div>
)

export default PigCard
