import React from "react";
import { createRenderer } from "react-test-renderer/shallow";

const setup = (testedComponent) => {
  const props = {};

  const renderer = createRenderer();
  renderer.render(testedComponent);
  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer,
  };
};

export default setup;
