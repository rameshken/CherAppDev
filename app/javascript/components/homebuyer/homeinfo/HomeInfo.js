import React from "react";
import "./homeinfo.css";
import cherLogo from "../../../../assets/images/homebuyer/images/main-logo.png";
import homeImageRight from "../../../../assets/images/homebuyer/images/hinfoimg1.png";
import homeImageTop from "../../../../assets/images/homebuyer/images/himg2.png";
import homeImageBot from "../../../../assets/images/homebuyer/images/himg3.png";
import iconBed from "../../../../assets/images/homebuyer/images/bedicon.png";
import iconBath from "../../../../assets/images/homebuyer/images/bathicon.png";
import iconSq from "../../../../assets/images/homebuyer/images/sqicon.png";
import gIcon1 from "../../../../assets/images/homebuyer/images/gicon1.png";
import gIcon2 from "../../../../assets/images/homebuyer/images/gicon2.png";
import gIcon3 from "../../../../assets/images/homebuyer/images/gicon3.png";
import gIcon4 from "../../../../assets/images/homebuyer/images/gicon4.png";
import gIcon5 from "../../../../assets/images/homebuyer/images/gicon5.png";
import gIcon6 from "../../../../assets/images/homebuyer/images/gicon6.png";
import gIcon7 from "../../../../assets/images/homebuyer/images/gicon7.png";
import gIcon8 from "../../../../assets/images/homebuyer/images/gicon8.png";
import shareIcon from "../../../../assets/images/homebuyer/images/sharei.png";
import saveIcon from "../../../../assets/images/homebuyer/images/savei.png";
import greyEllipse from "../../../../assets/images/homebuyer/images/greyellipse.png";
import grpImg from "../../../../assets/homebuyer/images/grpimg.png";


export const HomeInfo = () => {
  return (
    <div>
      <div>
        <section
          style={{
            padding: "1rem",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="cher-logo-homebuyer" style={{ marginLeft: "2rem" }}>
              <img src={cherLogo} alt />
            </div>
            <div className="nav-comps d-flex">
              <a
                className="top-link p-3 mr-3"
                style={{ fontWeight: "bold" }}
                href="#"
              >
                Listings
              </a>
              <a className="top-link p-3 mr-3" href="#">
                Community
              </a>
              <a className="top-link p-3 mr-3" href="#">
                Learn
              </a>
              <button
                type="button"
                className="btn btn-light sign-up-btn d-flex justify-content-center align-items-center"
              >
                Get Loan
              </button>
              <button
                type="button"
                className="btn btn-light sign-in-btn d-flex justify-content-center align-items-center top-btn"
              >
                Sign In
              </button>
            </div>
          </div>
        </section>
        <section style={{ padding: "2rem 4rem" }}>
          <div className="row">
            <div className="col-md-7">
              <img
                style={{ height: "64vh", width: "100%" }}
                src={homeImageRight}
                alt
              />
            </div>
            <div className="col-md-5">
              <div className="row">
                <img
                  src={homeImageTop}
                  style={{
                    width: "100%",
                    height: "31vh",
                    marginBottom: "0.4em",
                  }}
                  alt
                />
              </div>
              <div className="row">
                <img
                  src={homeImageBot}
                  style={{ width: "100%", height: "31vh", marginTop: "0.5em" }}
                  alt
                />
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "1rem 4rem" }}>
          <div className="row" style={{ paddingRight: "2rem" }}>
            <div className="col-md-9">
              <div
                className="home-info-txt-area"
                style={{ borderBottom: "2px solid #eff3f8", width: "95%" }}
              >
                <h3 className="homeinfo-head">
                  4793 N Mayfield Avenue,
                  <span style={{ fontWeight: "normal" }}>
                    San Bernardino, CA 92407
                  </span>
                </h3>
                <div className="txt card-list mt-1">
                  <ul>
                    <li style={{ marginRight: "1rem" }}>
                      <img src={iconBed} alt />
                      <span
                        className="bot-small mb-0"
                        style={{ fontSize: 18, color: "#1c3360" }}
                      >
                        2 beds
                      </span>
                    </li>
                    <li style={{ marginRight: "1rem" }}>
                      <img src={iconBath} alt />
                      <span
                        className="bot-small mb-0"
                        style={{ fontSize: 18, color: "#1c3360" }}
                      >
                        2 baths
                      </span>
                    </li>
                    <li style={{ marginRight: "1rem" }}>
                      <img src={iconSq} alt />
                      <span
                        className="bot-small mb-0"
                        style={{ fontSize: 18, color: "#1c3360" }}
                      >
                        3450 sqft
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h5 className="overview-txt pt-2">Overview</h5>
              <p className="overview-p" style={{ width: "70%" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut arcu laoreet, fringilla ligula fermentum, pharetra
                odio. Morbi pulvinar ipsum nec orci pulvinar, vitae interdum
                quam venenatis. Vivamus vel tellus id quam accumsan porttitor.
                Ut tempus sed dui vitae tempor.
              </p>
              <div className="violet-head">
                <div className="bg-violet p-2" style={{ width: "90%" }}>
                  <p style={{ marginBottom: 0 }}>Facts and features</p>
                </div>
                <div className="descrp-area d-flex">
                  <ul>
                    <li className="d-flex align-items-center">
                      <img src={gIcon1} className="m-1" alt />
                      <p className="m-1">Year built : 1997</p>
                    </li>
                    <li className="d-flex align-items-center">
                      <img src={gIcon2} className="m-1" alt />
                      <p className="m-1">Effective year built: 1998</p>
                    </li>
                    <li className="d-flex align-items-center">
                      <img src={gIcon3} className="m-1" alt />
                      <p className="m-1">Stories: 2+A</p>
                    </li>
                    <li className="d-flex align-items-center">
                      <img src={gIcon4} className="m-1" alt />
                      <p className="m-1"># of Units: 1</p>
                    </li>
                  </ul>
                  <ul>
                    <li className="d-flex align-items-center">
                      <img src={gIcon5} className="m-1" alt />
                      <p className="m-1">Parking: detached garage</p>
                    </li>
                    <li className="d-flex align-items-center">
                      <img src={gIcon6} className="m-1" alt />
                      <p className="m-1">Pool type: heated pool</p>
                    </li>
                    <li className="d-flex align-items-center">
                      <img src={gIcon7} className="m-1" alt />
                      <p className="m-1">Total area: 1692 sqft</p>
                    </li>
                    <li className="d-flex align-items-center">
                      <img src={gIcon8} className="m-1" alt />
                      <p className="m-1">Other areas: None</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ padding: "0%" }}>
              <div className="get-loan-card">
                <div
                  className="d-flex align-items-center"
                  style={{
                    borderBottom: "2px solid #e4e6e9",
                    padding: "2rem 0.5rem 1rem 0.5rem",
                  }}
                >
                  <h3>$632,000</h3>
                  <img
                    src={greyEllipse}
                    style={{ width: 12, height: 12 }}
                    alt
                  />
                  <p className="txt13">1/3 ownership</p>
                </div>
                <div
                  className="area2"
                  style={{
                    borderBottom: "2px solid #e4e6e9",
                    padding: "0.5rem 1rem",
                  }}
                >
                  <p>Total # of Co-buyers</p>
                  <h4>3 people</h4>
                  <div className="sliderContainers">
                    <input
                      type="range"
                      defaultValue={0}
                      min={0}
                      max={4}
                      id="slider"
                    />
                  </div>
                </div>
                <div
                  className="area3"
                  style={{
                    borderBottom: "2px solid #e4e6e9",
                    padding: "0.5rem 1rem",
                  }}
                >
                  <p>Who’s flagged this property</p>
                  <div className="d-flex">
                    // <img src={grpImg} alt />
                    <button
                      type="button"
                      className="btn btn-light sign-in-btn d-flex justify-content-center align-items-center top-btn"
                      style={{
                        width: 63,
                        height: 37,
                        color: "#1c3360",
                        marginLeft: "5rem",
                        border: "1px solid #1c3360",
                        borderRadius: 3,
                      }}
                    >
                      More
                    </button>
                  </div>
                </div>
                <div className="area4" style={{ padding: "0.5rem 1rem" }}>
                  <button
                    type="button"
                    className="btn btn-light sign-up-btn d-flex justify-content-center align-items-center"
                    style={{ width: "100%", borderRadius: 3 }}
                  >
                    Get Loan
                  </button>
                  <div className="d-flex">
                    <ul className="d-flex link-list">
                      <li className="d-flex" style={{ margin: "1rem" }}>
                        <img src={shareIcon} className="m-1" alt />
                        <a href="#" className="m-1">
                          Share
                        </a>
                      </li>
                      <li className="d-flex" style={{ margin: "1rem" }}>
                        <img src={saveIcon} className="m-1" alt />
                        <a href="#" className="m-1">
                          Save
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
