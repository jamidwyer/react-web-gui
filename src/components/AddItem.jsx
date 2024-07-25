import React, { useState } from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

function AddItem() {
  const [newItemValue, setNewItemValue] = useState("");
  return (
    <div className="flex max-w-md items-center space-x-4">
      <Input
        value={newItemValue}
        onChange={(e) => setNewItemValue(e.target.value)}
        placeholder="Add a new item"
      />
      <Button>Add Item</Button>
    </div>
  );
}

export default AddItem;
