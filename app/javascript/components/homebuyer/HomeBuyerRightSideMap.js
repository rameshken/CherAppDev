import React from "react";
import GoogleMapReact from "google-map-react";
import "bootstrap/dist/css/bootstrap.css";
import  MapCard  from "./MapCard";

function HomeBuyerRightSideMap({ cardClicked }) {
  const coordinates = {
    lat: 0,
    lng: 0,
  };
  return (
    <div className="col-md-6 pt5">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCSLSZ4uesQ-2Er85fECnQJ_5kuGteLrWY' }}
        style={{ height: "90vh" }}
        defaultZoom={10}
        resetBoundsOnResize={true}
        defaultCenter={{ lat: 47.36667, lng: 8.55 }}
      >
        {cardClicked && <MapCard />}
      </GoogleMapReact> 
    </div>
  );
}

export default HomeBuyerRightSideMap;
