import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
} from "reactstrap";
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

const DishDetailsComponent = (props) => {
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/menu">Menu</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
      </Breadcrumb>
      <div className="col-12">
        <h3>{props.dish.name}</h3>
      </div>
      <div className="row">
        <div className="col-md-5 ">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-md-5">
          <RenderComment comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetailsComponent;
