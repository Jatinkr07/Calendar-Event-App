/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import { EventContext } from "../context/EventContext";
import EventDetails from "../components/EventDetails";
import { MemoryRouter, Route } from "react-router-dom";

const mockEvent = {
  id: 1,
  title: "Test Event",
  date: new Date().toISOString(),
};

test("renders event details", () => {
  render(
    <MemoryRouter initialEntries={["/event/1"]}>
      <EventContext.Provider value={{ events: [mockEvent] }}>
        <Route path="/event/:id" element={<EventDetails />} />
      </EventContext.Provider>
    </MemoryRouter>
  );
  expect(screen.getByText(/Test Event/)).toBeInTheDocument();
});
