import React, { useState, useEffect } from "react";
import SearchDrawer from "../components/SearchDrawer/SearchDrawer";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import MobileMenu from "../layouts/MobileMenu/MobileMenu";
import ScollTop from "../layouts/ScollTop/ScollTop";
import TopHeader from "../layouts/TopHeader/TopHeader";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";

const CartDetails = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((element, i) => {
      price = price + element.discount_price * element.qnty;
    });
    setPrice(price);
  };
  const send = (event) => {
    dispatch(ADD(event));
  };
  const remove = (event) => {
    dispatch(REMOVE(event));
  };
  useEffect(() => {
    total();
  }, [total]);
  return (
    <>
      <div className="pageWrapper">
        <SearchDrawer />
        <TopHeader />
        <Header />
        <MobileMenu />

        <div id="page-content">
          <div className="page section-header text-center">
            <div className="page-title">
              <div className="wrapper">
                <h1 className="page-width">Shopping Cart</h1>
              </div>
            </div>
          </div>

          <div className="container">
            {getdata.length ? (
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
                  <form action="#" method="post" className="cart style2">
                    <table>
                      <thead className="cart__row cart__header">
                        <tr>
                          <th colSpan={2} className="text-center">
                            Product
                          </th>
                          <th className="text-center">Unite Price</th>
                          <th className="text-center">Quantity</th>
                          <th className="text-center">Sub Total</th>
                          <th className="text-right"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {getdata.map((e) => {
                          return (
                            <tr className="cart__row border-bottom line1 cart-flex border-top">
                              <td className="cart__image-wrapper cart-flex-item">
                                <img
                                  className="cart__image"
                                  src={e.img_data}
                                  alt=""
                                />
                              </td>
                              <td>
                                <div className="list-view-item__title">
                                  {e.name}
                                </div>
                                <div className="cart__meta-text">
                                  Color: Blue
                                  <br />
                                  Variant: 8/128GB
                                  <br />
                                </div>
                              </td>

                              <td>
                                <div className="cart__qty text-center">
                                  ৳{e.discount_price}
                                </div>
                              </td>
                              <td className="d-flex justify-content-center align-items-center m-5">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                  style={{
                                    width: 50,
                                    cursor: "pointer",
                                    background: "#ddd",
                                    color: "#111",
                                  }}
                                >
                                  <span
                                    style={{ fontSize: 18, marginLeft: 5 }}
                                    onClick={
                                      e.qnty <= 1
                                        ? () => dlt(e.id)
                                        : () => remove(e)
                                    }
                                  >
                                    -
                                  </span>
                                  <span style={{ fontSize: 15 }}>{e.qnty}</span>
                                  <span
                                    style={{ fontSize: 18, marginRight: 5 }}
                                    onClick={() => send(e)}
                                  >
                                    +
                                  </span>
                                </div>
                              </td>
                              <td className="text-center">
                                <div>
                                  <span className="text-right">৳{price}</span>
                                </div>
                              </td>
                              <td
                                className="mt-5"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(e.id)}
                              >
                                <i className="fas fa-trash largetrash"></i>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={3} className="text-left">
                            <a
                              href="http://annimexweb.com/"
                              className="btn btn-secondary btn--small cart-continue"
                            >
                              Continue shopping
                            </a>
                          </td>
                          <td colSpan={3} className="text-right">
                            <button
                              type="submit"
                              name="clear"
                              className="btn btn-secondary btn--small  small--hide"
                            >
                              Clear Cart
                            </button>
                            <Link to="/checkout">
                              <button
                                type="submit"
                                name="update"
                                className="btn btn-secondary btn--small cart-continue ml-2"
                              >
                                Checkout
                              </button>
                            </Link>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </form>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body cart">
                      <div className="col-sm-12 empty-cart-cls text-center">
                        <img
                          src="https://i.imgur.com/dCdflKN.png"
                          width={130}
                          height={130}
                          className="img-fluid mb-4 mr-3"
                        />
                        <h3>
                          <strong>Your Cart is Empty</strong>
                        </h3>
                        <h4>Add something to make me happy :)</h4>
                        <a
                          href="#"
                          className="btn btn-primary cart-btn-transform m-3"
                          data-abc="true"
                        >
                          continue shopping
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/*End Body Content*/}
        <Footer />
        <ScollTop />
      </div>
    </>
  );
};

export default CartDetails;
