import React, { useState, useEffect } from "react";
import SearchDrawer from "../components/SearchDrawer/SearchDrawer";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import MobileMenu from "../layouts/MobileMenu/MobileMenu";
import ScollTop from "../layouts/ScollTop/ScollTop";
import TopHeader from "../layouts/TopHeader/TopHeader";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import LinearStepper from "../components/StepForm/Stepform";

const Compare = () => {
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
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
              <div className="compare-page">
                <div className="table-wrapper table-responsive">
                  <table className="table">
                    <thead>
                      <tr className="th-compare">
                        <th valign="middle">Action</th>
                        <td valign="middle" className="item-row">
                          <button type="button" className="remove-compare">
                            <i className="anm anm-times-l" aria-hidden="true" />
                          </button>
                        </td>
                        <td className="item-row">
                          <button type="button" className="remove-compare">
                            <i className="anm anm-times-l" aria-hidden="true" />
                          </button>
                        </td>
                        <td className="item-row">
                          <button type="button" className="remove-compare">
                            <i className="anm anm-times-l" aria-hidden="true" />
                          </button>
                        </td>
                        <td className="item-row">
                          <button type="button" className="remove-compare">
                            <i className="anm anm-times-l" aria-hidden="true" />
                          </button>
                        </td>
                        <td className="item-row">
                          <button type="button" className="remove-compare">
                            <i className="anm anm-times-l" aria-hidden="true" />
                          </button>
                        </td>
                      </tr>
                    </thead>
                    <tbody id="table-compare">
                      <tr>
                        <th valign="middle" className="product-name">
                          Product Name
                        </th>
                        <td valign="middle" className="grid-link__title">
                          Edna Dress
                        </td>
                        <td className="grid-link__title">
                          Elastic Waist Dress
                        </td>
                        <td className="grid-link__title">
                          3/4 Sleeve Kimono Dress
                        </td>
                        <td className="grid-link__title">Cape Dress</td>
                        <td className="grid-link__title">Cape Dress</td>
                      </tr>
                      <tr>
                        <th valign="middle" className="product-name">
                          Product Image
                        </th>
                        <td valign="middle" className="item-row">
                          <img
                            src="assets/images/product-images/product-image16.jpg"
                            alt
                            className="featured-image"
                          />
                          <div className="product-price product_price">
                            <span>$89,00</span>
                          </div>
                          <form className="variants clearfix">
                            <input type="hidden" />
                            <button
                              title="Add to Cart"
                              className="add-to-cart btn btn-solid"
                            >
                              Add to Cart
                            </button>
                          </form>
                          <p className="grid-link__title hidden">Cut Dress</p>
                        </td>
                        <td className="item-row">
                          <img
                            src="assets/images/product-images/product-image18.jpg"
                            alt
                            className="featured-image"
                          />
                          <div className="product-price product_price">
                            <span>$89,00</span>
                          </div>
                          <form className="variants clearfix">
                            <input type="hidden" />
                            <button
                              title="Add to Cart"
                              className="add-to-cart btn btn-solid"
                            >
                              Add to Cart
                            </button>
                          </form>
                          <p className="grid-link__title hidden">Cut Dress</p>
                        </td>
                        <td className="item-row">
                          <img
                            src="assets/images/product-images/product-image20.jpg"
                            alt
                            className="featured-image"
                          />
                          <div className="product-price product_price">
                            <span>$89,00</span>
                          </div>
                          <form className="variants clearfix">
                            <input type="hidden" />
                            <button
                              title="Add to Cart"
                              className="add-to-cart btn btn-solid"
                            >
                              Add to Cart
                            </button>
                          </form>
                          <p className="grid-link__title hidden">Cut Dress</p>
                        </td>
                        <td className="item-row">
                          <img
                            src="assets/images/product-images/product-image23.jpg"
                            alt
                            className="featured-image"
                          />
                          <div className="product-price product_price">
                            <span>$89,00</span>
                          </div>
                          <form className="variants clearfix">
                            <input type="hidden" />
                            <button
                              title="Add to Cart"
                              className="add-to-cart btn btn-solid"
                            >
                              Add to Cart
                            </button>
                          </form>
                          <p className="grid-link__title hidden">Cut Dress</p>
                        </td>
                        <td className="item-row">
                          <img
                            src="assets/images/product-images/product-image28.jpg"
                            alt
                            className="featured-image"
                          />
                          <div className="product-price product_price">
                            <span>$89,00</span>
                          </div>
                          <form className="variants clearfix">
                            <input type="hidden" />
                            <button
                              title="Add to Cart"
                              className="add-to-cart btn btn-solid"
                            >
                              Add to Cart
                            </button>
                          </form>
                          <p className="grid-link__title hidden">Cut Dress</p>
                        </td>
                      </tr>
                      <tr>
                        <th valign="middle" className="product-name">
                          Product Description
                        </th>
                        <td valign="middle" className="item-row">
                          <p className="description-compare">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </td>
                        <td className="item-row">
                          <p className="description-compare">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                        </td>
                        <td className="item-row">
                          <p className="description-compare">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                            alteration.
                          </p>
                        </td>
                        <td className="item-row">
                          <p className="description-compare">
                            The standard chunk of Lorem Ipsum used since the
                            1500s is reproduced below for those interested.
                          </p>
                        </td>
                        <td className="item-row">
                          <p className="description-compare">
                            The standard chunk of Lorem Ipsum used since the
                            1500s is reproduced below for those interested.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th valign="middle" className="product-name">
                          Availability
                        </th>
                        <td valign="middle" className="available-stock">
                          <p>In stock</p>
                        </td>
                        <td className="available-stock">
                          <p>In stock</p>
                        </td>
                        <td className="available-stock">
                          <p>In stock</p>
                        </td>
                        <td className="available-stock">
                          <p>In stock</p>
                        </td>
                        <td className="available-stock">
                          <p>In stock</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScollTop />
    </div>
  );
};

export default Compare;
