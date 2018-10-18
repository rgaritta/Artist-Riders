// import React from "react";
import Books from "./pages/Books";
import Upload from "./pages/Upload";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import View from "./pages/View";
import Share from "./pages/Share";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId: "",
      username: "",
      isAuthenticated: false
    }
  };

  componentWillMount() {
    axios.get("/auth/isAuthenticated").then((result) => {
      const { userId, isAuthenticated, username } = result.data
      this.setState({
        auth: {
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    });
    const { name } = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated) {
        const { userId, isAuthenticated, username } = data.data;
        this.setState({
          auth: {
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result) => {
      this.setState({
        auth: {
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/view" component={View} />
            <Route exact path="/share" component={Share} />
            <Route exact path="/login" render={() => {
              if (loggedIn) {
                return <Redirect to="/home" />
              } else {
                return <SignIn
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  email={this.state.email}
                  password={this.state.password}
                />
              }
            }} />
            <Route exact path="/signup" render={() => {
              if (loggedIn) {
                return <Redirect to="/home" />
              } else {
                return <SignUp
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  email={this.state.email}
                  password={this.state.password}
                />
              }
            }} />
            <Route exact path="/home" render={() => {
              if (!loggedIn) {
                return <Redirect to="/" />
              } else {
                return <Home handleLogout={this.handleLogout} auth={this.state.auth} />
              }
            }
            } />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// class App extends Component {
//   <Router>
//   <div>
//     <Nav />
//     <Switch>
//     <Route exact path="/" component={Books} />
//     <Route exact path="/books" component={Books} />
//     <Route exact path="/upload" component={Upload} />
//     <Route exact path="/books/:id" component={Detail} />
//     <Route component={NoMatch} />
//     </Switch>
//   </div>
//   </Router>
// }

// export default App;
