/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { EventContext } from "../context/EventContext";

const FormWrapper = styled.div`
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.8rem;
    color: #333;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin: 12px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 15px;
  margin: 12px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  margin: 12px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin-top: 20px;
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
`;

const EventForm = ({ editMode = false }) => {
  const { addEvent, updateEvent, events, categories } =
    useContext(EventContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // Get event ID from route parameters

  useEffect(() => {
    if (editMode && id) {
      const event = events.find((event) => event.id === parseInt(id));
      if (event) {
        setTitle(event.title);
        setDate(event.date);
        setCategory(event.category);
        setDescription(event.description);
      }
    }
  }, [editMode, id, events]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventDetails = { title, date, category, description };

    if (editMode && id) {
      updateEvent({ id: parseInt(id), ...eventDetails });
    } else {
      addEvent(eventDetails);
    }

    navigate("/");
  };

  return (
    <FormWrapper>
      <h2>{editMode ? "Edit Event" : "Add Event"}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
        <Textarea
          rows="5"
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button type="submit">{editMode ? "Update Event" : "Add Event"}</Button>
      </form>
    </FormWrapper>
  );
};

export default EventForm;
