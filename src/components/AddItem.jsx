import React, { useState } from "react";
import Button from "./Button.jsx";

function AddItem() {
  const [newItemValue, setNewItemValue] = useState("");
  return (
    <div className="flex pa4 bg-stainless measure items-center">
      <input
        className="pa2"
        type="text"
        value={newItemValue}
        onChange={(e) => setNewItemValue(e.target.value)}
        placeholder="Add a new item"
      />
      <Button name="Add Item" />
    </div>
  );
}

export default AddItem;
