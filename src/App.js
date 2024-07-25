import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./style.css";
import { LandingPage } from "./pages/LandingPage";

const App = ({ config }) => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  config: PropTypes.object,
};

App.defaultProps = {
  config: {},
};

export default App;
