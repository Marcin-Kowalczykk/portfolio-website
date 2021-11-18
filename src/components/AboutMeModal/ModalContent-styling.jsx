import styled, { keyframes } from 'styled-components';

export const AnimationShow = keyframes`
    0% {top: -150vh;}
    100% {top: 15vh;}
`;

export const AnimationButton = keyframes`
    0% {border: 1px solid white}
    50% {border: 1px solid #b4b4b4}
    100% {border: 1px solid #dbd9d9}
`;

export const ContentWrapper = styled.div`
  position: fixed;
  top: 15vh;
  left: 10%;
  overflow: hidden;
  width: 80%;
  background: #ececec;
  border-radius: 5px;
  animation: ${AnimationShow} 1000ms;
`;

export const ImgDescArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const TextSection = styled.section`
  width: 50%;
  height: 80%;
  text-align: justify;

  @media (max-width: 720px) {
    width: 90%;
    font-size: 0.6em;
  }
`;

export const Img = styled.img`
  width: 387px;
  height: 413px;
  border-radius: 5px;
  margin: 2em 3em 0 0;

  @media (max-width: 720px) {
    width: 193px;
    height: 206px;
    margin: 2em 0 1em 0;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1.3em;
`;

export const Button = styled.button`
  background: white;
  border: none;
  border-radius: 5px;
  padding: 1em;

  &:hover {
    animation: ${AnimationButton} 3000ms infinite;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  margin-right: 5px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;
