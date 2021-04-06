import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
class DishDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthNames: [
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
      ],
    };
  }

  renderDish = (dish) => {
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
  };

  getDateFormat = (date) => {
    var tempDate = new Date(date);
    return (
      <span>
        {this.state.monthNames[tempDate.getMonth() + 1] +
          "  " +
          tempDate.getDate() +
          "," +
          "  " +
          tempDate.getFullYear()}{" "}
      </span>
    );
  };

  renderComment = (comments) => {
    if (comments != null) {
      const comment = comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              --{comment.author}
              <span style={{ marginLeft: "0.3em", marginRight: "0.3em" }}>
                ,
              </span>
              {this.getDateFormat(comment.date)}
            </p>
          </div>
        );
      });
      return comment;
    } else {
      <></>;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 ">{this.renderDish(this.props.dishes)}</div>
          <div className="col-md-5">
            {this.renderComment(this.props.comments)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetailsComponent;
