import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';
import './SignUp.css';



class SignUp extends Component {
	constructor(props) {	
	  super(props);
	 this.phone =[];
	 this.phone= undefined;
	   this.state = {
		goFordward: false
	  };
	}
	  
	render() {
	  const { model } = this.props;
  
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

					  <br></br>
					  <br></br>
					  <br></br>
					  <div className="col-sm-12 text-center">
						  <input onChange={e => {
							this.name = e.target.value;
							}}
						   type="text"
						   name="celular" 
						   value="+51"
						    id="primerinput"></input><input 
							id="phonenum" 
							type="tel" 
							placeholder="112233445" 
							pattern="^\d{3}\d{3}\d{3}$" 
							required ></input>
					  </div>
				  </div>
				  <br></br>
				  <br></br>
										  {
						this.state.goFordward 
						? 
						  <NavLink 
							to = "/signup-form"    
							className="btn btn-lg btnNext " 
						  >
						  Next
						  </NavLink>
						:
						  <button 
							className="btn btn-lg btnNext disabled" 
							>
							Next
						  </button>
					  }
					 
				  </form>
				 </section>
		  </div>
	  );
	 
	}
  }
 export default SignUp;