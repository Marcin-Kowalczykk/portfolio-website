import styled, { keyframes } from 'styled-components';

export const WrapperAnimationUp = keyframes`
   from {
     margin-bottom: -6em;
   }

   to {
    margin-bottom: 0;
   }
 `;

export const WrapperAnimationDown = keyframes`
    from {
     padding: 2em;
    }

    to {
     padding: 0;
    }
  `;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f3;
  position: fixed;
  top: 1;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const NotExpandWrapper = styled.div`
  animation-name: ${(props) => (!props.isShowed ? WrapperAnimationDown : '')};
  animation-duration: 1000ms;
`;

export const Button = styled.button`
  border: none;
  background: none;
  font-size: 1em;
  color: gray;
  margin-left: 1em;
  padding: 1em;
  cursor: pointer;
  transition: color 500ms linear;

  &:hover {
    color: black;
  }
`;

export const ExpandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation-name: ${(props) => (props.isShowed ? WrapperAnimationUp : '')};
  animation-duration: 1000ms;
`;

export const DataSection = styled.section`
  display: flex;
  margin-bottom: 2em;
`;

export const Label = styled.label`
  margin-right: 1em;
`;
