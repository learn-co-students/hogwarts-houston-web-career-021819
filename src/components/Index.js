import React from 'react'
import PigCard from './PigCard';

export default class Index extends React.Component {


    state = {
        pigs: [],
        checkGreased: false,
        checkName: false,
        checkWeight: false
    }

    componentDidMount = () => {
        fetch("http://localhost:3001/hogs")
            .then(response => response.json())
            .then(pigData => {
                this.setState({
                    pigs: pigData
                })
            })
    }

    sortByName = () => {
        let pigs = this.state.pigs.map(pig => {
            return(pig.name)
        })
        console.log(pigs)
        pigs.sort(function(a,b){
            return( a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
        })
    }
  


    render() {
        // console.log(this.state.pigs)
        return(
            <div>
                <div className='app'>
                    {/* Greased <input type='checkbox' ></input><br/>
                    Weight <input type='checkbox'></input><br/>
                    Name <input type='checkbox'></input><br/> */}
                </div>
                <div className='ui grid container'>
                    {this.state.pigs.map( pig => <PigCard pig={pig} />)}
                </div>
            </div>
        )

    }
}