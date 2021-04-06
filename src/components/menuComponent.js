import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 ">
          <Card onClick={() => this.props.onClick(dish.id)}>
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
      </div>
    );
  }
}

export default Menu;
