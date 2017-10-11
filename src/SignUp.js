import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';
import './SignUp.css';



class SignUp extends React.Component {
	render() {
		return (
			<div>
				<header>
					<h3 className="text-center">Sign up</h3>
					<p className="text-center">Join now for free ride credit</p>
				</header>
				<section className="container">





					<form className="text-center">
						<br></br>
						<div className="row">
							<div className="col-sm-12 text-center">
								<div className="btn-group">
									<span>Select Country</span>
									<select className="form-control ">
										<option id="per">Perú</option>
										<option id="mex">Mexico</option>
										<option id="chile">Chile</option>
									</select>
								</div>
							</div>

						</div>


						<br></br>
						<br></br>
						<br></br>
						<input type="text" name="celular" value="+51" id="primerinput"></input><input id="phonenum" type="tel" placeholder="112233445" pattern="^\d{3}\d{3}\d{3}$" required ></input>

						<div className="col-sm-12 text-center">
							<NavLink to={"/signup-validation"}
								className="btn btn-lyft btn-lg btn-block">
								Next
  					</NavLink>
						</div>
					</form>

				</section>
			</div>
		)
	}
}

export default SignUp;