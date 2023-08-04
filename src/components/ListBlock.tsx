import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';

import List from './List';
import MemoLoadMoreButton from './LoadMoreButton';

import reducer from '../store/reducer';

import { ItemType } from '../types/types';

const LIMIT = 12;

const ListBlockWrapper = styled.div`
  padding: 1rem;
`;

const ListBlock = () => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, { items: [] });

  useEffect(() => {
    const getList = async () => {
      try {
        const response =
          await axios(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${LIMIT}`);
        const json = response.data.results;

        setTotalCount(response.data.count);

        const list = json.map(async (item: ItemType) => {
          const hero = await axios(`${item.url} `);
          return hero.data;
        });

        dispatch({ type: 'loadMore', payload: await Promise.all(list) });
      } catch (error) {
        console.log(error);
      }
    };

    getList();
  }, [offset]);

  const loadMore = () => {
    if (totalCount > offset + LIMIT) {
      setOffset(offset + LIMIT);
    } else {
      setIsDisabled(!isDisabled);
    }
  };

  return (
    <ListBlockWrapper>
      <List list={state.items} />

      <MemoLoadMoreButton isDisabled={isDisabled} loadMore={loadMore} />
    </ListBlockWrapper>
  );
};

export default ListBlock;
