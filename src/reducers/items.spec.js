import items from "./items";
import * as types from "../constants/ActionTypes";

describe("items reducer", () => {
  it("should handle initial state", () => {
    expect(items(undefined, {})).toEqual([
      {
        text: "Use Redux",
        completed: false,
        id: 0,
      },
    ]);
  });

  it("should handle ADD_ITEM", () => {
    expect(
      items([], {
        type: types.ADD_ITEM,
        text: "Run the tests",
      })
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0,
      },
    ]);

    expect(
      items(
        [
          {
            text: "Use Redux",
            completed: false,
            id: 0,
          },
        ],
        {
          type: types.ADD_ITEM,
          text: "Run the tests",
        }
      )
    ).toEqual([
      {
        text: "Use Redux",
        completed: false,
        id: 0,
      },
      {
        text: "Run the tests",
        completed: false,
        id: 1,
      },
    ]);

    expect(
      items(
        [
          {
            text: "Use Redux",
            completed: false,
            id: 0,
          },
          {
            text: "Run the tests",
            completed: false,
            id: 1,
          },
        ],
        {
          type: types.ADD_ITEM,
          text: "Fix the tests",
        }
      )
    ).toEqual([
      {
        text: "Use Redux",
        completed: false,
        id: 0,
      },
      {
        text: "Run the tests",
        completed: false,
        id: 1,
      },
      {
        text: "Fix the tests",
        completed: false,
        id: 2,
      },
    ]);
  });

  it("should handle DELETE_ITEM", () => {
    expect(
      items(
        [
          {
            text: "Use Redux",
            completed: false,
            id: 0,
          },
          {
            text: "Run the tests",
            completed: false,
            id: 1,
          },
        ],
        {
          type: types.DELETE_ITEM,
          id: 1,
        }
      )
    ).toEqual([
      {
        text: "Use Redux",
        completed: false,
        id: 0,
      },
    ]);
  });

  it("should handle EDIT_ITEM", () => {
    expect(
      items(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1,
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0,
          },
        ],
        {
          type: types.EDIT_ITEM,
          text: "Fix the tests",
          id: 1,
        }
      )
    ).toEqual([
      {
        text: "Fix the tests",
        completed: false,
        id: 1,
      },
      {
        text: "Use Redux",
        completed: false,
        id: 0,
      },
    ]);
  });

  it("should handle COMPLETE_ITEM", () => {
    expect(
      items(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1,
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0,
          },
        ],
        {
          type: types.COMPLETE_ITEM,
          id: 1,
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: true,
        id: 1,
      },
      {
        text: "Use Redux",
        completed: false,
        id: 0,
      },
    ]);
  });

  it("should handle COMPLETE_ALL_ITEMS", () => {
    expect(
      items(
        [
          {
            text: "Run the tests",
            completed: true,
            id: 1,
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0,
          },
        ],
        {
          type: types.COMPLETE_ALL_ITEMS,
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: true,
        id: 1,
      },
      {
        text: "Use Redux",
        completed: true,
        id: 0,
      },
    ]);

    // Unmark if all items are currently completed
    expect(
      items(
        [
          {
            text: "Run the tests",
            completed: true,
            id: 1,
          },
          {
            text: "Use Redux",
            completed: true,
            id: 0,
          },
        ],
        {
          type: types.COMPLETE_ALL_ITEMS,
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 1,
      },
      {
        text: "Use Redux",
        completed: false,
        id: 0,
      },
    ]);
  });

  it("should handle CLEAR_COMPLETED", () => {
    expect(
      items(
        [
          {
            text: "Run the tests",
            completed: true,
            id: 1,
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0,
          },
        ],
        {
          type: types.CLEAR_COMPLETED,
        }
      )
    ).toEqual([
      {
        text: "Use Redux",
        completed: false,
        id: 0,
      },
    ]);
  });

  it("should not generate duplicate ids after CLEAR_COMPLETED", () => {
    expect(
      [
        {
          type: types.COMPLETE_ITEM,
          id: 0,
        },
        {
          type: types.CLEAR_COMPLETED,
        },
        {
          type: types.ADD_ITEM,
          text: "Write more tests",
        },
      ].reduce(items, [
        {
          id: 0,
          completed: false,
          text: "Use Redux",
        },
        {
          id: 1,
          completed: false,
          text: "Write tests",
        },
      ])
    ).toEqual([
      {
        text: "Write tests",
        completed: false,
        id: 1,
      },
      {
        text: "Write more tests",
        completed: false,
        id: 2,
      },
    ]);
  });
});
