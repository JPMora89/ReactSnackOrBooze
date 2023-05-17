import React from "react";
import { Link } from "react-router-dom";
import "./DrinkMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function DrinkMenu({ drinks }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
        <span>Drinks Menu &nbsp; &nbsp; &nbsp; &nbsp;  <Link to="/">Go back</Link></span> 
            
          </CardTitle>
          <CardText>
            Serving up some of the best dranks in town!
          </CardText>
          <ListGroup>
            {drinks.map(drink => (
              <Link to={`/drinks/${drink.id}`} key={drink.id}>
                <ListGroupItem>{drink.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default DrinkMenu;
