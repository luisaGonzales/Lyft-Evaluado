import React, {Component} from 'react';
import {
	NavLink
} from 'react-router-dom'
import './Home.css'


const Home = ( {model} ) => {

	return (
		<div className="home container">
			<div className="row">
				<div className="col-xs-offset-3 col-xs-6">
					<img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c525.png" className="logo"/>
				</div>
			</div>	
			<div className="row  btns">
				<div className="col-xs-6 col-lg-6 col-md-6">
					<button to={"/signup"}
							className="btn btn-lyft btn-lg btn-block btn-signUp"
							disabled
					>
						Log In
					</button>
				</div>
				<div className="col-xs-6 col-lg-6 col-md-6">
					<NavLink to={"/signup"}
							className="btn btn-lyft btn-lg btn-block btn-signUp"
					>
						Sign Up
					</NavLink>
				</div>
			</div>	
			
		</div>
	);
}

export default Home;