import React from 'react';
import "./style.css";

const Home = (props) =>{
	return (
		<div className="loggedin">
			<h4>You are logged in as: {props.auth.username}</h4>
			<h4>Use the links at the top to navigate the site.</h4>
			<button className="button btn btn-info" onClick = {props.handleLogout}>Log Out</button>
		</div>
	);
};

export default Home;