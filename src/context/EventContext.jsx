/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, { id: Date.now(), ...event }]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  const deleteEvent = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  const filteredEvents = events.filter((event) =>
    filterCategory ? event.category === filterCategory : true
  );

  return (
    <EventContext.Provider
      value={{
        events: filteredEvents,
        addEvent,
        updateEvent,
        deleteEvent,
        setFilterCategory,
        categories: ["Work", "Personal"],
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
