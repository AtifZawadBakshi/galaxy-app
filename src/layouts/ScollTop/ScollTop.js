import React from "react";
import { Button } from "react-bootstrap";

const ScollTop = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      <Button onClick={goToTop}>
        <span id="site-scroll">
          <i className="icon anm anm-angle-up-r" />
        </span>
      </Button>
    </div>
  );
};

export default ScollTop;
