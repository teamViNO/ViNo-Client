import styled from 'styled-components';

export const Container = styled.div`
  padding: 28px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  &:first-of-type {
    padding: 0 0 28px;
  }

  &:not(:last-of-type) {
    border-bottom: solid 1px ${(props) => props.theme.color.gray200};
  }

  &.read {
    & div.color {
      background-color: ${(props) => props.theme.color.gray300};
    }

    & span.type {
      color: ${(props) => props.theme.color.gray400};
    }

    & div.content {
      color: ${(props) => props.theme.color.gray300};
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
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.gray200};

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
      }
    }
  }
`;
