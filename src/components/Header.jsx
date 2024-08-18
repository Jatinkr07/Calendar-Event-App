/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
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

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Calendar App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-event">Add Event</Link>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
