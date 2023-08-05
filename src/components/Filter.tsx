import React from 'react';
import styled from 'styled-components/macro';

const Select = styled.select`
  width: 140px;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid orange;
`;

const Filter = ({ types, value, onChange }: {
  types: string[],
  value: string,
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}) => {
  return (
    <Select name="select" onChange={onChange} defaultValue={value}>
      <option value="all" key="all">All</option>
      {types.map(type => (
        <option value={type} key={type}>{type}</option>
      ))}
    </Select>
  );
};

export default Filter;
