import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components/macro';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import ListBlock from './components/ListBlock';
import SelectedItem from './components/SelectedItemBlock';

import { store } from './store/store';

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

const ItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const App = () => (
  <AppBox>
    <Header />

    <ThemeProvider theme={colors}>
      <Provider store={store}>
        <Main>
          <H1>Pokedex</H1>

          <ItemsBox>
            <ListBlock />

            <SelectedItem />
          </ItemsBox>
        </Main>
      </Provider>
    </ThemeProvider>

    <Footer />
  </AppBox>
);

export default App;
