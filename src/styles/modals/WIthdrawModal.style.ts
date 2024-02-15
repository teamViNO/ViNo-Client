import styled from 'styled-components';
import theme from '../theme';

const CommonButtonStyles = styled.button`
  cursor: pointer;
  width: 600px;
  padding: 15px 0px;
  border-radius: 12px;
  text-align: center;
  ${theme.typography.Body1}
`;

export const Title = styled.span`
  ${theme.typography.Header6}
  color: ${theme.color.gray500};
  margin: 12px 0;
`;

export const SubTitle = styled.span`
  ${theme.typography.Body1}
  color: ${theme.color.gray300};
  margin-bottom: 48px;
`;

export const SubmitButton = styled(CommonButtonStyles)`
  border: 0;
  color: ${theme.color.white};
  background-color: ${theme.color.gray500};
`;

export const SelectButton = styled(CommonButtonStyles)`
  border: 1.5px solid ${theme.color.gray200};
  color: ${theme.color.gray400};
  background-color: ${theme.color.white};
  margin-bottom: 12px;
  &.selected {
    border-color: ${theme.color.gray400};
  }
`;

export const EtcInputWrap = styled.div`
  transition: height 0.5s;
  height: 0;
  &.open {
    height: 68px;
  }
`;

export const EtcInput = styled.input`
  cursor: pointer;
  outline: none;
  width: 600px;
  padding: 15px;
  border-radius: 12px;
  border: 1.5px solid ${theme.color.gray200};
  color: ${theme.color.gray400};
  background-color: ${theme.color.white};
  margin-bottom: 12px;
  ${theme.typography.Body1}
`;
