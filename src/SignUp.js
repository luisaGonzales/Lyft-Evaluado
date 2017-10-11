import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';
import './SignUp.css';
import Utils from './Utils';

let Codigo = "+51";


class SignUp extends React.Component {

	constructor(props) {
		super(props);
		this.phoneUser = undefined;
		this.state = {
			phone: []

		}
		this.codigo = Codigo;
		;
	}
	updateUser(user) {
		this.users.push({
			name: this.name,
			email: this.email,
			phone: this.phone,
			id: Utils.uuid()
		});

	}
	/*validatePhone(phone){
		this.phone = phone;
	}	*/
	render() {

		const { model } = this.props
		return (
			<div>
				<header>
					<h3 className="text-center">Sign up</h3>
					<p className="text-center">Join now for free ride credit</p>
				</header>
				<section className="container">
					<form className="text-center"

					>
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
						<input
							type="text"
							name="celular"

							value={this.codigo}
							id="primerinput"></input>
						<input
							onChange={
								e => (model.userInfo.phone = e.target.value)
							}
							id="phonenum"
							value={this.phoneUser}
							type="tel"
							placeholder="112233445"
							pattern="^\d{3}\d{3}\d{3}$"
							required ></input>
						<br></br>
						<br></br>
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