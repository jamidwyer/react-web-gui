import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import CloseButton from "./CloseButton.jsx";
import Title from "./Title.jsx";

// eslint-disable-next-line react/function-component-definition
const Login = ({ loginAction }) => {
  const [errorMessage, setErrorMessage] = useState(""); // eslint-disable-line no-unused-vars
  const [shown, setShown] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const back = (e) => {
    setShown(false);
    e.stopPropagation();
    navigate("/");
  };

  const signUp = (e) => {
    setShown(false);
    e.stopPropagation();
    navigate("/signup");
  };

  const resetPassword = (e) => {
    setShown(false);
    e.stopPropagation();
    navigate("/reset-password");
  };

  const onLoginClicked = async () => {
    setShown(false);
    console.log("TODO: login");
    const userData = {
      email,
      password,
    };
    loginAction(userData, "/dashboard");
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
        <Title title="Log in" />
        {errorMessage && <div className="fail">{errorMessage}</div>}
        <fieldset id="login" className="ba b--transparent ph0 mh0">
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
          <label
            className="pa0 ma0 leading-normal text-sm cursor"
            htmlFor="remember"
          >
            <input type="checkbox" id="remember" /> Remember me
          </label>
        </fieldset>
        <div>
          <input
            className="b px-3 py-2 sans-serif mt2 dim ba b--black near-white bg-near-black cursor text-sm mid-gray"
            clickHander={onLoginClicked}
            disabled={!email || !password}
            type="submit"
            value="Log in"
          />
        </div>
        <hr />
        <div className="leading-normal mt-3">
          <Link
            onClick={signUp}
            className="text-sm link dim black block"
            to="/signup"
          >
            Sign Up
          </Link>
          <Link
            onClick={resetPassword}
            className="text-sm link dim black block"
            to="/reset-password"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  ) : null;
};

Login.propTypes = {
  loginAction: PropTypes.func.isRequired,
};

export default Login;
