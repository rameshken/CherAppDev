import React from "react";
import "../../../../assets/homebuyer/_barpopup.scss";
import plusCircle from "../../../../assets/images/homebuyer/images/pluscircle-icon.png";
import santaMonica from "../../../../assets/images/homebuyer/images/santamonica.png";
import yellowCircle from "../../../../assets/images/homebuyer/images/yellowcircle.png";
import closeIcon from "../../../../assets/images/homebuyer/images/closeicon.png";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { SearchBar } from "../autosearchbar/SearchBar";

export const InterestedCities = () => {
  const [cities, setCities] = useState([
    {
      city: "Santa Monica",
      image: santaMonica,
      id: 1,
      isSelected: false,
    },
    {
      city: "Los Angeles",
      image: santaMonica,
      id: 2,
      isSelected: false,
    },
    {
      city: "San Francisco",
      image: santaMonica,
      id: 3,
      isSelected: false,
    },
    {
      city: "New York",
      image: santaMonica,
      id: 4,
      isSelected: false,
    },
    {
      city: "London",
      image: santaMonica,
      id: 5,
      isSelected: false,
    },
    {
      city: "Delhi",
      image: santaMonica,
      id: 6,
      isSelected: false,
    },
  ]);
  const [color, setColor] = useState("white");

  return (
    <div>
      <div>
        <div className="location-head-txt d-flex justify-content-center align-items-center">
          <h1 className="h1-head-txts">
            Please select cities you’re interested in
          </h1>
        </div>
        <p className="loc-head-p-txt">
          The more cities you select, the greater your chance of success
        </p>
        <div className="d-flex justify-content-center align-items-center sel-area">
          {/* <select name="location" id="location">
            <option value="LA">Los Angels</option>
          </select> */}
          <SearchBar />
        </div>
        <div className="d-flex justify-content-center align-items-center m-2">
          {cities.map((city) => {
            return (
              <div className="d-flex m-2">
                {city.isSelected && (
                  <div className="city-box d-flex justify-content-center align-items-center">
                    <p
                      className="m-2 city-box-p"
                      style={{ marginBottom: "0px" }}
                    >
                      {city.city}
                    </p>
                    <img
                      className="m-1"
                      style={{
                        width: "17px",
                        height: "17px",
                        cursor: "pointer",
                      }}
                      alt=""
                      src={closeIcon}
                      onClick={() => {
                        setCities(
                          cities.map((c) => {
                            if (c.id === city.id) {
                              c.isSelected = !c.isSelected;
                            }
                            return c;
                          })
                        );
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          className="d-flex"
          style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
        >
          <div className="row" style={{ width: "auto" }}>
            <div className="col-md-12 row">
              {cities.map((city) => {
                return (
                  <div className="col-md-4">
                    <div>
                      <div
                        className="location-box mb-5"
                        style={{
                          width: "95%",
                          border: "1px solid #dcdde4",
                          borderRadius: 12,
                          backgroundColor: color,
                        }}
                      >
                        <img src={city.image} className="w-100" alt="" />
                        <div className="loc-des-add d-flex justify-content-between align-items-center">
                          <p
                            className="main-cards-p-txt"
                            style={{ margin: "0.5rem" }}
                          >
                            {city.city}
                          </p>
                          <img
                            style={{ margin: "0.5rem" }}
                            src={!city.isSelected ? plusCircle : yellowCircle}
                            onClick={() => {
                              setColor(city.isSelected ? "white" : "#DAE0FF");
                              city.isSelected = !city.isSelected;
                              setCities([...cities]);
                            }}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
