import React from "react";
// check
import { Tab, Tabs } from "react-bootstrap";
import HomeBuyerLeftSideCard from "../HomeBuyerLeftSideCard";
import "../../../../assets/homebuyer/_HomebuyerTab.scss";
export const HomebuyerTab = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="3 co-buyers"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="1 co-buyer" title="1 co-buyer">
          <h1>Tab1</h1>
        </Tab>
        <Tab eventKey="2 co-buyers" title="2 co-buyers">
          <h1>Tab2</h1>
        </Tab>
        <Tab eventKey="3 co-buyers" title="3 co-buyers">
          <HomeBuyerLeftSideCard />
          <HomeBuyerLeftSideCard />
          <HomeBuyerLeftSideCard />
        </Tab>
        <Tab eventKey="4 co-buyers" title="4 co-buyers">
          <h1>Tab4</h1>
        </Tab>
      </Tabs>

      {/* <div className="container-tabs">
        <div className="block-tabs">
          <div className="tabs" onClick={displayTab}>
            1 cobuyer
          </div>
          <div className="tabs">2 cobuyer</div>
          <div className="tabs tabs-act">3 cobuyer</div>
          <div className="tabs">4 cobuyer</div>
        </div>
        <div className="tab-contents">
          <div className="content">
            <h1>Hello</h1>
          </div>
          <div className="content">
            <h1>Hello 1</h1>
          </div>
          <div className="content act-content">
            <h1>Hello 2</h1>
          </div>
          <div className="content">
            <h1>Hello 3</h1>
          </div>
        </div>
      </div> */}
    </div>
  );
};
