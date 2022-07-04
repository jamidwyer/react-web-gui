import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { remap, uniquey } from "../utils";

function Grid({ items, dataSource }) {
  return (
    <ul className="cards">
      {items.map((item) => {
        const remapped = remap(item, dataSource);
        return <Card key={uniquey(remapped.id)} item={remapped} />;
      })}
    </ul>
  );
}

Grid.propTypes = {
  dataSource: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      artist: PropTypes.string,
      thumb: PropTypes.string,
      year: PropTypes.string,
      catno: PropTypes.string,
    }),
  ).isRequired,
};

Grid.defaultProps = {
  dataSource: null,
};

export default Grid;
