import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import Link from "./Link.jsx";

const setup = (propOverrides) => {
  const props = {
    children: "All",
    clickAction: jest.fn(),
    ...propOverrides,
  };

  const renderer = createRenderer();
  renderer.render(<Link {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
  };
};

describe("component", () => {
  describe("Link", () => {
    it("should render correctly", () => {
      const { output } = setup();
      expect(output.type).toBe("a");
      expect(output.props.children).toBe("All");
    });

    it("should call clickAction on click", () => {
      const { output, props } = setup();
      output.props.onClick();
      expect(props.clickAction).toBeCalled();
    });
  });
});
