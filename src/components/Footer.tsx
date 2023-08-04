import React from 'react';

import styled from 'styled-components/macro';

const FooterBox = styled.footer`
  padding: 1rem;
  border: 1px solid orange;
`;

const Footer = () => (
  <FooterBox>
    <p>&copy; ViktoriiaB All rights reserved.</p>
  </FooterBox>
);

export default Footer;