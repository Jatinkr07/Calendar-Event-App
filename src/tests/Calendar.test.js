/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Calendar from "../components/Calendar";

test("renders calendar days", () => {
  render(<Calendar currentMonth={new Date().getMonth()} events={[]} />);
  expect(screen.getByText(/1/)).toBeInTheDocument();
});
