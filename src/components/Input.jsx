import React from "react";

function Input({
  name,
  id,
  changeHandler,
  placeholder,
  value,
  required,
  minLength,
}) {
  return (
    <input
      className="peer block w-full rounded-sm border border-tilapiaScale py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500"
      type="text"
      name={name}
      id={id}
      onChange={changeHandler}
      placeholder={placeholder}
      required={required}
      value={value}
      minLength={minLength}
    />
  );
}

export default Input;
