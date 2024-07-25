import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Button from "./Button.jsx";

export default function InventoryItemButtons(props) {
  const { id, amount: initialAmount } = props;
  const [amount, setAmount] = useState(initialAmount);

  return (
    <div className="flex justify-end gap-2">
      <Button
        onClick={async () => {
          //          const updatedAmount = await updateInventoryItem(id, amount + 1);
          setAmount(amount + 1);
        }}
        className="rounded-sm border p-2"
      >
        <FontAwesomeIcon icon={faPlus} className="w-4" />
      </Button>
      <Button
        onClick={async () => {
          //        const updatedAmount = await updateInventoryItem(id, amount - 1);
          setAmount(amount - 1);
        }}
        className="rounded-sm border p-2"
      >
        <FontAwesomeIcon icon={faMinus} className="w-4" />
      </Button>
      <Button
        onClick={async () => {
          //      const deletedAmount = await deleteInventoryItem(id);
          setAmount(amount - 1);
        }}
        className="rounded-sm border p-2"
      >
        <FontAwesomeIcon icon={faTrash} className="w-4" />
      </Button>
    </div>
  );
}
