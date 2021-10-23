import React from 'react';

import styled, { keyframes } from 'styled-components';

const AnimationShowShadow = keyframes`
     0% {opacity: 0;}
     100% {opacity: 1;}
`;

const ShadowWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400%;
  background: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  animation: ${AnimationShowShadow} 1000ms linear;

  @media (max-width: 720px) {
    height: 720%;
  }
`;

const Shadow = ({ onShowModal }) => {
  return <ShadowWrapper onClick={onShowModal} />;
};

export default Shadow;
