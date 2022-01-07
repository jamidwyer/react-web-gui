import React, { useState } from "react";
import Title from "../components/Title";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLoginClicked = async () => {
    console.log("TODO: login");
  };
  return (
    <div className="measure">
      <Title title="Log in" />
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
        <div class="mt3">
          <label class="db fw6 lh-copy f6" for="email">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@gmail.com"
            className="w-100"
          />
        </div>
        <div class="mv3">
          <label class="db fw6 lh-copy f6" for="password">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-100"
          />
        </div>{" "}
        <label class="pa0 ma0 lh-copy f6 pointer">
          <input type="checkbox" /> Remember me
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
      <div class="lh-copy mt3">
        <a
          href="#0"
          class="f6 link dim black db"
          onClick={() => history.push("/signup")}
        >
          Sign up
        </a>
        <a
          href="#0"
          class="f6 link dim black db"
          onClick={() => history.push("/reset-password")}
        >
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

export default Login;
