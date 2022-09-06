import React from "react";
import { createRenderer } from "react-test-renderer/shallow";

const setup = (testedComponent) => {
  const props = {};

  const renderer = createRenderer();
  renderer.render(testedComponent);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
};

export default setup;
