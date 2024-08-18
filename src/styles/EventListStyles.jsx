import styled from "styled-components";

export const EventListWrapper = styled.div`
  margin: 20px 0;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #007bff;
      color: white;
    }

    a {
      text-decoration: none;
      color: inherit;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
