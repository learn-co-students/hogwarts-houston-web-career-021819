import React from 'react'

export default function PigDetails(props){
        return(
            <div className="ui card">
                <div className="meta">
                    <strong class="date">
                        {props['highest medal achieved']} medal winner<br></br><br></br>
                    </strong>
                </div>
                <div className="description" style={{'text-align': 'left'}}>
                        Weight: {props.weight}<br></br>
                        Special skill: {props.specialty}<br></br>
                        {props.greased ? " Greased and ready for the frier! :-)" : " Unprepared and in the fridge :-("}<br></br><br></br>
                </div>
            </div>
        )
    }