import React from "react";

import { useState } from "react";
import { MonthlyRent } from "../popups/MonthlyRent";
import { InterestedCities } from "../popups/InterestedCities";
import { PhoneNumber } from "../popups/PhoneNumber";
import { YourName } from "../popups/YourName";
import { MoreAboutYourself } from "../popups/MoreAboutYourself";
import { ChooseGroup } from "../popups/ChooseGroup";
import { HowCanWeHelpYou } from "../popups/HowCanWeHelpYou";

import { Modal } from "react-bootstrap";
import "../../../../assets/homebuyer/_PopupTimeline.scss";

export const PopupTimeline = (props) => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    cities: [],
    rent: 0,
    phone: null,
    firstName: "",
    lastName: "",
    moreInfo: "",
  });

  const [groupModal, setGroupModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);

  const pageDisplay = () => {
    if (page === 0) {
      return <InterestedCities />;
    } else if (page === 1) {
      return <MonthlyRent />;
    } else if (page === 2) {
      return <PhoneNumber formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <YourName formData={formData} setFormData={setFormData} />;
    } else {
      return (
        <MoreAboutYourself formData={formData} setFormData={setFormData} />
      );
    }
  };

  // const handleContinue = () => {
  //   if (page === 4) {
  //     return <ChooseGroup />;
  //   } else {
  //     return setPage((currPage) => currPage + 1);
  //   }
  // };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => props.setModal(false)}
      >
        <Modal.Body>
          <div className="popup-container">
            <div className="d-flex justify-content-center align-items-center mt-4">
              <div className="progressbar">
                <div
                  style={{
                    width:
                      page === 0
                        ? "20%"
                        : page === 1
                        ? "40%"
                        : page === 2
                        ? "60%"
                        : page === 3
                        ? "80%"
                        : "100%",
                  }}
                ></div>
              </div>
            </div>

            <div className="body-area">{pageDisplay()}</div>
            <div className="footer-area">
              <div className="d-flex justify-content-center align-items-center">
                <button
                  disabled={page === 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                  type="button"
                  className="btn btn-light back-opt"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    setPage((currPage) => currPage + 1);
                    if (page === 4 && props.isAddToGroup) {
                      setGroupModal(true);
                      setIsAddToGroup(false);
                    }
                    if (page === 4 && props.isMessage) {
                      setMessageModal(true);
                      setIsAddToGroup(false);
                    }
                  }}
                  type="button"
                  className="btn btn-primary cont-opt"
                >
                  Continue
                </button>
                <button
                  hidden={page <= 3}
                  type="button"
                  className="btn btn-light skip-opt"
                  style={{ border: 0, backgroundColor: "white" }}
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <ChooseGroup show={groupModal} setModal={setGroupModal} />
      <HowCanWeHelpYou show={messageModal} setModal={setMessageModal} />
    </div>
  );
};
