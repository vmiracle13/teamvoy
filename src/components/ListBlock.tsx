import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import List from './List';
import MemoLoadMoreButton from './LoadMoreButton';

import { fetchItems, RootState } from "../store/reducer";
import { AppDispatch } from '../store/store';

import { LIMIT } from '../constants';

const ListBlockWrapper = styled.div`
  padding: 1rem;
  flex-basis: 60%;
`;

const ListBlock = () => {
  const [offset, setOffset] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const items = useSelector((state: RootState) => state.items);
  const totalCount = useSelector((state: RootState) => state.totalCount);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchItems(offset));
  }, [offset, dispatch]);

  const loadMore = () => {
    if (totalCount > offset + LIMIT) {
      setOffset(offset + LIMIT);
    } else {
      setIsDisabled(!isDisabled);
    }
  };

  return (
    <ListBlockWrapper>
      <List list={items} />

      <MemoLoadMoreButton isDisabled={isDisabled} loadMore={loadMore} />
    </ListBlockWrapper>
  );
};

export default ListBlock;
