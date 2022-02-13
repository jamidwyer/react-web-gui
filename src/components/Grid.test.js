/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Grid from "./Grid";

it("renders a card", () => {
  const items = [
    {
      name: "Subway Gawdz",
      creators: "TOO MANY ZOOZ",
      createdDate: "2016",
      id: "abcde",
    },
    {
      name: "Spiritchaser",
      creators: "Dead Can Dance",
      createdDate: "100",
      id: "abcdf",
    },
    {
      name: "Violent Femmes",
      catalogNumber: "123",
      id: "abc",
    },
    {
      name: "Matangi",
      creators: "MIA",
      catalogNumber: "123",
      createdDate: "2013",
      id: "abcd",
    },
    {
      id: "1234",
      name: "It's Alive",
      creators: "La Luz",
      createdDate: 2013,
    },
  ];

  render(<Grid items={items} />);
  expect(screen.getByText("Violent Femmes")).toBeInTheDocument();
});
