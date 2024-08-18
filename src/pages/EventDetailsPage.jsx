/* eslint-disable no-unused-vars */
import React from "react";
import EventDetails from "../components/EventDetails";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 20px;
`;

const EventDetailsPage = () => {
  return (
    <PageWrapper>
      <EventDetails />
    </PageWrapper>
  );
};

export default EventDetailsPage;
