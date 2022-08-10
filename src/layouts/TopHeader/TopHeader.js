import React from "react";
import { Link } from "react-router-dom";
const TopHeader = () => {
  return (
    <div
      className="top-header"
      style={{
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container-fluid">
        <div className="row ">
          <div className="col-10 col-sm-8 col-md-5 col-lg-4">
            <div className="text-center">
              <Link to="/">FAIR ELECTRONICS LIMITED | FAIR GROUP</Link>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 d-none d-lg-none d-md-block d-lg-block"></div>
          <div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right">
            <span className="user-menu d-block d-lg-none">
              <i className="anm anm-user-al" aria-hidden="true" />
            </span>
            <ul className="customer-links list-inline">
              <li>
                <a href="">Compare(0)</a>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Create Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
