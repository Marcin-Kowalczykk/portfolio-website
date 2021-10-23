import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const animationNav = keyframes`
  from {
    margin-top: -15em;
  }

  100% {
    margin-top: 0;
  }
`;

const animationNavReverse = keyframes`
  from {
    padding: 4em;
  }

  100% {
    padding: 0;
  }
`;

const animationList = keyframes`
  from {
    margin-right: -30em;
  }

  100% {
    margin-right: 2.5em;
  }
`;

const animationIcon = keyframes`
  from {
    margin-right: -30em;
  }

  100% {
    margin-right: 0;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isExpand ? 'column' : 'row')};
  animation-name: ${(props) =>
    props.isExpand ? animationNav : animationNavReverse};
  animation-duration: 1500ms;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f3;
  position: fixed;
  top: 0;
  bottom: 1;
  left: 0;
  right: 0;
`;

export const H2Name = styled.h2`
  font-size: 2em;
  color: #1b1a1aba;
  margin-left: 1em;

  @media (max-width: 720px) {
    font-size: 1em;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.isExpand ? 'column' : 'raw')};
  justify-content: space-around;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.isExpand ? 'column' : 'row')};
  margin-right: ${(props) => (props.isExpand ? '2.5em' : '0')};
  margin-bottom: 0;
  animation-name: ${(props) => (props.isExpand ? animationList : null)};
  animation-duration: 3000ms;
  list-style: none;
`;

export const Icons = styled(Ul)`
  flex-direction: ${(props) => (props.isExpand ? 'row' : 'column')};
  margin: 0.5em 2.5em 0.5em 0;
`;

export const Li = styled.li`
  margin: 0.5em;
  cursor: pointer;
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const LiText = styled(Li)`
  border-bottom: 1px solid #c0c0c0;
  padding: 5px;
  color: #4b444488;
  transition: color 500ms linear, background 500ms linear, border-radius 500ms linear;

  &:hover {
    color: black;
    background: #e9e9eb;
    border-radius: 5px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  transition: color 500ms linear;
  color: #4b444488;
  scroll-behavior: smooth;

  &:visited {
    text-decoration: none;
  }

  &:hover {
    color: black;
  }
`;

export const ExpandIcon = styled.div`
  margin-right: ${(props) => (props.isExpand ? '0' : '1em')};
  font-size: 1.5em;
  cursor: pointer;
  animation-name: ${(props) => (!props.isExpand ? rotate : '0')};
  animation-duration: infinite;
  animation-name: ${(props) => (props.isExpand ? animationIcon : '0')};
  animation-duration: 3000ms;
  transition: font-size 1000ms ease-in;

  &:hover {
    font-size: 1.65em;
  }
`;
