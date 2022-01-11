import React, { useState } from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import CheckListItem from "./CheckListItem";

// eslint-disable-next-line react/function-component-definition
const CheckList = ({ items = [], updateItemStatus, title }) => {
  const [newItemValue, setNewItemValue] = useState("");
  if (items && items.length > 0) {
    return (
      <>
        <Title title={title} />
        <input
          type="text"
          value={newItemValue}
          onChange={(e) => setNewItemValue(e.target.value)}
          placeholder="Add a new item"
        />
        <button type="button">Add item</button>
        <fieldset className="bn">
          {items.map((item) => (
            <CheckListItem
              key={item.id}
              item={item}
              updateItemStatus={updateItemStatus}
            />
          ))}
        </fieldset>
      </>
    );
  }
  return <div>No items to show.</div>;
};

CheckList.propTypes = {
  items: PropTypes.shape,
  title: PropTypes.string,
  updateItemStatus: PropTypes.func,
};

CheckList.defaultProps = {
  items: null,
  title: null,
  updateItemStatus: null,
};

export default CheckList;
