import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../assets/stylesheets/components/_homebuyer.scss";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

const options = [
  { value: "Santa Monica", label: "Santa Monica" },
  { value: "Los Angeles", label: "Los Angeles" },
  { value: "California", label: "California" },
];
const budget = [
  { value: "$100K", label: "$100K" },
  { value: "$200K", label: "$200K" },
  { value: "$300K", label: "$300K" },
];

const bed = [
  { value: "1Bed", label: "1Bed" },
  { value: "2Bed", label: "2Bed" },
  { value: "3Bed", label: "3Bed" },
];

const type = [
  { value: "Indvidual", label: "Indvidual" },
  { value: "Apartment", label: "Apartment" },
  { value: "Condonium", label: "Condonium" },
];

function HomeBuyerTopNav(props) {
  return (
    <div className="bg-blueish">
      <div className="container1 p-2">
        <div className="row mt-2">
          <div className="col-md-1"></div>

          <div className="col-md-3">
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
            />
          </div>
          <div className="col-md-2">
            <Select
              placeholder={<div>Monthly Budget</div>}
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={budget}
            />
          </div>

          <div className="col-md-2">
            <Select
              placeholder={<div>Bed</div>}
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={bed}
            />
          </div>

          <div className="col-md-2">
            <Select
              placeholder={<div>Type</div>}
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={type}
            />
          </div>

          <div className="col-md-2">
            <button className="btn cst-white-btn">More Filters</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBuyerTopNav;
