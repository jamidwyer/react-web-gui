import React from "react";
import PropTypes from "prop-types";
import { useDebouncedCallback } from "use-debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input.jsx";

function Search({ changeHandler, placeholder = "Search" }) {
  const handleSearch = useDebouncedCallback((term) => {
    // const params = new URLSearchParams(searchParams);
    // params.set('page', '1');
    // if (term) {
    //   params.set('query', term);
    // } else {
    //   params.delete('query');
    // }
    // replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex w-1/2 pr-4">
      <Input
        className="pr-4"
        onChange={changeHandler}
        placeholder={placeholder}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        MagnifyingGlassIcon
        className="absolute right-8 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-licorice"
      />
    </div>
  );
}

Search.propTypes = {
  changeHandler: PropTypes.object,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  changeHandler: () => null,
  placeholder: "Search",
};

export default Search;
