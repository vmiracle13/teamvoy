import React, { memo } from 'react';
import styled from 'styled-components/macro';

const Button = styled.button`
  margin: 1rem 0;
  display: block;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #369df1;
  color: #fff;
  border-radius: 10px;
  font-weight: 700;

  &:disabled {
    opacity: 0.5;
  }
`;

const LoadMoreButton = ({ isDisabled, loadMore }:
  { isDisabled: boolean, loadMore: () => void }) => (
  <Button
    type="button"
    disabled={isDisabled}
    onClick={loadMore}
  >
    Load More
  </Button>
);

const MemoLoadMoreButton = memo(LoadMoreButton);

export default MemoLoadMoreButton;


