import React from "react";
import PropTypes from "prop-types";
import { uniquey } from "../utils";

// eslint-disable-next-line react/function-component-definition
const CheckListItem = ({ item }) => {
  const {
    id, name, creators, description, updateItemStatus,
  } = item;
  if (!name && !description) {
    return null;
  }
  const itemCompleted = item.completed;
  const label = `${name}: ${creators[0]}`;
  const element = (
    <>
      <div className="flex items-center mb2">
        <input
          className="mr2"
          type="checkbox"
          id={uniquey(id)}
          value={name}
          aria-label={label}
          checked={itemCompleted}
          onChange={() => updateItemStatus()}
        />
        <label htmlFor={uniquey(id)} className="lh-copy">
          {name}
        </label>
      </div>
      <div className="flex mb2">
        {creators ? <text>{creators}</text> : null}
      </div>
      <div className="flex mb2">
        {description ? <text>{description}</text> : null}
      </div>
      <div>
        <button type="button">Remove</button>
      </div>
    </>
  );

  return element;
};

CheckListItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
  updateItemStatus: PropTypes.func.isRequired,
};

export default CheckListItem;
