import styled, { css, keyframes } from 'styled-components';

export type TooltipBoxDirection = 'up' | 'right' | 'down' | 'left';

const upKeyframe = keyframes`
  from {
    opacity: 0;
    transform: translateY(-15px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const rightKeyframe = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const downKeyframe = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const leftKeyframe = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const TooltipBox = styled.div<{ direction: TooltipBoxDirection }>`
  position: relative;
  padding: 12px 28px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.color.green300};
  box-shadow: 4px 4px 30px 0 rgba(0, 0, 0, 0.16);
  text-align: center;
  white-space: nowrap;
  color: ${(props) => props.theme.color.gray500};
  ${(props) => props.theme.typography.Caption2};

  animation: ${(props) => {
    switch (props.direction) {
      case 'up':
        return css`
          ${upKeyframe} 1s forwards
        `;
      case 'right':
        return css`
          ${rightKeyframe} 1s forwards
        `;
      case 'down':
        return css`
          ${downKeyframe} 1s forwards
        `;
      case 'left':
        return css`
          ${leftKeyframe} 1s forwards
        `;
    }
  }};

  &::before {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.color.green300};

    ${(props) => {
      switch (props.direction) {
        case 'up':
          return {
            width: 13,
            height: 10,
            left: '50%',
            top: 0,
            transform: 'translate(-50%, -100%)',
            clipPath:
              'path("M 4.71115 1.57771 C 5.4482 0.103611 7.55181 0.103612 8.28886 1.57771 L 12.5 10 H 0.5 L 4.71115 1.57771 Z")',
          };
        case 'right':
          return {
            width: 10,
            height: 13,
            right: 0,
            top: '50%',
            transform: 'translate(100%, -50%)',
            clipPath:
              'path("M 8.42229 4.71115 C 9.89639 5.4482 9.89639 7.55181 8.42229 8.28885 L -5.24537e-07 12.5 L 0 0.499999 L 8.42229 4.71115 Z")',
          };
        case 'down':
          return {
            width: 13,
            height: 10,
            left: '50%',
            bottom: 0,
            transform: 'translate(-50%, 100%)',
            clipPath:
              'path("M 8.28885 8.42229 C 7.5518 9.89639 5.44819 9.89639 4.71115 8.42229 L 0 -1 L 12.5 0 L 8.28885 8.42229 Z")',
          };
        case 'left':
          return {
            width: 10,
            height: 13,
            left: 0,
            top: '50%',
            transform: 'translate(-100%, -50%)',
            clipPath:
              'path("M 1.57771 8.28885 C 0.103611 7.5518 0.103612 5.44819 1.57771 4.71114L10 0.499999 L 10 12.5 L 1.57771 8.28885 Z")',
          };
      }
    }}
  }
`;
