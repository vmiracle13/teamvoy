import React from 'react';

import styled from 'styled-components/macro';

const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid #ffa5004d;
  border-radius: 50%;
  border-top-color: orange;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
`;

const Text = styled.h3`
  padding: 2rem;
`;

const Loading = () => (
  <LoadingBox>
    <Spinner />
    <Text>We are still loading pokemons ...</Text>
  </LoadingBox>
);

export default Loading;
