import React from "react";
import "../../../../assets/homebuyer/_barpopup.scss";
import dotEllipse from "../../../../assets/images/homebuyer/images/dotted-ellipse.png";
import fbBlack from "../../../../assets/images/homebuyer/images/fb-black.png";
import inBlack from "../../../../assets/images/homebuyer/images/in-black.png";
import twBlack from "../../../../assets/images/homebuyer/images/tw-black.png";
import copyBlack from "../../../../assets/images/homebuyer/images/copy-black.png";
import { Modal } from "react-bootstrap";

export const CreateGroup = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => props.setModal(false)}
      >
        <div>
          <h1 className="h1-head-txts" style={{ width: "100%" }}>
            Create a new group
          </h1>
          <form>
            <div className="mb-3" style={{ padding: "0% 30%" }}>
              <label
                htmlFor="exampleInputEmail1"
                className="form-label ph1-label"
              >
                Group Name
              </label>
              <input
                type="email"
                className="form-control phone-input"
                id="groupname"
                aria-describedby="emailHelp"
                placeholder="Enter your group name"
                style={{
                  color: "#ABABAB",
                  fontSize: 18,
                  border: "1px solid #000000",
                }}
              />
            </div>
            <div className="mb-3" style={{ padding: "0% 30%" }}>
              <label
                htmlFor="exampleInputEmail1"
                className="form-label ph1-label"
              >
                Select People
              </label>
              <input
                type="email"
                className="form-control phone-input"
                id="selectpeople"
                aria-describedby="emailHelp"
                placeholder="Search by name, email or phone number"
                style={{
                  color: "#ABABAB",
                  fontSize: 18,
                  border: "1px solid #000000",
                }}
              />
            </div>
          </form>
          <div className="pad-area" style={{ padding: "0% 30%" }}>
            <div className="p-flex-area">
              <p className="ph1-label">Selected people</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <img src={dotEllipse} className="m-2" alt />
                  <img src={dotEllipse} className="m-2" alt />
                  <img src={dotEllipse} className="m-2" alt />
                </div>
                <button type="button" className="btn btn-light back-opt">
                  Create Group
                </button>
              </div>
            </div>
            <p className="ph1-label">Or invite people to the group via:</p>
            <div className="d-flex">
              <img src={fbBlack} className="m-2" alt />
              <img src={inBlack} className="m-2" alt />
              <img src={twBlack} className="m-2" alt />
            </div>
            <div className="d-flex">
              <img src={copyBlack} className="m-2" alt />
              <a href="#" className="copy-p-txt m-2">
                Copy Link
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
