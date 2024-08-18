/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import CalendarPage from "../pages/CalendarPage";
import EventDetailsPage from "../pages/EventDetailsPage";
import EventForm from "../components/EventForm";

const AppRoutes = () => (
  <Routes>
    {/* Home route displaying the calendar view */}
    <Route path="/" element={<CalendarPage />} />

    {/* Route for viewing event details by event ID */}
    <Route path="/event/:id" element={<EventDetailsPage />} />

    {/* Route for adding a new event */}
    <Route path="/add-event" element={<EventForm />} />

    {/* Route for editing an existing event by event ID */}
    <Route path="/edit-event/:id" element={<EventForm editMode={true} />} />
  </Routes>
);

export default AppRoutes;
