import React from "react";
import { useState } from "react";
import "../../../../assets/homebuyer/_barpopup.scss";
import { Modal } from "react-bootstrap";
import { CreateGroup } from "./CreateGroup";

export const ChooseGroup = (props) => {
  const [chooseModal, setChooseModal] = useState(false);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => props.setModal(false)}
      >
        <div style={{ padding: "3% 13%" }}>
          <div>
            <h1
              className="h1-head-txts"
              style={{ width: "85%", textAlign: "left", marginBottom: "2rem" }}
            >
              Choose which group to add this house to
            </h1>
            <p
              className="loc-head-p-txt"
              style={{ width: "85%", textAlign: "left", marginBottom: "3rem" }}
            >
              You don’t have any groups yet. Groups are a great way to organzie
              which homes you and your co-buyers are interested in!
            </p>
            <button
              type="button"
              className="btn btn-primary cont-opt"
              style={{ width: "50%", margin: "0rem" }}
              onClick={() => setChooseModal(true)}
            >
              Create a new group
            </button>
          </div>
        </div>
      </Modal>
      <CreateGroup show={chooseModal} setModal={setChooseModal} />
    </div>
  );
};
