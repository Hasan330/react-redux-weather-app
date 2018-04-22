import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';



class WeatherList extends Component{

	renderWeather(cityData) {
		const cityName = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp)
		const pressure = cityData.list.map(weather => weather.main.pressure)
		const humidity = cityData.list.map(weather => weather.main.humidity)

		console.log("City data is: ", cityData)
		return(
			<tr key={cityName}>
				<td> {cityName} </td>
				<td> 
					<Chart data={temps} color={"orange"} />
				</td>
				<td> 
					<Chart data={pressure} color={"green"} />
				</td>
				<td> 
					<Chart data={humidity} color={"black"} />
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