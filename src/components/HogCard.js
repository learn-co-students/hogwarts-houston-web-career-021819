import React from 'react'


class HogCard extends React.Component {

    state = {
        hidden: false
    }

    showMoreInfo = () => {
        if(this.props.id === this.props.showOne){
            return(
                <div className='description '>
                    <p>Specialty: {this.props.specialty}</p>
                    <p>Greased: {`${this.props.greased}`}</p>
                    <p>Weight: {this.props.weight}</p>
                    <p>Highest Medal Achieved: {this.props["highest medal achieved"]}</p>
                </div>
            )
        }
    }

    onHiddenClick = () => {
        console.log('made it')
		this.setState({
            hidden: !this.state.hidden
		})
	}

   

	render(){ 
        let style = {
            display: this.state.hidden ? 'none' : 'block'
        }
		return (
			<div className="card" onClick={() => this.props.onHogClick(this.props.id)} style={style}>
                <img src={this.props.image} alt={this.props.name} />
                <h1>{this.props.name}</h1>
                {this.showMoreInfo()}
                <button onClick={this.onHiddenClick}>Hide Hog</button>
			</div>
		)
	}
}

export default HogCard