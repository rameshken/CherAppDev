import React from "react";
import "../../../../assets/homebuyer/_barpopup.scss";
import { useForm } from "react-hook-form";

export const YourName = ({ formData, setFormData }) => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div>
      <div>
        <h1 className="h1-head-txts" style={{ width: "100%" }}>
          What is your name?
        </h1>

        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <div className="mb-3" style={{ padding: "0% 30%" }}>
          <label htmlFor="exampleInputEmail1" className="form-label ph-label">
            First Name
          </label>
          <input
            type="email"
            className="form-control phone-input"
            id="firstname"
            aria-describedby="emailHelp"
            value={formData.firstName}
            onChange={(event) =>
              setFormData({
                ...formData,
                firstName: event.target.value,
              })
            }
            // {...register("email", {
            //   required: "Enter an email",
            // })}
          />
          {/* {errors.email && (
              <small className="danger-txt">{errors.email.message}</small>
            )} */}
        </div>
        <div className="mb-3" style={{ padding: "0% 30%" }}>
          <label htmlFor="exampleInputEmail1" className="form-label ph-label">
            Last Name
          </label>
          <input
            type="email"
            className="form-control phone-input"
            id="lastname"
            aria-describedby="emailHelp"
            value={formData.lastName}
            onChange={(event) =>
              setFormData({
                ...formData,
                lastName: event.target.value,
              })
            }
          />
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};
