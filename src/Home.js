import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './Home.css'


const Home = ( {model} ) => {

	return (
		<div className="container">
			<div className="row">
				<div className="col-xs-12">
					<img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c525.png" className="logo"/>
				</div>
				
			</div>		
			

			<NavLink to={"/signup"}
			         className="btn btn-lyft btn-lg btn-block"
			>
				Sign Up
			</NavLink>
		</div>
	);
}

export default Home;