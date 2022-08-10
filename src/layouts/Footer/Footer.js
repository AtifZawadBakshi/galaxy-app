import React from "react";
import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer-2">
        <div className="newsletter-section">
          <Newsletter />
        </div>
        <div className="site-footer">
          <div className="container">
            <FooterLinks />
            <hr />
            <div className="footer-bottom">
              <div className="row">
                <FooterCopyright />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
