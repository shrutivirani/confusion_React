import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DISHES } from "../components/shared/dishes";
import { COMMENTS } from "../components/shared/comments";
import { PROMOTIONS } from "../components/shared/promotions";
import { LEADERS } from "../components/shared/leaders";
import Menu from "./menuComponent";
import DishDetailsComponent from "./dishDetailsComponent";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Contact from "./contactComponent";
import Home from "./homeComponent";
import About from "./aboutComponent";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      selectedDish: null,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={
            this.state.promotions.filter((promotion) => promotion.featured)[0]
          }
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        // ,10 is means convert into decimal
        <DishDetailsComponent
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => (
              <Menu dishes={this.state.dishes} comments={this.state.comments} />
            )}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
          />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu
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
        /> */}
        <Footer />
      </div>
    );
  }
}
