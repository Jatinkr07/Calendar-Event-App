/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Calendar from "../components/Calendar";
import EventList from "../components/EventList";
import Filter from "../components/Filter";
import EventForm from "../components/EventForm";
import EventDetails from "../components/EventDetails";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  gap: 30px;
`;

const FilterSection = styled.div`
  flex: 1;
`;

const CalendarSection = styled.div`
  flex: 2;
`;

const ListSection = styled.div`
  flex: 1;
`;

const CalendarPage = () => {
  return (
    <PageWrapper>
      <TopSection>
        <CalendarSection>
          <Calendar />
        </CalendarSection>
        <ListSection>
          <FilterSection>
            <Filter />
          </FilterSection>
          <EventList />
        </ListSection>
      </TopSection>
      <Routes>
        {/* Define routes for event form and details */}
        <Route path="/edit-event/:id" element={<EventForm editMode={true} />} />
        <Route path="/add-event" element={<EventForm />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
      </Routes>
    </PageWrapper>
  );
};

export default CalendarPage;
