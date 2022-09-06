/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import AddItem from "./AddItem";

it("renders add item component", () => {
  render(<AddItem />);
  expect(screen.getByText("Add Item")).toBeInTheDocument();
});
