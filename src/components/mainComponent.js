import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DISHES } from "../components/shared/dishes";
import { COMMENTS } from "../components/shared/comments";
import Menu from "./menuComponent";
import DishDetailsComponent from "./dishDetailsComponent";
import Header from "./headerComponent";
import Footer from "./footerComponent";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      selectedDish: null,
    };
  }

  onDishSelect = (dishId) => {
    this.setState({ selectedDish: dishId });
  };

  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          comments={this.state.comments}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetailsComponent
          dishes={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === this.state.selectedDish
          )}
        />
        <Footer />
      </div>
    );
  }
}
