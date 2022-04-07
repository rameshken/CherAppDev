import React from "react";
import "../../../../assets/homebuyer/_barpopup.scss";
import { Form } from "react-bootstrap";

export const MonthlyRent = () => {
  return (
    <div>
      <div style={{ marginBottom: "20rem" }}>
        <div className="location-head-txt d-flex justify-content-center align-items-center">
          <h1 className="h1-head-txts">What is your monthly rent?</h1>
        </div>
        {/* <div className="amount-sel-area d-flex justify-content-center align-items-center">
          <select name="amount" id="amount" style={{ width: "40%" }}>
            <option value="$1500-$2000">$1500 - $2000</option>
            <option value="$2000-$2500">$2000 - $2500</option>
            <option value="$2500-$3000">$2500 - $3000</option>
            <option value="$3500-$4000">$3500 - $4000</option>
            <option value="Over$4000">Over $4000</option>
          </select>
        </div> */}
        <div className="d-flex justify-content-center align-items-center">
          <Form.Select size="lg" style={{ width: "80%" }}>
            <option value="$1500-$2000">$1500 - $2000</option>
            <option value="$2000-$2500">$2000 - $2500</option>
            <option value="$2500-$3000">$2500 - $3000</option>
            <option value="$3500-$4000">$3500 - $4000</option>
            <option value="Over$4000">Over $4000</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
};
