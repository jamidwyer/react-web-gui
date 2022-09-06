/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import CloseButton from "./CloseButton";

it("renders add item component", () => {
  render(<CloseButton />);
  expect(screen.getByText("X")).toBeInTheDocument();
});
