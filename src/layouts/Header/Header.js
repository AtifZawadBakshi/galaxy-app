import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Badge, IconButton, Menu } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../../redux/actions/action";
const InputBox = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerBox = styled.div`
  border: none;
`;
const Input = styled.input`
  border: none;
`;
const Header = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  const getwishlist = useSelector((state) => state.wishlistreducer.wishlist);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <div className="header-wrap animated d-flex border-bottom">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
            <Link to="/">
              <img
                src="/assets/images/logo/Fair-Electronics.png"
                alt="Fair-Electronics Logo"
                title="Fair-Electronics Logo"
              />
            </Link>
          </div>
          <div className="col-2 col-sm-3 col-md-3 col-lg-8">
            <div className="d-block d-lg-none">
              <button
                type="button"
                className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open"
              >
                <i className="anm anm-bars-r" />
              </button>
            </div>
            {/*Desktop Menu*/}
            <nav className="grid__item" id="AccessibleNav">
              {/* for mobile */}
              <ul id="siteNav" className="site-nav medium center hidearrow">
                <li className="lvl1 parent dropdown">
                  <a style={{ cursor: "pointer" }}>
                    Mobiles <i className="anm anm-angle-down-l" />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <Link to="/smartphones" className="site-nav">
                        Smartphones <i className="anm anm-angle-right-l" />
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="/smartphones/galaxy-z" className="site-nav">
                            Galaxy Z
                          </Link>
                        </li>
                        <li>
                          <Link to="/smartphones/galaxy-s" className="site-nav">
                            Galaxy S
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/smartphones/galaxy-note"
                            className="site-nav"
                          >
                            Galaxy Note
                          </Link>
                        </li>
                        <li>
                          <Link to="/smartphones/galaxy-a" className="site-nav">
                            Galaxy A
                          </Link>
                        </li>
                        <li>
                          <Link to="/smartphones/galaxy-m" className="site-nav">
                            Galaxy M
                          </Link>
                        </li>
                        <li>
                          <Link to="/smartphones/galaxy-f" className="site-nav">
                            Galaxy F
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/tablets" className="site-nav">
                        Tablets <i className="anm anm-angle-right-l" />
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="/tablets/galaxy-tab-a" className="site-nav">
                            Galaxy Tab A
                          </Link>
                        </li>
                        <li>
                          <Link to="/tablets/galaxy-tab-s" className="site-nav">
                            Galaxy Tab S
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/feature-phone" className="site-nav">
                        Feature Phone
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="lvl1 parent dropdown">
                  <a style={{ cursor: "pointer" }}>
                    TV & AV
                    <i className="anm anm-angle-down-l" />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <Link to="/tvs" className="site-nav">
                        TVs <i className="anm anm-angle-right-l" />
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="/tvs/qled-tv" className="site-nav">
                            QLED TV
                          </Link>
                        </li>
                        <li>
                          <Link to="/tvs/4k-uhd-tv" className="site-nav">
                            4K UHD TV
                          </Link>
                        </li>
                        <li>
                          <Link to="/tvs/full-hd-tv" className="site-nav">
                            FULL HD TV
                          </Link>
                        </li>
                        <li>
                          <Link to="/tvs/8k-qled-tv" className="site-nav">
                            8K QLED TV
                          </Link>
                        </li>
                        <li>
                          <Link to="/tvs/frame-tv" className="site-nav">
                            FRAME TV
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/sound-device" className="site-nav">
                        Sound Devices <i className="anm anm-angle-right-l" />
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link
                            to="/sound-device/sound-bar"
                            className="site-nav"
                          >
                            Soundbar
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/sound-device/sound-tower"
                            className="site-nav"
                          >
                            Sound Tower
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="lvl1 parent dropdown">
                  <a style={{ cursor: "pointer" }}>
                    Appliances <i className="anm anm-angle-down-l" />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <Link to="/refrigerators" className="site-nav">
                        Refrigerators <i className="anm anm-angle-right-l" />
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link
                            to="/refrigerators/top-mount-freezer"
                            className="site-nav"
                          >
                            Top Mount Freezer
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/refrigerators/bottom-mount-freezer"
                            className="site-nav"
                          >
                            Bottom Mount Freezer
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/refrigerators/side-by-side"
                            className="site-nav"
                          >
                            Side by Side
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/refrigerators/open-door"
                            className="site-nav"
                          >
                            Open Door
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/refrigerators/triple-cooling"
                            className="site-nav"
                          >
                            Triple Cooling
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/refrigerators/french-door"
                            className="site-nav"
                          >
                            French Door
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/washing-machine" className="site-nav">
                        Washing Machine <i className="anm anm-angle-right-l" />
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link
                            to="/washing-machine/front-loading"
                            className="site-nav"
                          >
                            Front Loding
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/washing-machine/top-loading"
                            className="site-nav"
                          >
                            Top Loading
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/washing-machine/dryer"
                            className="site-nav"
                          >
                            Dryer
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/washing-machine/washer-dryer-combo"
                            className="site-nav"
                          >
                            Washer Dryer Combo
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/accessories" className="site-nav">
                        Accessories <i className="anm anm-angle-right-l" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/microwave-oven" className="site-nav">
                        Microwave Oven <i className="anm anm-angle-right-l" />
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="/microwave-oven/solo" className="site-nav">
                            Solo
                          </Link>
                        </li>
                        <li>
                          <Link to="/microwave-oven/grill" className="site-nav">
                            Grill
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/microwave-oven/convection"
                            className="site-nav"
                          >
                            Convection
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/air-conditioner" className="site-nav">
                        Air Conditioner <i className="anm anm-angle-right-l" />
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link
                            to="/air-conditioner/inverter"
                            className="site-nav"
                          >
                            Inverter
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/air-conditioner/non-inverter"
                            className="site-nav"
                          >
                            Non Inverter
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/air-purifier" className="site-nav">
                        Air Purifier
                      </Link>
                    </li>
                    <li>
                      <Link to="/vacuum-cleaner" className="site-nav">
                        Vacuum Cleaner
                      </Link>
                    </li>
                    <li>
                      <Link to="/airdresser" className="site-nav">
                        AirDresser
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="lvl1 parent dropdown">
                  <a style={{ cursor: "pointer" }}>
                    Small Appliances <i className="anm anm-angle-down-l" />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <Link to="/kitchen-appliances" className="site-nav">
                        Kitchen Appliances
                        <i className="anm anm-angle-right-l" />
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link
                            to="/kitchen-appliances/rice-cooker"
                            className="site-nav"
                          >
                            Rice Cooker
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/kitchen-appliances/induction-cooker"
                            className="site-nav"
                          >
                            Induction Cooker
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/kitchen-appliances/toaster-air-fryer"
                            className="site-nav"
                          >
                            Toaster & Air Fryer
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/kitchen-appliances/sandwich-maker"
                            className="site-nav"
                          >
                            Sandwich Maker
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/kitchen-appliances/blender-grinder"
                            className="site-nav"
                          >
                            Blender & Grinder
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/kitchen-appliances/electric-kettle"
                            className="site-nav"
                          >
                            Electric Kettle
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/iron" className="site-nav">
                        Iron <i className="anm anm-angle-right-l" />
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="/iron/dry-iron" className="site-nav">
                            Dry Iron
                          </Link>
                        </li>
                        <li>
                          <Link to="/iron/stream-iron" className="site-nav">
                            Stream Iron
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/personal-care-styler" className="site-nav">
                        Personal Care & Styler
                        <i className="anm anm-angle-right-l" />
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link
                            to="/personal-care-styler/shaving-trimmer"
                            className="site-nav"
                          >
                            Shaving Trimmer
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/personal-care-styler/hair-style"
                            className="site-nav"
                          >
                            Hair Style
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="lvl1">
                  <Link to="/flash-sale">
                    <a style={{ cursor: "pointer" }}>
                      <b>Flash Sale</b> <i className="anm anm-angle-down-l" />
                    </a>
                  </Link>
                </li>

                <li className="lvl1">
                  <Link to="/flagship-store">
                    <a style={{ cursor: "pointer" }}>
                      <b>Flagship Store</b>{" "}
                      <i className="anm anm-angle-down-l" />
                    </a>
                  </Link>
                </li>
                <li className="lvl1">
                  <Link to="/bundle-offer">
                    <a style={{ cursor: "pointer" }}>
                      <b>Bundle Offer</b> <i className="anm anm-angle-down-l" />
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
            {/*End Desktop Menu*/}
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
            <div className="logo">
              <Link to="/">
                <img
                  src="/assets/images/logo/Fair-Electronics.png"
                  alt="Fair-Electronics Logo"
                  title="Fair-Electronics Logo"
                />
              </Link>
            </div>
          </div>
          <div className="col-4 col-sm-3 col-md-3 col-lg-2">
            <div className="d-flex justify-content-between align-items-center">
              <Badge badgeContent={getwishlist.length} color="secondary">
                <FavoriteBorder sx={{ fontSize: 30, cursor: "pointer" }} />
              </Badge>

              <IconButton
                id="basic-button"
                aria-label="cart"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Badge badgeContent={getdata.length} color="secondary">
                  <ShoppingCartOutlined
                    sx={{ fontSize: 30, cursor: "pointer" }}
                  />
                </Badge>
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {getdata.length ? (
                  <div
                    className="card_details"
                    style={{ width: "24rem", padding: 10 }}
                  >
                    <Table>
                      <thead>
                        <tr>
                          <th>Product Photo</th>
                          <th>Poduct Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getdata.map((e) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  <img
                                    src={e.img_data}
                                    style={{ width: "5rem", height: "5rem" }}
                                    alt=""
                                  />
                                </td>
                                <td>
                                  <p>{e.name}</p>
                                  <p>Price : ৳ {e.discount_price * e.qnty}/-</p>
                                  <p>Quantity : {e.qnty}</p>
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
                                    <span style={{ fontSize: 15 }}>
                                      {e.qnty}
                                    </span>
                                    <span
                                      style={{ fontSize: 18, marginRight: 5 }}
                                      onClick={() => send(e)}
                                    >
                                      +
                                    </span>
                                  </div>
                                  <p
                                    style={{
                                      color: "red",
                                      fontSize: 20,
                                      cursor: "pointer",
                                    }}
                                    onClick={() => dlt(e.id)}
                                  >
                                    <i className="fas fa-trash smalltrash"></i>
                                  </p>
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
                            </>
                          );
                        })}
                        <tr>
                          <th>Cart Subtotal</th>
                          <th>৳ {price}/-</th>
                        </tr>
                      </tbody>
                    </Table>
                    <div className="container row d-flex justify-content-between align-items-center">
                      <Link to="/cart-details">
                        <button type="button" className="btn btn-primary">
                          VIEW CART
                        </button>
                      </Link>
                      <Link to="/checkout">
                        <button type="button" className="btn btn-primary">
                          CHECKOUT
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="cart_details">
                    <i
                      className="fa fa-close smallclose"
                      style={{
                        position: "absolute",
                        top: 4,
                        right: 8,
                        fontSize: 18,
                        cursor: "pointer",
                      }}
                      onClick={handleClose}
                    ></i>
                    <p className="mx-5 my-3">Your cart is empty</p>
                  </div>
                )}
              </Menu>
              <ContainerBox>
                <InputBox>
                  <Input placeholder="Search Here" />
                  <SearchOutlined style={{ cursor: "pointer" }} />
                </InputBox>
              </ContainerBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
