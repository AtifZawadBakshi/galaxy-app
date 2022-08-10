import {
  AddShoppingCart,
  CompareArrowsOutlined,
  PreviewOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { ButtonGroup, Button } from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import Cardsdata from "../DemoData/DemoData";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/action";
const ProductCategoryListContent = () => {
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [data, setData] = useState(Cardsdata);
  const handleMouseOver = () => {
    setIsHoveringCard(true);
  };

  const handleMouseOut = () => {
    setIsHoveringCard(false);
  };
  const dispatch = useDispatch(Cardsdata);
  const send = (event) => {
    dispatch(ADD(event));
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
                  <ButtonGroup variant="outlined">
                    <Button onClick={() => send(element)}>
                      <AddShoppingCart />
                    </Button>
                    <Button>
                      <PreviewOutlined />
                    </Button>
                    <Button>
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
                  >
                    <ShoppingBagOutlined />
                    Shup Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="infinitpaginOuter">
        <div className="infinitpagin">
          <a href="#" className="btn loadMore">
            Load More
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCategoryListContent;
