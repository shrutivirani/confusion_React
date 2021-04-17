import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg top width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function DateFormat({ date }) {
  var monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var tempDate = new Date(date);
  return (
    <span>
      {monthNames[tempDate.getMonth() + 1] +
        "  " +
        tempDate.getDate() +
        "," +
        "  " +
        tempDate.getFullYear()}{" "}
    </span>
  );
}

function RenderComment({ comments }) {
  if (comments != null) {
    const comment = comments.map((comment) => {
      return (
        <div key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            --{comment.author}
            <span style={{ marginLeft: "0.3em", marginRight: "0.3em" }}>,</span>
            <DateFormat date={comment.date} />
          </p>
        </div>
      );
    });
    return comment;
  } else {
    <></>;
  }
}

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class DishDetailsComponent extends Component {
  state = {
    isModalOpen: false,
  };
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  handleSubmit = (values) => {
    alert("current value is: " + JSON.stringify(values));
  };

  render() {
    return (
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{this.props.dish.name}</h3>
        </div>
        <div className="row">
          <div className="col-md-5 ">
            <RenderDish dish={this.props.dish} />
          </div>
          <div className="col-md-5">
            <RenderComment comments={this.props.comments} />
            <Button
              className="btn btn-outline-secondary"
              onClick={this.toggleModal}
            >
              <span className="fa fa-pencil"></span> Submit Comment
            </Button>
          </div>
        </div>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Col className="m-2">
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Col className="m-2">
                  <Label htmlFor="firstname">Your Name</Label>
                  <Control.text
                    model=".firstname"
                    id="firstname"
                    name="firstname"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col className="m-2">
                  <Label htmlFor="comment">Comment</Label>
                  <Control.textarea
                    rows="6"
                    model=".comment"
                    id="comment"
                    name="comment"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Feedback
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default DishDetailsComponent;
