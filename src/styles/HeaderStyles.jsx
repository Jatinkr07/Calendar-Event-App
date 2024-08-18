import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #007bff;
  color: white;

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  nav {
    a {
      color: white;
      text-decoration: none;
      margin-left: 20px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
