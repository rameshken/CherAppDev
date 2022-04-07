import React from "react";
import GoogleMapReact from "google-map-react";
import "bootstrap/dist/css/bootstrap.css";

function HomeBuyerRightSideMap(props) {
  const coordinates = {
    lat: 0,
    lng: 0,
  };
  return (
    <div className="col-md-6 pt5">
      <GoogleMapReact
        style={{ height: "80vh" }}
        defaultZoom={10}
        resetBoundsOnResize={true}
        defaultCenter={{ lat: 47.36667, lng: 8.55 }}
      />
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        defaultZoom={10}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact> */}
    </div>
  );
}

export default HomeBuyerRightSideMap;
