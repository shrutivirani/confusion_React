import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
} from "reactstrap";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} name={item.name} height="300" />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {/* because designation is only available in leaders so */}
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard item={this.props.dish} />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={this.props.promotion} />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={this.props.leader} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
