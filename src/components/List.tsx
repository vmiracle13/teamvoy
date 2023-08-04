import React from 'react';
import styled from 'styled-components/macro';

import Item from './Item';

import { ItemType } from '../types/types';

const ListBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const List = ({ list }: { list: ItemType[] }) => {
  return (
    <>
      {list && list.length > 0 && (
        <ListBox>
          {list.map(item => (
            <Item item={item} key={item.name} />
          ))}
        </ListBox>
      )}
    </>
  );
};

export default List;
