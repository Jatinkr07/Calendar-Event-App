import styled from "styled-components";

export const FormWrapper = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px; /* Space between form elements */

    input {
      padding: 12px 15px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
      background-color: #f9f9f9;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;

      &:focus {
        border-color: #007bff;
        box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
        outline: none;
      }
    }

    button {
      padding: 14px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;

      &:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
      }
    }
  }
`;
