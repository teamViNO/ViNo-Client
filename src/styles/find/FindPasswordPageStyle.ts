import styled from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1440px;
  width: 100%;
  min-height: 100vh;
  gap: 124px;
`;


export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 840px;
  margin-top: 300px;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  img {
    width: 64.55px;
    height: 20px;
    margin-bottom: 4px;
  }
  h3 {
    color: #1e1e1e;
    font-family: Pretendard;
    font-size: 36px;
    font-weight: bold;
    line-height: 160%;
    margin: 0;
  }
  p {
    color: #bbb;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    line-height: 160%;
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: auto;
`;


export const Label = styled.label`
  margin-bottom: 20px;
  span {
    font-size: 16px;
    color: #787878;
    font-family: Pretendard;
    margin-bottom: 8px;
    font-weight: 500;
    line-height: 160%;
  }
`;

export const TwoLabel = styled.label`
  display : flex;
  flex-direction : column;
  margin-bottom: 8px;
  span {
    font-size: 16px;
    font-family: Pretendard;
    margin-bottom: 8px;
    font-weight: 500;
    line-height: 160%;
  }
`;

export const InputBox = styled.input`
  display: flex;
  align-items: center;
  margin-bottom : 8px;
  justify-content: center;
  width: 494px;
  height: 56px;
  padding: 0px 0px 0px 20px;
  gap: 20px;
  flex: 1 0 0;
  font-size: 16px;
  font-style: normal;
  color: var(--Main, #1E1E1E);
  font-family: Pretendard;
  font-weight: 500;
  line-height: 160%;
  border-radius: 12px;
  border: 1.5px solid var(--gray-200, #e8e8e8);
  outline: none;
  
  &:hover {
    border: 1.5px solid #1e1e1e;
  }
  &:focus {
    border: 1.5px solid #1e1e1e;
    border-color: #1e1e1e;
  }
  &::placeholder {
    color: #bbb;

    ${theme.typography.Body1};
  }
`;

export const FindButton = styled.button`
  width: 494px;
  height: 56px;
  background: #1E1E1E;
  color: #EEEEEE;
  font-size: 16px;
  font-weight: 500;
  line-height: 160%;
  border-radius: 12px;
  border: none;
  font-family: Pretendard;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background-color : #F3F3F3;
    color : #BBBBBB;
  }
`;

export const TextTotalComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin: "0px";
`;

export const TextDiv = styled.div`
  color: ${(props) => props.color || "#1e1e1e"};
  text-transform: capitalize;
  font-size: 36px;
  font-weight: bold;
  font-style: normal;
  line-height: 160%; /* 57.6px */
  font-family: Pretendard;
  margin: "0px";
`;