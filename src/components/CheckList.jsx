import React, { useState } from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import CheckListItem from "./CheckListItem";
import { remap } from "../utils";

// eslint-disable-next-line react/function-component-definition
const CheckList = ({
  items,
  updateItemStatus,
  title,
  dataSource,
}) => {
  const [newItemValue, setNewItemValue] = useState("");
  if (items && items.length > 0) {
    return (
      <>
        {title ? <Title title={title} /> : null}
        <input
          type="text"
          value={newItemValue}
          onChange={(e) => setNewItemValue(e.target.value)}
          placeholder="Add a new item"
        />
        <button type="button">Add item</button>
        <fieldset className="bn">
          {items.map((item) => {
            const remapped = remap(item, dataSource);
            return (
              <CheckListItem
                key={item.id}
                item={remapped}
                updateItemStatus={updateItemStatus}
              />
            );
          })}
        </fieldset>
      </>
    );
  }
  return <div>No items to show.</div>;
};

CheckList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  title: PropTypes.string,
  updateItemStatus: PropTypes.func,
  dataSource: PropTypes.string,
};

CheckList.defaultProps = {
  items: null,
  title: null,
  updateItemStatus: null,
  dataSource: null,
};

export default CheckList;
