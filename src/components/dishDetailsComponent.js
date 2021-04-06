import React, { Component } from "react";
import { render } from "react-dom";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
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

  getDateFormat = (date) => {
    var date = new Date(date);
    return (
      <span>
        {this.state.monthNames[date.getMonth() + 1] +
          "  " +
          date.getDate() +
          "," +
          "  " +
          date.getFullYear()}{" "}
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
      <div>
        <h3>Comments</h3>
        {this.renderComment(this.props.comments)}
      </div>
    );
  }
}

export default DishDetailsComponent;
