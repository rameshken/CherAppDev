import React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import { PopupTimeline } from "./popuptimeline/PopupTimeline";

import "../../../assets/homebuyer/_signuppop.scss";
import lnround from "../../../assets/images/homebuyer/images/linkedn-round.png";
import goround from "../../../assets/images/homebuyer/images/google-round.png";
import fbround from "../../../assets/images/homebuyer/images/fb-round.png";
import { useState } from "react";

export const SignupPopup = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setTimeModal(true);
    props.setModal(false);
    reset();
  };

  const [timeModal, setTimeModal] = useState(false);
  // console.log(errors);

  const password = watch("password");

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="des-card">
          <h2>Sign Up</h2>
          <p className="des-p-txt">
            Please sign up to add this home to a new group. You'll unlock tons
            of cool features to simplify your homeownership journey!
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                {...register("email", {
                  required: "Enter an email",
                })}
              />
              {errors.email && (
                <small className="danger-txt">{errors.email.message}</small>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                {...register("password", {
                  required: "Enter a password",
                  minLength: {
                    value: 8,
                    message: "Minimum Required length is 8",
                  },
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
                    message:
                      "password must have atleast one uppercase, one numeric value and one special character!",
                  },
                })}
              />
              {errors.password && (
                <small className="danger-txt">{errors.password.message}</small>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPasswor2"
                {...register("confirmPassword", {
                  required: "Enter a password",
                  minLength: {
                    value: 8,
                    message: "Minimum Required length is 8",
                  },
                  validate: (value) =>
                    value === password || "The passwords does not match",
                })}
              />
              {errors.confirmPassword && (
                <small className="danger-txt">
                  {errors.confirmPassword.message}
                </small>
              )}
            </div>
            <button type="submit" className="btn main-signup-btn">
              Sign Up
            </button>
          </form>
          <div className="d-flex">
            <p className="signup-opt-txt" style={{ margin: "1.5rem 0rem" }}>
              Or sign up with
            </p>
            <a href>
              <img style={{ margin: "0.8rem" }} src={fbround} alt />
            </a>
            <a href="#">
              <img style={{ margin: "0.8rem" }} src={lnround} alt />
            </a>
            <a href="#">
              <img style={{ margin: "0.8rem" }} src={goround} alt />
            </a>
          </div>
          <p className="already-acc-txt">
            Already have an account?
            <a href="#" style={{ color: "#3154f5", fontWeight: "bold" }}>
              Login
            </a>
          </p>
        </div>
      </Modal>
      <PopupTimeline show={timeModal} setModal={setTimeModal} />
    </div>
  );
};
