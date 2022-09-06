import React, { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";

interface Props {
  label: string;
  options: Array<string>;
  action: (option: any) => void;
}

// eslint-disable-next-line react/function-component-definition
const DropDown = ({ label, options, action }: Props) => {
  const [open, setOpen] = useState(false);
  const performAction = (option: any) => {
    setOpen(!open);
    console.log(option);
    action(option);
  };

  return (
    <div className="inset-y-0 right-0 flex items-center">
      <div>
        <button
          type="button"
          className="text-sm flex items-center"
          onClick={() => setOpen(!open)}
        >
          {label}
          <BsCaretDownFill />
        </button>
        {open && (
          <div className="origin-top-right right-0 py-2">
            <div role="menu" aria-orientation="vertical">
              {options.map((option) => (
                <option
                  className="px-2 text-sm hover:bg-gray-100 m-2 items-start"
                  role="menuitem"
                  key={option}
                  onClick={() => performAction(option)}
                >
                  {option}
                </option>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
