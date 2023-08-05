import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import ExtendedItem from './SelectedItem';

import { RootState } from '../store/reducer';

const SelectedBox = styled.aside`
  display: flex;
  align-items: center;
`;
const SelectedItem = () => {
  const selectedItem = useSelector((state: RootState) => state.selectedItem);

  return (
    <SelectedBox>
      {selectedItem && <ExtendedItem item={selectedItem} />}
    </SelectedBox>
  );
};

export default SelectedItem;
