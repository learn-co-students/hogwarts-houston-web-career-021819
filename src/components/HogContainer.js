import React, { Component } from 'react';
import HogCard from './HogCard';


export default class HogContainer extends Component {

    state = {
        nameAZSorted: false,
        nameZASorted: false,
        weightBigToSmallSorted: false,
        weightSmallToBigSorted: false,
        showGreased: false
    }

    //get sorted arrays
    //PUT EVERYTHING IN A NEW ARRAY, THEN SORTED THEM
    sortedAZNames =()=>{
        return [ ...this.props.allHogs].sort((a, b) => (a.name > b.name) ? 1 : -1)
    }
    
    sortedZANames =()=>{
        return [...this.props.allHogs].sort((a, b) => (a.name < b.name) ? 1 : -1)
    }

    sortedBigToSmallWeight = () => {
        return [...this.props.allHogs].sort((a, b) => (b.weight - a.weight))
    }

    sortedSmallToBigWeight = ()=> {
        return [ ...this.props.allHogs].sort((a, b) => (a.weight - b.weight))
    }

    greasedPigs = ()=>{
        return [...this.props.allHogs].filter(hog => hog.greased)
    }

    render(){
        //get a copy of the old array
        let myHogs = this.props.allHogs.slice()
        //assign new sorted array to myHogs
        if (this.state.nameAZSorted) {
            myHogs = this.sortedAZNames()
        }
        if(this.state.nameZASorted){
            myHogs = this.sortedZANames()
        }
        if (this.state.weightBigToSmallSorted){
            myHogs = this.sortedBigToSmallWeight()
        }
        if (this.state.weightSmallToBigSorted){
            myHogs = this.sortedSmallToBigWeight()
        }
        if (this.state.showGreased){
            myHogs = this.greasedPigs()
        }
        console.log(myHogs)
        
        return (
            < div className = "indexWrapper ui grid container" >
                < div className = "filterWrapper" >

                    < button className = "ui red button" onClick = {() => 
                        this.setState({
                            nameAZSorted: true,
                            nameZASorted: false,
                            weightBigToSmallSorted: false,
                            weightSmallToBigSorted: false,
                            showGreased: false
                        })
                    }> Sort by Name (A-Z) < /button>


                    < button className = "ui yellow button" onClick = {
                            () =>
                        this.setState({ 
                            nameAZSorted: false,
                            nameZASorted: true,
                            weightBigToSmallSorted: false,
                            weightSmallToBigSorted: false,
                            showGreased: false
                        })
                    }> Sort by Name (Z-A) < /button>


                    < button className = "ui orange button" onClick = {
                            () =>
                        this.setState({
                            nameAZSorted: false,
                            nameZASorted: false,
                            weightBigToSmallSorted: true,
                            weightSmallToBigSorted: false,
                            showGreased: false
                        })
                    } > Sort by Weight(Big - Small) < /button>

                    < button className = "ui olive button" onClick = {
                            () =>
                        this.setState({
                            nameAZSorted: false,
                            nameZASorted: false,
                            weightBigToSmallSorted: false,
                            weightSmallToBigSorted: true,
                            showGreased: false
                        })
                    } > Sort by Weight(Small -  Big) < /button>

                    < button className = "ui green button"  onClick = {
                        () =>
                        this.setState({
                            nameAZSorted: false,
                            nameZASorted: false,
                            weightBigToSmallSorted: false,
                            weightSmallToBigSorted: false,
                            showGreased: true
                        })
                    } > Filter Greased Pigs < /button>

				</div>
                <ul>
                    {
                       myHogs.map(hog => (< HogCard {...hog} />))
                    }
                </ul>

            </div>
        )
    }
}