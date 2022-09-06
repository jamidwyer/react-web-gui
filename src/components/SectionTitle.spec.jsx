import setup from "../jest-setup";
import SectionTitle from "./SectionTitle";

describe("SectionTitle", () => {
  it("should render correctly", () => {
    const { output } = setup(
      <SectionTitle title="A Section Title" />,
    );
    expect(output.type).toBe("div");
    expect(output.props.className).toBe("bb mt4 mb4");

    const { children } = output.props;

    expect(children.type).toBe("h2");
    expect(children.props.children).toBe("A Section Title");
    expect(children.props.className).toBe("f3 fw4");
  });
});
