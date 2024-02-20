import theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer !important;
  padding: 28px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
  }

  &:not(:last-of-type) {
    border-bottom: solid 1px ${(props) => props.theme.color.gray200};
  }

  &:hover button.remove-button {
    opacity: 1 !important;
    visibility: visible !important;
  }

  &.read {
    & div.color {
      background-color: ${(props) => props.theme.color.gray300} !important;
    }

    & span.type {
      color: ${(props) => props.theme.color.gray400} !important;
    }

    & div.content {
      color: ${(props) => props.theme.color.gray300} !important;
    }
  }

  & div.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & div.color {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.green400};

      &.error {
        background-color: ${(props) => props.theme.color.red};
      }
    }

    & span.type {
      color: ${(props) => props.theme.color.gray400};
      ${(props) => props.theme.typography.Caption1};
    }

    & div.line {
      width: 1px;
      height: 10px;
      background-color: ${(props) => props.theme.color.gray300};
    }

    & span.time {
      color: ${(props) => props.theme.color.gray300};
      ${(props) => props.theme.typography.Caption2};
    }

    & button.remove-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      width: 24px;
      height: 24px;
      border: none;
      outline: none;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.gray200};
      opacity: 0;
      visibility: hidden;
      transition: 0.1s;
      cursor: pointer;

      &.show {
        opacity: 1;
        visibility: visible;
      }

      &.selected {
        background-color: ${(props) => props.theme.color.gray500};

        & path {
          stroke: ${(props) => props.theme.color.gray200};
        }
      }

      & path {
        stroke: ${(props) => props.theme.color.gray300};
      }
    }
  }

  & div.bottom {
    display: flex;
    gap: 12px;

    & div.content {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      color: ${(props) => props.theme.color.gray500};
      ${(props) => props.theme.typography.Body1};

      & h1 {
        font-weight: bold;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2;
      }
    }
  }

  & div.progress-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }

  & div.progress-bar {
    width: 100%;
    height: 8px;
    border-radius: 100px;
    background-color: ${(props) => props.theme.color.gray100};
    overflow: hidden;

    & > div {
      height: 100%;
      transition: 1s;
      transition-delay: 0.5s;
    }
  }

  & span.progress-text {
    ${theme.typography.Caption3}
    color: ${theme.color.gray400};
  }
`;
