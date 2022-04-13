import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import image from "../../../assets/homebuyer/icon/img.jpg";
import redHeart from ".../../../assets/homebuyer/images/red-heart.png";
import "../../../assets/stylesheets/components/_homebuyer.scss";
import "../../../assets/homebuyer/_modal.scss";
import blackHeart from "../../../assets/homebuyer/images/heart-black.png";
// import Modal from "react-modal";
import { SignupPopup } from "./SignupPopup";

const mapCardInfo = {
  id: 1,
  ownership: "1/3",
  perShare: "$53,890",
  beds: 3,
  baths: 2,
  sqft: 3450,
  address: "Delhi",
};

const MapCard = ({ cardClicked, setCardClicked }) => {
  const [img, setImg] = useState(true);
  const [favModal, setFavModal] = useState(false);

  return (
    <div className="col-12 buyerbox1 mt-3 p-2">
      <div className="row d-flex">
        <div className="col-md-3 pm0">
          <img src={image} className="img-cards-homebuyer1" alt=""></img>
        </div>
        <div className="col-md-9 pl2">
          <div className="col-12 pm0 row dflex">
            <div className="col-10 pm0">
              <p className="pm0 m-btm">{mapCardInfo.ownership}/ownership</p>
              <h3 className="card-h3 mt-1">
                <strong>{mapCardInfo.perShare}</strong>/share
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
                  onClick={() => {
                    setFavModal(true);
                  }}
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
          <hr className="wid-hr1"></hr>
          <div className="col-12 pm0 bed-section row">
            <div className="col pm0">
              <p className="pm0">
                <i className=" fa fa-bed"></i>&nbsp; {mapCardInfo.beds} beds
              </p>
            </div>
            <div className="col pm0">
              <p>
                <i className="fa fa-bath"></i>&nbsp; {mapCardInfo.baths} Baths{" "}
              </p>
            </div>
            <div className="col pm0">
              <p>
                <i className="fa fa-clone"></i>&nbsp; {mapCardInfo.sqft} sqft{" "}
              </p>
            </div>
          </div>
          <div className="col-12 mt-1 mb-4 pm0 bed-section row">
            <h5 className="pm0  bed-h5">4793 N Mayfield Avenue</h5>
            <p className="pm0 mt-1 bed-p">San Bernardino, CA 92407 </p>
          </div>
        </div>
      </div>
      <SignupPopup show={favModal} setModal={setFavModal} />
    </div>
  );
};

export default MapCard;
