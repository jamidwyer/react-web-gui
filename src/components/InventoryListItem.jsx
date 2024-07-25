import { shape, string } from "prop-types";
import React from "react";
import Quantity from "./Quantity";

function InventoryListItem({ item }) {
  const { id, name, description, expires } = item;
  if (!name && !description) {
    return null;
  }
  return (
    <li id={id} className="mb-2 border-b-2 p-2">
      <div className="flex items-center">
        <h2>{name}</h2>
        <Quantity />
      </div>
      <div className="mr2">
        Expires:
        {expires}
      </div>
      <div>{description}</div>
    </li>
  );
}

InventoryListItem.propTypes = {
  item: shape({
    id: string.isRequired,
    name: string.isRequired,
    description: string,
    expires: string,
  }),
};

InventoryListItem.defaultProps = {
  item: {
    description: "",
    expires: "",
  },
};

export default InventoryListItem;
