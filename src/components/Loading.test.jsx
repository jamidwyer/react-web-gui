/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

it("should render", () => {
  const { getByText } = render(<Loading />);
  screen.debug();
  //  const loading = getByText(/loading/);
  // expect(loading).toEqual(true);
});
