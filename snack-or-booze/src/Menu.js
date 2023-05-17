import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ items, url, type }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
          <span>{type} Menu &nbsp; &nbsp; &nbsp; &nbsp;  <Link to="/">Go back</Link></span> 
          </CardTitle>
          <CardText>
            Try one of our world famous {type}!
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${url}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
