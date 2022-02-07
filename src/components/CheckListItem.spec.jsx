import React from "react";
import setup from "../jest-setup";
import CheckListItem from "./CheckListItem";

describe("CheckListItem", () => {
  it("should render correctly given expected input", () => {
    const item = {
      id: 1,
      name: "Poblano peppers",
      description: "delicious",
    };
    const { output } = setup(
      <CheckListItem item={item} updateItemStatus={jest.fn} />,
    );
    expect(output.props.children[0].type).toBe("div");
    expect(output.props.children[3].type).toBe("div");
    expect(output.props.children[3].props.children.type).toBe(
      "button",
    );
  });
  it("should fail", () => {
    const item = {
      id: 1,
    };
    const output = setup(
      <CheckListItem item={item} updateItemStatus={jest.fn} />,
    );
    expect(output.type).toBe(undefined);
    expect(output.props.className).toBe(undefined);
  });
});
