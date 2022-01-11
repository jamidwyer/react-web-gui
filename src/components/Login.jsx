import React, { useState } from "react";
import Title from "./Title";

// eslint-disable-next-line react/function-component-definition
const Login = () => {
  const [errorMessage, setErrorMessage] = useState(""); // eslint-disable-line no-unused-vars
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClicked = async () => {
    console.log("TODO: login");
  };
  return (
    <div className="measure">
      <Title title="Log in" />
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
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
        <label
          className="pa0 ma0 lh-copy f6 pointer"
          htmlFor="remember"
        >
          <input type="checkbox" id="remember" /> Remember me
        </label>
      </fieldset>
      <div>
        <input
          className="b ph3 pv2 mt2 dim ba b--black bg-transparent pointer f6 mid-gray"
          onClick={onLoginClicked}
          disabled={!email || !password}
          type="submit"
          value="Log in"
        />
      </div>
      <div className="lh-copy mt3">
        <a
          href="#0"
          className="f6 link dim black db"
          onClick={() => console.log("todo: signup")}
        >
          Sign up
        </a>
        <a
          href="#0"
          className="f6 link dim black db"
          onClick={() => console.log("todo: password reset")}
        >
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

export default Login;
