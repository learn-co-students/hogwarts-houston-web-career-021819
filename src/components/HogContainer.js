import React from 'react'
import Hog from './Hog'


export const HogContainer = (props) => {

    const renderHogs = () => {
        return props.hogs.map(hog => (
            < Hog {...hog} />
        ))
      }

    return (
        <div className="ui grid container">
            {renderHogs()}
        </div>
    )
}