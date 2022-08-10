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
import UserDeatilsForm from "../components/CheckoutStepper/UserDeatilsForm";
import PaymentMethodForm from "../components/CheckoutStepper/PaymentMethodForm";
import DeliveryDetailsForm from "../components/CheckoutStepper/DeliveryDetailsForm";
import LocationDetailsForm from "../components/CheckoutStepper/LocationDetailsForm";
const Checkout = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  const [totalPrice, setTotalPrice] = useState(0);
  const { register, handleSubmit, errors } = useForm();
  const total = () => {
    let price = 0;
    getdata.map((element, i) => {
      price = price + element.discount_price * element.qnty;
    });
    setTotalPrice(price);
  };

  const onSubmit = (data) => {
    console.log(data);
    sessionStorage.setItem("order_user-details", JSON.stringify(data));
  };

  useEffect(() => {
    total();
  }, [totalPrice, getdata]);
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
              <h1 className="page-width">Checkout</h1>
            </div>
          </div>
        </div>
        {/*End Page Title*/}
        {getdata.length !== 0 ? (
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="customer-box returning-customer">
                  <h3>
                    <i className="icon anm anm-user-al" /> Returning customer?{" "}
                    <a
                      href="#customer-login"
                      id="customer"
                      className="text-white text-decoration-underline"
                      data-toggle="collapse"
                    >
                      Click here to login
                    </a>
                  </h3>
                  <div
                    id="customer-login"
                    className="collapse customer-content"
                  >
                    <div className="customer-info">
                      <p className="coupon-text">
                        If you have shopped with us before, please enter your
                        details in the boxes below. If you are a new customer,
                        please proceed to the Billing &amp; Shipping section.
                      </p>
                      <form>
                        <div className="row">
                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="exampleInputEmail1">
                              Email address{" "}
                              <span className="required-f">*</span>
                            </label>
                            <input
                              type="email"
                              className="no-margin"
                              id="exampleInputEmail1"
                            />
                          </div>
                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="exampleInputPassword1">
                              Password <span className="required-f">*</span>
                            </label>
                            <input type="password" id="exampleInputPassword1" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-check width-100 margin-20px-bottom">
                              <label className="form-check-label">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  defaultValue
                                />{" "}
                                Remember me!
                              </label>
                              <a href="#" className="float-right">
                                Forgot your password?
                              </a>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary mt-3"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="customer-box customer-coupon">
                  <h3 className="font-15 xs-font-13">
                    <i className="icon anm anm-gift-l" /> Have a coupon?
                    <a
                      href="#have-coupon"
                      className="text-white text-decoration-underline"
                      data-toggle="collapse"
                    >
                      Click here to enter your code
                    </a>
                  </h3>
                  <div
                    id="have-coupon"
                    className="collapse coupon-checkout-content"
                  >
                    <div className="discount-coupon">
                      <div id="coupon" className="coupon-dec tab-pane active">
                        <p className="margin-10px-bottom">
                          Enter your coupon code if you have one.
                        </p>
                        <label className="required get" htmlFor="coupon-code">
                          <span className="required-f">*</span> Coupon
                        </label>
                        <input
                          id="coupon-code"
                          required
                          type="text"
                          className="mb-3"
                        />
                        <button className="coupon-btn btn" type="submit">
                          Apply Coupon
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row billing-fields">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 sm-margin-30px-bottom">
                <div className="create-ac-content bg-light-gray padding-20px-all">
                  <LinearStepper />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="your-order-payment">
                  <div className="your-order">
                    <h2 className="order-title mb-4">Your Order</h2>
                    <div className="table-responsive-sm order-table">
                      <table className="bg-white table table-bordered table-hover text-center">
                        <thead>
                          <tr>
                            <th className="text-left">Product Name</th>
                            <th>Color</th>
                            <th>Variant</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getdata.map((e) => {
                            return (
                              <tr>
                                <td className="text-left">{e.name}</td>
                                <td>Black</td>
                                <td>8/128GB</td>
                                <td>৳ {e.discount_price}</td>
                                <td>{e.qnty}</td>
                                <td>৳ {e.discount_price * e.qnty}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                        <tfoot className="font-weight-600">
                          <tr>
                            <td colSpan={5} className="text-right">
                              Delivery CHarge
                            </td>
                            <td>৳ 100.00</td>
                          </tr>
                          <tr>
                            <td colSpan={5} className="text-right">
                              Total
                            </td>
                            <td>৳ {totalPrice + 100}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  {/* <div className="order-button-payment">
                  <button
                    className="btn"
                    value="Place order"
                    type="submit"
                    disabled
                  >
                    Place order
                  </button>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="empty-page-content text-center">
                  <h1>404 Page Not Found</h1>
                  <p>The page you requested does not exist.</p>
                  <p>
                    <a
                      href="http://annimexweb.com/"
                      className="btn btn--has-icon-after"
                    >
                      Continue shopping
                      <i className="fa fa-caret-right" aria-hidden="true" />
                    </a>
                  </p>
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

export default Checkout;
