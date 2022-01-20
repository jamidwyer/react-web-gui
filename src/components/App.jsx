import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";
import { LandingPage } from "../pages/LandingPage";

// TODO: move to hooks and functions
// eslint-disable-next-line react/function-component-definition
const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/reset-password" element={<ResetPassword />} />
  </Routes>
);

export default App;
