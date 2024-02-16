import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Visual = styled.section`
  padding: 60px 0 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 360px;
  background-color: ${(props) => props.theme.color.gray500};

  & > .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    & > img.guide-logo {
      width: 60px;
      height: auto;
    }

    & > h1.title {
      color: ${(props) => props.theme.color.white};
      ${(props) => props.theme.typography.Header3};
    }
  }

  & > .link-list {
    display: flex;
    gap: 16px;

    & > li a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 52px;
      border-radius: 100px;
      background-color: rgba(0, 0, 0, 0);
      color: ${(props) => props.theme.color.white};
      text-decoration: none;
      transition: 0.1s;
      cursor: pointer;
      ${(props) => props.theme.typography.Body2};

      &.active {
        background-color: ${(props) => props.theme.color.green400};
        color: ${(props) => props.theme.color.gray500};
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Section = styled.section`
  padding: 80px 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > .info-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    & h2 {
      ${(props) => props.theme.typography.Subheader2};
    }

    & h3 {
      ${(props) => props.theme.typography.Body1};
    }

    & .subtitle {
      color: ${(props) => props.theme.color.green700};
    }

    & .title {
      ${(props) => props.theme.typography.Header3};
      text-align: center;
      font-weight: normal;

      & > span {
        font-weight: bold;
      }
    }
  }

  & > .service-content {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    & > .service-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 445px;
      height: 560px;
      background-color: ${(props) => props.theme.color.gray100};
      border-radius: 20px;

      & > h1 {
        color: ${(props) => props.theme.color.gray500};
        ${(props) => props.theme.typography.Header6};
      }

      & > span {
        margin-top: 14px;
        font-size: 20px;
        line-height: 1.4;
        color: ${(props) => props.theme.color.gray400};
        text-align: center;
      }
    }
  }
`;

export const QuestionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  padding: 120px 0 160px;
  width: 100%;
  background-color: ${(props) => props.theme.color.gray100};

  & > .question-box {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 910px;

    & > h1 {
      padding-left: 20px;
      font-size: 32px;
      line-height: 1.6;

      & > strong {
        font-weight: bold;
      }
    }
  }

  & .question-tips {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & .question-tip {
    display: flex;
    width: 100%;
    border-radius: 12px;
    background-color: ${(props) => props.theme.color.white};
    overflow: hidden;

    & > img {
      width: 445px;
      height: auto;
    }
  }

  & .question-tip-content {
    padding: 30px 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: column;
    }

    & h1 {
      font-size: 22px;
      font-weight: bold;
      line-height: 1.6;
      color: ${(props) => props.theme.color.gray500};

      & > span.icon {
        margin-right: 10px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.color.gray500};

        & path {
          fill: ${(props) => props.theme.color.white};
        }
      }
    }

    & span.description {
      margin-top: 30px;
      font-size: 18px;
      line-height: 1.6;
      color: ${(props) => props.theme.color.gray400};
    }

    & span.error {
      margin-top: 7px;
      display: flex;
      align-items: center;
      gap: 12px;
      color: ${(props) => props.theme.color.red};
      ${(props) => props.theme.typography.Body1};
    }

    & span.position {
      justify-self: flex-end;
      line-height: 1.6;
      color: ${(props) => props.theme.color.gray300};
    }
  }
`;

export const GuideHome = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 910px;

  & > .item {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;

    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }

    & > .content {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      gap: 20px;

      & > h1 {
        font-size: 24px;
        font-weight: bold;
        line-height: 1.6;
        color: ${(props) => props.theme.color.gray500};
      }

      & > .description {
        display: flex;
        flex-direction: column;
        gap: 6px;

        & span {
          display: flex;
          align-items: center;
          height: 30px;
          color: ${(props) => props.theme.color.gray400};
          white-space: nowrap;

          &.error {
            color: ${(props) => props.theme.color.red};
            ${(props) => props.theme.typography.Body3};
          }

          & > button {
            margin: 0 4px;
            padding: 6px 10px;
            border-radius: 8px;
            border: solid 1px ${(props) => props.theme.color.gray200};
            background-color: ${(props) => props.theme.color.white};
            color: ${(props) => props.theme.color.gray400};
            ${(props) => props.theme.typography.Caption1};
          }
        }

        & ul {
          padding-left: 20px;
          list-style: initial;

          & > li {
            line-height: 1.6;
            color: ${(props) => props.theme.color.gray400};
          }
        }
      }
    }
  }
`;

export const QuestionHome = styled.div`
  padding: 26px 0 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 9.32px;
  border-radius: 12px;
  background-color: #1e1e1e;

  & > .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    & > img {
      width: 205px;
      height: auto;
    }

    & > span {
      font-size: 10px;
      line-height: 1.6;
      color: ${(props) => props.theme.color.gray100};
    }
  }
`;
