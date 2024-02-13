import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 0 121px;
  display: flex;
  justify-content: center;
  width: 100vw;

  & > div.container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 910px;

    & .title {
      color: ${(props) => props.theme.color.gray500};
    }

    & h1.title {
      ${(props) => props.theme.typography.Header5};
    }

    & h2.title {
      ${(props) => props.theme.typography.Header6};
    }

    & span.description {
      color: ${(props) => props.theme.color.gray300};
      ${(props) => props.theme.typography.Body1}
    }

    & button.other {
      width: 100px;
      height: 42px;
      border-radius: 8px;
      border: 1.5px solid ${(props) => props.theme.color.gray200};
      background-color: white;
      color: ${(props) => props.theme.color.gray400};
      cursor: pointer;
      outline: none;
      transition: 0.1s;
      ${(props) => props.theme.typography.Body1};

      &:hover {
        border: 1.5px solid ${(props) => props.theme.color.gray400};
      }

      &:active {
        border: 1.5px solid ${(props) => props.theme.color.gray300};
      }
    }
  }

  & .submit-tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, calc(-200% + 25px));
  }

  & button.submit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 40px;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme.color.gray500};
    color: white;
    transition: 0.1s;
    cursor: pointer;
    outline: none;
    ${(props) => props.theme.typography.Body1};

    &:disabled {
      background-color: ${(props) => props.theme.color.gray100};
      color: ${(props) => props.theme.color.gray300};
      cursor: not-allowed;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 32px 36px;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);

  & > .account-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    & .group-title {
      color: ${(props) => props.theme.color.gray400};
      ${(props) => props.theme.typography.Body1};
    }
  }

  & .avatar {
    width: 84px;
    height: 84px;
    border-radius: 12px;
    background-color: ${(props) => props.theme.color.green400};
  }

  & .input-box {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    width: 100%;
    min-height: 50px;
    border-radius: 12px;
    border: solid 1.5px ${(props) => props.theme.color.gray200};
    transition: 0.2s;
    ${(props) => props.theme.typography.Body1};

    &.disabled {
      border: none;
      background-color: ${(props) => props.theme.color.gray100};
      color: ${(props) => props.theme.color.gray400};
    }

    & input {
      width: 100%;
      height: 100%;
      border: none;
      color: ${(props) => props.theme.color.gray500};
      outline: none;
      ${(props) => props.theme.typography.Body1};
    }
  }

  & .input-guide {
    color: ${(props) => props.theme.color.gray300};
    ${(props) => props.theme.typography.Caption1};
  }

  & .input-error-text {
    padding-left: 16px;
    color: ${(props) => props.theme.color.red};
    ${(props) => props.theme.typography.Body3};
  }

  & button.option {
    width: 100%;
    height: 50px;
    border-radius: 12px;
    border: solid 1.5px ${(props) => props.theme.color.gray200};
    background-color: white;
    color: ${(props) => props.theme.color.gray400};
    transition: 0.15s;
    cursor: pointer;
    outline: none;
    ${(props) => props.theme.typography.Body1};

    &.selected {
      border: solid 1.5px ${(props) => props.theme.color.gray100};
      background-color: ${(props) => props.theme.color.gray100};
      color: ${(props) => props.theme.color.gray500};
    }
  }

  & > .setting-group {
    display: flex;
    align-items: center;

    & .group-title {
      display: flex;
      flex: 1 1 auto;
      padding: 12px 16px;
      color: ${(props) => props.theme.color.gray500};
      ${(props) => props.theme.typography.Subheader2};
    }
  }

  & button.theme {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 120px;
    height: 52px;
    border-radius: 100px;
    border: solid 1px ${(props) => props.theme.color.gray200};
    background-color: white;
    color: ${(props) => props.theme.color.gray300};
    transition: 0.1s;
    cursor: pointer;
    outline: none;
    ${(props) => props.theme.typography.Body2};

    &.selected {
      border: none;
      background-color: ${(props) => props.theme.color.gray500};
      color: white;

      & path {
        fill: white;
      }
    }
  }
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 40px 50px;
  width: 700px;
  background-color: white;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.1);
  border-radius: 40px;

  & > .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & > .close {
      align-self: flex-end;
      cursor: pointer;
    }

    & > .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;

      & img {
        width: 56px;
        height: auto;
      }

      & h1.title {
        color: ${(props) => props.theme.color.gray500};
        ${(props) => props.theme.typography.Header6};
      }

      & span.description {
        color: ${(props) => props.theme.color.gray300};
        ${(props) => props.theme.typography.Body1};
      }
    }
  }

  & > button {
    width: 100%;
    height: 58px;
    background-color: ${(props) => props.theme.color.gray500};
    border: none;
    border-radius: 12px;
    color: white;
    cursor: pointer;
    outline: none;
    ${(props) => props.theme.typography.Body1};
  }
`;
