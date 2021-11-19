import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../constants/ItemFilters";

const FILTER_TITLES = {
  [SHOW_ALL]: "All",
  [SHOW_ACTIVE]: "Active",
  [SHOW_COMPLETED]: "Completed",
};

const Footer = (props) => {
  const { activeCount } = props;
  const itemWord = activeCount === 1 ? "item" : "items";
  const [goalItems, updateGoalItems] = useState(0);
  return (
    <footer className="footer">
      <span className="item-count">
        <strong>{activeCount || "No"}</strong> {itemWord} left to do out of
        {goalItems}
      </span>

      <button
        className="btn btn-success"
        onClick={() => updateGoalItems(goalItems + 1)}
      >
        Increment
      </button>
      <button
        className="btn btn-success"
        onClick={() => updateGoalItems(goalItems - 1)}
      >
        Decrement
      </button>
    </footer>
  );
};

Footer.propTypes = {
  completedCount: PropTypes.number,
  activeCount: PropTypes.number,
  onClearCompleted: PropTypes.func,
};

export default Footer;
