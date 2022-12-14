import { useState } from "react";
import { useAppDispatch } from "../../../redux/hook";
import { LoginProps } from "../Login.component/Login.types";
import { signUp } from "../../../redux/reducers/authSlice";

export const SignUp = ({ setAuthVal }: LoginProps) => {
  const dispatch = useAppDispatch();
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const signUpHandler = () => {
    dispatch(signUp(signUpDetails));
  };

  console.log(signUpDetails);
  return (
    <>
      <main className="login-main">
        <div className="login-container">
          <div className="login-body">
            <p className="h3 color capitalize fW-700 text-center">sign up</p>

            <div className="input-box mgT-20">
              <label className="textarea-label">email</label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="you@example.com"
                value={signUpDetails.email}
                onChange={(e) => {
                  setSignUpDetails({
                    ...signUpDetails,
                    email: e.target.value,
                  });
                }}
              />
            </div>

            <div className="input-box mgT-20">
              <label className="textarea-label">first name</label>
              <input
                id="first-name"
                type="text"
                className="input"
                placeholder="First Name"
                value={signUpDetails.firstName}
                onChange={(e) => {
                  setSignUpDetails({
                    ...signUpDetails,
                    firstName: e.target.value,
                  });
                }}
              />
            </div>

            <div className="input-box mgT-20">
              <label className="textarea-label">last name</label>
              <input
                id="last-name"
                type="email"
                className="input"
                placeholder="Last Name"
                value={signUpDetails.lastName}
                onChange={(e) => {
                  setSignUpDetails({
                    ...signUpDetails,
                    lastName: e.target.value,
                  });
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
                value={signUpDetails.password}
                onChange={(e) => {
                  setSignUpDetails({
                    ...signUpDetails,
                    password: e.target.value,
                  });
                }}
              />
            </div>

            <div className="login-remember-ad-forget-pass dis-f">
              <div className="remen-me mgT-20">
                <input type="checkbox" />
                <label className="textarea-label">
                  i accept all terms & conditions{" "}
                </label>
              </div>
            </div>
            <button
              className="btn solid-pri-btn width100 mgT-20"
              onClick={() => {
                signUpHandler();
              }}
            >
              sign up
            </button>

            <p
              className="h5 color capitalize fW-500 text-center mgT-20 cursor"
              onClick={() => {
                setAuthVal(true);
              }}
            >
              already have a account{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
