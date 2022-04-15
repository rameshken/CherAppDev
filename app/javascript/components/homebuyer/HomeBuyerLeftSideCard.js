import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import image from "../../../assets/images/homebuyer/icon/img.jpg";
import redHeart from ".../../../assets/images/homebuyer/images/red-heart.png";
import "../../../assets/homebuyer/_modal.scss";
import "../../../assets/stylesheets/components/_homebuyer.scss";
import blackHeart from "../../../assets/homebuyer/images/heart-black.png";

// import Modal from "react-modal";
import { SignupPopup } from "./SignupPopup";

const cardInfo = {
  id: 1,
  ownership: "1/3",
  perShare: "$53,890",
  beds: 3,
  baths: 2,
  sqft: 3450,
  address: "Delhi",
};

function HomeBuyerLeftSideCard({ cardClicked, setCardClicked }) {
  const [img, setImg] = useState(true);
  const [modal, setModal] = useState(false);
  const [isAddToGroup, setIsAddToGroup] = useState(false);
  const [isMessage, setIsMessage] = useState(false);

  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  // if (modal) {
  //   document.body.classList.add("active-modal");
  // }

  return (
    <div className="col-12 buyerbox mt-3">
      <div className="row d-flex">
        <div
          className="col-md-5 pm0 buy-img"
          onClick={() => {
            setCardClicked(!cardClicked);
          }}
        >
          <img src={image} className="img-cards-homebuyer" alt=""></img>
        </div>
        <div className="col-md-7 pl2">
          <div className="col-12 pm0 row dflex">
            <div
              className="col-10 pm0"
              onClick={() => {
                setCardClicked(!cardClicked);
              }}
            >
              <p className="pm0">{cardInfo.ownership} ownership</p>
              <h3 className="card-h3 mt-1">
                <strong>{cardInfo.perShare}</strong>/share
              </h3>
            </div>
            <div
              className="col-2 pm0 f27"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setImg(!img);
              }}
            >
              {img ? (
                <img
                  style={{ width: "27px", height: "27px" }}
                  src={blackHeart}
                  alt=""
                  onClick={() => dispatch(addFavourite(cardInfo))}
                />
              ) : (
                <img
                  style={{ width: "27px", height: "27px" }}
                  src={redHeart}
                  alt=""
                />
              )}
            </div>
          </div>
          <hr className="wid-hr"></hr>
          <div className="col-12 pm0 bed-section row">
            <div className="col pm0">
              <p
                className="pm0"
                onClick={() => {
                  setCardClicked(!cardClicked);
                }}
              >
                <i class=" fa fa-bed"></i>&nbsp; {cardInfo.beds} beds
              </p>
            </div>
            <div className="col pm0">
              <p>
                <i class="fa fa-bath"></i>&nbsp; {cardInfo.baths} Baths{" "}
              </p>
            </div>
            <div className="col pm0">
              <p>
                <i class="fa fa-clone"></i>&nbsp; {cardInfo.sqft} sqft{" "}
              </p>
            </div>
          </div>
          <div
            className="col-12 mt-1 mb-4 pm0 bed-section row"
            onClick={() => {
              setCardClicked(!cardClicked);
            }}
          >
            <h5 class="pm0  bed-h5">4793 N Mayfield Avenue</h5>
            <p class="pm0 mt-1 bed-p">San Bernardino, CA 92407 </p>
          </div>
          <div className="col-12  pm0 mb-2 bed-section row">
            <div class="col-md-6 pm0">
              <button
                className="btn btn-text-dark w-100 btn-primary"
                onClick={() => {
                  setModal(true);
                  setIsAddToGroup(true);
                }}
              >
                Add to Groups
              </button>
            </div>
            <div class="col-md-6  pm0">
              <button
                className="btn float-right btn-text-light  btn-outline-dark"
                onClick={() => {
                  setModal(true);
                  setIsMessage(true);
                }}
              >
                Message
              </button>
              <SignupPopup
                show={modal}
                setModal={setModal}
                isAddToGroup={isAddToGroup}
                setIsAddToGroup={setIsAddToGroup}
                isMessage={isMessage}
                setIsMessage={setIsMessage}
              />
            </div>
          </div>
        </div>
      </div>
      {/* {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="over-lay">
            <div className="modal-content">
              <SignupPopup />
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default HomeBuyerLeftSideCard;
