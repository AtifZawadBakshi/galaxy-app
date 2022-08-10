import React from "react";
import { Card, Button } from "react-bootstrap";
const OfferPicks = () => {
  return (
    <div className="row mt-5">
      <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
        <div className="pd-20 card-box height-100-p">
          <img
            style={{ height: "1180px" }}
            src="assets\images\ThisMonthsPick\new-samsung-smartphone-may-1.png"
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
                src="assets\images\ThisMonthsPick\M33-160.png"
              />
              <Card.Body>
                <Card.Title>Galaxy M33 5G 8/128GB</Card.Title>
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
                src="assets\images\ThisMonthsPick\F23-160.png"
              />
              <Card.Body>
                <Card.Title>Galaxy F23 5G 6/128GB</Card.Title>
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
                <Card.Title>QLED 8K TV</Card.Title>
                <Button className="my-3">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPicks;
