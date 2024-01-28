import theme from '@/styles/theme';
import styled from 'styled-components';

export const CommonButtonStyles = styled.button`
  cursor: pointer;
  border: 0;
  padding: 16px 0px;
  width: 600px;
  border-radius: 12px;
  ${theme.typography.Body1};
`;

export const ModalTitle = styled.p`
  color: ${theme.color.gray500};
  ${theme.typography.Header6}
  margin: 12px 0px 8px;
`;

export const ModalMessage = styled.p`
  color: ${theme.color.gray300};
  ${theme.typography.Subheader2}
`;

export const DeleteButton = styled(CommonButtonStyles)`
  margin: 48px 0px 12px;
  background-color: ${theme.color.gray500};
  color: ${theme.color.white};
`;
export const CancelButton = styled(CommonButtonStyles)`
  background-color: ${theme.color.white};
  color: ${theme.color.gray400};
  border: 1px solid ${theme.color.gray200};
`;
