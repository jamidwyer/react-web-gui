import * as types from "../constants/ActionTypes";
import * as actions from "./index";

describe("item actions", () => {
  it("editItem should create EDIT_ITEM action", () => {
    expect(actions.editItem(1, "Use Redux everywhere")).toEqual({
      type: types.EDIT_ITEM,
      id: 1,
      text: "Use Redux everywhere",
    });
  });

  it("completeItem should create COMPLETE_ITEM action", () => {
    expect(actions.completeItem(1)).toEqual({
      type: types.COMPLETE_ITEM,
      id: 1,
    });
  });

  it("completeAll should create COMPLETE_ALL action", () => {
    expect(actions.completeAllItems()).toEqual({
      type: types.COMPLETE_ALL_ITEMS,
    });
  });

  it("clearCompleted should create CLEAR_COMPLETED action", () => {
    expect(actions.clearCompleted()).toEqual({
      type: types.CLEAR_COMPLETED,
    });
  });
});
