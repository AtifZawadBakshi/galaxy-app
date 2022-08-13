import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { Button } from "react-bootstrap";
import SearchDrawer from "../components/SearchDrawer/SearchDrawer";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import MobileMenu from "../layouts/MobileMenu/MobileMenu";
import ScollTop from "../layouts/ScollTop/ScollTop";
import TopHeader from "../layouts/TopHeader/TopHeader";
import { useSelector, useDispatch } from "react-redux";
import { DLT_COMPARE } from "../redux/actions/action";
const Compare = () => {
  const getcomparelist = useSelector(
    (state) => state.comparereducer.comparelist
  );
  const dispatch = useDispatch();
  const dlt = (id) => {
    dispatch(DLT_COMPARE(id));
  };

  return (
    <div className="pageWrapper">
      <SearchDrawer />
      <TopHeader />
      <Header />
      <MobileMenu />
      {/*Body Content*/}
      <div id="page-content">
        {/*Page Title*/}
        <div className="page section-header text-center">
          <div className="page-title">
            <div className="wrapper">
              <h1 className="page-width">Compare Product</h1>
            </div>
          </div>
        </div>
        {/*End Page Title*/}
        {getcomparelist.length !== 0 ? (
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
                <div className="compare-page">
                  <div className="table-wrapper table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Action</th>
                          {getcomparelist &&
                            getcomparelist.map((product, id) => (
                              <td>
                                <Close
                                  style={{ cursor: "pointer" }}
                                  onClick={() => dlt(product.id)}
                                />
                              </td>
                            ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Product Name</th>
                          {getcomparelist &&
                            getcomparelist.map((product, id) => (
                              <td>{product.name}</td>
                            ))}
                        </tr>
                        <tr>
                          <th>Product Image</th>
                          {getcomparelist &&
                            getcomparelist.map((product, id) => (
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "220px",
                                  }}
                                >
                                  <img
                                    style={{ height: "12rem" }}
                                    src={product.img_data}
                                  />
                                </div>
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <th valign="middle" className="product-name">
                            Product Price
                          </th>
                          {getcomparelist &&
                            getcomparelist.map((product, id) => (
                              <td>{product.discount_price}</td>
                            ))}
                        </tr>
                        <tr>
                          <th>Availability</th>

                          {getcomparelist &&
                            getcomparelist.map((product, id) => (
                              <td>
                                <p>In stock</p>
                                <button
                                  title="Add to Cart"
                                  className="add-to-cart btn btn-solid"
                                >
                                  Add to Cart
                                </button>
                              </td>
                            ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="empty-page-content text-center">
                  <h1>No Products Found!</h1>
                  <Button>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Go back to Home
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <ScollTop />
    </div>
  );
};

export default Compare;
