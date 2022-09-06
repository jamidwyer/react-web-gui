import React, { useState } from "react";
import Button from "./Button";

function Quantity() {
  const [quantity, setQuantity] = useState(0);
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
      <Button name="+" clickHandler={increment} />
      <input
        className="w-8 justify-center pl-2 ml-2"
        type="text"
        onChange={updateQuantity}
        value={quantity}
      />
      <Button name="-" clickHandler={decrement} />
    </>
  );
}

export default Quantity;
