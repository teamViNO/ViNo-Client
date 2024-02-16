import styled from 'styled-components';

import { BlurBackground } from './modals/common.style';

export const Container = styled.div`
  display: flex;
  width: 100%;
  user-select: none;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 58px 29.5px 60px;
  min-width: 555px;
  max-width: 760px;

  & span.created_at {
    color: ${(props) => props.theme.color.gray300};
    ${(props) => props.theme.typography.Body3};
  }

  & span.youtube-video-title {
    margin: 20px 0;
    color: ${(props) => props.theme.color.gray500};
    ${(props) => props.theme.typography.Header6}
  }

  & span.hashtag {
    padding: 6px 10px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.gray100};
    color: ${(props) => props.theme.color.gray400};
    ${(props) => props.theme.typography.Caption1}
  }

  & div.select-box {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border-radius: 8px;
    border: solid 1px ${(props) => props.theme.color.gray200};
    color: ${(props) => props.theme.color.gray400};
    ${(props) => props.theme.typography.Body3};
    cursor: pointer;
  }

  & span.icon-button {
    padding: 5px 6px;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.gray200};

    &.changed {
      background-color: ${(props) => props.theme.color.green400};
      cursor: pointer;
    }

    &.disabled svg {
      & path:nth-of-type(1) {
        fill: ${(props) => props.theme.color.gray300};
      }

      & path:nth-of-type(2) {
        fill: ${(props) => props.theme.color.gray400};
      }
    }
  }

  & span.title,
  & input.title {
    margin-top: 40px;
    color: ${(props) => props.theme.color.gray500};
    ${(props) => props.theme.typography.Header6};
  }

  & input.title {
    padding: 4px 12px;
    border-radius: 8px;
    border: solid 2px ${(props) => props.theme.color.gray200};
    outline: none;
    transition: 0.1s;

    &:focus {
      border: solid 2px black;
    }
  }

  & div.subtitle {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  & span.subtitle-index {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.color.green300};
    text-align: center;
    color: ${(props) => props.theme.color.gray500};
    ${(props) => props.theme.typography.Body3};
  }

  & span.subtitle-text {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
    color: ${(props) => props.theme.color.gray500};
    text-decoration: underline;
    cursor: pointer;
  }

  & div.note-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    border-radius: 16px;
    background-color: ${(props) => props.theme.color.gray100};
  }

  & div.note-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    cursor: text;
    transition: 0.2s;

    &.editable {
      padding: 12px;
      border-radius: 8px;
      background-color: ${(props) => props.theme.color.gray200};
    }
  }

  & span.note-icon {
    ${(props) => props.theme.typography.Body1}
  }

  & span.note-text {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.6;
    color: ${(props) => props.theme.color.gray400};
  }

  & textarea.note-textarea {
    width: 100%;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    color: ${(props) => props.theme.color.gray400};
    resize: none;
    ${(props) => props.theme.typography.Body1};
  }

  & button.create-button {
    align-self: flex-end;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme.color.gray200};
    cursor: pointer;

    & path {
      fill: ${(props) => props.theme.color.gray400};
    }
  }

  & button.close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    background-color: ${(props) => props.theme.color.gray100};
    cursor: pointer;

    & path {
      fill: ${(props) => props.theme.color.gray300};
    }
  }

  & div.note-box-tooltip {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(calc(100% + 24px));
  }

  &.disabled {
    & span.youtube-video-title {
      color: ${(props) => props.theme.color.gray300};
    }

    & span.hashtag {
      color: ${(props) => props.theme.color.gray300};
    }

    & span.subtitle-index {
      background-color: ${(props) => props.theme.color.gray200};
      color: ${(props) => props.theme.color.gray300};
    }

    & span.subtitle-text {
      color: ${(props) => props.theme.color.gray300};
      cursor: default;
    }

    & span.note-icon {
      opacity: 0.4;
    }

    & span.note-text {
      color: ${(props) => props.theme.color.gray300};
    }
  }
`;

export const ScriptBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 555px;
  max-width: 865px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);

  & div.tools {
    padding: 20px 100px 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & button.edit-button {
      padding: 8px 20px;
      width: 100px;
      border-radius: 8px;
      border: none;
      transition: 0.1s;
      cursor: pointer;
      ${(props) => props.theme.typography.Body1};

      &.prev {
        background-color: ${(props) => props.theme.color.gray200};
        color: ${(props) => props.theme.color.gray400};

        &:hover {
          background-color: ${(props) => props.theme.color.gray300};
        }
      }

      &.save {
        background-color: ${(props) => props.theme.color.gray400};
        color: ${(props) => props.theme.color.gray100};

        &:hover {
          background-color: #616161;
        }
      }
    }
  }

  & div.indicator {
    display: flex;
    flex: 1 1 auto;
    gap: 20px;
  }

  & div.indicator-item {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.gray300};
    transition: background-color 0.1s;
    cursor: pointer;

    &.active {
      background-color: ${(props) => props.theme.color.gray500};
    }
  }

  & span.icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.gray500};
    cursor: pointer;

    & path {
      fill: ${(props) => props.theme.color.white};
    }
  }

  & div.script-container {
    padding: 0 100px 20px 60px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  & span.script-title,
  & input.script-title {
    color: ${(props) => props.theme.color.gray500};
    ${(props) => props.theme.typography.Subheader1};
  }

  & input.script-title {
    padding: 4px 12px;
    width: 100%;
    border-radius: 8px;
    border: solid 2px ${(props) => props.theme.color.gray200};
    outline: none;
    transition: 0.1s;

    &:focus {
      border: solid 2px black;
    }
  }

  & span.play-button {
    cursor: pointer;

    &.disabled {
      cursor: default;

      & svg {
        fill: ${(props) => props.theme.color.gray300};
      }
    }
  }

  & span.script-badge {
    padding: 0.5px 8px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.color.gray200};
    color: ${(props) => props.theme.color.gray400};
    ${(props) => props.theme.typography.Caption1}
  }

  & div.script-content {
    padding: 20px 0 0 32px;
    font-size: 16px;
    font-weight: 600;
    line-height: 2;
    color: #5d5b5b;
  }

  & div.script-content-edit {
    padding: 4px 12px;
    width: 100%;
    border-radius: 8px;
    border: solid 2px ${(props) => props.theme.color.gray200};
    outline: none;
    transition: 0.1s;

    &:focus {
      border: solid 2px black;
    }
  }

  & div.resize-thumb {
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    cursor: ew-resize;
  }

  & mark {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: #d2f1b4;
    line-height: 1.6;
    color: ${(props) => props.theme.color.gray500};

    &.active {
      background-color: #a4de6b;
    }
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  left: 0;
  top: 5px;
  width: 100%;
  max-height: 276px;
  border-radius: 12px;
  border: solid 1px ${(props) => props.theme.color.gray100};
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  & > ul {
    display: flex;
    flex-direction: column;

    & > li {
      padding-left: 20px;
      gap: 8px;
      font-weight: bold;
    }

    & > ul {
      transition: height 0.3s;
      overflow: hidden;
    }
  }

  & li {
    padding-left: 46px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 46px;
    color: ${(props) => props.theme.color.gray400};
    transition: 0.1s;
    cursor: pointer;
    ${(props) => props.theme.typography.Body3};

    &.active {
      color: ${(props) => props.theme.color.gray500};
    }

    &:hover {
      background-color: ${(props) => props.theme.color.gray100};
    }

    & > svg {
      transition: 0.3s;
    }

    & path {
      fill: ${(props) => props.theme.color.gray400};
    }
  }
`;

export const SearchKeywordBox = styled.div`
  position: relative;
  display: flex;
  height: 38px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.color.gray100};
  overflow: hidden;
  transition: 0.5s;

  & input {
    padding: 0;
    width: 157px;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    color: ${(props) => props.theme.color.gray500};
    ${(props) => props.theme.typography.Body3};
  }

  & .count {
    color: ${(props) => props.theme.color.gray300};
    ${(props) => props.theme.typography.Body3};

    & > .current {
      color: ${(props) => props.theme.color.gray400};
    }
  }

  & .nav-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;

    & path {
      fill: ${(props) => props.theme.color.gray400};
    }
  }

  & .icon-button {
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.5s;
  }
`;

export const ModalContainer = styled(BlurBackground)`
  & > div.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 52px 50px;
    width: 700px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.1);

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }

  & h1.title {
    margin-top: 4px;
    color: ${(props) => props.theme.color.gray500};
    ${(props) => props.theme.typography.Header6};
  }

  & span.description {
    margin-top: 12px;
    color: ${(props) => props.theme.color.gray300};
    ${(props) => props.theme.typography.Body1};
  }

  & div.group {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  & span.group-title {
    color: ${(props) => props.theme.color.gray500};
    ${(props) => props.theme.typography.Body1};
  }

  & div.input-box {
    padding: 16px 20px;
    display: flex;
    flex: 1 1 auto;
    border-radius: 12px;
    background-color: ${(props) => props.theme.color.gray100};

    & input {
      width: 100%;
      height: 26px;
      border: none;
      outline: none;
      background-color: rgba(0, 0, 0, 0);
      color: ${(props) => props.theme.color.gray500};
      ${(props) => props.theme.typography.Body1};

      &::placeholder {
        color: ${(props) => props.theme.color.gray300};
      }
    }
  }

  & .count {
    color: ${(props) => props.theme.color.gray300};
    ${(props) => props.theme.typography.Body3};

    & > .current {
      color: ${(props) => props.theme.color.gray400};
    }
  }

  & .nav-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;

    & path {
      fill: ${(props) => props.theme.color.gray400};
    }
  }

  & button.transform {
    width: 100%;
    height: 58px;
    border: none;
    border-radius: 12px;
    background-color: ${(props) => props.theme.color.gray500};
    color: white;
    transition: 0.1s;
    cursor: pointer;
    ${(props) => props.theme.typography.Body1};

    &.all {
      background-color: white !important;
      border: solid 1.5px ${(props) => props.theme.color.gray200};
      color: ${(props) => props.theme.color.gray400};
    }

    &:disabled {
      background-color: ${(props) => props.theme.color.gray200};
      color: ${(props) => props.theme.color.gray300};
      cursor: not-allowed;

      &.all {
        color: ${(props) => props.theme.color.gray300};
      }
    }
  }
`;

export const DropdownTopCategoryName = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
