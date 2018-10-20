import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import Jumbotron from '../Jumbotron';
import { Col, Row, Container } from "../../components/Grid";

const SignUp = (props)=> {
	return ( 
		<div>
			<div className="sign-up">
			<h1>Create an account</h1>
			<h5>If you are new, please sign up.</h5>
			<Link to = "/login" >Go to log in</Link>
			<form>
				<label>Email</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button className="btn button btn-info" type = 'submit' name = "/auth/signup" onClick = {props.handleSubmit}>Sign Up</button>
			</form>
			</div>
		</div>
	);
};

export default SignUp;