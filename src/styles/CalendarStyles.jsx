import styled from "styled-components";

export const CalendarWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;

  .react-calendar {
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .react-calendar__tile {
    position: relative;
  }

  .event-indicator {
    position: absolute;
    bottom: 5px;
    left: 5px;
    background-color: #007bff;
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
`;
