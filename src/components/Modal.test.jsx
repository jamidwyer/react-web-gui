import setup from "../jest-setup";
import Modal from "./Modal";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Modal", () => {
  it("should render correctly", () => {
    const { output } = setup(
      <Modal>
        <h2 className="testClass">Hi there</h2>
      </Modal>,
    );
    expect(output.type).toBe("div");
    expect(output.props.className).toBe(
      "rui-modal-bg items-center flex h-100",
    );

    const { children } = output.props;

    expect(children.type).toBe("div");
    expect(children.props.className).toBe("rui-modal center v-mid");
  });
});
