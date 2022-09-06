import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import InventoryListItem from "./InventoryListItem";
import { findItems, remap } from "../utils";

const itemTypes = {
  Inventory: InventoryListItem,
};

function List({
  items, title, dataSource, listType,
}) {
  if (!items) return null;

  const foundItems = findItems(items);
  const TagName = itemTypes[listType];
  if (foundItems && foundItems.length > 0) {
    return (
      <ul>
        {title ? <Title title={title} /> : null}
        {foundItems.map((item) => {
          const remapped = remap(item, dataSource);
          return <TagName key={item.id} item={remapped} />;
        })}
      </ul>
    );
  }
  return <div>No items to show.</div>;
}

List.propTypes = {
  items: PropTypes.arrayOf().isRequired,
  title: PropTypes.string,
  dataSource: PropTypes.string,
  listType: PropTypes.string,
};

List.defaultProps = {
  title: "",
  dataSource: "",
  listType: "",
};

export default List;
