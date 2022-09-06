import React from "react";
import CheckList from "./CheckList";
import setup from "../jest-setup";

describe("Checklist", () => {
  it("should render a message if no items", () => {
    const { output } = setup(<CheckList />);

    expect(output.type).toBe("div");
    expect(output.props.className).toBe(undefined);
    expect(output.props.children).toBe("No items to show.");
  });

  it("should render correctly given expected properties", () => {
    const goodItems = [
      {
        id: "1",
        name: "kitten",
        description: "fluffy",
      },
      { id: "2", name: "puppy", description: "cute" },
    ];
    const { output } = setup(
      <CheckList items={goodItems} title="Test List" />,
    );

    expect(output.props.children[2].type).toBe("ul");
  });

  it("should render correctly without title", () => {
    const goodItems = [
      {
        id: "1",
        name: "kitten",
        description: "fluffy",
      },
      { id: "2", name: "puppy", description: "cute" },
    ];
    const { output } = setup(<CheckList items={goodItems} />);

    expect(output.props.children[2].type).toBe("ul");
  });

  it("should fail with bad data", () => {
    const badItems = [
      {
        thing1: "1",
      },
      { thing2: "2" },
    ];
    const { output } = setup(<CheckList items={badItems} />);

    expect(output.props.children[0]).toBe(null);
  });
});
