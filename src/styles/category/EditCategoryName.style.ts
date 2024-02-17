import styled from 'styled-components';
import theme from '../theme';

export const EditNameInputWrap = styled.div`
  display: flex;
  padding: 10px 20px;
  border: 1px solid ${theme.color.gray200};
  width: 100%;
  border-radius: 100px;
  &.warning {
    border: 1px solid ${theme.color.red};
  }

  &.sub-category {
    padding: 10px 0 10px 60px;
  }
`;

export const EditNameInput = styled.input`
  outline: none;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 10px;
  ${theme.typography.Body1}

  &.sub-category {
    padding: 0;
    margin: 0px 0px 4px -1px;
    ${theme.typography.Body3}
  }
`;
