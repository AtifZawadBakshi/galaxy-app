import React from "react";
import { Card, Button } from "react-bootstrap";
const Appliances = () => {
  return (
    <div className="  row mt-5">
      <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
        <div className="pd-20 card-box height-100-p">
          <div className="pd-20 card-box height-50-p">
            <Card
              className="card text-center"
              style={{ background: "#f4f4f4", borderRadius: "20px" }}
            >
              <Card.Img
                className="my-5"
                variant="top"
                src="assets\images\ThisMonthsPick\REF-01.png"
              />
              <Card.Body>
                <Card.Title className="mt-5 mb-4">
                  Get awesome offers*
                </Card.Title>
                <Button className="my-5">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 mb-30 ">
        <div className="pd-20 card-box height-100-p ">
          <div className="pd-20 card-box height-50-p">
            <Card
              className="card text-center"
              style={{ background: "#f4f4f4", borderRadius: "20px" }}
            >
              <Card.Img
                className="my-3"
                variant="top"
                src="assets\images\ThisMonthsPick\Oven-02.png"
              />
              <Card.Body>
                <Card.Title className="mb-4">
                  Samsung Convection Microwave Oven
                </Card.Title>
                <Button className="my-3">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="pd-20 card-box height-50-p">
            <Card
              className="card text-center"
              style={{ background: "#f4f4f4", borderRadius: "20px" }}
            >
              <Card.Img
                className="my-4"
                variant="top"
                src="assets\images\ThisMonthsPick\REF-05.png"
              />
              <Card.Body>
                <Card.Title className="mb-4s">
                  Top Mount Refrigerator
                </Card.Title>
                <Button className="my-4">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 mb-30">
        <div className="pd-20 card-box height-100-p">
          <div className="pd-20 card-box height-50-p">
            <Card
              className="card text-center "
              style={{ background: "#f4f4f4", borderRadius: "20px" }}
            >
              <Card.Img
                className="my-3"
                variant="top"
                src="assets\images\ThisMonthsPick\WM-02.png"
              />
              <Card.Body>
                <Card.Title>
                  QuickDrive™ Washing Machine with AddWash™
                </Card.Title>
                <Button className="my-3">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="pd-20 card-box height-50-p">
            <Card
              className="card text-center"
              style={{ background: "#f4f4f4", borderRadius: "20px" }}
            >
              <Card.Img
                className="my-3"
                variant="top"
                src="assets\images\ThisMonthsPick\WM-03.png"
              />
              <Card.Body>
                <Card.Title>Top Loading with Wobble Pulsator</Card.Title>
                <Button className="my-4">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appliances;
