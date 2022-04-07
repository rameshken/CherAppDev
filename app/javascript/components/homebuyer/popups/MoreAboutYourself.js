import React from "react";
import "../../../../assets/homebuyer/_barpopup.scss";

export const MoreAboutYourself = ({ formData, setFormData }) => {
  return (
    <div>
      <div>
        <h1 className="h1-head-txts" style={{ width: "100%" }}>
          Tell us more about yourself!
        </h1>
        <p className="loc-head-p-txt">
          This information will help you and other co-buyers decide if you’re a
          good match.
        </p>
        <input
          type="text"
          className="form-control text-input"
          id="textreview"
          aria-describedby="emailHelp"
          placeholder="Checkout this house!"
          style={{ margin: "0% 30%", width: "40%", height: 143 }}
          value={formData.moreInfo}
          onChange={(event) =>
            setFormData({
              ...formData,
              moreInfo: event.target.value,
            })
          }
        />
      </div>
    </div>
  );
};
