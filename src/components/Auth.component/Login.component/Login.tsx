import React, { useState } from "react";
import "./login.css";
import { LoginProps } from "./Login.types";
import { useAppDispatch } from "../../../redux/hook";
import { login } from "../../../redux/reducers/authSlice";
import { ChangeEvent, MouseEvent } from "react";

export const Login = ({ setAuthVal }: LoginProps) => {
  const dispatch = useAppDispatch();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginDetails((prevDetail) => ({
      ...prevDetail,
      [e.target.name]: e.target.value,
    }));
  };

  const loginHandler = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(login(loginDetails));
  };
  const credentialHandler = () => {
    setLoginDetails((prev) => ({
      ...prev,
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    }));
  };

  return (
    <>
      <main className="login-main">
        <div className="login-container">
          <div className="login-body">
            <p className="h3 color capitalize fW-700 text-center">login</p>
            <div className="input-box mgT-20">
              <label className="textarea-label">email</label>
              <input
                id="text"
                type="text"
                className="input"
                placeholder="Raman deep"
                value={loginDetails.email}
                onChange={(e) => {
                  changeHandler(e);
                }}
              />
            </div>

            <div className="input-box mgT-20">
              <label className="textarea-label">password</label>
              <input
                id="password"
                type="password"
                className="input"
                placeholder="**********"
                value={loginDetails.password}
                onChange={(e) => {
                  changeHandler(e);
                }}
              />
            </div>
            <div className="login-remember-ad-forget-pass dis-f">
              <div className="remen-me mgT-20">
                <input type="checkbox" />
                <label className="textarea-label">Remember Me</label>
              </div>
              <div className="forget-pass">
                <span
                  className="textarea-label"
                  onClick={() => credentialHandler()}
                >
                  TEST LOGIN ?
                </span>
              </div>
            </div>
            <button
              className="btn solid-pri-btn width100 mgT-20"
              onClick={(e) => loginHandler(e)}
            >
              login
            </button>

            <p
              className="h5 color capitalize fW-500 text-center mgT-20 cursor"
              onClick={() => {
                setAuthVal(false);
              }}
            >
              create new account &#62;
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
