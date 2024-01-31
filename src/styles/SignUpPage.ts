import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CustomButton = styled.button`
    width : 54px;
    height : 54px;
    display : flex;
    align-items: center;
    justify-content: center;
    background : #1E1E1E;
    border : none;
    border-radius : 12px;
`
export const CalendarContainer =  styled.div`
  .custom-inputSelected {
    background : #BBBBBB !important;
  }
  .react-datepicker {
    & select {
        border : none;
        color : #1E1E1E;
        font-weight: bold;
    }
    & button {
        border : none;
        border-radius : 8px;
    }
    .react-datepicker__month-container {
          .react-datepicker__header {
              background-color: white;
              border: none;
          }
          .react-datepicker__day-name {
              margin: 0px 7px 0px 7px;
          }
          .react-datepicker__month {
              .react-datepicker__day {
                  margin: 5px 7px 5px 7px;
                  &:hover {
                      border-radius: 18px;
                      background-color: #FBFFCC
                  }
              }
              .react-datepicker__day--today,
              .react-datepicker__day--keyboard-selected {
                  border-radius: 18px;
                  background-color: #E9FF3F;
                  font-weight: 400;
              }
              .react-datepicker__day--selected,
              .react-datepicker__day--in-range,
              .react-datepicker__day--in-selecting-range {
                  border-radius: 18px;
                  background-color: #E9FF3F;
                  color: black;
              }
          }
      }
  }

    .react-datepicker__aria-live,
    .react-datepicker__time-list-item--disabled,
    .react-datepicker-time__header {
        display: none;
    }

    .react-datepicker__time-container {
        overflow-y: scroll;
        height: 100px;
        cursor: pointer;
    }
    .react-datepicker__input-container > input,
    .react-datepicker__time-container {
        width: 80px;
        background-color: #f9f9f9;
        outline: none;
        text-align: center;
        overflow-x: hidden;
    }
    .react-datepicker__time-list-item--selected {
        background-color: #fff2b4 !important;
        color: black !important;
    }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1440px;
  width: 100%;
  min-height: 100vh;
  gap: 124px;
`;

export const LogoSection = styled.div`
  img{
    display: flex;
    width: auto;
    height: 840px;
  }
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 580px;
  height: 896px;
  margin-top: 128px;
`;
export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 580px;
  height: auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb{
    height: 200px;
    background-color:#f3f3f3;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-track{
    background-color:#ffffff;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
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
    margin-top: 8px;
    line-height: 160%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 494px;
  height: auto;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  margin-bottom: 40px;
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
  display: flex;
  flex-direction: row;
`;

export const InputBox = styled.input`
  display: flex;
  align-items: center;
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
  margin-top: 8px;
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

    /* Body1 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
  }
`;

export const EmailInputBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 326px;
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
  border: 1.5px solid var(--gray-200, #e8e8e8) ;
  margin-top: 8px;
  outline: none;
  &:hover {
    border: 1.5px solid #1e1e1e;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #bbb;

    /* Body1 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
  }
`;

export const BirthInputSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  img {
    width: 56px;
    height: 56px;
  }
`;

export const BirthInputBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 138px;
  height: 56px;
  padding: 24px 20px;
  gap: 20px;
  flex: 1 0 0;
  font-size: 16px;
  font-style: normal;
  color: var(--Main, #1E1E1E);
  font-family: Pretendard;
  font-weight: 500;
  line-height: 160%;
  margin-right: 8px;
  border-radius: 12px;
  border: 1.5px solid #e8e8e8;
  color: var(--Main, #1E1E1E);
  background: #fff;
  outline : none;
  cursor: default;
  &::placeholder {
    color: #bbb;

    /* Body1 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
  }
  & :hover {
    
  }
`;


export const SexSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export const SexButton = styled.button<{ selected: boolean }>`
  width: 158px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1.5px solid #e8e8e8;
  background: #fff;
  color: #787878;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 160%;
  margin-right: 10px;
  ${(props) => props.selected &&
    `
      background: #1e1e1e;
      color: #fff;
      border: none;
    `}
`;


export const Error = styled.p`
  color: #eb5353;
  font-size: 14px;
  font-weight: 500;
  margin-top: 8px;
  padding-left: 16px;
  line-height: 160%;
`;

export const ButtonSection = styled.div`
  width: 494px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 0px 52px 0px;
`;

export const Button = styled.button`
  border-radius: 12px;
  background: #f3f3f3;
  color: #bbb;
  display: flex;
  width: 494px;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  font-family: Pretendard;
  padding: 16px 24px;
  line-height: 160%;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const DupSucButton = styled.button`
  border-radius: 12px;
  background: #E9FF3F;
  color: #1E1E1E;
  display: flex;
  margin-top: 8px;
  margin-left: 8px;
  width: 160px;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  font-family: Pretendard;
  padding: 16px 24px;
  line-height: 160%;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const DupButton = styled.button`
  border-radius: 12px;
  background: #f3f3f3;
  color: #bbb;
  display: flex;
  margin-top: 8px;
  margin-left: 8px;
  width: 160px;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  font-family: Pretendard;
  padding: 16px 24px;
  line-height: 160%;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const PwDiv = styled.div`
   font-size: 14px;
   margin-top: 8px;
   color:#3681FE;
   font-weight: 500;
   line-height: 160%;
   padding-left: 16px;
`;


export const TextTotalComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px 0px 0px;
`;

export const TextDiv = styled.div`
   font-size: 14px;
   color:#BBB;
   font-weight: 500;
   line-height: 160%;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.gray500};
  text-align: center;
  text-decoration: none;
  font-size: 14px; 
  font-weight: 500;
  line-height: 160%;
  margin : 0px 0px 0px 10px;
`;