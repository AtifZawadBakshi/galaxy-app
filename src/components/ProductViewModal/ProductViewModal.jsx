import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
const ProductViewModal = (props) => {
  console.log(props);
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          {props.modalData.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
              <img style={{ height: "12rem" }} src={props.modalData.img_data} />
            </div>
          </div>
          <div class="col-lg-7 col-md-7"></div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductViewModal;
