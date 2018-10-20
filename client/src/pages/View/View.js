import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import "./View.css";


class View extends Component {
  state = {
    riders: [],
    name: "",
    user: "",
    link: "",
    date: ""
  };

  componentDidMount() {
    this.loadRiders();
  }

  loadRiders = () => {
    API.getRiders()
      .then(res =>
        this.setState({ riders: res.data, name: "", user: "", link: "", date: "" })
      )
      .catch(err => console.log(err));
  };

  deleteRider = id => {
    API.deleteRider(id)
      .then(res => this.loadRiders())
      .catch(err => console.log(err));
  };



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>View Your Files</h1>
              <h4>Your uploaded riders will be listed below.</h4>
            </Jumbotron>
            {this.props.auth.username  ? (
              <div className="viewdiv">
              <List>
                {this.state.riders.filter(rider => {return this.props.auth.username == rider.user;}).map((rider) => { return (
                  
                  
                  <ListItem key={rider._id}>
                    
                      <strong>
                        {rider.name} was created on {rider.date} <br />
                        <a className="text-info" target="_blank" href={rider.link}>Click here to view your rider</a>
                      </strong>
                  
                    <DeleteBtn onClick={() => this.deleteRider(rider._id)} />
                  </ListItem>
                )})}
              </List>
              </div>
              
            ) : (
              <h3>There are no results or you are not logged in</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default View;
