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
    console.log("TODO: signup"); // eslint-disable-line
  };
  return shown ? (
    <div // eslint-disable-line
      onClick={back}
      tabIndex={0}
      role="button"
      className="rui-modal-bg flex h-100"
    >
      <div className="rui-modal center v-mid p-4 bg-washed-red relative">
        <CloseButton />
        <Title title="Reset Password" />
        {errorMessage && <div className="fail">{errorMessage}</div>}
        <fieldset className="ba b--transparent ph0 mh0">
          <div className="mt-3">
            <label
              htmlFor="email"
              className="block fw6 leading-normal text-sm"
            >
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
            <label
              className="block fw6 leading-normal text-sm"
              htmlFor="password"
            >
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
            <label
              className="block fw6 leading-normal text-sm"
              htmlFor="password"
            >
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
            className="pa0 ma0 leading-normal text-sm cursor"
            htmlFor="remember"
          >
            Remember me
          </label>
          <input type="checkbox" name="remember" />
        </fieldset>
        <div>
          <input
            className="b px-3 py-2 sans-serif mt2 dim ba b--black near-white bg-near-black cursor text-sm mid-gray"
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
