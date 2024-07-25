/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button.jsx";

it("renders a button", () => {
  render(<Button name="Word" />);
  expect(screen.getByText("Word")).toBeInTheDocument();
});
