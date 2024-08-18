/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import styled from "styled-components";
import { EventContext } from "../context/EventContext";

const FilterWrapper = styled.div`
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Filter = () => {
  const { categories, setFilterCategory } = useContext(EventContext);

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  return (
    <FilterWrapper>
      <Select onChange={handleFilterChange}>
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Select>
    </FilterWrapper>
  );
};

export default Filter;
