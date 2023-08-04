import React from 'react';

import styled from 'styled-components/macro';

import Header from './components/Header';
import Footer from './components/Footer';

const AppBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: auto;
`;

const H1 = styled.h1`
  margin: 1rem auto;
  padding: 1rem;
  width: min-content;
  border: 1px solid orange;
`;

function App() {
  return (
    <AppBox>
      <Header />

      <Main>
        <H1>Pokedex</H1>
      </Main>

      <Footer />
    </AppBox>
  );
}

export default App;
