import React, {Component} from 'react';
import GoogleMaps from './GoogleMaps';
import ReactGoogleAutocomplete from './ReactGoogleAutocomplete';
import './LyftMap.css'
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'


const LyftMap = ({model}) => {

	const state = {
		properties: model.properties,
		activeProperty: model.activeProperty,
		filterIsVisible: false,
		filteredProperties: [],
		isFiltering: false,
		isRouting: model.isRouting
	};
	const {
		properties,
		activeProperty,
		filterIsVisible,
		filteredProperties,
		isFiltering,
		isRouting
	} = state;
	const propertiesList = isFiltering ? filteredProperties : properties;

	const setActiveProperty = (property, scroll) => {
		//this.setState({
		//	activeProperty: property,
		//});
		model.setActiveProperty(property);

		const {index} = property;

		// Scroll to active property
		if (scroll) {
			const target = `#card-${index}`;
			//jump(target, {
			//	duration: 800,
			//	easing: easeInOutCubic,
			//});
		}
	}
	const onPathBntClick = () => {
		model.setIsRouting();
	}


	return (
		<div>
		
				<h2>LyftMap </h2>
					<div>
						<p>NOMBRE: {model.userInfo.name}</p>
						<p>EMAIL:  {model.userInfo.email}</p>
					</div>
	<div>
		<img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c525.png" className="logoMap"/>
        <span className="fa-stack fa-2x icons person">
            <i className="fa fa-circle fa-stack-2x fa-inverse fa-2x"></i>
            <i className="fa fa-user fa-stack-1x"></i>
        </span>    
    	<span className="fa-stack fa-2x icons gift">
            <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
            <i className="fa fa-gift fa-stack-1x"></i>
        </span>    
		<div className="col-md-3 col-sm-3">
			<div className="form-group">
				<ReactGoogleAutocomplete
					onPlaceSelected={(place) => {
						console.log (place);
						model.setTarget (place);
					}}
					componentRestrictions={{country: "pe"}}
				/>
			</div>
		</div>
		<div className="col-md-3 col-sm-3">
			<button id="ruta" className="btn btnPick" onClick={onPathBntClick}>
				<i className="material-icons">directions_car</i>
					<span>Pick Up</span> 
			</button>
		</div>
		<GoogleMaps
			model = {model}
			properties={properties}
			activeProperty={activeProperty}
			setActiveProperty={setActiveProperty}
			filteredProperties={filteredProperties}
			isFiltering={isFiltering}
			isRouting={isRouting}
		/>
		
	</div>
	</div>);
}


export default LyftMap;