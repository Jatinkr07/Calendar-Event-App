/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";
import { EventContext } from "../context/EventContext";

test("renders filter component", () => {
  render(
    <EventContext.Provider
      value={{ categories: ["Work", "Personal"], setFilterCategory: jest.fn() }}
    >
      <Filter />
    </EventContext.Provider>
  );
  expect(screen.getByText(/All Categories/)).toBeInTheDocument();
});
