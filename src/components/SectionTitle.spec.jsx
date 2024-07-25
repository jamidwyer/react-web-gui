import setup from "../jest-setup";
import SectionTitle from "./SectionTitle";

describe("SectionTitle", () => {
  it("should render correctly", () => {
    const { output } = setup(
      <SectionTitle title="A Section Title" />,
    );
    expect(output.type).toBe("div");
    expect(output.props.className).toBe(
      "border-b border-solid mt-4 mb-4",
    );

    const { children } = output.props;

    expect(children.type).toBe("h2");
    expect(children.props.children).toBe("A Section Title");
    expect(children.props.className).toBe("text-2xl font-normal");
  });
});
