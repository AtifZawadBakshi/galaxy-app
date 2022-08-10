import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Appliances from "../ThisMonthsPick/AppliancesTab/Appliances";
import Mobile from "../ThisMonthsPick/MobileTab/Mobile";
import OfferPicks from "../ThisMonthsPick/OfferPicksTab/OfferPicks";
import Tablets from "../ThisMonthsPick/TabletsTab/Tablets";
import "./style.css";
import TV from "../ThisMonthsPick/TVTab/TV";
const TopSells = () => {
  return (
    <div className="tab-slider-product section">
      <div className="container" style={{ maxWidth: "1800px" }}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="section-header text-center">
              <h2 className="h2 heading-font font-weight-bold">
                This Month's Pick
              </h2>
            </div>
            <div className="tabs-listing mt-5">
              <Tabs
                defaultActiveKey="offer-picks"
                className="justify-content-center mb-3"
                variant="pills"
              >
                <Tab eventKey="offer-picks" title="Offer Picks">
                  <OfferPicks />
                </Tab>
                <Tab eventKey="mobile" title="Mobile">
                  <Mobile />
                </Tab>
                <Tab eventKey="tv" title="TV">
                  <TV />
                </Tab>
                <Tab eventKey="appliances" title="Appliances">
                  <Appliances />
                </Tab>
                <Tab eventKey="tablets" title="Tablets">
                  <Tablets />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSells;
