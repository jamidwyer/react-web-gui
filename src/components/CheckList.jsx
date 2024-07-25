import React from "react";
import PropTypes from "prop-types";
import Title from "./Title.jsx";
import CheckListItem from "./CheckListItem.jsx";
import AddItem from "./AddItem.jsx";
import { remap } from "../utils";

function CheckList({ items, updateItemStatus, title, dataSource }) {
  if (items && items.length > 0) {
    return (
      <>
        {title ? <Title title={title} /> : null}
        <AddItem />
        <ul className="bn">
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
        </ul>
      </>
    );
  }
  return <div>No items to show.</div>;
}

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
