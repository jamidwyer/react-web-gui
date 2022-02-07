import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/function-component-definition
const CheckListItem = ({ item }) => {
  const { name, creators, description } = item;
  const itemCompleted = item.completed;

  const statusChange = () => {
    console.log("TODO: redux");
  };

  const element = (
    <>
      <div className="flex items-center mb2">
        <input
          className="mr2"
          type="checkbox"
          id={name}
          value={name}
          aria-label={name}
          checked={itemCompleted}
          onChange={() => statusChange()}
        />
        <label htmlFor={name} className="lh-copy">
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
  item: PropTypes.oneOfType([PropTypes.shape, PropTypes.func])
    .isRequired,
  updateItemStatus: PropTypes.func.isRequired,
};

export default CheckListItem;
