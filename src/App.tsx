import React from 'react';

import styled from 'styled-components/macro';
import { ThemeProvider } from 'styled-components'

import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';

import colors from './styles/colors';

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

      <ThemeProvider theme={colors}>
        <Main>
          <H1>Pokedex</H1>

          <List />
        </Main>
      </ThemeProvider>

      <Footer />
    </AppBox>
  );
}

export default App;
