import React, { Component } from "react";
import GoogleMaps from "./GoogleMaps";
import ReactGoogleAutocomplete from "./ReactGoogleAutocomplete";
import "./LyftMap.css";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";

class Info extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { model } = this.props;
    return (
      <div>
         <NavLink to="/lyftmap">
                <i className="material-icons back">keyboard_arrow_left</i>
              </NavLink>
        <h2>LyftMap </h2>

        <p>NOMBRE: {model.userInfo.name}</p>
        <p>EMAIL: {model.userInfo.email}</p>
        <p>PHONE: {model.userInfo.phone}</p>

      </div>
    );
  }
}
export default Info;
