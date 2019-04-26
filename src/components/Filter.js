import React from 'react'


export const Filter = (props) => {

    return (
        <div>
            <select onChange= {(e) => props.chooseFilter(e.target.value)}>
                <option value="name">name</option>
                <option value="weight">Weight</option>
                <option value="greased">Greased?</option>
            </select>
        </div>
    )
}