import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Menu from "./menuComponent";
import DishDetailsComponent from "./dishDetailsComponent";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Contact from "./contactComponent";
import Home from "./homeComponent";
import About from "./aboutComponent";

//state from reducer state=initialState
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selectedDish: null,
    // };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={
            this.props.promotions.filter((promotion) => promotion.featured)[0]
          }
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        // ,10 is means convert into decimal
        <DishDetailsComponent
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
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
              <Menu dishes={this.props.dishes} comments={this.props.comments} />
            )}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
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
export default withRouter(connect(mapStateToProps)(Main));
