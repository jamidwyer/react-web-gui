import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/function-component-definition
const DataTable = ({ cols, rows }) => (
  <table>
    <thead>
      <tr>
        {cols.map((col) => (
          <th key={col.name}>{col.header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          {cols.map((col) => (
            <td key={col.name}>{row[col.name]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

DataTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cols: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  rows: PropTypes.array.isRequired,
};

export default DataTable;
