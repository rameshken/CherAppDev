import React from "react";
import "../../../../assets/homebuyer/_barpopup.scss";

export const HowCanWeHelpYou = () => {
  return (
    <div>
      <div>
        <h1
          className="h1-head-txts"
          style={{ width: "100%", marginBottom: "3%" }}
        >
          How can we help you?
        </h1>
        <div className="d-flex" style={{ padding: "0% 29%" }}>
          <div className="mb-3" style={{ padding: "0% 2%", width: "50%" }}>
            <label htmlFor="exampleInputEmail1" className="form-label ph-label">
              First Name *
            </label>
            <input
              type="email"
              className="form-control phone-input"
              id="firstname"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3" style={{ padding: "0% 2%", width: "50%" }}>
            <label htmlFor="exampleInputEmail1" className="form-label ph-label">
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
        <div className="mb-3" style={{ padding: "0% 30%" }}>
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
        <div style={{ padding: "0% 30%" }}>
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
          <button className="btn btn-primary cont-opt">Submit</button>
        </div>
      </div>
    </div>
  );
};
