/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { getDaysInMonth } from "../utils/dateUtils";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../context/EventContext";

const Container = styled.div`
  display: flex;
  justify-content: center; /* Center calendar horizontally */
  padding: 20px;
  max-width: 100%;
  overflow-x: auto; /* Allow horizontal scrolling if needed */
`;

const CalendarWrapper = styled.div`
  width: 100%;
  margin: 0px;
  max-width: 1000px; /* Adjust as needed */
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Day = styled.div`
  flex: 1 0 calc(100% / 7); /* Ensures 7 columns per week */
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  position: relative;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Centers text and events within each day */

  &:hover {
    background-color: #e9ecef;
  }
`;

const DayHeader = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const EventLink = styled(Link)`
  display: block;
  font-size: 0.8rem;
  color: #007bff;
  margin-top: 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const EventIndicator = styled.div`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  font-weight: bold;
  color: #007bff;
`;

const HeaderRow = styled.div`
  display: flex;
  width: 100%;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;
`;

const HeaderCell = styled.div`
  flex: 1 0 calc(100% / 7); /* Ensures 7 columns */
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

const AddEventButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Calendar = ({ currentMonth, events }) => {
  const { deleteEvent } = useContext(EventContext);
  const navigate = useNavigate();

  const daysInMonth = getDaysInMonth(currentMonth);

  // Check if daysInMonth is valid
  if (!Array.isArray(daysInMonth) || daysInMonth.length === 0) {
    console.error("Invalid daysInMonth:", daysInMonth);
    return null;
  }

  const firstDayOfMonth = new Date(currentMonth).setDate(1);
  const firstDay = new Date(firstDayOfMonth).getDay();

  const daysArray = [...Array(firstDay).fill(null), ...daysInMonth];

  // Ensure daysArray has at least 35 and at most 42 days to cover all weeks in a month
  const totalDays = 42; // Maximum days in a calendar view
  const paddedDaysArray = [
    ...daysArray,
    ...Array(totalDays - daysArray.length).fill(null),
  ];

  const eventsByDay = paddedDaysArray.map((day) =>
    day ? events.filter((event) => new Date(event.date).getDate() === day) : []
  );

  const handleEventClick = (eventId) => {
    navigate(`/event-details/${eventId}`);
  };

  const handleAddEvent = (day) => {
    navigate(
      `/add-event?date=${new Date(currentMonth).getFullYear()}-${
        new Date(currentMonth).getMonth() + 1
      }-${day}`
    );
  };

  return (
    <Container>
      <CalendarWrapper>
        <HeaderRow>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <HeaderCell key={day}>{day}</HeaderCell>
          ))}
        </HeaderRow>
        {paddedDaysArray.map((day, index) => (
          <Day key={index}>
            {day ? (
              <>
                <DayHeader>{day}</DayHeader>
                {eventsByDay[index].map((event) => (
                  <EventLink
                    key={event.id}
                    onClick={() => handleEventClick(event.id)}
                  >
                    {event.title}
                  </EventLink>
                ))}
                {eventsByDay[index].length > 0 && (
                  <EventIndicator>
                    {eventsByDay[index].length}{" "}
                    {eventsByDay[index].length > 1 ? "Events" : "Event"}
                  </EventIndicator>
                )}
                <AddEventButton onClick={() => handleAddEvent(day)}>
                  Add Event
                </AddEventButton>
              </>
            ) : (
              <DayHeader>&nbsp;</DayHeader>
            )}
          </Day>
        ))}
      </CalendarWrapper>
    </Container>
  );
};

export default Calendar;
