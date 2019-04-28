import React from 'react'
import HogCard from './HogCard'
import { Dropdown } from 'semantic-ui-react'

class HogList extends React.Component {

	constructor(){
		super()
		this.hogFetch()
	}

	state = {
		hogs: [],
		showOne: null,
		filterType: ''
	}

	onHogClick = (id) => {
		if(id == this.state.showOne){
			this.setState({
				...this.state,
				showOne: null
			})
		}
		else{
			this.setState({
				...this.state,
				showOne: id
			})
		}
	}

	onDropdownChange = (e, dropdown) => {
		console.log(dropdown.value)
		this.setState({
			...this.state,
			filterType: dropdown.value
		})
	}

	hogFetch = () => {
		fetch(`http://localhost:3001/hogs`)
			.then((res) => {
				return res.json()
			})
			.then((hogsData) => {
				this.setState({
					hogs: hogsData
				})
			})
	}


	thisFilter = () => {
        if(this.state.filterType === ''){
            return(
                <div className="ui cards">
					{this.state.hogs.map(hog => <HogCard {...hog} onHogClick={this.onHogClick} showOne={this.state.showOne} />)}
                </div>
            )
			}else if(this.state.filterType === 'name'){
            return(
                <div className="ui cards">
					{this.state.hogs.map(hog => <HogCard {...hog} onHogClick={this.onHogClick} showOne={this.state.showOne} />).sort((a, b) => (a.props.name > b.props.name) ? 1 : -1)}
                </div>
            )
        }else if(this.state.filterType === 'weight'){
            return(
                <div className="ui cards">
					{this.state.hogs.map(hog => <HogCard {...hog} onHogClick={this.onHogClick} showOne={this.state.showOne} />).sort((a, b) => (a.props.weight > b.props.weight) ? -1 : 1)}
                </div>
            )
        }else if(this.state.filterType === 'greased'){
            return(
                <div className="ui cards">
					{this.state.hogs.map(hog => <HogCard {...hog} onHogClick={this.onHogClick} showOne={this.state.showOne} />).filter(hog => hog.props.greased)}
                </div>
            )
        }
	}
	
	options = [
		{ key: 1, text: 'Name', value: 'name' },
		{ key: 2, text: 'Weight', value: 'weight' },
		{ key: 3, text: 'Greased', value: 'greased' },
	  ]


	render(){
		
		return (
			<div>
				<Dropdown clearable options={this.options} selection  onChange={this.onDropdownChange} />
				{this.thisFilter()}
			</div>
		)
	}
}

export default HogList
