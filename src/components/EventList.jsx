/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import styled from "styled-components";

const ListWrapper = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

const EventItem = styled.div`
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const EventTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

const EventDate = styled.p`
  margin: 0;
  color: #777;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled(Link)`
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const DeleteButton = styled.button`
  padding: 8px 12px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

const EventList = () => {
  const { events, deleteEvent } = useContext(EventContext);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      deleteEvent(id);
    }
  };

  return (
    <ListWrapper>
      {events.length === 0 ? (
        <p>No events available. Please add an event.</p>
      ) : (
        events.map((event) => (
          <EventItem key={event.id}>
            <div>
              <EventTitle>{event.title}</EventTitle>
              <EventDate>{new Date(event.date).toLocaleDateString()}</EventDate>
            </div>
            <ActionButtons>
              <Button to={`/edit-event/${event.id}`}>Edit</Button>
              <DeleteButton onClick={() => handleDelete(event.id)}>
                Delete
              </DeleteButton>
            </ActionButtons>
          </EventItem>
        ))
      )}
    </ListWrapper>
  );
};

export default EventList;
