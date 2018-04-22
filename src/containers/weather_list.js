import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';



class WeatherList extends Component{

	renderWeather(cityData) {
		const cityName = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp)
		console.log("Temps ", temps)
		console.log("City data is: ", cityData)
		return(
			<tr key={cityName}>
				<td> {cityName} </td>
				<td> 
					<Sparklines data={temps}>
  					<SparklinesLine color="red" />
					</Sparklines>
				</td>
			</tr>
		)
	}


	render(){
		return(
			<table className="table table-hover">
				<thead>
					<tr> 
						<th> City </th>
						<th> Temparature </th>
						<th> Pressure </th>
						<th> Humidity </th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}

}

// function mapStateToProps(state) {
// 	return { weather: state.weather}
// }

function mapStateToProps({weather}) { //Identical to above code
	return { weather}
}

export default connect(mapStateToProps)(WeatherList);