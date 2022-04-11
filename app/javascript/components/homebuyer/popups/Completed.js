import React from "react";
import { Modal } from "react-bootstrap";
import { modalClose } from "../../../../assets/homebuyer/images/close-modal.png";
import { completeImg } from "../../../../assets/homebuyer/images/round-tick.png";

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
          <img src={completeImg} alt />
          <img src={modalClose} alt />
        </div>
      </Modal>
    </div>
  );
};

export default Completed;
