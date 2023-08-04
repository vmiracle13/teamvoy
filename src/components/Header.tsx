import React from 'react';

import styled from 'styled-components/macro';

import logo from '../images/logo.svg';

const HeaderBox = styled.header`
  padding: 1rem;
  border: 1px solid orange;

  img {
    pointer-events: none;
  }
`;

const Header = () => (
  <HeaderBox>
    <img src={logo} alt="logo" />
  </HeaderBox>
);

export default Header;