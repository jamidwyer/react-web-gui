import React, { ChangeEventHandler } from "react";
import { FiSearch } from "react-icons/fi";

interface Props {
  changeHandler: (event: React.ChangeEvent) => ChangeEventHandler;
  placeholder?: string;
}

function Search({ changeHandler, placeholder = "Search" }: Props) {
  return (
    <label htmlFor="query">
      {placeholder}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FiSearch />
        </div>
        <input
          className="pl-8"
          type="text"
          name="query"
          id="query"
          onChange={changeHandler}
          placeholder={placeholder}
        />
      </div>
    </label>
  );
}

Search.defaultProps = {
  placeholder: "Search",
};

export default Search;
