import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import CheckListItem from "./CheckListItem";

const CheckList = ({ items, updateItemStatus, actions, title }) => {
  if (items) {
    return (
      <>
        <Title title={title} />
        <fieldset class="bn">
          {items.map((item) => (
            <CheckListItem
              key={item.id}
              item={item}
              updateItemStatus={updateItemStatus}
              {...actions}
            />
          ))}
        </fieldset>
      </>
    );
  }
  return <div>No items to show.</div>;
};

CheckList.propTypes = {
  actions: PropTypes.object,
};

export default CheckList;
