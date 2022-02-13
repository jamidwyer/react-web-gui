import * as utils from "./utils";

jest.mock("./utils", () => {
  const utils = jest.requireActual("./utils");
  return {
    ...utils,
    mapGoogleBooks: jest.fn(() => {}),
  };
});

describe("remap", () => {
  {
    it("should not change the item", () => {
      const testItem = {
        name: "Tomato",
        creators: [],
        description: "good for salsa",
      };
      const output = utils.remap(testItem);
      expect(utils.mapGoogleBooks.toHaveBeenCalled());
      expect(output.toBe({}));
    });
    it("should call mapGoogleBooks", () => {
      const testItem = {
        volumeInfo: {
          title: "A Short History of Nearly Everything",
          authors: ["Bill Bryson"],
          description: "see title",
        },
      };
      //      mapGoogleBooks = jest.fn();
      const output = remap(testItem, "googleBooks");
      expect(mapGoogleBooks.toHaveBeenCalled());
      jest.clearMocks();
    });
    it("should remap googleBooks dataSource", () => {
      const testItem = {
        volumeInfo: {
          title: "A Short History of Nearly Everything",
          authors: ["Bill Bryson"],
          description: "see title",
        },
      };
      const mapped = mapGoogleBooks(testItem, "googleBooks");
      expect(
        mapped.toBe({
          name: "A Short History of Nearly Everything",
          creators: ["Bill Bryson"],
          description: "see title",
        }),
      );
    });
  }
});
