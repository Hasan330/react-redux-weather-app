import React, { Component } from 'react';

class GoogleMapComponent extends Component{

	componentDidMount(){
		new google.maps.Map(this.refs.map, {
			zoom:12, 
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		})
	}

	render(){
		//You can get direct access to this HTML element by using this.refs.map
		return <div className="mapsclass" ref="map" />
	}
}

export default GoogleMapComponent;