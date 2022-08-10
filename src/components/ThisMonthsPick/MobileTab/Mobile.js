import React from "react";
import { Card, Button } from "react-bootstrap";
const Mobile = () => {
  return (
    <div className="row mt-5">
      <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
        <div className="pd-20 card-box height-100-p">
          <div className="pd-20 card-box height-50-p">
            <Card
              className="card text-center"
              style={{ heigth: "60px", borderRadius: "20px" }}
            >
              <Card.Img
                className="my-5"
                variant="top"
                src="assets\images\ThisMonthsPick\Combaa-012.png"
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
                src="assets\images\ThisMonthsPick\A72.png"
              />
              <Card.Body>
                <Card.Title>Galaxy A72 8GB/256GB</Card.Title>
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
                src="assets\images\ThisMonthsPick\Note20-02.png"
              />
              <Card.Body>
                <Card.Title>Galaxy Note20 Ultra</Card.Title>
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
                src="assets\images\ThisMonthsPick\S21-04.png"
              />
              <Card.Body>
                <Card.Title>Galaxy S21 Ultra 5G</Card.Title>
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
                src="assets\images\ThisMonthsPick\M62.png"
              />
              <Card.Body>
                <Card.Title>Galaxy M62</Card.Title>
                <Button className="my-3">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
