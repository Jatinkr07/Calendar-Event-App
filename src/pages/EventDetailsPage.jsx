/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import EventForm from "../components/EventForm";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 20px;
`;

const EventDetailsPage = () => {
  const { id } = useParams(); // Get event ID from route parameters

  return (
    <PageWrapper>
      <EventForm editMode={true} eventId={id} />
    </PageWrapper>
  );
};

export default EventDetailsPage;
