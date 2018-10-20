import React, { Component } from "react";
import "./Nav.css"

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <a className="navbar-brand text-warning" href="/">
          Artist Riders .com
    </a>
        <a className="navbar-brand" href="/login">
          Log In
    </a>
        <a className="navbar-brand" href="/upload">
          Upload
    </a>
        <a className="navbar-brand" href="/view">
          View Your Files
    </a>
        
          <li><a className="logout" onClick={this.props.handleLogout} href="/"> Log Out</a></li>
        
      </nav>
    )
  }
}

export default Nav;
