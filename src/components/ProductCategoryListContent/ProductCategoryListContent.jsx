import {
  AddShoppingCart,
  CompareArrowsOutlined,
  PreviewOutlined,
  ShoppingBagOutlined,
  FavoriteBorder,
  ShoppingCartOutlined,
  Close,
  Add,
  Remove,
  Loop,
  LocalMallOutlined,
} from "@mui/icons-material";

import { ButtonGroup, Button, Stack, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import Cardsdata from "../DemoData/DemoData";
import { useDispatch } from "react-redux";
import { ADD, ADD_WISHLIST } from "../../redux/actions/action";
import ProductViewModal from "../ProductViewModal/ProductViewModal";
import Modal from "react-bootstrap/Modal";
const ProductCategoryListContent = () => {
  const [data, setData] = useState(Cardsdata);

  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [wishlistSuccess, SetWishlistSuccess] = useState(false);
  const handleWishlistSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    SetWishlistSuccess(false);
  };

  const [cartSuccess, SetCartSuccess] = React.useState(false);
  const handleCartSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    SetCartSuccess(false);
  };

  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const handleMouseOver = () => {
    setIsHoveringCard(true);
  };
  const handleMouseOut = () => {
    setIsHoveringCard(false);
  };

  const dispatch = useDispatch(Cardsdata);
  const send = (event) => {
    dispatch(ADD(event));
    SetCartSuccess(true);
  };
  const send_wishlist = (event) => {
    dispatch(ADD_WISHLIST(event));
    SetWishlistSuccess(true);
  };
  const modalonClick = (event) => {
    setModalShow(true);
    setModalData(event);
  };
  const modalonClose = (event) => {
    setModalShow(false);
    setModalData(null);
  };
  return (
    <>
      <div className="productList product-load-more">
        <div className="toolbar">
          <div className="filters-toolbar-wrapper">
            <div className="row">
              <div className="col-4 col-md-4 col-lg-4 filters-toolbar__item collection-view-as d-flex justify-content-start align-items-center">
                <a
                  href="shop-left-sidebar.html"
                  title="Grid View"
                  className="change-view change-view--active"
                >
                  <img src="/assets/images/grid.jpg" alt="Grid" />
                </a>
                <a
                  href="shop-listview.html"
                  title="List View"
                  className="change-view"
                >
                  <img src="/assets/images/list.jpg" alt="List" />
                </a>
              </div>
              <div className="col-4 col-md-4 col-lg-4 text-center filters-toolbar__item filters-toolbar__item--count d-flex justify-content-center align-items-center">
                <span className="filters-toolbar__product-count">
                  Showing: 22
                </span>
              </div>
              <div className="col-4 col-md-4 col-lg-4 text-right">
                <div className="filters-toolbar__item">
                  <label htmlFor="SortBy" className="hidden">
                    Sort
                  </label>
                  <select
                    name="SortBy"
                    id="SortBy"
                    className="filters-toolbar__input filters-toolbar__input--sort"
                  >
                    <option value="title-ascending" selected="selected">
                      Sort
                    </option>
                    <option>Best Selling</option>
                    <option>Alphabetically, A-Z</option>
                    <option>Alphabetically, Z-A</option>
                    <option>Price, low to high</option>
                    <option>Price, high to low</option>
                    <option>Date, new to old</option>
                    <option>Date, old to new</option>
                  </select>
                  <input
                    className="collection-header__default-sort"
                    type="hidden"
                    defaultValue="manual"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#f7f7f7" }}
        >
          {data.map((element, id) => {
            return (
              <div
                className="my-2 mx-2 card_style"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  padding: "5px",
                  width: "15rem",
                  border: "none",
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "220px",
                  }}
                >
                  <img style={{ height: "12rem" }} src={element.img_data} />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    height: "60px",
                  }}
                >
                  <h2 className="mb-2 px-3">{element.name}</h2>
                </div>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <p> Regular Price: ৳{element.regular_price}</p>
                  <p> Discount Price: ৳{element.discount_price}</p>
                </div>

                <div className="d-flex justify-content-center align-items-center my-3 px-1">
                  <ButtonGroup sx={{ color: "black" }}>
                    <Button
                      onClick={() => send_wishlist(element)}
                      sx={{ color: "black" }}
                    >
                      <FavoriteBorder />
                    </Button>
                    <Snackbar
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      open={wishlistSuccess}
                      autoHideDuration={6000}
                      onClose={handleWishlistSuccessClose}
                    >
                      <Alert
                        variant="filled"
                        severity="success"
                        onClose={handleWishlistSuccessClose}
                      >
                        Successfully Added to Wishlist
                      </Alert>
                    </Snackbar>

                    <Button
                      sx={{ color: "black" }}
                      onClick={() => modalonClick(element)}
                    >
                      <PreviewOutlined />
                    </Button>
                    {/* {modalShow && (
                      <ProductViewModal
                        show={modalShow}
                        onHide={modalonClose}
                        element={modalData.modal}
                      />
                    )} */}
                    {modalData && (
                      <Modal
                        centered
                        show={modalShow}
                        onHide={modalonClose}
                        size="lg"
                      >
                        {/* <Modal.Header className="mt-2">
                          <h3 style={{ fontSize: "20px" }}>{modalData.name}</h3>
                          <h3 className="text-right">
                            <Close
                              onClick={modalonClose}
                              style={{ cursor: "pointer" }}
                            />
                          </h3>
                        </Modal.Header> */}
                        <Modal.Body>
                          <h3 className="text-right">
                            <Close
                              onClick={modalonClose}
                              style={{ cursor: "pointer" }}
                            />
                          </h3>
                          <div className="row py-0">
                            <div class="col-lg-5 col-md-5">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  height: "250px",
                                  width: "100%",
                                }}
                              >
                                <img
                                  style={{ height: "12rem" }}
                                  src={modalData.img_data}
                                />
                              </div>
                            </div>
                            <div class="col-lg-7 col-md-7">
                              <div className="row">
                                <div class="col-lg-12 col-md-12 col-12">
                                  <h1>{modalData.name}</h1>
                                </div>
                                <div class="col-lg-12 col-md-12 col-12">
                                  <h3>Stock In</h3>
                                </div>
                                <div class="col-lg-12 col-md-12 col-12 my-3">
                                  <h2>৳ {modalData.discount_price}</h2>
                                </div>
                                <div class="col-lg-12 col-md-12 col-12">
                                  <div className="d-flex justify-content-left align-items-center">
                                    <Button
                                      sx={{
                                        color: "black",
                                        backgroundColor: "#F0EFF4",
                                        border: "none",
                                        ":hover": {
                                          boxShadow: 6,
                                          color: "white",
                                          backgroundColor: "black",
                                          transition: "all 0.3s",
                                          border: "none",
                                        },
                                      }}
                                    >
                                      <Remove />
                                    </Button>

                                    <span
                                      className="align-items-center"
                                      style={{
                                        fontSize: 15,
                                        marginLeft: "20px",
                                        marginRight: "20px",
                                        marginTop: "5px",
                                      }}
                                    >
                                      <h1>{element.qnty}</h1>
                                    </span>
                                    <Button
                                      sx={{
                                        color: "black",
                                        backgroundColor: "#F0EFF4",
                                        border: "none",
                                        ":hover": {
                                          boxShadow: 6,
                                          color: "white",
                                          backgroundColor: "black",
                                          transition: "all 0.3s",
                                          border: "none",
                                        },
                                      }}
                                    >
                                      <Add />
                                    </Button>
                                    <Button
                                      sx={{
                                        color: "black",
                                        backgroundColor: "#F0EFF4",
                                        marginLeft: "30px",
                                        padding: "20px",
                                        border: "none",
                                        ":hover": {
                                          boxShadow: 10,
                                          color: "white",
                                          backgroundColor: "black",
                                          transition: "all 0.3s",
                                          border: "none",
                                        },
                                      }}
                                    >
                                      <strong className="mx-2">
                                        Add to Cart
                                      </strong>
                                      <ShoppingCartOutlined />
                                    </Button>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-12 my-5">
                                  <div className="d-flex justify-content-left align-items-center">
                                    <div className="mr-3 ">
                                      <FavoriteBorder />
                                      <span>Add to wishlist</span>
                                    </div>
                                    <div className="vertical-middle mr-3">
                                      <Loop />
                                      <span>Compare</span>
                                    </div>
                                    <div className="mr-3">
                                      <LocalMallOutlined />
                                      <span>Buy now </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    )}

                    <Button sx={{ color: "black" }}>
                      <CompareArrowsOutlined />
                    </Button>
                  </ButtonGroup>
                </div>

                <div className="col-12 mt-2">
                  <button
                    type="button"
                    className="btn btn-primary px-4 my-2"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                    }}
                    onClick={() => send(element)}
                  >
                    <ShoppingCartOutlined />
                    Add to Cart
                  </button>
                  <Snackbar
                    maxSnack={3}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    open={cartSuccess}
                    autoHideDuration={6000}
                    onClose={handleCartSuccessClose}
                  >
                    <Alert
                      variant="filled"
                      severity="success"
                      onClose={handleCartSuccessClose}
                    >
                      Successfully Added to Cart
                    </Alert>
                  </Snackbar>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="infinitpaginOuter">
        <div className="infinitpagin">
          <a href="#" className="btn loadMore">
            Load More
          </a>
        </div>
      </div> */}
    </>
  );
};

export default ProductCategoryListContent;
