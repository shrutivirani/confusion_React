import logo from "./logo.svg";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import { DISHES } from "./components/shared/dishes";
import { COMMENTS } from "./components/shared/comments";
import Menu from "./components/menuComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dishes: DISHES, comments: COMMENTS };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restaurant</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} comments={this.state.comments} />
      </div>
    );
  }
}
