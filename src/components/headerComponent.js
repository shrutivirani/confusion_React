import React, { Component } from "react";
import { Jumbotron, Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restaurant</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="raw raw-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default Header;
