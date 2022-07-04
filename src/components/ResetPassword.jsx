import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import CloseButton from "./CloseButton";

// eslint-disable-next-line react/function-component-definition
const ResetPassword = () => {
  const [errorMessage, setErrorMessage] = useState(""); // eslint-disable-line no-unused-vars
  const [shown, setShown] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const back = (e) => {
    setShown(false);
    e.stopPropagation();
    navigate("/");
  };

  const onResetPasswordClicked = async () => {
    setShown(false);
    console.log("TODO: signup");
  };
  return shown ? (
    <div // eslint-disable-line
      onClick={back}
      tabIndex={0}
      role="button"
      className="rui-modal-bg flex h-100"
    >
      <div className="rui-modal center v-mid pa4 bg-washed-red relative">
        <CloseButton />
        <Title title="Reset Password" />
        {errorMessage && <div className="fail">{errorMessage}</div>}
        <fieldset className="ba b--transparent ph0 mh0">
          <div className="mt3">
            <label htmlFor="email" className="db fw6 lh-copy f6">
              Email
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@gmail.com"
                className="w-100"
              />
            </label>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">
              Password
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="w-100"
              />
            </label>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">
              Confirm Password
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="confirm password"
                className="w-100"
              />
            </label>
          </div>
          <label
            className="pa0 ma0 lh-copy f6 pointer"
            htmlFor="remember"
          >
            <input type="checkbox" id="remember" /> Remember me
          </label>
        </fieldset>
        <div>
          <input
            className="b ph3 pv2 sans-serif mt2 dim ba b--black near-white bg-near-black pointer f6 mid-gray"
            onClick={onResetPasswordClicked}
            disabled={
              !email || !password || password !== confirmPassword
            }
            type="submit"
            value="Reset Password"
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default ResetPassword;
