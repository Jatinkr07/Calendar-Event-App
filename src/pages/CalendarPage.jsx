/* eslint-disable no-unused-vars */
import React from "react";
import Calendar from "../components/Calendar";
import EventList from "../components/EventList";
import Filter from "../components/Filter";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 20px;
`;

const CalendarPage = () => {
  return (
    <PageWrapper>
      <Filter />
      <Calendar />
      <EventList />
    </PageWrapper>
  );
};

export default CalendarPage;
