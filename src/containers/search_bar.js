import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {

	constructor(props){
		super(props);

		this.state = {term : ''};

		//binding context
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit  = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({term: event.target.value})
	}
	
	onFormSubmit(event){
		event.preventDefault();

		//we need to fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});

	}

	render(){
		return (
			<form onSubmit= {this.onFormSubmit} className="input-group">
				<input 
					placeholder="get a five day forcast in your favourite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/> 
				<span className="input-group-btn">
      				<button type="submit" className = "btn btn-secondary"> Submit </button>
      			</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}

//passing the "null" basically menas thanks, but we don't need the state
export default connect(null, mapDispatchToProps)(SearchBar)