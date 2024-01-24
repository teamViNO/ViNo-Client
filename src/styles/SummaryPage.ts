import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  user-select: none;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 58px 29.5px 60px;

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
    cursor: pointer;

    &.disabled svg {
      & path:nth-of-type(1) {
        fill: ${(props) => props.theme.color.gray300};
      }

      & path:nth-of-type(2) {
        fill: ${(props) => props.theme.color.gray400};
      }
    }
  }

  & span.title {
    margin-top: 40px;
    color: ${(props) => props.theme.color.gray500};
    ${(props) => props.theme.typography.Header6};
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
    margin-top: 40px;
    padding: 20px;
    width: 100%;
    border-radius: 16px;
    background-color: ${(props) => props.theme.color.gray100};
  }

  & div.note-item {
    display: flex;
    align-items: center;
    gap: 12px;
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
`;

export const ScriptBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
  min-width: 555px;
  max-width: 865px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);

  & div.tools {
    padding: 20px 100px 0 60px;
    display: flex;
    align-items: center;
    width: 100%;
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

  & span.script-title {
    color: ${(props) => props.theme.color.gray500};
    ${(props) => props.theme.typography.Subheader1}
  }

  & span.play-button {
    cursor: pointer;
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

    & > mark {
      padding: 4px 8px;
      border-radius: 4px;
      background-color: #a4de6b;
      line-height: 1.6;
      color: ${(props) => props.theme.color.gray500};
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
    ${(props) => props.theme.typography.Body3}

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
