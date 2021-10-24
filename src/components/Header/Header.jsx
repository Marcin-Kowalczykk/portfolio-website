import React from 'react';

import styled from 'styled-components';

import HeaderIMG from '../data/images/header1.gif';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background: url(${HeaderIMG});
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 720px) {
    background-attachment: scroll;
  }
`;

const HeaderText = styled.h1`
  margin: 5em 1em 0 4em;
  color: #0000009d;
`;

const Header = () => {
  return (
    <Wrapper id="HomeArea">
      <HeaderText>Front End Developer</HeaderText>
    </Wrapper>
  );
};

export default Header;
