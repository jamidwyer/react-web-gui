import React from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";
import { Button } from "./Button";

// TODO: move to hooks and functions
// eslint-disable-next-line react/function-component-definition
const App = ({ config }) => (
  <Routes>
    <Route path="/" element={<Button config={config} />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/reset-password" element={<ResetPassword />} />
  </Routes>
);

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  config: PropTypes.object,
};

App.defaultProps = {
  config: {},
};

export default App;
