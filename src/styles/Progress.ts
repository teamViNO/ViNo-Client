import styled from 'styled-components';
import theme from './theme';

export const ProgressWrapper = styled.div`
  margin-top: 14px;
  width: 908px;
  height: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;

  .progress-bar {
    width: 908px;
    display: flex;
    flex-direction: column;

    &:hover .converting-text {
      visibility: visible;
    }
  }

  .progress {
    width: 840px;
    height: 8px;
    background-color: #150f10;
    border-radius: 100px;
    overflow: hidden;

    & > div {
      height: 100%;
      transition: 1s;
      transition-delay: 0.5s;
    }
  }

  .converting-state {
    ${(props) => props.theme.typography.Body2};
  }

  .converting-text {
    margin-top: 4px;
    width: 908px;
    height: 28px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    visibility: hidden;
  }

  .converting-btn {
    width: 90px;
    height: 28px;
    color: ${theme.color.gray500};
    background-color: ${theme.color.gray400};
    border-radius: 100px;
    font-size: 11px;
    border: none;
    padding: 8px 24px;
    margin-right: 8px;
    cursor: pointer;
  }

  .converting-percentage {
    width: 56px;
    height: 26px;
    font-size: 16px;
    color: ${theme.color.green400};
    line-height: 1.6em;
    text-align: right;
  }
`;
