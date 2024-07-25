import React from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function AddItemForm(props) {
  const { dispatch, userId, items, quantitativeUnits } = props;
  if (!items || items.length < 1) {
    return null;
  }
  return (
    <form action={dispatch}>
      <input type="hidden" value={userId} name="userId" />
      <div className="flex flex-row items-end rounded-sm bg-coconut space-x-4">
        <div className="flex flex-col items-start">
          <label
            htmlFor="item"
            className="mb-2 block text-sm font-medium"
          >
            Choose item
          </label>
          <div>
            <select
              id="item"
              name="itemId"
              className="peer block w-full cursor-cursor rounded-sm border border-tilapiaScale py-2 pl-2 text-sm outline-2 placeholder:text-gray-500 p-2"
              defaultValue=""
              aria-describedby="item-error"
            >
              <option value="" disabled>
                Select an item
              </option>
              {items.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-start">
          <label
            htmlFor="amount"
            className="mb-2 block text-sm font-medium"
          >
            Amount
          </label>
          <div>
            <Input
              id="amount"
              name="amount"
              type="number"
              placeholder="Enter amount"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 items-start">
          <label
            htmlFor="product"
            className="mb-2 block text-sm font-medium"
          >
            Unit
          </label>
          <div>
            <select
              id="unit"
              name="unit"
              className="peer block w-full cursor-cursor rounded-sm border border-tilapiaScale py-2 pl-2 text-sm outline-2 placeholder:text-gray-500 p-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select a unit
              </option>
              {quantitativeUnits.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-start">
          <label
            htmlFor="amount"
            className="mb-2 block text-sm font-medium"
          >
            Expiration Date
          </label>
          <div>
            <Input
              id="amount"
              name="expirationDate"
              type="date"
              placeholder="Enter expiration date"
            />
          </div>
        </div>
        <Button href="/inventory" name="Cancel">
          Cancel
        </Button>
        <Button type="submit" name="Add Item" clickHandler={dispatch}>
          Add Item
        </Button>
      </div>
    </form>
  );
}
