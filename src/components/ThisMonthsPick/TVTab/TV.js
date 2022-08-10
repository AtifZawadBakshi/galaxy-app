import React from "react";
import { Card, Button } from "react-bootstrap";
const TV = () => {
  return (
    <div className="row mt-5">
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
                src="assets\images\ThisMonthsPick\TV-01.png"
              />
              <Card.Body>
                <Card.Title className="my-5">Get awesome offers*</Card.Title>
                <Button className="my-3">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 mb-30">
        <div className="pd-20 card-box height-100-p">
          <div className="pd-20 card-box height-50-p">
            <Card
              className="card text-center"
              style={{ background: "#f4f4f4", borderRadius: "20px" }}
            >
              <Card.Img
                className="my-3"
                variant="top"
                src="assets\images\ThisMonthsPick\TV-02.png"
              />
              <Card.Body>
                <Card.Title>QLED 8K TV</Card.Title>
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
                src="assets\images\ThisMonthsPick\TV-03.png"
              />
              <Card.Body>
                <Card.Title>FHD SMART TV</Card.Title>
                <Button className="my-3">Buy Now</Button>
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
                src="assets\images\ThisMonthsPick\TV-04.png"
              />
              <Card.Body>
                <Card.Title>Smart 4K UHD TV</Card.Title>
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
                src="assets\images\ThisMonthsPick\TV-05.png"
              />
              <Card.Body>
                <Card.Title>4K Smart UHD TV</Card.Title>
                <Button className="my-3">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TV;
