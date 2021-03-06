import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import './SignUpPhoneValidation.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="btnBack">
          <NavLink to="/signup">
            <i className="material-icons back">keyboard_arrow_left</i>
          </NavLink>
        </div>
        <h1 className="text-center">Sign Up</h1>
        <h4 className="text-center">Join Now for free ride credit.</h4>
        <hr/>
      </div>
    );
  }
}

class SignUpPhoneValidation extends Component {
  constructor(props) {
    super(props);
    this.size = 3;
    this.limit = 10;
    this.inputValue = undefined;
    this.pinUser = undefined;
    this.pinCreated = [];
    this.t = undefined;
    this.state = {
      pin: [],
      valid: false,
      show: false
    }
  }
  getPin(array) {
		let values = Math.floor(Math.random() * this.limit);
		if (!array.some(function (e) {
		  return e === values
		})) {
		  array.push(values);
		}
	  }
  createPin() {
    while (this.pinCreated.length < this.size && this.size < this.limit) {
      this.getPin(this.pinCreated);
    }
    this.setState({pin: this.pinCreated})
  }
  showAll(e) {
    this.setState({show: true});
    this.createPin();
  }
  changeInput(e) {
    let newPin = this.state.pin.toString().replace(/,/g, "");
    if (e.target.value === newPin) {
      this.setState({valid: true});
    } else {
      this.setState({valid: false});
    }
  }
  validatePin(input) {
    this.pinUser = input;
  }
  render() {
    return (
      <div className="text-center">
        <header>
          <Header />
        </header>
        {this.state.show && 
        <div>
          <div>
            <h4 >Tu código Lyft es:</h4>
            <h5>
              <strong>LAB - {this.state.pin}</strong>
            </h5>
          </div>
          <div className="form">
            <h4>Ingresa tu código de confirmación de Lyft</h4>
            <form
              onSubmit={(e) => {
              e.preventDefault();
              this.validatePin(this.inputValue);
            }}>
              <strong>LAB -
              </strong>
              <input
                type="number"
                value={this.inputValue}
                onChange={(e) => {
                this.changeInput(e)
              }}
                className="inputPin"/> 
                {this.state.valid
                ? <NavLink to="/signup-form" className="btn btn-lg btnNext ">
                    Next
                  </NavLink>
                : <button className="btn btn-lg btnNext disabled">
                  Next
                </button>
}
            </form>
          </div>
        </div>
}
        {!this.state.show && <div>
          <p>Se ha enviado un código de confirmación a este número de celular para poder
            validar esta información
          </p>
          <button
            className="btnNext"
            onClick={(e) => {
            this.showAll(e)
          }}>Aceptar</button>
        </div>
}
      </div>
    );
  }
}

export default SignUpPhoneValidation