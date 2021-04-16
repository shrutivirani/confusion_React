import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card>
      {/* for click on card it redirect to perticular selected card */}
      <Link to={`/menu/${dish.id}`}>
        <CardImg top width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 ">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
