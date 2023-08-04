import React from 'react';
import styled from 'styled-components/macro';

import { ItemType } from '../types/types';

const ItemBox = styled.li`
  padding: 2rem 1rem;
  border: 1px solid orange;
  text-align: center;
`;

const ItemName = styled.h3`
  padding: 1rem;
  text-transform: capitalize;
`;

const ButtonsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;

const Button = styled.button<{ type: string }>`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme[props.type]};
  border-radius: 5px;
  text-transform: capitalize;
  box-shadow: #fff 0px 30px 40px -2em inset; 
`;

const Item = ({ item }: { item: ItemType }) => {
  return (
    <ItemBox key={item.name}>
      <img src={`${item.sprites?.front_default} `}
        alt={`${item.name} `} />

      <ItemName>{item.name}</ItemName>

      <ButtonsList>
        {item.types.map(({ type }) => (
          <li key={type.name}>
            <Button type={type.name}>{type.name}</Button>
          </li>
        ))}
      </ButtonsList>
    </ItemBox>
  );
};

export default Item;