import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import List from './List';
import MemoLoadMoreButton from './LoadMoreButton';
import Filter from './Filter';
import Loading from './Loading';

import { fetchItems, fetchTypes, RootState } from "../store/reducer";
import { AppDispatch } from '../store/store';

import { LIMIT } from '../constants';

const ListBlockWrapper = styled.div`
  padding: 1rem;
  flex-basis: 65%;
`;

const ListBlock = () => {
  const [offset, setOffset] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('all');

  const { data: items, status, error } =
    useSelector((state: RootState) => state.items);
  const totalCount = useSelector((state: RootState) => state.totalCount);
  const { data: types, error: typesError, status: typesStatus } =
    useSelector((state: RootState) => state.types);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchItems(offset));
  }, [offset, dispatch]);

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  const loadMore = () => {
    if (totalCount > offset + LIMIT) {
      setOffset(offset + LIMIT);
    } else {
      setIsDisabled(!isDisabled);
    }
  };

  const selectFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  }

  const filteredList = useMemo(() => {
    if (filter === 'all') return items;

    return items.filter(item =>
      item.types.some(type => type.type.name === filter));
  }, [items, filter]);

  return (
    <ListBlockWrapper>
      {typesStatus === 'success' && !typesError && (
        <Filter types={types} onChange={selectFilter} value={filter} />
      )}

      {status === "loading" && (
        <Loading />
      )}
      {status === "success" && (
        filteredList?.length > 0 ? (
          <>
            <List list={filteredList} />

            < MemoLoadMoreButton isDisabled={isDisabled} loadMore={loadMore} />
          </>
        ) : (
            <h4>Sorry, we can not find a pokemon with such a specific type</h4>
          ))
      }
      {error && (
        <h4>Ooops, somethings happened with loading pokemons.<br />
          Please, reload the page one more time.
        </h4>
      )}
    </ListBlockWrapper>
  );
};

export default ListBlock;
