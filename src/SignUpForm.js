import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import './SignUpPhoneValidation.css';
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goFordward: false
    };
  }

  render() {
    const { model } = this.props;
    console.log("SignUpForm");

    const onInputChange = e => {
      this.setState({
        goFordward: e.target.checked
      });
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
         
		  <form  className="form-horizontal">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                    <input title="Coloca tu nombre" id="name" type="text" className="form-control" name="name" placeholder="Name" />
                  </div>
                  <br />
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-envelope" />
                    </span>
                    <input title="Coloca tu e-mail" id="email" type="email" className="form-control" name="email" placeholder="Correo" />
                  </div>
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
            <NavLink to={"/lyftmap"} className="btn btn-lg btn-block btn-lyft">
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
