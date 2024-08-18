import styled from "styled-components";

export const CalendarWrapper = styled.div`
  /* Calendar container styling */
  .react-calendar {
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    overflow: hidden; /* Prevent content overflow */
  }

  /* Tile styling */
  .react-calendar__tile {
    position: relative;
    padding: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f0f0f0;
    }
  }

  /* Event indicator styling */
  .event-indicator {
    position: absolute;
    bottom: 5px;
    left: 5px;
    background-color: #007bff;
    width: 6px; /* Slightly larger for better visibility */
    height: 6px;
    border-radius: 50%;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    padding: 10px;

    .react-calendar {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .react-calendar__tile {
      padding: 8px;
    }
  }
`;
