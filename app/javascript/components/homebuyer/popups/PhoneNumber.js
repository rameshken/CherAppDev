import React from "react";
import "../../../../assets/homebuyer/_barpopup.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const PhoneNumber = ({ formData }) => {
  // const {
  //   phoneNumber,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  //   reset,
  // } = useForm({
  //   mode: "onTouched",
  // });

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div>
      <div>
        <h1 className="h1-head-txts" style={{ width: "100%" }}>
          What is your phone number?
        </h1>
        <p className="loc-head-p-txt">
          We need this information to walk you through our process.
        </p>
        <div className="mb-3" style={{ padding: "0% 30%" }}>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <label htmlFor="exampleInputEmail1" className="form-label ph-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control phone-input"
            aria-describedby="emailHelp"
            placeholder="xxxxx xxxxx"
            id="phonenum"
            value={formData.phone}
            // onChange={(event) =>
            //   setFormData({
            //     ...formData,
            //     phone: event.target.value,
            //   })
            // }
            // {...phoneNumber("phoneNum", {
            //   required: "Enter a phone number",

            //   pattern: {
            //     value: /(6|7|8|9)\d{9}/,
            //     message: "Enter a valid phone number",
            //   },
            // })}
          />
          {/* </form> */}

          {/* {errors.phoneNum && (
            <small className="danger-txt">{errors.number.message}</small>
          )} */}
        </div>
      </div>
    </div>
  );
};
