import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import LandingPage from "./LandingPage";
import CheckList from "../components/CheckList";
import DataTable from "../components/DataTable";

const setup = (propOverrides) => {
  const props = { ...propOverrides };

  const renderer = createRenderer();
  renderer.render(<LandingPage {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
};

describe("components", () => {
  describe("LandingPage", () => {
    it("should render container", () => {
      const { output } = setup();
      expect(output.type).toBe("div");
      expect(output.props.className).toBe(
        "main w-100 p-4 black-80 helvetica",
      );
    });

    describe("check list", () => {
      it("should render", () => {
        const { output } = setup();
        const [, CheckList] = output.props.children;
        expect(CheckList.type).toBe("section");
      });
    });

    describe("data table", () => {
      it("should render", () => {
        const { output } = setup();
        const [, DataTable] = output.props.children;
        expect(DataTable.type).toBe("section");
      });
    });
  });
});
