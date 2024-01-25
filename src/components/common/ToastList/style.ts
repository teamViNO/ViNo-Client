import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }

  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  left: 50%;
  bottom: 60px;
  transform: translateX(-50%);

  & > .toast {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 0;
    min-width: 496px;
    border-radius: 100px;
    background-color: rgba(30, 30, 30, 0.9);
    overflow: hidden;
    color: ${(props) => props.theme.color.gray100};
    ${(props) => props.theme.typography.Body1};

    &.show {
      animation: ${fadeInAnimation} 0.5s forwards;
    }

    &.hide {
      animation: ${fadeOutAnimation} 0.5s forwards;
    }
  }
`;
