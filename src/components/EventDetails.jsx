/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const DetailsWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #c82333;
  }
`;

const EditButton = styled(Link)`
  padding: 8.5px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const EventDetails = () => {
  const { id } = useParams();
  const { events, deleteEvent } = useContext(EventContext);
  const navigate = useNavigate();
  const event = events.find((event) => event.id === parseInt(id, 10)); // Ensure id is parsed as integer

  if (!event) {
    return <p>Event not found</p>;
  }

  const handleDelete = () => {
    deleteEvent(event.id);
    navigate("/");
  };

  return (
    <DetailsWrapper>
      <h2>{event.title}</h2>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Category: {event.category}</p>
      <p>Description: {event.description}</p>
      <EditButton to={`/edit-event/${event.id}`}>Edit Event</EditButton>
      <Button onClick={handleDelete}>Delete Event</Button>
    </DetailsWrapper>
  );
};

export default EventDetails;
