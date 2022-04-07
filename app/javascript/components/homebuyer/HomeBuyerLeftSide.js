import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import icon from "../../../assets/images/homebuyer/icon/ico.jpg";

import { HomebuyerTab } from "./homebuyerTab/HomebuyerTab";

function HomeBuyerLeftSide(props) {
  return (
    <div className="col-md-6 pt5">
      <div className="row  pt-1">
        <div className="col-md-12">
          <div className="row">
            <div className="col-12 pl2 mb-4 mt-3">
              <p className="pm0 normal-text">1890+ search results</p>
              <h3 className="pm0 mt-2 heading-new-text">
                Homes in Santa Monica
              </h3>
              <div className="dflex pm0">
                <div>
                  <img src={icon} className="pm0 ico" alt=""></img>
                </div>
                <div className="pl1">
                  <p className="pt-3  subheading-new-text">
                    increase your buying power with more co-buyers{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* card */}
            {/* <div
              className='main-cards-display'
              style={{ height: '60vh', overflowY: 'scroll' }}
            >
              <HomeBuyerLeftSideCard />
              <HomeBuyerLeftSideCard />
              <HomeBuyerLeftSideCard />
            </div> */}

            <HomebuyerTab />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBuyerLeftSide;
