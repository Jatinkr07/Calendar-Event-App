/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { getDaysInMonth } from "../utils/dateUtils";
import { Link } from "react-router-dom";

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Day = styled.div`
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  position: relative;
`;

const EventLink = styled(Link)`
  display: block;
  font-size: 0.8rem;
  color: #007bff;
  margin-top: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Calendar = ({ currentMonth, events }) => {
  const daysInMonth = getDaysInMonth(currentMonth);

  const eventsByDay = daysInMonth.map((day) =>
    events.filter((event) => new Date(event.date).getDate() === day)
  );

  return (
    <CalendarWrapper>
      {daysInMonth.map((day, index) => (
        <Day key={day}>
          {day}
          {eventsByDay[index].map((event) => (
            <EventLink key={event.id} to={`/event/${event.id}`}>
              {event.title}
            </EventLink>
          ))}
        </Day>
      ))}
    </CalendarWrapper>
  );
};

export default Calendar;
