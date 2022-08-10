import React from "react";
import { Card, Button } from "react-bootstrap";
const Tablets = () => {
  return (
    <div className="row mt-5">
      <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
        <div className="pd-20 card-box height-100-p">
          <img
            style={{ height: "1180px" }}
            src="assets\images\ThisMonthsPick\School-_-Home.jpg"
            className="figure-img img-fluid rounded"
            alt="banner"
          />
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
                src="assets\images\ThisMonthsPick\Galaxy-Tab-A7.png"
              />
              <Card.Body>
                <Card.Title>Galaxy Tab A7</Card.Title>
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
                src="assets\images\ThisMonthsPick\Galaxy-Tab-S6-Lite.png"
              />
              <Card.Body>
                <Card.Title>Galaxy Tab S6 Lite</Card.Title>
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
                src="assets\images\ThisMonthsPick\Galaxy-Tab-A7-Lite.png"
              />
              <Card.Body>
                <Card.Title>Galaxy Tab A7 Lite</Card.Title>
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
                src="assets\images\ThisMonthsPick\Galaxy-Tab-A-8.png"
              />
              <Card.Body>
                <Card.Title>Galaxy Tab A 8.0 (2019)</Card.Title>
                <Button className="my-3">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tablets;
