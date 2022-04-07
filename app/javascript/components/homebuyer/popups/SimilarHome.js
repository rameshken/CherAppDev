import React from "react";
import "./similarhome.css";
import imgJohn from "../../../../assets/images/homebuyer/images/john.png";
import redHeart from "../../../../assets/images/homebuyer/images/red-heart.png";
import smHome from "../../../../assets/images/homebuyer/images/home-small.png";
import smLink from "../../../../assets/images/homebuyer/images/link-small.png";

export const SimilarHome = () => {
  return (
    <div>
      <div>
        <div
          className="d-flex justify-content-left align-items-center"
          style={{ flexDirection: " column" }}
        >
          <h1 className="maincard-head-txt">
            People who have <img src={redHeart} alt /> similar homes
          </h1>
          <div className="similar-homesarea-cards">
            <div className="similar-home-card">
              <div className="d-flex row">
                <div className="profile-img-simhome d-flex justify-content-center align-items-center col-md-2">
                  <img src={imgJohn} alt />
                </div>
                <div className="icon-des-list col-md-5">
                  <h3>John</h3>
                  <div className="d-flex justify-content-left align-items-center">
                    <img src={smHome} alt />
                    <p>1 same saved house</p>
                  </div>
                  <div className="d-flex justify-content-left align-items-center">
                    <img src={smLink} alt />
                    <p>2 mutual friends</p>
                  </div>
                </div>
                <div className="add-button-area d-flex justify-content-center align-items-center col-md-5">
                  <button
                    type="button"
                    className="btn btn-primary add-opt align-items-center"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="similar-home-card">
              <div className="d-flex row">
                <div className="profile-img-simhome d-flex justify-content-center align-items-center col-md-2">
                  <img src={imgJohn} alt />
                </div>
                <div className="icon-des-list col-md-5">
                  <h3>John</h3>
                  <div className="d-flex justify-content-left align-items-center">
                    <img src={smHome} alt />
                    <p>1 same saved house</p>
                  </div>
                  <div className="d-flex justify-content-left align-items-center">
                    <img src={smLink} alt />
                    <p>2 mutual friends</p>
                  </div>
                </div>
                <div className="add-button-area d-flex justify-content-center align-items-center col-md-5">
                  <button
                    type="button"
                    className="btn btn-primary add-opt align-items-center"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="similar-home-card">
              <div className="d-flex row">
                <div className="profile-img-simhome d-flex justify-content-center align-items-center col-md-2">
                  <img src={imgJohn} alt />
                </div>
                <div className="icon-des-list col-md-5">
                  <h3>John</h3>
                  <div className="d-flex justify-content-left align-items-center">
                    <img src={smHome} alt />
                    <p>1 same saved house</p>
                  </div>
                  <div className="d-flex justify-content-left align-items-center">
                    <img src={smLink} alt />
                    <p>2 mutual friends</p>
                  </div>
                </div>
                <div className="add-button-area d-flex justify-content-center align-items-center col-md-5">
                  <button
                    type="button"
                    className="btn btn-primary add-opt align-items-center"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="similar-home-card">
              <div className="d-flex row">
                <div className="profile-img-simhome d-flex justify-content-center align-items-center col-md-2">
                  <img src={imgJohn} alt />
                </div>
                <div className="icon-des-list col-md-5">
                  <h3>John</h3>
                  <div className="d-flex justify-content-left align-items-center">
                    <img src={smHome} alt />
                    <p>1 same saved house</p>
                  </div>
                  <div className="d-flex justify-content-left align-items-center">
                    <img src={smLink} alt />
                    <p>2 mutual friends</p>
                  </div>
                </div>
                <div className="add-button-area d-flex justify-content-center align-items-center col-md-5">
                  <button
                    type="button"
                    className="btn btn-primary add-opt align-items-center"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="similar-home-card">
              <div className="d-flex row">
                <div className="profile-img-simhome d-flex justify-content-center align-items-center col-md-2">
                  <img src={imgJohn} alt />
                </div>
                <div className="icon-des-list col-md-5">
                  <h3>John</h3>
                  <div className="d-flex justify-content-left align-items-center">
                    <img src={smHome} alt />
                    <p>1 same saved house</p>
                  </div>
                  <div className="d-flex justify-content-left align-items-center">
                    <img src={smLink} alt />
                    <p>2 mutual friends</p>
                  </div>
                </div>
                <div className="add-button-area d-flex justify-content-center align-items-center col-md-5">
                  <button
                    type="button"
                    className="btn btn-primary add-opt align-items-center"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
