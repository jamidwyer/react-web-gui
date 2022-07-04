/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

it("renders a card", () => {
  const item = {
    name: "Violent Femmes",
    catalogNumber: "123",
    id: "abc",
  };
  render(<Card item={item} />);
  expect(screen.getByText("Violent Femmes")).toBeInTheDocument();
});
