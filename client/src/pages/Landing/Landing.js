import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Landing.css";

class Landing extends Component {
  

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Welcome to ArtistRiders.com!</h1>
              <h3>ArtistRiders.com is a site dedicated to keeping versions of your riders current and easy to sort through.</h3>
              <a className="text-info" href="/login"><h4>Log In to get started!</h4></a>
            </Jumbotron>
            </Col>
            
        </Row>
      </Container>
    );
  }
}

export default Landing;
