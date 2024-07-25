import React from "react";
import PropTypes from "prop-types";
import Search from "./Search.jsx";
import Pagination from "./Pagination.jsx";
import AddItemForm from "./AddItemForm.jsx";

const DataTable = ({ cols, rows, items, totalPages, userId }) => (
  <div className="flex w-full flex-col gap-6 rounded-sm  bg-coconut p-2">
    <div className="mt-2 flex flex-col justify-between gap-2">
      <Search placeholder="Search inventory..." />
    </div>
    <table className="hidden w-full text-licorice md:table">
      <thead className="rounded-sm text-left text-sm font-normal">
        <tr>
          {cols.map((col) => (
            <th key={col.name}>{col.header}</th>
          ))}
        </tr>
      </thead>

      <tbody className="bg-coconut">
        {rows.map((row) => (
          <tr
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-sm [&:first-child>td:last-child]:rounded-tr-sm [&:last-child>td:first-child]:rounded-bl-sm [&:last-child>td:last-child]:rounded-br-sm"
            key={row.id}
          >
            {cols.map((col) => (
              <td
                className="whitespace-nowrap px-3 py-3"
                key={col.name}
              >
                {row[col.name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <Pagination totalPages={totalPages} />
    <AddItemForm userId={userId} items={items} />
  </div>
);

DataTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cols: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  rows: PropTypes.array.isRequired,
};

export default DataTable;
