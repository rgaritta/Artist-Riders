import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignIn = (props)=> {
	return (
		<div>
			<div className="sign-in">
			<h1>Log In</h1>
			<h5>Please log in before using the site.</h5>
			
			<Link to = "/signup" >Create an account</Link>
			<form>
				<label>Email</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button className="button btn btn-info" type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
			</form>
			</div>
		</div>
	);
};

export default SignIn;