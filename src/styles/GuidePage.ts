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
