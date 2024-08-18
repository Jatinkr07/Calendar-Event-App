/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { EventContext } from "../context/EventContext";
import { useNavigate } from "react-router-dom";

const FormWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const EventForm = ({ editMode = false, eventId }) => {
  const { addEvent, updateEvent, events, categories } =
    useContext(EventContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (editMode) {
      const event = events.find((event) => event.id === eventId);
      if (event) {
        setTitle(event.title);
        setDate(event.date);
        setCategory(event.category);
        setDescription(event.description);
      }
    }
  }, [editMode, eventId, events]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventDetails = { title, date, category, description };
    if (editMode) {
      updateEvent({ id: eventId, ...eventDetails });
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
