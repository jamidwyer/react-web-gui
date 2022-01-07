import React from "react";

const Button = (props) => {
  const { name, clickHandler } = props;
  return (
    <div>
      <button
        onClick={clickHandler}
        className="b ph3 pv2 mt2 dim ba b--black bg-transparent pointer f6 fw5 mid-gray"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
