import React from "react";
import { useState } from "react";
import "../../../../assets/homebuyer/_completed.scss";

import "../../../../assets/homebuyer/_barpopup.scss";
import { Modal } from "react-bootstrap";
import Completed from "./Completed";

export const HowCanWeHelpYou = (props) => {
  const [completeModal, setCompleteModal] = useState(false);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => props.setModal(false)}
      >
        <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
        <div>
          <h1
            className="h1-head-txts"
            style={{ width: "100%", marginBottom: "3%" }}
          >
            How can we help you?
          </h1>
          <div className="d-flex">
            <div className="mb-3" style={{ paddingRight: "1%", width: "50%" }}>
              <label
                htmlFor="exampleInputEmail1"
                className="form-label ph-label"
              >
                First Name *
              </label>
              <input
                type="email"
                className="form-control phone-input"
                id="firstname"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3" style={{ paddingLeft: "1%", width: "50%" }}>
              <label
                htmlFor="exampleInputEmail1"
                className="form-label ph-label"
              >
                Last Name *
              </label>
              <input
                type="email"
                className="form-control phone-input"
                id="lastname"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label ph-label">
              phone *
            </label>
            <input
              type="text"
              className="form-control phone-input"
              id="phone"
              aria-describedby="emailHelp"
            />
          </div>
          <div>
            <label htmlFor="exampleInputEmail1" className="form-label ph-label">
              Text *
            </label>
            <input
              type="text"
              className="form-control text-input"
              id="textreview"
              aria-describedby="emailHelp"
              placeholder="Check out this house!"
              style={{ width: "100%", height: "224px" }}
            />
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-primary cont-opt"
              onClick={() => setCompleteModal(true)}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
      <Completed show={completeModal} setModal={setCompleteModal} />
    </div>
  );
};
