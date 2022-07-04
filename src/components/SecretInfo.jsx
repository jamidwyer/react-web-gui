import React, { useState } from "react";

import Title from "./Title";

// eslint-disable-next-line react/function-component-definition
const SecretInfo = () => {
  const [token] = useState();

  if (!token) {
    return null;
  }

  return (
    <div className="measure" id="secret-info">
      <Title title="Secret Info" />
      <p>You should only see this if you logged in!</p>
    </div>
  );
};

export default SecretInfo;
