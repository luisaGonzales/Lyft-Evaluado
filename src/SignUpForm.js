import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import "./SignUpForm.css";
import Utils from "./Utils.js";
class SignUpForm extends Component {
	
  constructor(props) {
    super(props);
    this.inputName = undefined;
		this.inputEmail = undefined;
    this.state = {
      goFordward: false,
      complete: false
    };
	}
	formsName(e) {
		this.inputName = e.target.value;
		
		// let patron = /[^a-zA-Z -]|( )|(--)|(^s*$)/;
	// 	if(patron.test(this.inputName)) {
	// 		alert('no es correcta')

	// 	}else alert( 'es correcta')
		
	}
	formsEmail(e) {
		this.inputEmail = e.target.value;
		// if(this.inputEmail = '') {
		
		// }
		// model.userInfo.email = this.inputEmail
		
	}
  render() {
		const { model } = this.props;
		const onInputChange = e => {
      this.setState({
        goFordward: e.target.checked
      });
		};
		const prueba = () => {
			model.userInfo.email = this.inputEmail
			model.userInfo.name = this.inputName

		}
    const validation = e => {
      this.setState = {
        complete: true
      };
    };

    return (
      <div>
        <section className="container-fluid form text-center">
          <header>
            <div className="btnBack">
              <NavLink to="/signup-validation">
                <i className="material-icons back">keyboard_arrow_left</i>
              </NavLink>
            </div>
            <h1 className="text-center">Sign Up</h1>
            <h4 className="text-center">Join Now for free ride credit.</h4>
            <hr />
          </header>
          <form
						className="form-horizontal">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-user" />
              </span>
              <input
								value = {this.inputName}    
                title="Coloca tu nombre"
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                onChange={e => (this.formsName(e)) }
              />
            </div>
            <br />
            <div className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-envelope" />
              </span>
              <input
                title="Coloca tu e-mail"
                type="email"
                className="form-control"
                name="email"
                placeholder="Correo"
                onChange={e =>  (this.formsEmail(e))}
              />
            </div>
            <div />
            <br />
            <label className="form-check-label">
              <input
                className="form-check-input"
                id="agreeUser"
                type="checkbox"
                onChange={onInputChange}
              />
              I agree to Lyft's <a href="lyft.com"> Terms of Service</a>
            </label>
            {this.state.goFordward ? (
              <NavLink
								onClick= {prueba}
                to={"/lyftmap"}
                className="btn btn-lg btn-block btn-lyft"
              >
                Next
              </NavLink>
            ) : (
              <button className="btn btn-lg btn-block btn-lyft disabled">
                Next
              </button>
            )}
          </form>
        </section>
      </div>
    );
  }
}
export default SignUpForm;
