import styled, { css, keyframes } from 'styled-components';
import theme from '../theme';

const insightAnimation = keyframes`
  from { height: 0px; }
  to { height: 280px; }
`;

export const RecommendationModalContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 700px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.color.white};
    overflow: hidden;
  }

  .close-btn {
    align-self: flex-end;
    cursor: pointer;
  }

  .inform {
    padding: 40px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .inform-icon {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: rotateZ(45deg) translate(-2px, -2px);
      width: 100%;
      height: 4px;
      background-color: ${(props) => props.theme.color.red};
    }
  }

  .inform-text {
    color: ${theme.color.gray500};
    ${(props) => props.theme.typography.Header6};
  }

  .inform-subtext {
    color: ${theme.color.red};
    ${(props) => props.theme.typography.Body1};
  }

  .insight {
    padding: 0 62px;
    height: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.color.gray100};
    animation: ${css`
        ${insightAnimation}`} 1s 1s forwards;
    overflow: hidden;
  }

  .insight-text {
    margin-top: 23px;
    color: ${(props) => props.theme.color.gray400};
    ${(props) => props.theme.typography.Subheader1};
  }

  .insight-card {
    margin-top: 26px;
    display: flex;
    width: 100%;
    border-radius: 16px;
    background-color: ${(props) => props.theme.color.white};
    text-decoration: none;

    & > img {
      width: 290px;
      height: auto;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
    }
  }

  .insight-content {
    padding: 24px 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > h1 {
      width: 248px;
      color: ${(props) => props.theme.color.gray500};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      ${(props) => props.theme.typography.Subheader3};
    }
  }

  .insight-tag {
    padding: 6px 10px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.gray100};
    color: ${(props) => props.theme.color.gray400};
    ${(props) => props.theme.typography.Caption1};
  }
`;
