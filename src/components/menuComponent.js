import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

import DishDetailsComponent from "./dishDetailsComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
      selectedComment: null,
    };
  }
  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish });
    this.setState({
      selectedComment: this.props.comments.filter(
        (comment) => comment.dishId == dish.id
      ),
    });
  };

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
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 ">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg
              top
              width="100%"
              src={dish.image}
              alt={dish.name}
            ></CardImg>
            <CardBody>
              <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-md-5 margin-right-top-bottom-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
          <div className="col-md-5 margin-right-top-bottom-1">
            <DishDetailsComponent comments={this.state.selectedComment} />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
