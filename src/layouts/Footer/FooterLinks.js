import React from "react";

const FooterLinks = () => {
  return (
    <div className="footer-top">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
          <h4 className="h4">About Fair Electronics</h4>
          <p>
            Fair electronics is Samsung Authorized online shop operated by
            Samsung Bangladesh national distributor "Fair Distribution Limited"
            in Bangladesh. Samsung Bangladesh is the Market leader in product
            categories like Mobile Phones, Smart Phones, Panel TVs, Side By Side
            Refrigerators, Frost Free Refrigerators, Microwaves and Invert-er
            ACs.
          </p>
          <h4 className="h4">Lern More</h4>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
          <h4 className="h4">Informations</h4>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Employee Purchase Program (EPP)</a>
            </li>
            <li>
              <a href="#">EMI Information</a>
            </li>
            <li>
              <a href="#">How to Order</a>
            </li>
            <li>
              <a href="#">Latest Offer</a>
            </li>
            <li>
              <a href="#">Shipping & Return Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Find my Order</a>
            </li>
            <li>
              <a href="#">Customer Service</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
          <h4 className="h4">Apps</h4>
          <ul>
            <li>
              <a href="#">Find My Mobile</a>
            </li>
            <li>
              <a href="#">Samsung Galaxy Apps</a>
            </li>
            <li>
              <a href="#">Theme Service</a>
            </li>
            <li>
              <a href="#">Samsung Smart Switch</a>
            </li>
            <li>
              <a href="#">Samsung SideSync</a>
            </li>
            <li>
              <a href="#">Samsung Cloud</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
          <h4 className="h4">Contact Info</h4>
          <ul className="addressFooter">
            <li>
              <i className="icon anm anm-map-marker-al" />
              <p>
                76/B, Khawaja Palace, Road-11
                <br />
                Banani, Dhaka-1213
              </p>
            </li>
            <li className="phone">
              <i className="icon anm anm-phone-s" />
              <p>
                Call Us: 09678303030 | 01799988898 (10:00 AM to 8:00 PM)
                (Saturday to Thursday)
              </p>
            </li>
            <li className="email">
              <i className="icon anm anm-envelope-l" />
              <p>info@fairelectronics.com.bd</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
