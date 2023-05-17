import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home( {drinks, snacks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Pablo's Restaurant & Lounge
            </h3>
            <h4 className="font-italic">The best food and drinks in town!</h4>
              <h5>Serving up a menu with {drinks.length} drinks & {snacks.length} food items!</h5>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
