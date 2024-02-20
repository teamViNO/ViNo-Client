import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1440px;
  width: 100%;
  min-height: 100vh;
  gap: 124px;

  & .input-help {
    display: flex;
    gap: 4px;
    padding-left: 16px;
    padding-top: 8px;

    & > span {
      color: ${(props) => props.theme.color.gray300};
      transition: 0.1s;
      ${(props) => props.theme.typography.Body3};

      &.active {
        color: ${(props) => props.theme.color.gray500};
      }

      &.error {
        color: ${(props) => props.theme.color.red};
      }
    }
  }
`;

export const LogoSection = styled.div`
  img {
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
  margin-top: 95px;
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
  &::-webkit-scrollbar-thumb {
    height: 200px;
    background-color: #f3f3f3;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ffffff;
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
    cursor: pointer;
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

export const ThreeLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const PhoneInputBox = styled.input`
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
  color: var(--Main, #1e1e1e);
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

export const InputBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 494px;
  height: 56px;
  padding: 0px 0px 0px 20px;
  gap: 20px;
  flex: 1 0 0;
  font-style: normal;
  color: ${theme.color.gray500};
  font-family: Pretendard;
  ${theme.typography.Body1};
  border-radius: 12px;
  border: 1.5px solid ${theme.color.gray200};
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
    font-family: Pretendard;
    font-style: normal;
    ${theme.typography.Body1};
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
  color: var(--Main, #1e1e1e);
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
  color: var(--Main, #1e1e1e);
  font-family: Pretendard;
  font-weight: 500;
  line-height: 160%;
  margin-right: 8px;
  border-radius: 12px;
  border: 1.5px solid #e8e8e8;
  color: var(--Main, #1e1e1e);
  background: #fff;
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
  cursor: pointer;
  ${(props) =>
    props.selected &&
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

export const Avail = styled.p`
  color: #3681fe;
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

export const SucButton = styled.button`
  border-radius: 12px;
  background: #1e1e1e;
  color: #fff;
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
  cursor: pointer;
`;

export const DupSucButton = styled.button`
  border-radius: 12px;
  background: #e9ff3f;
  color: #1e1e1e;
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
  cursor: pointer;
  &:disabled {
    background-color: ${theme.color.gray100};
    color: ${theme.color.gray300};
    cursor: default;
  }
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

export const ModalDiv = styled.div`
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  border-radius: 20px;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.1);

  & h1.title {
    color: ${(props) => props.theme.color.gray500};
    ${(props) => props.theme.typography.Header6};
  }

  & span.description {
    color: ${(props) => props.theme.color.gray300};
    ${(props) => props.theme.typography.Body1};
  }
`;

export const RetryButton = styled.button((props) => ({
  width: '100%',
  height: 56,
  border: 'none',
  borderRadius: 12,
  backgroundColor: props.disabled
    ? props.theme.color.gray100
    : props.theme.color.gray500,
  textAlign: 'center',
  color: props.disabled ? props.theme.color.gray300 : props.theme.color.white,
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  transition: '0.2s',
  ...props.theme.typography.Body1,
}));

export const PwDiv = styled.div`
  font-size: 14px;
  margin-top: 8px;
  color: #3681fe;
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
  color: #bbb;
  font-weight: 500;
  line-height: 160%;
`;

export const UserButton = styled.button`
  width: 160px;
  height: 56px;
  color: #1e1e1e;
  background-color: ${theme.color.green400};
  border: none;
  border-radius: 12px;
  margin-top: 8px;
  ${theme.typography.Body1};
  &:disabled {
    background-color: ${theme.color.gray100};
    color: ${theme.color.gray300};
  }
`;

export const UserDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const SendMsg = styled.div`
  margin-left: 16px;
  margin-top: 8px;
  ${theme.typography.Body3};
  color: ${theme.color.red};
`;

export const CustomButton = styled.button`
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1e1e1e;
  border: none;
  border-radius: 12px;
`;
export const CalendarContainer = styled.div`
  .custom-inputSelected {
    background: #bbbbbb !important;
  }
  .react-datepicker {
    & select {
      border: none;
      color: #1e1e1e;
      font-weight: bold;
    }
    & button {
      border: none;
      border-radius: 8px;
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
            background-color: #fbffcc;
          }
        }
        .react-datepicker__day--today,
        .react-datepicker__day--keyboard-selected {
          border-radius: 18px;
          background-color: #e9ff3f;
          font-weight: 400;
        }
        .react-datepicker__day--selected,
        .react-datepicker__day--in-range,
        .react-datepicker__day--in-selecting-range {
          border-radius: 18px;
          background-color: #e9ff3f;
          color: black;
        }
      }
    }
  }

  .react-datepicker__aria-live,
  .react-datepicker__time-list-item—disabled,
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
  .react-datepicker__time-list-item—selected {
    background-color: #fff2b4 !important;
    color: black !important;
  }
`;
