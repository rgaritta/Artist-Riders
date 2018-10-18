import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <a className="navbar-brand" href="/">
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
    <a className="navbar-brand" href="/share">
      Share A File
    </a>
  </nav>
);

export default Nav;
