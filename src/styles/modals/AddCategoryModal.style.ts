import styled from 'styled-components';
import theme from '../theme';

export const Title = styled.h1`
  ${theme.typography.Header6};
  color: ${theme.color.gray500};
  margin: 12px 0px;
`;

export const SubTitle = styled.h2`
  ${theme.typography.Body1};
  color: ${theme.color.gray300};
`;

export const InputCategoryNameWrap = styled.div<{ focused: string }>`
  width: 600px;
  padding: 15px 20px;
  background-color: ${theme.color.gray100};
  border: 2px solid
    ${(props) =>
      JSON.parse(props.focused) ? theme.color.gray500 : theme.color.gray100};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 48px 0px 12px 0px;
`;

export const InputCategoryName = styled.input`
  width: 80%;
  border: 0;
  outline: none;
  color: ${theme.color.gray500};
  background-color: rgba(0, 0, 0, 0);
  ${theme.typography.Subheader2};

  &::placeholder {
    color: ${theme.color.gray300};
  }
`;

export const InputCategoryNameMessage = styled.span`
  ${theme.typography.Caption1};
  color: ${theme.color.gray300};
`;

export const InputCategoryNameLength = styled.span<{
  category_name_length: number;
}>`
  color: ${(props) =>
    props.category_name_length > 0 ? theme.color.gray500 : theme.color.gray300};
`;

export const AddButton = styled.button<{ add_enabled: string }>`
  cursor: ${(props) => JSON.parse(props.add_enabled) && 'pointer'};
  width: 600px;
  padding: 15px 0px;
  border-radius: 12px;
  border: 0;
  color: ${(props) =>
    JSON.parse(props.add_enabled) ? theme.color.white : theme.color.gray300};
  background-color: ${(props) =>
    JSON.parse(props.add_enabled) ? theme.color.gray500 : theme.color.gray100};
  ${theme.typography.Body1}
`;

export const WarningMessage = styled.span`
  align-self: flex-start;
  margin: 0px 0px 12px 16px;
  color: ${theme.color.red};
  ${theme.typography.Body3}
`;
