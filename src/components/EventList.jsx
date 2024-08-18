/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 14px;
  margin-bottom: 10px;
  background-color: ghostwhite;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightblue;
    color: white;
  }
`;

const EventList = () => {
  const { events } = useContext(EventContext);

  return (
    <ListWrapper>
      {events.map((event) => (
        <ListItem key={event.id}>
          <Link to={`/event/${event.id}`}>
            {event.title} - {new Date(event.date).toLocaleDateString()}
          </Link>
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default EventList;
