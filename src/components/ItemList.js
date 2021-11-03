import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = ({ items, updateItemStatus, actions }) => (
  <ul className="list-group">
    {items.map((item) => (
      <Item
        key={item.id}
        item={item}
        updateItemStatus={updateItemStatus}
        {...actions}
      />
    ))}
  </ul>
);

ItemList.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default ItemList;
