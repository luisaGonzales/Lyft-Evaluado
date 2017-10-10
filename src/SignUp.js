import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './SignUp.css';

const SignUp = ({model}) => {
	return (
		<div className="text-center">
      <header>
        <div className="btnBack">
          <NavLink to="/signup">
            <i className="material-icons back">keyboard_arrow_left</i>
          </NavLink>
        </div>
        <h1 className="text-center">Sign Up</h1>
        <h4 className="text-center">Join Now for free ride credit.</h4>
        <hr/>
      </header>
	  <section className="container">
              <form className="text-center">
                  
                      
                      <br></br>
                      <div className="row">
        <div className="col-sm-12 text-center">
           <div className="btn-group">
    
    

<span>Select Country</span>
<select class="form-control ">
  <option id="per">Perú</option>
  <option id="mex">Mexico</option>
  <option id= "chile">Chile</option>
  </select>
</div>

</div>
</div>
<br></br>
<br></br>
<br></br>
<input type="text" name="celular" value="+51" id="primerinput"></input><input id="phonenum" type="tel" placeholder="112233445" pattern="^\d{3}\d{3}\d{3}$" required ></input>
                     
<div className="col-sm-12 text-center">
        
    
    </div>                                           
                    </form>

          </section>
      
  

			<NavLink to={"/signup-validation"}
			         className="btn btn-lyft btn-lg btn-block">
				Next
			</NavLink>
		</div>
	);
}

export default SignUp;