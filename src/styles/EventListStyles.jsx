import styled from "styled-components";

export const EventListWrapper = styled.div`
  margin: 20px 0;
  font-family: "Arial", sans-serif;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    margin-bottom: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
      color: white;
      transform: translateY(-2px);
    }

    a {
      text-decoration: none;
      color: inherit;
      font-weight: 600;
      font-size: 1rem;
      transition: color 0.3s ease;

      &:hover {
        color: #ffcc00;
        text-decoration: underline;
      }
    }
  }
`;
