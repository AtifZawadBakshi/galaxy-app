import React from "react";
import { Card, Button } from "react-bootstrap";
const S22Ultra = () => {
  return (
    <div className="row mt-3">
      <div className="col justify-content-center align-items-center">
        <Card
          className="card text-center"
          style={{ background: "#f4f4f4", borderRadius: "20px" }}
        >
          <Card.Img
            className="my-3"
            variant="top"
            src="assets\images\ThisMonthsPick\M33-160.png"
          />
          <Card.Body>
            <Card.Title>Galaxy M33 5G 8/128GB</Card.Title>
            <Button className="my-3">Buy Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default S22Ultra;
