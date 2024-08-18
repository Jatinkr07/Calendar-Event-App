/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EventForm from "../components/EventForm";

test("renders event form", () => {
  render(<EventForm />);
  expect(screen.getByPlaceholderText(/Event Title/)).toBeInTheDocument();
});
