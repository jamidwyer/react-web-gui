import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { formatDateToLocal } from "../utils";
import Search from "./Search.jsx";
import Pagination from "./Pagination.jsx";
import AddItemForm from "./AddItemForm.jsx";
import InventoryItemButtons from "./InventoryItemButtons.jsx";
import { Link } from "react-router-dom";

export default function InventoryTable(props) {
  const { inventoryItems, currentPage, items, totalPages } = props;

  const userId = 1;

  return (
    <div className="flex w-full flex-col gap-6 rounded-sm bg-coconut p-2">
      <div className="mt-2 w-full">
        <Search placeholder="Search inventory..." />
      </div>
      <table className="hidden w-full text-licorice md:table">
        <thead className="rounded-sm text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Product
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Amount
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Expiration Date
            </th>
            <th scope="col" className="relative py-3 pl-6 pr-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-coconut">
          {inventoryItems?.map((inventoryItem) => {
            const url = `/products/${inventoryItem.product.id}`;
            return (
              <tr
                key={inventoryItem.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-sm [&:first-child>td:last-child]:rounded-tr-sm [&:last-child>td:first-child]:rounded-bl-sm [&:last-child>td:last-child]:rounded-br-sm"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-2">
                    <p>
                      <Link
                        className="flex flex-row items-center gap-1 text-bloodorange hover:text-smashedPumpkin"
                        href={url}
                      >
                        {inventoryItem.product.name}{" "}
                        <FontAwesomeIcon
                          icon={faLink}
                          className="w-4"
                        />
                      </Link>
                    </p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {inventoryItem.amount}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {inventoryItem.expirationDate}
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <InventoryItemButtons
                    id={inventoryItem.id}
                    amount={inventoryItem.amount}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} />
      <AddItemForm userId={userId} items={items} />
    </div>
  );
}
