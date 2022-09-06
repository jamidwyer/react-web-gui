import React, { useReducer } from "react";

function CheckBox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <label htmlFor="check">
      {checked ? "checked" : "not checked"}
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
        id="check"
      />
    </label>
  );
}

export default CheckBox;
