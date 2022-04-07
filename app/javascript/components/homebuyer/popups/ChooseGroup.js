import React from "react";
import "../../../../assets/homebuyer/_barpopup.scss";

export const ChooseGroup = () => {
  return (
    <div style={{ padding: "3% 30%" }}>
      <div>
        <h1
          className="h1-head-txts"
          style={{ width: "80%", textAlign: "left" }}
        >
          Choose which group to add this house to
        </h1>
        <p
          className="loc-head-p-txt"
          style={{ width: "80%", textAlign: "left" }}
        >
          You don’t have any groups yet. Groups are a great way to organzie
          which homes you and your co-buyers are interested in!
        </p>
        <button
          type="button"
          className="btn btn-primary cont-opt"
          style={{ width: "50%" }}
        >
          Create a new group
        </button>
      </div>
    </div>
  );
};
