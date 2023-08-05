import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import Table from './SelectedItemTable';

import { unselectItem } from "../store/reducer";

import { ItemType } from '../types/types';

const ItemBox = styled.div`
  margin: 1rem;
  padding: 2rem 1rem;
  min-width: 280px;
  text-align: center;
  border: 1px solid orange;

  &:hover {
    cursor: pointer;
  }
`;

const ItemName = styled.h2`
  padding: 1rem;
  text-transform: capitalize;
`;

const ExtendedItem = ({ item }: { item: ItemType }) => {
  const dispatch = useDispatch();

  const types = item.types.map(type => type.type.name);

  const stats =
    item.stats.reduce((result, current) => {
      const newName = current.stat.name
        .replace(/-./g, (x: string) => x[1].toUpperCase());

      return { ...result, [newName]: current.base_stat };
    }, {});

  const unselectOneItem = (id: number) => {
    dispatch(unselectItem(id));
  }

  return (
    <ItemBox onClick={() => unselectOneItem(item.id)}>
      <img src={`${item.sprites?.front_default} `}
        alt={`${item.name} `} />

      <ItemName>{item.name} #{item.id}</ItemName>

      <Table
        moves={item?.moves?.length}
        {...stats}
        types={types}
        weight={item.weight}
      />
    </ItemBox>
  );
};

export default ExtendedItem;
