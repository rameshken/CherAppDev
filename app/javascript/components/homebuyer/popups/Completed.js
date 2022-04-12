import React from "react";
import { Modal } from "react-bootstrap";
import modalClose from "../../../../assets/homebuyer/images/close-modal.png";
import completeImg from "../../../../assets/homebuyer/images/round-tick.png";
import "../../../../assets/homebuyer/_completed.scss";

const Completed = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => {
          props.setModal(false);
          props.setCompleteModal(false);
        }}
      >
        <div>
          {/* <img src={modalClose} alt /> */}
          <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>

          <div
            style={{ width: "100%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={completeImg}
              style={{
                width: "100px",
                height: "100px",
              }}
              alt
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Completed;
