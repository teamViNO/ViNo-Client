import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
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
    flex: 1 1 auto;
    align-items: center;
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px 100px 20px 60px;
  min-width: 555px;
  max-width: 865px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.05);
`;
