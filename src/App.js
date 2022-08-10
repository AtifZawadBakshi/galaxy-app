import Home from "./pages/Home";
import ProductCategoryList from "./pages/ProductCategoryList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartDetails from "./pages/CartDetails";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="smartphones"
            element={<ProductCategoryList category="smartphones" />}
          >
            <Route path="galaxy-z" element={<Home />} />
            <Route path="galaxy-s" element={<Home />} />
            <Route path="galaxy-note" element={<Home />} />
            <Route path="galaxy-a" element={<Home />} />
            <Route path="galaxy-m" element={<Home />} />
            <Route path="galaxy-f" element={<Home />} />
          </Route>
          <Route path="tablets" element={<Home />}>
            <Route path="galaxy-tab-a" element={<Home />} />
            <Route path="galaxy-tab-s" element={<Home />} />
          </Route>
          <Route path="feature-phone" element={<Home />}></Route>
          <Route path="accessories" element={<Home />}></Route>
          <Route path="tvs" element={<Home />}>
            <Route path="qled-tv" element={<Home />} />
            <Route path="4k-uhd-tv" element={<Home />} />
            <Route path="full-hd-tv" element={<Home />} />
            <Route path="8k-qled-tv" element={<Home />} />
            <Route path="frame-tv" element={<Home />} />
          </Route>
          <Route path="sound-device" element={<Home />}>
            <Route path="soundbar" element={<Home />} />
            <Route path="sound-tower" element={<Home />} />
          </Route>
          <Route path="refrigerators" element={<Home />}>
            <Route path="top-mount-freezer" element={<Home />} />
            <Route path="bottom-mount-freezer" element={<Home />} />
            <Route path="side-by-side" element={<Home />} />
            <Route path="open-door" element={<Home />} />
            <Route path="triple-cooling" element={<Home />} />
            <Route path="french-door" element={<Home />} />
          </Route>
          <Route path="washing-machine" element={<Home />}>
            <Route path="front-loading" element={<Home />} />
            <Route path="top-loading" element={<Home />} />
            <Route path="dryer" element={<Home />} />
            <Route path="washing-dryer-combo" element={<Home />} />
          </Route>
          <Route path="microwave-oven" element={<Home />}>
            <Route path="solo" element={<Home />} />
            <Route path="grill" element={<Home />} />
            <Route path="convaction" element={<Home />} />
          </Route>
          <Route path="air-conditioner" element={<Home />}>
            <Route path="inverter" element={<Home />} />
            <Route path="non-inverter" element={<Home />} />
          </Route>
          <Route path="air-purifier" element={<Home />}></Route>
          <Route path="vacuum-cleaner" element={<Home />}></Route>
          <Route path="airdresser" element={<Home />}></Route>
          <Route path="kitchen-appliances" element={<Home />}>
            <Route path="rice-cooker" element={<Home />} />
            <Route path="induction-cooker" element={<Home />} />
            <Route path="toaster-air-fryer" element={<Home />} />
            <Route path="sandwich-maker" element={<Home />} />
            <Route path="blender-grinder" element={<Home />} />
            <Route path="electric-kettle" element={<Home />} />
          </Route>
          <Route path="iron" element={<Home />}>
            <Route path="dry-iron" element={<Home />} />
            <Route path="stream-iron" element={<Home />} />
          </Route>
          <Route path="personal-care-styler" element={<Home />}>
            <Route path="shaving-trimmer" element={<Home />} />
            <Route path="hair-style" element={<Home />} />
          </Route>
          <Route path="flash-sale" element={<Home />}></Route>
          <Route path="flagship-store" element={<Home />}></Route>
          <Route path="bundle-offer" element={<Home />}></Route>
          <Route path="cart-details" element={<CartDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="product-details" element={<ProductDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
